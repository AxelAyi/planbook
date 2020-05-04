export interface IHomework {
    id: string;
    teacherId: string;
    studentId: string;
    description: string;
    appointmentDate?: Date;
}