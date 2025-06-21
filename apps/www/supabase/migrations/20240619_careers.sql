-- Migration for careers_submissions table
CREATE TABLE IF NOT EXISTS careers_submissions (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  resume_url TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
); 