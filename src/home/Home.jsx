import Faq from "./Faq";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import RecentBlog from "./RecentBlog";
import Stats from "./Stats";
import Banner from "./banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Stats></Stats>
            <Newsletter></Newsletter>
            <Faq></Faq>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;