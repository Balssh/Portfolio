import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route} className="hover:text-amber-500">
            <span onClick={() => setActiveItem(name)}>{name}</span>
        </Link>
    ) : null;
};

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("");
    const { pathname } = useRouter();
    useEffect(() => {
        if (pathname === "/") setActiveItem("About");
        if (pathname === "/projects") setActiveItem("Projects");
        if (pathname === "/resume") setActiveItem("Resume");
    }, []);
    return (
        <div className="flex justify-between px-5 py-3 my-3 ">
            <span className="text-xl font-bold text-red-500 border-b-4 border-red-500 md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-3 text-lg text-fuchsia-600">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    );
};

export default Navbar;
