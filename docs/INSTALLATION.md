# Installation Guide

## Prerequisites

Before setting up the Vision X Telemedicine application, ensure you have the following installed on your system:

### Required Software
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control

### System Requirements
- **Operating System**: Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 500MB free space
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/nirusan3494/Smartindiahackathon.git
cd Smartindiahackathon
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Detailed Setup Instructions

### Development Environment Setup

#### Step 1: Node.js Installation

**Windows:**
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the setup wizard
3. Verify installation: `node --version` and `npm --version`

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Step 2: Git Installation

**Windows:**
- Download from [git-scm.com](https://git-scm.com/)

**macOS:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### Project Setup

#### Step 3: Clone and Configure

```bash
# Clone the repository
git clone https://github.com/nirusan3494/Smartindiahackathon.git

# Navigate to project directory
cd Smartindiahackathon

# Install dependencies
npm install

# Verify installation
npm run build
```

## Development Commands

### Core Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Advanced Development Commands

```bash
# Type checking without compilation
npx tsc --noEmit

# Check specific file for type errors
npx tsc --noEmit --skipLibCheck false src/components/ComponentName.tsx

# Build and start production server
npm run build && npm start
```

## Environment Configuration

### Development Environment

Create a `.env.local` file in the root directory for local environment variables:

```bash
# .env.local (for local development)
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production Environment

For production deployment, configure these environment variables:

```bash
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

## Troubleshooting

### Common Issues

#### Node.js Version Issues
```bash
# Check Node.js version
node --version

# If version is below 18, update Node.js
# Windows/macOS: Download latest from nodejs.org
# Linux: Use nvm (Node Version Manager)
```

#### Dependency Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Verify all dependencies are installed
npm ls
```

#### Port Already in Use
```bash
# Kill process using port 3000 (Linux/macOS)
lsof -ti:3000 | xargs kill -9

# Kill process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use different port
npm run dev -- -p 3001
```

## Development Tools Setup

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint"
  ]
}
```

### Editor Configuration

Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

## Testing the Installation

### Verification Steps

1. **Development Server Test:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` and verify the app loads

2. **Build Test:**
   ```bash
   npm run build
   ```
   Should complete without errors

3. **Production Test:**
   ```bash
   npm start
   ```
   Production server should start successfully

4. **Multi-Language Test:**
   - Open the app in browser
   - Click language selector in header
   - Switch between English, Hindi, Punjabi, Telugu
   - Verify UI text changes accordingly

5. **PWA Test:**
   - Open browser developer tools
   - Check "Application" tab
   - Verify Service Worker is active
   - Test offline functionality

## Next Steps

After successful installation:

1. Read the [Architecture Documentation](./ARCHITECTURE.md)
2. Check the [WARP.md](./WARP.md) for development guidance
3. Explore the [main README](../README.md) for project overview
4. Start developing with the established patterns

## Support

If you encounter issues during installation:

1. Check the [Troubleshooting](#troubleshooting) section
2. Verify all prerequisites are met
3. Ensure you're using compatible Node.js version
4. Check GitHub Issues for similar problems