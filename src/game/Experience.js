/**
 * Main game experience class that integrates all components
 */
import Renderer from '../rendering/Renderer.js';
import PhysicsEngine from '../physics/PhysicsEngine.js';
import AudioManager from '../audio/AudioManager.js';
import EntityManager from '../entities/EntityManager.js';
import InputHandler from '../input/InputHandler.js';
import GameState from './GameState.js';
import AssetLoader from '../assets/AssetLoader.js';

export default class Experience {
    constructor(canvas) {
        // Store reference to canvas
        this.canvas = canvas;
        
        // Initialize core systems
        this.renderer = new Renderer(this.canvas);
        this.physics = new PhysicsEngine();
        this.audio = new AudioManager();
        this.entities = new EntityManager();
        this.input = new InputHandler();
        this.gameState = new GameState();
        this.assetLoader = new AssetLoader();
        
        // Animation frame reference
        this.animationFrameId = null;
        
        // Time tracking
        this.lastTime = 0;
        
        console.log('Game Experience initialized');
    }
    
    async init() {
        console.log('Initializing Game Experience');
        
        // Initialize all systems
        this.renderer.init();
        this.physics.init();
        this.audio.init();
        this.entities.init();
        this.input.init();
        this.gameState.init();
        this.assetLoader.init();
        
        // Load assets before starting
        await this.assetLoader.loadAssets();
        
        // Start game loop
        this.start();
        
        console.log('Game Experience fully initialized');
    }
    
    start() {
        console.log('Starting game loop');
        this.lastTime = performance.now();
        this.gameLoop(this.lastTime);
    }
    
    gameLoop(currentTime) {
        // Calculate delta time in seconds
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Update all systems
        this.input.update();
        this.physics.update(deltaTime);
        this.entities.update(deltaTime);
        this.gameState.update(deltaTime);
        
        // Render the scene
        this.renderer.render();
        
        // Continue the loop
        this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    stop() {
        console.log('Stopping game loop');
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}