module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // url: 'https://api.athensareaurology.com',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
