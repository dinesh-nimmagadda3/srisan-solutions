export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  website: string;
  csrf_token: string;
  form_time: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface FormTouched {
  name?: boolean;
  email?: boolean;
  company?: boolean;
  phone?: boolean;
  message?: boolean;
}
