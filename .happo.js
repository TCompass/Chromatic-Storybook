const { RemoteBrowserTarget } = require('happo.io');
const happoPluginStorybook = require('happo-plugin-storybook');

module.exports = {
  apiKey: '96e2df67ba',
  apiSecret: '693fe2317c419f2ec24770670',

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
    firefox: new RemoteBrowserTarget('firefox', {
      viewport: '1024x768',
    }),
    edge: new RemoteBrowserTarget('edge', {
      viewport: '1024x768',
    }),
    'internet explorer': new RemoteBrowserTarget('internet explorer', {
      viewport: '1024x768',
    }),
    safari: new RemoteBrowserTarget('safari', {
      viewport: '1024x768',
    }),
    'ios-safari': new RemoteBrowserTarget('ios-safari', {
      viewport: '375x667',
    }),
  },

  plugins: [
    happoPluginStorybook(),
  ],

  type: 'react',
};
