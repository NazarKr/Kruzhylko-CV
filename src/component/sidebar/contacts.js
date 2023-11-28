import s from "../../pages/page.module.css";
import { BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Contacts() {
  return (
    <>
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
              Gmail.com
            </a>
          </li>
          <li className={s.contaktsList}>
            <BsPhone />
            <a className={s.link} href="https://t.me/Kruzhylko_N">
              Telegram
            </a>
          </li>
          <li className={s.contaktsList}>
            <BsLinkedin />
            <a
              className={s.link}
              href="https://linkedin.com/in/nazar-kruzhylko"
            >
              LinkedIn
            </a>
          </li>
          <li className={s.contaktsList}>
            <BsGithub />
            <a className={s.link} href="https://github.com/NazarKr">
              GitHub
            </a>
          </li>
          <li className={s.contaktsList}>
            <MdOutlineLocationOn />
            <a className={s.link} href="https://goo.gl/maps/VT93x1vkDg4NJ3JZ8">
              82100, Drogobych, Ukraine
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
