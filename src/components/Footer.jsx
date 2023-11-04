import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

    }


    render() {
        return (
            <div>
                
                    <footer className="py-3 mb-0 my-4 mt-5 bg-dark footer" data-bs-theme="dark">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href={{}} className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href={{}} className="nav-link px-2 text-body-secondary">Features</a></li>
                        <li className="nav-item"><a href={{}} className="nav-link px-2 text-body-secondary">Pricing</a></li>
                        <li className="nav-item"><a href={{}} className="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li className="nav-item"><a href={{}} className="nav-link px-2 text-body-secondary">About</a></li>
                        </ul>
                        <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
                    </footer>
              

            </div>
        );
    }
}

export default Footer;