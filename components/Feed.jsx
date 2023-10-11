'use client';

import { useState, useEffect } from 'react';

import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = event => {};

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or username...'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
