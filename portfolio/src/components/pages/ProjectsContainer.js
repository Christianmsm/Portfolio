import React from "react";
import PutASpork from '../../images/putasporkinit.co.png';
import RecipeMuse from '../../images/Recipe-muse.png';
import WeatherDash from '../../images/Weather-dashboard.png';
import ComingSoon from '../../images/Coming-soon.png';

export default function ProjectContainer() {

    return (
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="PutASpork">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={PutASpork} alt="PutASporkInIt project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center">From the screen to your plate, this site brings all the recipes from your favorite tv shows & movies.</p>
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://github.com/CodeByDex/PutASporkInIt">GitHub</button>
            
            <button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://www.putasporkinit.co/">Deployed Site</button>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="RecipeMuse">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={RecipeMuse} alt="RecipeMuse project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Struggling to figure out what to make for your next meal? Recipe muse has you covered!</p>
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://github.com/malachigamblin/Recipe-Muse">GitHub</button>
            
            <button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://malachigamblin.github.io/Recipe-Muse/">Deployed Site</button>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="WeatherDash">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={WeatherDash} alt="WeatherDashboard project" />
            <div>
            <p className=" text-lg py-5 leading-8 ml-10 mr-10 text-center mt-12 mb-12">Planning a trip and need to know how to pack? Here is the weather dashboard of your dreams! See the forecast in any location you are traveling too.</p>
            <button className="mb-5 block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://github.com/Christianmsm/06-Server-Side-API-Weather-Dashboard-Challenge">GitHub</button>
            
            <button className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="https://christianmsm.github.io/06-Server-Side-API-Weather-Dashboard-Challenge/">Deployed Site</button>
            </div>
            </div>


            <div className="shadow-lg p-10 rounded-xl basis-1/3 flex-1 " id="TBD">
            <img className="mx-auto w-12/12 h-12/12 rounded-lg object-cover" layout="responsive" src={ComingSoon} alt="TBD project" />
            </div>
            {/* <ProjectContainer /> */}
        </div>
    );
}
// const myProjects = [
    //     {
    //         title: 'PutASporkInIt',
    //         description: 'From the screen to your plate, this site brings all the recipes from your favorite tv shows & movies.',
    //         deployed: 'https://www.putasporkinit.co/',
    //         repo: 'https://github.com/CodeByDex/PutASporkInIt',
    //         image: PutASpork//Need to add images
    //     },
    //     {
    //         title: 'Recipe Muse',
    //         description: 'Struggling to figure out what to make for your next meal? Recipe muse has you covered!',
    //         deployed: 'https://malachigamblin.github.io/Recipe-Muse//',
    //         repo: 'https://github.com/malachigamblin/Recipe-Muse',
    //         image: RecipeMuse//Need to add images
    //     },
    //     {
    //         title: 'Weather Dashboard',
    //         description: 'Planning a trip and need to know how to pack? Here is the weather dashboard of your dreams! See the forecast in any location you are traveling too.',
    //         deployed: 'https://christianmsm.github.io/06-Server-Side-API-Weather-Dashboard-Challenge/',
    //         repo: 'https://github.com/Christianmsm/06-Server-Side-API-Weather-Dashboard-Challenge',
    //         image: WeatherDash//Need to add images
    //     },
    //     {
    //         title: 'TBD',
    //         description: 'TBD',
    //         deployed: 'TBD',
    //         repo: 'TBD',
    //         image: ''//Need to add images
    //     },
    // ]