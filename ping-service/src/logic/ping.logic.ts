import {
  get
} from '../actions';

function pingLogic(options: any): any {
  const seneca = this;

  seneca.add('role:ping,cmd:get', get);

  return { plugin: 'getPing' };
}

export default pingLogic;
