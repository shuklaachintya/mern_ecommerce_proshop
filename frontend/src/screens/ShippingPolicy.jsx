import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shippingg Pplicy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1>Shipping Policy</h1>

              <p>
                Welcome to CreativeShoppingHub, your trusted online destination
                for innovative and creative products. Our shipping policy
                outlines the terms and conditions for delivering your orders
                promptly and efficiently.
              </p>

              <h3>1. General Information</h3>
              <p>
                We deliver across India, ensuring that customers from every
                corner of the country can enjoy our products.
              </p>
              <p>
                Our standard delivery partners include reputed courier services
                to ensure fast and safe delivery.
              </p>

              <h3>2. Order Processing Time</h3>
              <p>
                All orders are processed within 1-2 business days after
                successful payment confirmation.
              </p>
              <p>
                Orders placed on weekends or public holidays will be processed
                on the next working day.
              </p>

              <h3>3. Shipping Charges</h3>
              <p>
                Standard Delivery: ₹50 for orders below ₹500. Free shipping on
                orders above ₹500.
              </p>
              <p>
                Express Delivery: ₹100 for orders below ₹1,000. ₹50 for orders
                above ₹1,000.
              </p>

              <h3>4. Delivery Timeline</h3>
              <p>
                Standard Delivery: Typically delivered within 5-7 business days.
              </p>
              <p>
                Express Delivery: Typically delivered within 2-4 business days.
              </p>
              <p>
                Delivery times may vary depending on your location and external
                factors such as weather conditions or courier delays.
              </p>

              <h3>5. Tracking Your Order</h3>
              <p>
                Once your order is shipped, you will receive a tracking number
                via email or SMS.
              </p>
              <p>
                You can track your shipment status on our website or through the
                courier partner’s portal using the provided tracking ID.
              </p>

              <h3>6. Delivery Areas</h3>
              <p>We deliver to all serviceable pin codes across India.</p>
              <p>
                If your area is non-serviceable or remote, we will notify you
                promptly and provide alternative delivery solutions.
              </p>

              <h3>7. Order Delays</h3>
              <p>
                While we strive for timely deliveries, there may be unexpected
                delays due to:
              </p>
              <p>Natural calamities.</p>
              <p>Strikes or logistical disruptions.</p>
              <p>Address issues (incorrect or incomplete information).</p>
              <p>
                If there’s a delay, our customer support team will proactively
                inform you and provide updates.
              </p>

              <h3>8. Unsuccessful Deliveries</h3>
              <p>
                If the delivery fails due to incorrect address or unavailability
                of the recipient, the courier will attempt re-delivery.
              </p>
              <p>
                After two unsuccessful attempts, the package will be returned to
                our warehouse. Customers will need to pay additional shipping
                fees for re-dispatch.
              </p>

              <h3>9. International Shipping</h3>
              <p>Currently, we do not offer international shipping.</p>

              <h3>10. Damaged or Missing Items</h3>
              <p>
                If your order arrives damaged or with missing items, please
                notify us within 48 hours of receipt with photographic evidence.
              </p>
              <p>
                We will verify the claim and provide a replacement or refund as
                appropriate.
              </p>

              <h3>11. Shipping Modifications</h3>
              <p>Once shipped, orders cannot be modified.</p>
              <p>
                If you need to change your address before shipping, contact our
                customer support team immediately.
              </p>

              <h3>12. Contact Information</h3>
              <p>For any shipping-related queries, feel free to contact us:</p>

              <p>Email: achintya@minovateck.com</p>
              <p>Phone: +91-9711764346</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
