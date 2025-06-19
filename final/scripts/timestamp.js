
  document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
      const now = new Date().toISOString(); // ISO format is best for portability
      timestampInput.value = now;
    }
  });