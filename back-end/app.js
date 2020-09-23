const express = require('express');
const { port } = require('./config');
const loaders = require('./loaders');

const startServer = async () => {
    const app = express();
    await loaders({ expressApp: app });

    app.listen(port, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server started on port ${port}`);
    });
};
startServer();