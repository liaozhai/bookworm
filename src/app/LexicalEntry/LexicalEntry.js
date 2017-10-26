import './LexicalEntry.css';

class LexicalEntry {
    constructor(container) {
        this._container = container;
        this._container.classList.add ('lexical-entry');
        this._container.innerHTML = 
        `<div class="lemma">
            <div class="written-form"></div>            
            <div class="senses"></div>
        </div>`;
    }
    set item ({w, p, x}) {
        this._container.querySelector('.written-form').innerText = w;
        this._container.querySelector('.senses').innerHTML = p.map(i => `<div class="sense"><div class="phonetic-form">${i}</div><div class="definition"></div></div>`).join('')
    }
    renderSenses (values){
        return values.map(x => `<div class="sense">${x}</div>`);
    }

}
export { Lemma };