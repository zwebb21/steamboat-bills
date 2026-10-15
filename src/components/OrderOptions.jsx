function OrderOptions() {
    return (
      <section className="order-options">
        <div className="container order-options-inner">

          <div className="order-option">
            <p className="section-eyebrow">
              Prefer To Call?
            </p>

            <h2>Call To Order</h2>

            <p>
              Speak with our team and place your order by phone.
            </p>

            <a
              href="tel:3374941070"
              className="button"
            >
              Call 337-494-1070
            </a>
          </div>

          <div className="order-option">
            <p className="section-eyebrow">
              Order Online
            </p>

            <h2>Order Online</h2>

            <p>
              Place your order online and enjoy Steamboat Bill's
              wherever you are.
            </p>

            <a
              href="https://order.online/business/11291629/store/712727?utm_source=chatgpt.com&pickup=true&redirected=true"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online →
            </a>
          </div>

        </div>
      </section>
    );
  }

  export default OrderOptions;
