# Workflow CA

[![Automated Unit Testing](https://github.com/haris867/social-media-client/actions/workflows/e2e.yml/badge.svg)](https://github.com/haris867/social-media-client/actions/workflows/e2e.yml)
[![Automated E2E Testing](https://github.com/haris867/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/haris867/social-media-client/actions/workflows/e2e-testing.yml)
[![Deploy static content to Pages](https://github.com/haris867/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/haris867/social-media-client/actions/workflows/pages.yml)

## Installation

Clone the repo and open in your IDE.

Initialize git

```
git init
```

Install dependencies

```
npm i
```

Build SASS

```
npm run build
```

## Testing

### Unit tests - JEST

The following features are automatically tested with unit tests:

- The login function returns a valid token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function creates a new item on the API

### End To End tests - Cypress

The following features are automatically tested with end-to-end tests:

- The login form validates user inputs correctly based on API restrictions
- The create item form validates user inputs correctly based on API restrictions
- The logout button logs the user out when clicked
