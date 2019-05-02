import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Components
import BlogNavbar from './components/BlogNavbar';
import NotFoundPage from './components/NotFoundPage';

//Containers
import BlogListContainer from './containers/BlogListContainer';
import NewBlogFormContainer from './containers/NewBlogFormContainer';
import EditBlogFormContainer from './containers/EditBlogFormContainer';
import SelectedBlogContainer from './containers/SelectedBlogContainer';

//CSS
import './css/Blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render(){
    return (
      <div id="container">
        <BlogNavbar />
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Redirect to="/blogs" />
            </Route>

            <Route path="/blogs/page/1">
              <Redirect to="/blogs" />
            </Route>

            <Route path="/blogs/new" component={NewBlogFormContainer} />

            <Route 
              path="/blogs/page/:pageNumber" 
              render={routeProps => (
                <BlogListContainer routeProps={routeProps} />                    
              )}                     
            />

            <Route 
              path="/blogs/:id/edit" 
              render={routeProps => (
                <EditBlogFormContainer routeProps={routeProps} />
              )} 
            />
            <Route 
              path="/blogs/:id" 
              render={routeProps => (
                <SelectedBlogContainer routeProps={routeProps} />                    
              )}                     
            />

            <Route 
              path="/blogs" 
              render={routeProps => (
                <BlogListContainer routeProps={routeProps} />                    
              )}                     
            />

            <Route path="/" component={NotFoundPage} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;