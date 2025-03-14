/**
 * Manages game state and transitions between states
 */
export default class GameState {
    constructor() {
        this.states = {
            MENU: 'menu',
            PLAYING: 'playing',
            PAUSED: 'paused',
            GAME_OVER: 'gameOver'
        };
        this.currentState = this.states.MENU;
        console.log('GameState initialized');
    }

    init() {
        // Will be implemented in Step 6
        console.log('GameState init called');
    }

    update() {
        // Will be implemented in Step 6
        // console.log('GameState update');
    }

    changeState(newState) {
        // Will be implemented in Step 6
        console.log(`State changed from ${this.currentState} to ${newState}`);
        this.currentState = newState;
    }
}