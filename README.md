# Bright Mind

A separate competitive-exam practice platform. Study Material is intentionally excluded.

## Current implementation
- Question bank with manual question creation and CSV import
- Exam creator: full mock, sectional, chapter-wise, PYQ and custom tests
- Student test runner with timer, question palette, answer saving and result review
- Browser-local persistence for this first preview build

## Run locally
`npm install` then `npm run dev`.

## Important
This initial build stores data in the current browser using localStorage. It is suitable for functional preview/testing, not multi-user production. A shared database, secure admin/student authentication, and server-side PDF OCR are separate next-stage integrations. No paid AI API is required for the current features.

Gyan Manch is a separate project and is not touched by this repository.
