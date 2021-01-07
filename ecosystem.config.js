module.exports = {
  apps: [{name: 'travis-comp3006', script: 'index.js'}],
  deploy: {
    prod: {
      key: '~/.ssh/id_rsa',
      user: 'root',
      host: ['107.167.181.223'],
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/master',
      repo: 'git@github.com:LZH996633/comp3006-server.git',
      path: '/mnt/app/comp3006-server',
      'post-deploy': 'source ~/.nvm/nvm.sh && yarn install && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
