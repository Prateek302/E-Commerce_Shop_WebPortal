import React, { useState, useEffect } from "react";
import axios from "axios";

const templates = [
  { name: "Greeting", text: "👋 Hello! Welcome to Bihar Fire Protection!" },
  { name: "Offer", text: "🔥 Special offer on fire safety kits this week!" },
  {
    name: "Reminder",
    text: "⏰ Reminder: Stay safe with updated fire systems.",
  },
];

const WhatsAppSender = () => {
  const [number, setNumber] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [template, setTemplate] = useState(templates[0].text);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/");
    }
  }, []);

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        "https://twillio-backend-1.onrender.com/send-message",
        {
          number,
          template,
          adminKey,
        }
      );
      setMsg("✅ Message Sent successfully! ");
      console.log(res);
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Error"));
    }
  };

  return (
    <div className="max-w-md p-6 bg-white border rounded shadow my-36 mx-auto justify-center align-center">
      <h2 className="text-xl font-bold mb-4">Admin WhatsApp Sender</h2>
      <input
        type="text"
        placeholder="Enter WhatsApp Number"
        className="w-full p-2 border mb-3"
        autoComplete="off"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <select
        className="w-full p-2 border mb-3"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      >
        {templates.map((t, i) => (
          <option key={i} value={t.text}>
            {t.name}
          </option>
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
