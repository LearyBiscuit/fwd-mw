// On automatic deployment we assume that country is UK and stage is -dev for GitHub hook
// and -testing for successfull semaphoreCI hook.

//var redisClient = require('redis').createClient;
//var Sidekiq = require('sidekiq');

//sidekiq = new Sidekiq(redisCon);

function onGitHubPushHook (application, branch) {
    console.log('Deploying ' + branch + ' of ' + application + ' on GitHub push hook');
  }

function onSemaphoreCIHook (application, branch) {
    console.log('Deploying ' + branch + ' of ' + application + '  on SemaphoreCI hook');
  }

function onManualRequest (application, branch, country, stage) {
    console.log('Deploying ' + branch + ' of ' + application + ' to ' + country + ' ' + stage + ' on manual request');
  }
module.exports.onSemaphoreCIHook = onSemaphoreCIHook;
module.exports.onGitHubPushHook = onGitHubPushHook;
module.exports.onManualRequest = onManualRequest;
