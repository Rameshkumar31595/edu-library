# Educational Resource Library - Frontend

A modern React frontend application for managing educational resources with JWT-based authentication and role-based access control.

## 🚀 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite
- **Fast Development**: Vite provides lightning-fast HMR and builds
- **Routing**: React Router v6 for navigation and protected routes
- **Authentication**: JWT-based authentication with context API
- **Styling**: Tailwind CSS for utility-first responsive design
- **API Integration**: Axios with interceptors for API calls
- **Role-Based Access**: Admin and User role-based routing
- **Type Safety**: Full TypeScript support throughout

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   └── ProtectedRoute.tsx
├── pages/             # Page components
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── HomePage.tsx
│   ├── ResourcesPage.tsx
│   ├── AdminDashboard.tsx
│   └── UnauthorizedPage.tsx
├── layouts/           # Layout components
│   └── MainLayout.tsx
├── services/          # API services
│   ├── authService.ts
│   └── resourceService.ts
├── contexts/          # React contexts
│   └── AuthContext.tsx
├── hooks/             # Custom hooks
│   └── useAuth.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions
│   ├── tokenManager.ts
│   └── axiosInstance.ts
├── index.css          # Global styles with Tailwind
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edu-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing library
- `typescript` - Type system

### Styling
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS transformations
- `autoprefixer` - CSS vendor prefixes

### API
- `axios` - HTTP client

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions

## 🔐 Authentication

The application uses JWT-based authentication with the following features:

- **Login**: Credentials-based authentication
- **Registration**: New user registration
- **Token Management**: Automatic token storage and retrieval
- **Protected Routes**: Routes requiring authentication
- **Role-Based Access**: Differentiated access for Admin and User roles
- **Auto-Logout**: Automatic logout on token expiration (401 response)

### Authentication Flow

1. User logs in with email/password
2. Server returns JWT token and user data
3. Token stored in localStorage
4. Token added to all API requests via axios interceptor
5. Protected routes check authentication status
6. Admin-only routes check user role

## 🎯 Pages Overview

### Public Pages
- `/login` - User login
- `/register` - User registration

### Protected Pages (Authenticated Users Only)
- `/` - Home page
- `/resources` - Browse educational resources

### Admin Pages (Admin Role Only)
- `/admin` - Admin dashboard with resource management

### Special Pages
- `/unauthorized` - Access denied page

## 🔌 API Integration

### Axios Instance
The `axiosInstance` in `src/utils/axiosInstance.ts` automatically:
- Adds authentication tokens to requests
- Handles 401 responses with auto-logout
- Uses the base URL from environment variables

### Services

**Auth Service** (`src/services/authService.ts`)
- `login(email, password)` - User login
- `register(email, password, name)` - User registration
- `logout()` - User logout
- `verifyToken()` - Verify JWT token

**Resource Service** (`src/services/resourceService.ts`)
- `getAll()` - Fetch all resources
- `getById(id)` - Fetch single resource
- `create(resource)` - Create new resource
- `update(id, resource)` - Update resource
- `delete(id)` - Delete resource

## 🎨 Styling

The project uses Tailwind CSS with custom theme colors:

- **Primary**: `#3B82F6` (Blue)
- **Secondary**: `#10B981` (Green)
- **Danger**: `#EF4444` (Red)
- **Warning**: `#F59E0B` (Amber)
- **Dark**: `#1F2937` (Dark Gray)
- **Light**: `#F3F4F6` (Light Gray)

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🚀 Build

```bash
npm run build
```

Builds the application for production. The optimized build will be in the `dist` directory.

## 🧪 Development

```bash
npm run dev
```

Starts the development server with hot module replacement (HMR).

## ✨ Key Features Implementation

### Protected Routes
Routes are protected using the `ProtectedRoute` component which:
- Checks authentication status
- Redirects unauthenticated users to login
- Enforces role-based access control
- Shows loading state during auth verification

### Token Management
Tokens are managed using:
- localStorage for persistence
- axios interceptors for automatic attachment
- Custom `tokenManager` utility for clean API

### Context API
Authentication state managed via:
- `AuthContext` for global auth state
- `useAuth` hook for easy access
- `AuthProvider` wrapper component

## 🔄 Component Architecture

### Smart Components (Pages)
- Handle routing and data fetching
- Pass data to presentational components

### Presentational Components
- Receive data via props
- Handle UI rendering and user interactions

### Layout Components
- Wrap page content
- Provide consistent structure (header, footer, navigation)

## 📚 Resource Structure

Resources follow this structure:

```typescript
interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
```

## 🔧 Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend is configured to accept requests from `localhost:5173` in development.

### Token Expiration
Implement token refresh logic in `axiosInstance.ts` to handle token expiration gracefully.

### Styling Issues
Clear cache and restart dev server if Tailwind styles aren't applying:
```bash
npm run dev
```

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a new branch for your feature
2. Make your changes with clear commit messages
3. Ensure code follows the project style
4. Test your changes thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚀 Next Steps

1. **Connect Backend API**: Update API endpoints in services
2. **Implement Real Authentication**: Connect to real authentication backend
3. **Add More Features**: Implement resource creation, editing, and deletion
4. **Testing**: Add unit and integration tests
5. **Error Handling**: Implement comprehensive error handling
6. **Analytics**: Add application analytics
7. **Performance**: Optimize bundle size and performance

---

**Happy coding! 🎉**

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
