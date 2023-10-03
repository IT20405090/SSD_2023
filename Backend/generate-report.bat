@echo off

rem Run npm audit and output the JSON report
npm audit --json > audit-report.json

rem Extract vulnerability names and create a JSON file with just the names
type audit-report.json | jq -r ".metadata.vulnerabilities[].title" > vulnerabilities.json

rem Generate the HTML report using npm-audit-html
npm-audit-html -o audit-report.html < vulnerabilities.json

rem Clean up temporary JSON files
del audit-report.json vulnerabilities.json
