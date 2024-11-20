import styles from "../styles/page.module.scss";
import Header from "./components/Header";
import Top from "./components/Top";
import AboutSite from "./components/AboutSite";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <div className={styles.top}></div>
      <Top/>
      <AboutSite/>
    </div>
  );
}
