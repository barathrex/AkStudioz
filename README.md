# AKStudioz Camera Rentals

Premium Camera & Event Equipment Rental Platform built with Next.js 15, Supabase, and Tailwind CSS.

## Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui
- **Backend:** Next.js API Routes (Vercel Serverless)
- **Database:** Supabase PostgreSQL
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage (Private Bucket)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Run the SQL in `supabase/schema.sql` in the Supabase SQL Editor
4. Create a private storage bucket named `documents`

## Demo Mode

The app runs with mock data when Supabase is not configured. All pages and the booking flow work in demo mode.

## Project Structure

```
src/
├── app/              # Pages and API routes
├── components/       # UI components
├── lib/              # Utilities, Supabase, mock data
└── types/            # TypeScript types
```

## Pages

- **Public:** Home, Products, Categories, Gallery, About, Contact, FAQ
- **Auth:** Login, Register, Forgot Password
- **User Dashboard:** Bookings, History, Documents, Profile
- **Admin Dashboard:** Products, Categories, Inventory, Bookings, Customers

## Deployment

Deploy to Vercel and set environment variables from `.env.example`.
