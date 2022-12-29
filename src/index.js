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
import './css/styles.css';
import { HomeTab } from './HomeTab.js';
import { ResumeTab } from './ResumeTab.js';


/******************************************************************************
 * INITIAL PAGE SETUP
 *****************************************************************************/
const homeTab = new HomeTab();
const resumeTab = new ResumeTab();

// Show home tab by default.
const container = homeTab.getContentContainer();
container.appendChild(homeTab.initializeHeader());
container.appendChild(homeTab.initializeMain());
container.appendChild(homeTab.initializeFooter());

// Create query selectors for each tab.
const homeTabSelector = document.querySelector('#home-tab');
const resumeTabSelector = document.querySelector('#resume-tab');


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