import SubNavigationBar from "./components/SubNavigationbar";
import styles from "./brand.module.css";

export default function Layout({ children }) {
    return (
    <div className={styles.brandContent}>
      <header className={styles.headerContent}>
        <SubNavigationBar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}