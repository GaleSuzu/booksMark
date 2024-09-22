import SeeMoreBtn from "../seeMoreBtn";
import styles from "./index.module.scss";
import BookCardWrapper from "../bookCardWrapper";

const TopRated = ({ books }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Top Rated</h1>
        <SeeMoreBtn />
      </div>
      <BookCardWrapper list={books} />
    </div>
  );
};

export default TopRated;
