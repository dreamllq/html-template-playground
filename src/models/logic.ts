import { CELL_TYPE } from '@/types/common';
import { Cell } from './cell';
import { LogicConstructorOptions } from '@/types/logic';

export class Logic extends Cell {
  constructor(options: LogicConstructorOptions) {
    super({
      type: CELL_TYPE.LOGIC,
      name: options.name 
    });
  }

  toJson() {
    return { ...super.toJson() };
  }
}