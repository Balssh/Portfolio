import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
const Sidebar = () => {
    return (
        <div className="col-span-12 text-center bg-white lg:col-span-3 rounded-2xl">
            <img
                src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/279400000_5325516427516017_4355978319386747439_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_tnbiEd5P6IAX9ThsN2&_nc_ht=scontent-otp1-1.xx&oh=00_AfDxQoZAulL6ncPDww8wQZUo0MEtVE6DewiyciGgNSZ1Fw&oe=63A28D2F"
                alt="avatar"
                className="w-32 h-32 mx-auto border rounded-full"
            />
            <h3 className="my-4 font-medium tracking-wider text-3x1">
                <span className="text-2xl font-bold">George</span> <br />
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Software Developer
            </p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
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
                <div className="flex justify-center">
                    <GoLocation />
                    <span>Timisoara, Romania</span>
                </div>
                <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                    george.bals25@gmail.com
                </p>
                <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                    Placeholder
                </p>
            </div>
            <button>Email me</button>
            <button>Toggle theme</button>
        </div>
    );
};

export default Sidebar;
