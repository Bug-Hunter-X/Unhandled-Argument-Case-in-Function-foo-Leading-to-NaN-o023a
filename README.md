# JavaScript Unhandled Argument Bug

This repository demonstrates a common JavaScript bug related to unhandled argument cases in functions.  The `foo` function is designed to add two numbers, but it doesn't explicitly check for the number of arguments, resulting in unexpected `NaN` outputs when only one argument is passed.

The solution demonstrates how to handle such cases gracefully using optional parameters or argument validation.

## Bug Report

The `bug.js` file contains the buggy function.  Calling the function with one argument returns `NaN` because of implicit type coercion of undefined to Number which results in NaN. This is problematic since the expected behavior is likely either an error or a default value.

## Solution

The `bugSolution.js` file shows a corrected version of the function, handling the case where an argument is missing.