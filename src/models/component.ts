import { CSSProperties } from 'vue';
import { Cell } from './cell';
import { CELL_TYPE } from '@/types/common';
import { ComponentConstructorOptions } from '@/types/component';

export class Component extends Cell {
  style: CSSProperties = {
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px' 
  };
  classes: string[] = [];
  id: string = '';
  innerHtml: string = '';
  

  constructor(options: ComponentConstructorOptions) {
    super({
      type: CELL_TYPE.COMPONENT,
      name: options.name 
    });
    this.innerHtml = options.innerHtml;
  }

  toJson() {
    return {
      ...super.toJson(),
      style: this.style,
      classes: this.classes,
      id: this.id,
      innerHtml: this.innerHtml
    };
  }
}