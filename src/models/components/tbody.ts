import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';
import { Tr } from './tr';
import { Th } from './th';

export class Tbody extends Component {
  constructor() {
    super({
      name: 'tbody',
      innerHtml: 'component' 
    });

    this.style = { width: '100%' };
    const tr = new Tr();
    this.children.push(tr);
    tr.parent = this;
  }

  copy(): Cell {
    const tbody = new Tbody();

    tbody.style = cloneDeep(this.style);
    tbody.classes = cloneDeep(this.classes);
    tbody.id = this.id;
    tbody.innerHtml = this.innerHtml;

    return tbody;
  }
}