-- Create questionnaire_submissions table
CREATE TABLE IF NOT EXISTS questionnaire_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    time_suck TEXT,
    tool_interest TEXT,
    team_size TEXT,
    industry TEXT,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add RLS (Row Level Security) policies
ALTER TABLE questionnaire_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON questionnaire_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to view all submissions
CREATE POLICY "Allow authenticated users to view all submissions" ON questionnaire_submissions
    FOR SELECT
    TO authenticated
    USING (true); 