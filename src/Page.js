/******************************************************************************
 *         Name: Page.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering page 
 *               elements.
******************************************************************************/
/**
 * Contains functions for constructing each section of the webpage.
 */
export class Page {
    /**
     * Default constructor
     */
    constructor() {
        this.container = document.querySelector('#content');
        
    }

    /**
     * This method removes the footer from the DOM so that we can update the 
     * contents of the page wen the user selects a tab.
     */
    eraseFooterDomContent() {
        const footerElement = document.getElementById('footer');
        footerElement.remove();
    }
    /**
     * This method is called when the user selects a new tab.  It erases the 
     * contents of the currently selected tab so that we ca render the 
     * information for the newly selected tab.
     */
    eraseMainDomContent() {
        const elementToDelete = document.getElementById('main');
        elementToDelete.remove();
    }

    /**
     * The main content container div element.
     * @returns The HTMLDivEmement for the main content container.
     */
    getContentContainer() {
        return this.container;
    }

    /**
     * Renders the footer section of the webpage.
     * @returns The HTMLDivElement that contains the footer section.
     */
    initializeFooter() {
        const footerContainer = document.createElement('div');
        footerContainer.setAttribute('id', 'footer');
        footerContainer.classList.add('footer')
        footerContainer.textContent = "Footer";

        return footerContainer;
    }

    /**
     * Renders the header section of the webpage.
     * @returns The HTMLDivElement that contains the header section.
     */
    initializeHeader() {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        const headerImage = document.createElement('div');
        headerImage.classList.add('header-image');
        headerContainer.appendChild(headerImage);

        const menuContainer = document.createElement('div');
        const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');

        const homeTab = document.createElement('li');
        homeTab.setAttribute('id', 'home-tab');
        homeTab.classList.add('page-tab');
        homeTab.textContent = 'Home';
        menuList.appendChild(homeTab);

        const resumeTab = document.createElement('li');
        resumeTab.setAttribute('id', 'resume-tab');
        resumeTab.classList.add('page-tab');
        resumeTab.textContent = 'Resume';
        menuList.appendChild(resumeTab);

        const projectsTab = document.createElement('li');
        projectsTab.setAttribute('id', 'projects-tab');
        projectsTab.classList.add('page-tab');
        projectsTab.textContent = 'Projects';
        menuList.appendChild(projectsTab);

        const aboutTab = document.createElement('li');
        aboutTab.setAttribute('id', 'about-tab');
        aboutTab.classList.add('page-tab');
        aboutTab.textContent = "About";
        menuList.appendChild(aboutTab);

        const contactTab = document.createElement('li');
        contactTab.setAttribute('id', 'contact-tab');
        contactTab.classList.add('page-tab');
        contactTab.textContent = 'Contact';
        menuList.appendChild(contactTab);

        menuContainer.appendChild(menuList);
        headerContainer.appendChild(menuContainer);

        return headerContainer;
    }

   /**
     * Renders the main section of the webpage.
     * @returns The HTMLDivElement that contains the main section.
     */
    initializeMain() {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'main');
        mainContainer.classList.add('main');
        mainContainer.textContent = "Main";

        return mainContainer;
    }
}