import React from 'react'
import ReactDOM from 'react-dom'
import ArticleList from './components/articleList.jsx'


class App extends React.Component {
  render() {
    return(
      <ArticleList />
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))
