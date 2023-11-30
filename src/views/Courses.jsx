import SingleCourse from "../components/SingleCourse"
import { coursesName } from "../data/courses"
export default function Courses() {

    return (
        <div>
            <h2>Courses</h2>
            <ol>
                {
                    coursesName.map(course =>
                        <SingleCourse key={course.id} course={course} />
                    )
                }
            </ol>
        </div>

    )
}
