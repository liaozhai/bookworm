import './SearchBox.css';

class SearchBox {
    constructor (container, {provider}) {
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