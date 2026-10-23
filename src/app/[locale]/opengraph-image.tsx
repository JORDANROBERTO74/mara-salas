import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const alt = "Mara Salas — Interior architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

let fontsPromise: Promise<{ archivo: Buffer; instrument: Buffer }> | null =
  null;

function loadFonts(): Promise<{ archivo: Buffer; instrument: Buffer }> {
  fontsPromise ??= Promise.all([
    readFile(path.join(process.cwd(), "src/assets/Archivo-Regular.ttf")),
    readFile(
      path.join(process.cwd(), "src/assets/InstrumentSerif-Regular.ttf"),
    ),
  ]).then(([archivo, instrument]) => ({ archivo, instrument }));

  return fontsPromise;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  const { archivo, instrument } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#f4f0e8",
          position: "relative",
          fontFamily: "Archivo",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 430px 64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="38" height="38" viewBox="0 0 32 32">
              <path
                d="M5 27V15.5a11 11 0 0 1 22 0V27"
                fill="none"
                stroke="#2f4a7a"
                strokeWidth="1.4"
              />
              <path
                d="M12 27V17a4 4 0 0 1 8 0v10"
                fill="none"
                stroke="#2f4a7a"
                strokeWidth="1.4"
                opacity="0.55"
              />
              <path d="M3 27h26" stroke="#2f4a7a" strokeWidth="1.4" />
            </svg>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 7,
                textTransform: "uppercase",
                color: "#2f4a7a",
                display: "flex",
              }}
            >
              {dict.common.brand}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Instrument",
                fontSize: 78,
                lineHeight: 1.02,
                letterSpacing: -1.5,
                color: "#1b1a18",
                maxWidth: 660,
                display: "flex",
              }}
            >
              {dict.hero.title.lead} {dict.hero.title.accent}
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#6d675e",
                display: "flex",
              }}
            >
              {dict.hero.eyebrow}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 18, color: "#6d675e" }}>
            {site.domain}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 380,
            height: "100%",
            backgroundColor: "#2f4a7a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="240" height="330" viewBox="0 0 32 44">
            <path
              d="M4 41V16a12 12 0 0 1 24 0v25"
              fill="none"
              stroke="#f4f0e8"
              strokeWidth="0.7"
            />
            <path
              d="M12 41V20a4 4 0 0 1 8 0v21"
              fill="none"
              stroke="#f4f0e8"
              strokeWidth="0.7"
              opacity="0.5"
            />
            <path d="M2 41h28" stroke="#f4f0e8" strokeWidth="0.7" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: archivo,
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument",
          data: instrument,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
