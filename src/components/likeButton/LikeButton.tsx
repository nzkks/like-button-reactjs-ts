import { useState } from 'react';

import { HeartIcon } from '../icons';

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

      console.log(await response.json());
    } finally {
      setIsFetching(false);
    }

    setLiked(!Liked);
  };

  return (
    <button onClick={handleClick} className={`${Liked ? 'liked' : ''} likeBtn`}>
      <HeartIcon /> {Liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
