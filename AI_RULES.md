# AI Rules

## Tech Stack
- **Framework**: React 19 (Vite-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (using @tailwindcss/vite)
- **Routing**: React Router 7
- **Animations**: Framer Motion (Motion v12)
- **Icons**: Lucide React
- **Backend**: Node.js with Express (optional)
- **Database**: Better-SQLite3 (optional)

## Development Rules
- **UI Components**: Use shadcn/ui (Radix UI) for complex components. Follow the established dark theme (gold/white/black).
- **Styling**: Always use Tailwind CSS utility classes. Avoid custom CSS unless absolutely necessary (use `src/index.css` for global theme variables).
- **Animations**: Use `motion` for entrance animations and interactive elements. Keep them subtle and consistent.
- **Icons**: Use `lucide-react` for all iconography.
- **File Structure**: 
  - Components in `src/components/`
  - Pages in `src/pages/`
  - Routes in `src/App.tsx`
- **Data Fetching**: Use standard fetch or integrated backend routes if applicable.
- **State Management**: Use React Hooks (`useState`, `useContext`, `useReducer`) for local and global state.
