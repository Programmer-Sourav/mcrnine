import "../card2.css";
import "font-awesome/css/font-awesome.min.css";

export default function ProductCard() {
  return (
    <div class="cardtwo">
      <div class="wishlist-icon">
        <i class="fas fa-heart"></i>
      </div>
      <img
        src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff"
        alt="download"
      />
      <div class="cardtwo-details">
        <h2>Product Title</h2>
        <p>Product Description</p>
        <button>Buy Now!</button>
      </div>
    </div>
  );
}
