import './main.css';
import { Application } from './app/main.js';
import { SearchBox } from './app/SearchBox/SearchBox.js';
import { DictionaryProvider } from './app/DataProviders/DictionaryProvider.js';

let searchBox = new SearchBox (document.getElementById('search'), {
    provider: new DictionaryProvider()
});
let app = new Application (document.getElementById('content'));
