
export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  image: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  city: string;
  mapUrl: string;
  phone: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'patient' | 'doctor';
}
