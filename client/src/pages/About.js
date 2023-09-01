require("../assets/styles/about.css");

const About = () => {
  return (
    <div className="about-container">
      <div className="img-wrapper">
        <img
          className="portrait"
          src={require("../assets/images/cropped.jpg")}
        ></img>
      </div>
      <div className="about-paragraph">
        <p>
          I am a Biodynamic Craniosacral therapist (BCST), gaining my
          qualification from the Craniosacral Therapy Educational Trust (CTET)
          in London. I am a registered member of the Craniosacral Therapy
          Association(RCST) and as such adhere to their code of ethics and
          standards in my practice.
        </p>
        <p>
          Clients have included those with sinusitis, dental problems, migraine,
          back and neck aches, menstrual issues, arthritis, grief and
          depression. However this list is not exhaustive - craniosacral therapy
          is beneficial in all kinds of situations, physical, mental and
          emotional.
        </p>
        <p>
          A qualified dentist and self-taught artist, my own life experiences,
          both professional and personal, make me ideally suited to empathise
          with my clients. Some come just a handful of times and others have
          become regular attendees, depending on their needs. I
        </p>
        <p>
          have myself experienced severe trauma when my husband died
          unexpectedly and suddenly leaving me with three young children. BCST
          helped me enormously some years later when I was ready to process this
          unimaginable and far-reaching experience.
        </p>
        <p>
          If you have any questions please do not hesitate to drop me a line.
          Read my testimonials from satisfied clients here.
        </p>
      </div>
    </div>
  );
};

export default About;
