-- Migration for sections table
CREATE TABLE IF NOT EXISTS sections (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
); 