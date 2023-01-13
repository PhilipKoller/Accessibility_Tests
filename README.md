# Web Accessibility Testing Project
This project is designed to test the accessibility of a website using Selenium, a JavaScript-based testing framework, and the @axe-core/webdriverjs package. The project includes two test cases:

Ensure the main-nav (CSS selector) has been loaded, and
Perform an accessibility scan of the page
Prerequisites
A computer with an internet connection and a web browser
A code editor or integrated development environment (IDE)
Node.js and npm (Node Package Manager) installed on your computer
Selenium webdriver installed
A JavaScript testing framework of your choice (e.g. Mocha, Jest, etc.)
Chrome driver or any other browser driver installed on your computer.
An account on Github, Bitbucket, Gitlab or another hosted version control.
Installing
Clone the project from the repository.
Copy code
git clone https://github.com/<username>/web-accessibility-testing.git
Install the dependencies
Copy code
npm install
Start the tests
Copy code
npm test
Test Results
The results of the tests will be displayed in the console. The first test will check if the main-nav (CSS selector) has been loaded, and the second test will perform an accessibility scan of the page using the @axe-core/webdriverjs package. If any violations are found, they will be displayed in the console.

Note
If you encounter any issues with chromedriver version not matching with chrome browser version. you can install an earlier version of chromedriver using npm.
