class Application {
    constructor (container, {lemma}) {
        this._container = container;
        this._container.classList.add ('application');
        this._lemma = lemma;
    }
}

export { Application };