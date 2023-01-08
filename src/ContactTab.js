/******************************************************************************
 *         Name: ContactTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the contact  
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";

/**
 * Class whose functions renders components of the Contact Tab.
 */
export class ContactTab extends Page {
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
        welcome.textContent = "Contact Me For More Details";
        mainContainer.appendChild(welcome);

        mainContainer.appendChild(this.initializeWelcomeContainer());

        return mainContainer;
    }

    initializeWelcomeContainer() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.classList.add('content-container');

        
        return welcomeContainer;
    }
}