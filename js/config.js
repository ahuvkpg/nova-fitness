/* =========================================================
   NOVA FITNESS — EDIT THIS FILE ONLY for links, prices & payment
   ========================================================= */
window.NOVA_CONFIG = {
  /* Google Form link. Paste the form's share link here
     (e.g. "https://docs.google.com/forms/d/e/XXXX/viewform").
     Leave "" to show the placeholder. The page embeds it automatically
     (adds ?embedded=true for the iframe). */
  FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSd-hTHuifsc2iyW6yBpyRKMH9QwCuaXeTwB1Ws65FGOOwchAg/viewform",

  /* Prices in Thai baht */
  PRICE_THB: {
    launch: 500,          // first 10 subscribers
    regular: 1000,        // after the first 10
    followUp: 500,        // next 6-week adjusted plan (first 20 subscribers)
    followUpRegular: 800  // normal follow-up price
  },

  /* Kyat equivalents: Xe mid-market 1 THB = 61.94 MMK (16 Nov 2026),
     converted and ROUNDED DOWN to the nearest 1,000 Ks. */
  PRICE_MMK: {
    launch: 30000,          // 500 THB  = 30,970 Ks
    regular: 61000,         // 1000 THB = 61,941 Ks
    followUp: 30000,        // 500 THB  = 30,970 Ks
    followUpRegular: 49000  // 800 THB  = 49,553 Ks
  },
  LAUNCH_SPOTS: 10,
  FOLLOWUP_SPOTS: 20,

  /* Payment details: PLACEHOLDERS, replace when confirmed */
  PAYMENT: {
    thaiBank: {
      bank: "[TO BE CONFIRMED]",
      accountName: "[TO BE CONFIRMED]",
      accountNumber: "[TO BE CONFIRMED]"
    },
    burmeseBank: {
      bank: "[TO BE CONFIRMED]",          // e.g. KBZ / AYA / CB
      accountName: "[TO BE CONFIRMED]",
      accountNumber: "[TO BE CONFIRMED]"
    },
    promptPay: {
      id: "[TO BE CONFIRMED]",            // phone number or ID
      accountName: "[TO BE CONFIRMED]"
    }
  },

  /* Contact links */
  CONTACT: {
    whatsapp: "https://wa.me/66518688263",
    whatsappDisplay: "+66 51 868 8263",
    tiktok: "https://www.tiktok.com/@lynnova.ht",
    tiktokHandle: "@lynnova.ht",
    facebook: "https://www.facebook.com/lynn.lythium.htet"
  },

  DEFAULT_LANG: "my" // "my" = Burmese, "en" = English
};
