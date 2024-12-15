# eWakili - Legal Practice Management System

A modern, full-featured legal practice management system built with React, TypeScript, and TailwindCSS. This system helps law firms manage cases, documents, clients, and billing efficiently.

## 🚀 Project Overview

eWakili is a comprehensive legal practice management solution that includes:

### 🔑 Core Features

1. **User Management & Authentication**
   - Multi-role support (Admin, Lawyer, Paralegal, Client, Staff)
   - Secure authentication system
   - User profile management

2. **Case Management**
   - Case tracking and organization
   - Document management
   - Court dates and deadlines
   - Case notes and updates

3. **Client Portal**
   - Client dashboard
   - Document sharing
   - Billing and payment history
   - Message center

4. **Document Management**
   - Document templates
   - Version control
   - Secure file storage
   - Document categorization

5. **Billing & Invoicing**
   - Invoice generation
   - Payment tracking
   - Financial reporting
   - Multiple payment methods

6. **Calendar & Tasks**
   - Event scheduling
   - Task assignment
   - Deadline tracking
   - Court date management

7. **AI Integration**
   - AI-powered chat assistance
   - Document analysis
   - Smart suggestions

### 🏗️ Technical Architecture

#### Frontend Structure
```
src/
├── components/
│   ├── admin/        # Administrative features
│   ├── ai/           # AI integration components
│   ├── auth/         # Authentication components
│   ├── client/       # Client portal components
│   ├── layout/       # Layout components
│   ├── templates/    # Document template components
│   └── ui/           # Reusable UI components
├── pages/
│   ├── admin/        # Admin pages
│   ├── auth/         # Authentication pages
│   ├── client/       # Client portal pages
│   └── ai/           # AI feature pages
├── store/            # State management
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
└── config/           # Configuration files
```

#### Database Schema
- Users and authentication
- Client management
- Case tracking
- Document management
- Billing and payments
- Calendar events
- Task management
- System settings

## 🛠️ Technology Stack

- **Frontend:**
  - React 18.3
  - TypeScript
  - TailwindCSS
  - Vite
  - Zustand (State Management)

- **Development Tools:**
  - ESLint
  - PostCSS
  - Git

## 🚀 Getting Started

1. **Prerequisites**
   - Node.js (v14 or higher)
   - XAMPP (for local development)
   - Git

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/MuiaN/eWakili.git

   # Navigate to project directory
   cd eWakili

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Database Setup**
   - Start XAMPP
   - Import `database_setup.sql`
   - Configure database connection

## 🔄 Current Status

- ✅ Project structure setup
- ✅ Component architecture defined
- ✅ Database schema designed
- ✅ Basic UI components created
- ✅ Authentication flow structured
- ✅ Client portal layout
- ✅ Admin dashboard framework

## 📝 Next Steps

1. **Backend Integration**
   - Set up API endpoints
   - Implement authentication
   - Database connection
   - File storage system

2. **Feature Implementation**
   - Complete authentication flow
   - Document management system
   - Case management features
   - Billing system
   - Calendar integration

3. **Testing & Deployment**
   - Unit testing
   - Integration testing
   - Production deployment
   - Performance optimization

## 👥 Contributing

This is a private repository. Please contact the repository owner for contribution guidelines.

## 📄 License

Private and Confidential - All rights reserved

---

For more information or support, contact: admin@ewakili.com 