export type Disciplines = "english" | "biology" | "physics" | "chemistry" | "history" | "informatics" | "literature" | "mathematics" | "social" | "russian" | "geography";
export type Exams = "егэ" | "огэ";

export interface DisciplineData {
    russianName: string;
}

export interface ITeacher {
    id: string;
    discipline: Disciplines;
    name: string;
    greeting: string;
    experience: number;
    advantages: string[];
    isExpert?: boolean;
    vk: string;
    youtube: string;
    telegram: string;
    photoMain: string;
    photoShort: string;
    totalStudents?: number;
    excellentStudents?: number;
    perfectStudents?: number;
    relatedDisciplines: Disciplines[];
}

export interface ISimpleObject {
    [key: string]: string;
}

export interface IFreeLessonFormObject {
    grade: string;
    name: string;
    phone: string;
    popd: boolean;
}

export interface IValidateSettings {
    [key: string]: {
        [key: string]: {
            message: string;
        };
    };
}