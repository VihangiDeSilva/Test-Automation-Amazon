export interface ContextManagerType {
    sharedData: Record<string, unknown>;
}

export default class ContextManager {
    sharedData: Record<string, unknown>;
    constructor() {
        this.sharedData = {};
    }
}
