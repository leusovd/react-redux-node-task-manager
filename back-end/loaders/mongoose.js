const mongoose = require("mongoose");
const { db } = require("../config");
const { Role } = require("../models");

module.exports = () => {
    mongoose
        .connect(db.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Successfully connected to MongoDB");
            initRoles();
        })
        .catch((error) => {
            console.log("MongoDB connection error " + error);
            process.exit(1);
        });
};

const initRoles = () => {
    Role.estimatedDocumentCount((err, count) => {
        if (!err) {
            db.roles.forEach(async (roleName) => {
                const exists = await Role.findOne({ name: roleName });

                if (!exists) {
                    new Role({ name: roleName }).save((err) => {
                        if (err) {
                            console.log(`Role model "${roleName}" save error: ` + err);
                        } else {
                            console.log(`Added "${roleName}" to roles collection.`);
                        }
                    });
                }
            });
        }
    });
};
