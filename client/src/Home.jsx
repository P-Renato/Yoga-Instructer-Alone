import "./App.css";
import "./Home.css";


export default function Header () {
    const smoothScroll = (e, targetId) => {
        e.preventDefault(); 
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
            behavior: 'smooth',
            block: 'start', 
            });
        }
    };
    return (
        

    
    <>
        <header className="header">
            <nav className="navBar">
                <a href="#aboutMe" onClick={(e) => smoothScroll(e, '#aboutMe')}>About me</a>
                <a href="#schedule"  onClick={(e) => smoothScroll(e, '#schedule')}>Schedule</a>
                <a href="">Event</a>
                <a href="#blog" onClick={(e) => smoothScroll(e, '#blog')}>Blog</a>
            </nav>
            <h1>Carolina Rose</h1>
            <button>Contact</button>
        </header>
        <nav className="headerText">
            <p> 
                "The nature of yoga is to shine the light of awareness into the darkest corners of the body." <br/> — Jason Crandell

            </p>
        </nav>
    </>
    )
}