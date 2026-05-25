import DocSheet from "./DocSheet";
import { PACK_META, PACK_VERSION } from "@/content/pack";

const items: { area: string; need: string }[] = [
  {
    area: "Head of Operations signatory",
    need: "Confirm the name and title that appears on the Welcome Letter (Loose-leaf L1) and Volunteer Agreement (Booklet 2).",
  },
  {
    area: "Safeguarding lead",
    need: "Confirm the named safeguarding lead and direct phone number to be inserted into Booklet 7.",
  },
  {
    area: "Live QR systems",
    need: "Replace placeholder QR codes in Booklet 5 and the QR Card with live links: registration, transport, incident form, request form.",
  },
  {
    area: "Cleaning products",
    need: "Confirm approved cleaning products by hospital and any colour-coded cloth conventions to be carried into Booklets 3 and 7.",
  },
  {
    area: "Complaints procedure",
    need: "Confirm the full written complaints procedure to be appended to Booklet 5 or Booklet 7 as agreed.",
  },
  {
    area: "Office contact details",
    need: "Confirm the master office phone, WhatsApp number, and volunteer email to be locked across the whole pack.",
  },
  {
    area: "Shabbos / Yom Tov specifics",
    need: "Confirm any hospital-specific permissions for candles, flames, electricals and appliances per ward (Booklet 4).",
  },
  {
    area: "Stock list per hospital",
    need: "Provide the live stock list per hospital so Loose-leaf L3 can be locked before print.",
  },
];

export default function VerificationListPage() {
  return (
    <DocSheet
      kicker={`Client verification · ${PACK_VERSION}`}
      title="Client verification list"
      intro="Every item below requires Ezra Umarpeh sign-off before print. These are the operational details only the organisation can confirm."
      pdfUrl={PACK_META.verificationListPdfUrl}
    >
      <ol className="list-none pl-0 space-y-3 not-prose">
        {items.map((i, idx) => (
          <li
            key={idx}
            className="border border-border rounded-md p-4 bg-card flex gap-4 items-start"
          >
            <span className="font-mono text-xs text-muted-foreground w-6 mt-0.5">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="font-medium">{i.area}</div>
              <div className="text-sm text-muted-foreground mt-1">{i.need}</div>
            </div>
          </li>
        ))}
      </ol>
    </DocSheet>
  );
}
