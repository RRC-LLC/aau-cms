module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: "cms.athensareaurology.com",
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
