import { Billable,ProjectItemInformation } from '.'; 

interface ProjectItem {
    title: string;
    time: Date;
    createdOn: Date;
    information: ProjectItemInformation;
    billable: Billable;
}

export default ProjectItem;