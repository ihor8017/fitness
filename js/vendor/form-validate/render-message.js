export class Message{constructor(){this._baseErrorText="Это поле является обязательным"}_messageTemplate(e,s){return`<span class="input-message ${"valid"===s?"is-valid":"is-invalid"}">${e}</span>`}removeMessage(e){const s=e.querySelector(".input-message");s&&s.remove()}renderMessage(e,s,a){this.removeMessage(e),e.insertAdjacentHTML("beforeend",this._messageTemplate(s,a))}}