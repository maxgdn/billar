import { Billable,ProjectItemInformation } from '.'; 

interface ProjectItem {
    title: string;
    time: string;
    createdOn: string;
    information: ProjectItemInformation;
    billable: Billable;
}

export default ProjectItem;