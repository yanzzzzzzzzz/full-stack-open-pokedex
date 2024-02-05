# Exercise 11.1

* Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.
* What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!
* Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Ans:

In javascript , continue integration have following step:

1. Linting: use tool like ESLint to check coding style
2. Testing: unit test, integration test, end to end test, like Jest, Mocha, Jasmine, Cypress
3. Building: Webpack, Babel, Rollup, Parcel, Grunt, Gulp

Without Jenkins & GitHub Actions CI tools: TeamCity, CircleCI, Bamboo, GitLab

Self-hosting:

* High security
* Lower cost
* Small project scale

Cloud hosting:

* Lower infrastructure expertise required
* No need to maintain hardware
* Future scalability requirements

Considerations: Budget, team skills, scale, scalability requirements