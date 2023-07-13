import React from "react";
import PutASpork from '../../images/putasporkinit.co.png';
import RecipeMuse from '../../images/Recipe-muse.png';
import WeatherDash from '../../images/Weather-dashboard.png';
import PwdGenerator from '../../images/Pwd-Generator.png';
import DailyPlanner from '../../images/DailyPlanner.png';
import CodingQuiz from '../../images/CodingQuiz.png';
import ComingSoonHero from '../../images/Coming-soon-img.png';
import OIODev from '../../images/oiodev.png';

export default function ProjectContainer() {


    return (
        
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">

<div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="OIODev">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={OIODev} alt="OIODev application" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Looking for a developer to help grow your business and bring to life the ideas you have? OIODev is here. What OIODev is, is a website where you can search for various developers that you can book a call and hire to create whatever project you, and your business may have.</p>

            <a href="https://github.com/CodeByDex/OIODev">
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://www.oiodev.com/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="PutASpork">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={PutASpork} alt="PutASporkInIt project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center">From the screen to your plate, this site brings all the recipes from your favorite tv shows & movies.</p>

            <a href="https://github.com/CodeByDex/PutASporkInIt"><button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://www.putasporkinit.co/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="RecipeMuse">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={RecipeMuse} alt="RecipeMuse project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Struggling to figure out what to make for your next meal? Recipe muse has you covered!</p>

            <a href="https://github.com/malachigamblin/Recipe-Muse"><button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://malachigamblin.github.io/Recipe-Muse/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="WeatherDash">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={WeatherDash} alt="WeatherDashboard project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Planning a trip and need to know how to pack? Here is the weather dashboard of your dreams! See the forecast in any location you are traveling too.</p>

            <a href="https://github.com/Christianmsm/06-Server-Side-API-Weather-Dashboard-Challenge">
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://christianmsm.github.io/06-Server-Side-API-Weather-Dashboard-Challenge/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="PwdGenerator">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={PwdGenerator} alt="Password generator project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Are you one of the many people that use the same few passwords for all of your different accounts? Well I have a solution for you! This password generator application will create a unique password with the specific information you give it.</p>

            <a href="https://github.com/Christianmsm/03-Password-Generator">
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://christianmsm.github.io/03-Password-Generator/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="DailyPlanner">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={DailyPlanner} alt="Daily planner application" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">This is an application that allows you to schedule out your whole work day hour by hour so that you can stay on track and be more productive. This application allows you to save the various tasks that you input to reference later.</p>

            <a href="https://github.com/Christianmsm/Daily-Work-Planner">
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://christianmsm.github.io/Daily-Work-Planner/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="CodingQuiz">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={CodingQuiz} alt="Coding quiz application" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Think you can beat the high score? This quiz game has you answer a set of questions while racing the clock. Give the wrong answer, and lose time. Try to see what high score you can get.</p>

            <a href="https://github.com/Christianmsm/04-Coding-Quiz">
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">GitHub</button></a>
            
            <a href="https://christianmsm.github.io/04-Coding-Quiz/"><button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Deployed Site</button></a>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="TBD">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={ComingSoonHero} alt="TBD project" />
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="TBD">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={ComingSoonHero} alt="TBD project" />
            </div>
            {/* <ProjectContainer /> */}
        </div>
    );
}