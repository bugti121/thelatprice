/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="donation">
        <p>Donate here:</p>
        <a href="https://kangaroosanctuary.com/donate/">https://kangaroosanctuary.com/donate/</a>
      </div>
      <br />
      <div className="donation">
        <p>As Seen On:</p>
        <a target='_blank' href="https://nftcalendar.io/">
          <div className="icon">
            <img style={{width: 100+'px'}} src="/media/images/calender.png" alt="opensea icon" />
          </div>
        </a>
      </div>
      <div className="icons">
        <a href="https://twitter.com/kangkultureNFT">
          <div className="icon">
            <img src="/media/images/twitter.png" alt="twitter icon" />
          </div>
        </a>
        <a href="mailto:info@kangarookulture.io">
          <div className="icon">
            <img src="/media/images/email.png" alt="email icon" />
          </div>
        </a>
        <a href="https://opensea.io/collection/kangaroo-kulture">
          <div className="icon">
            <img src="/media/images/opensea.png" alt="opensea icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
