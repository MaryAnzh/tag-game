const shuffle = (array: []): void => {
    array.sort(() => Math.random() - 0.5);
}

export { shuffle };