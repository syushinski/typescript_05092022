# Exercise 2

1. Create new file named `calc.ts` and copy the contents of `cli.ts` into the.

2. Build a command line program which prompts the user for a command.

Five Commands:

- add : +
- subtract : -
- multiply : *
- divide : /
- clear - reset current result to 0

Prompt the user for the command and the operand.

- Enter a command: add 10

3. Display the result after each command.

- Result: <previous result + 10>

4. If the user types "exit" command, then exit the program

5. Using the data types and structures we have learned thus far, capture a history of the calculator commands: add, subtract, multiple, divide

For each history entry, store a unique integer id (do not use external modules, just write some code to generate an id), the name of the command, and the operand value typed in. Do not track the result on the history.

6. Add a new command to the calculator named "history". When the user runs the "history" command display a history of the commands.

7. Ensure it works!