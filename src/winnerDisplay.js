export function showWinnerModal(message) {
  const modal = document.getElementById("winnerModal");
  const winnerMessage = document.getElementById("winnerMessage");
  winnerMessage.textContent = message;
  modal.style.display = "block";

  const closeModal = () => {
    modal.style.display = "none";
  };

  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = closeModal;

  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}
