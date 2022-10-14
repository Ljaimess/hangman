import React from "react";

const NavBar = props => (
    <nav style={{ color: "black" }} className="navbar navbar-expand navbar-expand-lg ">
        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a style={{ color: "gainsboro" }} className="nav-link" aria-current="page" href="/">Home</a>
                    <a style={{ color: "gainsboro" }} className="nav-link" href="/projects">Projects</a>
                    <a style={{ color: "gainsboro" }} className="nav-link" href="/about">About</a>
                    <a style={{ color: "gainsboro" }} className="nav-link" href="/contact">Contact</a>
                    <a style={{ color: "gainsboro" }} className="nav-link" href="/links">Links</a>

                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;

