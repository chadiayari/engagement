import React, { useState, useEffect } from "react";
import { User, Search, Heart, Phone, Mail, Check } from "lucide-react";

// Define types
type Person = {
  name: string;
  image: string;
};

type Attendee = {
  name: string;
  image: string;
  partner?: string;
  partnerImage?: string;
  email: string;
  phone: string;
  hasPartner: boolean;
};

const EngagementRSVPForm = () => {
  // List of name suggestions with images
  const nameSuggestions: Person[] = [
    { name: "Ghayth", image: "/images/ghayth.jpg" },
    { name: "Noemie", image: "/images/noemie.jpg" },
    { name: "Rabie", image: "/images/rabie.jpg" },
    { name: "Faten", image: "/images/faten.jpg" },
    { name: "Aziz", image: "/images/aziz.jpg" },
    { name: "Nouisser", image: "/images/nouisser.jpg" },
    { name: "Rami", image: "/images/rami.jpg" },
    { name: "Aicha", image: "/images/aicha.jpg" },
    { name: "Gamouda", image: "/images/gamouda.jpg" },
    { name: "Iheb", image: "/images/iheb.jpg" },
    { name: "Ferjani", image: "/images/ferjani.jpg" },
    { name: "Amed", image: "/images/amed.jpg" },
    { name: "bel arbi", image: "/images/belarbi.jpg" },
    { name: "Jiji", image: "/images/jiji.jpg" },
    { name: "Chormadh", image: "/images/chormadh.jpg" },
    { name: "Hali", image: "/images/hali.jpg" },
    { name: "Adam", image: "/images/adam.jpg" },
    { name: "Nour", image: "/images/nour.jpg" },
    { name: "aouidi", image: "/images/aouidi.jpg" },
    { name: "Maryem", image: "/images/maryem.jpg" },
    { name: "Zidi", image: "/images/zidi.jpg" },
    { name: "Manar", image: "/images/manar.jpg" },
    { name: "Hedi", image: "/images/hedi.jpg" },
    { name: "Ben Fraj", image: "/images/benfraj.jpg" },
    { name: "Eya", image: "/images/eya.jpg" },
    { name: "Abbassi", image: "/images/abbassi.jpg" },
    { name: "Aziz", image: "/images/aziz2.jpg" },
    { name: "Bouchrit", image: "/images/bouchrit.jpg" },
  ];

  // Form state
  const [formData, setFormData] = useState<Attendee>({
    name: "",
    image: "",
    partner: "",
    partnerImage: "",
    email: "",
    phone: "",
    hasPartner: false,
  });

  // Suggestions state
  const [nameFilteredSuggestions, setNameFilteredSuggestions] = useState<
    Person[]
  >([]);
  const [partnerFilteredSuggestions, setPartnerFilteredSuggestions] = useState<
    Person[]
  >([]);
  const [showNameSuggestions, setShowNameSuggestions] = useState(false);
  const [showPartnerSuggestions, setShowPartnerSuggestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Filter name suggestions based on input
  useEffect(() => {
    if (formData.name.trim() === "") {
      setNameFilteredSuggestions([]);
      setShowNameSuggestions(false);
      return;
    }

    const filteredNames = nameSuggestions.filter((person) =>
      person.name.toLowerCase().includes(formData.name.toLowerCase())
    );
    setNameFilteredSuggestions(filteredNames);
    setShowNameSuggestions(true);
  }, [formData.name]);

  // Filter partner suggestions based on input
  useEffect(() => {
    if (!formData.partner || formData.partner.trim() === "") {
      setPartnerFilteredSuggestions([]);
      setShowPartnerSuggestions(false);
      return;
    }

    const filteredPartners = nameSuggestions.filter((person) =>
      person.name.toLowerCase().includes(formData.partner!.toLowerCase())
    );
    setPartnerFilteredSuggestions(filteredPartners);
    setShowPartnerSuggestions(true);
  }, [formData.partner]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle toggle for partner
  const handleTogglePartner = () => {
    setFormData((prev) => ({
      ...prev,
      hasPartner: !prev.hasPartner,
      partner: "",
      partnerImage: "",
    }));
  };

  // Handle suggestion selection
  const handleSelectNameSuggestion = (suggestion: Person) => {
    setFormData((prev) => ({
      ...prev,
      name: suggestion.name,
      image: suggestion.image,
    }));
    setShowNameSuggestions(false);
  };

  const handleSelectPartnerSuggestion = (suggestion: Person) => {
    setFormData((prev) => ({
      ...prev,
      partner: suggestion.name,
      partnerImage: suggestion.image,
    }));
    setShowPartnerSuggestions(false);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length === 1) return name.substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  // Avatar component with image or fallback
  const Avatar = ({ name, imagePath }: { name: string; imagePath: string }) => {
    // For demonstration purposes using placeholder images since the real images would be uploaded
    const placeholderUrl = "/api/placeholder/100/100";

    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
        {imagePath ? (
          <img
            src={placeholderUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white font-medium">
            {getInitials(name)}
          </div>
        )}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white">
            <Check className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>

          <div className="flex justify-center items-center mb-4 gap-4">
            <div className="flex flex-col items-center">
              <Avatar name={formData.name} imagePath={formData.image} />
              <span className="mt-2 text-sm font-medium">{formData.name}</span>
            </div>

            {formData.hasPartner && formData.partner && (
              <>
                <Heart className="text-gray-500" size={24} />
                <div className="flex flex-col items-center">
                  <Avatar
                    name={formData.partner}
                    imagePath={formData.partnerImage || ""}
                  />
                  <span className="mt-2 text-sm font-medium">
                    {formData.partner}
                  </span>
                </div>
              </>
            )}
          </div>

          <p className="text-gray-700 mb-4">
            We're excited to see you at our engagement party!
          </p>
          <p className="text-sm text-gray-500">
            A confirmation has been sent to {formData.email}
          </p>
          <button
            onClick={() => {
              setFormData({
                name: "",
                image: "",
                partner: "",
                partnerImage: "",
                email: "",
                phone: "",
                hasPartner: false,
              });
              setSubmitted(false);
            }}
            className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Submit Another RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Engagement Party</h1>
        <p className="text-gray-600 mt-2">
          Please RSVP by filling out this form
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Input with Suggestions */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <div className="flex items-center gap-2">
            {formData.image ? (
              <Avatar name={formData.name} imagePath={formData.image} />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" />
              </div>
            )}
            <div className="relative flex-grow">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {showNameSuggestions && nameFilteredSuggestions.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {nameFilteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleSelectNameSuggestion(suggestion)}
                >
                  <Avatar name={suggestion.name} imagePath={suggestion.image} />
                  <span className="ml-3">{suggestion.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Partner Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 flex items-center">
            <Heart className="w-4 h-4 mr-2 text-gray-500" />
            {formData.hasPartner ? "Coming with a partner" : "Flying solo?"}
          </label>
          <button
            type="button"
            onClick={handleTogglePartner}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.hasPartner ? "bg-black" : "bg-gray-300"}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.hasPartner ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>

        {/* Partner Name Input (Conditional) */}
        {formData.hasPartner && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Partner's Name
            </label>
            <div className="flex items-center gap-2">
              {formData.partnerImage ? (
                <Avatar
                  name={formData.partner || ""}
                  imagePath={formData.partnerImage}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
              )}
              <div className="relative flex-grow">
                <input
                  type="text"
                  name="partner"
                  value={formData.partner}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter partner's name"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {showPartnerSuggestions &&
              partnerFilteredSuggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {partnerFilteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleSelectPartnerSuggestion(suggestion)}
                    >
                      <Avatar
                        name={suggestion.name}
                        imagePath={suggestion.image}
                      />
                      <span className="ml-3">{suggestion.name}</span>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        )}

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </div>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Phone Number
            </div>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          RSVP
        </button>
      </div>
    </div>
  );
};

export default EngagementRSVPForm;
