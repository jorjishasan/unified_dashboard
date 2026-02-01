# Contributing to Funbars

Thank you for your interest in contributing. This guide will help you run the project locally and submit contributions.

---

## Table of contents

- [Prerequisites](#prerequisites)
- [Running the project on your machine](#running-the-project-on-your-machine)
- [Screenshots guide](#screenshots-guide)
- [Project structure](#project-structure)
- [Development workflow](#development-workflow)
- [Submitting changes](#submitting-changes)
- [Code style](#code-style)

---

## Prerequisites

Before you start, ensure you have the following installed:

| Requirement | Version / notes |
|-------------|-----------------|
| **Node.js** | 18.x or 20.x (LTS recommended) |
| **npm**     | 9.x or 10.x (comes with Node) |

**Check your versions:**

```bash
node -v   # e.g. v20.10.0
npm -v    # e.g. 10.2.0
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

---

## Running the project on your machine

Follow these steps to boot the project locally.

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/unified_dashboard.git
cd unified_dashboard
```

Replace `YOUR_USERNAME` with the actual GitHub username or organization.

**Screenshot suggestion:** Terminal showing `git clone` and `cd unified_dashboard` with success output.

---

### Step 2: Install dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, Recharts, Radix UI, and other dependencies defined in `package.json`.

**Screenshot suggestion:** Terminal after `npm install` completes (no errors).

---

### Step 3: Start the development server

```bash
npm run dev
```

You should see output similar to:

```
▲ Next.js 16.x.x
- Local:        http://localhost:3000
- Ready in X.Xs
```

**Screenshot suggestion:** Terminal showing `npm run dev` and the “Local: http://localhost:3000” line.

---

### Step 4: Open the app in your browser

1. Open a browser and go to: **http://localhost:3000**
2. You should see the landing page.
3. Use the navigation to open dashboards, for example:
   - **http://localhost:3000/dashboards/productsales**
   - **http://localhost:3000/dashboards/socialanalytics**
   - **http://localhost:3000/dashboards/vehiclesales**
   - **http://localhost:3000/dashboards/logistics**

**Screenshot suggestion:** Browser with the landing page or a dashboard open at `http://localhost:3000`.

---

### Optional: Production build and run

To build and run the app in production mode locally:

```bash
npm run build
npm start
```

Then open **http://localhost:3000** again. Use `npm run dev` for day-to-day development.

---

### Troubleshooting

| Issue | What to try |
|-------|-------------|
| **Port 3000 in use** | Stop the other process or run `npm run dev -- -p 3001` and use http://localhost:3001 |
| **`npm install` fails** | Ensure Node 18+ and run `rm -rf node_modules package-lock.json && npm install` |
| **Module not found / type errors** | Run `npm run build` or `npm run lint` to see exact errors; fix imports or types as suggested |

---

## Screenshots guide

When documenting setup or reporting issues, screenshots help. Suggested places and content:

1. **After clone + install**  
   Terminal: `git clone`, `cd unified_dashboard`, `npm install` with no errors.

2. **Dev server running**  
   Terminal: `npm run dev` with “Local: http://localhost:3000” visible.

3. **App in browser**  
   Browser: landing page or a dashboard at `http://localhost:3000` (or the port you use).

You can store screenshots in a `docs/screenshots/` folder and reference them in issues or PRs, for example:

```markdown
![Dev server running](docs/screenshots/dev-server.png)
```

---

## Project structure

```
funbars/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Landing page
│   │   └── dashboards/         # Dashboard routes
│   ├── components/
│   │   ├── dashboards/         # Dashboard-specific components
│   │   ├── landing/            # Landing page components
│   │   ├── ui/                 # Shared UI (shadcn-style)
│   │   └── registry/           # Extra UI (e.g. border-beam)
│   ├── hooks/                  # Shared hooks
│   └── lib/                    # Utils and config
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
└── next.config.js
```

---

## Development workflow

1. Create a new branch from `main`:  
   `git checkout -b feature/your-feature-name` or `fix/your-fix-name`.
2. Make your changes and test with `npm run dev` and `npm run build`.
3. Run the linter: `npm run lint`.
4. Commit with clear messages, then open a Pull Request.

---

## Submitting changes

1. **Fork** the repository (if you don’t have write access).
2. **Clone** your fork and add the upstream repo:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/unified_dashboard.git
   ```
3. **Branch:**  
   `git checkout -b feature/short-description`
4. **Code:** Implement your change and run `npm run lint` and `npm run build`.
5. **Commit:**  
   `git commit -m "feat: add X"` or `fix: resolve Y"`
6. **Push:**  
   `git push origin feature/short-description`
7. Open a **Pull Request** against the default branch, describe the change, and add screenshots if they help.

---

## Code style

- **TypeScript:** Use types for props and public APIs; avoid `any` where possible.
- **Formatting:** Keep existing indentation and line length; you can use Prettier if the project adopts it.
- **Components:** Prefer functional components and hooks; keep components under `src/components/` as in the structure above.
- **Lint:** Fix any issues reported by `npm run lint` before submitting a PR.

---

Thank you for contributing.
