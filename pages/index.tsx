import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/data";

const index = () => {
    // console.log("CLIENT", services);
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
            <h5 className="my-3 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                voluptates est deserunt? Harum unde aspernatur tempore ipsam
                asperiores repudiandae, explicabo suscipit cupiditate
                exercitationem! Vero sit ratione, mollitia aliquid consectetur
                consequatur.
            </h5>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-bold tracking-wider">
                    What I'm good at
                </h6>
                <div className="grid gap-6 lg:grid-cols-2">
                    {services.map((service) => (
                        <div className="bg-gray-200 rounded-lg lg:col-span-1">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default index;
