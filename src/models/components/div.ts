import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';

export class Div extends Component {
  constructor() {
    super({
      name: 'div',
      innerHtml: 'component' 
    });
  }

  copy(): Cell {
    const div = new Div();

    div.style = cloneDeep(this.style);
    div.classes = cloneDeep(this.classes);
    div.id = this.id;
    div.innerHtml = this.innerHtml;

    return div;
  }
}