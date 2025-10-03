import { Logic } from '@/models/logic';

export type LogicClass = typeof Logic;

export type LogicBlockItem = {
  $class: LogicClass;
  name: string;
  svg: string;
  render: any;
}