import { Logic } from '../logic';

export class If extends Logic {
  condition: string = 'data';

  constructor() {
    super({ name: 'ifLogic' });
  }

  get info() {
    return `${this.name} - ${this.condition}`;
  }
}