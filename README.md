# Streamerank

## Introduction

Streamer spotlight application. In this application, users can add their favorite streamers along with some relevant details. Other users can then upvote or downvote these streamers.

## Project overview

Application uses the _pnpm_ package manager with workspaces providing basic monorepo to simplify codebase.

```bash
├── api
│   └── ...
│
├── app
│   └── ...
│
├── packages
│   │
│   ├── eslint-config-custom
│   │   └── ...
│   │
│   ├── schemas
│   │   └── ...
│   │
│   └── types
│       └── ...
│
└── ...
```

Database is a dockerized MongoDB configured with Docker Compose.

## Launching the application

Run commands from the project root directory.

Dependency installation:

```bash
pnpm -r install

```

Running the application:

```bash
pnpm -r dev
```

Launching the Storybook environment:

```bash
pnpm --filter ./app storybook

```

## Technologies used

- Frontend:

  - React
  - Vite
  - TypeScript
  - Styled Components
  - Tailwind
  - Zustand
  - Yup
  - React Hook Form
  - Tanstack Query
  - React Router
  - React Icons
  - Framer Motion
  - Storybook

- Backend:
  - Express
  - TypeScript
  - Mongoose
  - Yup
