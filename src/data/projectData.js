import lyfbro from '../assets/Lyfbro.png'
import WhatsForDinner from '../assets/Whats-For-Dinner.png'
import weatherDashboard from '../assets/weather-dashboard.png'
import codeQuiz from '../assets/code-quiz.png'
import portfolio from '../assets/portfolio.png'
import employee from '../assets/Employee-Tracker.png'
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiHandlebarsdotjs, SiMysql } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

export const projectData = [
    {
        id: 1,
        name:'Lyfbro',
        url: 'https://lyfbro99.herokuapp.com/',
        img: lyfbro,
        position: 'center',
        alt: 'lybro app demo',
        github: 'https://github.com/CBrunote/Lyfbro',
        stack: [<SiTailwindcss size='1.5rem'/>, <SiMysql size='1.5rem'/>, <SiHandlebarsdotjs size='1.5rem'/>, <FaNodeJs size='1.5rem'/>, <SiJavascript size='1.5rem'/>, <FaHtml5 size='1.5rem'/>],
        description: 'Lyfbro is a web application aimed at helping a user track activities to monitor health progress. The app provides visual feedback on activity via an interactive calendar heatmap. Users can create accounts securely to store their activities and monitor progress. Please note that the app is hosted on Heroku and may take a second to spin up when you visit the live link'
    },
    {
        id: 2,
        name: "What's for Dinner?",
        url: 'https://cbrunote.github.io/Whats-For-Dinner/',
        img: WhatsForDinner,
        position: 'center',
        alt: 'whatsfordinner app demo',
        github: 'https://github.com/CBrunote/Whats-For-Dinner',
        stack: [<DiMaterializecss size='1.5rem'/>, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>, <SiJavascript size='1.5rem'/>,],
        description: "What's For Dinner is a web application created to help you find your next meal based on search an ingredient you want to use and adding the ingredients to your Kroger shopping list with pricing. The app uses the MealDB API to display recipes, ingredients lists, and youtube video on how to cook the meal. The Kroger API is utilized to find the price per unit of each ingredient that gets added to your shopping list."
    },
    {
        id: 3,
        name: "Weather Dashboard",
        url: 'https://cbrunote.github.io/Weather-Dashboard/',
        img: weatherDashboard,
        position: 'center',
        alt: 'weather dashboard app demo',
        github: 'https://github.com/CBrunote/Weather-Dashboard',
        stack: [<FaBootstrap size='1.5rem' />, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>, <SiJavascript size='1.5rem'/>],
        description: 'This project was created to provide a tool for checking the weather in any city you choose utilizing the OpenWeatherAPI. Your searched cities are saved in local storage and can be recalled when you click on the city.'
    },
    {
        id: 4,
        name: "Employee Tracker",
        url: 'https://drive.google.com/file/d/1uqylCpLH_wJLV1l421Oew-LLCXJaWEBn/view?usp=sharing',
        img: employee,
        position: 'left',
        alt: 'Employee Tracker app demo',
        github: 'https://github.com/CBrunote/Company-Employee-Tracker',
        stack: [<SiMysql size='1.5rem' />, <SiJavascript size='1.5rem'/>, <FaNodeJs size='1.5rem'/>],
        description: 'This employee tracker is a CLI application utilzing the Inquirer npm package and MySQL database to create/edit your employee Database. The "Live" link will take you to a video demo of the application.'
    },
    {
        id: 5,
        name: "Code Quiz",
        url: 'https://cbrunote.github.io/4-Code-Quiz/',
        img: codeQuiz,
        position: 'center',
        alt: 'Code Quiz app demo',
        github: 'https://github.com/CBrunote/4-Code-Quiz',
        stack: [<SiJavascript size='1.5rem'/>, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>],
        description: 'Code quiz is a simple web app built with vanilla HTML, CSS, and JavaScript to provide a way to practice coding topics and save your highscores into local storage.'
    },
    {
        id: 6,
        name: "React Portfolio",
        url: 'https://cbrunote.github.io/4-Code-Quiz/',
        img: portfolio,
        position: 'center',
        alt: 'Portfolio app demo',
        github: 'https://github.com/CBrunote/react-portfolio',
        stack: [<FaReact size='1.5rem'/>, <SiTailwindcss size='1.5rem'/>, <SiJavascript size='1.5rem'/>, <FaHtml5 size='1.5rem'/>, <FaCss3Alt size='1.5rem'/>,],
        description: 'The site you are currently using. This site is an example of my react skills and shows off my design/styling skills with Tailwind CSS'
    },

]
