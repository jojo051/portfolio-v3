import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
	return (
		<>
			<Presentation />
			<hr className="text-[#D6E1FF]" />
			<Skill />
			<hr className="text-[#D6E1FF]" />
			<Projects />
			<hr className="text-[#D6E1FF]" />
			<Contact />
		</>
	);
}

export default App;
