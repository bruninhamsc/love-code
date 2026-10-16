// Data correta para desbloquear (Ex: DDMMYYYY -> 12062023)
const CORRECT_DATE = "10102026";
let enteredCode = "";

// Sistema do Teclado
function pressKey(num) {
  if (enteredCode.length < 8) {
    enteredCode += num;
    updateDisplay();
    
    if (enteredCode.length === 8) {
      checkCode();
    }
  }
}

function deleteKey() {
  enteredCode = enteredCode.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("codeDisplay");
  let hearts = "❤️".repeat(enteredCode.length);
  let empty = "_".repeat(8 - enteredCode.length);
  display.innerText = hearts + empty;
}

function checkCode() {
  if (enteredCode === CORRECT_DATE) {
    setTimeout(() => {
      nextStep("step-gift");
    }, 300);
  } else {
    alert("Data incorreta! Tente novamente ❤️");
    enteredCode = "";
    updateDisplay();
  }
}

// Sistema de Clicar no Presente
let tapCount = 0;
const MAX_TAPS = 21;

function tapGift() {
  if (tapCount < MAX_TAPS) {
    tapCount++;
    document.getElementById("tapCounter").innerText = `Tap to unwrap! ${tapCount}/${MAX_TAPS}`;
    document.getElementById("progressFill").style.width = `${(tapCount / MAX_TAPS) * 100}%`;

    if (tapCount === MAX_TAPS) {
      setTimeout(() => {
        nextStep("step-letter");
      }, 400);
    }
  }
}

// Navegação entre Telas
function nextStep(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}