import Link from "next/link";
import s from "../../pages/page.module.css";

export default function Education() {
  return (
    <>
      <div>
        <h3 className={s.title}>Education</h3>
        <h4 className={s.education}>GoIT Full Stack developer</h4>
        <h4 className={s.education_position}>Full-stack developer</h4>
        <p className={s.period}>2022 — 2023</p>
        <Link
          target={"_blank"}
          rel="noopener noreferrer nofollow"
          href={
            "https://drive.google.com/file/d/11R0UZDyWT3PPNpjMJ-ZsLcWCRHULLBHh/view"
          }
        >
          Certificate
        </Link>

        <h4 className={s.education}>Lviv State Academy of Finance</h4>
        <h4 className={s.education_position}>
          Master's degree, Accounting and Audit
        </h4>
        <p className={s.period}>2008 - 2010</p>
      </div>
    </>
  );
}


{/* <a
  title="https://your-pet-mu.vercel.app/"
  role="link"
  target="_blank"
  rel="noopener noreferrer nofollow"
  class="text-bold"
  href="https://your-pet-mu.vercel.app/"
>
  your-pet-mu.vercel.app/
</a>; */}