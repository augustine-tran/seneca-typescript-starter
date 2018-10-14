import * as Seneca from 'seneca';
// tslint:disable-next-line:no-var-requires
const repl = require('seneca-repl');

const HOST = process.env.HOST;
const HOST1 = process.env.HOST1;
const REGISTRY = process.env.REGISTRY;
const BASES = process.env.BASES || '127.0.0.1';
const PORT = process.env.PORT;

Seneca({ tag: 'repl' })
  .use('mesh', {
    auto: true,
    bases: [`${BASES}:39999`],
    host: HOST,
    tag: null
  })
  .use(repl, {
    host: HOST1,
    port: PORT
  })
  .ready(() => {
    console.log('REPL service ready!!!');
  });
