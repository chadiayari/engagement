import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Reflexology.scss";

const beverageMatches = {
  vodka: "🍈 Melons",
  whiskey: "🧀 Cheese board",
  jagermeister: "🍫 Dark chocolate",
  wine: "🍇 Grapes & 🧀 Brie",
  whitewine: "🍇 Grapes & 🧀 Brie",
  beer: "🍕 Pizza",
  rum: "🍍 Pineapple",
  tequila: "🍋 Lime & salt",
  gin: "🥒 Cucumber",
  champagne: "🍓 Strawberries",
};

export default function EngagementPartyForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [willDrink, setWillDrink] = useState(null);
  const [selectedBeverage, setSelectedBeverage] = useState(null);
  const [error, setError] = useState("");

  let titleFooterRef = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(titleFooterRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        y: -150,
        perspective: 200,
      });
      gsap.to(titleFooterRef.current, {
        y: 0,
        perspective: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: titleFooterRef.current,
          start: "top 40%",
          id: "titleFooter",
          end: "bottom 0%",
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("titleFooter")?.kill();
      ctx.revert();
    };
  }, []);

  const handleNextStep = () => {
    if (step === 1 && (!name || !phone)) {
      setError("Please enter both name and phone number");
      return;
    }
    if (step === 3 && willDrink === false) {
      setError("Wrong choice");
      return;
    }
    if (step === 4 && !selectedBeverage) {
      setError("Please select a beverage");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    setError("");
  };

  const addToCalendar = () => {
    const startDate = new Date("2025-09-20T15:00:00");
    const endDate = new Date("2025-09-20T00:00:00");

    const calendarData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${startDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}`,
      `DTEND:${endDate
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}`,
      "SUMMARY:Engagement Party",
      "DESCRIPTION:Chadi & Souha's engagement party!",
      "LOCATION:https://maps.app.goo.gl/2bRvoZVvmsKiXNG3A",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([calendarData], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "engagement-party.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="#form"
      ref={scopeRef}
      className="contianer-fluid footer_reflexology"
    >
      <div className="row">
        <div className="col-12">
          <div className="wrapper_title_footer">
            <p className="next_page">ENGAGEMENT PARTY RSVP</p>

            <div className="form-container">
              {step === 1 && (
                <div className="form-step">
                  <h2 ref={titleFooterRef} className="title_footer">
                    Your details
                  </h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <p className="dates">Date: September 20, 2025</p>
                  <p className="dates">Time: 7:00 PM</p>
                  <a
                    href="https://maps.app.goo.gl/2bRvoZVvmsKiXNG3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    View Location on Map
                  </a>
                  <button onClick={addToCalendar} className="calendar-button">
                    Add to Calendar
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <h2 className="dates">Will you be drinking?</h2>
                  <div className="option-buttons">
                    <button
                      className={`calendar-button ${
                        willDrink === true ? "selected" : ""
                      }`}
                      onClick={() => setWillDrink(true)}
                    >
                      Yes
                    </button>
                    <button
                      className={`calendar-button ${
                        willDrink === false ? "selected" : ""
                      }`}
                      onClick={() => setWillDrink(false)}
                    >
                      No
                    </button>
                  </div>
                  {error && <p className="error-message">{error}</p>}
                </div>
              )}

              {step === 4 && (
                <div className="form-step">
                  <h2 className="dates">Choose Your Beverage</h2>
                  <div className="beverage-options">
                    {Object.keys(beverageMatches).map((beverage) => (
                      <div
                        key={beverage}
                        className={`beverage-option ${
                          selectedBeverage === beverage ? "selected" : ""
                        }`}
                        onClick={() => setSelectedBeverage(beverage)}
                      >
                        {beverage.charAt(0).toUpperCase() + beverage.slice(1)}
                      </div>
                    ))}
                  </div>
                  {error && <p className="error-message">{error}</p>}
                </div>
              )}

              {step === 5 && (
                <div className="form-step">
                  <h2 className="dates">Perfect Match!</h2>

                  <p className="dates">
                    Don't forget to bring {beverageMatches[selectedBeverage]}{" "}
                    along with{" "}
                    {selectedBeverage.charAt(0).toUpperCase() +
                      selectedBeverage.slice(1)}
                  </p>
                  <p className="dates"></p>
                  <h3 className="dates">See you!</h3>
                </div>
              )}

              <div className="form-navigation">
                {step > 1 && step < 5 && (
                  <button onClick={handlePrevStep} className="nav-button prev">
                    Back
                  </button>
                )}
                {step < 5 ? (
                  <button onClick={handleNextStep} className="nav-button">
                    {step === 4 ? "Submit" : "Next"}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
