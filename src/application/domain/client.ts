import { Contact, Billable, Project } from ".";

interface Client {
    contact: Contact;
    defaultBillable: Billable;
    projects: Project[];
}

export default Client;