// Central design tokens and Tailwind class helpers
// Use this to keep colors, spacing, and typography consistent.

export const theme = {
  colors: {
    pageBackground: "bg-white",
    sectionMutedBackground: "bg-gray-50",
    sectionPrimaryBackground: "bg-emerald-900",
    primary: "text-emerald-600",
    primaryOnDark: "text-emerald-300",
    primaryStrong: "text-emerald-950",
    textMuted: "text-gray-600",
    textSubtle: "text-gray-500",
  },
  layout: {
    container: "container mx-auto px-4 md:px-8",
    sectionY: "py-24",
    page: "flex flex-col min-h-screen bg-white overflow-x-hidden",
    mainWithHeaderOffset: "flex-grow pt-[80px]",
  },
  typography: {
    sectionTitle: "text-3xl lg:text-5xl font-bold",
    sectionTitleOnLight: "text-emerald-950",
    sectionTitleOnDark: "text-white",
    sectionSubtitle: "text-gray-600",
  },
};

