import githubSymbol from "../assets/github-symbol-white.png"

const ProjectGitHub = () => {
  return (
    <div className="size-[300px] flex flex-col justify-around">
      <div className="flex justify-end px-3">
        <a href="http://https://github.com/jojo051/Bot-discord-jojo" target="_blank" rel="noopener noreferrer"><img className="size-6 mr-2 hover:scale-120" src={githubSymbol} alt="link github" /></a>
      </div>
      <h3 className="text-2xl font-bold text-center">Bot discord</h3>
      <p className="text-ellipsis px-3">Création d’un bot Discord pour en apprendre son fonctionnement. Il génère, via une API, des cocktails, et tous les jeudis à 20h, il envoie les jeux gratuits de l’Epic Games Store.</p>
      <div>
        <ul className="flex justify-center">
          <li className="border-[#104D87] border-2 rounded-xl px-2 mr-8">nodejs</li>
          <li className="border-[#104D87] border-2 rounded-xl px-2">railway</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectGitHub;