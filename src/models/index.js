import me from "../assets/me.jpg";
import me3 from "../assets/office.jpg";
import IMG1 from "../assets/RealGaming.png";
import IMG2 from "../assets/affiliate.png";
import IMG3 from "../assets/Dubeale.png";
import IMG4 from "../assets/getfee_inventory.png";
import IMG5 from "../assets/getrooms_home.jpeg";
import IMG6 from "../assets/AddisJewellery.png";


export const aboutMe = {
	name: "Yonas",
	fatherName: "Alem",
	position: " Senior Fullstack Developer",
	description: {

		intro: "I’m a Senior Fullstack Engineer with 5+ years of experience building scalable platforms for gaming, fintech, and e-commerce. I modernize legacy systems, automate workflows, and design architectures that handle millions of transactions.",
        list: [
            "Modernized legacy codebases, slashing latency by 40% and enabling 10k+ concurrent users.",
            "Automated workflows, saving 50%+ manual effort and $20k+ annually.",
            "Built payment gateways processing $54M+ in transactions with 97% performance efficiency.",
        ]
    },
	image: me,
    office_image: me3,
	skills: [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Node.js",
		"Express",
		"MongoDB",
	],
	clients: 10,
	projects: 20,
	experience: "5+"
};


export const skills = {
    frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "React Native",
    ],  
    backend: [
        "Node.js",
        "Express",
        "PHP",
        "GO",
        "Python",
    ],      
    database: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
    ],
    tools: [    
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Kubernetes",
        "AWS",
    ],
}

export const contact = {
	email: "yonalem21@gmail.com",
	telegram: "@Yon_21",
	phone: "+251936972697",
};

export const socials = {
	linkedin: "https://www.linkedin.com/in/yonasalem21/",
	github: "https://github.com/Yonas21",
	upwork: "https://www.upwork.com/freelancers/yonasalem2",
	facebook: "https://web.facebook.com/Yon.Alem.21/",
	instagram: "https://www.instagram.com/its_yon_21/",
};


export const services = {
	web_development: ["AI Integration", "Well Optimized", "Responsive Designs", "SEO Optimization", "API Integration", "Well Documented APIs", "Compatibility with All major browsers", "Deployment and Monitoring"],
    ui_ux_design: ["Real-Estate", "E-commerce", "Portfolio", "Blog", "Landing Page", "Admin Dashboard"],
    mobile_development: ["iOS and Android apps", "Cross-platform dev.", "UI/UX Design for mobile", "App Store submission", "Google Play submission"],
};



export const portfolioItems = [
	{
		img: IMG1,
		title: "Real Gaming Poker",
		github: "",
		demo: "https://play.google.com/store/apps/details?id=com.realpoker.nv.app",
	},
	{
		img: IMG2,
		title: "Affiliate Dashboard",
		github: "",
		demo: "https://affiliate-staging.vercel.app/",
	},
	{
		img: IMG3,
		title: "DubeAle (Buy Now, Pay Later)",
		github: "",
		demo: "https://www.dubeale.com/",
	},
	{
		img: IMG4,
		title: "GetFee Dashboard",
		github: "",
		demo: "https://www.getfeeenterprise.com",
	},
	{
		img: IMG5,
		title: "GetRooms",
		github: "",
		demo: "https://play.google.com/store/search?q=getrooms&c=apps",
	},
	{
		img: IMG6,
		title: "Addis Jewellery",
		github: "https://github.com/Yonas21/addis-jewellery-shop",
		demo: "https://addis-musix.vercel.app/",
	},
];