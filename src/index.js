/******************************************************************************
 *         Name: index.js
 *       Author: Chad Chapman
 * Date Created: December 28, 2022
 *  Description: Functions that support implementation of professional 
 *               portfolio website.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import _ from 'lodash';
import { AboutTab } from './AboutTab.js';
import { ContactTab } from './ContactTab.js';
import './css/styles.css';
import { HomeTab } from './HomeTab.js';
import { ProjectsTab } from './ProjectsTab.js';
import { ResumeTab } from './ResumeTab.js';


/******************************************************************************
 * INITIAL PAGE SETUP
 *****************************************************************************/
const homeTab = new HomeTab();
const resumeTab = new ResumeTab();
const projectsTab = new ProjectsTab();
//const aboutTab = new AboutTab();
//const contactTab = new ContactTab();

// Show home tab by default.
const container = homeTab.getContentContainer();
container.appendChild(homeTab.initializeHeader());
container.appendChild(homeTab.initializeMain());
container.appendChild(homeTab.initializeFooter());

// Create query selectors for each tab.
const homeTabSelector = document.querySelector('#home-tab');
const resumeTabSelector = document.querySelector('#resume-tab');
const projectsTabSelector = document.querySelector('#projects-tab');
//const aboutTabSelector = document.querySelector('#about-tab');
//const contactTabSelector = document.querySelector('#contact-tab');

/******************************************************************************
 * EVENT LISTENERS
 *****************************************************************************/
homeTabSelector.addEventListener('click', function() {
    homeTab.eraseMainDomContent();
    homeTab.eraseFooterDomContent();
    container.appendChild(homeTab.initializeMain());
    container.appendChild(homeTab.initializeFooter());
});

resumeTabSelector.addEventListener('click', function() {
    resumeTab.eraseMainDomContent();
    resumeTab.eraseFooterDomContent();
    container.appendChild(resumeTab.initializeMain());
    container.appendChild(resumeTab.initializeFooter());
});

projectsTabSelector.addEventListener('click', function() {
    projectsTab.eraseMainDomContent();
    projectsTab.eraseFooterDomContent();
    container.appendChild(projectsTab.initializeMain());
    container.appendChild(projectsTab.initializeFooter());
});

/*aboutTabSelector.addEventListener('click', function() {
    aboutTab.eraseMainDomContent();
    aboutTab.eraseFooterDomContent();
    container.appendChild(aboutTab.initializeMain());
    container.appendChild(aboutTab.initializeFooter());
});*/

/*contactTabSelector.addEventListener('click', function() {
    contactTab.eraseMainDomContent();
    contactTab.eraseFooterDomContent();
    container.appendChild(contactTab.initializeMain());
    container.appendChild(contactTab.initializeFooter());
});*/