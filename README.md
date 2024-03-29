# Test-Automation-Amazon
This is test automation for the official [Amazon](https://www.amazon.com/).

I've created an automation framework that simplifies the process of adding products to a cart. I've used the webdriverio automation framework along with TypeScript as the programming language to ensure efficient implementation. Additionally, I've integrated cucumber, a testing framework that promotes Behavior-Driven Development principles, to ensure thorough testing and collaboration. 


## Challenges/Issues Faced in the Project:

- **Selector Strategy:**
In order to efficiently target elements, I adopted a combination of CSS selectors and XPath. CSS selectors were employed for straightforward element selections using classes, IDs, tag names, and hierarchy. This approach was chosen due to its simplicity and efficiency. However, for more intricate selections and cases where direct element properties fell short, XPath was utilized to address complex scenarios.

- **Object-Oriented Design:**
The project leveraged object-oriented programming principles, specifically Composition and Delegation. These concepts were employed to establish relationships between classes, facilitating code reuse and promoting modular design.

- **Configuration Management:**
A specific requirement in the project was to manage configuration data, including the Application URL, using property files. To fulfill this, I created three separate files for each environment (Development, QA, and Production) to store and load the respective base URLs. The .dotenv plugin was implemented to streamline the URL loading process.

- **Learning Curve and Timeline:**
As a newcomer to automation, the project presented challenges due to its complexity and timeline. Navigating through the project's intricacies within the given timeframe required dedicated effort. To overcome these challenges, I sought guidance from various learning resources, contributing to the completion of the project.


## Requirements:
- Supported Node Version: [v18.17.1](https://nodejs.org/en/download)
- Java Version: [20.0.2](https://www.java.com/download/ie_manual.jsp)
- NPM Version: [9.8.1](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Yarn Version: [1.22.19](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)


**Setup Steps:**
1. Clone this project to your local device.
2. Verify that your device meets the project requirements stated above.
3. Open the terminal from the directory where you cloned the project and execute the command `yarn install` to install the necessary packages.
4. After a successful Yarn installation, execute the command `yarn wdio-development` to initiate the automation.


## Test-Summary-Report

Please utilize the provided link to access the Screencast [Click here](https://drive.google.com/file/d/14AW-aiYBA7ttKfaoZsh3oWE_An4m3J29/view?pli=1).

![Test Summary Report-1](https://github.com/VihangiDeSilva/Test-Automation-Amazon/assets/41775025/2c0b2cf5-560d-43e9-924f-0c9877ba523e)

![Test Summary Report-2](https://github.com/VihangiDeSilva/Test-Automation-Amazon/assets/41775025/6cde59d0-7873-411a-bea2-e195df6af2c2)

![Test Summary Report-3](https://github.com/VihangiDeSilva/Test-Automation-Amazon/assets/41775025/42d5436d-99f0-48e5-acff-a89b68ec34ea)

![Test Summary Report-4](https://github.com/VihangiDeSilva/Test-Automation-Amazon/assets/41775025/e3170be4-0ac9-491f-a5a5-737bd6d7f467)
