import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';

export class Th extends Component {
  constructor() {
    super({
      name: 'th',
      innerHtml: 'th' 
    });
    this.style = { };
  }

  copy(): Cell {
    const th = new Th();

    th.style = cloneDeep(this.style);
    th.classes = cloneDeep(this.classes);
    th.id = this.id;
    th.innerHtml = this.innerHtml;

    return th;
  }
}