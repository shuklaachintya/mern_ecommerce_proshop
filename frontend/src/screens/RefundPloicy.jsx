import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1>Returns & Refunds policy</h1>
              <p>
                You are entitled to cancel your order within 30 days without
                giving any reason for doing so.
              </p>

              <p>
                The deadline for canceling an order is 30 days from the date you
                received the goods or on which a third party you have appointed,
                who is not the carrier, takes possession of the product
                delivered.
              </p>

              <p>
                In order to exercise your right of cancellation, you must inform
                us of your decision by means of a clear statement.
              </p>

              <p>
                You can inform us of your decision by e-mail
                achintya@minovateck.com
              </p>

              <p>
                We will reimburse you no later than 30 days from the day on
                which we receive the returned goods. We will use the same means
                of payment as you used for the order, and you will not incur any
                fees for such reimbursement.
              </p>

              <h3>Conditions for returns:</h3>
              <p>
                In order for the goods to be elgible for a return, please make
                sure that:
              </p>

              <p>The goods were purchased in the last 30 days</p>

              <p>The goods are in the original packaging</p>

              <p>The following goods cannot be returned:</p>

              <p>
                The supply of goods made to your specifications or clearly
                personalized.
              </p>

              <p>
                The supply of goods which according to their nature are not
                suitable to be returned, for example goods which deteriorate
                rapidly or where the date of expiry is over.
              </p>

              <p>
                The supply of goods which are not suitable for return due to
                health protection or hygiene reasons and were unsealed after
                delivery.
              </p>

              <p>
                The supply of goods which are, after delivery, according to
                their nature, inseparably mixed with other items.
              </p>

              <p>
                We reserve the right to refuse returns of any merchandise that
                does not meet the above return conditions at our sole
                discretion.
              </p>

              <h3>Returning Goods</h3>
              <p>
                You are responsible for the cost and risk of returning the goods
                to us. You should send the goods to the following address:
              </p>

              <p>Sector - 1, Greater Noida West, 201306</p>

              <p>
                We cannot be held responsible for goods damaged or lost in
                return shipment. Therefore, we recommend an insured and
                trackable mail service. We are unable to issue a refund without
                actual receipt of the goods or proof of received return
                delivery.
              </p>

              <h3>Gifts:</h3>
              <p>
                If the goods were marked as a gift when purchased and then
                shipped directly to you, you'll receive a gift credit for the
                value of your return. Once the returned product is received, a
                gift certificate will be mailed to you.
              </p>

              <p>
                If the goods weren't marked as a gift when purchased, or the
                gift giver had the order shipped to themselves to give it to you
                later, We will send the refund to the gift giver.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about our Returns and Refunds Policy,
                please contact us by e-mail achintya@minovateck.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;
