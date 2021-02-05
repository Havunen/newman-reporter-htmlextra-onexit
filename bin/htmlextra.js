#!/usr/bin/env node
/* eslint-disable max-len */
let { Command } = require('commander'),
    program = new Command(),
    version = require('../package.json').version;

program
    .option('--reporter-export', 'Specify a export location for the report')
    .option('--reporter-template', 'Specify a custom template path for the reporter to use')
    .option('--reporter-logs', 'Displays the console log statements on the final report.')
    .option('--reporter-testPaging', 'Adds pagination to the tests in the request view')
    .option('--reporter-browserTitle', 'Specify the name of the title in the browser tab')
    .option('--reporter-title', 'Specify the name of the main report title on the Summary tab')
    .option('--reporter-titleSize', 'Specify the size of the main report title')
    .option('--reporter-omitHeaders', 'Excludes all `Headers` from the final report')
    .option('--reporter-skipHeaders', 'Exclude certain `Headers` from the final report')
    .option('--reporter-hideRequestBody', 'Exclude certain `Request Bodies` from the final report')
    .option('--reporter-hideResponseBody', 'Exclude certain `Response Bodies` from the final report')
    .option('--reporter-showEnvironmentData', 'Displays all the `Environment` variables used during the run')
    .option('--reporter-skipEnvironmentVars', 'Exclude certain `Environment` variables from the final report')
    .option('--reporter-showGlobalData', 'Displays all the `Global` variables used during the run')
    .option('--reporter-skipGlobalVars', 'Exclude certain `Global` variables from the final report')
    .option('--reporter-skipSensitiveData', 'Excludes all `Request/Response Headers` and `Request/Response bodies`')
    .option('--reporter-showMarkdownLinks', 'Renders Markdown links from the test names and `pm.expect()` statements')
    .option('--reporter-showFolderDescription', 'Displays all the folder descriptions in the final report')
    .option('--reporter-timezone', 'Specify the timezone for the final report');

program
    .addHelpCommand(false)
    .usage('newman run [collection file | link] -r htmlextra-onexit [option]')
    .version(version, '-v, --version', 'HTMLEXTRA version');

if (process.argv.length < 3) {
    program.help();
}
(Number(process.version[1]) >= 6) && [process.stdout, process.stderr].forEach((s) => {
    s && s.isTTY && s._handle && s._handle.setBlocking && s._handle.setBlocking(true);
});
program.parse(process.argv);
