# Educational Resource Library Frontend - Project Instructions

## Project Overview
Modern React + Vite frontend for an educational resource library system with JWT authentication and role-based access control.

## Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios with interceptors
- **State Management**: Context API
- **Authentication**: JWT-based with localStorage

## Project Structure
- `src/components/` - Reusable UI components (ProtectedRoute)
- `src/pages/` - Page components (Login, Register, Home, Resources, Admin)
- `src/layouts/` - Layout components (MainLayout)
- `src/services/` - API service layer (auth, resources)
- `src/contexts/` - React context (AuthContext)
- `src/hooks/` - Custom hooks (useAuth)
- `src/types/` - TypeScript definitions
- `src/utils/` - Utility functions (tokenManager, axiosInstance)

## Key Features
✅ JWT-based authentication system
✅ Role-based route protection (Admin/User)
✅ Protected routes with auth verification
✅ Auto-logout on 401 response
✅ Responsive Tailwind CSS design
✅ Reusable component architecture
✅ Type-safe TypeScript throughout
✅ Axios interceptors for token management

## Development Workflow

### Start Development
```bash
npm run dev
```
Runs on http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Authentication Flow
1. User logs in via LoginPage
2. Credentials sent to backend
3. JWT token received and stored
4. Token auto-added to all API requests
5. Protected routes check auth status
6. Unauthorized routes show 403 page

## API Integration Notes
- Base URL: Use VITE_API_URL environment variable
- All requests include JWT token via Authorization header
- 401 responses trigger automatic logout and redirect to login
- Mock data currently used - replace with real API calls

## User Roles
- **User**: Can view resources and home page
- **Admin**: Has access to admin dashboard for resource management

## Component Hierarchy
```
App (Router Setup)
├── AuthProvider (Auth Context)
└── Routes
    ├── LoginPage
    ├── RegisterPage
    ├── ProtectedRoute → HomePage (MainLayout)
    ├── ProtectedRoute → ResourcesPage (MainLayout)
    ├── ProtectedRoute (admin) → AdminDashboard (MainLayout)
    └── UnauthorizedPage
```

## Custom Hooks
- `useAuth()` - Access authentication state and methods

## Environment Variables
Create `.env` file:
```env
VITE_API_URL=http://localhost:3000/api
```

## Next Steps for Implementation
1. Connect to actual backend API endpoints
2. Implement real authentication with backend
3. Add resource CRUD operations
4. Implement user management in admin panel
5. Add error boundaries and error handling
6. Add loading states and skeleton screens
7. Implement tests (Jest, Vitest)
8. Add form validation
9. Implement password reset functionality
10. Add user profile page

## Important Files
- `src/App.tsx` - Main routing configuration
- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/utils/axiosInstance.ts` - API client with interceptors
- `tailwind.config.js` - Tailwind customization
- `.env.example` - Environment variables template

## Code Style Guidelines
- Use functional components with hooks
- Use TypeScript for type safety
- Follow React naming conventions
- Keep components focused and reusable
- Use descriptive variable/function names
- Organize imports alphabetically

## Troubleshooting
- **Dev server not starting**: Clear node_modules and reinstall
- **Tailwind not working**: Ensure `npm run dev` is running
- **CORS errors**: Check backend CORS configuration
- **Auth not persisting**: Check localStorage and token manager

## Useful Commands
- `npm install` - Install dependencies
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Documentation
- Full README.md with detailed information available in project root
- API endpoint details in services folder
- Type definitions in src/types/index.ts
