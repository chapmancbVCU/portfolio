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
import Collatz from "./images/3x+1.png";
import CombinationLock from "./images/combination-lock.png";
import CV from "./images/cv.jpg";
import LibraryImage from "./images/library-image.jpg";
import PortfolioImage from "./images/portfolio.jpg";
import Recursion from "./images/recursion.jpg";
import RestaurantImage from "./images/restaurant-image.jpg";
import SignUpForm from "./images/signup-form.png";
import TodoListImage from "./images/todo-list-image.jpg";
import Weather from "./images/weather.jpg";

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

        // Current project
        let title = 'CV Application';
        let builtWith = 'ReactJS, JavaScript, TypeScript, Jest, Webpack, HTML, CSS';
        let description = 'This is the current project that I am working on beginning on March 26, 2023.  Follow me as I make daily updates to this CV Application webpage.';
        let codeLink = `location.href='https://github.com/chapmancbVCU/cv-application/tree/main'`;
        let liveLink = `location.href='https://chapmancbvcu.github.io/cv-application/'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            CV, codeLink, liveLink));

        title = 'Merge Sort';
        builtWith = 'Node.JS, JavaScript, TypeScript, Jest, Webpack';
        description = 'This project showcases the implementation of the Merge Sort Algorithm. The data structure of choice for this project is the Linked List, for which we created a custom implementation and necessary functions for list modification. In order to ensure the functionality and reliability of the linked list functions, we utilized a test-driven development approach. With this project, you can explore how the Merge Sort Algorithm can be used with a Linked List data structure, while also gaining insights into test-driven development best practices.';
        codeLink = `location.href='https://github.com/chapmancbVCU/merge-sort'`;
        liveLink = `location.href='https://github.com/chapmancbVCU/merge-sort'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            Recursion, codeLink, liveLink));

        title = 'Weather App';
        builtWith = 'HTML, CSS, JavaScript, and webpack';
        description = 'In this project, we utilized a combination of web development technologies such as HTML, CSS, JavaScript, and webpack. Our objective was to create a dynamic webpage that displays weather information using an API key from Open Weather Map.  The webpage includes a search feature that enables users to look up weather information for various locations and change the units of measurement displayed. Additionally, we integrated location detection functionality to automatically display the forecast for a user\'s current location when the page is initially loaded.  By leveraging these technologies, we have created a responsive and user-friendly webpage that enables users to easily access and view accurate weather information for any location of their choice.';
        codeLink = `location.href='https://github.com/chapmancbVCU/weather-app'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/weather-app/dist/index.html'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            Weather, codeLink, liveLink));

        title = 'Todo List App';
        builtWith = 'HTML, CSS, JavaScript, and webpack';
        description = 'This is my implementation of a robust Todo List App, built using HTML, CSS, JavaScript, and webpack. Our goal was to create a user-friendly and responsive application that supports all CRUD (Create, Read, Update, and Delete) operations for managing tasks.  To ensure a seamless user experience, we utilized local storage of the user\'s web browser, which allows users to save their tasks between browser sessions.  The Todo List App is intuitive and easy to use, with a simple and clean user interface that allows users to quickly add, edit, delete, and mark their tasks as complete. Additionally, the application is designed to be responsive, ensuring that it is accessible and functional across a range of devices and screen sizes.';
        codeLink = `location.href='https://github.com/chapmancbVCU/todo-list'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/todo-list/dist/index.html'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            TodoListImage, codeLink, liveLink));

        title = 'Restaurant Page';
        builtWith = 'HTML, CSS, JavaScript, and webpack';
        description = 'Webpage for a fictional restaurant where I developed skills around building websites with webpack.  What I most enjoyed about this project is learning how to build a website in a similar fashion to coding in other languages with Object Oriented Programming.';
        codeLink = `location.href='https://github.com/chapmancbVCU/restaurant-page'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/restaurant-page/dist/index.html'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            RestaurantImage, codeLink, liveLink));

        title = 'Library';
        builtWith = 'HTML, CSS, and JavaScript';
        description = 'This is project I have been working on that is an assignment for The Odin Project.  It is a work in progress and more work will be completed as I progress through the course.  The early goals is to enforce object oriented programming concepts and extra practice with forms.';
        codeLink = `location.href='https://github.com/chapmancbVCU/library'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/library/'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            LibraryImage, codeLink, liveLink));

        title = 'Sign-Up Form';
        builtWith = 'HTML, CSS, and JavaScript';
        description = 'An assignment from The Odin Project where you create a Sign-Up Form for a ficticious event.  I immediately took concepts for improving form validation that I learned and applied it on my professional projects for work.';
        codeLink = `location.href='https://github.com/chapmancbVCU/sign-up-form'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/sign-up-form/'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            SignUpForm, codeLink, liveLink));

        title = 'Collatz Conjecture (3x+1 Problem)';
        builtWith = 'Java with the Eclipse IDE';
        description = 'This software is intended to demonstrate how the Collatz conjecture (3x+1) function is calculated.  It is defined as a function where in a case a seed is even, then you divide it by 2. If it is odd, you solve 3x+1, where x is the seed. This will repeat until you begin to observe 4, 2 and 1 being a repeated output.  This program has 2 ways of performing this in order to present performance information with respect to time. A non iterative version will simply report how much time has passed when a seed is set and the function performs calculations until it begins to repeat 4, 2, and 1. Hence, one pass of calculations is performed. Finally the time taken to reach 4, 2, 1, is reported in microseconds.';
        codeLink = `location.href='https://github.com/chapmancbVCU/Java-3x-plus-1-Problem-Collatz-conjecture'`;
        liveLink = codeLink;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            Collatz, codeLink, liveLink));

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
        liveLink = `location.href='https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2FchapmancbVCU%2FEGRE-427-Electronic-Combination-Lock%2Fraw%2Fmain%2FHW2%2520Report.pdf'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            CombinationLock, codeLink, liveLink));

        title = 'Portfolio';
        builtWith = 'HTML, CSS, JavaScript, and webpack';
        description = 'The professional portfolio page you are visiting right now.  Check out the source code if you want to.';
        codeLink = `location.href='https://github.com/chapmancbVCU/portfolio'`;
        liveLink = `location.href='https://chapmancbvcu.github.io/portfolio/dist/index.html'`;
        mainContainer.appendChild(this.renderProject(
            title, builtWith, description, 
            PortfolioImage, codeLink, liveLink));
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
        welcomeMessage1.textContent = "Below is a collection of projects I have completed in my leisure time and while completing my studies at VCU.  Here you will find a variety of projects from websites to hardware designs.";
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

        const projectInfoLeft = document.createElement('div');
        projectInfoLeft.classList.add('project-info-left');

        const projectImage = new Image();
        projectImage.classList.add('project-image');
        projectImage.src = image;
        projectInfoLeft.appendChild(projectImage);

        projectInfo.appendChild(projectInfoLeft);

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