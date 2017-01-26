import React from 'react'
import request from 'superagent'
export default class ArticleList extends React.Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }
  componentDidMount () {
    request.get('https://jsonplaceholder.typicode.com/posts', (err, res) => {
      if (err) throw err
      else this.setState({data: res.body})
    })

  }
  render () {
    if(!this.state.data) return <h1>Loading articles..</h1>
    else {
      return <ul>
      {
        this.state.data.map( (article) => {
          return (
            <li key={article.id} className="article">
              <a href="/">
                <h3>{article.title}</h3>
              </a>
            </li>
          )
        })
      }
    </ul>
      }
    }
  }
