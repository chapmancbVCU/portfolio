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
        
        footerContainer.appendChild(this.socialMedia());
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
        resumeTab.textContent = 'Career';
        menuList.appendChild(resumeTab);

        const projectsTab = document.createElement('li');
        projectsTab.setAttribute('id', 'projects-tab');
        projectsTab.classList.add('page-tab');
        projectsTab.textContent = 'Projects';
        menuList.appendChild(projectsTab);

        /*const aboutTab = document.createElement('li');
        aboutTab.setAttribute('id', 'about-tab');
        aboutTab.classList.add('page-tab');
        aboutTab.textContent = "About";
        menuList.appendChild(aboutTab);*/

        /*const contactTab = document.createElement('li');
        contactTab.setAttribute('id', 'contact-tab');
        contactTab.classList.add('page-tab');
        contactTab.textContent = 'Contact';
        menuList.appendChild(contactTab);*/

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

    /**
     * This method creates the images and links for social media icons.
     * @returns the HTMLDivElement object containing social icons.
     */
    socialMedia() {
        const socialContainer = document.createElement('div');
        socialContainer.classList.add('social-icons');

        // Setup LnkedIn link
        const facebook = document.createElement('a');
        facebook.href = 'https://www.linkedin.com/in/chadchapman2010/';
        const facebookIcon = document.createElement('i');
        facebookIcon.classList.add('fab');
        facebookIcon.classList.add('fa-linkedin-in');
        facebook.appendChild(facebookIcon);
        socialContainer.appendChild(facebook);

        // Setup GitHub link
        const twitter = document.createElement('a');
        twitter.href = 'https://github.com/chapmancbVCU';
        const twitterIcon = document.createElement('i');
        twitterIcon.classList.add('fab');
        twitterIcon.classList.add('fa-github');
        twitter.appendChild(twitterIcon);
        socialContainer.appendChild(twitter);

        // Setup E-mail link
        const instagram = document.createElement('a');
        instagram.href = 'mailto:cbchapman@alumni.vcu.edu';
        const instagramIcon = document.createElement('i');
        instagramIcon.classList.add('fa');
        instagramIcon.classList.add('fa-envelope');
        instagram.appendChild(instagramIcon);
        socialContainer.appendChild(instagram);
        
        return socialContainer;
    }
}