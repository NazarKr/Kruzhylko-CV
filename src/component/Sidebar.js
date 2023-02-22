import s from "../pages/page.module.css";
import Image from "next/image";
import Avatar from "../../public/Air_2.png";
import { BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Sidebar() {
  return (
    <div>
      <aside className={s.sidebar}>
          <Image src={Avatar} alt="avatar" width={370} height={354}></Image>

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
  );
}
