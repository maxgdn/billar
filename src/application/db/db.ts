import {
    createRxDatabase,
    addRxPlugin,
    RxDatabase,
} from 'rxdb';

import {
    ProjectItemCollection,
    projectItemCollectionObj
} from './schemas';

/*
String values MUST be one of the six primitive types:
 ("null", "boolean", "object", "array", "number", or "string"), 
 or "integer" which matches any number with a zero fractional part.
*/

type MyDatabaseCollections = {
    projectItems: ProjectItemCollection
}

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

      await db.collection(projectItemCollectionObj);
}

export {getDatabase};