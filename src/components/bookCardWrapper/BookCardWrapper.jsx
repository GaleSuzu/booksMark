import BookCard from "../bookCard/BookCard";
import styles from "./index.module.scss";

const BookCardWrapper = ({ list = [] }) => {
  return (
    <div>
      <ul>
        {list.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })}
      </ul>
    </div>
  );
};

export default BookCardWrapper;
