export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: env('NODE_ENV') === 'production',
  url: env('PUBLIC_URL', 'https://developer-market-backend.onrender.com'),
});
