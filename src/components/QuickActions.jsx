import siteContent from "../data/siteContent";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <section className="quick-actions">
      <div className="container quick-actions-grid">

        {siteContent.quickActions.map((action) => {
          const isPhone = action.link.startsWith("tel:");
          const isExternal = action.link.startsWith("http");

          return (
            <article className="quick-action" key={action.title}>

              <h3>{action.title}</h3>

              <p>{action.description}</p>

              {isPhone || isExternal ? (
                <a
                  href={action.link}
                  className="text-link"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {action.title} →
                </a>
              ) : (
                <Link
                  to={action.link}
                  className="text-link"
                >
                  {action.title} →
                </Link>
              )}

            </article>
          );
        })}

      </div>
    </section>
  );
}

export default QuickActions;