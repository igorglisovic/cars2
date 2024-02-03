/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/assets/bg1.jpg")',
        car: 'url("/assets/car.jpg")',
        'search-icon': '',
        btn: 'linear-gradient(273.12deg, #38A0FF -36.12%, rgba(69, 69, 69, 0.424219) -36.1%, rgba(240, 240, 240, 0.33) 131.29%), url("/assets/search-icon.png")',
        'btn-delete':
          'linear-gradient(273.12deg, #38A0FF -36.12%, rgba(69, 69, 69, 0.424219) -36.1%, rgba(240, 240, 240, 0.33) 131.29%), url("/assets/delete-icon2.png")',
        'btn-edit':
          'linear-gradient(273.12deg, #38A0FF -36.12%, rgba(69, 69, 69, 0.424219) -36.1%, rgba(240, 240, 240, 0.33) 131.29%), url("/assets/edit-icon.png")',
        'gradient-light-gray':
          'linear-gradient(90.3deg, #D9D9D9 35.74%, rgba(255,255,255, 0.7) 133.61%)',
        'btn-2':
          'linear-gradient(90.3deg, #D9D9D9 49.74%, rgba(255,255,255, 0.7) 123.61%)',
      },
      borderRadius: {
        'top-5xl': '45px 45px 0 0',
        'bottom-5xl': '0 0 45px 45px',
        '5xl': '45px',
      },
      backgroundColor: {
        active: 'white',
        'light-gray': '#EDEDED',
      },
      screens: {
        base: '950px',
        'base-plus': '1100px',
        'md-plus': '810px',
        'md-form': '845px',
        xs: '520px',
        xxs: '400px',
      },
      gridTemplateColumns: {
        car: 'minmax(70%,1fr) 1fr',
      },
      gridTemplateRows: {
        slider: '400px 180px',
        slider2: '370px 150px',
        slider3: '280px 90px',
      },
    },
  },
  plugins: [],
}
