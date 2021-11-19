import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import AdminHomePage from "./pages/AdminHomePage";
import AllBlogByOneUser from "./pages/AllBlogByOneUser";
import AddUser from "./pages/AddUser";
import CreateBlog from "./pages/CreateBlog";
import UserHome from "./pages/UserHome";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin-home" component={AdminHomePage} />
          <Route path="/user-home" component={UserHome} />
          <Route path="/all-blog-by-one-user" component={AllBlogByOneUser} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/create-blog" component={CreateBlog} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
