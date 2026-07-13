import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/* Favicon: a pint of Guinness on the coral ground. The stout is the site's
   own palette (ink body, porcelain head), the coral keeps the tab findable,
   and the pint is Ian's pick (from Ireland, July 2026). Drawn with divs so
   it needs no font or asset. */
export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 15,
            height: 22,
            display: "flex",
            flexDirection: "column",
            borderRadius: "2px 2px 4px 4px",
            overflow: "hidden",
          }}
        >
          {/* the head */}
          <div style={{ height: 7, background: "#EFECE6" }} />
          {/* the stout */}
          <div style={{ flex: 1, background: "#242118" }} />
        </div>
      </div>
    ),
    size
  );
}
