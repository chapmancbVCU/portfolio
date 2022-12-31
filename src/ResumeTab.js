/******************************************************************************
 *         Name: ResumeTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the resume 
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";

/**
 * Class whose functions renders components of the Resume Tab.
 */
export class ResumeTab extends Page {
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
        
        const pagetitle = document.createElement('h3');
        pagetitle.textContent = "Resume";
        mainContainer.appendChild(pagetitle);

        
        mainContainer.appendChild(this.initializeWelcomeContainer());

        mainContainer.appendChild(this.initializeResumeContent());
        return mainContainer;
    }





    initializeResumeContent() {
        const resumeContainer = document.createElement('div');
        resumeContainer.classList.add('content-container');

        return resumeContainer;
    }

    initializeWelcomeContainer() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.classList.add('content-container');

        const welcomeMessage1 = document.createElement('p');
        welcomeMessage1.textContent = "Below is a complete resume that includes skills that I'm not only very proficient in but also languages, tools, and technology I have been exposed to over the years.";
        welcomeContainer.appendChild(welcomeMessage1);

        const welcomeMessage2 = document.createElement('p');
        welcomeMessage2.textContent = "Reach out to me and I can provide a job tailored resume for you.";
        welcomeContainer.appendChild(welcomeMessage2);
        return welcomeContainer;
    }
}