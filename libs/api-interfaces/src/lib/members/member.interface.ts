import { IHomework } from '../homeworks/homework.interface';

export interface IMember {
    id: string;
    name: string;
    email: string;
    isTeacher?: boolean;
    teacherIds?: string[];
    teachers?: IMember[];
    students?: IMember[];
    homeworks?: IHomework[];
}