import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base' ;

// Global State
const state = {};

const controlSearch = async () => {

    const query = searchView.getInput();

    if(query) {
        state.search = new Search(query);
        await state.search.getResults();
        // console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});