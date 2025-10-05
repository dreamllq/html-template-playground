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
    const qrCode = new QrCode();

    qrCode.style = cloneDeep(this.style);
    qrCode.classes = cloneDeep(this.classes);
    qrCode.id = this.id;
    qrCode.innerHtml = this.innerHtml;

    return qrCode;
  }
}