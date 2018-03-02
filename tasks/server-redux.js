import remotedev from 'remotedev-server';

// This SERVERREDUX function:
// Starts the Redux server that lets you use all the Redux Dev Tools
export default function serverRedux(done) {
    remotedev({ hostname: 'localhost', port: 9001 });
    done();
}
