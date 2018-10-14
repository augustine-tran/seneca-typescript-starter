const { _try } = require('../utils');
import { Result } from 'true-myth';

export default async function(this: any, msg: any, done: any) {
  const seneca = this;

  try {
    const r: Result<any, any> = await _try(async () => {
      return seneca.actAsync('role:ping,cmd:get', {
        a: msg.a
      });
    });

    console.log('--->>> ping result', r.toString());

    return done(undefined, { ok: true, color: '#123' });
  } catch (error) {
    console.trace('-------error: ', error);
    return done(error);
  }
}
