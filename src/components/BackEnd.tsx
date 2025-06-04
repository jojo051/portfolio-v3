import nodejsSymbol from "../assets/node-javascript-symbol.png";
import expressSymbol from "../assets/express-symbol.png";
import mysqlSymbol from "../assets/mysql-symbol.png";
import dockerSymbol from "../assets/docker-symbol.png";

const BackEnd = () => {
	return (
		<div>
			<h3 className="font-semibold text-2xl text-center">Back-end</h3>
			<ul>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={nodejsSymbol} alt="Logo nodejs" />
					NodeJS
				</li>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={expressSymbol} alt="logo express" />
					Express
				</li>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={mysqlSymbol} alt="logo mysql" />
					Mysql
				</li>
				<li className="flex items-baseline justify-center">
					<img className="size-4" src={dockerSymbol} alt="logo docker" />
					Docker
				</li>
			</ul>
		</div>
	);
};

export default BackEnd;