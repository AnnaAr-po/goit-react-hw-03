
import css from './SearchBox.module.css';

const SearchBox = ({ filter, filterChange }) => (
  <div className={css.searchBox}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => filterChange(e.target.value)}
        className={css.input}
      />
    </label>
  </div>
);

export default SearchBox;