import React,{useEffect,useState} from 'react'
import About from '../components/About';
import Counter from '../components/Counter';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import TeamNames from '../components/TeamNames';
import SponsorsLogo from "../components/SponsorsLogo" 
// import Hours from '../components/Hours';

// import Organisers from '../components/Organisers';
// import Sponsors from '../components/Sponsors';
// import Themes from '../components/Themes';
import Timeline from '../components/Timeline';
import '../App.css';
import eva_main from "../assets/images/eva_main.jpg"

function LandingPage() {
    const [isSectionScrolled, setIsSectionScrolled] = useState(false);
    const launchDate = new Date("June 24, 2023 12:00:00");

    // Calculate the initial countdown value
    const currentTime = new Date();
    const initialCountdown = Math.floor(
        (launchDate.getTime() - currentTime.getTime()) / 1000
    );
    
    useEffect(() => {
        const handleScroll = () => {
          const sectionHeight = document.getElementById('landing').offsetHeight;
          const scrollPosition = window.pageYOffset;
      
          setIsSectionScrolled(scrollPosition > sectionHeight);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <React.Fragment>
            <div
       style={{ backgroundImage: `url(${eva_main})` }}
       className="bg-fixed bg-center bg-no-repeat bg-cover h-screen  "
       > </div>
            {/* <Landing /> */}
            {isSectionScrolled && <Navbar currentPage = 'landing' />}
            {/* <Navbar currentPage = 'landing'/> */}
            <Counter id="landing"  initialCountdown={initialCountdown} />
            <About />
            <Timeline />
            {/* <Themes /> */}
            {/* <Sponsors /> */}
            {/* <TeamNames /> */}
            <SponsorsLogo />
            <Faq />
            {/* <Organisers /> */}
            <Footer />
            <div className="parallax"></div>
        </React.Fragment>
    );
}

export default LandingPage;
