import AllLink from "./AllLink";
import head from "../assets/head-joel.webp";

const Presentation = () => {
	return (
		<section className="bg-[#111927] text-[#D6E1FF] flex flex-col items-center justify-around h-[80vh] min-w-[360px] maw-w[100vw] ">
			<div className="flex w-[70vw] h-2/3 ">
				<div className="flex flex-col justify-center w-2/3">
					<p className="text-[#70B8FF]">Hey there! I'm</p>
					<h1 className="text-[#70B8FF] text-3xl">Joël Rodier</h1>
					<p>Software engineer ...</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<img className="rounded-4xl h-18" src={head} alt="my head" />
				</div>
			</div>
			<div className="h-1/3">
				<AllLink />
			</div>
		</section>
	);
};

export default Presentation;