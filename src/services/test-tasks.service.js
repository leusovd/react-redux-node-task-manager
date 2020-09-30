let newItemId = 0;

const createTodoItem = (text) => {
    return { label: text, important: false, done: false, id: newItemId++ };
};

let todoData = [
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch')
];

const getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject('Something bad happened');
            } else {
                resolve(todoData);
            }
        }, 700);
    });
};

const patch = (id, data) => {
    return new Promise((resolve, reject) => {
        const index = todoData.findIndex(todoItem => todoItem.id === id);

        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject('Something bad happened');
            } else if (index < 0) {
                reject('Not Found');
            } else {
                const patchedItem = Object.assign({}, {...todoData[index]}, {...data});
                todoData = [
                    ...todoData.slice(0, index),
                    patchedItem,
                    ...todoData.slice(index + 1)
                ];
                resolve(patchedItem);
            }
        }, 700);
    });
};

const deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        const index = todoData.findIndex(todoItem => todoItem.id === id);

        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject('Something bad happened');
            } else if (index < 0) {
                reject('Not Found');
            } else {
                const deletedItem = todoData[index];

                todoData = [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ];

                resolve(deletedItem);
            }
        }, 700);
    });
};

const post = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject('Something bad happened');
            } else {
                const newItem = createTodoItem(text);

                todoData = [...todoData, newItem];

                resolve(newItem);
            }
        }, 700);
    });
}

export {
    getAll,
    patch,
    deleteOne,
    post
};