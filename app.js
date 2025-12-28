// cruise departure in ISO format.
const TARGET_ISO = "2026-01-22T15:00:00-05:00";

const target = new Date(TARGET_ISO);
const el = (id) => document.getElementById(id);

function pad2(n) { return String(n).padStart(2, "0"); }

function tick() {
  const now = new Date();
  const ms = target - now;

  if (isNaN(target.getTime())) {
    el("status").textContent = "Invalid date. Update TARGET_ISO in app.js.";
    return;
  }

  el("targetLabel").textContent = `Counting down to: ${target.toLocaleString()}`;

  if (ms <= 0) {
    el("days").textContent = "0";
    el("hours").textContent = "00";
    el("mins").textContent = "00";
    el("secs").textContent = "00";
    el("status").textContent = "🚢 It’s cruise time!";
    return;
  }

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  el("days").textContent = String(days);
  el("hours").textContent = pad2(hours);
  el("mins").textContent = pad2(mins);
  el("secs").textContent = pad2(secs);

  el("status").textContent = `Updated: ${now.toLocaleTimeString()}`;
}

tick();
setInterval(tick, 1000);
