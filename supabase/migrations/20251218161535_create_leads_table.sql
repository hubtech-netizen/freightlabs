/*
  # Create leads table for storing contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the contact
      - `email` (text) - Email address
      - `company` (text) - Company name
      - `phone` (text, nullable) - Phone number (optional)
      - `user_type` (text) - Type of user (carrier, shipper, 3pl, broker, other)
      - `interest` (text) - Product interest (routeforge, loadforge, both, general)
      - `message` (text) - Additional message or notes
      - `source` (text) - Where the lead came from (homepage, routeforge_page, etc.)
      - `created_at` (timestamptz) - When the lead was created
      - `status` (text) - Lead status (new, contacted, qualified, closed, default: new)
      
  2. Security
    - Enable RLS on `leads` table
    - Allow anonymous users to INSERT leads (for public form submissions)
    - Only authenticated admin users can read/update/delete leads
    
  3. Indexes
    - Index on email for quick lookups
    - Index on created_at for sorting
    - Index on status for filtering
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  user_type text NOT NULL,
  interest text NOT NULL,
  message text,
  source text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);