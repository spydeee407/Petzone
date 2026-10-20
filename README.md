# PET ZONE

React + TypeScript + Vite + Tailwind + Supabase + Recharts. Public shop and admin dashboard.

## Setup
1. `npm install`
2. Create a project at https://supabase.com. In **SQL Editor**, paste and run `supabase/migration.sql` once.
3. Copy `.env.example` to `.env` and fill in the project URL and **anon** key (Project Settings > API). Never use the service_role key in this app.
4. Put your logo at `public/logo.png`.
5. In Supabase **Authentication > Users**, add a user (email + password). Then in the SQL Editor run:
   `insert into admins(user_id) select id from auth.users where email = 'YOUR_EMAIL';`
6. `npm run dev` then open the URL shown. Admin is at `/admin`.
7. `npm run build` to check for type errors and create a production build.

## Security model
- All tables have RLS enabled; only users listed in `admins` can read or write them.
- The public catalogue reads the `public_products` view (no cost price, no archived items).
- Orders are created only by the `place_order` function, which re-prices items from the database and checks stock.
- Stock changes only happen through `record_stock_movement` / `complete_order`, which check `is_admin()` server-side.
- The admin route guard in React is a convenience only; the database enforces access.

## Not included / to consider
- Spam protection on order submission (enable Supabase CAPTCHA or add rate limiting).
- Image uploads (products use an image URL field).
- Orders are reserved only on completion; stock is checked at order time but deducted when you click Complete.
