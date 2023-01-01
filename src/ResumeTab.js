/******************************************************************************
 *         Name: ResumeTab.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Contains class that is responsible for rendering the resume 
 *               tab page's contents.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./Page.js";

/**
 * Class whose functions renders components of the Resume Tab.
 */
export class ResumeTab extends Page {
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
        pagetitle.textContent = "Resume";
        mainContainer.appendChild(pagetitle);

        mainContainer.appendChild(this.initializeWelcomeContainer());
        mainContainer.appendChild(this.initializeResumeContent());

        return mainContainer;
    }

    /**
     * Renders the resume section of the webpage.
     * @returns The HTMLDivElement that contains the resume section.
     */
    initializeResumeContent() {
        const resumeContainer = document.createElement('div');
        resumeContainer.classList.add('content-container');

        const name = document.createElement('h2');
        name.classList.add('name');
        name.textContent = 'Chad Chapman';
        resumeContainer.appendChild(name);

        const email = document.createElement('p');
        email.classList.add('resume-heading');
        email.textContent = 'cbchapman@alumni.vcu.edu';
        resumeContainer.appendChild(email);

        const phoneNumber = document.createElement('p');
        phoneNumber.classList.add('resume-heading');
        phoneNumber.textContent = '804-426-0891';
        resumeContainer.appendChild(phoneNumber);

        const border = document.createElement('div');
        border.classList.add('resume-border');
        resumeContainer.appendChild(border);

        const jobTitle = document.createElement('div');
        jobTitle.classList.add('resume-job-title');
        jobTitle.textContent = 'Computer Scientist';
        resumeContainer.appendChild(jobTitle);

        const githubLinkContainer = document.createElement('div');
        githubLinkContainer.classList.add('resume-link');
        githubLinkContainer.textContent = 'GitHub: ';
        const githubLink = document.createElement('a');
        githubLink.textContent = 'https://github.com/chapmancbVCU';
        githubLink.setAttribute('href', 'https://github.com/chapmancbVCU');
        githubLinkContainer.appendChild(githubLink);
        resumeContainer.appendChild(githubLinkContainer);

        const linkedInLinkContainer = document.createElement('div');
        linkedInLinkContainer.classList.add('resume-link');
        linkedInLinkContainer.textContent = 'LinkedIn: ';
        const linkedInLink = document.createElement('a');
        linkedInLink.textContent = 'https://www.linkedin.com/in/chadchapman2010/';
        linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/chadchapman2010/');
        linkedInLinkContainer.appendChild(linkedInLink);
        resumeContainer.appendChild(linkedInLinkContainer);

        resumeContainer.appendChild(this.renderSectionBorder('Summary of Technical Skills'));

        resumeContainer.appendChild(this.renderSkillsList());

        return resumeContainer;
    }

    /**
     * Renders the welcome section of the resume tab.
     * @returns The HTMLDivElement that contains the welcome section of the 
     * resume tab.
     */
    initializeWelcomeContainer() {
        const welcomeContainer = document.createElement('div');
        welcomeContainer.classList.add('content-container');

        const welcomeMessage1 = document.createElement('p');
        welcomeMessage1.classList.add('paragraph-content');
        welcomeMessage1.textContent = "Below is a complete resume that includes skills that I'm not only very proficient in but also languages, tools, and technology I have been exposed to over the years.";
        welcomeContainer.appendChild(welcomeMessage1);

        const welcomeMessage2 = document.createElement('p');
        welcomeMessage2.classList.add('paragraph-content');
        welcomeMessage2.textContent = "Reach out to me and I can provide a job tailored resume for you.";
        welcomeContainer.appendChild(welcomeMessage2);
        return welcomeContainer;
    }

    renderEnvironmentsAndToolsList() {
        const environmentAndToolsLi = document.createElement('li');
        environmentAndToolsLi.classList.add('skills-list-item');
        const environment = document.createElement('strong');
        environment.classList.add('skill-category');
        environment.textContent = 'Environments and Tools:';
        environmentAndToolsLi.appendChild(environment);

        const environmentList = document.createElement('p');
        environmentList.textContent = 'Eclipse; Visual Studio 2022; Visual Studio Code; Ansible; Atlassian: Confluence, Jira, BitBucket; MySQL MariaDB; phpMyAdmin; Nginx Web Server; webpack; Netbeans; ModelSim; Xilinx ISE; OrCAD Capture';
        environmentAndToolsLi.appendChild(environmentList);

        return environmentAndToolsLi
    }

    renderLanguagesAndLibrariesList() {
        const languagesAndLibrariesLi = document.createElement('li');
        languagesAndLibrariesLi.classList.add('skills-list-item');
        const languageTitle = document.createElement('strong');
        languageTitle.classList.add('skill-category');
        languageTitle.textContent = 'Languages and Libraries:';
        languagesAndLibrariesLi.appendChild(languageTitle);
        
        const languageList = document.createElement('p');
        languageList.textContent = 'Java; JavaScript; HTML; CSS; PHP; FFmpeg; C/C++; C#; Python; Perl; VHDL; Verilog HDL; Assembly: MIPS, 8051; Java OpenGL (JOGL); Windows Batch; PowerShell';
        languagesAndLibrariesLi.appendChild(languageList);

        return languagesAndLibrariesLi;
    }
    
    renderPlatformsList() {
        const platformsLi = document.createElement('li');
        platformsLi.classList.add('skills-list-item');
        const platforms = document.createElement('strong');
        platforms.classList.add('skill-category');
        platforms.textContent = 'Platforms:';
        platformsLi.appendChild(platforms);

        const platformsList = document.createElement('p');
        platformsList.textContent = 'Windows: 10, 11; Linux/Unix: Ubuntu, CentOS/RedHat/RHEL, MacOS';
        platformsLi.appendChild(platformsList);

        return platformsLi;
    }

    renderSectionBorder(textContent) {
        const sectionBorder = document.createElement('div');
        sectionBorder.classList.add('resume-section-border');
        sectionBorder.textContent = textContent;
        return sectionBorder;
    }

    renderSkillsList() {
        const skillsList = document.createElement('ul');
        skillsList.classList.add('skills-list');

        skillsList.appendChild(this.renderLanguagesAndLibrariesList());
        skillsList.appendChild(this.renderEnvironmentsAndToolsList());        
        skillsList.appendChild(this.renderPlatformsList());

        return skillsList;
    }
}