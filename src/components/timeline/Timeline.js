import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Timeline() {
    return (
    <div className='timeline'>
        {/* Heaer */}
        <div className='timeline_header'>
            <h2>ホーム</h2>
        </div>
        {/* Tweetbox */}
        <TweetBox />

        {/* Post */}
        <Post 
            displayName="taro"
            userName="taro_enjineer"
            varified={true}
            text="初めてのツイート"
            avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
            image="https://source.unsplash.com/random"
        />


    </div>
    )
};

export default Timeline