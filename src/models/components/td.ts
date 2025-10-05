import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';

export class Td extends Component {
  constructor() {
    super({
      name: 'td',
      innerHtml: 'td' 
    });
    this.style = {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgb(160 160 160)',
      padding: '10px'
    };
  }

  copy(): Cell {
    const td = new Td();

    td.style = cloneDeep(this.style);
    td.classes = cloneDeep(this.classes);
    td.id = this.id;
    td.innerHtml = this.innerHtml;

    return td;
  }
}