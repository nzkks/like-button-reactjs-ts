import { useState } from 'react';

import { HeartIcon } from '../icons';

const LikeButton = () => {
  const [Liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!Liked);
  };

  return (
    <button onClick={handleClick} className={`${Liked ? 'liked' : ''} likeBtn`}>
      <HeartIcon /> {Liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
