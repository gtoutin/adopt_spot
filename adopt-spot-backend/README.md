# Backend README

## How to get VS Code to see your libraries
When developing in VS Code, it doesn't know you have libraries like Flask because it defaults
to the Python interpreter on your computer, not the poetry one that has Flask.

To fix this, 
- open your terminal and make sure poetry is installed
- go to the same directory as this README
- enter `poetry shell`
- enter `which python` and copy the output
- hit cmd+shift+P and type Python interpreter
- click "Enter interpreter path" and paste
- ✨🐍✨