module.exports = {
  config: {
    server: 'localhost\\SQLEXPRESS',
    database: 'TestReactDb',
    user: 'sysdev',
    password: 'appuser_sys',
    options: {
      encrypt: false,
      enableArithAbort: true,
    },
  },
  port: function () {
    var portdata = process.env.PORT || 5000;
    return portdata;
  },
};
