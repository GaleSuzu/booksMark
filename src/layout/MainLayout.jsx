import styles from "./index.module.scss";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  //qui dentro c'e' il footer in cui metteremo le icone, il div con children serve a montare tutto il resto dell'app
  return (
    <>
      <div className={styles.mainLayout}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
