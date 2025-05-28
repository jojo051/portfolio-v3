import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<div>
				<Link to="/">
					<img src="" alt="home" />
				</Link>
			</div>
			<div>
				<a href="#skill"> Skill</a>
				<a href="#project">Project</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	);
};

export default NavBar;
