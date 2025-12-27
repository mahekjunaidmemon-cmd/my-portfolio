import './App.css'

function App() {
  return (
    <div className="portfolio-wrapper">
      {/* LEFT SIDE: Text Content */}
      <div className="text-content">
        <header>
          <h1 className="name-title">Mahek Rasool Memon</h1>
          <div className="contact-details">
            <p>Email: mahekjunaidmemon@gmail.com</p>
            <p>Phone: 03125693984</p>
          </div>
        </header>

        <section>
          <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
          <p>I am a student currently pursuing bachelor's in IT and I am learning Web Development as a skill</p>
        </section>

        <section>
          <h2 className="section-title">EXPERIENCE SECTION</h2>
          <p className="job-title">Java Developer---Code Alpha</p>
          <p className="job-date">OCT--NOV</p>
          <ul>
            <li>Certificate of Appreciation 1</li>
            <li>Recommendation Letter 2</li>
            <li>Certificate of Completion 3</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">EDUCATION</h2>
          <p>Intermediate --- County Girls College(2024)</p>
        </section>

        <section>
          <h2 className="section-title">SKILLS</h2>
          <ul>
            <li>C++</li>
            <li>Java</li>
            <li>HTML</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">PROJECTS</h2>
          <ul>
            <li><strong>2-bit digital lock system:</strong> A digital lock which checks the input with the preset code</li>
            <li><strong>Report on Education For All:</strong> Describes the equality and importance of education without gender discrimination</li>
          </ul>
        </section>
      </div>

      {/* RIGHT SIDE: Profile Image */}
      <div className="image-sidebar">
        <img 
          src="/girl.jpg" 
          alt="Mahek Rasool Memon" 
          className="cv-image" 
        />
      </div>
    </div>
  )
}

export default App