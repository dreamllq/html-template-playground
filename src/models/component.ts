import { CSSProperties } from 'vue';
import { Cell } from './cell';
import { CELL_TYPE } from '@/types/common';
import { ComponentConstructorOptions } from '@/types/component';

export class Component extends Cell {
  style: CSSProperties = { padding: '10px' };
  classes: string[] = [];
  id: string = '';
  innerHtml: string = '';
  

  constructor(options: ComponentConstructorOptions) {
    super(CELL_TYPE.COMPONENT, options.name);
    this.innerHtml = options.innerHtml;
  }
}