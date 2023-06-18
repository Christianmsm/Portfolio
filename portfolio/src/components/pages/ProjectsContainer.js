import React from "react";
import PutASpork from '../../images/putasporkinit.co.png';
import RecipeMuse from '../../images/Recipe-muse.png';
import WeatherDash from '../../images/Weather-dashboard.png';

export default function ProjectContainer() {
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

    return (
        <div>
            <div className="shadow-lg p-10 rounded-xl " id="PutASpork">
            <img className="mx-auto w-11/12" src={PutASpork} alt="PutASporkInIt project" />
            </div>


            <div className="shadow-lg p-10 rounded-xl " id="RecipeMuse">
            <img className="mx-auto w-11/12" src={RecipeMuse} alt="RecipeMuse project" />
            </div>


            <div className="shadow-lg p-10 rounded-xl " id="WeatherDash">
            <img className="mx-auto w-11/12" src={WeatherDash} alt="WeatherDashboard project" />
            </div>


            <div className="shadow-lg p-10 rounded-xl " id="TBD">
            <img className="mx-auto w-11/12" src={PutASpork} alt="TBD project" />
            </div>
            {/* <ProjectContainer /> */}
        </div>
    );
}