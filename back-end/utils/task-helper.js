const taskDocToObject = (doc) => {
    const id = doc._id;
    delete doc._id;
    delete doc.user;
    delete doc.__v;
    return Object.assign(doc, { id });
};

module.exports = {
    taskDocToObject
};