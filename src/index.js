import express from 'express';

let app = require('./server/server').default;

if (module.hot) {
  module.hot.accept('./server/server', function () {
    console.log('🔁  HMR Reloading `./server/server`...');
    try {
      app = require('./server/server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });
