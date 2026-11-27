#!/usr/bin/env bash
# Encode hero videos into adaptive HLS (480p + 720p), strip audio, extract a poster.
# Usage: bash scripts/encode-videos.sh   (requires ffmpeg)
# Source MP4s are read from public/Videos/Hero_section_videos and removed afterwards
# (pass --keep to keep them).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT/public/Videos/Hero_section_videos"
OUT_ROOT="$ROOT/public/Videos/hls"
KEEP=${1:-}

mkdir -p "$OUT_ROOT"

for src in "$SRC_DIR"/*.mp4; do
  [ -e "$src" ] || continue
  name="$(basename "$src" .mp4)"
  # normalise e.g. hero__display_3 -> hero_display_3
  name="${name//__/_}"
  out="$OUT_ROOT/$name"
  rm -rf "$out"
  mkdir -p "$out/480p" "$out/720p"
  echo "==> Encoding $name"

  ffmpeg -hide_banner -loglevel error -y -i "$src" \
    -filter_complex "[0:v]fps=25,split=2[a][b];[a]scale=-2:480[v480];[b]scale=-2:720[v720]" \
    -map "[v480]" -c:v:0 libx264 -profile:v:0 main -preset slow -crf 26 -maxrate:v:0 700k -bufsize:v:0 1400k \
    -map "[v720]" -c:v:1 libx264 -profile:v:1 high -preset slow -crf 25 -maxrate:v:1 1400k -bufsize:v:1 2800k \
    -pix_fmt yuv420p -g 100 -keyint_min 100 -sc_threshold 0 -an \
    -f hls -hls_time 4 -hls_playlist_type vod -hls_flags independent_segments \
    -hls_segment_filename "$out/%v/seg_%03d.ts" \
    -master_pl_name master.m3u8 \
    -var_stream_map "v:0,name:480p v:1,name:720p" \
    "$out/%v/index.m3u8"

  # Poster from the first second
  ffmpeg -hide_banner -loglevel error -y -ss 0.5 -i "$src" -frames:v 1 \
    -vf "scale=1280:-2" -c:v libwebp -quality 70 "$out/poster.webp"

  echo "    -> $(du -sh "$out" | cut -f1)"
done

if [ "$KEEP" != "--keep" ]; then
  rm -f "$SRC_DIR"/*.mp4
  rmdir "$SRC_DIR" 2>/dev/null || true
fi

echo "Done. Total: $(du -sh "$OUT_ROOT" | cut -f1)"
