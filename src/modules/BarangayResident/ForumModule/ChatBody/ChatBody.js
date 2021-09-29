import React, { Component } from "react";
import "./Chatbody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
    render() {
        return (
            <div className="main__chatbody">
                {/* <ChatList /> */}
                <div className="for_spacing">

                </div>

                <ChatContent />
                <UserProfile />
            </div>
        );
    }
}