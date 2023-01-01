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
     * @returns HTMLDivElement The div that contains the main section.
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
     * @returns HTMLDivElement The div that contains the resume section.
     */
    initializeResumeContent() {
        const resumeContainer = document.createElement('div');
        resumeContainer.classList.add('content-container');

        resumeContainer.appendChild(this.renderName());
        resumeContainer.appendChild(this.renderEmail());
        resumeContainer.appendChild(this.renderPhoneNumber());

        resumeContainer.appendChild(this.renderBorder());

        resumeContainer.appendChild(this.renderJobTitle());
        resumeContainer.appendChild(this.renderGitHubLink());
        resumeContainer.appendChild(this.renderLinkedInLink());

        resumeContainer.appendChild(this.renderSectionBorder(
            'Summary of Technical Skills'));

        resumeContainer.appendChild(this.renderSkillsList());

        resumeContainer.appendChild(this.renderSectionBorder(
            'Professional Experience'));

        resumeContainer.appendChild(this.renderProfessionalExperience());

        resumeContainer.appendChild(this.renderSectionBorder('Education'));
        
        return resumeContainer;
    }

    /**
     * Renders the welcome section of the resume tab.
     * @returns HTMLDivElement The div that contains the welcome section of the 
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

    /**
     * Renders the border near the top of the resume.
     * @returns HTMLDivElement with border styling that acts as a border
     * at the top of the resume.
     */
    renderBorder() {
        const border = document.createElement('div');
        border.classList.add('resume-border');

        return border;
    }

    /**
     * Renders the E-mail.
     * @returns HTMLParagraphElement The resume E-mail.
     */
    renderEmail() {
        const email = document.createElement('p');
        email.classList.add('resume-heading');
        email.textContent = 'cbchapman@alumni.vcu.edu';

        return email;
    }

    /**
     * Renders the list of environments and tools as a list element.
     * @returns HTMLLIElement The list of environments and tools for the
     * resume.
     */
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

    /**
     * Renders the link for my GitHub profile.
     * @returns HTMLDivElement The 
     */
    renderGitHubLink() {
        const githubLinkContainer = document.createElement('div');
        githubLinkContainer.classList.add('resume-link');
        githubLinkContainer.textContent = 'GitHub: ';
        const githubLink = document.createElement('a');
        githubLink.textContent = 'https://github.com/chapmancbVCU';
        githubLink.setAttribute('href', 'https://github.com/chapmancbVCU');
        githubLinkContainer.appendChild(githubLink);

        return githubLinkContainer;
    }

    /**
     * Renders the job title for my resume.
     * @returns HTMLDivElement The div element that contains the job title for 
     * the resume.
     */
    renderJobTitle() {
        const jobTitle = document.createElement('div');
        jobTitle.classList.add('resume-job-title');
        jobTitle.textContent = 'Computer Scientist';

        return jobTitle;
    }

    renderFacilityContainer(boldText, regularText, location, years) {
        const facilityContainer = document.createElement('div');
        facilityContainer.classList.add('facility-container');
    
        const left = document.createElement('div');
        left.classList.add('facility-container-left');
        const boldTextContent = document.createElement('strong');
        boldTextContent.textContent = boldText;
        left.appendChild(boldTextContent);
        const regularTextContent = document.createElement('p');
        regularTextContent.textContent = regularText;
        left.appendChild(regularTextContent);
        facilityContainer.appendChild(left);

        const right = document.createElement('div');
        right.classList.add('facility-container-right');
        const locationContent = document.createElement('p');
        locationContent.textContent = location;
        right.appendChild(locationContent);
        const yearsContent = document.createElement('p');
        yearsContent.textContent = years;
        right.appendChild(yearsContent);
        facilityContainer.appendChild(right);
        return facilityContainer;
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
    
    renderLinkedInLink() {
        const linkedInLinkContainer = document.createElement('div');
        linkedInLinkContainer.classList.add('resume-link');
        linkedInLinkContainer.textContent = 'LinkedIn: ';
        const linkedInLink = document.createElement('a');
        linkedInLink.textContent = 'https://www.linkedin.com/in/chadchapman2010/';
        linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/chadchapman2010/');
        linkedInLinkContainer.appendChild(linkedInLink);

        return linkedInLinkContainer;
    }

    renderName() {
        const name = document.createElement('h2');
        name.classList.add('name');
        name.textContent = 'Chad Chapman';

        return name;
    }

    renderPhoneNumber() {
        const phoneNumber = document.createElement('p');
        phoneNumber.classList.add('resume-heading');
        phoneNumber.textContent = '804-426-0891';

        return phoneNumber;
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

    renderProfessionalExperience() {
        const professionalExperienceContainer = document.createElement('div');
        professionalExperienceContainer.classList.add(
                'professional-experience-container');

        professionalExperienceContainer.appendChild(this.renderFacilityContainer(
                'Science Systems and Applications, Inc.',
                'Computer Scientist',
                'Hampton, VA',
                '08-2012 - Present'));

        const experienceList = document.createElement('ul');
        experienceList.classList.add('experience-list');

        const lineOne = document.createElement('li');
        lineOne.textContent = 'Provided simulation services for our civil servant customers at NASA Langley Research Center in the role of a Systems Engineer for the Air Traffic Operations Laboratory (ATOL).';
        experienceList.appendChild(lineOne);

        const lineTwo = document.createElement('li');
        lineTwo.textContent = 'Reduced our customer’s operational costs by designing and deploying a video streaming solution using a Nginx server that supports live streaming and Video on Demand (VOD) services.';
        experienceList.appendChild(lineTwo);
        
        const lineThree = document.createElement('li');
        lineThree.textContent = 'Developed the website front end for the video streaming solution which references a database that stores searchable records of videos available to the VOD service.';
        experienceList.appendChild(lineThree);

        const lineFour = document.createElement('li');
        lineFour.textContent = 'Created a user guide for how to operate the services provided by the Nginx server.';
        experienceList.appendChild(lineFour);

        const lineFive = document.createElement('li');
        lineFive.textContent = 'Collaborated with our System Administrators to perform upgrades and conduct testing of the ATOL facility’s video distribution system.';
        experienceList.appendChild(lineFive);

        const lineSix = document.createElement('li');
        lineSix.textContent = 'Automated the deployment of several generations of our configuration baseline with Ansible to hardware assets in our customer’s test and verification laboratory and production environments';
        experienceList.appendChild(lineSix);

        const lineSeven = document.createElement('li');
        lineSeven.textContent = 'Implemented a Python script that reports statistics of error rates from large datasets.';
        experienceList.appendChild(lineSeven);

        const lineEight = document.createElement('li');
        lineEight.textContent = 'Ensured the secured delivery of experiment data to researchers and members of the development team following the CIA (Confidentiality, Integrity, Availability) of IT Security industry standard.';
        experienceList.appendChild(lineEight);

        const lineNine = document.createElement('li');
        lineNine.textContent = 'Developed a maintenance tool in Java that generates a report of outdated simulation software builds on systems throughout the production environment.';
        experienceList.appendChild(lineNine);

        professionalExperienceContainer.appendChild(experienceList);

        return professionalExperienceContainer;
    }

    /**
     * Renders the section borders of the resume.
     * @param {string} textContent The title that is rendered as the border's 
     * text.
     * @returns The HTMLDivElement that is used as a section border.
     */
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