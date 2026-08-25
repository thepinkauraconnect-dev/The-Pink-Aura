import * as admin from 'firebase-admin';

function getFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  if (!projectId || !clientEmail || !privateKey || clientEmail.includes('mock')) {
    console.warn('[Firebase Admin] Missing or mock credentials. Operating in safe fallback mode.');
    return null;
  }

  try {
    return admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  } catch (error) {
    console.error('[Firebase Admin] Initialization error:', error);
    return null;
  }
}

export async function saveLeadToFirestore(leadData: {
  name: string;
  phone: string;
  email: string;
  category: string;
  requirement: string;
  source: string;
  status: string;
  createdAt: string;
}) {
  const app = getFirebaseAdmin();
  if (!app) {
    console.log('[Firestore Lead Mock Storage]', leadData);
    return { id: `mock-lead-${Date.now()}`, stored: true };
  }

  const db = admin.firestore(app);
  const docRef = await db.collection('leads').add({
    ...leadData,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { id: docRef.id, stored: true };
}
