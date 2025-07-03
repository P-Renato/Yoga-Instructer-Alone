import "../App.css";
import "./styles/Schedule.css";

export default function Schedule () {
    return (
        <>
            <section className="scheduleNav" id="schedule">
                <h3>Schedule</h3>
                  <nav className="scheduleBox">
                    <section className="leftSection">
                        <nav>
                            <h4>Weekly</h4> <span>01.01.2025-01-07.2025</span>
                        </nav>
                        <nav>
                            <h5>Mindfulness Yoga</h5>
                            <p>Monday 05.01.2025</p>
                            <p>12:00-13:00</p>
                            <p>Peace Yoga Studio</p>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                        </nav>
                        <nav>
                            <h5>EVENT: Mindfulness and Movie Yoga</h5>
                            <p>Wednesdays 07.01.2025</p>
                            <p>12:00-13:00</p>
                            <p>Peace Yoga Studio</p>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                        </nav>
                        <nav>
                            <h5>Yin Yoga</h5>
                            <p>Friday 09.01.2025</p>
                            <p>18:00-19:00</p>
                            <p>Peace Yoga Studio</p>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                            <p>*Michela's Delegate</p>
                        </nav>
                    </section>
                    <section className="rightSection">
                        <nav>
                            <h4>Mein Studio</h4>
                            <h5>Peace Yoga Studio</h5>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                            <h5>Yellow Yoga</h5>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                            <h5>Peace Yoga Studio</h5>
                            <a href="">Glogauer Straße 19 Kreuzberg 10999 Berlin</a>
                        </nav>  
                        <br />   
                        <br />   
                        <br />   
                        <hr />
                        <nav>
                            <h4>Additional Info</h4> <span>09-01.2025</span>
                            <p>I will be on vacation from <strong>February 2nd to February 7th.</strong> During this time, a substitute instructor will be teaching lessons, so I will provide more details later.</p>
                        </nav>           
                    </section>
                  </nav>  
            </section>
            
        </>
    )
}