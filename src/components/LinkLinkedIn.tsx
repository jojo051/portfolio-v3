import logoLinkedIn from "../assets/linkedin-symbol.png";

const LinkLinkedIn = () => {
	return (
		<div className="flex justify-around items-center border-2 bg-[#0D2847] border-[#104D87] rounded-xl w-25 h-7 hover:scale-120">
			<img className="h-5" src={logoLinkedIn} alt="logo linkedin" />
			<a className="font-semibold " href="https://www.linkedin.com/in/joël-rodier-6280b41a4" target="_blank" rel="noreferrer">
				LinkedIn
			</a>
		</div>
	);
};

export default LinkLinkedIn;
