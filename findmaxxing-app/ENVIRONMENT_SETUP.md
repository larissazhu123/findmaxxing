# Environment Setup Instructions

## Supabase Configuration Required

The application requires Supabase environment variables to function properly. Follow these steps:

### 1. Create Environment File
Create a file named `.env.local` in the `findmaxxing-app` directory.

### 2. Add Supabase Credentials
Add the following lines to your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### 3. Get Supabase Credentials
1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the "Project URL" for `NEXT_PUBLIC_SUPABASE_URL`
4. Copy the "anon public" key for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Example Format
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Restart Development Server
After adding the environment variables, restart your development server:
```bash
npm run dev
```

## Database Configuration (Optional)
If you also need database access, create a `.env` file in the project root with:
```
DATABASE_URL=postgresql://postgres:your-db-password@db.PROJECT_ID.supabase.co:5432/postgres
```

## Security Note
- Never commit `.env.local` or `.env` files to version control
- These files are already in `.gitignore` for security
