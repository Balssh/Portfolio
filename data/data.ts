import { AiOutlineApi } from "react-icons/ai";
import {
    DiDocker,
    DiGit,
    DiJenkins,
    DiLinux,
    DiPython,
    DiReact,
} from "react-icons/di";
import { FaServer } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiCodersrank, SiCplusplus, SiPytorch } from "react-icons/si";
import { iService, iSkill } from "../interfaces/type";

export const services: iService[] = [
    {
        title: "Frontend Development",
        description:
            "I can build a beautiful and scalable SPA using <b> HTML, CSS and React.js </b> ",
        Icon: DiReact,
    },
    {
        title: "Backend  Development",
        description:
            "handle database, server, api using <b>Express & MongoDB </b> ",
        Icon: FaServer,
    },
    {
        title: "Competitive Coder",
        description:
            "a daily problem solver in <b>HackerRank</b> and <b>LeetCode</b> ",
        Icon: SiCodersrank,
    },
    {
        title: "UI/UX designer",
        description: "stunning user interface designer using <b>Figma</b> ",
        Icon: MdDesignServices,
    },
    {
        title: "API Development",
        description: "I can develop robust REST API using <b>Node API</b> ",
        Icon: AiOutlineApi,
    },
];

export const stack: iSkill[] = [
    {
        name: "React",
        level: "30%",
        Icon: DiReact,
    },
    {
        name: "Python",
        level: "70%",
        Icon: DiPython,
    },
    {
        name: "C++",
        level: "30%",
        Icon: SiCplusplus,
    },
    {
        name: "Pytorch",
        level: "30%",
        Icon: SiPytorch,
    },
];

export const tools: iSkill[] = [
    {
        name: "Docker",
        level: "40%",
        Icon: DiDocker,
    },
    {
        name: "Git",
        level: "60%",
        Icon: DiGit,
    },
    {
        name: "Jenkins",
        level: "70%",
        Icon: DiJenkins,
    },
    {
        name: "Linux",
        level: "70%",
        Icon: DiLinux,
    },
];
