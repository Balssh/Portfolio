import { AiOutlineApi } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiCodersrank } from "react-icons/si";
import { iService } from "../interfaces/type";

export const services: iService[] = [
    {
        title: "Frontend Development",
        description:
            "I can build a beautiful and scalable SPA using <b> HTML, CSS and React.js </b> ",
        icon: DiReact,
    },
    {
        title: "Backend  Development",
        description:
            "handle database, server, api using <b>Express & MongoDB </b> ",
        icon: FaServer,
    },
    {
        title: "Competitive Coder",
        description:
            "a daily problem solver in <b>HackerRank</b> and <b>LeetCode</b> ",
        icon: SiCodersrank,
    },
    {
        title: "UI/UX designer",
        description: "stunning user interface designer using <b>Figma</b> ",
        icon: MdDesignServices,
    },
    {
        title: "API Development",
        description: "I can develop robust REST API using <b>Node API</b> ",
        icon: AiOutlineApi,
    },
];
