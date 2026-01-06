# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Type-check with TypeScript then build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** as build tool
- **Tailwind CSS v4** (uses `@import "tailwindcss"` syntax in CSS, configured via `@tailwindcss/vite` plugin)
- **ESLint** with TypeScript and React hooks plugins

## Project Structure

- `src/` - Application source code (React components)
- `src/main.tsx` - Application entry point, renders App into root element
- `src/App.tsx` - Main application component
- `src/index.css` - Global styles with Tailwind import

## TypeScript Configuration

Uses project references with two configs:
- `tsconfig.app.json` - For application code in `src/` (ES2022, React JSX)
- `tsconfig.node.json` - For build tooling like `vite.config.ts` (ES2023, Node types)

Strict mode is enabled with `noUnusedLocals` and `noUnusedParameters`.
