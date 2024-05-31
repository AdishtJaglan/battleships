# Battleship Game

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [SOLID Principles](#SOLID-principles)
- [Contributing](#Contributing)

## Overview

Battleship is a classic strategy game where players take turns attacking each other's fleets. This project implements a digital version of the game using Webpack, JavaScript, HTML, and CSS, allowing a player to compete against a computer opponent.

## Features

- Place ships on a 10x10 grid either vertically or horizontally.
- Take turns attacking the opponent's grid.
- The game ends when all of one player's ships are sunk.
- A modal displays the winner when the game ends.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Jest (for testing)
- Webpack (for bundling)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdishtJaglan/battleships.git
   cd battleships
   ```

2. Install dependencies

   ```bash
       npm install
   ```

3. Run it locally

   ```bash
       npm run start
   ```

## Usage

To start the game, run npm run start in your terminal. The player can place their ships on the board and then start attacking the opponent's board by clicking on the cells.

Player's Actions:

- Place Ships: Click randomize button for random ship placement.
- Attack: Click on the opponent's grid to attack.

The game alternates turns between the player and the computer, continuing until one side's ships are all sunk.

## SOLID-Principles

This project follows SOLID principles to ensure the code is clean, maintainable, and scalable.

- Single Responsibility Principle (SRP): Each class in the project has a single responsibility. For instance, the Cell class handles cell-specific logic, the Ship class manages ship-specific behavior, and the Gameboard class is responsible for the game board logic.
- Open/Closed Principle (OCP): The classes are open for extension but closed for modification. For example, the Player class can be extended to add new types of players without altering the existing implementation.
- Liskov Substitution Principle (LSP): Subtypes in the project can replace their base types without affecting the correctness of the program. The Player class adheres to this principle, allowing for human and computer players to be used interchangeably.
- Interface Segregation Principle (ISP): The project avoids using large, unwieldy interfaces. Instead, it uses specific methods and properties appropriate for each class, ensuring that no class is forced to implement methods it does not use.
- Dependency Inversion Principle (DIP): The project depends on abstractions rather than concrete implementations. For example, the Player class interacts with the Gameboard class through well-defined methods, rather than directly manipulating the game board's internal state.

## Contributing

Contributions are welcome!
