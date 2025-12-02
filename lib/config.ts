import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Facts Brand Colors
export const FACTS_COLORS = {
  offBlack: "#141414",
  darkYellow: "#F2D518",
  highlighterYellow: "#FFE11A",
  darkGrey: "#595758",
  lightGrey: "#EEF0F2",
  white: "#F8F4EB",
  pureWhite: "#FFFFFF",
} as const;

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "¿Qué puedes hacer?",
    prompt: "¿Qué puedes hacer?",
    icon: "circle-question",
  },
  {
    label: "Analizar tendencias de shoppers",
    prompt: "¿Puedes mostrarme las tendencias recientes en los shoppers?",
    icon: "search",
  },
  {
    label: "Comparar precios",
    prompt: "Ayúdame a comparar precios de productos en diferentes retailers",
    icon: "chart",
  },
];

export const PLACEHOLDER_INPUT = "Pregunta sobre shoppers, ofertas o datos de mercado...";

export const GREETING = "¡Hola! Soy Facts GPT. ¿Cómo puedo ayudarte hoy?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      // Warm tint to match Facts' yellow brand
      hue: 45, // Yellow-ish hue for grays
      tint: theme === "dark" ? 4 : 6,
      shade: theme === "dark" ? -2 : -3,
    },
    accent: {
      // Facts brand yellow as accent
      primary: theme === "dark" ? FACTS_COLORS.highlighterYellow : FACTS_COLORS.darkYellow,
      level: 2,
    },
    surface: {
      // Use brand colors for surfaces
      background: theme === "dark" ? FACTS_COLORS.offBlack : FACTS_COLORS.pureWhite,
      foreground: theme === "dark" ? "#1a1a1a" : FACTS_COLORS.lightGrey,
    },
  },
  radius: "round",
  density: "normal",
  typography: {
    fontFamily: "'Aleo', Georgia, 'Times New Roman', serif",
    baseSize: 16,
  },
});
