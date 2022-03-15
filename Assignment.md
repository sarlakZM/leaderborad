# Apsis RnD fullstack coding assignment

## Description
The use-case is a company-wide steps leaderboard application for teams of employees: picture that all employees are grouped into teams and issued step counters. This application needs to receive and store step count increments for each team, and calculate sums.

## User Stories
> As a User 
> I want to be able to create a new counter 
> So that steps can be accumulated for a team of one or multiple employees

>As a User
> I want to be able to increment the value of a stored counter
> So that I can get steps counted towards my team's score

> As a User 
> I want to get the current total steps taken by a team
> So that I can see how much that team have walked in total

> As a User 
> I want to list all teams and see their step counts 
> So that I can compare my team with the others


## Specifications Backend
Your app should be implemented as a REST API designed to be used by multiple clients in parallel. 

### User Stories
The API should expose methods that supports the User Stories described

### Condition of Satisfaction
- Make the API nice to use for a hypothetical client developer.
- The API should follow the RESTfull API principles. (https://restfulapi.net/)
- Counter states only have to be stored during the application lifetime, and can be forgotten on shutdown (you don’t need to implement persistent storage layer).
- Possible to build and run locally on a developers machine.
- Bonus points for nice Open API/Swagger specifications.

For **backend part** we ask you to use one of

- NodeJS with Typescript and (optional) Express 4
- Golang with plain net/http implemented in at least 2 modules
- Java with (optional) Jersey or equivalent framework
- .NET Core

## Specifications Frontend
Create an web application using the API backend. 

### User Stories
The main functionality based on the user stories described should be:

- List team view: List all teams. Click on a team to see team details
- List team view: Add new team
- Team detail view: List users in team and each users step counter value, with option to increment each counter.
- Team detail view: Add new user with a step counter

### Condition of Satisfaction
- Use a CSS preprocessor library of choice (SCSS)
- Unit testing with Jest and Jasmine or similar would be awesome
- Bonus points: use Redux state management
- Bonus points: use Reactive programming with RxJS

For **frontend part** we ask you to use:

- Angular8 with Typescript

## Last words and Bonus points

- Focus on showing craftsmanship and code quality over full functionality.
- Focus your time on areas you are the strongest in. Backend, Frontend or both.
- Keep the code clean with a structure that is object oriented and easy to read and to test.
- Don't forget unit tests.
- Feel free to use any package manager that fits you (nuget, npm, yarn, go...)
- Should be able to build and run on any developers computer.
- Bonus points for a good README.md (something you should want to read)

Good luck and have fun!
