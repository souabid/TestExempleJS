# TestProjectCucumber


```bash
npm install selenium-cucumber-js --save-dev
```

```bash
node ./node_modules/selenium-cucumber-js/index.js -s ./step-definitions
```
### Directory structure


```bash
.
├── features
│   └── reset-password.feature
    └── update-account.feature
    └── user-login.feature
    ├── step-definitions
│       └── reset-password-steps.js
│       └── update-account-steps.js
│       └── user-login-steps.js
├── page-objects
│   └── account-page.js
│   └── login-page.js
│   └── order-page.js
│   └── resetpassword-page.js
└── shared-objects
│   ├── test-data.js
└── reports
    ├── cucumber-report.json
    └── cucumber-report.html
    
    
