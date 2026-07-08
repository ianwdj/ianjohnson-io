import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site, hero } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} · ${site.role}`;

/* Link-preview card: cream ground, portrait, name in Newsreader, coral rule.
   This is how the site looks when shared in Slack/iMessage — same palette. */
export default async function OpengraphImage() {
  const [fontBuf, portraitBuf] = await Promise.all([
    readFile(path.join(process.cwd(), "app/newsreader-medium.ttf")),
    readFile(path.join(process.cwd(), "public/portrait.jpg")),
  ]);
  const font = fontBuf.buffer.slice(
    fontBuf.byteOffset,
    fontBuf.byteOffset + fontBuf.byteLength
  ) as ArrayBuffer;
  const portrait = `data:image/jpeg;base64,${portraitBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#EFECE6",
          fontFamily: "Newsreader",
        }}
      >
        <img
          src={portrait}
          width={104}
          height={104}
          style={{
            borderRadius: 9999,
            filter: "sepia(0.22) contrast(0.97) brightness(1.02)",
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            color: "#242118",
            letterSpacing: "-0.02em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            color: "#8B857A",
            maxWidth: 900,
          }}
        >
          {hero.detail}
        </div>
        <div
          style={{
            marginTop: 40,
            width: 88,
            height: 4,
            background: "#E8503A",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: font, weight: 500, style: "normal" }],
    }
  );
}
