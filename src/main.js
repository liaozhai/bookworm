import './main.css';
import { Application } from 'app/main.js';
import { SearchBox } from 'app/SearchBox/SearchBox.js';
import { DictionaryProvider } from 'app/DataProviders/DictionaryProvider.js';
import { LexicalEntry } from 'app/LexicalEntry/LexicalEntry.js';

let searchBox = new SearchBox (document.getElementById('search'), {
    provider: new DictionaryProvider()
});

let lemma = new Lemma(document.getElementById('lemma'));
searchBox.addEventListener('change', e => {    
    lemma.item = e.detail;
});
let app = new Application (document.getElementById('content'), {lemma});
