import React from 'react';
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <TwitterIcon className="sidebar_twitterIcon" />

      {/* SidebarOption */}
      <SidebarOptions text="ホーム" Icon={HomeIcon} active/>
      <SidebarOptions text="話題を検索" Icon={SearchIcon} />
      <SidebarOptions text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOptions text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOptions text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOptions text="リスト" Icon={ListAltIcon} />
      <SidebarOptions text="プロフィール" Icon={AccountCircleIcon} />
      <SidebarOptions text="もっと見る" Icon={MoreHorizIcon} />

      {/* ツイートボタン */}
      <Button variant='outlined' className='sidebar_tweet' fullWidth>ツイートする</Button>
    </div>
  );
}

export default Sidebar;
