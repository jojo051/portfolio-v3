import LinkGithub from "./LinkGithub";
import LinkLinkedIn from "./LinkLinkedIn";
import LinkEmail from "./LinkEmail";

const Presentation = () => {
	return (
		<section>
			<div>
				<div>
					<p>Hey there! I'm</p>
					<h1>Joël Rodier</h1>
					<p>Software engineer ...</p>
				</div>
				<div>
					<img src="" alt="my head" />
				</div>
			</div>
			<div>
				<LinkGithub />
				<LinkLinkedIn />
				<LinkEmail />
			</div>
		</section>
	);
};

export default Presentation;
