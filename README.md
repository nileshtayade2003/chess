# Real-Time Multiplayer Chess Game

A real-time multiplayer chess game built using Node.js, Express, Socket.io, and EJS. Players can connect and play chess in real-time, with automatic pairing for new players.

## Live Demo

Check out the live version of the game: [Chess Game](https://chess-c2kn.onrender.com)

## Features

- **Real-Time Multiplayer:** Connects two players automatically. If a third player joins, they will be placed in a queue until another player joins.
- **Chess Game Engine:** The game engine handles all standard chess rules and moves.
- **Responsive UI:** A user-friendly and responsive chessboard interface.

## Technologies Used

- **Node.js:** Backend server handling player connections and game logic.
- **Express:** Web framework used for server routing.
- **Socket.io:** Real-time communication between players.
- **EJS:** Template engine used for rendering the frontend.
- **Render:** Deployed using render.com for easy access and scalability.

## How to Play

1. **Visit the Game:** Open [Chess Game](https://chess-c2kn.onrender.com) in your browser.
2. **Automatic Pairing:** The first player to open the site will see the chessboard. When a second player opens the site, they will automatically connect to the first player.
3. **Waiting Queue:** If a third player opens the site, they will be placed in a queue until another player joins.
4. **Play Chess:** Enjoy the game and test your skills against another real-time opponent.

## Installation (Local Development)

To run the project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/chess-game.git
    cd chess-game
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the server:**
    ```bash
    npm start
    ```

4. **Visit the game locally:**
    Open your browser and go to `http://localhost:3000`


