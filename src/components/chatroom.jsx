import React from 'react'
import './chatroom.css'

export default class Chatroom extends React.Component {
  render() {
    return(
      <div className="chatbg">
        <div className="chatheader">
          <h1 className="chatheadertext">Owl Chat</h1>
        </div>
        <div className="chatbody">
          
        </div>
        <div className="chatfooter">
          <form className="flex">
            <textarea className="messageinput flex "></textarea>
            <input type="submit" className="submitbutton"></input>
          </form>
        </div>
      </div>
    )
  }
}
