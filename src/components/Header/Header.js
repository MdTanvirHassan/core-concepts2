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
                            <a className="nav-link active" aria-current="page" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
</svg></a>
                            </li>
                           
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
                            <a className="nav-link active" aria-current="page"  href="../About/About.js" target="blank">{props.about}</a>
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
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Header.defaultProps ={
    title: 'Nav Title',
    about: 'Nav About'
}