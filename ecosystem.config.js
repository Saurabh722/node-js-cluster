module.exports = {
  apps : [{
    name: "Express APP",
    script: 'server.js',
    instances: 'MAX',
    watch: '.',
    exec_mode: "cluster"
  }]
};
