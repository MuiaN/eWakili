Follow these instructions closely:





/**
 * LEGAL PRACTICE MANAGEMENT PLATFORM SETUP PROMPT
 *
 * This blueprint sets up a modern legal practice management platform based on the described requirements.
 * It integrates Supabase for authentication and database management. The implementation uses React.js (with TypeScript),
 * Vite, TailwindCSS, and Zustand for state management.
 *
 * SYSTEM REQUIREMENTS:
 * - Multi-role authentication (Admin, Staff, Client)
 * - Modular, department-based design
 * - Integration with Supabase for backend services
 * - Fully functional UI components with CRUD operations
 * - Responsive, role-specific dashboards
 */

// Step 1: Initialize Supabase Client
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rklkfyknnctczozvayzl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbGtmeWtubmN0Y3pvenZheXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMzU5NjIsImV4cCI6MjA1MDgxMTk2Mn0.kM4fuAcn-Y1o4ghx3XpxGuq5RWYfHUy-B-jxLfgUnl0';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

# Full Blueprint for Legal Practice Management Platform with Supabase Integration

## 1. **Project Setup & Architecture**

### **Core Technology Stack**
- **Frontend**: React 18.3 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Routing**: React Router
- **Icons**: Lucide React

### **Project Structure**
```
src/
├── components/
│   ├── admin/        # Admin-specific components
│   ├── client/       # Client portal components
│   ├── layout/       # Layout components (DashboardLayout, Sidebars)
│   ├── shared/       # Shared components
│   └── ui/           # Reusable UI components
├── pages/
│   ├── admin/        # Admin pages
│   ├── auth/         # Authentication pages
│   ├── client/       # Client portal pages
│   ├── staff/        # Staff pages
│   └── shared/       # Shared pages
├── store/            # State management
├── hooks/            # Custom React hooks
├── types/            # TypeScript definitions
└── utils/            # Utility functions
```

2. Implemented Features

Authentication & User Management

Multi-role authentication system (Admin, Staff, Client).

Login/Signup flows with Supabase Auth.

Company setup and onboarding process.

Role-based access control.

User profile management.

Admin Dashboard Features

Core Administration

User Management with filtering, search, and role assignment.

System Settings configuration.

Access Control and permissions.

System Health monitoring.

Audit Logging.

Document Management

Document Templates system.

Version control for document edits.

Secure storage and categorized documents.

Communication System

Internal messaging system.

Email template management.

Automated notifications for deadlines and updates.

Client-staff communication module.

System Monitoring

Real-time health monitoring of resources.

Performance analytics.

Storage usage tracking.

Backup system management.

Staff Dashboard Features

Case management interface with full CRUD.

Client management with detailed profiles.

Document handling (upload/download templates).

Calendar and scheduling for tasks and events.

Billing management with tracking and invoicing.

AI assistance integration for document suggestions.

Client Portal Features

Case tracking and updates for clients.

Secure document access and sharing.

Billing and payment history overview.

Message center for direct communication.

Deadline tracking with alerts.

Support ticketing system.

Subscription System

Three-tier pricing model:

Starter: $49/month

Professional: $199/month

Enterprise: $499/month

Feature-based access control.

User limit enforcement.

UI/UX Implementation

Layout System

Responsive dashboard layouts.

Role-specific sidebars for navigation.

Modern, clean interface with consistent styling.

Reusable Components

Navigation

Dynamic sidebar navigation.

Header with user menu.

Breadcrumb navigation.

UI Elements

Custom buttons and inputs.

Data tables with sorting and filtering.

Modal dialogs for interactions.

Form components with validation.

Status indicators for tasks and cases.

Dashboard Widgets

Statistics cards for KPIs.

Activity feeds.

Quick action buttons.

System status indicators.

Security Features

Role-based permissions enforced through Supabase.

Audit logging for sensitive actions.

Compliance monitoring with GDPR and local regulations.

Secure document access with Supabase Storage.

Session management with JWT-based tokens.

3. Pages to Be Created

Authentication Pages

Login

Supabase authentication integration.

Support for email/password and OAuth (Google, etc.).

Signup

Multi-step form for user registration.

Role-based account creation.

Forgot Password

Email-based password reset functionality.

Integration with Supabase’s password recovery APIs.

Admin Pages

Dashboard

Widgets for user stats, recent activity, and storage usage.

User Management

Add/Edit/Delete users.

Assign roles and permissions.

Search and filter functionality.

System Settings

Configure global application settings.

Manage email and notification templates.

Audit Logs

View detailed logs of user actions.

Search and filter logs by action type or user.

Billing Management

Manage subscription plans.

