import { Component } from '@/models/component';

export type ComponentClass = typeof Component;

export type ComponentBlockItem = {
  $class: ComponentClass;
  name: string;
  svg: string;
  render: any;
}