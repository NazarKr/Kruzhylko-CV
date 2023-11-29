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
          <div class={s.socialFirstContent}>
            <span>Linkedin</span>
          </div>
          <div class={s.socialSecondContent}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={s.sociallink}
              href="https://linkedin.com/in/nazar-kruzhylko"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                width={120}
                height={120}
              ></Image>
            </a>
          </div>
        </li>

        <li className={s.socialItem}>
          <div class={s.socialFirstContent}>
            <span>Facebook</span>
          </div>
          <div class={s.socialSecondContent}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={s.sociallink}
              href="https://www.facebook.com/profile.php?id=100000140926887"
            >
              <Image
                src={facebook}
                alt="facebook"
                width={120}
                height={120}
              ></Image>{" "}
            </a>
          </div>
        </li>

        <li className={s.socialItem}>
          <div class={s.socialFirstContent}>
            <span>Github</span>
          </div>
          <div class={s.socialSecondContent}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={s.sociallink}
              href="https://github.com/NazarKr"
            >
              <Image src={github} alt="github" width={120} height={120}></Image>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
