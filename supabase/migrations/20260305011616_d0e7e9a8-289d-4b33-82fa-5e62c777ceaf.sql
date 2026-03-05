
CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL,
  date text NOT NULL,
  time text NOT NULL,
  passengers text NOT NULL,
  luggage text NOT NULL,
  city text NOT NULL,
  district text NOT NULL,
  flight_no text,
  name text NOT NULL,
  phone text NOT NULL,
  sign_board boolean DEFAULT false,
  child_seat text DEFAULT '0',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert a booking (public form)
CREATE POLICY "Allow public insert"
  ON public.bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
