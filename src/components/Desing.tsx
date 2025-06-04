import figmaSymbol from "../assets/figma-symbol.png";

const Design = () => {
	return (
		<div>
			<h3 className="font-semibold text-2xl text-center">Design</h3>
			<ul>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={figmaSymbol} alt="Logo figma" />
					Figma
				</li>
			</ul>
		</div>
	);
};

export default Design;