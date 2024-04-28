# Penny Perch

This is an open-source expense tracker web application designed to help users manage their expenses and financial goals effectively.

## Features

- Track expenses and incomes with detailed categorization.
- Set monthly budgets for different spending categories.
- Define financial goals and monitor progress over time.
- User-friendly interface with intuitive navigation.

## Technologies Used

- Next.js `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Server Actions
- Metadata files
- Server and Client Components
- Authentication using **Clerk**
- ORM using **Drizzle**
- Database on **Supabase**
- UI Components built using **Radix UI** and **shadcn/ui**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Getting Started

### Running Locally

1.Install dependencies using pnpm:

```sh
pnpm install
```

2.Copy `.env.example` to `.env.local` && `.env` (.env required for drizzle migrations since the t3 env unable to read envs from the `.env.local`, as least for now...) and update the variables.

```sh
cp .env.example .env.local
```

3.Start the development server:

```sh
pnpm dev
```
