import Image from "next/image";
import s from "./page.module.css";
import Avatar from "../../public/Air_1.jpg";
import { BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Home() {
  return (
    <main className={s.main}>
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
            Front-End (ReactJS) developer in a friendly team to implement
            projects that change the world. I have strong knowledge of HTML,
            CSS, JavaScript, and React. Also, I have hands-on experience in
            following Agile /Scrum methodology when working in a team. I am a
            fast learner, responsible, and ready for difficult tasks.
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
                  The main goal of this project was to create a contact book
                  where the user will be able to add, delete and filter their
                  contacts. To develop this app I used the following
                  technologies: Front-end: ReactJS/Redux-Toolkit/Redux-Thunk
                  (Async Thunk) Back-end: Heroku, MongoDB Different libraries:
                  Framer-motion, Axios, React-Vimeo, Prop-types,
                  React-hook-form, React-hot-toast, React-loader-spinner,
                  React-router-dom, Reduxpersist, Styled Components
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
                  This application shows the latest movies, you can also watch
                  the trailer. In your account there is an opportunity to save
                  the films you want to watch later, they will be stored in the
                  database. To create this application, our team used the
                  following technologies such as HTML, CSS, SCSS, JavaScript,
                  Rest API, Firebase, Node.js, Parcel etc.{" "}
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
                  This project was a landing page for an ice cream shop. Based
                  on the given design we developed a landing page adapted to any
                  device starting with a screen width of 320px. I used their
                  HTML/CSS/SCSS/BEM and Parcel. I have gained experience working
                  in a team and experience in following Agile /Scrum methodology
                  when working in a team.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.linkWraper}>
          <a className={s.link} href="#">
            Visit my GitHub page to see more
          </a>
        </div>
      </div>

      <div>
        <aside className={s.sidebar}>
          <div>
            <Image src={Avatar} alt="avatar" width={370} height={354}></Image>
          </div>

          <div className={s.contakts}>
            <ul>
              <li className={s.contaktsList}>
                <BsPhone />
                <a className={s.link} href="tel:+380983431777">
                  +380983431777
                </a>
              </li>
              <li className={s.contaktsList}>
                <AiOutlineMail />
                <a className={s.link} href="mailto:nazarok1990@gmail.com">
                  nazarok1990@gmail.com
                </a>
              </li>
              <li className={s.contaktsList}>
                <MdOutlineLocationOn />
                <a
                  className={s.link}
                  href="https://goo.gl/maps/VT93x1vkDg4NJ3JZ8"
                >
                  82100, Drogobych
                </a>
              </li>
              <li className={s.contaktsList}>
                <BsLinkedin />
                <a
                  className={s.link}
                  href="https://linkedin.com/in/nazar-kruzhylko"
                >
                  https://linkedin.com/in/nazar-kruzhylko
                </a>
              </li>
              <li className={s.contaktsList}>
                <BsGithub />
                <a className={s.link} href="https://github.com/NazarKr">
                  https://github.com/NazarKr
                </a>
              </li>
            </ul>
          </div>

          <div className={s.skils}>
            <h4 className={s.skilsTitle}>HARD SKILLS</h4>
            <ul>
              <li className={s.skilsList}>HTML5 / CSS3 / SCSS</li>
              <li className={s.skilsList}>Responsive / Adaptive layout</li>
              <li className={s.skilsList}>JavaScript</li>
              <li className={s.skilsList}>Rest API</li>
              <li className={s.skilsList}>React / Redux-ToolKit</li>
              <li className={s.skilsList}>Webpack / Parcel</li>
              <li className={s.skilsList}>Git / GitHub</li>
              <li className={s.skilsList}>NextJs / React Native</li>
            </ul>
          </div>

          <div className={s.skils}>
            <h4 className={s.skilsTitle}>SOFT SKILLS</h4>
            <ul>
              <li className={s.skilsList}>Determined</li>
              <li className={s.skilsList}>Teamwork </li>
              <li className={s.skilsList}>Hardworking</li>
              <li className={s.skilsList}>Organizational skills</li>
              <li className={s.skilsList}>Creative thinking skills</li>
              <li className={s.skilsList}>Willingness to learn</li>
              <li className={s.skilsList}>Problem-solving skills</li>
              <li className={s.skilsList}>Quick learning skills</li>
            </ul>
          </div>

          <div className={s.skils}>
            <h4 className={s.skilsTitle}>Language</h4>
            <ul>
              <li className={s.skilsList}>English - Upper-Intermediate</li>
              <li className={s.skilsList}>Ukrainian - рідна солов'їна</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
