import { Client, UUID } from '../../domain';

import {
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';

type ClientDocMethods = {};

type ClientDocument = RxDocument<UUID<Client>, ClientDocMethods>;

type ClientCollectionMethods = {}

type ClientCollection = RxCollection<ClientDocument, ClientDocMethods, ClientCollectionMethods>;

const clientSchema: RxJsonSchema<UUID<Client>> = {
    title: 'project item schema',
    description: 'describes project item',
    version: 0,
    keyCompression: true,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true,
        },
        contact: {
            type: 'object',
        },
        defaultBillable: {
            type: 'string'
        },
        projects: {
            ref: 'projects',
            type: 'string',
        }
    },
};

const clientDocMethods: ClientDocMethods = {};

const clientCollectionMethods: ClientCollectionMethods = {};

const clientCollectionObj = {
    name: 'clients',
    schema: clientSchema,
    methods: clientDocMethods,
    statics: clientCollectionMethods
}

export {ClientCollection, clientCollectionObj};