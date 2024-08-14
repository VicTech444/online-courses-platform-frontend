export interface FormInputProps {
    labelText: string
    nameID: string
    type: string
    placeholder: string
    kind: "input" | "textarea"
    rows?: number;
    minLength: number;
    gridSpace: string;
}

export interface CoursesProps {
    courses: Course[];
}
export interface CourseProps {
    courses: Course;
}

interface Course {
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    instructorId: string;
    lessons: string[];
    order: number;
    courseName: string;
}

export interface LessonsProps {
    courses: Lessons[]
}
interface Lessons {
    _id: string;
    courseId: string;
    title: string;
    content: string;
    order: number;
}