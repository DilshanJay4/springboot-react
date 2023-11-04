import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">Computer Item Repairing System</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/addrequest">Add</Link>
                                <Link className="nav-link" to="/updaterequest">Update</Link>
                                <Link className="nav-link" href={{}}>Pricing</Link>
                            </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;