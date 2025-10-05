import { cloneDeep } from 'lodash';
import { Cell } from '../cell';
import { Component } from '../component';
import { Thead } from './thead';
import { Tr } from './tr';
import { Tbody } from './tbody';

export class Table extends Component {
  constructor() {
    super({
      name: 'table',
      innerHtml: 'component' 
    });
    this.style = {
      minHeight: '40px',
      width: '100%' 
    };

    const thead = new Thead();
    this.children.push(thead);
    thead.parent = this;

    const tbody = new Tbody();
    this.children.push(tbody);
    tbody.parent = this;
  }

  copy(): Cell {
    const table = new Table();

    table.style = cloneDeep(this.style);
    table.classes = cloneDeep(this.classes);
    table.id = this.id;
    table.innerHtml = this.innerHtml;

    return table;
  }
}