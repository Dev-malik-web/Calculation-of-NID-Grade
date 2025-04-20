# Grade Calculator

This is a simple web-based Grade Calculator that allows users to input their score (0-100) and receive a grade along with a descriptive message.

## Features

- **Dynamic Grade Calculation**: Enter a score, and the application will display the corresponding grade and feedback.
- **Responsive Design**: The application is styled to look good on various screen sizes.
- **Animated Background**: The background color changes dynamically using CSS animations.

## File Structure

### File Descriptions

- **index.html**: The main HTML file containing the structure of the application.
- **style.css**: The CSS file for styling the application, including animations and responsive design.
- **script.js**: The JavaScript file containing the logic for calculating grades.
- **.vscode/settings.json**: Configuration for the Live Server extension in Visual Studio Code.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## How to Use

1. Open the `index.html` file in a browser.
2. Enter a score (0-100) in the input field.
3. Click the "Check" button to see the grade and feedback displayed below.

## Grade Scale

| Score Range | Grade | Feedback                |
|-------------|-------|-------------------------|
| 75-100      | A+    | Excellent 😍😍😍       |
| 70-74       | A     | Very Good 😍😍😍       |
| 60-69       | B     | Good 😍😍😍            |
| 50-59       | C     | Work Adder 😍😍😍      |
| 40-49       | D     | Poor                   |
| 0-39        | F     | Fail 😭😭😭            |

## Known Issues

- The grade range for "C" is duplicated (50-59 and 50-54). This should be corrected to avoid ambiguity.
- The function name `CalculatieGrade` contains a typo and should be renamed to `CalculateGrade`.

## Development

To run the project locally with Live Server:

1. Open the project in Visual Studio Code.
2. Install the Live Server extension if not already installed.
3. Start the server by right-clicking `index.html` and selecting "Open with Live Server".

## License

This project is open-source and available for personal or educational use.
