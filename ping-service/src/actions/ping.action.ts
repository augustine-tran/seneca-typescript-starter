import { Result } from 'true-myth';

export default async function(this: any, msg: any, done: any) {
  if (msg.a && msg.a == 2) {
    return done(new Error('a PHAI KHAC 2'));
  }

  return done(undefined, { ping: { a: msg.a, p: '456' } });
}
