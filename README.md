# eslint-config-eveoh

This package provides Eveoh's .eslintrc as an extensible shared config.

[![npm version](https://badge.fury.io/js/%40eveoh%2Feslint-config.svg)](https://badge.fury.io/js/%40eveoh%2Feslint-config)
[![Build Status](https://travis-ci.org/eveoh/eslint-config-eveoh.svg?branch=master)](https://travis-ci.org/eveoh/eslint-config-eveoh)
[![Dependency Status](https://david-dm.org/eveoh/eslint-config-eveoh.svg)](https://david-dm.org/eveoh/eslint-config-eveoh)
[![devDependency Status](https://david-dm.org/eveoh/eslint-config-eveoh/dev-status.svg)](https://david-dm.org/eveoh/eslint-config-eveoh#info=devDependencies)

## Usage

Requires `eslint`.

1. `npm install --save-dev eslint-config-eveoh eslint`
2. Add `"extends": "eveoh"` to your .eslintrc. Also extend `eslint:recommended` if you want to use the recommended 
rules. 

## Testing

Lint this module with itself using `npm test`.

## Releasing

1. Log in using `npm login`
2. Release package: `npm publish --access public`

