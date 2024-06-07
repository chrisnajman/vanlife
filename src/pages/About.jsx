import bgImg from "../assets/images/about-hero.png"
import { UrlRoot } from "../components/UrlRoot"
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="about-page-container content-container">
      <img
        src={bgImg}
        className="about-hero-image"
      />
      <div className="about-page-content">
        <h1>Don{"'"}t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          <span>Your destination is waiting.</span>
          <span>Your van is ready.</span>
        </h2>
        <Link
          className="link-button"
          to={`${UrlRoot}vans`}
        >
          Explore our vans
        </Link>
      </div>
    </div>
  )
}

export default About
