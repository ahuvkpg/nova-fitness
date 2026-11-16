(function () {
  var C = window.NOVA_CONFIG, D = window.NOVA_I18N;
  var fmt = function (n) { return Number(n).toLocaleString("en-US"); };
  var tokens = {
    launchTHB: fmt(C.PRICE_THB.launch), regularTHB: fmt(C.PRICE_THB.regular),
    fuTHB: fmt(C.PRICE_THB.followUp), fuRegTHB: fmt(C.PRICE_THB.followUpRegular),
    launchMMK: fmt(C.PRICE_MMK.launch), regularMMK: fmt(C.PRICE_MMK.regular),
    fuMMK: fmt(C.PRICE_MMK.followUp), fuRegMMK: fmt(C.PRICE_MMK.followUpRegular),
    spots: C.LAUNCH_SPOTS, fuSpots: C.FOLLOWUP_SPOTS
  };
  var fill = function (str) {
    return String(str).replace(/\{(\w+)\}/g, function (m, k) { return k in tokens ? tokens[k] : m; });
  };
  var KEY = "novaLang";
  var current;

  function setLang(lang) {
    if (!D[lang]) lang = "my";
    current = lang;
    var dict = D[lang];
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = fill(v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", fill(v));
    });
    document.title = fill(dict["meta.title"]);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  // Payment details
  function renderPayment() {
    var P = C.PAYMENT;
    var set = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
    set("pay-th-bank", P.thaiBank.bank); set("pay-th-name", P.thaiBank.accountName); set("pay-th-num", P.thaiBank.accountNumber);
    set("pay-mm-bank", P.burmeseBank.bank); set("pay-mm-name", P.burmeseBank.accountName); set("pay-mm-num", P.burmeseBank.accountNumber);
    set("pay-pp-id", P.promptPay.id); set("pay-pp-name", P.promptPay.accountName);
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var src = document.getElementById(btn.getAttribute("data-copy"));
        if (!src || /TO BE CONFIRMED/.test(src.textContent)) return;
        navigator.clipboard && navigator.clipboard.writeText(src.textContent.trim()).then(function () {
          btn.textContent = D[current]["pay.copied"];
          setTimeout(function () { btn.textContent = D[current]["pay.copy"]; }, 1500);
        });
      });
    });
  }

  // Contact links
  function renderContacts() {
    var map = { whatsapp: C.CONTACT.whatsapp, tiktok: C.CONTACT.tiktok, facebook: C.CONTACT.facebook };
    document.querySelectorAll("[data-link]").forEach(function (a) {
      var u = map[a.getAttribute("data-link")]; if (u) a.href = u;
    });
  }

  // Google Form embed
  function renderForm() {
    var wrap = document.getElementById("form-slot");
    var ph = document.getElementById("form-placeholder");
    var btn = document.getElementById("form-open");
    if (C.FORM_URL) {
      var embed = C.FORM_URL + (C.FORM_URL.indexOf("?") > -1 ? "&" : "?") + "embedded=true";
      var f = document.createElement("iframe");
      f.src = embed; f.loading = "lazy"; f.title = "Nova Fitness application form";
      f.setAttribute("frameborder", "0");
      wrap.appendChild(f); wrap.hidden = false; ph.hidden = true;
      btn.href = C.FORM_URL; btn.target = "_blank"; btn.rel = "noopener"; btn.hidden = false;
      document.querySelectorAll("[data-cta]").forEach(function (a) { a.href = "#apply"; });
    } else {
      wrap.hidden = true; ph.hidden = false; btn.hidden = true;
    }
  }

  // Reveal on scroll
  function reveal() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (e) { io.observe(e); });
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var q = new URLSearchParams(location.search).get("lang");
  setLang(q || saved || C.DEFAULT_LANG);
  renderPayment(); renderContacts(); renderForm(); reveal();
})();
