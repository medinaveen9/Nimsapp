import { useState } from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Section11 = () => {
  const [documents, setDocuments] = useState("");
  const [enclosure1, setEnclosure1] = useState("");
  const [remarks1, setRemarks1] = useState("");

  const [investigator, setInvestigator] = useState("");
  const [enclosure2, setEnclosure2] = useState("");
  const [remarks2, setRemarks2] = useState("");

  const [clinic, setClinic] = useState("");
  const [enclosure3, setEnclosure3] = useState("");
  const [remarks3, setRemarks3] = useState("");

  const [clearance, setClearance] = useState("");
  const [enclosure4, setEnclosure4] = useState("");
  const [remarks4, setRemarks4] = useState("");

  const [partners, setPartners] = useState("");
  const [enclosure5, setEnclosure5] = useState("");
  const [remarks5, setRemarks5] = useState("");

  const [protocol, setProtocol] = useState("");
  const [enclosure6, setEnclosure6] = useState("");
  const [remarks6, setRemarks6] = useState("");

  const [translate, setTranslate] = useState("");
  const [enclosure7, setEnclosure7] = useState("");
  const [remarks7, setRemarks7] = useState("");

  const [minors, setMinors] = useState("");
  const [enclosure8, setEnclosure8] = useState("");
  const [remarks8, setRemarks8] = useState("");

  const [proforma, setProforma] = useState("");
  const [enclosure10, setEnclosure10] = useState("");
  const [remarks10, setRemarks10] = useState("");

  const [advertise, setAdvertise] = useState("");
  const [enclosure11, setEnclosure11] = useState("");
  const [remarks11, setRemarks11] = useState("");

  const [insurance, setInsurance] = useState("");
  const [enclosure12, setEnclosure12] = useState("");
  const [remarks12, setRemarks12] = useState("");

  const navigate = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const userResponse = await axios.post(
        "http://localhost:5001/administrative_requirements",
        {
          documents,
          enclosure1,
          remarks1,
          investigator,
          enclosure2,
          remarks2,
          clinic,
          enclosure3,
          remarks3,
          clearance,
          enclosure4,
          remarks4,
          partners,
          enclosure5,
          remarks5,
          protocol,
          enclosure6,
          remarks6,
          translate,
          enclosure7,
          remarks7,
          minors,
          enclosure8,
          remarks8,
          proforma,
          enclosure10,
          remarks10,
          advertise,
          enclosure11,
          remarks11,
          insurance,
          enclosure12,
          remarks12,
        }
      );
      console.log("Form data submitted:", {
        documents,
        enclosure1,
        remarks1,
        investigator,
        enclosure2,
        remarks2,
        clinic,
        enclosure3,
        remarks3,
        clearance,
        enclosure4,
        remarks4,
        partners,
        enclosure5,
        remarks5,
        protocol,
        enclosure6,
        remarks6,
        translate,
        enclosure7,
        remarks7,
        minors,
        enclosure8,
        remarks8,
        proforma,
        enclosure10,
        remarks10,
        advertise,
        enclosure11,
        remarks11,
        insurance,
        enclosure12,
        remarks12,
      });
      const id = userResponse.data.id;
      console.log("User created:", userResponse.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="form-container">
      <h1 className="h2">12.CHECKLIST</h1>
      <h1 className="h2">ADMINSTRATIVE REQUIREMENTS</h1>

      <form onSubmit={Submit}>
        <div className="h">
          <h5 className="h">
            1.Cover letter enlisting all documents enclosed{" "}
          </h5>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="documents"
                value="Yes"
                checked={documents === "Yes"}
                onChange={(e) => setDocuments(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="documents"
                value="No"
                checked={documents === "No"}
                onChange={(e) => setDocuments(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="documents"
                value="NA"
                checked={documents === "NA"}
                onChange={(e) => setDocuments(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h5 className="custom-text">Enclosure no:</h5>
                <label>
                  <input
                    type="number"
                    name="Enclosure1"
                    placeholder="Enclosure1"
                    value={enclosure1}
                    onChange={(e) => setEnclosure1(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h5 className="custom-text">EC Remarks(Ifapplicable)</h5>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks1}
                  onChange={(e) => setRemarks1(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 2 */}

          <h3 className="h">
            2.Brief CV of all Investigators (updated, signed and dated){" "}
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="updated"
                value="Yes"
                checked={investigator === "Yes"}
                onChange={(e) => setInvestigator(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="updated"
                value="No"
                checked={investigator === "No"}
                onChange={(e) => setInvestigator(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="updated"
                value="NA"
                checked={investigator === "NA"}
                onChange={(e) => setInvestigator(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure2}
                    onChange={(e) => setEnclosure2(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks2}
                  onChange={(e) => setRemarks2(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 3 */}

          <h3 className="h">
            3.Good Clinical Practice (GCP) training of investigators in last 3
            years{" "}
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="clinic"
                value="Yes"
                checked={clinic === "Yes"}
                onChange={(e) => setClinic(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="clinic"
                value="No"
                checked={clinic === "No"}
                onChange={(e) => setClinic(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="clinic"
                value="NA"
                checked={clinic === "NA"}
                onChange={(e) => setClinic(e.target.value)}
              />{" "}
              NA
            </label>
            <div className="form-row">
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure3}
                    onChange={(e) => setEnclosure3(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                  {""}
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks3"
                  value={remarks3}
                  onChange={(e) => setRemarks3(e.target.value)}
                  className="custom-title"
                  required
                />
                {""}
              </label>
            </div>
          </div>

          {/* 4 */}
          <h3 className="h">4.EC clearance of other centers</h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="clearance"
                value="Yes"
                checked={clearance === "Yes"}
                onChange={(e) => setClearance(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="clearance"
                value="No"
                checked={clearance === "No"}
                onChange={(e) => setClearance(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="clearance"
                value="NA"
                checked={clearance === "NA"}
                onChange={(e) => setClearance(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure4}
                    onChange={(e) => setEnclosure4(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks4}
                  onChange={(e) => setRemarks4(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 5 */}
          <h3 className="h">5.MOU between collaborating partners</h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="partners"
                value="Yes"
                checked={partners === "Yes"}
                onChange={(e) => setPartners(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="partners"
                value="No"
                checked={partners === "No"}
                onChange={(e) => setPartners(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="partner"
                value="NA"
                checked={partners === "NA"}
                onChange={(e) => setPartners(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure5}
                    onChange={(e) => setEnclosure5(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks5}
                  onChange={(e) => setRemarks5(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 6 */}
          <h1 className="h2">PROPOSAL RELATED </h1>

          <h3 className="h">
            6.Copy of the detailed protocol (clearly identified numbered and
            dated) and synopsis (summary as far as possible in non-technical
            language, flowchart, diagrammatic representation of the protocol)
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="protocol"
                value="Yes"
                checked={protocol === "Yes"}
                onChange={(e) => setProtocol(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="protocol"
                value="No"
                checked={protocol === "No"}
                onChange={(e) => setProtocol(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="partner"
                value="NA"
                checked={protocol === "NA"}
                onChange={(e) => setProtocol(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure6}
                    onChange={(e) => setEnclosure6(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks6}
                  onChange={(e) => setRemarks6(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 7 */}

          <h3 className="h">
            7.Participant Information Sheet (PIS) and Informed Consent Form
            (ICF) (English and translated) with version number and dated
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="translate"
                value="Yes"
                checked={translate === "Yes"}
                onChange={(e) => setTranslate(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="translate"
                value="No"
                checked={translate === "No"}
                onChange={(e) => setTranslate(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="translate"
                value="NA"
                checked={translate === "NA"}
                onChange={(e) => setTranslate(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure7}
                    onChange={(e) => setEnclosure7(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks7}
                  onChange={(e) => setRemarks7(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          {/* 8 */}

          <h3 className="h">
            8.Assent form for minors (12-18 years) (English and Translated)
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="minor"
                value="Yes"
                checked={minors === "Yes"}
                onChange={(e) => setMinors(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="minor"
                value="No"
                checked={minors === "No"}
                onChange={(e) => setMinors(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="minor"
                value="NA"
                checked={minors === "NA"}
                onChange={(e) => setMinors(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure8}
                    onChange={(e) => setEnclosure8(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks8}
                  onChange={(e) => setRemarks8(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          <h3 className="h">
            9.Application for waiver of consent if applicable
          </h3>

          {/* 10 */}

          <h3 className="h">
            10.Proforma / Questionnaire / Case Report Forms (CRF) / Interview
            guides / Guides for Focused Group Discussions (FGDs) (English and
            translated) which are numbered and dated
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="proforma"
                value="Yes"
                checked={proforma === "Yes"}
                onChange={(e) => setProforma(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="proforma"
                value="No"
                checked={proforma === "No"}
                onChange={(e) => setProforma(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="proforma"
                value="NA"
                checked={proforma === "NA"}
                onChange={(e) => setProforma(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure10}
                    onChange={(e) => setEnclosure10(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks10}
                  onChange={(e) => setRemarks10(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          <h3 className="h">
            11.Advertisement / material to recruit participants (fliers,
            posters, etc.)
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="advertise"
                value="Yes"
                checked={advertise === "Yes"}
                onChange={(e) => setAdvertise(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="advertise"
                value="No"
                checked={advertise === "No"}
                onChange={(e) => setAdvertise(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="advertise"
                value="NA"
                checked={advertise === "NA"}
                onChange={(e) => setAdvertise(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure11}
                    onChange={(e) => setEnclosure11(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks11}
                  onChange={(e) => setRemarks11(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>

          <h3 className="h">
            12.Insurance policy / A description of arrangement for insurance
            coverage for research participants, if applicable
          </h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="insurance"
                value="Yes"
                checked={insurance === "Yes"}
                onChange={(e) => setInsurance(e.target.value)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="insurance"
                value="No"
                checked={insurance === "No"}
                onChange={(e) => setInsurance(e.target.value)}
              />{" "}
              No
            </label>

            <label>
              <input
                type="radio"
                name="insurance"
                value="NA"
                checked={insurance === "NA"}
                onChange={(e) => setInsurance(e.target.value)}
              />{" "}
              NA
            </label>
            <div>
              <div className="form-group">
                <h2 className="custom-text">Enclosure no:</h2>
                <label>
                  <input
                    type="number"
                    placeholder="number"
                    value={enclosure12}
                    onChange={(e) => setEnclosure12(Number(e.target.value))}
                    className="custom-input"
                    required
                  />
                </label>
              </div>
            </div>
            <br></br>

            <div className="form-group">
              <h2 className="custom-text">EC Remarks(Ifapplicable)</h2>
              <label>
                <input
                  type="text"
                  placeholder="Remarks"
                  value={remarks12}
                  onChange={(e) => setRemarks12(e.target.value)}
                  className="custom-title"
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Section11;
