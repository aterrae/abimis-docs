import notifier from 'node-notifier';

// Building the error notification
export default function (error) {
    let title = 'Error: ';
    let message = '';
    let icon = 'brand/notification-failure.png';

    if (error.fileName) {
        title += error.fileName.slice(error.fileName.lastIndexOf('/'), error.fileName.length);
    } else if (error.relativePath) {
        title += error.relativePath;
    } else {
        title += 'general';
    }

    if (error.message && error.fileName) {
        message += error.message.includes(error.fileName) ? error.message.slice(error.fileName.length + 2, error.message.length) : error.message;
    } else if (error.line && error.messageOriginal) {
        message += 'On Line: ' + error.line + ', ' + error.messageOriginal;
    } else {
        message += error.message;
    }

    notifier.notify({ title: title, message: message, icon: icon });
}
