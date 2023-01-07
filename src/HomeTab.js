/******************************************************************************
 *         Name: HomeTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the home 
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";

/**
 * Class whose functions renders components of the Home Tab.
 */
export class HomeTab extends Page {
    /**
     * Default constuctor.
     */
    constructor() {
        super();
    }

    /**
     * Renders the main section of the webpage.
     * @returns The HTMLDivElement that contains the main section.
     */
    initializeMain() {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main');
        mainContainer.classList.add('main');
        
        const welcome = document.createElement('h3');
        welcome.classList.add('tab-title');
        welcome.textContent = "Welcome to my Professional Portfolio";
        mainContainer.appendChild(welcome);

        mainContainer.appendChild(this.initializeWelcomeContainer());
        return mainContainer;
    }

    /**
     * Renders the welcome section of the resume tab.
     * @returns HTMLDivElement The div that contains the welcome section of the 
     * home tab.
     */
    initializeWelcomeContainer() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.classList.add('content-container');

        const welcomeMessage1 = document.createElement('p');
        welcomeMessage1.classList.add('paragraph-content');
        welcomeMessage1.textContent = 'My name is Chad Chapman.  I’m a Systems Engineer with over 10 years of professional experience working for my customer at NASA Langley Research Center in Hampton, VA.  I work at a facility known as the Air Traffic Operations Laboratory (ATOL).  The ATOL is a world class facility known for supporting research with the goal of introducing new technology and improving the operations of the National Airspace (NAS).'
        welcomeContainer.appendChild(welcomeMessage1);

        const welcomeMessage2 = document.createElement('p');
        welcomeMessage2.classList.add('paragraph-content');
        welcomeMessage2.textContent = 'While not supporting research I assist in improving the ATOL’s infrastructure and services.  For example, we have spent a lot of effort improving our ability to distribute video throughout the lab over the past 3 years.  My major contribution is the design, implementation, and rollout of a video streaming appliance.  This appliance consists of a Nginx server compiled with the appropriate modules and a website front end so our team can interact with it.  A database is used to store information about videos stored on the server so users can search for content and finally begin playback.';
        welcomeContainer.appendChild(welcomeMessage2);

        const welcomeMessage3 = document.createElement('p');
        welcomeMessage3.classList.add('paragraph-content');
        welcomeMessage3.textContent = 'After working on this project for some time I have developed an interest in web development.  I am thankful for a particular former manager at work who encouraged me to grow as a professional.  So, I decided to spend a good portion of my time outside of work to learn web development and apply what I have learned in the workplace.  Most of this skill development has been acquired through the utilization of free online resources such as freeCodeCamp and The Odin Project.  After over ½ of a year of learning and applying my newly acquired skills in a professional setting I have decided that full time web development could be a potential career move.  Please feel free to check out the rest of my portfolio website and projects.  If you have any questions don’t hesitate to ask.';
        welcomeContainer.appendChild(welcomeMessage3);

        return welcomeContainer;
    }
}