import Project from "./Project";

const Projects = () => {
	return (
		<section className="flex flex-col justify-center items-center bg-[#111927] text-[#D6E1FF] min-w-[360px] maw-w[100vw] pt-4 pb-6" id="project">
			<h2 className="text-4xl font-bold text-center mb-4">Project</h2>
			<div className="border-[#D6E1FF] box-border rounded-4xl size-[300px] border-2">
				<Project />
			</div>

		</section>
	);
};

export default Projects;