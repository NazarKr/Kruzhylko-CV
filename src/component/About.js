import s from "../pages/page.module.css";
import Conect from "./Conect";
import Education from "./about/education";
import Experience from "./about/experience";

export default function About() {
  return (
    <div className={s.mainContent}>
      <div className={s.about}>
        <h1 className={s.aboutName}>
          Nazar <br />
          <span className={s.aboutSeconName}>Kruzhylko</span>
        </h1>
        <h2 className={s.aboutPosition}>
          Junior FULLSTACK developer (React JS/NODE JS)
        </h2>

        <p className={s.aboutDickription}>
          I am a FULLSTACK developer and I looking for a job as a Junior
          FULLSTACK (ReactJS/NODE JS) developer in a friendly team to implement
          projects that change the world.
          <br />I am passionate about being part of the creative process of
          solutions to the different challenges through analysis, meticulous,
          neat and quality construction to implement the best product that is
          required.
          <br />I have strong knowledge of HTML, CSS, JavaScript, React and Node
          JS. Also, I have hands-on experience in following Agile /Scrum
          methodology when working in a team. Regarding my qualities, I can
          mention the fact that I am very dedicated, with a strong sense of duty
          and responsibility in each job entrusted to me, assuming a cooperative
          and adaptable attitude in the use of different technological tools. I
          have a great motivation to learn and acquire new knowledge in order to
          be able to contribute in any work setting.
        </p>
      </div>

      <div className={s.infoWraper}>
        <Experience/>
        <Education/>
      </div>

      <Conect />
    </div>
  );
}
