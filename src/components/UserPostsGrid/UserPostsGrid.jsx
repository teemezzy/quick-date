import React from 'react';
import  './UserPostsGrid.css';
import UserSinglePost from '../UserSinglePost/UserSinglePost';



const UserPostsGrid = () => {
  return (
    <div className='user-posts-grid'>
      <UserSinglePost />
      <UserSinglePost />
      <UserSinglePost />
    </div>
  )
}

export default UserPostsGrid