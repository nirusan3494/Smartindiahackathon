export type Language = 'en' | 'hi' | 'pa' | 'te';

export interface Translations {
  // Header
  selectLanguage: string;
  visionX: string;
  trustedBy: string;
  patientsServed: string;
  
  // Navigation
  home: string;
  dashboard: string;
  consultations: string;
  records: string;
  medicines: string;
  symptoms: string;
  
  // Welcome Section
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeDescription: string;
  
  // Features
  features: string;
  videoConsultation: string;
  videoConsultationDesc: string;
  healthRecords: string;
  healthRecordsDesc: string;
  medicineAvailability: string;
  medicineAvailabilityDesc: string;
  symptomChecker: string;
  symptomCheckerDesc: string;
  offlineAccess: string;
  offlineAccessDesc: string;
  multiLanguage: string;
  multiLanguageDesc: string;
  
  // Auth Forms
  login: string;
  register: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  village: string;
  userType: string;
  patient: string;
  doctor: string;
  loginButton: string;
  registerButton: string;
  forgotPassword: string;
  
  // Common
  submit: string;
  cancel: string;
  save: string;
  edit: string;
  delete: string;
  loading: string;
  error: string;
  success: string;
  
  // Dashboard
  welcomeDashboard: string;
  upcomingConsultations: string;
  recentRecords: string;
  availableMedicines: string;
  healthTips: string;
  
  // Consultation
  bookConsultation: string;
  selectDoctor: string;
  selectTime: string;
  describeSymptoms: string;
  emergencyConsultation: string;
  
  // Footer
  aboutUs: string;
  contactUs: string;
  privacyPolicy: string;
  termsOfService: string;
  helpSupport: string;
}