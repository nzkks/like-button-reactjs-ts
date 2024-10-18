import { useState } from 'react';

import { HeartIcon, SpinnerIcon } from '../icons';

const LikeButton = () => {
  const [Liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch('https://www.greatfrontend.com/api/questions/like-button', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: Liked ? 'unlike' : 'like',
        }),
      });

      if (response.status >= 200 && response.status < 300) {
        setLiked(!Liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={`${Liked ? 'liked' : ''} likeBtn`}>
        {isFetching ? <SpinnerIcon /> : <HeartIcon />} {Liked ? 'Liked' : 'Like'}
      </button>

      {error && <p className="error">{error}</p>}
    </>
  );
};

export default LikeButton;
