import biomeSymbol from "../assets/biome-symbol.png";
import githubSymbol from "../assets/github-symbol-white.png";

const Other = () => {
	return (
		<div>
			<h3 className="font-semibold text-2xl text-center">Other</h3>
			<ul>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={githubSymbol} alt="Logo github" />
					Github
				</li>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={biomeSymbol} alt="Logo biome" />
					Biome
				</li>
			</ul>
		</div>
	);
};

export default Other;