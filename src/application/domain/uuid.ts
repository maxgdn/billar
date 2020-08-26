interface ID {
    id: string;
}

type UUID<T> = (T & ID);

export { UUID, ID };