import s from "../pages/page.module.css";
import Conect from "./Conect";

export default function About() {
  return (
    <div className={s.mainContent}>
      <div className={s.about}>
        <h1 className={s.aboutName}>
          Nazar <br />
          <span className={s.aboutSeconName}>Kruzhylko</span>
        </h1>
        <h2 className={s.aboutPosition}>
          J u n i o r F r o n t - E n d d e v e l o p e r ( R e a c t J S )
        </h2>

        <p className={s.aboutDickription}>
          I am a Front-End developer. I am looking for a job as a Junior
          Front-End (ReactJS) developer in a friendly team to implement projects
          that change the world. I have strong knowledge of HTML, CSS,
          JavaScript, and React. Also, I have hands-on experience in following
          Agile /Scrum methodology when working in a team. I am a fast learner,
          responsible, and ready for difficult tasks.
        </p>
      </div>

      <div className={s.infoWraper}>
        <div>
          <h3 className={s.title}>Education</h3>
          <h4 className={s.education}>GoIT Full Stack developer</h4>
          <h4 className={s.education_position}>
            There I have acquired knowledge of Full-stack developer
          </h4>
          <p className={s.period}>2022 — 2023</p>

          <h4 className={s.education}>Lviv State Academy of Finance</h4>
          <h4 className={s.education_position}>
            Master's degree, Accounting and Audit
          </h4>
          <p className={s.period}>2008 - 2010</p>
        </div>

        <div>
          <h3 className={s.title}>Experience</h3>
          <ul className={s.experienceList}>
            <li className={s.experienceItem}>
              <h4 className={s.experienceTitle}>
                Contact book - ReactJS
                <span className={s.experienceSpan}>
                  <a className={s.link} href="#">
                    Link to GitHub(Code)
                  </a>
                </span>
              </h4>
              <p>
                The main goal of this project was to create a contact book where
                the user will be able to add, delete and filter their contacts.
                To develop this app I used the following technologies:
                Front-end: ReactJS/Redux-Toolkit/Redux-Thunk (Async Thunk)
                Back-end: Heroku, MongoDB Different libraries: Framer-motion,
                Axios, React-Vimeo, Prop-types, React-hook-form,
                React-hot-toast, React-loader-spinner, React-router-dom,
                Reduxpersist, Styled Components
              </p>
            </li>
            <li className={s.experienceItem}>
              <h4 className={s.experienceTitle}>
                Filmoteka (team project)
                <span className={s.experienceSpan}>
                  <a className={s.link} href="#">
                    Link to GitHub(Code)
                  </a>
                </span>
              </h4>
              <p>
                This application shows the latest movies, you can also watch the
                trailer. In your account there is an opportunity to save the
                films you want to watch later, they will be stored in the
                database. To create this application, our team used the
                following technologies such as HTML, CSS, SCSS, JavaScript, Rest
                API, Firebase, Node.js, Parcel etc.{" "}
              </p>
            </li>
            <li className={s.experienceItem}>
              <h4 className={s.experienceTitle}>
                Ice-cream (team project)
                <span className={s.experienceSpan}>
                  <a className={s.link} href="#">
                    Link to GitHub(Code)
                  </a>
                </span>
              </h4>
              <p>
                This project was a landing page for an ice cream shop. Based on
                the given design we developed a landing page adapted to any
                device starting with a screen width of 320px. I used their
                HTML/CSS/SCSS/BEM and Parcel. I have gained experience working
                in a team and experience in following Agile /Scrum methodology
                when working in a team.
              </p>
            </li>
          </ul>
        </div>
      </div>



      <Conect />
      
    </div>
  );

}
