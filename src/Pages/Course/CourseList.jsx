import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import HomeLayout from "../../Layouts/HomeLayouts";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import CourseCard from "../../Components/CourseCard";


function CourseList() {
    const dispatch = useDispatch();
    const { courseData } = useSelector((state) => state.course);
    console.log("my", courseData.data)

    async function LoadCourse() {
        await dispatch(getAllCourses());

    }

    useEffect(() => {
        LoadCourse();


    }, []);
    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className=" text-3xl font-semibold text-center">

                    Explore the courses made by <span className="text-yellow-600">insutries expert</span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {courseData?.map((element) => {
                        console.log("Course element:", element);

                        return (
                            <CourseCard key={element._id} data={element} />



                        )
                    })}


                </div>



            </div>
        </HomeLayout>
    )


}
export default CourseList;