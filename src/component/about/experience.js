import s from "../../pages/page.module.css";
import { projectData, workData } from "../../lib/dataExperience";
import Link from "next/link";

export default function Experience() {
  return (
    <>
      <div>
        <h3 className={s.title}>Work Experience</h3>
        <ul className={s.experienceList}>
          {workData.map((experience, index) => (
            <li key={index} custom={index} className={s.experienceItem}>
              <div className={s.experienceAbout}>
                <h4 className={s.experienceTitle}>{experience.title}</h4>
                <Link href={experience.href} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.experiencelink}
                  >
                    <span className={s.experienceSpan}>Link to Page</span>
                  </a>
                </Link>
              </div>
              <p>{experience.about}</p>
              <p className={s.period}>{experience.period}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={s.title}>Project Experience</h3>
        <ul className={s.experienceList}>
          {projectData.map((experience, index) => (
            <li key={index} custom={index} className={s.experienceItem}>
              <div className={s.experienceAbout}>
                <h4 className={s.experienceTitle}>{experience.title}</h4>
                <Link href={experience.href} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.experiencelink}
                  >
                    <span className={s.experienceSpan}>Link to Page</span>
                  </a>
                </Link>
              </div>
              <p>{experience.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
