//////////////////
// Config File //
////////////////

//Change Env Here
var configSetting = 'development';

env = {
  development: {
    mode: '',
    baseUrl: 'http://loop.app/api/v1',
    vueDebug: true,
    axiosBaseURL: 'http://api.loop.app',
    browserSyncServer: 'admin.loop.app'
  },

  staging: {
    mode: 'hash',
    baseUrl: 'http://loop.app/api/v1',
    vueDebug: true,
    axiosBaseURL: 'http://api.looptesting.rocks',
    browserSyncServer: 'admin.loop.app'
  },

  production: {
    routerMode: 'history',
    baseUrl: 'http://loop.app/api/v1',
    vueDebug: false,
    axiosBaseURL: 'https://api.loopreturns.com',
    browserSyncServer: 'admin.loop.app'
  }
}

module.exports = function(setting){
  return env[configSetting][setting];
};
