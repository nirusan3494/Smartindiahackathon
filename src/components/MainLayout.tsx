'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from './Header';
import { WelcomeSection } from './WelcomeSection';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export function MainLayout() {
  const { t } = useLanguage();
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section: Welcome Content */}
        <WelcomeSection />
        
        {/* Right Section: Authentication Forms */}
        <div className="w-full lg:w-1/3 bg-white border-l border-gray-200 p-6 lg:p-8">
          <div className="max-w-md mx-auto">
            {/* Form Toggle Buttons */}
            <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
              <button
                onClick={() => setActiveForm('login')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeForm === 'login'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.login}
              </button>
              <button
                onClick={() => setActiveForm('register')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeForm === 'register'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.register}
              </button>
            </div>

            {/* Form Content */}
            <div className="transition-all duration-300">
              {activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
            </div>

            {/* Additional Information */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Need Help?</h4>
              <p className="text-sm text-blue-800 mb-3">
                For assistance, contact Nabha Civil Hospital or visit our help center.
              </p>
              <div className="text-xs text-blue-600 space-y-1">
                <p>📞 Emergency: 102 (Punjab Health Helpline)</p>
                <p>🏥 Hospital: +91-1765-223456</p>
                <p>💬 WhatsApp Support: +91-9876543210</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Government Approved</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.visionX}</h3>
              <p className="text-gray-400 text-sm">
                Connecting rural communities with quality healthcare through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.aboutUs}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.contactUs}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.helpSupport}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{t.videoConsultation}</li>
                <li>{t.healthRecords}</li>
                <li>{t.medicineAvailability}</li>
                <li>{t.symptomChecker}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.privacyPolicy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.termsOfService}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vision X Telemedicine. Built for Nabha Civil Hospital & Rural Communities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}