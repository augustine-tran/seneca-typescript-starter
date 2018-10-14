import PingLogic from './logic/color.logic';

const Seneca = require('seneca');

const HOST = process.env.HOST;
const BASES = process.env.BASES || '127.0.0.1';
// const BROADCAST = process.env.BROADCAST
const REGISTRY = process.env.REGISTRY;

const SERVICE_NAME = 'color';

const se = Seneca({
  tag: SERVICE_NAME,
  debug: { short_logs: true }
});

se.use('seneca-demo-logger')
  .use('seneca-as-promised')
  .use(PingLogic)
  .use('mesh', {
    auto: true,
    host: HOST,
    pin: 'role:color',
    bases: [`${BASES}:39999`]
  })
  .ready(() => {
    console.log(`${SERVICE_NAME} service ready!!!`, {
      id: se.id,
      plugins: Object.keys(se.list_plugins())
    });
  });
