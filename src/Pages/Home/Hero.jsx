export default function Hero() {
    return (
        <section id="heroSection" className="hero-section">
        <div className="hero-section-content-box">
        <div className="hero-section-content">
        <p className="section-title">
        Hey I'm Eric </p>
        <h1 className="hero-section-title">
            <span className="hero-section-title">Full Stack</span>{" "}
            <br />
            Developer
        </h1>
        <p className="hero-section-description">
            I am a big worm.
            <br /> Do you like worms?
        </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero-section-image">
            <img src="./img/hero_img.png"/>
        </div>
        </section>
    )
}