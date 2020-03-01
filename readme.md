# _Doctor Lookup_

#### _This is a running webpage, as of 2/22/20._

#### By _**Antonio Cruz**_

## Description

_This is a website that allows a user to enter in a text field a symptom they may be experiencing as a result of being sick. The user is also able to search directly for Doctors they may have in mind. Upon submission, a list of doctors in te Portland area should appear and if they are accepting patients in that time._


## SPEC Sheet

* If user's request cannot fetch API call.
  * Input: Hello
  * Output: Error message
* User receives list of recommended doctors
  * Input: Cold (ailment).
  * Output:    
      * List of Doctors:
      * First, last name.
      * Address.
      * Phone number.
      * Website.
      * Whether or not they are accepting new patients.
* User enters a doctor's name. 
  * Input: James
  * Output: Return a list of doctors by that name.
* User enters a city and state.
  * Input: Portland, OR.
  * Output: List of doctors in that area.
* User enters an ailment that no doctors are avaiable to treat.
  * Input: The Black Plague.
  * Output: 'There are no results to display at this time.'

## Setup/Installation Requirements

### INCLUDE INSTRUCTIONS TO USE WEBPACK'S SERVER AND API KEY
* Clone this repo by selecting the "clone or download" button. This will allow you to copy the repo's link.
* While on the command line in your terminal, enter "git clone" followed by the copied url.
* Enter "ls" to show a list of files and documents. One of them will be labeled "friday_project6V2". Use "cd" followed by the project directory name to navigate there. 
* While in project directory, open the contents of the directory, or use "code ." to enable the shortcut to open in Visual Studio Code.
* Open your web browser to create an account with https://developer.betterdoctor.com/. You will need an account to have access to an API key they will send to your email.
* Open email from BetterDoctor, and go the link, or copy the suggested API key.
* Open the current window for Visual Studio Code.
  1. Go to doctor.js file, and look for the API url beside the 'fetch' method.
  2. At the end of the url is a 'user_key=' followed by a .env file link.
  3. Remove the link entirely, all but 'user_key='.
  4. Past the API key you recieved in your email where the .env file once was.
  5. Repeat steps 1-4 to the second method in that class, down below.
  6. Save the document.
* Go back to terminal, run the command "npm run start" while in the root folder of the project.
  7. A webpage should appear, and now you can enter any symptoms of illness or a particular doctor of your liking to the page to recieve care results.

## Known Bugs

_Application is not yet in a functional state._

## Support and contact details

_Antonio Cruz's email:_
_codrocks.cruz3@gmail.com_

## Technologies Used

* _Markdown_
* _CSS_
* _HTML_
* _Bootstrap_
* _Git_
* _JavaScript_
* _JQuery_
* _Jest_
* _Webpack_
* _EsLint_
* _BetterDoctor API_


### License

**The MIT license**

Copyright (c) 2020 **Antonio Cruz**