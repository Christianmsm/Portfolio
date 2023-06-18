import React from "react";
import ProfileImage from '../../images/me.png';

export default function Home() {
    return (
        <div> 
        <div>
            <h1 className="text-5xl text-center pb-10">Hello, welcome to my portfolio page!</h1>
        </div>
        <div>
            <img className=" mx-auto w-1/5" src={ProfileImage} alt="me"/>
        </div>
        <div>
            <h2 className="text-lg py-5 leading-8 ml-10 mr-10">My name is Christian Smith and I am a Software Engineer. I got my education through The Ohio State University boot camp program. This program was 24 weeks of intense training covering various frameworks and technologies such as React, SQL, NodeJS, and much more. Through this program I have successfully deployed many different projects and applications using the knowledge I have gained. Feel free to browse around and if you have any questions reach out to me via my contact form or one of the various links and I look forward to chatting with you!</h2>
        </div>
        </div>
    )
}