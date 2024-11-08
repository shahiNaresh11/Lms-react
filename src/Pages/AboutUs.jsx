import HomeLayout from "../Layouts/HomeLayouts";
import tree from "../assets/images/tree.jpg";
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";


function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10 ">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality Eduction</h1>
                        <p className="text-xl text-gray-200">our goal is provide the afordabel and quality eduction to the world ,
                            we are providing the platform for the aspring teacher and student for share the knowledge and the creativity skill to each other to empower and contribute in the growth and
                        </p>


                    </section>

                    <div className="w-1/3">
                        <img
                            id="test"
                            style={{

                                marginLeft: '140px',
                                filter: "drop-shadows(0px 10px rgb(0,0,0))"
                            }}
                            className="drop-shadow-2xl ml-[30px] rounded-lg "
                            src={tree}
                            alt="" />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto  my-16">

                    {celebrities && celebrities.map(celbrity => <CarouselSlide
                        {...celbrity}
                        key={celbrity.slideNumber}
                        totalSlides={celebrities.length}
                    />)}
                </div>




            </div>

        </HomeLayout >
    )
}
export default AboutUs;