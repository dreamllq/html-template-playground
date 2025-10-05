import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';
import { Tr } from './tr';
import { Th } from './th';

export class Thead extends Component {
  constructor() {
    super({
      name: 'thead',
      innerHtml: 'component' 
    });
    this.style = { width: '100%' };
    const tr = new Tr();
    this.children.push(tr);
    tr.parent = this;
  }

  copy(): Cell {
    const thead = new Thead();

    thead.style = cloneDeep(this.style);
    thead.classes = cloneDeep(this.classes);
    thead.id = this.id;
    thead.innerHtml = this.innerHtml;

    return thead;
  }
}