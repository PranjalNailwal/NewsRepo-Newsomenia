import React, { Component } from 'react';
import AdSlot from './AdSlot';
import axios from 'axios';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // Replace 'YOUR_API_KEY' with your actual News API key
    const apiKey = '622ab2beca8249efa763d2d52785196a';
    const country = 'in'; 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ articles: response.data.articles });
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="news-list">
        <h2>Top Headlines</h2>
        {/* Display an ad slot */}
        <AdSlot adText="Advertisement" />
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
        {/* Display another ad slot */}
        <AdSlot adText="Advertisement" />
      </div>
    );
  }
}

export default NewsList;
