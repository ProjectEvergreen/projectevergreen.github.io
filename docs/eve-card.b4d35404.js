import{L as e,h as r}from"./lit-element.4e4bdcd5.js";customElements.define("eve-card",class extends e{static get properties(){return{img:{type:String},size:{type:String}}}renderImage(){if(this.img)return r`
        <img src="${this.img}" class="card-img-top" />
      `}render(){return r`
    <style>
      ${":host .card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:initial;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}:host .card .body{padding:10px}:host .card-xs{-ms-flex:1 1 16.666%;flex:1 1 16.666%;max-width:250px}:host .card-sm,:host .card-xs{-webkit-box-flex:1;margin:.25rem}:host .card-sm{-ms-flex:1 1 25%;flex:1 1 25%;max-width:380px}:host .card-md{-webkit-box-flex:1;-ms-flex:1 1 33.333%;margin:.25rem;flex:1 1 33.333%;max-width:450px}:host .card-img-top{width:100%;background-size:cover;background-position-x:center;background-position-y:center}"}
    </style>
      <div class="card ${this.size?`card-${this.size}`:""}">
        ${this.renderImage()}
        <slot></slot>
      </div>
    `}});
