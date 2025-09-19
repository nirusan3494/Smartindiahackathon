# API Documentation

## Overview

This document outlines the API structure for Vision X Telemedicine. Currently, the application is frontend-only, but this documentation provides the planned API endpoints for future backend integration.

## Authentication Endpoints

### POST /api/auth/register

Register a new user (patient or doctor).

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "userType": "patient | doctor",
  "village": "string", // Required for patients
  "specialization": "string", // Required for doctors
  "licenseNumber": "string" // Required for doctors
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string",
    "userType": "patient | doctor",
    "profile": {
      "village": "string",
      "phoneNumber": "string"
    }
  },
  "token": "jwt_token"
}
```

### POST /api/auth/login

Authenticate user login.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string",
    "userType": "patient | doctor"
  },
  "token": "jwt_token"
}
```

## User Profile Endpoints

### GET /api/user/profile

Get current user profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string",
    "phoneNumber": "string",
    "userType": "patient | doctor",
    "village": "string",
    "createdAt": "timestamp",
    "lastLogin": "timestamp"
  }
}
```

### PUT /api/user/profile

Update user profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "fullName": "string",
  "phoneNumber": "string",
  "village": "string"
}
```

## Consultation Endpoints

### GET /api/consultations

Get user's consultations.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `status`: "scheduled | completed | cancelled"
- `page`: number
- `limit`: number

**Response:**
```json
{
  "success": true,
  "consultations": [
    {
      "id": "string",
      "patientId": "string",
      "doctorId": "string",
      "scheduledAt": "timestamp",
      "status": "scheduled | in-progress | completed | cancelled",
      "symptoms": "string",
      "diagnosis": "string",
      "prescription": "string",
      "doctor": {
        "fullName": "string",
        "specialization": "string"
      }
    }
  ],
  "pagination": {
    "total": number,
    "page": number,
    "pages": number
  }
}
```

### POST /api/consultations

Book a new consultation.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "doctorId": "string",
  "scheduledAt": "timestamp",
  "symptoms": "string",
  "priority": "normal | urgent | emergency"
}
```

**Response:**
```json
{
  "success": true,
  "consultation": {
    "id": "string",
    "patientId": "string",
    "doctorId": "string",
    "scheduledAt": "timestamp",
    "status": "scheduled",
    "symptoms": "string",
    "bookingId": "string"
  }
}
```

## Doctor Endpoints

### GET /api/doctors

Get list of available doctors.

**Query Parameters:**
- `specialization`: string
- `available`: boolean
- `page`: number
- `limit`: number

**Response:**
```json
{
  "success": true,
  "doctors": [
    {
      "id": "string",
      "fullName": "string",
      "specialization": "string",
      "experience": number,
      "rating": number,
      "availability": {
        "monday": ["09:00", "17:00"],
        "tuesday": ["09:00", "17:00"]
      },
      "isAvailable": boolean
    }
  ]
}
```

### GET /api/doctors/:id/slots

Get available time slots for a doctor.

**Parameters:**
- `id`: Doctor ID

**Query Parameters:**
- `date`: "YYYY-MM-DD"

**Response:**
```json
{
  "success": true,
  "availableSlots": [
    {
      "time": "HH:MM",
      "isAvailable": boolean
    }
  ]
}
```

## Health Records Endpoints

### GET /api/health-records

Get patient's health records.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "records": [
    {
      "id": "string",
      "consultationId": "string",
      "date": "timestamp",
      "doctor": "string",
      "diagnosis": "string",
      "prescription": "string",
      "vitals": {
        "bloodPressure": "string",
        "temperature": "string",
        "weight": "string"
      },
      "attachments": ["string"]
    }
  ]
}
```

### POST /api/health-records

Add new health record entry.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "consultationId": "string",
  "diagnosis": "string",
  "prescription": "string",
  "vitals": {
    "bloodPressure": "string",
    "temperature": "string",
    "weight": "string"
  }
}
```

## Medicine Availability Endpoints

### GET /api/medicines

Get medicine availability in local pharmacies.

**Query Parameters:**
- `location`: string (village/area)
- `search`: string (medicine name)

**Response:**
```json
{
  "success": true,
  "medicines": [
    {
      "id": "string",
      "name": "string",
      "genericName": "string",
      "manufacturer": "string",
      "availability": [
        {
          "pharmacyId": "string",
          "pharmacyName": "string",
          "address": "string",
          "distance": "string",
          "price": number,
          "stock": number,
          "lastUpdated": "timestamp"
        }
      ]
    }
  ]
}
```

### GET /api/pharmacies

Get list of nearby pharmacies.

**Query Parameters:**
- `village`: string
- `radius`: number (in km)

**Response:**
```json
{
  "success": true,
  "pharmacies": [
    {
      "id": "string",
      "name": "string",
      "address": "string",
      "phoneNumber": "string",
      "coordinates": {
        "lat": number,
        "lng": number
      },
      "distance": "string",
      "isOpen": boolean,
      "hours": {
        "monday": "09:00-21:00",
        "tuesday": "09:00-21:00"
      }
    }
  ]
}
```

## AI Symptom Checker Endpoints

### POST /api/symptom-checker

Analyze symptoms using AI.

**Request Body:**
```json
{
  "symptoms": ["string"],
  "age": number,
  "gender": "male | female",
  "medicalHistory": ["string"]
}
```

**Response:**
```json
{
  "success": true,
  "analysis": {
    "possibleConditions": [
      {
        "condition": "string",
        "probability": number,
        "severity": "low | medium | high",
        "description": "string"
      }
    ],
    "recommendations": ["string"],
    "urgency": "low | medium | high | emergency",
    "suggestedActions": ["string"]
  }
}
```

## Emergency Endpoints

### POST /api/emergency/consultation

Request emergency consultation.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "symptoms": "string",
  "severity": "high | critical",
  "location": "string"
}
```

**Response:**
```json
{
  "success": true,
  "consultation": {
    "id": "string",
    "priority": "emergency",
    "estimatedWaitTime": "string",
    "assignedDoctor": {
      "id": "string",
      "name": "string",
      "contact": "string"
    }
  }
}
```

## WebRTC Video Consultation Endpoints

### POST /api/video/room

Create video consultation room.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "consultationId": "string"
}
```

**Response:**
```json
{
  "success": true,
  "room": {
    "id": "string",
    "token": "string",
    "expires": "timestamp"
  }
}
```

## Error Responses

All endpoints may return error responses in this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details"
  }
}
```

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Rate Limiting

API endpoints are rate limited to prevent abuse:
- Authentication endpoints: 5 requests per minute
- General endpoints: 100 requests per minute
- Emergency endpoints: No rate limiting

## Data Models

### User Types
- `patient`: Regular patients from villages
- `doctor`: Medical practitioners from Nabha Civil Hospital

### Consultation Status
- `scheduled`: Future appointment
- `in-progress`: Currently ongoing
- `completed`: Finished consultation
- `cancelled`: Cancelled appointment

### Priority Levels
- `normal`: Regular consultation
- `urgent`: Needs attention within hours
- `emergency`: Immediate attention required