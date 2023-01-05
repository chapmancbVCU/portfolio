/******************************************************************************
 *         Name: ProjectsTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the project  
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";
import CircuitImageAnn from "./images/circuits-ann.jpg";
/**
 * Class whose functions renders components of the Projects Tab.
 */
export class ProjectsTab extends Page {
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
        pagetitle.classList.add('tab-title');
        pagetitle.textContent = "My Projects";
        mainContainer.appendChild(pagetitle);

        mainContainer.appendChild(this.initializeWelcomeContainer());

        mainContainer.appendChild(this.renderProject('test', 'test', 'test', CircuitImageAnn));
        return mainContainer;
    }

    /**
     * Renders the welcome section of the resume tab.
     * @returns HTMLDivElement The div that contains the welcome section of the 
     * projects tab.
     */
    initializeWelcomeContainer() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.classList.add('content-container');

        const welcomeMessage1 = document.createElement('p');
        welcomeMessage1.classList.add('paragraph-content');
        welcomeMessage1.textContent = "Below is a collection of projects I have completed in my leisure time and while completing my studies at VCU.  Here you will find a variety of pojects from websites to hardware designs.";
        welcomeContainer.appendChild(welcomeMessage1);

        return welcomeContainer;
    }

    renderProject(title, builtWith, description, image) {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('content-container');

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = title;
        projectContainer.appendChild(projectTitle);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');

        const projectImage = new Image();
        projectImage.classList.add('project-image');
        projectImage.src = image;
        projectInfo.appendChild(projectImage);

        const projectInfoRight = document.createElement('div');
        projectInfoRight.classList.add('project-info-right');

        const builtWithContainer = document.createElement('div')
        builtWithContainer.classList.add('built-with-container');

        const builtWithLabel = document.createElement('strong');
        builtWithLabel.textContent = 'Built with:';
        builtWithContainer.appendChild(builtWithLabel);

        const builtWithList = document.createElement('p');
        builtWithList.textContent = builtWith;
        builtWithContainer.appendChild(builtWithList);
        projectInfoRight.appendChild(builtWithContainer);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = description;
        projectInfoRight.appendChild(projectDescription);

        projectInfo.appendChild(projectInfoRight);
        projectContainer.appendChild(projectInfo);
        
        return projectContainer;
    }
}