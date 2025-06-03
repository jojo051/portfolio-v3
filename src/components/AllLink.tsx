import LinkGithub from "./LinkGithub";
import LinkLinkedIn from "./LinkLinkedIn";
import LinkEmail from "./LinkEmail";

const AllLink = () => {
	return (
		<div className="flex flex-col items-center justify-between min-w-[360px] h-40 ">
			<LinkGithub />
			<LinkLinkedIn />
			<LinkEmail />
		</div>
	);
};

export default AllLink;