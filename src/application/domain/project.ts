import { Billable, ProjectItem } from '.';

interface Project {
    name: string;
    startDate: Date;
    endDate: Date;
    lastModified: Date;
    billable: Billable;
    items: ProjectItem[];
}

export default Project;