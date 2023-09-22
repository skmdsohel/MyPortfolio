import React from "react";
import "./certificate-card.css";
function CertificateCard({ item }) {
  return (
    <a
      className="work-card"
      href={item.certificate}
      target="_blank"
      rel="noreferrer"
    >
      <img alt="" src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.course}</label>
        <div className="work-dates">
          <label>{item.company}</label>
        </div>
        <div className="work-desc">
          <p>{shortText(item.work, 75)}</p>
        </div>
      </div>
    </a>
  );
}

function shortText(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export default CertificateCard;