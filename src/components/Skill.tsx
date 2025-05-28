import BackEnd from "./BackEnd";
import Design from "./Desing";
import FrontEnd from "./FrontEnd";
import Other from "./Other";

const Skill = () => {
  return (
    <section id="skill">
      <h2>Skill</h2>
      <FrontEnd/>
      <BackEnd/>
      <Design/>
      <Other/>
    </section>
  );
};

export default Skill;