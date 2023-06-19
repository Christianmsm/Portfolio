import React from "react";
import ProfileImage from '../../images/me.png';

export default function Home() {
    return (
        <div> 
        <div>
            <img className=" mx-auto w-48" src={ProfileImage} alt="me"/>
        </div>
        <div>
            <h1 className="text-5xl text-center mt-5 pb-5">Christian Smith</h1>
            <h2 className="text-2xl text-center pb-10">Software Engineer</h2>
        </div>
        <div className="py-10">
        </div>
        <div>
            <h2 className="text-5xl text-center pb-10">Welcome to my portfolio page!</h2>
        </div>
        <div>
            <h2 className="text-lg text-center pl-10 pr-10 py-5 leading-8 ml-10 mr-10">My name is Christian Smith and I am a Software Engineer. I received my education through The Ohio State University Coding Boot Camp. This program was 24 weeks of intense training covering various frameworks and technologies such as React, SQL, NodeJS, and much more. Through this program I have successfully deployed many different projects and applications, which can check out about! 
            <div className='py-5'></div>
            Feel free to browse around and if you have any questions reach out to me via my contact form or one of the various links. I look forward to chatting with you!</h2>
        </div>
        </div>
    )
}