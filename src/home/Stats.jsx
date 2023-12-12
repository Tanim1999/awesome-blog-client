import useBlogs from "../hooks/useBlogs";
import useEducation from "../hooks/useEducation";
import useEntertainment from "../hooks/useEntertainment";
import useSports from "../hooks/useSports";
import useTechnology from "../hooks/useTechnolgy";
import useTravel from "../hooks/useTravel";


const Stats = () => {
    const [blogs] = useBlogs("")
    
    const [education]= useEducation("")
    const [entertainment]=useEntertainment("")
    const [sports]= useSports("")
    const [technology]= useTechnology("")
    const [travel]= useTravel("")
    console.log(blogs,blogs.length)


    return (
       <div className="my-10">
        <h2 className="text-3xl font-bold my-5 text-center">Blogs Count</h2>
         <div className=" flex justify-center">
            <div className="stats shadow text-xl font-bold">

                <div className="stat place-items-center">
                    <div className="stat-title">Total Blogs</div>
                    <div className="stat-value">{blogs.length}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Educational</div>
                    <div className="stat-value">{education.length}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Entertainment</div>
                    <div className="stat-value">{entertainment.length}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Sports</div>
                    <div className="stat-value">{sports.length}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Technological</div>
                    <div className="stat-value">{technology.length}</div>
                    
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Travel</div>
                    <div className="stat-value">{travel.length}</div>
                    
                </div>
                

                

                

            </div>

        </div>
       </div>
    );
};

export default Stats;