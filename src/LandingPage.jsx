import React from "react";
import Contact from "./components/Contact";
import "./LandingPage.css"; // Import the CSS file for styling
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BackedBy from "./components/BackedBy";
import { Navigate, useNavigate } from "react-router-dom";
// import './main.js'
import { useClerk, useUser } from "@clerk/clerk-react";
import Jobs from "./pages/JobsMarket";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const LandingPage = () => {
  const navigate = useNavigate();
  const clerk = useClerk();
  const handleSignIn = () => {
    clerk.openSignIn();
  };
  const { user, isLoaded, isSignedIn } = useUser();
  if (isSignedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className='container'>
      <div>
        <a href="https://a2dt.io" target="_blank" className="refer">
          💡African To Digital Technology
        </a>
        <Navbar />
        {/* <nav>
          <div className="logo">
            <img
              src="https://juxtopposed.github.io/realtimecolors/images/favicon.png"
              alt="logoface"
              className="logoface"
            />
           
          </div>
          <div className="menu">
            <a href="#" className="menu-item">
              Learn
            </a>

            <a href="#" className="menu-item">
              Web3.0/Recieve
            </a>
            <a href="#" className="menu-item">
              Mentors/team
            </a>

            <a href="#sub" onClick={handleSignIn} className="primary-button">
              Sign-Up
            </a>
          </div>
        </nav> */}
        <div className="hero">
          <div className="hero-text">
            <h1 className='empower'>
              Empowering Africa through{" "}
              <span className="color-effect">Digital Bridge.</span>
              <br />
            </h1>
            <p className="subtitle">
              Unlocking Africa's Potential with Cutting-Edge Digital Solutions.
              <br /> and Help them to connect with local/global talent seeking to provide them a way to develop and work on their nation way to digitalization              country
            </p>
            <div className="hero-cta" >
              <a
               onClick={() => navigate('/jobs')}
                href=""
                onclick="highlightToolbar()"
                className="primary-button"
              >

                Get Started
              </a>
              <a href="#how" className="secondary-button">
                How does it work?
              </a>
            </div>
            <div className="hero-scroll">
              <svg width={23} height={33} viewBox="0 0 23 33" fill="none">
                <rect
                  x="0.767442"
                  y="0.767442"
                  width="20.7209"
                  height="31.4651"
                  rx="10.3605"
                  stroke="var(--primary)"
                  strokeWidth="1.53488"
                />
                <rect
                  x={9}
                  y={8}
                  width={4}
                  height={8}
                  rx={2}
                  fill="var(--primary)"
                />
              </svg>
              <p className="sub">Scroll to see more sections</p>
            </div>
          </div>
          <div className="hero-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={652}
              height={644}
              viewBox="0 0 652 644"
              fill="none"
              className="mondrian"
            >
              <rect
                x="4.69366"
                y={4}
                width="643.306"
                height={636}
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={5}
                y={4}
                width="154.827"
                height="70.282"
                fill="var(--secbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={411}
                y={4}
                width={202}
                height={67}
                fill="var(--accent)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={411}
                y={72}
                width={202}
                height={167}
                fill="var(--accent)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={411}
                y={405}
                width={202}
                height={84}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={241}
                y={615}
                width={372}
                height={25}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={76}
                y={569}
                width={166}
                height={71}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={242}
                y={570}
                width={169}
                height={45}
                fill="var(--primary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={242}
                y={489}
                width={169}
                height={81}
                fill="var(--secbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={242}
                y={404}
                width={169}
                height={85}
                fill="var(--secbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={75}
                y={72}
                width={336}
                height={333}
                fill="var(--primbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={76}
                y={405}
                width={166}
                height={165}
                fill="var(--primary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                opacity="0.5"
                x={411}
                y={489}
                width={202}
                height={126}
                fill="var(--accent)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={613}
                y={489}
                width={35}
                height={151}
                fill="var(--primbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={411}
                y={238}
                width={103}
                height={167}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={514}
                y={238}
                width={99}
                height={167}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x="613.206"
                y={4}
                width="34.7942"
                height="484.655"
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x="159.827"
                y={4}
                width="250.853"
                height="67.1507"
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={5}
                y={72}
                width={71}
                height={167}
                fill="var(--secondary)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x={5}
                y={238}
                width={71}
                height={251}
                fill="var(--secbuttn)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
              <rect
                x="4.69366"
                y="487.261"
                width="71.3258"
                height="152.739"
                fill="var(--accent)"
                stroke="var(--secondary)"
                strokeWidth={8}
              />
            </svg>
          </div>
        </div>
        <main>

          
          <div className="part1" id="why">
            <h2 className='empower'>Why A2DT</h2>
            <div className="part1-cards">
              <div className="part1-card">
                <svg
                  width={117}
                  height={117}
                  viewBox="0 0 117 117"
                  fill="none"
                  style={{ zIndex: 5 }}
                  className="part1-card-img"
                >
                  <circle
                    cx="58.5"
                    cy="58.5"
                    r="58.5"
                    fill="var(--secondary)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z"
                    fill="var(--primbuttn)"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M81.5 22.5L57.1395 64.8489L32 53.5"
                    stroke="var(--primary)"
                    strokeWidth="7.25581"
                  />
                </svg>
                <p className="subtitle highlight">Native Opportunty</p>
                <p className="native">
                  Find Native opportunities to cultivate the native nature of
                  the nation their path of digital technology
                </p>

                <a onClick={() => navigate("/jobs")} className="primary-button">
                  Get Started.
                </a>
                <div className="part1-card-bg" />
              </div>
              <div className="part1-card">
                <svg
                  width={112}
                  height={114}
                  viewBox="0 0 112 114"
                  fill="none"
                  style={{ zIndex: 5 }}
                  className="part1-card-img"
                >
                  <rect width={58} height={58} fill="var(--secondary)" />
                  <rect
                    x={69}
                    y={25}
                    width={33}
                    height={33}
                    fill="var(--primbuttn)"
                    fillOpacity="0.6"
                  />
                  <rect
                    x={69}
                    y={71}
                    width={43}
                    height={43}
                    fill="var(--primary)"
                    fillOpacity="0.2"
                  />
                  <rect
                    x={20}
                    y={70}
                    width={38}
                    height={39}
                    fill="var(--primary)"
                  />
                </svg>
                <p className="subtitle highlight">REST API's</p>
                <p className="native">
                  We provide a REST API for you to build a product on top of it
                  and elevate the reach of the native opportunity worldwide
                </p>
                <a onClick={() => navigate("/api")} className="primary-button">
                  Get Started.
                </a>
                <div className="part1-card-bg" />
              </div>
              <div className="part1-card">
                <svg
                  width={179}
                  height={89}
                  viewBox="0 0 179 89"
                  fill="none"
                  style={{ zIndex: 5 }}
                  className="part1-card-img"
                >
                  <rect
                    y={26}
                    width={154}
                    height={63}
                    fill="var(--primbuttn)"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M142 15.5V0"
                    stroke="var(--primary)"
                    strokeWidth={8}
                  />
                  <path
                    d="M163 34L178.5 34"
                    stroke="var(--primary)"
                    strokeWidth={8}
                  />
                  <path
                    d="M158 19.5L170.5 7"
                    stroke="var(--primary)"
                    strokeWidth={8}
                  />
                  <path
                    d="M63 54L74.5 65L95.5 44"
                    stroke="var(--primary)"
                    strokeWidth={8}
                  />
                </svg>
                <p className="subtitle highlight">Free & Simple</p>
                <p className="native">
                  It is free and open to use for every african student for them
                  to make the use of their country talent needs and bring their
                  effort down to excel and shine the hidden talents
                </p>
                <a className="primary-button">Get Started.</a>
                <div className="part1-card-bg" />
              </div>
            </div>
          </div>
          <div className="part2" id="how">
            <div className="part2-left">
              <h2>As Organization </h2>
              <p>Lets Aspire to Inspire,<br/> Help us to shine hidden native african talent to globe</p>
            </div>
            <div className="part2-right">
              <p className="one step">
                We will be working on each and everyone to make sure that they have landed jobs / talent that they are looking for 
              </p>
              <p className="two step">
                After Successfull landing , We will be providing them a way they can receive their values using WEB3.0 / Blockchain.
              </p>
              <p className="three step">
                For those who did not made it , We will be adding them with next Cohort to work more on their valuable skill
              </p>
              <p className="four step">
                Before everything else we also provide them a series of session where they get to learn how to build their RESUME / what thing should be inlcuded or not with in APA styles
              </p>
            </div>
          </div>

          <BackedBy />

          <br />

          <Contact />
          <div className="part4" id="faq">
           <Products/>
          </div>
          <div className="part5" id="end">
            <h1>
              Your <span className="color-effect">Journey</span> Shouldn't End
              Here.
            </h1>
            <p className="subtitle">
              Follow me on social media to stay tuned on more projects.
            </p>
            <a
              href="https://twitter.com/juxtopposed"
              target="_blank"
              className="primary-button"
            >
              Stay Tuned
            </a>
          </div>
          <div className="footer" id="footer">
            <div className="logo">
              <img
                src="https://juxtopposed.github.io/realtimecolors/images/favicon.png"
                alt="logoface"
                className="logoface"
              />
              <a href="https://a2dt.vercel.app/" target="_blank">
                <h2 className="sitename reversed">A2DT</h2>
              </a>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <p style={{ margin: 0 }}>
                  Lets helps you develop and connect your talent to universe.
                </p>
              </div>
              <div className="footer-col">
                <a href="#" className="menu-item reversed">
                  About
                </a>
                {/* <a href="#" class="menu-item reversed">Blog</a> */}
                <a href="#" className="menu-item reversed">
                  Contact
                </a>
              </div>

              <div className="footer-col">
                <a
                  href="https://twitter.com/juxtopposed"
                  className="menu-item reversed"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://codepen.io/Juxtopposed"
                  target="_blank"
                  className="menu-item reversed"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@juxtopposed"
                  target="_blank"
                  className="menu-item reversed"
                >
                  YouTube
                </a>
                <a
                  href="https://github.com/juxtopposed"
                  target="_blank"
                  className="menu-item reversed"
                >
                  Instagram
                </a>
              </div>
            </div>
            <p className="sub">Made with &lt;3 by the-farmers</p>
          </div>
          {/*  */}
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
