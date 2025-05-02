// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Add your real approved template SIDs here
// const approvedTemplates = [
//   { name: "Greeting", sid: "HX6d390d03277d0e2612cfdf34dc98f73c" },
//   // Add more { name, sid } pairs
// ];

// const WhatsAppSender = () => {
//   const [numbers, setNumbers] = useState("");
//   const [adminKey, setAdminKey] = useState("");
//   const [selectedSid, setSelectedSid] = useState(approvedTemplates[0]?.sid || "");
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("isAdmin") !== "true") {
//       window.location.href = "/";
//     }
//   }, []);

//   const sendMessage = async () => {
//     const toArray = numbers
//       .split(",")
//       .map(num => `+91${num.trim().replace(/^(\+91)?/, "")}`); // Ensures only +91 prefix

//     try {
//       const res = await axios.post("http://localhost:5000/send-template", {
//         to: toArray,
//         contentSid: selectedSid,
//         adminKey,
//       });
//       setMsg("✅ Messages sent successfully!");
//     } catch (err) {
//       setMsg("❌ " + (err.response?.data?.message || "Something went wrong"));
//     }
//   };

//   return (
//     <div className="max-w-md p-6 bg-white border rounded shadow my-36 mx-auto">
//       <h2 className="text-xl font-bold mb-4">Admin WhatsApp Sender</h2>

//       <input
//         type="text"
//         placeholder="Enter WhatsApp numbers (comma-separated, without +91)"
//         className="w-full p-2 border mb-3"
//         autoComplete="off"
//         value={numbers}
//         onChange={(e) => setNumbers(e.target.value)}
//       />

//       <select
//         className="w-full p-2 border mb-3"
//         value={selectedSid}
//         onChange={(e) => setSelectedSid(e.target.value)}
//       >
//         {approvedTemplates.map((t, i) => (
//           <option key={i} value={t.sid}>{t.name}</option>
//         ))}
//       </select>

//       <input
//         type="password"
//         placeholder="Enter Admin Key"
//         className="w-full p-2 border mb-3"
//         autoComplete="off"
//         value={adminKey}
//         onChange={(e) => setAdminKey(e.target.value)}
//       />

//       <button
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         onClick={sendMessage}
//       >
//         Send Message
//       </button>

//       {msg && <p className="mt-4 text-sm">{msg}</p>}

//       <button
//         className="mt-2 w-full text-sm text-red-500 underline"
//         onClick={() => {
//           localStorage.removeItem("isAdmin");
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default WhatsAppSender;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Add your real approved template SIDs here
// const approvedTemplates = [
//   { name: "Greeting", sid: "HX6d390d03277d0e2612cfdf34dc98f73c" },
//   // Add more { name, sid } pairs
// ];

// const WhatsAppSender = () => {
//   const [numbers, setNumbers] = useState("");
//   const [adminKey, setAdminKey] = useState("");
//   const [selectedSid, setSelectedSid] = useState(approvedTemplates[0]?.sid || "");
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("isAdmin") !== "true") {
//       window.location.href = "/";
//     }
//   }, []);

//   const sendMessage = async () => {
//     const toArray = numbers
//       .split(",")
//       .map(num => `+91${num.trim().replace(/^(\+91)?/, "")}`); // Ensures only +91 prefix

//     try {
//       const res = await axios.post("https://twillio-backend-1.onrender.com/send-template", {
//         to: toArray,
//         contentSid: selectedSid,
//         adminKey,
//       });
//       setMsg("✅ Messages sent successfully!");
//     } catch (err) {
//       setMsg("❌ " + (err.response?.data?.message || "Something went wrong"));
//     }
//   };

//   return (
//     <div className="max-w-md p-6 bg-white border rounded shadow my-36 mx-auto">
//       <h2 className="text-xl font-bold mb-4">Admin WhatsApp Sender</h2>

//       <input
//         type="text"
//         placeholder="Enter WhatsApp numbers (comma-separated, without +91)"
//         className="w-full p-2 border mb-3"
//         autoComplete="off"
//         value={numbers}
//         onChange={(e) => setNumbers(e.target.value)}
//       />

//       <select
//         className="w-full p-2 border mb-3"
//         value={selectedSid}
//         onChange={(e) => setSelectedSid(e.target.value)}
//       >
//         {approvedTemplates.map((t, i) => (
//           <option key={i} value={t.sid}>{t.name}</option>
//         ))}
//       </select>

//       <input
//         type="password"
//         placeholder="Enter Admin Key"
//         className="w-full p-2 border mb-3"
//         autoComplete="off"
//         value={adminKey}
//         onChange={(e) => setAdminKey(e.target.value)}
//       />

//       <button
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         onClick={sendMessage}
//       >
//         Send Message
//       </button>

//       {msg && <p className="mt-4 text-sm">{msg}</p>}

//       <button
//         className="mt-2 w-full text-sm text-red-500 underline"
//         onClick={() => {
//           localStorage.removeItem("isAdmin");
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default WhatsAppSender;


import React, { useState, useEffect } from "react";
import axios from "axios";

// Templates with optional variables
const approvedTemplates = [
  {
    name: "Greeting",
    sid: "HX6d390d03277d0e2612cfdf34dc98f73c",
    variables: [] // no variables
  },
  {
    name: "WelcomeWithName",
    sid: "HXb230f3e7a2d3997a4ee7a6d96d516002",
    variables: ["1"] // one variable
  },
  {
    name: "reaminderRefilling",
    sid: "HXb9995d753d1eb97ca099191692184704",
    variables: ["1", "2"] // multiple variables
  }
];

const WhatsAppSender = () => {
  const [numbers, setNumbers] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(approvedTemplates[0]);
  const [msg, setMsg] = useState("");
  const [variableValues, setVariableValues] = useState({});

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      window.location.href = "/";
    }
  }, []);

  const handleTemplateChange = (sid) => {
    const template = approvedTemplates.find(t => t.sid === sid);
    setSelectedTemplate(template);
    setVariableValues({}); // reset previous values
  };

  const handleVariableChange = (key, value) => {
    setVariableValues(prev => ({ ...prev, [key]: value }));
  };

  const sendMessage = async () => {
    const toArray = numbers
      .split(",")
      .map(num => `+91${num.trim().replace(/^(\+91)?/, "")}`);

    try {
      const res = await axios.post("https://twillio-backend-1.onrender.com/send-template", {
        to: toArray,
        contentSid: selectedTemplate.sid,
        variables: variableValues,
        adminKey,
      });
      setMsg("✅ Messages sent successfully!");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="max-w-md p-6 bg-white border rounded shadow my-36 mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin WhatsApp Sender</h2>

      <input
        type="text"
        placeholder="Enter WhatsApp numbers (comma-separated, without +91)"
        className="w-full p-2 border mb-3"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />

      <select
        className="w-full p-2 border mb-3"
        value={selectedTemplate.sid}
        onChange={(e) => handleTemplateChange(e.target.value)}
      >
        {approvedTemplates.map((t, i) => (
          <option key={i} value={t.sid}>{t.name}</option>
        ))}
      </select>

      {/* Show input fields for template variables */}
      {selectedTemplate.variables.map((v, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Enter ${v}`}
          className="w-full p-2 border mb-3"
          value={variableValues[v] || ""}
          onChange={(e) => handleVariableChange(v, e.target.value)}
        />
      ))}

      <input
        type="password"
        placeholder="Enter Admin Key"
        className="w-full p-2 border mb-3"
        value={adminKey}
        onChange={(e) => setAdminKey(e.target.value)}
      />

      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={sendMessage}
      >
        Send Message
      </button>

      {msg && <p className="mt-4 text-sm">{msg}</p>}

      <button
        className="mt-2 w-full text-sm text-red-500 underline"
        onClick={() => {
          localStorage.removeItem("isAdmin");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default WhatsAppSender;
