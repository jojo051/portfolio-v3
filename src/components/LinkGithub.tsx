import logoGitHub from "../assets/github-symbol-white.png";

const LinkGithub = () => {
	return (
		<div className="flex justify-around items-center border-2 bg-[#0D2847] border-[#104D87] rounded-xl w-25 h-7 hover:scale-120">
			<img className="h-5" src={logoGitHub} alt="logo github" />
			<a className="font-semibold " href="https://github.com/jojo051" target="_blank" rel="noreferrer">
				Github
			</a>
		</div>
	);
};

export default LinkGithub;
