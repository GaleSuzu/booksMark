import styles from "./index.module.scss";

const SearchBar = () => {
  return (
    <>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="search for a book"
      />
    </>
  );
};

export default SearchBar;
