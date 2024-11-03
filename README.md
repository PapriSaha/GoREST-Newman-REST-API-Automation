## GoREST REST API Automation Testing with Postman and Newman

This project demonstrates automated API testing with Postman and generates reports using Newman for the GoREST API server. It includes a suite of tests designed to validate various API endpoints, covering CRUD operations and ensuring robust, accurate performance across user, post, comment, and todos functionalities.

## Project Scenario

1. **Users API**

- Creating a new user with valid and invalid data.
- Retrieving user lists and validating pagination.
- Updating and partially updating users.
- Handling requests with invalid or blank JSON payloads.

2. **Posts API**

- Creating posts for users and validating content fields.
- Retrieving posts with search filters like title and body.
- Updating and patching posts.
- Checking post retrieval with various pagination and search parameters.

3. **Comments API**

- Posting comments with various field checks.
- Retrieving comments by post ID and filtering with parameters.
- Updating and patching comments.

4. **Todos API**

- Creating todos for users with valid and invalid parameters.
- Retrieving todos and validating fields like title, due_on, and status.
- Updating and partially updating todos.

5. **Delete Operations**

- Deleting users, posts, and comments, and validating with both valid and invalid IDs.

## How to run this project

- clone this repository
- give this command
  - npm i
  - npm run report

## Pre-condition

- Node.js must be installed
- Newman
- Newman HTML Report Library

## Technology used

- Postman
- Newman

## API Documentation

- https://documenter.getpostman.com/view/25676466/2sAY4xB2kx

## Newman Report Summary

![Newman-Summary-Report](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Newman-Summary-Report.jpg)

![Total-Requests-1](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Total-Requests-1.jpg)

![Total-Requests-2](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Total-Requests-2.jpg)

![Total-Requests-3](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Total-Requests-3.jpg)

![Total-Requests-4](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Total-Requests-4.jpg)

![Total-Requests-5](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Total-Requests-5.jpg)

![Failed-Tests](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Failed-Tests.jpg)

![Skipped-Tests](https://github.com/PapriSaha/GoREST-Newman-REST-API-Automation/blob/master/assets/Skipped-Tests.jpg)

## License

This project is open-source and available under the MIT License.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests. Please ensure your contributions align with the project goals of comprehensive API validation.
