import { IMember } from './member.interface';

export const membersMock: IMember[] = [
    {
        id: "1",
        name: "Nicolas",
        email: "nicolas@mock.com",
        isTeacher: true
    },
    {
        id: "2",
        name: "Axel",
        email: "axel@mock.com",
        teacherIds: ["1"]
    }
];