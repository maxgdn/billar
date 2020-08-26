import { Project, UUID } from '../../domain';

import {
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';


type ProjectDocMethods = {};

type ProjectDocument = RxDocument<UUID<Project>, ProjectDocMethods>;

type ProjectCollectionMethods = {}

type ProjectCollection = RxCollection<ProjectDocument, ProjectDocMethods, ProjectCollectionMethods>;

const projectItemSchema: RxJsonSchema<UUID<Project>> = {
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
        name: {
            type: 'string',
        },
        startDate: {
            type: 'date'
        },
        endDate: {
            type: 'date'
        },
        lastModified: {
            type: 'date'
        },
        billable: {
            type: 'string'
        },
        items: {
            ref: 'project-items',
            type: 'string'
        }
    },
};

const projectDocMethods: ProjectDocMethods = {};

const projectCollectionMethods: ProjectCollectionMethods = {};

const projectCollectionObj = {
    name: 'projects',
    schema: projectItemSchema,
    methods: projectDocMethods,
    statics: projectCollectionMethods
}

export {ProjectCollection, projectCollectionObj};