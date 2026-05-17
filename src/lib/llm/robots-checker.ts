import robotsParser from "robots-parser";

export async function checkRobots(url: string) {
  try {
    const robotsUrl = `${new URL(url).origin}/robots.txt`;

    const response = await fetch(robotsUrl);

    if (!response.ok) {
      return true;
    }

    const robotsTxt = await response.text();

    const robots = robotsParser(robotsUrl, robotsTxt);

    return robots.isAllowed(url, "Mozilla/5.0 LLM.txt Generator");
  } catch {
    return true;
  }
}