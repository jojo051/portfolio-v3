import logoEmail from "../assets/mail-symbol.png";

const LinkEmail = () => {
	return (
		<div className="flex justify-around items-center border-2 bg-[#0D2847] border-[#104D87] rounded-xl w-25 h-7 hover:scale-120">
			<img className="h-5" src={logoEmail} alt="logo email" />
			<a className="font-semibold " href="mailto:rodier.joel1@gamil.com">
				Email
			</a>
		</div>
	);
};

export default LinkEmail;
