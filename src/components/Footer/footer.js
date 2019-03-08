// import React from 'react';
// import { BrowserRouter, Switch, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBookOpen, faUser, faListUl } from '@fortawesome/free-solid-svg-icons'

// import './footer.css';
// library.add(faBookOpen, faListUl, faUser)


// const Footer = () => (
//     <footer id="main-footer">
//     <BrowserRouter>
//     <Switch>
//         <Link className="icon-footer"><FontAwesomeIcon icon="book-open" size="2x" /></Link>
//         <Link className="icon-footer"><FontAwesomeIcon icon="list-ul" size="2x" /></Link>
//         <Link className="icon-footer"><FontAwesomeIcon icon="user" size="2x" /></Link>
//     </Switch>
//     </BrowserRouter>
//     </footer>
// );


// export default Footer;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen, faUser, faListUl } from '@fortawesome/free-solid-svg-icons'

import './footer.css';
library.add(faBookOpen, faListUl, faUser)

const Footer = () => (
    <Router>
        <footer id="main-footer">
            <Link to="/"><FontAwesomeIcon icon="book-open" /></Link>
            <Link className="active" to="/"><FontAwesomeIcon icon="list-ul" /></Link>
            <Link to="/"><FontAwesomeIcon icon="user" /></Link>
        </footer>
    </Router>
);
export default Footer;
