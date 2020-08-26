import { Settings, UUID } from '../../domain';

import {
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';


type SettingsDocMethods = {};

type SettingsDocument = RxDocument<UUID<Settings>, SettingsDocMethods>;

type SettingsCollectionMethods = {}

type SettingsCollection = RxCollection<SettingsDocument, SettingsDocMethods, SettingsCollectionMethods>;

const projectItemSchema: RxJsonSchema<UUID<Settings>> = {
    title: 'project schema',
    description: 'describes project',
    version: 0,
    keyCompression: true,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true,
        },
        contractorIcon: {
            type: 'string',
        },
        contact: {
            type: 'object'
        },
        notifications: {
            type: 'boolean'
        }
    },
};

const settingsDocMethods: SettingsDocMethods = {};

const settingsCollectionMethods: SettingsCollectionMethods = {};

const settingsCollectionObj = {
    name: 'settings',
    schema: projectItemSchema,
    methods: settingsDocMethods,
    statics: settingsCollectionMethods
}

export {SettingsCollection, settingsCollectionObj, SettingsDocument};