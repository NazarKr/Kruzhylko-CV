import s from "./page.module.css";
import About from "../component/About";
import Sidebar from "../component/Sidebar";

export default function Home() {
  return (
    <main className={s.main}>
      <About/>
      <Sidebar />
      
    </main>
  );
}
