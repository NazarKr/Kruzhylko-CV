import s from "../pages/page.module.css";
import Image from "next/image";
import linkedin from "../../public/link.png";
import facebook from "../../public/fbook.png";
import github from "../../public/github.png";



export default function Conect() {
  return (
    <div>
      <div className={s.linkWraper}>
        <a className={s.link} href="#">
          Visit my social networks page to see more
        </a>
      </div>

      <ul className={s.conectList}>
        <li className={s.conectItem}>
          <Image src={linkedin} alt="linkedin" width={120} height={120}></Image>
          <a className={s.link} href="https://linkedin.com/in/nazar-kruzhylko">
            Linkedin
          </a>
        </li>

        <li className={s.conectItem}>
          <Image src={facebook} alt="facebook" width={120} height={120}></Image>
          <a
            className={s.link}
            href="https://www.facebook.com/profile.php?id=100000140926887"
          >
            Facebook
          </a>
        </li>

        <li className={s.conectItem}>
          <Image src={github} alt="github" width={120} height={120}></Image>
          <a className={s.link} href="https://github.com/NazarKr">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
