"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setScheme(scheme === "dark" ? "light" : "dark");
  }, [scheme, setScheme]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Header with Clasificados Mejores Logo */}
      <header className="w-full border-b border-muted py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={scheme === "dark" ? "/logo-white.svg" : "/logo.svg"}
            alt="Clasificados Mejores"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
          <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
            Los mejores clasificados de Puerto Rico
          </span>
        </div>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-cm-orange hover:text-white transition-colors"
          aria-label={scheme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {scheme === "dark" ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
          <span className="text-sm hidden sm:inline">
            {scheme === "dark" ? "Claro" : "Oscuro"}
          </span>
        </button>
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-muted py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>© 2025 Clasificados Mejores. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.clasificadosmejores.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cm-orange transition-colors"
            >
              clasificadosmejores.com
            </a>
            <span className="text-xs">
              Puerto Rico 🇵🇷
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
