# QA Engineer Test

- This framework is about Frontend and API Automation Testing and it supports Page Object Model design pattern
- I can use Selenium and Cypress automation tools. In this task I prefer Cypress because it is so easy and fast to set up and it runs tests faster than other automation tools.
- Tools: Cypress 10.11.0 version, Mocha Framework, JavaScript, Mochawesome Reporter, Chai library for assertions
- Scripts of execution:
    - For Frontend Test execution : npm run runUI
    - For API Tests execution : npm run runAPI
    - For both API and Frontend Tests execution : npm run runAllTests
    - For execution with test runner : npx cypress open
- Framework generates mochawesome reporter


## Folder Structure

    ├── ...
    │
    |
    ├──── POM                       # Interaction methods and locators for each web page
    |    ├── ResultPage.js          # Methods and locators of ResultPage
    |    |── Searchage.js           # Methods and locators of SearchPage
    |
    |
    |──── TESTS                     # Test suites
    │    ├──Task1_TestCharter.txt   # Exploratory Test Charters
    │    ├──Task2_FrontendTests.js  # Automated test scripts for frontend testing
    │    ├──Task3_ApiTests.js       # Automated test scripts for api testing
    |    
    |  
    |
    ├──── mochawesome-report        # Test Report for the tests executed
    |     ├── mochawesome.html      # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows


## Test cases for Frontend Tests
* In these 2 tests, I tested one funcionality of Advance Search functions and one functionality of Search In functions
   
   ### Test1
   - Given I go to "https://en.wikipedia.org/w/index.php?search" url
   - When I click Advance Search dropdown menu
   - And I type "Cosmos" into Page title contains input
   - And I click Search button
   - Then I verify titles contain "Cosmos" in the result page

   ### Test2
   - Given I go to "https://en.wikipedia.org/w/index.php?search" url
   - When I click Search in dropdown menu
   - And I check the "All" checkbox
   - Then I verfiy all checkboxes are checked in the add namespaces dropdown menu

## Test cases for API Tests
* In the API test cases, I implemented CRUD (create-read-update-delete) operations

   ### Test1
   - Given I create a new pet with this information {petId:125, categoryID:5, categoryName:Dogs, petName:Rocky, status:avaliable}
   - Then I verify ths status code is 200
   - And I verify the information from request body is the same information from the response body

   ### Test2
   - Given I call the GET request for the created pet
   - Then I verify ths status code is 200
   - And I verify the information is true in the response body

   ### Test3
   - Given I call the PUT request to update the created pet
   - Then I verify ths status code is 200
   - And I verify the updated information is true in the response body

   ### Test4
   - Given I call the DELETE request to delete the created pet
   - Then I verify ths status code is 200
   
   ### Test5
   - Given I call the GET request to get the deleted pet
   - Then I verify ths status code is 404
   - And I verify the error message is seen in the response body
