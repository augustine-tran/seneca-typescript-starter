import * as Seneca from 'seneca';

const HOST = process.env.HOST;
// const BROADCAST = process.env.BROADCAST;
const REGISTRY = process.env.REGISTRY;

Seneca()
  .use('mesh', {
    isbase: true,
    host: HOST,
    pin: 'role:mesh',
    sneeze: {
      silent: true,
      swim: { interval: 1111 }
    }
  })
  .ready(function () {
    console.log('Bases ready!!!');
  });