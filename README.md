# Accessibility Tests

This project is a set of tests that checks the accessibility of the website https://dequeuniversity.com/demo/mars using the axe-webdriverjs integration and Selenium.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A computer with an internet connection and a web browser
- A code editor or integrated development environment (IDE)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your computer
- [Selenium webdriver](https://www.npmjs.com/package/selenium-webdriver) installed
- [Chrome driver](https://sites.google.com/chromium.org/driver/) installed on your computer

### Installing

1. Clone the repository to your local machine  
```git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```

2. Install the dependencies  
```npm install```

3. Run the tests  
```npm test```

## Tests
The project includes two test cases:

1. Ensure the main-nav (CSS selector) has been loaded: This test checks if the main-nav element, identified by its CSS selector, has been loaded on the page.
2. Perform an accessibility scan of the page: This test uses the @axe-core/webdriverjs package to perform an accessibility scan of the page and checks if there are any violations by asserting that the results.violations.length is equal to 0.
The test results will be displayed in the console.

## Built With
- Selenium webdriver - The web testing framework used
- Jest - The JavaScript testing framework used
- @axe-core/webdriverjs - The package used for performing accessibility scans

