import reactSymbol from "../assets/react-symbol.png";
import tailwindSymbol from "../assets/tailwind-symbol.png";
import jsSymbol from "../assets/javascript-symbol-white.png";

const FrontEnd = () => {
	return (
		<div>
			<h3 className="font-semibold text-2xl text-center">Front-end</h3>
			<ul>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={reactSymbol} alt="Logo react" />
					React
				</li>
				<li className="flex items-baseline justify-center" >
					<img className="size-4" src={tailwindSymbol} alt="logo tailwind" />
					Tailwind
				</li>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={jsSymbol} alt="logo js" />
					JavaScript
				</li>
			</ul>
		</div>
	);
};

export default FrontEnd;
