import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        MainBlueColor: '#1E3A8A',
        DarkBlueColor:  '#222953',
        MainYellowColor: '#FFFBEB',
        MainCoralColor: '#EB8258',
        MainViridianColor: '#57886C',
      }
    },
   
  },
  plugins: [],
}
export default config
