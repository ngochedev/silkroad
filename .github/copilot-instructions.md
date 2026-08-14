# Repository Custom Instructions

## Project Overview
- **Product**: Stock trade recommendation platform.
- **AI Engine**: AI driven stock trade alerting engine, a combination of Assisted Analysis ("Human-in-the-loop") and Automated stock trade recommendations based on user's portfolio. First it allows user to create a portfolio and add stock tickers to the portfolio.

- **Goal**: Provide timely and accurate stock trade recommendations to users based on their portfolio and market trends.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS.
- **Backend**: Next.js 15 (App Router), TypeScript.
- **Infrastructure**: Database: Microsoft SQL Server, Hosting: Vercel.

## Global Coding Standards
- **Naming**: Use camelCase for variables/functions, PascalCase for classes/types, UPPER_CASE for constants.
- **Formatting**: Always use spaces instead of tabs
- **Safety**: Never hardcode secrets, API keys, or credentials. Use environment variables.

## Frontend Guidelines (TypeScript / React)
- Use functional components with explicit TypeScript interfaces for props.
- Prefer server components by default; use `'use client'` only when state or hooks are required.
- Implement early returns to minimize nested block depths.

## Backend Guidelines (Python / FastAPI)
- Use explicit type hints everywhere.
- Utilize Pydantic v2 schemas for all request validation and response serialization.
- Wrap database interactions in async context managers.

## Testing Strategy
- **Unit Testing**: Write PyTest unit tests for every new backend endpoint.
- **Mocking**: Mock external API calls strictly using pytest-mock; never hit actual network endpoints during tests.

# Frontend Copilot Rules

## Technical Stack
- Next.js (App Router), React 19, Tailwind CSS, shadcn/ui.

## Coding Style
- Write UI components as compact, atomic functional elements.
- Utilize semantic HTML elements (`<main>`, `<section>`, `<article>`) instead of generic `<div>` wrappers.
- Abstract repeating Tailwind class combinations into reusable utility classes or sub-components.

## TypeScript Standards
- Avoid the `any` keyword entirely. If a type is unknown, explicitly use `unknown`.
- Declare component prop types using `interface` instead of `type`.

