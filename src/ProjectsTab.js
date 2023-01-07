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
import ClockBoundaries from "./images/clock-boundaries.png";
import CombinationLock from "./images/combination-lock.png";
import RestaurantImage from "./images/restaurant-image.jpg";

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

        let title = 'Restaurant Page';
        let builtWith = 'HTML, CSS, JavaScript, and webpack';
        let description = 'Webpage for a fictional restaurant where I developed skills around building websites with webpack.  What I most enjoyed about this project is learning how to build a website in a similar fashion to coding in other languages with Object Oriented Programming.';
        let codeLink = `location.href='https://github.com/chapmancbVCU/restaurant-page'`;
        let liveLink = `location.href='https://chapmancbvcu.github.io/restaurant-page/dist/index.html'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            RestaurantImage, codeLink, liveLink));

        title = 'Research Seminar';
        builtWith = 'CSS, HTML, and Microsoft Word';
        description = 'In this paper I discuss Artificial Neural Networks and how they can be implemented in hardware.  Topics include what is an Artificial Neural Network, why choose a hardware solution, and implementatiion pitfalls to avoid.  This project is the website version of the paper.';
        codeLink = `location.href='https://github.com/chapmancbVCU/ann-paper'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/ann-paper'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            CircuitImageAnn, codeLink, liveLink));

        title = 'Crossing Clock Boundaries';
        builtWith = 'VHDL Hardware Description Language with ModelSim IDE';
        description = 'An implementation of the procedure for sending data across hardware boundaries where each side of the boundary has a different clock speed.  In order to be successfull we need to implement a finite state machine with states regarding start, send, recieve, and acknowledgement of data being received.  The live link will take you to the writeup for this assignment.  Also, the image you see is the schematic I created to assist in the implementaiton of the design.';
        codeLink = `location.href='https://github.com/chapmancbVCU/EGRE-427-Crossing-Clock-Boundaries'`;
        liveLink = `location.href='https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2FchapmancbVCU%2FEGRE-427-Crossing-Clock-Boundaries%2Fraw%2Fmain%2FEGRE%2520427%2520Homework%2520No%25204%2520writeup.docx'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            ClockBoundaries, codeLink, liveLink));
        

        title = 'Electronic Combination Lock';
        builtWith = 'VHDL Hardware Description Language with Xilinx ISE';
        description = 'An implementation of an electronic combination lock.  After the code was written we synthesized the design to a Field Programmable Gate Array FPGA and demonstrated it to the graduate teaching assistant.  The design required the use of finite state machines to determine if the input is correct.  Depending on the input, a set of 4 LEDs will blink in a certain pattern to indicate if the entered combination is correct.  The live link will take you to the writeup for this assignment.';
        codeLink = `location.href='https://github.com/chapmancbVCU/EGRE-427-Electronic-Combination-Lock'`;
        liveLink = `location.href='https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2FchapmancbVCU%2FEGRE-427-Electronic-Combination-Lock%2Fblob%2Fmain%2FLab%25202%2520Report.docx%3Fraw%3Dtrue'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            CombinationLock, codeLink, liveLink));
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

    renderProject(title, builtWith, description, image, codeLink, liveLink) {
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
        builtWithLabel.classList.add('built-with-label');
        builtWithLabel.textContent = 'Built with:';
        builtWithContainer.appendChild(builtWithLabel);

        const builtWithList = document.createElement('p');
        builtWithList.textContent = builtWith;
        builtWithContainer.appendChild(builtWithList);
        projectInfoRight.appendChild(builtWithContainer);

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = description;
        projectInfoRight.appendChild(projectDescription);

        projectInfo.appendChild(projectInfoRight);
        projectContainer.appendChild(projectInfo);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        const code = document.createElement('button');
        code.textContent = 'Code';
        code.setAttribute('onclick', codeLink);
        buttonsContainer.appendChild(code);
        const live = document.createElement('button');
        live.textContent = 'Live';
        live.setAttribute('onclick', liveLink);
        buttonsContainer.appendChild(live);
        projectContainer.appendChild(buttonsContainer);

        return projectContainer;
    }
}