import { TSize } from '@/types/common';
import { DrawingBoard } from './drawing-board';
import { ComponentBlocks } from './component-blocks';
import { LogicBlocks } from './logic-blocks';

export class Playground {
  width: TSize = '100%';
  height: TSize = '900px';

  drawingBoard: DrawingBoard = new DrawingBoard();
  componentBlocks: ComponentBlocks = new ComponentBlocks();
  logicBlocks: LogicBlocks = new LogicBlocks();
}