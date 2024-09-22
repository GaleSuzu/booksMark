import SeeMoreBtn from "../seeMoreBtn";
import styles from "./index.module.scss";
import BookCardWrapper from "../bookCardWrapper";

const ForYou = ({ books }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>ForYou</h1>
        <SeeMoreBtn />
      </div>
      <BookCardWrapper list={books} />
    </div>
  );
};

export default ForYou;
