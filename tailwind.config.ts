const config: any = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'display': ["var(--display-font)", "sans-serif"],
    },
    colors: {
      'button-hover': 'rgba(6,78,59,0.1)',
      'secondary-bg': '#064E3B',
      'font-secondary': '#f3f2e7',
      'primary-bg-lighter': '#f3f2e7',
      'font-primary': '#064E3B',
      'font-primary-placeholder': 'rgba(6,78,59,0.6)',
      'primary-transparent': 'rgba(243,242,231,0.5)',
      'error-red': '#f87171',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
