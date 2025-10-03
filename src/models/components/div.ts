import { Component } from '../component';

export class Div extends Component {
  constructor() {
    super({
      name: 'div',
      innerHtml: 'component' 
    });
  }
}