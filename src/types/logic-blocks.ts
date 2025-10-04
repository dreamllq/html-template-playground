import { Logic } from '@/models/logic';

class A {}

export type LogicClass = typeof A;

export type LogicBlockItem = {
  $class: LogicClass;
  name: string;
  svg: string;
  render: any;
}