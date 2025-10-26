# Malama Cabs

## Overview

Malama Cabs is a web application for an eco-friendly airport cab service in Bangalore, India. The platform focuses on providing economical, electric vehicle (EV) rides to and from the airport. The application features a modern, premium landing page with sophisticated animations, booking capabilities via WhatsApp/phone, and a mobile app download section. The design emphasizes sustainability, comfort, and professional service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React** with TypeScript for UI components and type safety
- **Vite** as the build tool and development server with HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application)
- **React Query** (@tanstack/react-query) for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives (New York variant)
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Framer Motion** for sophisticated animations and transitions
- **Lucide React** for consistent iconography

**Design System**
- Custom HSL-based color palette supporting light/dark themes
- Design inspired by premium web aesthetics (referenced from skale.solutions)
- Typography hierarchy using Inter font family
- Consistent spacing scale based on Tailwind's 4px increments
- Component variants using class-variance-authority for maintainable styling

**Page Structure**
- Single-page landing page architecture
- Modular component sections: Hero, Navigation, Pricing, Features, How It Works, Testimonials, App Download, FAQ, Footer
- Floating action buttons for WhatsApp contact and scroll-to-top
- Smooth scroll navigation to page sections

### Backend Architecture

**Server Framework**
- **Express.js** Node server for API endpoints and static file serving
- Middleware for JSON parsing, logging, and request tracking
- Development mode integrates Vite middleware for hot reloading
- Production mode serves pre-built static assets

**Storage Layer**
- **In-memory storage** implementation (MemStorage class) for user data
- Storage interface pattern (IStorage) designed for easy database migration
- Current implementation stores users in a Map with UUID-based keys

**Database Schema (Prepared but not actively used)**
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- Users table with username/password authentication structure
- Schema uses Zod for runtime validation via drizzle-zod
- Migration system configured in drizzle.config.ts

**API Design**
- RESTful route structure with `/api` prefix
- Routes registered through centralized routing system
- Server-side logging middleware tracks request duration and responses
- HTTP server created from Express app for WebSocket compatibility

### External Dependencies

**UI Component Libraries**
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives including accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, label, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, tooltip
- **cmdk**: Command menu component for search/command palette interfaces
- **embla-carousel-react**: Touch-friendly carousel component
- **react-day-picker**: Calendar/date picker component
- **vaul**: Drawer component primitive

**Animation & Interaction**
- **Framer Motion**: Production-ready animation library for complex UI animations
- **class-variance-authority**: Utilities for managing component variants

**Styling & Utilities**
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **clsx & tailwind-merge**: Class name composition utilities
- **date-fns**: Date manipulation and formatting

**Data & Validation**
- **Zod**: TypeScript-first schema validation
- **React Hook Form**: Form state management with @hookform/resolvers for Zod integration

**Database & ORM** (Configured for future use)
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **@replit/vite-plugin-dev-banner**: Development environment banner

**Contact Integration**
- WhatsApp contact via direct web link (wa.me)
- Phone contact via tel: protocol
- No third-party booking API currently integrated

**Asset Management**
- Image assets stored in `attached_assets/generated_images` directory
- Static assets served through Vite's asset handling system