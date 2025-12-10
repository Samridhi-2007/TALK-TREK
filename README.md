TalkTrek

TalkTrek is an AI-powered English learning platform built with Next.js. It helps users improve their English skills through interactive games, AI chat practice, and real-world exercises.

This project was bootstrapped using create-next-app
.

Features

AI Chat: Practice conversations with an AI-powered chatbot.

Word Match Game: Interactive vocabulary game with scoring.

Authentication: Sign in with Google or email/password.

Dashboard: Personal user dashboard to track progress.

Responsive Design: Works on desktop and mobile devices.

Next.js 16 & App Router: Fully using Next.js modern features.

Getting Started
1. Install dependencies
npm install
# or
yarn
# or
pnpm install

2. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000
 in your browser.
The page auto-updates as you edit files.

Environment Variables

Create a .env file in the root of your project with the following:

NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
DATABASE_URL=your-database-connection-url


Make sure to never commit secrets to GitHub. Use .gitignore for sensitive files like config/my-service-account.json.

Project Structure
app/              # Next.js pages and routes
app/api/          # API routes (auth, AI chat, games)
app/providers.tsx # NextAuth providers setup
config/           # Local configuration (ignored in Git)
lib/              # Database connections, helpers
global.d.ts       # TypeScript global types

Authentication

NextAuth.js is used for authentication.

Supports:

Google OAuth

Email/password credentials

Session management with JWT.

Learn More

Next.js Documentation
 – learn about Next.js features and API.

NextAuth.js Documentation
 – authentication setup.

React Documentation
 – learn React fundamentals.
