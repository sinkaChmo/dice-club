(() => {
  const tg = window.Telegram?.WebApp;
  try {
    tg?.ready();
    tg?.expand();
    if (tg?.themeParams?.bg_color) {
      document.documentElement.style.setProperty("--tg-bg", tg.themeParams.bg_color);
    }
    const user = tg?.initDataUnsafe?.user;
    if (user) {
      const name = user.first_name || user.username || "?";
      document.getElementById("avatar").textContent = [...name][0].toUpperCase();
    }
  } catch (_) {}

  const die = document.getElementById("die");
  const rollButton = document.getElementById("rollButton");
  const result = document.getElementById("result");
  const hint = document.getElementById("hint");
  const lastResult = document.getElementById("lastResult");
  let rolling = false;

  function roll() {
    if (rolling) return;
    rolling = true;
    rollButton.disabled = true;
    result.textContent = "Кубик вращается…";
    hint.textContent = "Случайный результат демо-режима";
    die.classList.remove("rolling");
    // Force a reflow so the animation can replay.
    void die.offsetWidth;
    die.classList.add("rolling");

    const finalValue = Math.floor(Math.random() * 6) + 1;
    const interim = setInterval(() => {
      die.dataset.value = String(Math.floor(Math.random() * 6) + 1);
    }, 75);

    setTimeout(() => {
      clearInterval(interim);
      die.dataset.value = String(finalValue);
      result.textContent = `Выпало число ${finalValue}`;
      hint.textContent = "Это демонстрационный бросок — без ставок и выигрышей";
      lastResult.textContent = String(finalValue);
      die.classList.remove("rolling");
      rollButton.disabled = false;
      rolling = false;
      try { tg?.HapticFeedback?.impactOccurred("medium"); } catch (_) {}
    }, 760);
  }

  rollButton.addEventListener("click", roll);
  die.addEventListener("click", roll);
  die.dataset.value = "5";
})();
