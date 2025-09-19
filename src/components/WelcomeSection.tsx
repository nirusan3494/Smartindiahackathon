'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Video, 
  FileText, 
  Pill, 
  Brain, 
  Wifi, 
  Globe,
  Clock,
  CheckCircle,
  MapPin
} from 'lucide-react';

export function WelcomeSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Video,
      title: t.videoConsultation,
      description: t.videoConsultationDesc,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: FileText,
      title: t.healthRecords,
      description: t.healthRecordsDesc,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Pill,
      title: t.medicineAvailability,
      description: t.medicineAvailabilityDesc,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Brain,
      title: t.symptomChecker,
      description: t.symptomCheckerDesc,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Wifi,
      title: t.offlineAccess,
      description: t.offlineAccessDesc,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
    {
      icon: Globe,
      title: t.multiLanguage,
      description: t.multiLanguageDesc,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  const stats = [
    { number: '173', label: 'Villages Connected', icon: MapPin },
    { number: '10,000+', label: 'Patients Served', icon: CheckCircle },
    { number: '24/7', label: 'Emergency Support', icon: Clock },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.welcomeTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.welcomeSubtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.welcomeDescription}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t.features}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Problem Statement Highlight */}
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-medical-red">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Addressing Rural Healthcare Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Only 11/23 sanctioned doctors at Nabha Civil Hospital</li>
                <li>• Long travel distances for 173 villages</li>
                <li>• Limited internet access (31% rural households)</li>
                <li>• Medicine stock unavailability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Our Solutions:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Remote video consultations</li>
                <li>• Offline-accessible health records</li>
                <li>• Real-time medicine availability</li>
                <li>• AI-powered preliminary diagnosis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}