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
import oshkosh from "./images/oshkosh_astronaut.jpg";
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

        const profileImage = new Image();
        profileImage.src = oshkosh;
        mainContainer.appendChild(profileImage);

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
        welcomeMessage1.textContent = 'Welcome to my portfolio webpage! My name is Chad Chapman, and I\'m a Systems Engineer with over 10 years of professional experience working at NASA Langley Research Center in Hampton, VA. Specifically, I work at the Air Traffic Operations Laboratory (ATOL), a world-class facility known for supporting research that aims to introduce new technology and improve the operations of the National Airspace (NAS).'
        welcomeContainer.appendChild(welcomeMessage1);

        const welcomeMessage2 = document.createElement('p');
        welcomeMessage2.classList.add('paragraph-content');
        welcomeMessage2.textContent = 'Apart from my work supporting research at ATOL, I also assist in improving the lab\'s infrastructure and services. One of my significant contributions is the design, implementation, and rollout of a video streaming appliance, which has greatly enhanced our ability to distribute video throughout the lab. This project has piqued my interest in web development, which I\'ve been exploring extensively in my spare time, using online resources such as freeCodeCamp and The Odin Project.';
        welcomeContainer.appendChild(welcomeMessage2);

        const welcomeMessage3 = document.createElement('p');
        welcomeMessage3.classList.add('paragraph-content');
        welcomeMessage3.textContent = 'Over time, my passion for web development has grown, and I\'ve been applying my skills to real-world projects. I\'m excited to explore full-time opportunities in this field and take my career to the next level. Please feel free to check out the rest of my portfolio website and projects. If you have any questions, I\'d be happy to answer them. You can find my contact information and GitHub profile links below.';
        welcomeContainer.appendChild(welcomeMessage3);

        const welcomeMessage4 = document.createElement('p');
        welcomeMessage4.classList.add('paragraph-content');
        welcomeMessage4.textContent = 'Thank you for visiting my portfolio!';
        welcomeContainer.appendChild(welcomeMessage4);

        return welcomeContainer;
    }
}