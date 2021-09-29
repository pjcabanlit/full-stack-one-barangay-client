import React, { Component, createRef } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import brgy407_icon from './../../../../images/brgy407_icon.png'
import m1 from './../../../../images/m1.png'

export default class ChatContent extends Component {
    messagesEndRef = createRef(null);
    chatItms = [
        {
            key: 1,
            image:
                brgy407_icon,
            type: "other",
            msg: "Magandang araw! Ako ay isang chat bot para sagutin iyong mga katanungan ukol sa mga kaganapan sa iyong Barangay.",
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            chat: this.chatItms,
            msg: "",
        };
    }
    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                if (this.state.msg !== "") {
                    this.chatItms.push({
                        key: 1,
                        type: "",
                        msg: this.state.msg,
                        image:
                            m1,
                    });
                    this.setState({ chat: [...this.chatItms] });
                    this.scrollToBottom();
                    this.setState({ msg: "" });
                }
            }
        });
        this.scrollToBottom();
    }
    onStateChange = (e) => {
        this.setState({ msg: e.target.value });
    };

    render() {
        return (
            <div className="main__chatcontent">
                <div className="content__header">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <Avatar
                                isOnline="active"
                                image={brgy407_icon}
                            />
                            <p>Barangay ChatBot</p>
                        </div>
                    </div>

                    <div className="blocks">
                        <div className="settings">
                            <button className="btn-nobg">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content__body">
                    <div className="chat__items">
                        {this.state.chat.map((itm, index) => {
                            return (
                                <ChatItem
                                    animationDelay={index + 2}
                                    key={itm.key}
                                    user={itm.type ? itm.type : "me"}
                                    msg={itm.msg}
                                    image={itm.image}
                                />
                            );
                        })}
                        <div ref={this.messagesEndRef} />
                    </div>
                </div>
                <div className="content__footer">
                    <div className="sendNewMessage">
                        <button className="addFiles">
                            <i className="fa fa-plus"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message here"
                            onChange={this.onStateChange}
                            value={this.state.msg}
                        />
                        <button className="btnSendMsg" id="sendMsgBtn">
                            <i className="fa fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}