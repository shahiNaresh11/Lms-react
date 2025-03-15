import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
    const navigate = useNavigate();
   
    return (
        <div
        onClick={ () =>navigate("/course/description/")} 
         className=" w-[22rem] h-[430px] bg-zinc-700 text white cursor-pointer group overflow-hidden">
            <div className="overflow-hidden">

                <img
                    src={data?.thumbnail}
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover :scale=[1,2] transition-all"
                    alt="Course thumbnail" />

                <div className="p-3 space-y-1 text-white">



                    <h2 className="text-xl font -bold text-yellow-500 line-clamp-2">

                        {data?.title}


                    </h2>
                    <p
                        className="line-clamp-2">

                        {data?.description
                        }
                    </p>
                    <h2 className="text-xl font -bold text-yellow-500 line-clamp-2">

                        category: <span className="text-white text-[17px]">{data?.category}</span>

                    </h2>

                    <h2 className="text-xl font -bold text-yellow-500 line-clamp-2">

                        Number of lecture: <span className="text-white text-[17px]">{data?.numberOfLecture}</span>

                    </h2>

                    <h2 className="text-xl font -bold text-yellow-500 line-clamp-2">

                        instructor: <span className="text-white text-[17px]">{data?.createdBy}</span>

                    </h2>


                </div>

            </div>





        </div>

    )

}
export default CourseCard;