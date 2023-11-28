import Search from '@mui/icons-material/Search';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_serchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        {/* <h2>いまどうしてる？</h2> */}


          {/* ライブラリ追記 */}
          <TwitterTweetEmbed tweetId={"1723275302946939267"}/>
          <TwitterTimelineEmbed 
            sourceType='profile' screenName='gsfukuoka' options={{ height:400 }}          
          />
          <TwitterShareButton 
            url={"https://twitter.com/ikiataiki"}
            options={{text: "#React勉強中", via: "ikiataiki"}}
          />
      </div>
    </div>
  );
}

export default Widgets;
