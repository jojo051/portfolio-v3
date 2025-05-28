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
				<Link to="#skill"> Skill</Link>
				<Link to="#project">Project</Link>
				<Link to="#contact">Contact</Link>
			</div>
		</nav>
	);
};

export default NavBar;
