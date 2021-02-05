This is fork of newman-reporter-htmlextra-onexit and tries to always create report even if process is canceled

## [1.1.0] - 2021-02-05

Merged latest changes from newman-reporter-htmlextra
Radical simplifications to template to support large reports
Fixed flickering theme at the open
Fixed repeating inline javascript
Removed repeating ID's
Moved pretty printing to generation side
Fixed bad contrast in some fields in dark theme
Added content length check to not print too large data into the report

### To debug tests

```
node --inspect-brk ./node_modules/mocha/bin/_mocha debug test/**/*.js
```
