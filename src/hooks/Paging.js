import { useState, useEffect } from 'react';

import { getPaging } from '../services/avatarApi';

export const Paging = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPaging(10, page).then(results => {
      results(page);
    });
  }, []);

  const handleNextClick = () => {
    setPage(page + 1);
    console.log(page);
  };

  return { handleNextClick };
};
