import { useState } from 'react';

const LikeButton = () => {
  const [Liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!Liked);
  };

  return <button onClick={handleClick}>{Liked ? 'Liked' : 'Like'}</button>;
};

export default LikeButton;
