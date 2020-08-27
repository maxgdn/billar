import {
    createRxDatabase,
    addRxPlugin,
    RxDatabase,
} from 'rxdb';

import {
    ProjectCollection,
    projectCollectionObj,
    ProjectItemCollection,
    projectItemCollectionObj,
    ClientCollection, 
    clientCollectionObj,
    SettingsCollection,
    settingsCollectionObj
} from './schemas';

/*
    https://json-schema.org/understanding-json-schema/reference/
*/

type MyDatabaseCollections = {
    projects: ProjectCollection
    projectItems: ProjectItemCollection
    clients: ClientCollection
    settings: SettingsCollection
}

addRxPlugin(require('pouchdb-adapter-idb'));

let _getDatabase: any; // cached
const getDatabase = async (name: string) => {
    if (!_getDatabase) _getDatabase = await createDatabase(name);
    return _getDatabase;
}

const close = async () => {
    let db = await getDatabase('test');
    db.destroy();
}

const createDatabase = async (name: string) => {
    try {
        const db = await createRxDatabase<MyDatabaseCollections>({
            name: 'test',           // <- name
            adapter: 'idb',          // <- storage-adapter
            password: 'password',     // <- password (optional)
            multiInstance: true,         // <- multiInstance (optional, default: true)
            eventReduce: false // <- eventReduce (optional, default: true)
          });
    
        await db.collection(projectCollectionObj);
        await db.collection(projectItemCollectionObj);
        await db.collection(clientCollectionObj);
        await db.collection(settingsCollectionObj);
        
        return db;

    } catch (error) {
        throw new Error(`Error in creating DB ${error}`);
    }
    
}

export {getDatabase};