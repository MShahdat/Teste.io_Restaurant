import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="relative w-full bg-white py-8">
            <div className="max-w-5xl mx-auto">
                {/* GIF Background */}
                <div
                    className="w-full bg-center bg-no-repeat bg-contain h-[90vh]"
                    style={{
                        backgroundImage:
                            "url('https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif')",
                    }}
                >
                </div>
            </div>
            <div className="absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap">
                <Link to={'/'} className="bg-black/5  hover:text-red-600 duration-300 text-black/80 font-medium py-1 px-4 text-center rounded ">Go to home</Link>
            </div>
        </section>
    );
};

export default NotFound;
