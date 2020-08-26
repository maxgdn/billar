import { ProjectItem, UUID } from '../../domain';

import {
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';

type ProjectItemDocMethods = {};

type ProjectItemDocument = RxDocument<UUID<ProjectItem>, ProjectItemDocMethods>;

type ProjectItemCollectionMethods = {}

type ProjectItemCollection = RxCollection<ProjectItemDocument, ProjectItemDocMethods, ProjectItemCollectionMethods>;

const projectItemSchema: RxJsonSchema<UUID<ProjectItem>> = {
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
        title: {
            type: 'string',
        },
        time: {
            type: 'string'
        },
        createdOn: {
            type: 'string'
        },
        information: {
            type: 'object'
        },
        billable: {
            type: 'string'
        }
    },
};

const projectItemDocMethods: ProjectItemDocMethods = {};

const projectItemCollectionMethods: ProjectItemCollectionMethods = {};

const projectItemCollectionObj = {
    name: 'project_items',
    schema: projectItemSchema,
    methods: projectItemDocMethods,
    statics: projectItemCollectionMethods
}

export {ProjectItemCollection, projectItemCollectionObj};