import React from "react";
import "./certificate.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/certificates";
import CertificateCard from "./certificate-card";
function Certificate() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Certificate</label>
      <div className="work-list">
        {data.map((item, index) => {
          return <CertificateCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Certificate;