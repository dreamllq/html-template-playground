import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';

export class Span extends Component {
  constructor() {
    super({
      name: 'span',
      innerHtml: 'span' 
    });
  }

  copy(): Cell {
    const span = new Span();
  
    span.style = cloneDeep(this.style);
    span.classes = cloneDeep(this.classes);
    span.id = this.id;
    span.innerHtml = this.innerHtml;
  
    return span;
  }
}