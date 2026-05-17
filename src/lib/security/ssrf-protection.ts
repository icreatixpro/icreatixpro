import dns from "dns/promises";

const PRIVATE_IP_PATTERNS = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^169\.254\./,
];

export async function protectAgainstSSRF(url: string) {
  const hostname = new URL(url).hostname;

  if (hostname === "localhost") {
    throw new Error("Blocked hostname");
  }

  const addresses = await dns.lookup(hostname, { all: true });

  for (const addr of addresses) {
    if (PRIVATE_IP_PATTERNS.some((p) => p.test(addr.address))) {
      throw new Error("Private IPs are blocked");
    }
  }
}