import s from "../pages/page.module.css";
import Image from "next/image";
import Avatar from "../../public/Air_2.png";
// import { BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";
// import { MdOutlineLocationOn } from "react-icons/md";
import { HardskillsData, languagesData, softSkillsData } from "../lib/dataSkills";
import Contacts from "./sidebar/contacts";
import Skills from "./sidebar/skills";

export default function Sidebar() {
  return (
    <div className={s.sidebarDiv}>
      <aside className={s.sidebar}>
        <Image src={Avatar} alt="avatar" width={370} height={354}></Image>
        <Contacts />
        <Skills />
      </aside>
    </div>
  );
}
