import Bar from "../components/Bar";
import { stack, tools } from "../data/data";

const resume = () => {
    return (
        <div className="px-6 py-2">
            {/* Education and experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            System Engineering{" "}
                        </h5>
                        <p className="font-semibold">
                            Universitatea Politehnica Timisoara (2019-2023)
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            System Engineering{" "}
                        </h5>
                        <p className="font-semibold">
                            Universitatea Politehnica Timisoara (2019-2023)
                        </p>
                    </div>
                </div>
            </div>
            {/* Stack and tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Stack</h5>
                    <div className="my-2">
                        {stack.map((language) => (
                            <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Stack</h5>
                    <div className="my-2">
                        {tools.map((tool) => (
                            <Bar data={tool} key={tool.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;
