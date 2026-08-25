export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  category: string;
  requirement: string;
  honeypot?: string; // Spam protection
}

export interface LeadRecord extends LeadFormData {
  id?: string;
  status: 'new' | 'contacted' | 'scheduled' | 'archived';
  createdAt: string; // ISO date string or Firestore Timestamp
  source: 'website';
  updatedAt?: string;
}

export interface LeadActionResult {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    category?: string;
    requirement?: string;
    general?: string;
  };
}
