# Green Reports

Green Reports is a consulting website that provides ESG (Environmental, Social, and Governance) advisory services and sustainability reporting for listed and non-listed companies in Singapore.

## Project Overview

This full-stack application serves as a digital platform for Singapore-based sustainability reporting and consultation services, featuring:

- Interactive website with customized UI/UX
- Informational sections about company services and expertise
- Blog system for sustainability news and updates
- Contact form for client inquiries
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js with TypeScript
- Vite.js as the build tool
- TailwindCSS for styling
- shadcn/ui components
- TanStack Query for data fetching
- React Hook Form with Zod validation
- Wouter for routing

### Backend
- Node.js with Express
- In-memory storage (expandable to PostgreSQL)
- REST API endpoints
- TypeScript for type safety

## Project Structure

```
project/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and configs
│   │   ├── pages/       # Page components
│   │   └── main.tsx     # Entry point
├── public/              # Static assets
│   └── blog-images/     # Blog post images
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data storage implementation
│   └── vite.ts          # Vite integration for development
├── shared/              # Shared code between client and server
│   └── schema.ts        # Data models and schemas
└── theme.json           # Theme configuration
```

## Build Configuration

### Development Environment

The project uses a Vite-based development setup with:

1. **Express Backend Integration**:
   - The Express server is integrated with Vite during development
   - Hot Module Replacement (HMR) is enabled for both frontend and backend

2. **Workflow Configuration**:
   - The application is started using `npm run dev` 
   - This command runs both the frontend and backend concurrently

3. **API Routes**:
   - All API endpoints are prefixed with `/api`
   - Main endpoints include:
     - `/api/blog` - Blog post management
     - `/api/contact` - Contact form submissions
     - `/api/newsletter` - Newsletter subscriptions

4. **Static Files**:
   - Public assets are served from the `/public` directory
   - Blog images are stored in `/public/blog-images`

### Production Configuration

For production deployment:

1. The application is built using `npm run build`
2. The build process combines the frontend and backend into a single distributable
3. Static assets are optimized and served efficiently

### Deployment Configuration

- **Base Directory**: `/` (root of the repository)
- **Package Directory**: `/` (root of the repository)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Environment Variables

The following environment variables can be configured for deployment:

- `NODE_ENV`: Set to `production` for production environments
- `PORT`: The port on which the server will run (defaults to 5000)
- `SESSION_SECRET`: Secret key for session management (required if authentication is enabled)
- `SENDGRID_API_KEY`: API key for SendGrid email service (optional, for email functionality)

## External Integrations

- **FormSubmit.co**: Contact form submissions are sent to contact@greenreports.co using FormSubmit.co

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Access the application at `http://localhost:5000`

## Future Enhancements

The project is designed to be expanded with:

1. **Authentication System**: Admin area for content management
2. **Database Integration**: PostgreSQL for persistent data storage
3. **Email Service**: Direct email integration using SendGrid
4. **Advanced Analytics**: ESG reporting tools and dashboards