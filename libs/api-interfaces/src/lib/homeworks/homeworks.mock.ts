import { IHomework } from './homework.interface';

export const homeworksMock: IHomework[] = [
    {
        id: "1",
        teacherId: "1",
        studentId: "2",
        description: "Play Get Lucky at 116 BPM",
        appointmentDate: new Date("2020-05-05T09:54:33Z")
    },
    {
        id: "2",
        teacherId: "1",
        studentId: "2",
        description: "Groove meters 1 and 2 at 80 BPM",
        appointmentDate: new Date("2020-05-10T09:54:33Z")
    },
    {
        id: "3",
        teacherId: "1",
        studentId: "2",
        description: "Major scales 8 degrees up and down the neck",
        appointmentDate: new Date("2020-05-15T09:54:33Z")
    }
];