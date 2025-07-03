import { FaArrowLeft, FaBell } from "react-icons/fa";

export default function Notification() {
  const notifications = [
    {
      id: 1,
      title: "Add Vendor Details for WhatsApp Ordering",
      source: "THE TIMES OF REPUBLIC BHARAT",
      time: "12 HOURS AGO",
      description:
        "Easily order from your preferred vendors by adding their name and phone number in our Order Management app.",
      image:
        "https://plus.unsplash.com/premium_photo-1682309567426-5517a398b4dd?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Add Vendor Details for WhatsApp Ordering",
      source: "THE TIMES OF REPUBLIC BHARAT",
      time: "12 HOURS AGO",
      description:
        "Easily order from your preferred vendors by adding their name and phone number in our Order Management app.",
    },
    {
      id: 3,
      title: "Add Vendor Details for WhatsApp Ordering",
      source: "THE TIMES OF REPUBLIC BHARAT",
      time: "12 HOURS AGO",
      description:
        "Easily order from your preferred vendors by adding their name and phone number in our Order Management app.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center mb-2 gap-4">
          <button>
            <FaArrowLeft className="text-gray-600 text-xl" />
          </button>
          <h1 className="text-xl font-semibold">Notification</h1>
        </div>
        <p className="text-sm text-gray-500 mb-4">FRIDAY 16 MAY</p>

        {/* Notification Cards */}
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="bg-gray-50 shadow-sm rounded-xl p-4 space-y-2 border"
            >
              <div className="flex items-start gap-3">
                <FaBell className="text-blue-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                    {note.source} • {note.time}
                  </p>
                  <p className="font-semibold text-gray-800">{note.title}</p>
                  <p className="text-sm text-gray-600">{note.description}</p>
                </div>
              </div>
              {note.image && (
                <img
                  src={note.image}
                  alt="Notification"
                  className="w-full h-40 object-cover rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
