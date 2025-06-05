import head from "../assets/head-joel.webp";

const NavBar = () => {
	return (
		<nav className="sticky top-0 flex justify-between items-center bg-[#111927] text-[#D6E1FF] h-14">
			<div className="w-40 flex justify-start px-5">
				<a href="#home">
					<img className="size-8 rounded-4xl" src={head} alt="myhead" />
				</a>
			</div>
			<div className="w-60 flex justify-around ">
				<a className="hover:scale-120" href="#skill"> Skill</a>
				<a className="hover:scale-120" href="#project">Project</a>
				<a className="hover:scale-120" href="#contact">Contact</a>
			</div>
		</nav>
	);
};

export default NavBar;
