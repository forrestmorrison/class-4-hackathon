import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import './App.css';
import DisplayArticleCard from './DisplayArticleCard';
import ListArticles from './ListArticles';
import SearchForm from './SearchForm';


class App extends Component {

  constructor() {
    super();
    this.state = {
      articlesArray: []
    }
  }

  getSearchInput(input) {
    return input;
  }

  getApiData(input) {
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.getSearchInput()}`)
      .then(response => response.json())
      .then(data => this.setState({articlesArray: data.hits}))
      .catch(err => console.error(err))
  }


  render() {
    // <ol>{this.state.articlesArray}</ol>
    return (
      <div>
        <h1>News Articles</h1>
          <SearchForm getSearchInput={this.getSearchInput}/>
      </div>
          // <ListArticles />
          // <DisplayArticleCard />

    )
  }

}


export default App;