/* eslint-disable react/no-unescaped-entities */


const Faq = () => {
    return (
        <div className="my-10">
            <h2 className="text-3xl text-center font-bold my-5">
                Frequently Asked Questions
            </h2>
            <div className="join bg-[#36454F] text-white join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Can I read blogs without logging in?
                    </div>
                    <div className="collapse-content">
                        <p>No, you can't read the detailed blog or comment without logging in. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What's the benefit I will get if i register?
                    </div>
                    <div className="collapse-content">
                        <p>If you register and log into your account. You can read and comment on all the blogs. You can make your own wishlist.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How can i be featured in the featured blog section?
                    </div>
                    <div className="collapse-content">
                        <p>Featured blog section is based on your word count. The more words you will put there is more chance to get featured!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;