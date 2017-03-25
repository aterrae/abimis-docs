import notifier from 'node-notifier';

// Building the SASS error notification message
export default function (error) {
    let title = 'Error: ';
    let message = '';

    if (error.relativePath){
        title += error.relativePath;
    }

    if (error.line && error.messageOriginal) {
        message += 'On Line: ' + error.line + ', ' + error.messageOriginal;
    }

    notifier.notify({ title: title, message: message, icon: 'brand/notification-failure.png' });
};
