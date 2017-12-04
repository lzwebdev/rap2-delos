module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'rap2_back_end',
      script    : 'dispatch.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
        user : 'joe',
        host : '120.77.84.9',
        ref  : 'origin/master',
        repo : 'git@github.com:lzwebdev/rap2-delos.git',
        path : '/home/joe/project/rap/rap2-delos',
        port:'3999',
        ssh_options:'StrictHostKeyChecking=no',
        env: {
            NODE_ENV: 'production'
        },
        'post-deploy' : 'npm install ;pm2 startOrRestart ecosystem.config.js --env production'
    },
  }
};
