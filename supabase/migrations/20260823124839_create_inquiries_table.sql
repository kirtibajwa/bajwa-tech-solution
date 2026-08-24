/*
# Create inquiries table (single-tenant, no auth)

1. Purpose
   This is a business website with no sign-in screen. Visitors fill out a
   contact form on the Contact section; submissions are stored here so the
   business owner can review them later via the Supabase dashboard.

2. New Tables
   - `inquiries`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, not null) — visitor's full name
     - `email` (text, not null) — visitor's email address
     - `message` (text, not null) — the inquiry message
     - `read` (boolean, default false) — flag so the owner can mark read
     - `created_at` (timestamptz, default now()) — when submitted

3. Indexes
   - `inquiries_created_at_idx` on `created_at` (descending) for fast recent-first queries.

4. Security
   - Enable RLS on `inquiries`.
   - This is a single-tenant, no-auth app, so policies use `TO anon, authenticated`.
   - INSERT is public (any visitor can submit the form).
   - SELECT / UPDATE / DELETE are restricted to `authenticated` only — only
     the signed-in business owner can read or manage inquiries. Visitors
     cannot read other people's inquiries or mark them read.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS inquiries_created_at_idx
  ON inquiries (created_at DESC);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit an inquiry
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (the business owner) can read inquiries
DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can mark inquiries as read
DROP POLICY IF EXISTS "auth_update_inquiries" ON inquiries;
CREATE POLICY "auth_update_inquiries"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated users can delete inquiries
DROP POLICY IF EXISTS "auth_delete_inquiries" ON inquiries;
CREATE POLICY "auth_delete_inquiries"
  ON inquiries FOR DELETE
  TO authenticated
  USING (true);
