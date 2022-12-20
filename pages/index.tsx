import { GetServerSidePropsContext } from "next";
const index = ({ services }) => {
    // console.log("CLIENT", services);
    return <div className="p-4">My Portfolio</div>;
};

export default index;

// export const getServerSideProps = async (
//     context: GetServerSidePropsContext
// ) => {
//     const res = await fetch("http://localhost:3000/api/services");
//     const data = await res.json();

//     // console.log("SERVER", services);
//     return {
//         props: {
//             services: data,
//         },
//     };
// };

export const getStaticProps = async (context: GetServerSidePropsContext) => {
    const res = await fetch("http://localhost:3000/api/services");
    const data = await res.json();

    // console.log("SERVER", services);
    return {
        props: {
            services: data,
        },
    };
};
