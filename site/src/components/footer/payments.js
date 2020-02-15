import PropTypes from "prop-types"
import React from "react"

const Payments = () => (
  <div className="payments">
    <div className="payments_wrap">
      <div className="payments_wrap-item">
        <span>Политика конфиденциальности</span>
        <p>Платежные системы</p>
      </div>
      <div className="payments_wrap-item_inner">
        <div className="payments_wrap-item_inner-icon visa">
          <img src={'payments/visa.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon paypal">
          <img src={'payments/paypal.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon mastercard">
          <img src={'payments/mastercard.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon maestro">
          <img src={'payments/maestro.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon ebay">
          <img src={'payments/ebay.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon apple">
          <img src={'payments/apple.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon google">
          <img src={'payments/google.svg'} alt=""/>
        </div>
        <div className="payments_wrap-item_inner-icon webmoney">
          <img src={'payments/webmoney.svg'} alt=""/>
        </div>
      </div>
    </div>
  </div>
)

Payments.propTypes = {
  siteTitle: PropTypes.string,
}

Payments.defaultProps = {
  siteTitle: ``,
}

export default Payments