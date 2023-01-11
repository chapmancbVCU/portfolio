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

        const careerHighlights = document.createElement('h3');
        careerHighlights.textContent = "Career Highlights at NASA";
        careerHighlights.classList.add('career-highlights');
        mainContainer.appendChild(careerHighlights);
        mainContainer.appendChild(this.initializeCareerHighlightsSection());

        return mainContainer;
    }

    /**
     * Renders the career highlights section of the webpage.
     * @returns HTMLDivElement The div that contains the career highlights section.
     */
    initializeCareerHighlightsSection() {
        const highlightsSection = document.createElement('div');
        highlightsSection.appendChild(this.renderAdminVisit());
        highlightsSection.appendChild(this.renderAssocAdminAward());
        return highlightsSection;
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
        resumeContainer.appendChild(this.renderEducation());

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
        welcomeMessage2.textContent = "A Web Developer specific resume for download and print can be found ";

        const link = document.createElement('a');
        link.textContent = "here.";
        link.href = "https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2FchapmancbVCU%2Fportfolio%2Fblob%2Fmain%2Fsrc%2Fdocs%2FChad_Chapman_Resume.docx%3Fraw%3Dtrue";
        welcomeMessage2.appendChild(link);
        welcomeContainer.appendChild(welcomeMessage2);
        
        return welcomeContainer;
    }

    /**
     * Renders the section for the NASA admin visit.
     * @returns HTMLDivElement The div that contains information about the 
     * NASA administrator visit.
     */
    renderAdminVisit() {
        const adminVisitContainer = document.createElement('div');
        adminVisitContainer.classList.add('content-container');
        
        const adminVisit = document.createElement('h3');
        adminVisit.textContent = "NASA Administrator Visit";
        adminVisit.classList.add('highlight-title');
        adminVisitContainer.appendChild(adminVisit);

        const adminVistDescription = document.createElement('p');
        adminVistDescription.textContent = 'Within my first year working at NASA I had the pleasure to support a high profile demonstration for the NASA Administrator Charles Bolden.  News coverage of the visit can be viewed below.';
        adminVistDescription.classList.add('paragraph-content');
        adminVisitContainer.appendChild(adminVistDescription);

        const visitVideoContainer = document.createElement('div');
        visitVideoContainer.classList.add('iframe-container');
        const adminVisitVideo = document.createElement('iframe');
        adminVisitVideo.setAttribute('src', 'https://www.youtube.com/embed/O1BzQEkTHlQ');
        adminVisitVideo.setAttribute('allowfullscreen', '');
        visitVideoContainer.appendChild(adminVisitVideo);
        adminVisitContainer.appendChild(visitVideoContainer);

        return adminVisitContainer;
    }

    renderAssocAdminAward() {
        const assocAdminAwardContainer = document.createElement('div');
        assocAdminAwardContainer.classList.add('content-container');

        return assocAdminAwardContainer;
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
     * Renders the the educational experience section of the resume.
     * @returns HTMLDivElement A div element containing the educational 
     * experience section of the resume.
     */
    renderEducation() {
        const educationContainer = document.createElement('div');
        educationContainer.classList.add('education-container');

        educationContainer.appendChild(this.renderFacilityContainer(
                'Bachelor of Science in Computer Science',
                'Virginia Commonwealth University',
                'December 2010',
                'Richmond, VA'));

        const minorsDiv = document.createElement('div');
        minorsDiv.classList.add('education-information');
        const minorsLabel = document.createElement('em');
        minorsLabel.textContent = 'Minors:';
        minorsDiv.appendChild(minorsLabel);
        const minors = document.createElement('p');
        minors.textContent = 'Computer Engineering, Mathematical Sciences';
        minorsDiv.appendChild(minors);
        educationContainer.appendChild(minorsDiv);

        const distinctionsDiv = document.createElement('div');
        distinctionsDiv.classList.add('education-information');
        const distinctionsLabel = document.createElement('em');
        distinctionsLabel.textContent = "Distinctions:";
        distinctionsDiv.appendChild(distinctionsLabel);
        const distinctions = document.createElement('p');
        distinctions.textContent = "Dean's List";
        distinctionsDiv.appendChild(distinctions);
        educationContainer.appendChild(distinctionsDiv);
        
        return educationContainer;
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
        environmentList.textContent = 'Git; Eclipse; Visual Studio 2022; Visual Studio Code; Ansible; Atlassian: Confluence, Jira, BitBucket; MySQL MariaDB; phpMyAdmin; Nginx Web Server; webpack; Netbeans; ModelSim; Xilinx ISE; OrCAD Capture';
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

    /**
     * Renders information about a work or educational facility.
     * @param {string} boldText Bold text on top left of div.
     * @param {string} regularText Regular text on bottom left of div.
     * @param {string} topRight Text that renders in top right corner.
     * @param {string} bottomRight Text that renders in bottom left corner.
     * @returns HTMLDivElement The div element that renders educational and 
     * work information.
     */
    renderFacilityContainer(boldText, regularText, topRight, bottomRight) {
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
        locationContent.textContent = topRight;
        right.appendChild(locationContent);
        const yearsContent = document.createElement('p');
        yearsContent.textContent = bottomRight;
        right.appendChild(yearsContent);
        facilityContainer.appendChild(right);
        return facilityContainer;
    }
    
    /**
     * Renders the languages and libraries section.
     * @returns HTMLDivElement The div element that contains information about 
     * languages and libraries
     */
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
    
    /**
     * Renders the LinkedIn link.
     * @returns HTMLDivElement The div element that contains LinkedIn profile.
     */
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

    /**
     * Renders the name for my resume.
     * @returns HTMLDivElement The div element that contains the name of the 
     * resume's author.
     */
    renderName() {
        const name = document.createElement('h2');
        name.classList.add('name');
        name.textContent = 'Chad Chapman';

        return name;
    }

    /**
     * Renders the phone number for my resume.
     * @returns HTMLDivElement The div element that contains the phone number 
     * of the resume's author.
     */
    renderPhoneNumber() {
        const phoneNumber = document.createElement('p');
        phoneNumber.classList.add('resume-heading');
        phoneNumber.textContent = '804-426-0891';

        return phoneNumber;
    }

    /**
     * Renders the OS platforms section.
     * @returns HTMLDivElement The div element that contains information about 
     * OS platforms I am familar with.
     */
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

    /**
     * Renders the professional experience section.
     * @returns HTMLDivElement The div element that contains bullet points 
     * that describe my professional experience.
     */
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
        lineEight.textContent = 'Developed a maintenance tool in Java that generates a report of outdated simulation software builds on systems throughout the production environment.';
        experienceList.appendChild(lineEight);

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

    /**
     * Renders the skills list section.
     * @returns HTMLDivElement The div element that contains information about 
     * the skills I have acquired.
     */
    renderSkillsList() {
        const skillsList = document.createElement('ul');
        skillsList.classList.add('skills-list');

        skillsList.appendChild(this.renderLanguagesAndLibrariesList());
        skillsList.appendChild(this.renderEnvironmentsAndToolsList());        
        skillsList.appendChild(this.renderPlatformsList());

        return skillsList;
    }
}