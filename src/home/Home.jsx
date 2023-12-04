import Footer from "./Footer";
import Newsletter from "./Newsletter";
import RecentBlog from "./RecentBlog";
import Banner from "./banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;