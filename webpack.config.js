const path = require('path');

module.exports = (env) => {
  return {
    entry: './src/_includes/assets/js/bundle.mjs',
    output: {
      path: path.resolve(__dirname, 'public/_includes/assets/js/'),
      filename: env.production ? 'bundle-[contenthash].js' : 'bundle.js',
    }}
};