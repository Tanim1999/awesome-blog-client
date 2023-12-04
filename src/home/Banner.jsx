

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/5666FF2/50906eea-b1b0-4aaf-9d29-683f2c7ae491.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to the awesome blogs</h1>
                    <p className="mb-5 font-bold text-white">Reveal your creative side to the world and explore other blogs tp experience awesomeness</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;