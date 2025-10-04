import { Cell } from './cell';

const walk = (list:Cell[], cb:(cell:Cell)=>void) => {
  list.forEach(item => {
    cb(item);
    walk(item.children, cb);
  });
};

export class Document {
  list: Cell[] = [];

  getByCId(id: string):Cell | undefined {
    let result:Cell | undefined = undefined;
    walk(this.list, (cell) => {
      if (cell.cId === id) {
        result = cell;
      }
    });

    return result;
  }

  removeById(id: string) {
    const cell = this.getByCId(id)!;
    if (cell.parent) {
      cell.parent.removeChildById(id);
    } else {
      // const index = this.list.findIndex(item => item.cId === id);
      // this.list.splice(index, 1);
      this.list = this.list.filter(item => item.cId !== id);
    }
  }

  appendChild(cell: Cell) {
    this.list.push(cell);
    cell.parent = undefined;
  }

  insertBefore(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.list.findIndex(item => item.cId === referenceCell.cId);
      this.list.splice(index, 0, newCell);
      newCell.parent = undefined;
    }
  }

  insertAfter(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.list.findIndex(item => item.cId === referenceCell.cId);
      this.list.splice(index + 1, 0, newCell);
      newCell.parent = undefined;
    }
  }

  toJson() {
    return this.list.map(item => item.toJson());
  }
}