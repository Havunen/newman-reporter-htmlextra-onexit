This is fork of newman-reporter-htmlextra-onexit and tries to always create report even if process is canceled

## [1.20.1] - 2021-01-27

### Fixed

- Styling issue when the `noSyntaxHighlighting` flag was used. 🏆 Credit to @stickpin 🏆

-----------------------------------------------------------------------

## [1.20.0] - 2021-01-26

### Fixed

- Added extra checks into the `isNotIn` helper to account for `null` key values. 🏆 Credit to @manoelagonzaga 🏆
- Typo fixed in the Global Varaible option for the template. 🏆 Credit to @sweetnoods 🏆

-----------------------------------------------------------------------
## [1.19.7] - 2021-01-04

### Fixed

- Updated dependencies
- Fixed issue that was preventing htmlextra from being used as a library 

-----------------------------------------------------------------------


### To debug tests

```
node --inspect-brk ./node_modules/mocha/bin/_mocha debug test/**/*.js
```
