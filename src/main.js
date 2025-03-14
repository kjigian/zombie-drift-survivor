/**
 * Entry point for Zombie Drift Survivor
 */
import Experience from './game/Experience.js';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', async () => {
    // Check if browser supports WebGL
    const canvas = document.getElementById('gameCanvas');
    
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    
    try {
        // Create and initialize the main game experience
        const experience = new Experience(canvas);
        await experience.init();
        
        console.log('Zombie Drift Survivor started successfully!');
        
        // Handle window resize events
        window.addEventListener('resize', () => {
            if (experience.renderer) {
                experience.renderer.resize();
            }
        });
        
    } catch (error) {
        console.error('Failed to initialize the game:', error);
        document.body.innerHTML = `
            <div style="color: white; text-align: center; margin-top: 50px;">
                <h1>Error Starting Game</h1>
                <p>Sorry, there was an error starting the game. Please try a different browser or device.</p>
                <p>Error details: ${error.message}</p>
            </div>
        `;
    }
});