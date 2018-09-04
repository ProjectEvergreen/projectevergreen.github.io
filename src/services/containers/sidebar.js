import { LitElement, html } from '@polymer/lit-element';
import css from './sidebar.css';
import '../../components/social-links-bar/social-links-bar';
class Drawer extends LitElement {
  constructor() {
    super();

  }
  _render() {
    return html`
      <style>
        ${css}
      </style>
    <div class="SideDrawer"> 
       This sidebar
       <br/>
       only applied
       <br/>
       on mobile
       <br/>
       view
       <x-social-links-bar></x-social-links-bar>
      
    </div>
    `;
  }
}
customElements.define('x-drawer', Drawer);