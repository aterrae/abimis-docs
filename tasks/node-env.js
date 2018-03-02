// This NODEDEVENV function:
// Sets NODE_ENV = 'development'
export function nodeDevEnv(done) {
    process.env.NODE_ENV = 'development';
    done();
}

// This NODEDISTENV function:
// Sets NODE_ENV = 'production'
export function nodeDistEnv(done) {
    process.env.NODE_ENV = 'production';
    done();
}
