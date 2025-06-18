# supabase.com

## Overview

Refer to the [Development Guide](../../DEVELOPERS.md) to learn how to run this site locally.

To get started copy the example env file using `cp .env.local.example .env.local`.

# Questionnaire Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these values in your Supabase project settings under Project Settings > API.

## Database Setup

1. Go to your Supabase project's SQL editor
2. Copy and paste the contents of `supabase/migrations/20240307_questionnaire.sql`
3. Run the SQL commands to create the table and set up the security policies

## Running the Application

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

The questionnaire will be available at `http://localhost:3000`

## Features

- Dynamic questionnaire form
- Dark mode with custom colors
- Form validation
- Supabase integration for data storage
- Thank you message after submission
- Responsive design

## Customization

You can modify the questions by editing the `questions` array in `pages/index.tsx`. Each question should have:
- `field_id`: Unique identifier (must match database column names)
- `label`: Question text
- `type`: Input type ('text', 'email', 'number', or 'select')

## Security

The application uses Row Level Security (RLS) policies to:
- Allow anonymous users to submit questionnaires
- Restrict viewing submissions to authenticated users only
