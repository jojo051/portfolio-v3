import { useRouteError } from "react-router-dom";

interface RouteError {
	statusText?: string;
	message?: string;
}
export default function ErrorPage() {
	const error = useRouteError() as RouteError;

	return (
		<div>
			<h1>Oups, une erreur est survenue !</h1>
			<p>{error.message || error.statusText}</p>
		</div>
	);
}
