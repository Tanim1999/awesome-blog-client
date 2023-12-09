import { useState } from "react";
import useBlogs from "../hooks/useBlogs";

import BlogCard from "./BlogCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTravel from "../hooks/useTravel";
import useEducation from "../hooks/useEducation";
import useTechnology from "../hooks/useTechnolgy";
import useSports from "../hooks/useSports";
import useEntertainment from "../hooks/useEntertainment";






const AllBlog = () => {
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    const [blogs, refetch] = useBlogs(search)
    const [travel, reTravel] = useTravel(search)
    const [education, reEducation] = useEducation(search)
    const [technology, reTechnology] = useTechnology(search)
    const [sports, reSports] = useSports(search)
    const[entertainment,reEntertainment]=useEntertainment(search)
    console.log("travel", travel)


    const handleSearch = (e) => {

        e.preventDefault()
        refetch()
        reTravel()
        reEducation()
        reTechnology()
        reSports()
        reEntertainment()
        const searchText = e.target.search.value
        console.log(searchText)
        setSearch(searchText)




    }








    return (
        <div className="max-w-screen-xl mx-auto">

            <div className="flex justify-center my-7">
                <form onSubmit={handleSearch} className="join ">
                    <div>
                        <div>
                            <input name="search" className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>

                    <div className="indicator">

                        <button type="submit" className="btn btn-neutral join-item">Search</button>
                    </div>
                </form>
                <button onClick={() => { setActive(!active) }} className={`btn ${active ? "bg-red-700" : "bg-black"} text-white`}>Default</button>
            </div>
            <Tabs>
                <TabList className="font-bold">
                    <Tab >All blogs</Tab>
                    <Tab>Travel</Tab>
                    <Tab>Educational</Tab>
                    <Tab>Technology</Tab>
                    <Tab>Sports</Tab>
                    <Tab>Entertainment</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {travel.map((travel) => (
                            <BlogCard key={travel._id} blog={travel}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {education.map((education) => (
                            <BlogCard key={education._id} blog={education}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {technology.map((technology) => (
                            <BlogCard key={technology._id} blog={technology}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {sports.map((sport) => (
                            <BlogCard key={sport._id} blog={sport}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div>
                        {entertainment.map((entertainment) => (
                            <BlogCard key={entertainment._id} blog={entertainment}></BlogCard>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AllBlog;