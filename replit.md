# Ролтех - Garage Door Company Website

## Overview  

This is a modern, production-ready multilingual business website for Ролтех (Roltech), a garage door company specializing in Hörmann garage doors. The application is built as a full-stack web solution with a React frontend and Express backend, featuring a professional design, contact form functionality, and bilingual support (Bulgarian and English). The website serves as a complete marketing platform showcasing different types of garage doors (sectional, roller, and Berry doors) with advanced filtering, company services, about information, and contact capabilities. The site is fully SEO-optimized and ready for deployment.

## User Preferences

Preferred communication style: Simple, everyday language.
Logo requirements: Professional SVG logo with seamless navbar integration
Site readiness: Fully prepared for production deployment with SEO optimization

## Recent Changes (August 14, 2025)

✓ Created custom SVG logo with professional design matching brand identity
✓ Integrated logo seamlessly into navigation with optimal color matching (#2D2D37)
✓ Added comprehensive SEO optimization with meta tags, Open Graph, and Twitter Cards  
✓ Created robots.txt and sitemap.xml for search engine indexing
✓ Optimized HTML head with Bulgarian language settings and proper favicon
✓ Finalized all product filtering across sectional, roller, and Berry door categories
✓ Implemented bilingual support (Bulgarian primary, English secondary)
✓ Completed all navigation sections as separate pages (not scroll sections)
✓ Updated branding from "Delice Garage" to "RollTech" throughout site
✓ Configured Hostinger email integration for contact form functionality
✓ Added separate Name and Last Name fields to contact form
✓ Services now display in Bulgarian in email notifications (Секционни врати, Ролетни врати, etc.)
✓ Updated contact information to 087 678 2271 and rolltech2020@gmail.com
✓ Site is production-ready and fully functional with working contact form

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a modern component-based architecture:

- **UI Framework**: React with TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS for utility-first styling with shadcn/ui component library providing pre-built, accessible components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Internationalization**: Custom context-based solution supporting Bulgarian and English languages
- **Build System**: Vite for fast development and optimized production builds

The frontend follows a modular component structure with dedicated sections for navigation, hero, products, services, about, contact, and footer components.

### Backend Architecture
The server-side is built with Express.js using modern JavaScript features:

- **Framework**: Express.js with TypeScript support for robust server-side development
- **API Design**: RESTful API endpoints for contact form submissions and data retrieval
- **Validation**: Zod schemas for request/response validation
- **Development**: Custom Vite integration for seamless development experience with HMR
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
The application uses a flexible storage architecture that supports both in-memory and database storage:

- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for users and contact requests
- **Storage Interface**: Abstract storage interface (IStorage) allowing for easy switching between storage implementations
- **Current Implementation**: In-memory storage using Maps for development and testing
- **Production Ready**: Drizzle configuration set up for PostgreSQL deployment with Neon Database

### Authentication and Authorization
Basic user management infrastructure is in place:

- **User Schema**: Database schema for user accounts with username/password authentication
- **Session Management**: PostgreSQL session store configuration using connect-pg-simple
- **Future Implementation**: Authentication endpoints and middleware ready for implementation

### Form Management and Contact System
Comprehensive contact form system with validation and persistence:

- **Contact Form**: Multi-field form with name, phone, email, service type, and message
- **Validation**: Client and server-side validation using Zod schemas
- **Toast Notifications**: User feedback system for form submission status
- **Data Persistence**: Contact requests stored with timestamps for follow-up

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives providing accessible, customizable components
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Low-level UI primitives for accessibility and keyboard navigation
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static type checking and enhanced development experience
- **PostCSS**: CSS processing with Tailwind CSS integration

### Data Management
- **React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performance-focused form library with validation
- **Zod**: Schema validation for both client and server-side data validation

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database service for production deployment

### Routing and Navigation
- **Wouter**: Minimalist routing library for single-page application navigation

### Utilities and Helpers
- **clsx & tailwind-merge**: Utility classes management and conditional styling
- **date-fns**: Date manipulation and formatting utilities
- **class-variance-authority**: Component variant management for consistent styling