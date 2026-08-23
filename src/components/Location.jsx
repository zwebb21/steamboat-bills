import siteContent from "../data/siteContent";

function Location() {
  const { location } = siteContent;

  return (
    <section className="location">

      <div className="location-inner">

        <div className="location-content">

          <p className="section-eyebrow">
            Visit Us
          </p>

          <h2>Come See Us</h2>

          <address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1004+North+Lakeshore+Dr+Lake+Charles+LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{location.address}</p>
              <p>{location.city}</p>
            </a>
          </address>

          <a
            href={`tel:${location.phone}`}
            className="location-phone"
          >
            {location.phone}
          </a>

          <div className="location-hours">

            <h3>Hours</h3>

            <p>
              Sunday – Thursday
              <br />
              {location.hours.sundayThursday}
            </p>

            <p>
              Friday – Saturday
              <br />
              {location.hours.fridaySaturday}
            </p>

          </div>

        </div>


        {/* Google Map */}

        <div className="location-map">

          <iframe
            title="Steamboat Bill's location"
            src="https://www.google.com/maps?q=1004+North+Lakeshore+Dr,+Lake+Charles,+LA&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Location;