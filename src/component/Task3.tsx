import React, { useState } from 'react';

function Button() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button onClick={handleFollowToggle}>
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
}

export default Button;
