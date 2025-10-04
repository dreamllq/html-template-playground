import { Logic } from '../logic';

export class If extends Logic {
  condition: string = 'data';

  constructor() {
    super({ name: 'if' });
  }

  get info() {
    return `${this.name} - ${this.condition}`;
  }

  toJson() {
    return {
      ...super.toJson(),
      condition: this.condition
    };
  }
}