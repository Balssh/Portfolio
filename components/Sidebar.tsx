import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
const Sidebar = () => {
    return (
        <div className="col-span-12 py-5 text-center bg-white lg:col-span-3 rounded-2xl">
            <img
                src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/279400000_5325516427516017_4355978319386747439_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_tnbiEd5P6IAX9ThsN2&_nc_ht=scontent-otp1-1.xx&oh=00_AfDxQoZAulL6ncPDww8wQZUo0MEtVE6DewiyciGgNSZ1Fw&oe=63A28D2F"
                alt="avatar"
                className="w-32 h-32 mx-auto border rounded-full"
            />
            <h3 className="my-4 font-medium tracking-wider text-3x1 font-Source">
                <span className="text-violet-500">George</span> <br />
            </h3>
            <p className="px-2 py-1 mx-5 my-3 bg-gray-200 rounded-full">
                Software Developer
            </p>
            <a
                className="flex items-center justify-center px-2 py-1 mx-5 my-3 bg-gray-200 rounded-full"
                href=""
                download="name"
            >
                <GiTie className="w-6 h-6" />
                Download Resume
            </a>
            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
                <a href="https://github.com/Balssh/">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="nkedin.com/in/george-bals-7008ab188/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            {/* Address */}
            <div
                className="py-4 my-5 bg-gray-200" // style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Timisoara, Romania</span>
                </div>
                <p className="my-2">george.bals25@gmail.com</p>
                <p className="my-2 ">Placeholder</p>
            </div>
            <button
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-tr from-green-400 to-blue-400 focus:outline-none"
                onClick={() => {
                    window.open("mailto: george.bals25@gmail.com");
                }}
            >
                Email me
            </button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-tr from-green-400 to-blue-400 focus:outline-none">
                Toggle theme
            </button>
        </div>
    );
};

export default Sidebar;
