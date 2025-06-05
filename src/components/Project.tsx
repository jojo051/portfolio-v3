import githubSymbol from "../assets/github-symbol-white.png"
import externalLinkSymbol from "../assets/external-link-symbol-white.png";

const Project = () => {
  return (
    <div className="size-[300px] flex flex-col justify-around">
      <div className="flex justify-end px-3">
        <a href="http://" target="_blank" rel="noopener noreferrer"><img className="size-6 mr-2 hover:scale-120" src={githubSymbol} alt="link github" /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><img className="size-6 mr-2 hover:scale-120" src={externalLinkSymbol} alt="link project" /></a>
      </div>
      <h3 className="text-2xl font-bold text-center">Title project</h3>
      <p className="text-ellipsis px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eveniet, repudiandae quo aspernatur autem maiores error commodi consectetur explicabo.</p>
      <div>
        <ul className="flex justify-center">
          <li className="border-[#104D87] border-2 rounded-xl px-2">react</li>
          <li className="border-[#104D87] border-2 rounded-xl px-2 mx-6">nodejs</li>
          <li className="border-[#104D87] border-2 rounded-xl px-2">tailwind</li>
        </ul>
      </div>
    </div>
  );
};

export default Project;