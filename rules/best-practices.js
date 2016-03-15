"use strict";

module.exports = {
  "rules": {
    // enforces return statements in callbacks of array"s methods
    "array-callback-return": 2,
    // treat var statements as if they were block scoped
    "block-scoped-var": 2,
    // require return statements to either always or never specify values
    "consistent-return": 2,
    // specify curly brace conventions for all control statements
    "curly": 2,
    // require default case in switch statements
    "default-case": 2,
    // encourages use of dot notation whenever possible
    "dot-notation": 2,
    // require the use of === and !==
    "eqeqeq": 2,
    // make sure for-in loops have an if statement
    "guard-for-in": 2,
    // disallow use of arguments.caller or arguments.callee
    "no-caller": 2,
    // disallow else after a return in an if
    "no-else-return": 2,
    // disallow use of eval()
    "no-eval": 2,
    // disallow unnecessary function binding
    "no-extra-bind": 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,
    // disallow use of eval()-like methods
    "no-implied-eval": 2,
    // disallow usage of __iterator__ property
    "no-iterator": 2,
    // disallow use of labels
    "no-labels": 2,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,
    // disallow creation of functions within loops
    "no-loop-func": 2,
    // disallow use of multiple spaces
    "no-multi-spaces": 2,
    // disallow reassignments of native objects
    "no-native-reassign": 2,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,
    // disallow use of new operator for Function object
    "no-new-func": 2,
    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": 2,
    // disallow use of octal escape sequences in string literals
    "no-octal-escape": 2,
    // disallow usage of __proto__ property
    "no-proto": 2,
    // disallow use of assignment in return statement
    "no-return-assign": 2,
    // disallow use of `javascript:` urls.
    "no-script-url": 2,
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": 2,
    // disallow use of comma operator
    "no-sequences": 2,
    // restrict what can be thrown as an exception
    "no-throw-literal": 2,
    // warn when usage of configurable warning terms in comments - e.g. TODO or FIXME
    "no-warning-comments": 1,
    // disallow use of the with statement
    "no-with": 2,
    // require use of the second argument for parseInt()
    "radix": 2,
    // disallow Yoda conditions
    "yoda": 2
  }
};