import {CorsRequest} from 'lib/CorsRequest/src/CorsRequest.js';

class DictionaryProvider {
    constructor() {        
    }
    find (text) {
        let headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');        
        return new Promise ((resolve, reject) => {        
            fetch('lemma', {method: 'POST', body: `text=${text}`, headers})
            .then(response => resolve(response.json()))
            .catch(e => {
                reject(e);
            });
        });
    }
}

export { DictionaryProvider };