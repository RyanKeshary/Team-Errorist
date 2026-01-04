// Reusable notification system for all pages
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existing = document.querySelector(".custom-notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.className = `custom-notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}
