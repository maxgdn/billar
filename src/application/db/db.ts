import { createRxDatabase, addRxPlugin } from 'rxdb';

addRxPlugin(require('pouchdb-adapter-idb'));


let _getDatabase: any; // cached
const getDatabase = (name: string) => {
    if (!_getDatabase) _getDatabase = createDatabase(name);
    return _getDatabase;
}

const createDatabase = async (name: string) => {
    const db = await createRxDatabase({
        name: name,           // <- name
        adapter: 'idb',          // <- storage-adapter
        password: 'password',     // <- password (optional)
        multiInstance: true,         // <- multiInstance (optional, default: true)
        eventReduce: false // <- eventReduce (optional, default: true)
      });
}

export {getDatabase};