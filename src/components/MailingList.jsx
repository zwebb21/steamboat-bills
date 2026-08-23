import siteContent from "../data/siteContent";

function MailingList() {
  const { mailingList } = siteContent;

  return (
    <section className="mailing-list">
      <div className="container mailing-list-inner">

        <p className="section-eyebrow">
          Stay Connected
        </p>

        <h2>{mailingList.title}</h2>

        <p>
          {mailingList.description}
        </p>

        <a
          href={mailingList.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Subscribe Now
        </a>

      </div>
    </section>
  );
}

export default MailingList;