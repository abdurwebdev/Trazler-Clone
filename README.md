# Trazler - Travel Blog Platform

A full-stack travel blog application built with React, Node.js, and MongoDB. Trazler allows users to create, read, edit, and manage travel blog posts with rich text editing capabilities.

## 🌟 Features

### User Management

- User registration and authentication
- JWT-based secure login system
- User profile management with avatar generation
- Role-based access control

### Blog Management

- Create, edit, and delete blog posts
- Rich text editor (React Quill) with HTML support
- Image URL integration
- Category-based organization (Africa, Asia, Europe, Oceania, North America, South America)
- Read time estimation
- Author attribution and post tracking

### Content Features

- Responsive design with dark/light theme toggle
- Internationalization (English/French) support
- Search functionality
- Category filtering
- Social media sharing integration
- Newsletter subscription system

### Admin Dashboard

- Blog creation interface
- Post management tools
- User post overview
- Rich text and plain text editing modes

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **React Quill** - Rich text editor
- **GSAP** - Animation library
- **i18next** - Internationalization
- **Axios** - HTTP client
- **Sonner** - Toast notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
trazler/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── schemas/       # Zod validation schemas
│   │   ├── i18.js         # Internationalization config
│   │   └── index.css      # Global styles
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── validators/        # Input validation
│   ├── middlewares/       # Custom middleware
│   ├── config/            # Database configuration
│   └── index.js           # Server entry point
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the server directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3001`

### Frontend Setup

1. **Navigate to client directory:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the client directory:

   ```env
   VITE_BACKEND_URL=http://localhost:3001/api
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 🔧 API Endpoints

### Authentication

- `POST /api/register` - User registration
- `POST /api/login` - User login
- `GET /api/logout` - User logout
- `GET /api/admin` - Admin verification

### Blog Management

- `POST /api/createblog` - Create new blog post
- `GET /api/blogcard` - Get all blog posts (with optional category filter)
- `GET /api/blogcard/:id` - Get specific blog post
- `PUT /api/edit/:id` - Edit blog post
- `POST /api/delete/:id` - Delete blog post
- `GET /api/me` - Get current user's posts

## 🎨 Key Components

### BlogCard

- Displays blog previews with images, titles, and descriptions
- Responsive grid layout
- Category tags and author information

### AdminDashboard

- Blog creation form with rich text editor
- Form validation using Zod schemas
- Image URL and category selection

### EditPage

- Blog editing interface
- Pre-populated form fields
- Rich text and plain text editing modes

### Navbar

- Responsive navigation with mobile menu
- Theme toggle (dark/light)
- Language switcher (English/French)
- Search functionality

## 🌍 Internationalization

The application supports multiple languages:

- **English** - Default language
- **French** - Secondary language

Translation files are located in `client/src/i18.js` and cover:

- UI elements
- Blog content
- Error messages
- Navigation items

## 🔐 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Input validation using Zod schemas
- Protected admin routes
- Secure cookie handling

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Adaptive navigation
- Touch-friendly interfaces
- Cross-device compatibility

## 🚀 Deployment

### Backend Deployment

1. Set production environment variables
2. Configure MongoDB Atlas or production database
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment

1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with core blog functionality
- Blog creation and management
- User authentication system
- Responsive design implementation
- Internationalization support

---

**Happy Traveling! ✈️🌍**
