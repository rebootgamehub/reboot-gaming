import { db } from "./firebase.js";
import { collection, addDoc, Timestamp }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Calculate total price
  const totalPrice = parseInt(hours.value) * 80;

  try {
    await addDoc(collection(db, "bookings"), {
      name: name.value,
      phone: phone.value,
      zone: zone.value,
      slot: slot.value,
      startTime: time.value,
      players: parseInt(players.value),
      hours: parseInt(hours.value),
      price: totalPrice,
      status: "pending",
      createdAt: Timestamp.now()
    });

    alert("✅ Booking Request Sent Successfully!");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("❌ Error submitting booking");
  }
});