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

  appendChild(cell: Cell) {
    this.list.push(cell);
  }

  insertBefore(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.list.findIndex(item => item.cId === referenceCell.cId);
      this.list.splice(index, 0, newCell);
    }
  }

  insertAfter(newCell: Cell, referenceCell: Cell | null) {
    if (referenceCell === null) {
      this.appendChild(newCell);
    } else {
      const index = this.list.findIndex(item => item.cId === referenceCell.cId);
      this.list.splice(index + 1, 0, newCell);
    }
  }
}