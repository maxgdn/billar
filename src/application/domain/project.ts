import { Billable, ProjectItem } from '.';

interface Project {
    name: string;
    startDate: number;
    endDate: number;
    lastModified: number;
    billable: Billable;
    items: ProjectItem[];
}

export default Project;