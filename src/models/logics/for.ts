import { Logic } from '../logic';

export class For extends Logic {
  alias0: string = 'item';
  alias1: string = 'index';

  expression: string = 'arr';

  constructor() {
    super({ name: 'for' });
  }

  get info() {
    return `${this.name} - (${this.alias0}, ${this.alias1}) in ${this.expression}`;
  }

  toJson() {
    return {
      ...super.toJson(),
      alias0: this.alias0,
      alias1: this.alias1,
      expression: this.expression
    };
  }
}