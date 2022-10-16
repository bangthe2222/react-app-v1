import './ChatBot.scss';
import axios from 'axios';
import React, { useState} from 'react';
import {IoMdSend} from 'react-icons/io'
const dialog =[
]
let id = 0;
const outBoxChat = () =>{
    var boxIcon = document.getElementById('chatbot-image-container')
    var boxChat = document.getElementById('chat-bot-container');
    boxChat.style.display = 'none';
    boxIcon.style.display = 'block';
}
const inBoxChat = () =>{
    var boxIcon = document.getElementById('chatbot-image-container')
    var boxChat = document.getElementById('chat-bot-container');
    boxChat.style.display = 'block';
    boxIcon.style.display = 'none';
    
}
const ChatBot = () => {
    const [chatBoxData, changeChatBox ] = useState(dialog);
    const [userText, changeUserText ] = useState();

    async function useGetText(text) {
            axios.post('https://chatbot-1uck.onrender.com/chatbot', 
            {
            text : text
            },
            {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
            }
        )
        .then(function (response) {
            return Promise.resolve(response.data['data'])
        }).then(function (result) {
            console.log(chatBoxData)
            changeChatBox([
                ...chatBoxData,
                {
                    id : id +=1,
                    user : userText,
                    chatbot : result
                }
            ])
            console.log(result)
            window.setTimeout(()=>{
                let boxChat = document.getElementById('box-chat');
                console.log(boxChat.scrollHeight)
                boxChat.scrollTop = boxChat.scrollHeight;
            }, 1)
        })
        .catch(function (error) {
            console.log(error);
            return "error";
        });
        
    }
    async function Submit(event) {
        event.preventDefault();
        let inputText = document.getElementById('text-input');
        inputText.value = '';
        await useGetText(userText);         
    }
    return(
        <>
        <div id='chatbot-image-container' onClick={inBoxChat}>
            <img src='./chatbot.png' alt="none" id='chatbot-image'/>
        </div>
        
        <div id = 'chat-bot-container'>
                <button id='out-box-chat-button' onClick={outBoxChat}>X</button>
                <form onSubmit={event => Submit(event)} >
                <div id='box-chat'>
                {chatBoxData.map((data) => (
                    <li className='box-chat-id' key= {data['id']}>
                        <p className='user-chat'>
                            <span className='user-text'>
                            {data["user"]}
                            </span>
                            
                        </p>
                        <p className='bot-chat'>
                            <span className='bot-text'>
                            {data["chatbot"]}
                            </span>
                            
                        </p>
                    </li>
                ))}
                </div>
                    <label id='button-container'>
                    <input type="text" name="name" id="text-input" onChange={e => changeUserText(e.target.value)} />
                    <button type="submit" id="button-submit"><IoMdSend id='send-button'></IoMdSend></button>
                    </label>
            </form>
        </div>
           
        </>
    )
}

export default ChatBot;