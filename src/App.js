import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import PostItem from './components/postItem'

const App = ()=> {
  return (
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" exact component={Home}/>
            
            <Route render={()=>(
              <h2>Ooops....... Página não encontrada :(</h2>
            )}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
