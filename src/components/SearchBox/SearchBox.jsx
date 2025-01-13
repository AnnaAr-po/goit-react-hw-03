
import css from './SearchBox.module.css';

const SearchBox = ({ value, setFilter }) => (
  <div className={css.searchBox}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => setFilter(e.target.value)}
        className={css.input}
      />
    </label>
  </div>
);

export default SearchBox;