import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

function Post() {
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>Taro
                            <span className='post_headerSpecial'>
                                <VerifiedUser className='post_badge'/>
                                    @taro_enjineer
                            </span>
                        </h3>
                        <div className='post_headrerDescription'>
                            Reactなう。
                        </div>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random"/>
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