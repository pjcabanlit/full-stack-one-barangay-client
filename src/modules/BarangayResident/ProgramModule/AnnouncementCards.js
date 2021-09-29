import React from 'react'
import './AnnouncementCard.css'

const AnnouncementCards = (props) => {
    return (
        <div>
            <div className="announcement_card">
                <div className="card_center_container">
                    <h3>{props.announcementTitle}</h3>
                    <h3>{props.announcementSubtitle}</h3>
                    <h3>{props.announcmentDesc}</h3>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementCards