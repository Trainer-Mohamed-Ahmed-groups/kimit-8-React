// eslint-disable-next-line react/prop-types
export default function SingleCourse({ course }) {
    return (
        // eslint-disable-next-line react/prop-types
        <li >{course.name} : {course.desc}</li>
    )
}
