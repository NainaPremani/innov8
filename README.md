# AI-Powered Interview Stimulator (Innov8)

The AI-Powered Interview Stimulator is a web application that utilizes artificial intelligence to simulate interview scenarios. This project aims to provide users with a platform to practice and enhance their interview skills by generating interview questions, providing ratings, and offering feedback based on their responses.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

1. User Authentication:
   - Users can create an account and log in securely to the application.
   - Passwords are hashed and stored securely to ensure data protection.

2. Topic Selection:
   - Upon logging in, users can select the desired interview topic from a list of available options.
   - The application provides a diverse range of topics to cover various interview scenarios.

3. Question Generation:
   - The AI-powered web application generates interview questions based on the selected topic.
   - The questions are designed to simulate real interview situations and cover different aspects of the chosen topic.

4. Answer Submission:
   - Users can provide their responses to the generated interview questions.
   - Answers can be submitted via a text input field or through voice recognition, enabling a more interactive experience.

5. Rating and Feedback:
   - The AI system evaluates user responses and provides an objective rating based on predefined criteria.
   - Constructive feedback is given to help users identify areas for improvement in their interview skills.

6. Progress Tracking:
   - Users can view their progress over time, including their performance ratings and feedback history.
   - The application records and displays previous interview sessions to enable continuous improvement.

7. Personalization:
   - The system adapts to each user's performance and tailors subsequent questions and feedback accordingly.
   - Personalized recommendations and tips are provided to enhance the learning experience.

8. Dashboard Analytics:
   - The application offers visual analytics, including charts and graphs, to illustrate the user's performance and progress.
   - Users can gain insights into their strengths and weaknesses in specific interview topics.

## Installation

To run the AI-Powered Interview Stimulator locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/ai-interview-stimulator.git
   ```

2. Navigate to the project directory:

   ```
   cd ai-interview-stimulator
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:
   - Rename the `.env.example` file to `.env`.
   - Replace the placeholder values in the `.env` file with your own configuration, such as the database connection details and API keys.

5. Start the application:

   ```
   npm start
   ```

6. Access the application by visiting `http://localhost:5000` in your web browser for backend and for Frontend  `http://localhost:5173` .

## Usage

1. Create an account or log in to the AI-Powered Interview Stimulator.
2. Select a topic for the interview from the available options.
3. Read the generated interview question and think about your response.
4. Provide your answer in the text input field or use the voice recognition feature to dictate your response.
5. Submit your answer and wait for the AI system to evaluate it.
6. Receive a rating and feedback on your performance.
7. Track your progress, view analytics, and continue practicing with different topics.

## Technologies Used

The AI-Powered Interview Stimulator project leverages the following technologies:

- Backend:
  - Node.js
  - Express.js
  - MongoDB (or any other preferred database)
  - SQL database
- Frontend:
  - HTML5
  - Tailwind Css


  - JavaScript (ES6+)
  - React.js
- AI and NLP:
  - OpenAI GPT-3 or similar language model
  - Speech recognition APIs (optional, for voice input)
- Authentication and Security:
  - JSON Web Tokens (JWT)
  - bcrypt (password hashing)

## Contributing

Contributions to the AI-Powered Interview Stimulator project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository. If you'd like to contribute code, you can fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it as per the license terms.
