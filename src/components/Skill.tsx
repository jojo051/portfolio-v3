import BackEnd from "./BackEnd";
import Design from "./Desing";
import FrontEnd from "./FrontEnd";
import Other from "./Other";

const Skill = () => {
	return (
		<section className="bg-[#111927] text-[#D6E1FF] min-w-[360px] maw-w[100vw] py-4" id="skill">
			<h2 className="text-4xl font-bold text-center mb-4">Skill</h2>
			<div className="grid grid-flow-col grid-rows-2">
				<FrontEnd />
				<BackEnd />
				<Design />
				<Other />
			</div>
		</section>
	);
};

export default Skill;
