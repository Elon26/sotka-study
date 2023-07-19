import { DisciplineData, Disciplines } from "@/data/models";

export function getDisciplineData(discipline: Disciplines): DisciplineData {
    switch (discipline) {
        case "english":
            return {
                russianName: "английский язык"
            };

        case "biology":
            return {
                russianName: "биология"
            };

        case "physics":
            return {
                russianName: "физика"
            };

        case "chemistry":
            return {
                russianName: "химия"
            };

        case "history":
            return {
                russianName: "история"
            };

        case "informatics":
            return {
                russianName: "информатика"
            };

        case "literature":
            return {
                russianName: "литература"
            };

        case "mathematics":
            return {
                russianName: "математика"
            };

        case "social":
            return {
                russianName: "обществознание"
            };

        case "russian":
            return {
                russianName: "русский язык"
            };

        case "geography":
            return {
                russianName: "география"
            };

        default:
            return {
                russianName: "география"
            };;
    }
}
