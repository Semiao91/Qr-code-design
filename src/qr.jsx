import React from "react"; 
import logo from "./img/image-qr-code.png"

export default function Qr(){
    return(
        <div className="mainBox">
            <div>
                <img className="codeBox" src={logo} alt="desse" />
            </div>
            <div className="textBox">
                <div className="textBoxHeader1">Improve your front-end skills by building projects</div>
                <div className="textBoxHeader2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
            </div>
        </div>
    )
}