import Hero from '../../images/About-page-photo.png';

export default function AboutMe() {
    return (
        <div>
        <img className=' mx-auto w-48'  src={Hero} layout="fill" objectFit="cover" alt='me'/>
        <h2 className="text-5xl text-center pb-10 mt-10">Let me introduce myself</h2>
        <p className='text-lg text-center py-5 leading-8 pl-10 pr-10 ml-10 mr-10'>My name is Christian Smith and I am a software engineer.

            I received my education through The Ohio State coding boot camp  with an emphasis in full stack development. Through this program I have envisioned, created, and deployed solo and group projects.
            <div className='py-5'></div>
            My passion for tech started with an interest in graphic design and I began to do freelance design work. The ability to create something out of nothing was mind blowing to me. I then worked in sales for a tech company where I was able to understand how products functions, how to help people use them, and encourage people to utilize them within their own lives. I then discovered the world of web development and coding; I was totally hooked and wanted to know more 
            {/* Add more information here */}
        </p>
        </div>
    );
};