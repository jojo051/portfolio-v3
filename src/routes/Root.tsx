import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<div>
			<nav>
				<Link to="/">Accueil</Link>
			</nav>
			<hr />
			<Outlet />
		</div>
	);
}
