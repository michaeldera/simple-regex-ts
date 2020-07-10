# Simple Regex
[![npm version](https://badge.fury.io/js/simple-regex.svg)](https://badge.fury.io/js/simple-regex)
A simple package with common regex pattens for Zimbabwe

## Links
[Simple Regex Documentation](https://simple-regex.netlify.com/)

[Github Repository](https://github.com/michaeldera/simple-regex)

[NPM Package](https://www.npmjs.com/package/simple-regex)

## Installation 
For npm users `npm i simple-regex`
For yarn users `yarn add simple-regex`

## Usage
To test a variable against a Regex expression: 

`SimpleRegex.MobileNumber.Econet.test(<your-variable>)`. This will return a `boolean` which indicates whether your variable matches the Regex Pattern.

You can also inject the Regex Pattern into HTML form fields. An example of this pattern in ReactJS 
`<input type="text" name="number_plate" pattern={SimpleRegex.NumberPlate} title="Zimbabwean Number Plate">`

### Global Flag
Starting from version 2.0.0-alpha the package no longer has the global flag set by default. See [an issue about it here](https://github.com/michaeldera/simple-regex-ts/issues/8) 

### Available Patterns

`SimpleRegex.MobileNumber.Econet` Pattern for Econet Mobile Numbers

`SimpleRegex.MobileNumber.Telecel` Pattern for Telecel Mobile Numbers

`SimpleRegex.MobileNumber.Netone` Pattern for Netone Mobile Numbers

`SimpleRegex.NumberPlate` Pattern for Zimbabwean National Vehicle Registration Numbers

`SimpleRegex.PassportNumber` Pattern for Zimbabwean Passport Numbers

`SimpleRegex.NationalId` Pattern for Zimbabwean National Identification Numbers 

`SimpleRegex.EmailAddress` Pattern for Email Addresses

`SimpleRegex.DriversLicence` Pattern for Zimbabwean Driver's Licences

`SimpleRegex.SSN` Pattern for Zimbabwean Social Security Number (NSSA)