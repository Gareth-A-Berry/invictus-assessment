import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ENTER, KEYDOWN, KEYUP } from './constants';

const Search = (props) => {
  const {
    onSearch,
    query,
    results,
    loading,
    onSelection,
    isSelected,
    onFocus,
  } = props;
  const [activeOption, handleActiveOption] = useState(0);

  const onKeyDown = (e) => {
    if (e.keyCode === ENTER) {
      handleActiveOption(0);
      e.target.blur();
      onSelection({ selected: results[activeOption] });
    } else if (e.keyCode === KEYUP) {
      if (activeOption === 0) {
        return;
      }
      handleActiveOption(activeOption - 1);
    } else if (e.keyCode === KEYDOWN) {
      if (activeOption - 1 === results.length) {
        return;
      }
      handleActiveOption(activeOption + 1);
    }
  };

  const handleSearchResults = () => {
    const hasResults = results.length > 0;
    const resultsTitle = hasResults ? 'Search results' : 'No results found';

    if (query && !isSelected) {
      return (
        <ul className="search-result">
          {loading ? (
            <div className="search-loader-container">
              <div className="loader" />
            </div>
          ) : (
            <>
              {query.length > 1 && (
                <>
                  <div className="search-cut-out" />
                  <div className="search-result__header">{resultsTitle}</div>
                </>
              )}
              {results.map((result, index) => {
                let className = 'search-result__item';
                if (index === activeOption) {
                  className = 'search-result__item--active';
                }
                return (
                  <li
                    key={result.name}
                    className={className}
                    onClick={() => onSelection({ selected: result })}
                  >
                    {result.name}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      );
    }

    return <></>;
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={onKeyDown}
          type="text"
          value={query}
          placeholder="Search here"
          onFocus={() => onFocus()}
        />
        {handleSearchResults()}
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className="search-button"
        onClick={() => onSelection({ selected: results[activeOption] })}
      >
        SEARCH
      </button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  query: PropTypes.string,
  results: PropTypes.array,
  loading: PropTypes.bool,
  isSelected: PropTypes.bool,
  error: PropTypes.string,
};

Search.defaultProps = {
  query: '',
  error: '',
  results: [],
  loading: false,
  isSelected: false,
};

export default Search;
