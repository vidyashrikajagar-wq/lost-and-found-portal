import React from "react";
import "./home.css";
import campus from "../assets/vsmit_slide.jpg";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="left">

          <span className="badge">
            🎓 VSMIT Campus
          </span>

          <h1>
            Campus <span>Lost & Found</span> Portal
          </h1>

          <p>
            Find • Report • Recover
          </p>

         

          <h3>
            Helping Students Recover Their Belongings
          </h3>

        </div>

        <div className="right">

          <img
            src={campus}
            alt="Campus"
          />

        </div>

      </section>

      {/* Features */}

      <section className="cards">

        <div className="card">

          <div className="icon">📢</div>

          <h2>Report</h2>

          <p>Report Lost & Found Items Easily</p>

        </div>

        <div className="card">

          <div className="icon">🔍</div>

          <h2>Search</h2>

          <p>Search Lost & Found Records</p>

        </div>

        <div className="card">

          <div className="icon">🤝</div>

          <h2>Recover</h2>

          <p>Reconnect Students With Their Items</p>

        </div>

      </section>

      {/* Quote */}

      <section className="quote">

        <h2>
          "Every Lost Item Deserves A Way Back Home."
        </h2>

      </section>

      {/* Footer */}

      <footer>

        <h3>Campus Lost & Found Portal</h3>

        <p>
          Developed By Vidyashri
        </p>

      </footer>

    </div>
  );
}

export default Home;
