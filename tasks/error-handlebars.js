import notifier from 'node-notifier';

// Building the Handlebars error notification message
export default function (error) {
    let title = 'Error: ';
    let message = '';

    if (error.fileName) {
        title += error.fileName.slice(error.fileName.lastIndexOf('/'), error.fileName.length);
    }

    if (error.message) {
        message += error.message;
    }

    notifier.notify({ title: title, message: message, icon: 'brand/notification-failure.png' });
    this.emit('end');
};
