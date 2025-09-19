'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/translations';
import { Language } from '@/types/translations';
import { ChevronDown, Heart, Shield, Users, CheckCircle } from 'lucide-react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label={t.selectLanguage}
            >
              <span className="text-xs">🌐</span>
              <span className="hidden sm:block">{currentLanguage?.nativeName}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    {language === lang.code && <CheckCircle className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Center: Vision X Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-md">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900 tracking-wide">
                {t.visionX}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                {t.patientsServed}
              </p>
            </div>
          </div>

          {/* Right: Trust Indicators */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs">Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-xs">Verified</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-xs font-medium text-green-600">
                ✓ {t.trustedBy}
              </p>
              <p className="text-xs text-gray-500 hidden sm:block">
                Nabha Civil Hospital
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Trust Indicators */}
      <div className="md:hidden bg-gray-50 px-4 py-2 border-t border-gray-200">
        <div className="flex justify-center items-center space-x-6 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Shield className="w-3 h-3 text-green-600" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3 text-blue-600" />
            <span>Verified</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3 text-red-600" />
            <span>Trusted</span>
          </div>
        </div>
      </div>
    </header>
  );
}