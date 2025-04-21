import pro1 from "../../assets/1.png"
import pro2 from "../../assets/2.png"
import pro3 from "../../assets/3.png"
import pro4 from "../../assets/4.png"; // Add this import
import pro5 from "../../assets/5.png"; // Add this import

const projectcarddata = [
    {
        imgsrc: pro1,
        title: "website design",
        text: "best website creation that leaves a wow did you do this by machine or did you do this yourself " ,
        view: "/contacts"
    },

    {
        imgsrc: pro2,
        title: "security analyst",
        text: "have you secured your data, are you looking for constant monitoring of your security , you have found the right guy for the job " ,
        view: "/contacts"
    },

    {   
        imgsrc: pro3,
        title: "penetration tester",
        text: "i want to prove that your security is not that great and maybe give you solutions for you problem to avoid later system compromisation. are you in or out " ,
        view: "/contacts"
    },
    {
        imgsrc: pro4,
        title: "mobile app developer",
        text: "i build applications with flutter framework. the applications are sure to be responsive to any device. to checkout my open-source code to my hiking application visit the link below",
        view: "https://github.com/joshua-ndereba/peakhike.git"
    },
    {
        imgsrc: pro5,
        title: "DevOps engineer",
        text: "i hae worked in close relation to the daystar DITA club to maintain their servers. i wish to be quite enhanced in the field of DevOps",
        view: "/contacts"
    }



    
];

export default projectcarddata;