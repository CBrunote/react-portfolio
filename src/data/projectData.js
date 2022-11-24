import lyfbro from '../assets/Lyfbro.png'
import WhatsForDinner from '../assets/Whats-For-Dinner.png'
import weatherDashboard from '../assets/weather-dashboard.png'
import codeQuiz from '../assets/code-quiz.png'
import portfolio from '../assets/portfolio.png'
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiHandlebarsdotjs, SiMysql } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

export const projectData = [
    {
        id: 1,
        name:'Lyfbro',
        url: 'https://lyfbro99.herokuapp.com/',
        description: '',
        img: lyfbro,
        alt: 'lybro app demo',
        github: 'https://github.com/CBrunote/Lyfbro',
        stack: [<SiTailwindcss size='1.5rem'/>, <SiMysql size='1.5rem'/>, <SiHandlebarsdotjs size='1.5rem'/>, <FaNodeJs size='1.5rem'/>, <SiJavascript size='1.5rem'/>, <FaHtml5 size='1.5rem'/>]
    },
    {
        id: 2,
        name: "What's for Dinner?",
        url: 'https://cbrunote.github.io/Whats-For-Dinner/',
        img: WhatsForDinner,
        alt: 'whatsfordinner app demo',
        github: 'https://github.com/CBrunote/Whats-For-Dinner',
        stack: [<DiMaterializecss size='1.5rem'/>, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>, <SiJavascript size='1.5rem'/>,]  
    },
    {
        id: 3,
        name: "Weather Dashboard",
        url: 'https://cbrunote.github.io/Weather-Dashboard/',
        img: weatherDashboard,
        alt: 'weather dashboard app demo',
        github: 'https://github.com/CBrunote/Weather-Dashboard',
        stack: [<FaBootstrap size='1.5rem' />, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>, <SiJavascript size='1.5rem'/>]  
    },
    {
        id: 4,
        name: "TBD",
        url: 'TBD',
        img: 'N/A',
        alt: 'TBD app demo',
        github: 'TBD',
        stack: [<SiMysql />, <FaBootstrap />, <FaNodeJs />]  
    },
    {
        id: 5,
        name: "Code Quiz",
        url: 'https://cbrunote.github.io/4-Code-Quiz/',
        img: codeQuiz,
        alt: 'Code Quiz app demo',
        github: 'https://github.com/CBrunote/4-Code-Quiz',
        stack: [<SiJavascript size='1.5rem'/>, <FaHtml5 />, <FaCss3Alt />]  
    },
    {
        id: 6,
        name: "React Portfolio",
        url: 'https://cbrunote.github.io/4-Code-Quiz/',
        img: portfolio,
        alt: 'Portfolio app demo',
        github: 'https://github.com/CBrunote/react-portfolio',
        stack: [<FaReact size='1.5rem'/>, <SiTailwindcss size='1.5rem'/>, <SiJavascript size='1.5rem'/>, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>,]  
    },

]
