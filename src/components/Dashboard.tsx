'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Video, 
  FileText, 
  Pill, 
  Brain, 
  Calendar,
  Clock,
  User,
  Activity,
  AlertCircle
} from 'lucide-react';

export function Dashboard() {
  const { t } = useLanguage();

  const quickActions = [
    {
      icon: Video,
      title: t.bookConsultation,
      description: 'Schedule video consultation',
      color: 'bg-blue-500',
      href: '/book-consultation'
    },
    {
      icon: Brain,
      title: t.symptomChecker,
      description: 'AI-powered symptom analysis',
      color: 'bg-orange-500',
      href: '/symptom-checker'
    },
    {
      icon: Pill,
      title: t.medicineAvailability,
      description: 'Check medicine stock',
      color: 'bg-purple-500',
      href: '/medicines'
    },
    {
      icon: FileText,
      title: t.healthRecords,
      description: 'View medical history',
      color: 'bg-green-500',
      href: '/health-records'
    }
  ];

  const upcomingAppointments = [
    {
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      date: '2024-09-20',
      time: '10:00 AM',
      type: 'Video Consultation'
    },
    {
      doctor: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      date: '2024-09-22',
      time: '2:30 PM',
      type: 'Follow-up'
    }
  ];

  const recentActivity = [
    {
      action: 'Consultation completed',
      doctor: 'Dr. Rajesh Kumar',
      date: '2024-09-15',
      status: 'completed'
    },
    {
      action: 'Prescription uploaded',
      doctor: 'Dr. Priya Sharma',
      date: '2024-09-14',
      status: 'new'
    },
    {
      action: 'Health record updated',
      doctor: 'System',
      date: '2024-09-13',
      status: 'info'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t.welcomeDashboard}
          </h1>
          <p className="text-gray-600">
            Access your healthcare services and manage your health journey.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => console.log(`Navigate to ${action.href}`)}
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {action.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Consultations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                {t.upcomingConsultations}
              </h2>
            </div>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                    <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        {appointment.date} at {appointment.time}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {appointment.type}
                  </span>
                </div>
              ))}
              {upcomingAppointments.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No upcoming consultations scheduled
                </p>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-5 h-5 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                    activity.status === 'completed' ? 'bg-green-500' :
                    activity.status === 'new' ? 'bg-blue-500' : 'bg-gray-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">by {activity.doctor}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">{t.healthTips}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Stay Hydrated</h4>
              <p className="text-blue-800 text-sm">Drink at least 8 glasses of water daily for better health.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Regular Exercise</h4>
              <p className="text-green-800 text-sm">30 minutes of daily exercise keeps you healthy and active.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Mental Health</h4>
              <p className="text-purple-800 text-sm">Practice meditation and stress management techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}