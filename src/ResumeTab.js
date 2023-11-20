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
        highlightsSection.appendChild(this.renderOshkosh());
        highlightsSection.appendChild(this.renderAdminVisit());
        highlightsSection.appendChild(this.renderAssociateAdminAward());
        highlightsSection.appendChild(this.renderFailureDiscovery());
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

        resumeContainer.appendChild(this.renderTechnicalSkillsSummaryList());

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
     * Renders the section for the NASA Administrator visit.
     * @returns HTMLDivElement The div that contains information about the 
     * NASA Administrator visit.
     */
    renderAdminVisit() {
        const adminVisitContainer = document.createElement('div');
        adminVisitContainer.classList.add('content-container');

        const adminVisit = document.createElement('h3');
        adminVisit.textContent = "NASA Administrator Visit";
        adminVisit.classList.add('highlight-title');
        adminVisitContainer.appendChild(adminVisit);

        const adminVistDescription = document.createElement('p');
        adminVistDescription.textContent = 'During my first year working at NASA, I had the honor of being involved in a high-profile demonstration that was held for none other than the esteemed NASA Administrator Charles Bolden. The event was held in our facility, where we had the privilege of showcasing our cutting-edge technology and expertise. As part of the demonstration, Mr. Bolden held a news conference, which was covered by various media outlets. I am thrilled to have been a part of this exciting opportunity and am proud to have contributed to the success of the event. Please feel free to view the news coverage of this remarkable visit below.';
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

    /**
     * Renders the section for the NASA Associate Administrator award.
     * @returns HTMLDivElement The div that contains information about the 
     * NASA Associate Administrator award.
     */
    renderAssociateAdminAward() {
        const associateAdminAwardContainer = document.createElement('div');
        associateAdminAwardContainer.classList.add('content-container');

        const title = document.createElement('h3');
        title.textContent = '2021 Associate Administrator (AA) Awards';
        title.classList.add('highlight-title');
        associateAdminAwardContainer.appendChild(title);

        const descriptionParagraph1 = document.createElement('p');
        descriptionParagraph1.textContent = 'I am proud to have played a role in the ground-breaking work that led to our team being recognized by the NASA Associate Administrator. This was a once-in-a-lifetime achievement, as our efforts will revolutionize the integration of drones into the National Airspace. Specifically, we worked on building a prototype command center, which will serve as the hub for future remote operations involving autonomous missions.';
        descriptionParagraph1.classList.add('paragraph-content');
        associateAdminAwardContainer.appendChild(descriptionParagraph1);

        const descriptionParagraph2 = document.createElement('p');
        descriptionParagraph2.textContent = 'Our team\'s research is focused on tackling some of the key technical and human factors involved in drone operations. We are exploring the possibilities of using drones for delivery services, as well as for law enforcement and fire department operations. Our findings will pave the way for the safe and effective use of drones in these and other contexts.  A page containing more information can be found ';
        descriptionParagraph2.classList.add('paragraph-content');

        const link = document.createElement('a');
        link.textContent = 'here.';
        link.setAttribute('href', 'https://www.nasa.gov/aeroresearch/aa-awards/2021-tech-group-winners/');
        descriptionParagraph2.appendChild(link);
        associateAdminAwardContainer.appendChild(descriptionParagraph2);

        return associateAdminAwardContainer;
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
        environmentList.textContent = 'Git; GitHub; Node.JS; Jest; Eclipse; Visual Studio 2022; Visual Studio Code; Ansible; Atlassian: Confluence, Jira, BitBucket; MySQL MariaDB; phpMyAdmin; Nginx Web Server; webpack; Netbeans; ModelSim; Xilinx ISE; OrCAD Capture';
        environmentAndToolsLi.appendChild(environmentList);

        return environmentAndToolsLi
    }

    /**
     * Renders the section for event where I performed testing and discovered 
     * a major failure before guests arrived.
     * @returns HTMLDivElement The div that contains information about how 
     * I discovered a failure that got resolved before high profile guests 
     * arrived for a demonstration.
     */
    renderFailureDiscovery() {
        const failureDiscoveryContainer = document.createElement('div');
        failureDiscoveryContainer.classList.add('content-container');
        
        const title = document.createElement('h3');
        title.textContent = 'Big Save Before High Profile Demonstration';
        title.classList.add('highlight-title');
        failureDiscoveryContainer.appendChild(title);

        const descriptionParagraph1 = document.createElement('p');
        descriptionParagraph1.textContent = 'Early in my career I recieved recognition from my company for my quick thinking and initiative in discovering a major failure just before a crucial demonstration that was to be presented to a group of airline industry executives. While another team member had already tested our capabilities on the morning of the demonstration, I took it upon myself to perform one final test just 90 minutes before the guests were due to arrive.';
        descriptionParagraph1.classList.add('paragraph-content');
        failureDiscoveryContainer.appendChild(descriptionParagraph1);

        const descriptionParagraph2 = document.createElement('p');
        descriptionParagraph2.textContent = 'This extra test proved to be crucial, as I discovered a failure in a key component of our simulation. Thanks to quick thinking form our System Administrators, we were able to replace the faulty component with a spare and test it thoroughly before the guests arrived. This meant that our demonstration went off without a hitch, and we were able to impress the airline executives with our cutting-edge technology and attention to detail. I am honored to have been recognized by my company for my contributions to this demonstration for hour high-profile guests.';
        descriptionParagraph2.classList.add('paragraph-content');
        failureDiscoveryContainer.appendChild(descriptionParagraph2);
        return failureDiscoveryContainer;
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
     * Takes the value from an image import statement and creates an 
     * HTMLImageElement so that it can be rendered.
     * @param {Image} imageFile The import of an image.
     * @returns HTMLImageElement containing image for highlights section.
     */
    renderImage(imageFile) {
        const image = new Image();
        image.classList.add('highlights-image');
        image.src = imageFile;
        return image;
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
        languageList.textContent = 'Java; JavaScript; TypeScript; HTML; CSS; PHP; FFmpeg; C/C++; C#; Python; Perl; VHDL; Verilog HDL; Assembly: MIPS, 8051; Java OpenGL (JOGL); Windows Batch; PowerShell';
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
     * Renders section that describes Oshkosh trip.
     * @returns HTMLDivElement containing details about Oshkosh trip.
     */
    renderOshkosh() {
        const oshkoshTripContainer = document.createElement('div');
        oshkoshTripContainer.classList.add('content-container');

        const oshkoshVisit = document.createElement('h3');
        oshkoshVisit.textContent = "Experimental Aircraft Association (EAA) 2023 AirVenture Air Show in Oshkosh, WI";
        oshkoshVisit.classList.add('highlight-title');
        oshkoshTripContainer.appendChild(oshkoshVisit);

        const descriptionParagraph1 = document.createElement('p');
        descriptionParagraph1.textContent = 'NASA\'s largest public outreach event of the year is the EAA AirVenture Air Show in Oshkosh, Wisconsin. The Crew Systems and Aviation Operations Branch, under the Research Directorate, confidently presented their Urban Air Mobility (UAM) research capability by sending civil servants and contractors to showcase their technology. The industry term for this innovation is flying taxis, and the team utilized an interactive setup called a UAM Flyer to provide an impressive demonstration.'
        descriptionParagraph1.classList.add('paragraph-content');
        oshkoshTripContainer.appendChild(descriptionParagraph1);

        const descriptionParagraph2 = document.createElement('p');
        descriptionParagraph2.textContent = 'The UAM Flyers are an invaluable research tool in determining the necessary steps for making flying taxis a fully viable transportation option for the public. With these flyers, we can confidently identify areas that require improvement and those that have been successful within a simulation environment, while maintaining close collaboration with the FAA.'
        descriptionParagraph2.classList.add('paragraph-content');
        oshkoshTripContainer.appendChild(descriptionParagraph2);
        return oshkoshTripContainer;
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
                'Analytical Mechanics Associates',
                'Software Developer',
                'Hampton, VA',
                '06/2023 - Present'));
        
        professionalExperienceContainer.appendChild(this.renderFacilityContainer(
                'Science Systems and Applications, Inc.',
                'Computer Scientist',
                'Hampton, VA',
                '08/2012 - 05/2023'));

        const experienceList = document.createElement('ul');
        experienceList.classList.add('experience-list');

        const lineOne = document.createElement('li');
        lineOne.textContent = 'Provided simulation services for NASA Langley Research Center\'s Air Traffic Operations Laboratory (ATOL) as a Systems Engineer across multiple contracts and two employers.';
        experienceList.appendChild(lineOne);

        const lineTwo = document.createElement('li');
        lineTwo.textContent = 'Created a comprehensive video streaming solution, encompassing a Linux-based Nginx server for live streaming and Video on Demand (VOD) services, alongside the development of the corresponding website front end integrated with a searchable video database.';
        experienceList.appendChild(lineTwo);
        
        const lineThree = document.createElement('li');
        lineThree.textContent = 'Streamlined the recording and live streaming of experiment asset displays with Open Broadcast Software (OBS) through the implementation of efficient scripting solutions.';
        experienceList.appendChild(lineThree);

        const lineFour = document.createElement('li');
        lineFour.textContent = 'Developed a dashboard that reports information about active live streams.';
        experienceList.appendChild(lineFour);

        const lineFive = document.createElement('li');
        lineFive.textContent = 'Created a user guide for how to operate the services provided by the Nginx server.';
        experienceList.appendChild(lineFive);

        const lineSix = document.createElement('li');
        lineSix.textContent = 'Collaborated with our System Administrators to perform upgrades and conduct testing of the ATOL facility’s video distribution system.';
        experienceList.appendChild(lineSix);

        const lineSeven = document.createElement('li');
        lineSeven.textContent = 'Automated deployment of several generations of configuration baseline with Ansible to hardware assets in customer\'s test and verification laboratory and production environments, reducing deployment time by 75%.';
        experienceList.appendChild(lineSeven);

        const lineEight = document.createElement('li');
        lineEight.textContent = 'Implemented Python script that reports statistics of error rates from large datasets, assisting the customer in determining the scope of a simulation timing issue.';
        experienceList.appendChild(lineEight);

        const lineNine = document.createElement('li');
        lineNine.textContent = 'Developed maintenance tool in Java that generates report of outdated simulation software builds on systems throughout production environment.';
        experienceList.appendChild(lineNine);

        const lineTen = document.createElement('li');
        lineTen.textContent = 'Ensured secure delivery of experiment data to researchers and development team following Confidentiality, Integrity, and Availability(CIA) Triad IT Security industry standard.';
        experienceList.appendChild(lineTen);

        const lineEleven = document.createElement('li');
        lineEleven.textContent = 'Showcased our interactive demonstrator for Urban Air Mobility, a flying taxi concept, at the prestigious Experimental Aircraft Association 2023 AirVenture Air Show in Oshkosh, WI.';
        experienceList.appendChild(lineEleven);
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
     * Renders the skills section.
     * @returns HTMLDivElement The div element that contains information about 
     * skills I possess.
     */
    renderSkillsList() {
        const skillsLi = document.createElement('li');
        skillsLi.classList.add('skills-list-item');
        const skills = document.createElement('strong');
        skills.classList.add('skill-category');
        skills.textContent = 'Skills:';
        skillsLi.appendChild(skills);

        const skillsList = document.createElement('p');
        skillsList.textContent = 'Object Oriented Programming (OOP); Responsive Web Design, DevOps, Documentation';
        skillsLi.appendChild(skillsList);

        return skillsLi;
    }

    /**
     * Renders the summary of technical skills list section.
     * @returns HTMLDivElement The div element that contains information about 
     * the technical skills I have acquired.
     */
    renderTechnicalSkillsSummaryList() {
        const technicalSkillsList = document.createElement('ul');
        technicalSkillsList.classList.add('skills-list');

        technicalSkillsList.appendChild(this.renderLanguagesAndLibrariesList());
        technicalSkillsList.appendChild(this.renderEnvironmentsAndToolsList());  
        technicalSkillsList.appendChild(this.renderSkillsList());      
        technicalSkillsList.appendChild(this.renderPlatformsList());

        return technicalSkillsList;
    }
}