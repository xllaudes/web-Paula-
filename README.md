# Paula Llaudes's Architecture Portfolio

A minimalist, Bauhaus-inspired personal website and blog for an architecture student.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Supabase** for backend and authentication
- **React Router** for navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account (for database and auth)
- n8n webhook URL (optional, for contact form)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_N8N_WEBHOOK_URL=your_n8n_webhook_url
```

See `.env.example` for reference.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Supabase Setup

Create these tables in your Supabase project:

```sql
-- Projects table
CREATE TABLE proyectos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT NOT NULL,
  categoria TEXT CHECK (categoria IN ('Edificación', 'Urbanismo', 'Maquetas')),
  año INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  fecha DATE NOT NULL,
  categoria TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Enable Google authentication in Supabase dashboard under Authentication > Providers.

## Features

- **Portfolio**: Showcase architectural projects with category filtering
- **Blog**: Write and share articles
- **Admin Panel**: Protected route for content management (requires Google sign-in)
- **Contact Form**: Integrated with n8n webhook for notifications
- **Bauhaus Design**: Minimalist aesthetic with technical typography

## Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Route pages
├── lib/            # Utilities (Supabase client)
├── types/          # TypeScript type definitions
├── App.tsx         # Main app with routing
└── index.css       # Tailwind CSS + custom styles
```

## License

MIT
