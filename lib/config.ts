import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Clasificados Mejores Brand Colors
export const CM_COLORS = {
  deepNavy: "#1a1a2e",
  coral: "#FF6B35",
  magenta: "#F72585",
  teal: "#4CC9F0",
  slate: "#4a4e69",
  lightGrey: "#f8f9fa",
  white: "#ffffff",
  darkBg: "#16213e",
} as const;

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "¿Qué puedes hacer?",
    prompt: "¿Qué puedes hacer y cómo me puedes ayudar?",
    icon: "circle-question",
  },
  {
    label: "Buscar anuncios",
    prompt: "Quiero buscar anuncios clasificados disponibles",
    icon: "search",
  },
  {
    label: "Publicar anuncio",
    prompt: "¿Cómo puedo publicar un anuncio clasificado?",
    icon: "plus",
  },
  {
    label: "Ver categorías",
    prompt: "¿Cuáles son las categorías de clasificados disponibles?",
    icon: "list",
  },
];

export const PLACEHOLDER_INPUT = "Busca clasificados, pregunta sobre anuncios o publica el tuyo...";

export const GREETING = "¡Hola! Soy tu asistente de Clasificados Mejores. ¿Cómo puedo ayudarte hoy?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      // Warm coral tint to match brand
      hue: 15, // Orange-coral hue for grays
      tint: theme === "dark" ? 3 : 5,
      shade: theme === "dark" ? -3 : -2,
    },
    accent: {
      // Brand coral as accent
      primary: CM_COLORS.coral,
      level: 2,
    },
    surface: {
      // Use brand colors for surfaces
      background: theme === "dark" ? CM_COLORS.deepNavy : CM_COLORS.white,
      foreground: theme === "dark" ? CM_COLORS.darkBg : CM_COLORS.lightGrey,
    },
  },
  radius: "round",
  density: "normal",
  typography: {
    fontFamily: "'Poppins', 'Segoe UI', system-ui, sans-serif",
    baseSize: 16,
  },
});
