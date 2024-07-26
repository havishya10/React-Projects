# Tenzies Game

Welcome to the Tenzies Game! This is a simple and engaging React application that simulates the classic dice game, Tenzies. The goal is to roll dice until all the dice show the same number. The app features a fun confetti animation when you win and interactive dice that can be held between rolls.

## Features

- **Roll Dice**: Roll all dice and try to get the same number on all dice.
- **Hold Dice**: Click on a die to freeze its value and prevent it from being re-rolled.
- **Confetti Animation**: Enjoy a celebratory confetti animation when you win the game.
- **New Game**: Start a new game by clicking the button once all dice have the same value.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **React-Confetti**: For the confetti animation when you win the game.
- **Nanoid**: A small, secure, URL-friendly, unique string ID generator.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) - You will need Node.js installed on your machine.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/havishya10/React-Projects.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd Tenzies_Game
    ```

3. **Install the dependencies**

    ```bash
    npm install
    ```

4. **Start the development server**

    ```bash
    npm start
    ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## How It Works

1. **Rolling Dice**: Clicking the "Roll" button will roll all dice that are not held. If all dice show the same number, the game is won and confetti will be displayed.
2. **Holding Dice**: Click on any die to toggle its held state. Held dice will not be re-rolled on subsequent rolls.
3. **Winning the Game**: The game checks if all dice have the same value and displays a "You Won" message along with confetti animation.

## File Structure

- `src/`
  - `components/`
    - `Die.jsx` - Displays a single die with a value and handles the click event to hold or release the die.
    - `Confetti.jsx` - Displays a confetti animation using the `react-confetti` library.
  - `App.jsx` - The main application component that manages game state and renders the game interface.
  - `App.css` - Contains the styles for the application.

## Key Components

- **App.jsx**: Manages the state of the dice, handles rolling and holding dice, and checks for winning conditions.
- **Die.jsx**: Represents a single die with its value and hold state.
- **Confetti.jsx**: Handles the confetti animation when the game is won.

## Usage

1. **Click the "Roll" button** to roll the dice.
2. **Click on individual dice** to hold or release them.
3. **Continue rolling** until all dice show the same number.
4. **Celebrate your win** with the confetti animation and click "New Game" to start over.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [React](https://reactjs.org/) for providing the framework.
- Thanks to [react-confetti](https://github.com/alampros/react-confetti) for the confetti animation.

---

Enjoy playing Tenzies! 🎲✨
