import { db } from "./firebase.js";
import { collection, onSnapshot, doc, updateDoc }
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

onSnapshot(collection(db, "bookings"), snap => {
  list.innerHTML = "";

  snap.forEach(d => {
    const b = d.data();

    list.innerHTML += `
    <div class="bg-black border border-green-600/30 rounded-xl p-5">
      <div class="flex justify-between mb-2">
        <h3 class="text-green-500 font-bold">${b.name}</h3>
        <span class="text-sm text-gray-400">${b.status}</span>
      </div>

      <p class="text-gray-400 text-sm mb-2">📞 ${b.phone}</p>

      <div class="text-sm text-gray-300 grid grid-cols-2 gap-2">
        <p>Slot: ${b.slot}</p>
        <p>Time: ${b.startTime}</p>
        <p>Players: ${b.players}</p>
        <p>₹ ${b.price}</p>
      </div>

      <div class="flex gap-3 mt-4">
        <button onclick="approve('${d.id}')"
          class="flex-1 bg-green-600 text-black py-2 rounded font-bold">
          Approve
        </button>
        <button onclick="reject('${d.id}')"
          class="flex-1 border border-red-500 py-2 rounded">
          Reject
        </button>
      </div>
    </div>`;
  });
});

window.approve = id =>
  updateDoc(doc(db,"bookings",id),{status:"approved"});

window.reject = id =>
  updateDoc(doc(db,"bookings",id),{status:"rejected"});