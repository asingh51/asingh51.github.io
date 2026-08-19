import emailjs from "@emailjs/browser";

const OTP_TTL_MS = 15 * 60 * 1000;
const storageKey = (pageId) => `passcode:${pageId}`;

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function requestPasscode({ pageId, pageLabel, visitorEmail }) {
  const otp = generateOtp();
  window.sessionStorage.setItem(
    storageKey(pageId),
    JSON.stringify({ otp, expires: Date.now() + OTP_TTL_MS })
  );

  return emailjs.send(
    process.env.GATSBY_EMAILJS_SERVICE_ID,
    process.env.GATSBY_EMAILJS_TEMPLATE_ID,
    {
      page: pageLabel,
      otp,
      visitor_email: visitorEmail || "(not provided)",
    },
    process.env.GATSBY_EMAILJS_PUBLIC_KEY
  );
}

export function verifyPasscode(pageId, code) {
  const raw = window.sessionStorage.getItem(storageKey(pageId));
  if (!raw) return false;

  try {
    const { otp, expires } = JSON.parse(raw);
    if (Date.now() > expires) return false;
    return code.trim() === otp;
  } catch {
    return false;
  }
}
