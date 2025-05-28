import LinkGithub from "./LinkGithub";
import LinkLinkedIn from "./LinkLinkedIn";
import LinkEmail from "./LinkEmail";

const Contact = () => {
	return (
		<section id="contact">
			<h2>Contact</h2>
			<div>
				<LinkGithub />
				<LinkLinkedIn />
				<LinkEmail />
			</div>
		</section>
	);
};

export default Contact;
