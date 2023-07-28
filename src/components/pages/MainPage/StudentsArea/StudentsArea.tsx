import BasicStudentsArea from "../BasicStudentsArea/BasicStudentsArea";
import StudyArea from "../StudyArea/StudyArea";
import AdditionalArea from "../AdditionalArea/AdditionalArea";
import FeedbackArea from "../FeedbackArea/FeedbackArea";
import FreeLessonAndFAQArea from "../FreeLessonAndFAQArea/FreeLessonAndFAQArea";

export default function StudentsArea(): React.ReactElement {
    return (
        <>
            <BasicStudentsArea />
            <StudyArea />
            <AdditionalArea />
            <FeedbackArea />
            <FreeLessonAndFAQArea />
        </>
    );
}
