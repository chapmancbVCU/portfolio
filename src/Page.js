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
        footerContainer.classList.add('footer')
        footerContainer.textContent = "Footer";

        return footerContainer;
    }

    /**
     * 
     * @returns 
     */
    initializeHeader() {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        const headerImage = document.createElement('div');
        headerImage.textContent = 'Image';
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

    initializeMain() {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('main');
        mainContainer.textContent = "Main";

        return mainContainer;
    }
}