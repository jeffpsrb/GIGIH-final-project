import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSearchState } from '../context/SearchProvider';

function SearchBox() {
  const { searchQuery, setSearchQuery } = useSearchState();

  function searchVideo(event) {
    const { value } = event.target;
    setSearchQuery(value);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by title"
        className="search__input"
        value={searchQuery}
        onInput={searchVideo}
      />
      {searchQuery && (
        <button
          type="button"
          className="search__clear-button"
          onClick={() => setSearchQuery('')}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default SearchBox;
