import React, { useEffect, useState } from 'react';
import './Timeline.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../../firabase';
import { QuerySnapshot, collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy("timestamp", "desc"));
    // 以下はリアルタイムではないデータの取得
    // getDocs(q).then((QuerySnapshot) => {
    //   setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得する
    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => doc.data()));
    })
  }, []);

  return (
    <div className="timeline">
      {/* Heaer */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      {/* Tweetbox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            varified={post.varified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
