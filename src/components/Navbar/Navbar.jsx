import React from "react";
import "./NavbarStyles.css";
import Logo from "../../assets/logo-black&white-png.png";

function Navbar() {
	return (
		<>
			<section className="nav-section">
				<div className="nav-container">
						<a href="/"  className="logo-a">
                            <img src={Logo} alt="Brand-Logo" className="logo" />
                        </a>
                        <a href="/" className="login-btn">LOGIN</a>
				</div>
			</section>
		</>
	);
}

export default Navbar;
