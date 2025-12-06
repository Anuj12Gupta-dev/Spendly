## Spendly

A modern personal finance app for tracking accounts, transactions, and budgets.

### Features

- **Authentication**: Email/SSO powered by Clerk.
- **Accounts & Budgets**: Create accounts, view balances, and track budget progress.
- **Transactions**: Add, edit, filter, sort, paginate, and export CSV.
- **Charts & Insights**: Responsive Recharts visualizations for trends and categories.
- **Responsive UI**: Tailwind CSS layouts optimized for mobile, tablet, and desktop .
- **Theming**: Light/dark mode with OKLCH-based design tokens.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4, Radix UI, Lucide icons
- **Auth**: Clerk
- **Data**: Prisma, PostgreSQL (via Prisma schema)
- **Email**: React Email, Resend
- **Jobs/Events**: Inngest
- **Charts**: Recharts

### Getting Started

1. Clone and install:
```bash
npm install
```
2. Set environment variables (create `.env.local`):
```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB

# Resend (email)
RESEND_API_KEY=...

# Inngest (optional)
INNGEST_EVENT_KEY=...
```
3. Generate and migrate database:
```bash
npx prisma generate
npx prisma migrate dev
```
4. Seed sample data (optional):
```bash
npm run dev
# In another terminal (or trigger /api/seed route if provided)
```
5. Run the dev server:
```bash
npm run dev
```
Open `http://localhost:3000`.

### Usage

- Sign in to access the dashboard.
- Create an account and start adding transactions.
- Use filters and sorting in the transactions table; export current view as CSV.
- Switch themes via the header toggle.

### Contributing

Contributions are welcome!
- Fork the repository and create a feature branch.
- Follow the existing code style and Tailwind conventions.
- Add meaningful names and avoid overly short identifiers.
- Submit a pull request with a clear description and screenshots if UI changes.

### License

MIT License. See `LICENSE` if present; otherwise the project is provided under MIT by default.
