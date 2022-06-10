module.exports = (env) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "30d", // token过期时间
      },
    },
  },
});
