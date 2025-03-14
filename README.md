# Zombie Drift Survivor

A top-down, roguelite vehicular combat game where players drive an armed car through a zombie-infested small town during a post-apocalyptic outbreak. Inspired by games like Brotato and Vampire Survivors, it blends fast-paced drifting and auto-firing weapons with a tight 15-minute survival run.

## Tech Stack

- **JavaScript**: Core programming language
- **Three.js**: 3D rendering
- **Matter.js**: 2D physics with 3D visuals
- **Tone.js**: Advanced audio management
- **Vite**: Modern frontend build tool

## Getting Started

### Prerequisites

- Node.js (v14+)
- NPM or Yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd zombie-drift-survivor
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser at http://localhost:5173

## Game Objective

Survive 15 minutes of escalating zombie waves in a small town. Your car is equipped with auto-firing weapons, and you'll earn upgrades as you eliminate zombies. The final minute features an intense wave that will test your skills.

## Controls

- WASD/Arrow Keys: Drive the car
- Spacebar: Drift
- Weapons fire automatically

## Features

- Fast-paced 15-minute gameplay loop
- Drifting mechanics for advanced maneuvers
- Auto-firing weapon system
- Upgrade system with various weapons and car improvements
- Escalating zombie waves with unique enemy types

## Development

The project follows a modular architecture with systems for:
- Rendering (Three.js)
- Physics (Matter.js)
- Audio (Tone.js)
- Entity Management
- Input Handling
- Game State Management
- Asset Loading

## License

This project is licensed under the MIT License - see the LICENSE file for details.