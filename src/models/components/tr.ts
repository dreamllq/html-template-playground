import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';
import { Td } from './td';

export class Tr extends Component {
  constructor() {
    super({
      name: 'tr',
      innerHtml: 'component' 
    });
    this.style = { };

    const td1 = new Td();
    const td2 = new Td();

    this.children.push(td1, td2);
    td1.parent = this;
    td2.parent = this;
  }

  copy(): Cell {
    const tr = new Tr();

    tr.style = cloneDeep(this.style);
    tr.classes = cloneDeep(this.classes);
    tr.id = this.id;
    tr.innerHtml = this.innerHtml;

    return tr;
  }
}