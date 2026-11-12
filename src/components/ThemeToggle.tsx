import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer border focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
        isDark
          ? 'bg-[var(--color-surface)] text-[var(--color-accent-text)] border-[var(--color-border)] hover:bg-[var(--color-surface-subtle)]'
          : 'bg-white text-stone-700 border-stone-200/90 hover:bg-stone-50 hover:text-stone-950 shadow-2xs'
      } ${className}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro de alto contraste'}
      title={isDark ? 'Modo claro (Pergamino editorial)' : 'Modo oscuro (Alto contraste contra fatiga visual)'}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400 stroke-[2.2]" />
          <span className="hidden sm:inline">Modo claro</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-indigo-700 stroke-[2.2]" />
          <span className="hidden sm:inline">Modo oscuro</span>
        </>
      )}
    </button>
  );
};
