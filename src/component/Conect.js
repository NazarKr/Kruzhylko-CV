import s from "../pages/page.module.css";
import Image from "next/image";
import linkedin from "../../public/link.png";
import facebook from "../../public/fbook.png";
import github from "../../public/github.png";



export default function Conect() {
  return (
    <div>
      <div className={s.socialWraper}>
        <p className={s.socialText}>
          Visit my social networks page to see more
        </p>
      </div>

      <ul className={s.socialList}>
        <li className={s.socialItem}>
          <Image src={linkedin} alt="linkedin" width={120} height={120}></Image>
          <a
            className={s.sociallink}
            href="https://linkedin.com/in/nazar-kruzhylko"
          >
            Linkedin
          </a>
        </li>

        <li className={s.socialItem}>
          <Image src={facebook} alt="facebook" width={120} height={120}></Image>
          <a
            className={s.sociallink}
            href="https://www.facebook.com/profile.php?id=100000140926887"
          >
            Facebook
          </a>
        </li>

        <li className={s.socialItem}>
          <Image src={github} alt="github" width={120} height={120}></Image>
          <a className={s.sociallink} href="https://github.com/NazarKr">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
