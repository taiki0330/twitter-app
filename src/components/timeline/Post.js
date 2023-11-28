import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post({ displayName, userName, varified, text, image, avatar }) {
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src={avatar}/>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>{displayName}
                            <span className='post_headerSpecial'>
                                <VerifiedUser className='post_badge'/>@{userName}
                            </span>
                        </h3>
                        <div className='post_headrerDescription'>
                            {text}
                        </div>
                    </div>
                </div>
                <img src={image} />
                <div className='post_footer'>
                    <ChatBubbleOutline fontSize='small'/>
                    <Repeat fontSize='small'/>
                    <FavoriteBorder fontSize='small'/>
                    <PublishOutlined fontSize='small'/>
                </div>
            </div>
        </div>
    )
}   

export default Post