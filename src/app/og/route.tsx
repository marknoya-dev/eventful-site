import { ImageResponse } from "next/server";
import Image from "next/image";
import OGImage from "public/opengraph-image.png";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const image = await fetch(
    new URL("./opengraph-image.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={OGImage} alt="OG Image" fill />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
