import { CELL_TYPE, TSize } from '@/types/common';
import { DrawingBoard } from './drawing-board';
import { ComponentBlocks } from './component-blocks';
import { LogicBlocks } from './logic-blocks';

export class Playground {
  width: TSize = '100%';
  height: TSize = '900px';

  drawingBoard: DrawingBoard = new DrawingBoard();
  componentBlocks: ComponentBlocks = new ComponentBlocks();
  logicBlocks: LogicBlocks = new LogicBlocks();

  init(configs:any[]) {
    this.drawingBoard.document.list = configs.map(item => this.newClassByConfig(item));
  }

  newClassByConfig(item:any) {
    if (item.type === CELL_TYPE.COMPONENT) {
      const block = this.componentBlocks.list.find(cb => cb.name === item.name);
      if (!block) return;
      const CClass = block.$class;
      const itemComponent = new CClass();
      itemComponent.cId = item.cId;
      itemComponent.style = item.style;
      itemComponent.classes = item.classes;
      itemComponent.id = item.id;
      itemComponent.innerHtml = item.innerHtml;

      if (Array.isArray(item.children) && item.children.length > 0) {
        const children = item.children.map(child => this.newClassByConfig(child));
        children.forEach(child => {
          child.parent = itemComponent; 
        });
        itemComponent.children = children;
      }

      return itemComponent;
    } else if (item.type === CELL_TYPE.LOGIC) {
      const block = this.logicBlocks.list.find(cb => cb.name === item.name);
      if (!block) return;
      const LClass = block.$class;
      const itemLogic = new LClass();
      itemLogic.cId = item.cId;
      if (item.name === 'for') {
        itemLogic.alias0 = item.alias0;
        itemLogic.alias1 = item.alias1;
        itemLogic.expression = item.expression;
      } else if (item.name === 'if') {
        itemLogic.condition = item.condition;
      }

      if (Array.isArray(item.children) && item.children.length > 0) {
        const children = item.children.map(child => this.newClassByConfig(child));
        children.forEach(child => {
          child.parent = itemLogic; 
        });
        itemLogic.children = children;
      }

      return itemLogic;
    }
  }
}