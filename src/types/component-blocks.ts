import { Component } from '@/models/component';

class A {}

export type ComponentClass = typeof A;

export type ComponentBlockItem = {
  $class: ComponentClass;
  name: string;
  svg: string;
  render: any;
}