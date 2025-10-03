import { CELL_TYPE } from '@/types/common';
import { Cell } from './cell';
import { LogicConstructorOptions } from '@/types/logic';

export class Logic extends Cell {
  constructor(options: LogicConstructorOptions) {
    super(CELL_TYPE.LOGIC, options.name);
  }
}