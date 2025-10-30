export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: env('NODE_ENV') === 'production',
  url: env('PUBLIC_URL', 'https://developer-market-backend.onrender.com'),
  // Optimize for low memory environments (Render free tier)
  cron: {
    enabled: false, // Disable cron to save memory
  },
  admin: {
    watchIgnoreFiles: ['**/tmp/**', '**/node_modules/**'], // Reduce file watching
  },
});
