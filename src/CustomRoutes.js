import React from 'react';
import Home from './component/Home.js';
import About from './component/About.js';
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const customHistory = createBrowserHistory();

function CustomRoutes() {
    return (
        <Router history={customHistory}>
            <div>

                {/* Method # 1  */}
                {/* <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} /> */}

                {/* Method # 2 */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default CustomRoutes;