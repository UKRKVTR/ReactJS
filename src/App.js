import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import News from "./Components/newsItem/news";
import User from "./Components/User/index";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Contacts() {
  return <div>Contacts</div>;
}
function Components() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/counter`}>Counter</Link>
      {"   "}
      <Link to={`${url}/user`}>User</Link>
      <Switch>
        <Route path={`${path}/counter`}>
          <News />
        </Route>
        <Route path={`${path}/user`}>
          <User />
        </Route>
      </Switch>
    </div>
  );
}
function NotFound() {
  const history = useHistory();
  useEffect(() => {
    const id = setTimeout(() => {
      history.push("/");
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return <div>404 not found</div>;
}
