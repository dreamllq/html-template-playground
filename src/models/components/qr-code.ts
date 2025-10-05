import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';

export class QrCode extends Component {
  constructor() {
    super({
      name: 'qrCode',
      innerHtml: 'component' 
    });
    this.style = { width: '300px' };
  }

  copy(): Cell {
    const div = new QrCode();

    div.style = cloneDeep(this.style);
    div.classes = cloneDeep(this.classes);
    div.id = this.id;
    div.innerHtml = this.innerHtml;

    return div;
  }
}