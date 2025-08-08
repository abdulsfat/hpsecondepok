/** @type {import('tailwindnpm install --save-dev tailwind-scrollbarcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "outquint-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      colors: {
        currentColor: "currentColor",
        primary: "#FFD337",
        secondary: "#2544AA",
        secondary_sec: "#4397F7",
        tertiary: "#D32F44",
        // abu: "#D32F44",
      },
      fontFamily: {
        'general-sans': [
          'GeneralSans-Regular',
          'sans-serif',
        ],
        'general-sans-extra-light': [
          'GeneralSans-Extralight',
          'sans-serif',
        ],
        'general-sans-extra-light-italic': [
          'GeneralSans-ExtralightItalic',
          'sans-serif',
        ],
        'general-sans-light': [
          'GeneralSans-Light',
          'sans-serif',
        ],
        'general-sans-light-italic': [
          'GeneralSans-LightItalic',
          'sans-serif',
        ],
        'general-sans-medium': [
          'GeneralSans-Medium',
          'sans-serif',
        ],
        'general-sans-medium-italic': [
          'GeneralSans-MediumItalic',
          'sans-serif',
        ],
        'general-sans-semibold': [
          'GeneralSans-Semibold',
          'sans-serif',
        ],
        'general-sans-semibold-italic': [
          'GeneralSans-SemiboldItalic',
          'sans-serif',
        ],
        'general-sans-bold': [
          'GeneralSans-Bold',
          'sans-serif',
        ],
        'general-sans-bold-italic': [
          'GeneralSans-BoldItalic',
          'sans-serif',
        ],
        'general-sans-italic': [
          'GeneralSans-Italic',
          'sans-serif',
        ],
        'general-sans-variable': [
          'GeneralSans-Variable',
          'sans-serif',
        ],
        'general-sans-variable-italic': [
          'GeneralSans-VariableItalic',
          'sans-serif',
        ],
        'sf-pro': ['SFProDisplay-Regular', 'sans-serif'],
        'sf-pro-thin': ['SFProDisplay-Thin', 'sans-serif'],
        'sf-pro-thin-italic': ['SFProDisplay-ThinItalic', 'sans-serif'],
        'sf-pro-light': ['SFProDisplay-Light', 'sans-serif'],
        'sf-pro-light-italic': ['SFProDisplay-LightItalic', 'sans-serif'],
        'sf-pro-regular': ['SFProDisplay-Regular', 'sans-serif'],
        'sf-pro-italic': ['SFProDisplay-RegularItalic', 'sans-serif'],
        'sf-pro-medium': ['SFProDisplay-Medium', 'sans-serif'],
        'sf-pro-medium-italic': ['SFProDisplay-MediumItalic', 'sans-serif'],
        'sf-pro-semibold': ['SFProDisplay-Semibold', 'sans-serif'],
        'sf-pro-semibold-italic': ['SFProDisplay-SemiboldItalic', 'sans-serif'],
        'sf-pro-bold': ['SFProDisplay-Bold', 'sans-serif'],
        'sf-pro-bold-italic': ['SFProDisplay-BoldItalic', 'sans-serif'],
        'sf-pro-heavy': ['SFProDisplay-Heavy', 'sans-serif'],
        'sf-pro-heavy-italic': ['SFProDisplay-HeavyItalic', 'sans-serif'],
        'sf-pro-black': ['SFProDisplay-Black', 'sans-serif'],
        'sf-pro-black-italic': ['SFProDisplay-BlackItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
