import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import routes from './route-home';

const RouteCombiner = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              children={<route.component />}
            />
          ))}
        </Switch>
    </Router>
  );
}

export default RouteCombiner;