View payment history for users.

Generate reports for revenue tracking.

Notification Center

Manage system-wide notifications.

Create, edit, and delete notifications.

Track notification delivery statuses.

Backup Management

Schedule automatic backups.

Monitor backup statuses.

Restore data from backups.

Staff Pages

Case Management

List of all cases with search and filter.

Detailed case view with related documents and tasks.

Document Management

Upload, edit, and delete document templates.

Generate documents using client data.

Calendar

Integration with Google Calendar.

View schedules and deadlines.

Billing

Track billable hours and generate invoices.

Integration with QuickBooks Online.

Task Management

Assign and track staff tasks.

View task progress and deadlines.

Generate reports on task completion.

Performance Metrics

Monitor key performance indicators for staff.

Generate performance reports.

Provide feedback and recommendations.

Client Pages

Case Overview

List of active and past cases.

Progress tracking for ongoing cases.

Billing History

View paid and pending invoices.

Download invoice receipts.

Support

Raise and track support tickets.

Chat system for communication with staff.

Document Sharing

Upload documents for staff review.

Track document approval statuses.

Download shared documents.

Subscription Management

Upgrade or downgrade subscription plans.

View current plan details.

Manage payment methods.

Shared Pages

404 Error Page

Friendly message and link back to dashboard.

Profile Settings

Edit user profile and change password.

Help Center

Access FAQs and support documentation.

Submit queries to support staff.

Track the status of raised issues.

4. Supabase Integration

Database Schema

1. Users Table
id: UUID (primary key).
email: String (unique).
password: String (hashed).
role: Enum (Admin, Staff, Client).
created_at: Timestamp.
updated_at: Timestamp.
Relationships:

Primary relationship with all role-based entities (Admin, Staff, Clients).
Users has a one-to-many relationship with Cases (Users.id → Cases.assigned_to).
Users has a one-to-many relationship with Notifications, Audit Logs, Support Tickets, Tasks, Calendar Events, and Subscriptions.
2. Cases Table
id: UUID (primary key).
title: String.
description: Text.
status: Enum (Open, Closed, Pending).
assigned_to: UUID (foreign key to Users with roles Staff/Admin).
client_id: UUID (foreign key to Users with role Client).
created_at: Timestamp.
updated_at: Timestamp.
Relationships:

One-to-many with Documents (Cases.id → Documents.case_id).
One-to-many with Billing (Cases.id → Billing.case_id).
One-to-many with Tasks (Cases.id → Tasks.case_id).
3. Documents Table
id: UUID (primary key).
case_id: UUID (foreign key to Cases).
file_url: String (Supabase Storage URL).
version: Integer.
uploaded_by: UUID (foreign key to Users).
created_at: Timestamp.
Relationships:

Belongs to Cases (Documents.case_id → Cases.id).
Has a many-to-one relationship with Users (Documents.uploaded_by → Users.id).
4. Billing Table
id: UUID (primary key).
case_id: UUID (foreign key to Cases).
amount: Float.
status: Enum (Paid, Pending).
due_date: Date.
paid_date: Date (nullable).
created_at: Timestamp.
Relationships:

Belongs to Cases (Billing.case_id → Cases.id).
5. Tasks Table
id: UUID (primary key).
case_id: UUID (foreign key to Cases).
title: String.
description: Text.
status: Enum (Open, In Progress, Completed).
assigned_to: UUID (foreign key to Users).
due_date: Date.
created_at: Timestamp.
Relationships:

Belongs to Cases (Tasks.case_id → Cases.id).
Belongs to Users (Tasks.assigned_to → Users.id).
6. Notifications Table
id: UUID (primary key).
recipient_id: UUID (foreign key to Users).
message: String.
type: Enum (Reminder, System Alert, Task Update).
read_status: Boolean.
created_at: Timestamp.
Relationships:

Belongs to Users (Notifications.recipient_id → Users.id).
7. Subscriptions Table
id: UUID (primary key).
user_id: UUID (foreign key to Users).
plan: Enum (Starter, Professional, Enterprise).
start_date: Date.
end_date: Date (nullable for ongoing subscriptions).
status: Enum (Active, Expired, Canceled).
created_at: Timestamp.
Relationships:

Belongs to Users (Subscriptions.user_id → Users.id).
8. Audit Logs Table
id: UUID (primary key).
user_id: UUID (foreign key to Users).
action: String.
target: String (e.g., Table or Resource modified).
details: JSONB (structured details of the action).
created_at: Timestamp.
Relationships:

