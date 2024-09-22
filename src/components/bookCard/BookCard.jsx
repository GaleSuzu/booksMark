import styles from "./index.module.scss";

const BookCard = ({ book }) => {
  return (
    <li className={styles.singleBook}>
      <img src="https://picsum.photos/200/250" alt="img" />
      <p>{book.title}</p>
    </li>
  );
};

export default BookCard;
