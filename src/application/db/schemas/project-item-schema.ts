import { ProjectItem } from '../../domain';

import {
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';

type ProjectItemDocMethods = {};

type ProjectItemDocument = RxDocument<ProjectItem, ProjectItemDocMethods>;

type ProjectItemCollectionMethods = {}

type ProjectItemCollection = RxCollection<ProjectItemDocument, ProjectItemDocMethods, ProjectItemCollectionMethods>;

const projectItemSchema: RxJsonSchema<ProjectItem> = {
    title: 'project item schema',
    description: 'describes project item',
    version: 0,
    keyCompression: true,
    type: 'object',
    properties: {
        title: {
            type: 'string',
            primary: true
        },
        time: {
            type: 'time'
        },
        createdOn: {
            type: 'date'
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
    name: 'project-item',
    schema: projectItemSchema,
    methods: projectItemDocMethods,
    statics: projectItemCollectionMethods
}

export {ProjectItemCollection, projectItemCollectionObj};