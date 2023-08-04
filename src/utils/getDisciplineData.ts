import { DisciplineData, Disciplines } from "@/data/models";
import { englishLogo, biologyLogo, physicsLogo, chemistryLogo, historyLogo, informaticsLogo, literatureLogo, mathematicsLogo, socialLogo, russianLogo, geographyLogo } from "../data/icons";

export function getDisciplineData(discipline: Disciplines): DisciplineData {
    switch (discipline) {
        case "english":
            return {
                russianName: "английский язык",
                declination: "английскому языку",
                logo: englishLogo
            };

        case "biology":
            return {
                russianName: "биология",
                declination: "биологии",
                logo: biologyLogo
            };

        case "physics":
            return {
                russianName: "физика",
                declination: "физике",
                logo: physicsLogo
            };

        case "chemistry":
            return {
                russianName: "химия",
                declination: "химии",
                logo: chemistryLogo
            };

        case "history":
            return {
                russianName: "история",
                declination: "истории",
                logo: historyLogo
            };

        case "informatics":
            return {
                russianName: "информатика",
                declination: "информатике",
                logo: informaticsLogo
            };

        case "literature":
            return {
                russianName: "литература",
                declination: "литературе",
                logo: literatureLogo
            };

        case "mathematics":
            return {
                russianName: "математика",
                declination: "математике",
                logo: mathematicsLogo
            };

        case "social":
            return {
                russianName: "обществознание",
                declination: "обществознанию",
                logo: socialLogo
            };

        case "russian":
            return {
                russianName: "русский язык",
                declination: "русскому языку",
                logo: russianLogo
            };

        case "geography":
            return {
                russianName: "география",
                declination: "географии",
                logo: geographyLogo
            };

        default:
            return {
                russianName: "география",
                declination: "географии",
                logo: geographyLogo
            };;
    }
}
