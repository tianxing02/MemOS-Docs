# MemOS Docs 

This repository contains the documentation website for MemOS project.

## Project Structure

```
MemOS-Docs/
├── app/                    # Main application code
│   ├── components/        # Vue components
│   ├── composables/       # Vue composables
│   ├── pages/            # Vue pages and routing
│   └── assets/           # Static assets like CSS
├── content/               # Documentation content
│   ├── api.json         # OpenAPI Documentation
│   └── settings.yaml    # Documentation navigation
├── public/               # Public static assets
│   └── assets/          # Images and other media
└── nuxt.config.ts       # Nuxt configuration
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```
