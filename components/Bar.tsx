import { FunctionComponent } from "react";
import { iSkill } from "../interfaces/type";

const Bar: FunctionComponent<{ data: iSkill }> = ({
    data: { name, level, Icon },
}) => {
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full">
            <div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-orange-600"
                style={{ width: level }}
            >
                <Icon className="mr-3" />
                {name}
            </div>
        </div>
    );
};

export default Bar;
