import s from "../../pages/page.module.css";
import { HardskillsData, languagesData, softSkillsData } from "../../lib/data";

export default function Skills() {
  return (
    <>
      <div className={s.skils}>
        <h4 className={s.skilsTitle}>HARD SKILLS</h4>
        <ul>
          {HardskillsData.map((skill, index) => (
            <li key={index} custom={index} className={s.skilsList}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.skils}>
        <h4 className={s.skilsTitle}>SOFT SKILLS</h4>
        <ul>
          {softSkillsData.map((skill, index) => (
            <li key={index} custom={index} className={s.skilsList}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.skils}>
        <h4 className={s.skilsTitle}>Language</h4>
        <ul>
          {languagesData.map((skill, index) => (
            <li key={index} custom={index} className={s.skilsList}>
              {skill.language} - {skill.level}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
