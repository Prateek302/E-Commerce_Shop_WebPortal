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



import React, { useState, useEffect } from "react";
import axios from "axios";

// Add your real approved template SIDs here
const approvedTemplates = [
  { name: "Greeting", sid: "HX6d390d03277d0e2612cfdf34dc98f73c" },
  // Add more { name, sid } pairs
];

const WhatsAppSender = () => {
  const [numbers, setNumbers] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [selectedSid, setSelectedSid] = useState(approvedTemplates[0]?.sid || "");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      window.location.href = "/";
    }
  }, []);

  const sendMessage = async () => {
    const toArray = numbers
      .split(",")
      .map(num => `+91${num.trim().replace(/^(\+91)?/, "")}`); // Ensures only +91 prefix

    try {
      const res = await axios.post("https://twillio-backend-1.onrender.com/send-template", {
        to: toArray,
        contentSid: selectedSid,
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
        autoComplete="off"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />

      <select
        className="w-full p-2 border mb-3"
        value={selectedSid}
        onChange={(e) => setSelectedSid(e.target.value)}
      >
        {approvedTemplates.map((t, i) => (
          <option key={i} value={t.sid}>{t.name}</option>
        ))}
      </select>

      <input
        type="password"
        placeholder="Enter Admin Key"
        className="w-full p-2 border mb-3"
        autoComplete="off"
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
