import ProfileImage from '../../images/Profile-image.jpg'


export default function AboutMe() {
    return (
        <div>
        <h2>Let me introduce myself</h2>
        <img className='w-1/6 rounded-full'  src={ProfileImage} alt="Photo of myself"/>
        <p>My name is Christian Smith and I am a software engineer.
            <br></br>
            I got my education through The Ohio State coding bootcamp program where we learned full stack development. Through this program I have created my own projects as well as worked in groups to complete team projects.
            {/* Add more information here */}
        </p>
        </div>
    );
};