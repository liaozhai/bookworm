class DictionaryProvider {
    constructor() {        
    }
    find (text) {
        return new Promise ((resolve, reject) => {
            resolve(text);
        });
    }
}

export { DictionaryProvider };