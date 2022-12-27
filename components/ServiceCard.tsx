import { FunctionComponent } from "react";
import type { iService } from "../interfaces/type";

const ServiceCard: FunctionComponent<{ service: iService }> = ({
    service: { Icon, title, description },
}) => {
    const createMarkup = () => {
        return { __html: description };
    };
    return (
        <div className="flex p-2 space-x-4 item-center">
            <Icon className="w-12 h-12 text-cyan-600" />
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default ServiceCard;
