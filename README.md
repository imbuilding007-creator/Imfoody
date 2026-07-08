# Indian Recipe & Weekly Meal Planner App

An AI-powered recipe and meal planning app built with React, Vite, Clerk (Authentication), and Supabase.

## Features
- Personalized onboarding flow to capture dietary preferences and pantry items.
- Algorithmically generated 7-day meal plans adhering to strict repetition constraints.
- Premium, dynamic, modern UI with smooth micro-animations.
- Automated missing ingredients shopping list.

## Local Setup (Requires Node.js)

Since this is a Vite project, you will need Node.js installed to run it locally.
1. Run `npm install` to install dependencies.
2. Copy `.env.example` to `.env.local` and add your Clerk and Supabase keys.
3. Run `npm run dev` to start the development server.

## Deployment on Vercel

1. Create a new repository on GitHub and push this code.
2. Sign in to Vercel and create a new project.
3. Import your GitHub repository.
4. In the Environment Variables section on Vercel, add:
   - `VITE_CLERK_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click **Deploy**. Vercel will automatically detect Vite and run `npm run build`.
