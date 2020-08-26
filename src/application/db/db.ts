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
const getDatabase = (name: string) => {
    if (!_getDatabase) _getDatabase = createDatabase(name);
    return _getDatabase;
}

const createDatabase = async (name: string) => {
    const db = await createRxDatabase<MyDatabaseCollections>({
        name: name,           // <- name
        adapter: 'idb',          // <- storage-adapter
        password: 'password',     // <- password (optional)
        multiInstance: true,         // <- multiInstance (optional, default: true)
        eventReduce: false // <- eventReduce (optional, default: true)
      });

      await db.collection(projectCollectionObj);
      await db.collection(projectItemCollectionObj);
      await db.collection(clientCollectionObj);
      await db.collection(settingsCollectionObj);
}

export {getDatabase};