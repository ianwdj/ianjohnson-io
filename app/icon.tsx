import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/* Favicon: serif "ij" monogram, porcelain on coral. The coral ground makes
   the tab findable; Newsreader ties it to the site's type. */
export default async function Icon() {
  const fontBuf = await readFile(
    path.join(process.cwd(), "app/newsreader-medium.ttf")
  );
  const font = fontBuf.buffer.slice(
    fontBuf.byteOffset,
    fontBuf.byteOffset + fontBuf.byteLength
  ) as ArrayBuffer;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E8503A",
          borderRadius: 7,
          fontFamily: "Newsreader",
          fontSize: 22,
          color: "#EFECE6",
          paddingBottom: 3,
        }}
      >
        ij
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: font, weight: 500, style: "normal" }],
    }
  );
}
