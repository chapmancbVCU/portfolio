/******************************************************************************
 *         Name: Page.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering page 
 *               elements.
******************************************************************************/
/**
 * 
 */
export class Page {
    /**
     * Default constructor
     */
    constructor() {
        this.container = document.querySelector('#content');
        this.container.appendChild(this.initializeHeader());
        this.container.appendChild(this.initializeMain());
        this.container.appendChild(this.initializeFooter());
    }

    initializeFooter() {
        const footerContainer = document.createElement('div');
        footerContainer.textContent = "Footer";

        return footerContainer;
    }

    /**
     * 
     * @returns 
     */
    initializeHeader() {
        const headerContainer = document.createElement('div');
        headerContainer.textContent = "Header";

        return headerContainer;
    }

    initializeMain() {
        const mainContainer = document.createElement('div');
        mainContainer.textContent = "Main";

        return mainContainer;
    }
}