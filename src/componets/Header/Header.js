import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <div>
            <div className="header">
            <div id="header " className='sticky-top'>
                
                <nav className="navbar navbar-expand-lg  sticky-top dg">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                           
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
                            </li>
                            
                            <li className="nav-item style dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products & Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                            </li>

                            <li className="nav-item style ">
                            <a className="nav-link active" aria-current="page"  href="/">Our Promise</a>
                            </li>
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page"  href="/">Global Locations</a>
                            </li>
                            <li className="nav-item style">
                            <a className="nav-link active" aria-current="page"  href="/">{props.about}</a>
                            </li>

                        <li className="nav-item style ">
                        <form className="d-flex" role="search"/>
                            <input id=' search' className=" me-2" type="search" placeholder="Search" aria-label="Search"/>
                           
                            <button className="cBtn" type="submit">Contract Us</button>
                        </li>

                      
                           
                        </ul>
                       
                        
                        </div>
                    </div>
                    </nav>
                
            </div>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes ={
    title: PropTypes.string,
    about: PropTypes.string
}
Header.defaultProps ={
    title: 'Nav Title',
    about: 'Nav About'
}