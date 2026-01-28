import "./FloatingCart.css";
import { useState } from "react";

import MiniTopBar from "./MiniTopBar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";


function FloatingCart({ open, items, step, setStep, onClose, onRemove }) {


  const VISIT_CHARGE = 199;

  const totalServicePrice = items.reduce((sum, item) => sum + item.price, 0);

  const grandTotal = totalServicePrice + VISIT_CHARGE;

  
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    fullAddress: "",
    city: "",
    pincode: "",
  });

  const isAddressValid =
    address.name &&
    /^\d{10}$/.test(address.phone) &&
    address.fullAddress &&
    address.city &&
    /^\d{6}$/.test(address.pincode);

  if (!open) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-panel large">
        <button className="close-btn" onClick={onClose}>
          <IoMdArrowRoundBack size={22} />
        </button>

        {/* STEPS */}
        <div className="cart-steps">
          <span className={step === 0 ? "active" : step > 0 ? "done" : ""}>
            BAG
          </span>
          <span className={step === 1 ? "active" : step > 1 ? "done" : ""}>
            ADDRESS
          </span>
          <span className={step === 2 ? "active" : ""}>PAYMENT</span>
        </div>

        {/* CONTENT */}
        <div className="cart-content">
          {/* STEP 0 */}
          {step === 0 && (
            <>
              {items.length === 0 ? (
                <div className="empty-cart">
                  <h3>Your cart is empty</h3>
                  <p>Add services to continue</p>
                </div>
              ) : (
                <>
                  {/* SERVICES LIST */}
                  {items.map((item, i) => (
                    <div key={i} className="cart-item">
                      <div className="cart-item-info">
                        <strong>{item.name}</strong>
                        <p>₹{item.price}</p>
                      </div>

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => onRemove(i)}
                        aria-label="Remove service"
                      >
                        <IoIosCloseCircleOutline size={20} />
                      </button>
                    </div>
                  ))}

                  {/* FINAL SUMMARY – ONLY ONCE */}
                  <div className="cart-summary">
                    <p>
                      Services Total: <span>₹{totalServicePrice}</span>
                    </p>
                    <p>
                      Visit Charge: <span>₹{VISIT_CHARGE}</span>
                    </p>

                    <hr />

                    <strong>
                      Total Payable: <span>₹{grandTotal}</span>
                    </strong>
                  </div>

                  <button className="primary-btn" onClick={() => setStep(1)}>
                    Place Order
                  </button>
                </>
              )}
            </>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3>Service Address</h3>

              <button className="secondary-btn" onClick={() => setStep(0)}>
                ← Back to Bag
              </button>

              <input
                placeholder="Full Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />

              <input
                placeholder="Mobile Number"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />

              <input
                placeholder="Full Address"
                value={address.fullAddress}
                onChange={(e) =>
                  setAddress({ ...address, fullAddress: e.target.value })
                }
              />

              <input
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />

              <input
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
              />

              <button
                className="primary-btn"
                disabled={!isAddressValid}
                onClick={() => setStep(2)}
              >
                Continue
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h3>Payment</h3>

              <button className="secondary-btn" onClick={() => setStep(1)}>
                ← Change Address
              </button>

              <p>
                <strong>Visit Charge:</strong> ₹199 <br />
                (Pay now to confirm booking)
              </p>

              <label className="radio">
                <input type="radio" checked readOnly />
                Pay ₹199 now (Visit Charge)
              </label>

              <button
                className="primary-btn"
                onClick={() => alert("₹199 paid, booking confirmed")}
              >
                Pay ₹199 & Confirm
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FloatingCart;
