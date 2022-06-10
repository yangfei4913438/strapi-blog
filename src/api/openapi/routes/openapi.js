module.exports = {
  routes: [
    {
      method: "GET",
      path: "/openapi",
      handler: "openapi.index",
      config: {
        auth: false,
      },
    },
  ],
};