Belongs to Users (Audit Logs.user_id → Users.id).
9. Support Tickets Table
id: UUID (primary key).
client_id: UUID (foreign key to Users with role Client).
subject: String.
description: Text.
status: Enum (Open, In Progress, Resolved).
created_at: Timestamp.
updated_at: Timestamp.
Relationships:

Belongs to Users (Support Tickets.client_id → Users.id).
10. Calendar Events Table
id: UUID (primary key).
title: String.
description: Text.
start_time: Timestamp.
end_time: Timestamp.
assigned_to: UUID (foreign key to Users).
created_at: Timestamp.
Relationships:

Belongs to Users (Calendar Events.assigned_to → Users.id).
11. Plans Table
id: UUID (primary key).
name: String (Starter, Professional, Enterprise).
price: Float.
features: JSONB (list of features per plan).
created_at: Timestamp.
Relationships:

None directly but connects logically to Subscriptions.
Entity Relationship Diagram (ERD) Overview
Users is the central table connecting to:

Cases, Notifications, Tasks, Support Tickets, Subscriptions, Audit Logs, Calendar Events, and Documents.
Cases is the core of operations connecting to:

Billing, Tasks, and Documents.
Subscriptions is associated with:

Users and indirectly tied to Plans.
All tables maintain proper indexing and foreign key constraints to ensure referential integrity

1. Document Templates Table
id: UUID (primary key).
name: String (e.g., "Contract Agreement", "Invoice").
description: Text (optional description of the template).
created_by: UUID (foreign key to Users, Staff/Admin role).
created_at: Timestamp.
updated_at: Timestamp.
Relationships:

Templates are created by Admins/Staff (Document Templates.created_by → Users.id).
One-to-many relationship with Template Fields.
2. Template Fields Table
id: UUID (primary key).
template_id: UUID (foreign key to Document Templates).
field_name: String (e.g., "Client Name", "Contract Date").
field_type: Enum (Text, Number, Date, Boolean, Dropdown).
options: JSONB (optional; for dropdown fields, stores list of options).
is_required: Boolean.
created_at: Timestamp.
Relationships:

Fields belong to templates (Template Fields.template_id → Document Templates.id).
3. Generated Documents Table
id: UUID (primary key).
template_id: UUID (foreign key to Document Templates).
case_id: UUID (foreign key to Cases, nullable for general documents not tied to a case).
client_id: UUID (foreign key to Users with role Client).
file_url: String (Supabase Storage URL for the generated document).
status: Enum (Draft, Completed).
created_by: UUID (foreign key to Users, Staff/Admin role).
created_at: Timestamp.
updated_at: Timestamp.
Relationships:

Generated documents are based on templates (Generated Documents.template_id → Document Templates.id).
Documents can optionally belong to a case (Generated Documents.case_id → Cases.id).
Documents are associated with a client (Generated Documents.client_id → Users.id).
4. Client Input Fields Table
id: UUID (primary key).
generated_doc_id: UUID (foreign key to Generated Documents).
field_name: String (matches Template Fields.field_name).
field_value: Text (value provided by the client).
created_at: Timestamp.
Relationships:

Inputs belong to generated documents (Client Input Fields.generated_doc_id → Generated Documents.id).
Workflow for Document Generation
Template Creation:

Admin/Staff defines a new document template in the Document Templates table.
Fields specific to the document are added in the Template Fields table.
Client Data Collection:

When generating a document, the system references the template and its fields.
Fields requiring client input are collected and stored in the Client Input Fields table.
Document Generation:

Populate the template fields with client data and predefined values.
Generate a document and store it in Supabase Storage, with metadata recorded in the Generated Documents table.
Document Access:

Staff/Admin can access drafts and completed documents.
Clients can view/download generated documents via the client portal.
Relationships Summary
Document Templates → Template Fields:

One-to-many relationship defining fields for each template.
Document Templates → Generated Documents:

One-to-many relationship linking generated documents to their template.
Generated Documents → Client Input Fields:

One-to-many relationship capturing client data for document generation.
Generated Documents → Users (Clients):

Each generated document is associated with a specific client.
Generated Documents → Cases:

Documents can optionally be linked to a case.

Enhancements to be included and done:

Template Versioning:

Add a version field to the Document Templates table to manage updates without affecting existing documents.
Field Ordering:

Add an order column in the Template Fields table to specify the display order of fields during client data collection.
Field Validation:

Include a validation_rule column in Template Fields to enforce data entry constraints (e.g., regex for email format).
Approval Workflow:

Add a status (Pending Approval, Approved, Rejected) and approval log for generated documents, linking them to reviewing staff/admin.
Template Categorization:

Add a category field in the Document Templates table for better organization (e.g., "Contracts", "Invoices").



After this has been done, build the project and run it.