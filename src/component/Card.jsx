import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/card.scss'
export const Card = ({ user }) => {
    const navigation = useNavigate()
    return (
        <div id='card'>
            <img src={user.image} alt="" className="image" />
            <p>{user.name}</p>
            <div className="card-footer">
                <div className="icon-avatar">
                    <img src={user.avatar} alt="" className="avatar" />
                </div>
                <div className="icon-message">
                    <i className='bx bx-message-dots' onClick={()=> navigation('/chat')}></i>
                </div>
            </div>
        </div>
    )
}
