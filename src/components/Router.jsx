import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'

import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";

export default props =>
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/company">Company</Link>
            <Link to="/newproject">Novo Projeto</Link>
        </div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/company' component={Company} />
            <Route path='/newproject' component={NewProject} />
        </Switch>
    </Router>