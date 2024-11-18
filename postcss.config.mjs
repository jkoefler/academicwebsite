/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
  output: "export",
  basePath: "/academicwebsite",
};

export default config;
