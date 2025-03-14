/**
 * Manages all game entities and their lifecycle
 */
export default class EntityManager {
    constructor() {
        this.entities = [];
        console.log('EntityManager initialized');
    }

    init() {
        // Will be implemented in Step 10
        console.log('EntityManager init called');
    }

    update(delta) {
        // Will be implemented in Step 10
        // console.log('Entities update');
    }

    addEntity(entity) {
        // Will be implemented in Step 10
        console.log('Entity added');
    }

    removeEntity(entity) {
        // Will be implemented in Step 10
        console.log('Entity removed');
    }
}