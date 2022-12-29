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
 * 
 */
export class ContactTab extends Page {
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
        mainContainer.textContent = "Main - Contact Tab";

        return mainContainer;
    }
}