import './SearchBox.css';
import { EventTarget } from 'lib/EventTarget/src/EventTarget.js';

class SearchBox extends EventTarget {
    constructor (container, {provider}) {
        super();
        this._container = container;
        this._container.classList.add ('search-box');
        this._container.innerHTML = `<input type="text" value="">`;
        this._provider = provider;
        this._onInput = this._onInput.bind(this);
        this._container.addEventListener('keydown', this._onInput);
    }
    _onInput (e) {        
        switch (e.keyCode) {
            case 13:
                this._provider
                .find (this._container.querySelector('input').value.trim())
                .then(e => {
                    let event = document.createEvent('Event');
                    event.initEvent ('change', false, false);
                    event.detail = e;
                    this.dispatchEvent(event);
                })
                .catch(e => {
                    console.log(e);
                });
                break;
            default:
                break;
        }
    }
}

export { SearchBox };