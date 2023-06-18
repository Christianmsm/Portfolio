import ProfileImage from '../../images/me.png'


export default function AboutMe() {
    return (
        <div>
        <h2 className="text-5xl text-center pb-10">Let me introduce myself</h2>
        <img className=' mx-auto w-1/5'  src={ProfileImage} layout="fill" objectFit="cover" alt='me'/>
        <p className='text-lg py-5 leading-8 ml-10 mr-10'>My name is Christian Smith and I am a software engineer.
            <br></br>
            I got my education through The Ohio State coding boot camp program where we learned full stack development. Through this program I have created my own projects as well as worked in groups to complete team projects.
            {/* Add more information here */}
        </p>
        </div>
    );
};