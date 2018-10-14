import {
  get
} from '../actions';

function colorLogic(options: any): any {
  const seneca = this;

  seneca.add('role:color,cmd:get', get);

  return { plugin: 'getColor' };
}

export default colorLogic;
