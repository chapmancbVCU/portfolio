/******************************************************************************
 *         Name: AboutTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the about  
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";

/**
 * 
 */
export class AboutTab extends Page {
    /**
     * Default constuctor.
     */
    constructor() {
        super();
    }

    initializeMain() {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main');
        mainContainer.classList.add('main');
        mainContainer.textContent = "Main - About Tab";

        return mainContainer;
    }
}