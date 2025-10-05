import { FlatItem } from '@/types/cell';
import { CELL_TYPE } from '@/types/common';
import { v4 as uuidv4 } from 'uuid';

export class Cell {
  private _cId: string;
  children: Cell[] = [];
  private _type: CELL_TYPE = CELL_TYPE.COMPONENT;
  parent?:Cell;
  private _name: string = '';

  constructor(data: {type:CELL_TYPE, name:string, cId?:string}) {
    this._cId = data.cId || uuidv4();
    this._type = data.type;
    this._name = data.name;
  }

  get deep(): number {
    if (this.parent) {
      return this.parent.deep + 1;
    } else {
      return 0;
    }
  }

  get type () {
    return this._type;
  }

  get cId() {
    return this._cId;
  }

  set cId(cId:string) {
    this._cId = cId;
  }

  get name () {
    return this._name;
  }

  get info () {
    return this._name;
  }

  appendChild(cell: Cell) {
    this.children.push(cell);
    cell.parent = this;
  }

  insertBefore(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.children.findIndex(item => item.cId === referenceCell.cId);
      this.children.splice(index, 0, newCell);
      newCell.parent = this;
    }
  }

  insertAfter(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.children.findIndex(item => item.cId === referenceCell.cId);
      this.children.splice(index + 1, 0, newCell);
      newCell.parent = this;
    }
  }

  removeChildById(id: string) {
    this.children = this.children.filter(item => item.cId !== id);
  }

  copy() {
    return new Cell(this.type, this.name);
  }

  toJson() {
    return {
      cId: this._cId,
      type: this._type,
      name: this._name,
      children: this.children.map(item => item.toJson())
    };
  }

  flat(): FlatItem[] {
    const current = {
      cId: this._cId,
      type: this._type,
      name: this._name,
      info: this.info,
      deep: this.deep
    };

    const children = this.children.reduce<FlatItem[]>((acc, child) => [...acc, ...child.flat()], []);

    return [current, ...children];
  }
}