// Ezra Umarpeh Volunteer Pack — full v1.0 content.
// All content here is sourced from the Ezra Umarpeh Volunteer Academy Manual
// and matches the produced print PDFs. Do not invent procedural content.

export type PackStatus = "live";

export type SectionBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "callout"; tone: "key" | "important" | "tip" | "note"; title: string; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "checklist"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "table"; columns: string[]; rows: string[][] }
  | { kind: "footnote"; text: string };

export type BookletSection = {
  id: string;
  number: string;
  title: string;
  intro?: string;
  blocks: SectionBlock[];
};

export type PackItem = {
  slug: string;
  number: string; // "01", ..., or "L1"
  title: string;
  subtitle: string;
  audience: string;
  pages: string;
  group: "booklet" | "loose-leaf";
  status: PackStatus;
  accent: "ezra" | "sage" | "forest" | "slate" | "amber" | "plum" | "crimson" | "neutral";
  summary: string;
  pdfUrl: string;
  sections: BookletSection[];
};

export const PACK_VERSION = "Version 1.0 — May 2026";

// ---------------------------------------------------------------------------
// Helper builders
// ---------------------------------------------------------------------------

const para = (text: string): SectionBlock => ({ kind: "paragraph", text });
const list = (items: string[]): SectionBlock => ({ kind: "list", items });
const checklist = (items: string[]): SectionBlock => ({ kind: "checklist", items });
const steps = (items: string[]): SectionBlock => ({ kind: "steps", items });
const table = (columns: string[], rows: string[][]): SectionBlock => ({
  kind: "table",
  columns,
  rows,
});
const callout = (
  tone: "key" | "important" | "tip" | "note",
  title: string,
  text: string,
): SectionBlock => ({ kind: "callout", tone, title, text });
const footnote = (text: string): SectionBlock => ({ kind: "footnote", text });

// ---------------------------------------------------------------------------
// Booklet 1 — About Ezra Umarpeh
// ---------------------------------------------------------------------------

const BOOKLET_1_SECTIONS: BookletSection[] = [
  {
    id: "welcome",
    number: "1",
    title: "Welcome",
    intro:
      "Ezra Umarpeh is a community organisation dedicated to easing the burden of hospital stays for patients and families.",
    blocks: [
      para(
        "We provide warm, dignified support during some of the most difficult moments in a family's life — from a comfortable hospital room with food and Judaica, to accessible transport, to short-stay accommodation near major hospitals.",
      ),
      para(
        "This booklet is for hospital staff, donors, families, partners and the wider public. It explains what we do, why we do it, and how to get in touch.",
      ),
    ],
  },
  {
    id: "vision",
    number: "2",
    title: "Vision, mission and values",
    blocks: [
      callout(
        "key",
        "Our vision",
        "A community in which no patient or family faces a hospital stay alone, unsupported or undignified.",
      ),
      para(
        "Our mission is to provide practical, respectful, kosher-aware support to anyone whose life is touched by hospital — patients, families, carers and the wider community.",
      ),
      list([
        "Dignity — every interaction reflects the value of the person we are serving.",
        "Reliability — when we say we will be there, we are there.",
        "Discretion — we protect the privacy of patients and families at all times.",
        "Community — we work with hospitals, rabbonim, families and volunteers as one team.",
        "Excellence — we hold a five-star standard for every room, every shift, every interaction.",
      ]),
    ],
  },
  {
    id: "services",
    number: "3",
    title: "Core services overview",
    blocks: [
      table(
        ["Service", "What it provides"],
        [
          [
            "Hospital rooms",
            "Stocked, clean, kosher-aware rooms in major hospitals offering food, drink, Judaica and a calm space.",
          ],
          [
            "Shabbos & Yom Tov support",
            "Specialist preparation so families can keep Shabbos and Yom Tov properly even during a hospital stay.",
          ],
          [
            "Accessible transport",
            "Booking-based transport for patients with mobility needs travelling to and from hospital.",
          ],
          [
            "Accommodation",
            "Short-stay accommodation for families of patients in hospitals far from home.",
          ],
          [
            "Coordinated volunteering",
            "A trained, supported volunteer network that keeps the system running every day.",
          ],
        ],
      ),
    ],
  },
  {
    id: "accommodation",
    number: "4",
    title: "Hospital accommodation support",
    blocks: [
      para(
        "Families whose loved ones are in hospital far from home can request short-stay accommodation through Ezra Umarpeh. We work with hosts and partner properties to place families close to the hospital, with appropriate Shabbos and kosher provision wherever possible.",
      ),
      list([
        "Requests are received through the office or through coordinators.",
        "Accommodation is matched to the family's needs — location, number of guests, length of stay, and any specific requirements.",
        "All arrangements are handled with discretion.",
      ]),
    ],
  },
  {
    id: "transport",
    number: "5",
    title: "Accessible transport",
    blocks: [
      para(
        "Ezra Umarpeh offers booking-based accessible transport for patients with mobility needs travelling to and from hospital appointments. The service is coordinated centrally, with vehicles allocated to confirmed bookings.",
      ),
      callout(
        "tip",
        "Booking",
        "Bookings are made in advance through the accessible transport booking form. Last-minute requests are accommodated where capacity allows.",
      ),
    ],
  },
  {
    id: "donations",
    number: "6",
    title: "Donations and sponsorship",
    blocks: [
      para(
        "Ezra Umarpeh is funded entirely by community donations and sponsorships. Every donation directly supports rooms, transport, accommodation and the volunteer infrastructure.",
      ),
      list([
        "Sponsor a hospital room for a week, a month or a year.",
        "Sponsor a Shabbos in memory of a loved one.",
        "Support accessible transport for a specific period.",
        "Make a general donation to the operation.",
      ]),
      para("All donations are acknowledged. Larger sponsorships can be dedicated and publicised at the donor's request."),
    ],
  },
  {
    id: "contact",
    number: "7",
    title: "How to get in touch",
    blocks: [
      table(
        ["For", "Contact"],
        [
          ["Volunteer enquiries", "volunteers@ezraumarpeh.org"],
          ["General enquiries", "Office contact details — to be confirmed by client"],
          ["Accessible transport", "Booking form — to be confirmed by client"],
          ["Accommodation", "Office — to be confirmed by client"],
        ],
      ),
      footnote(
        "Client to confirm: office phone number, general enquiries email, and the live URLs for the transport booking form and accommodation enquiry.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 2 — Volunteer Handbook
// ---------------------------------------------------------------------------

const BOOKLET_2_SECTIONS: BookletSection[] = [
  {
    id: "welcome",
    number: "1",
    title: "Welcome to volunteers",
    blocks: [
      para(
        "Thank you for joining Ezra Umarpeh. The work is practical — collecting, stocking, cleaning and reporting — but for a patient or family in hospital it can change the whole experience.",
      ),
      callout(
        "key",
        "Why it matters",
        "Every stocked shelf, every organised cupboard, every clean fridge, every returned crate, every clear report and every Shabbos room prepared properly helps create comfort and dignity for patients and families during difficult moments.",
      ),
    ],
  },
  {
    id: "values",
    number: "2",
    title: "Mission and values summary",
    blocks: [
      list([
        "Dignity in every interaction.",
        "Reliability in every shift.",
        "Discretion at all times.",
        "Community — we are one team with coordinators, hospital staff and families.",
        "Excellence — a five-star standard for every room.",
      ]),
    ],
  },
  {
    id: "responsibilities",
    number: "3",
    title: "Volunteer responsibilities",
    blocks: [
      list([
        "Arrive on time and prepared for the shift.",
        "Confirm with the coordinator which hospital and which room.",
        "Collect goods from the hub or confirm goods have already been prepared.",
        "Stock shelves, fridge, freezer and cupboards correctly.",
        "Clean as you go — surfaces, fridge, microwave, kettle.",
        "Return crates and trolleys to the hub at the end of the shift.",
        "Report incidents and requests in writing, with photos where helpful.",
      ]),
    ],
  },
  {
    id: "dos-donts",
    number: "4",
    title: "Do's and don'ts",
    blocks: [
      table(
        ["Do", "Don't"],
        [
          ["Greet patients and families warmly and discreetly.", "Discuss patients with anyone outside the team."],
          ["Wear ID where issued.", "Lend your ID, key or access card to anyone."],
          ["Place new stock behind older stock.", "Block doorways, walkways or fire exits with crates."],
          ["Report breakages in writing.", "Rely on verbal-only messages for issues that need action."],
          ["Ask the coordinator when unsure.", "Improvise hospital procedure without checking."],
        ],
      ),
    ],
  },
  {
    id: "boundaries",
    number: "5",
    title: "Professional boundaries",
    blocks: [
      para(
        "Volunteers are part of a professional operation. Boundaries protect patients, families, the hospital and the volunteer.",
      ),
      list([
        "Do not give medical advice.",
        "Do not enter wards unless approved and trained.",
        "Do not photograph patients or families.",
        "Do not accept gifts that could compromise the relationship.",
        "Refer all sensitive requests to the coordinator.",
      ]),
    ],
  },
  {
    id: "confidentiality",
    number: "6",
    title: "Confidentiality and safeguarding",
    blocks: [
      callout(
        "important",
        "Confidentiality",
        "What you see, hear or notice in a hospital room is private. It must not be discussed with anyone outside the Ezra Umarpeh team, and must not be shared on social media or in WhatsApp groups beyond the operational team.",
      ),
      para(
        "If you have a safeguarding concern about a child or vulnerable adult, report it immediately to the coordinator. Safeguarding concerns are never something to handle alone.",
      ),
    ],
  },
  {
    id: "communication",
    number: "7",
    title: "Communication standards and WhatsApp etiquette",
    blocks: [
      list([
        "Use clear, factual language in messages.",
        "Include the hospital, room, date and time.",
        "Attach photos where they help.",
        "Mark urgent messages clearly.",
        "Keep personal opinions and frustrations out of the operational group.",
      ]),
      callout(
        "tip",
        "Good report",
        '"Royal Free room checked at 7:45 PM. Fridge clean. Milk low, grape juice low, crackers empty. Storage cupboard organised. No incidents. Crates returned to hub."',
      ),
    ],
  },
  {
    id: "id-access",
    number: "8",
    title: "ID and access guidance",
    blocks: [
      list([
        "Carry your Ezra Umarpeh ID if issued.",
        "Use hospital badges only if authorised.",
        "Do not lend badges or cards.",
        "Do not use hospital access for personal reasons.",
        "Report lost keys, cards or badges immediately.",
      ]),
      para(
        "Access is given for volunteering purposes only. It must not be shared, copied, lent or used outside authorised duties.",
      ),
    ],
  },
  {
    id: "staff",
    number: "9",
    title: "Hospital staff and security interaction",
    blocks: [
      para(
        "Volunteers should maintain positive relationships with hospital staff and security. These relationships are essential to the long-term success of the hospital rooms.",
      ),
      list([
        "Stay calm and respectful at all times.",
        "Identify yourself as an Ezra Umarpeh volunteer.",
        "Show ID if asked.",
        "Follow hospital instructions; do not argue on the spot.",
        "Report any difficult interaction to the coordinator afterwards.",
      ]),
    ],
  },
  {
    id: "signoff",
    number: "10",
    title: "Volunteer agreement and sign-off",
    blocks: [
      para(
        "Every volunteer confirms in writing that they have read this handbook, understand the expectations, and agree to act professionally and in accordance with Ezra Umarpeh procedures.",
      ),
      footnote(
        "The full signed agreement form is included in the trainer pack and is held centrally by the office.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 3 — Hospital Room Operations
// ---------------------------------------------------------------------------

const BOOKLET_3_SECTIONS: BookletSection[] = [
  {
    id: "hub",
    number: "1",
    title: "Hub arrival and collection",
    blocks: [
      para(
        "Every shift begins at the hub. The hub is where stock is held, organised and signed out before being taken to the hospital. Treat the hub with the same care as the hospital room.",
      ),
      steps([
        "Arrive on time and check in with the coordinator on duty.",
        "Confirm which hospital and which room you are stocking.",
        "Collect the goods prepared for that hospital, or pack them yourself from the labelled shelves.",
        "Check fridge / freezer items are sealed, labelled and in date.",
        "Sign out crates and trolleys on the hub log.",
      ]),
    ],
  },
  {
    id: "leadership",
    number: "2",
    title: "Leadership and coordinator structure",
    blocks: [
      para(
        "Volunteers report to the coordinator on duty for their hospital. Coordinators report to the Head of Operations. This structure keeps the operation safe, accountable and consistent.",
      ),
      list([
        "Coordinator on duty — your direct contact for the shift.",
        "Hospital coordinator — owns standards for a specific hospital.",
        "Head of Operations — owns the operation as a whole.",
      ]),
    ],
  },
  {
    id: "shift",
    number: "3",
    title: "Full hospital shift procedure",
    blocks: [
      steps([
        "Arrive at the hospital and locate the Ezra Umarpeh room.",
        "Greet anyone using the room discreetly.",
        "Inspect the room: cleanliness, stock levels, fridge, freezer, appliances, bins.",
        "Restock shelves, fridge, freezer and cupboards. Place new items behind older items.",
        "Remove expired or unlabelled items.",
        "Wipe surfaces and the fridge where needed.",
        "Confirm appliances are working.",
        "Note any issues for the written report.",
        "Return crates and trolleys to the hub.",
        "Send the written report to the coordinator.",
      ]),
    ],
  },
  {
    id: "access",
    number: "4",
    title: "Access, keys, codes and stock labelling",
    blocks: [
      list([
        "Use only the access methods approved for that hospital.",
        "Do not share codes or keys.",
        "Label private patient food clearly with name and date.",
        "Label communal stock with its category where possible.",
        "Keep labels facing forward on shelves.",
      ]),
    ],
  },
  {
    id: "five-star",
    number: "5",
    title: "Five-Star Hospital Room standard",
    blocks: [
      callout(
        "key",
        "The standard",
        "We aim for a five-star standard. Not because we are fancy, but because people in hospital deserve dignity. A neat shelf, a fresh fridge and a clean room send a message: someone cares.",
      ),
      table(
        ["Area", "What good looks like"],
        [
          ["Entry", "Clean, calm, well-lit. Door working."],
          ["Shelves", "Stock neat, labels forward, no clutter."],
          ["Fridge", "Clean, fresh, no smell, items in date."],
          ["Surfaces", "Wiped, dry, free of crumbs."],
          ["Bins", "Not overflowing."],
          ["Judaica", "Siddurim, Tehillim and benchers available."],
          ["Crates", "Returned or ready to return."],
        ],
      ),
    ],
  },
  {
    id: "cleanliness",
    number: "6",
    title: "Cleanliness responsibilities",
    blocks: [
      list([
        "Wipe surfaces at the start and the end of every shift.",
        "Clean fridge and microwave whenever they are dirty.",
        "Sweep or check the floor for spills or hazards.",
        "Take out full bins; do not stack rubbish.",
        "Report anything that needs deep cleaning beyond a volunteer wipe-down.",
      ]),
    ],
  },
  {
    id: "stock",
    number: "7",
    title: "Stock management and rotation",
    blocks: [
      steps([
        "Check current stock against the hospital's standard list.",
        "Place new items behind older items.",
        "Remove expired or damaged items.",
        "Note any shortages for the written report.",
        "Re-label clearly where labels are missing or faded.",
      ]),
      callout(
        "tip",
        "Rotation rule",
        "New items go behind older items. This is one of the most important habits in the operation — it prevents waste and protects patients and families from out-of-date food.",
      ),
    ],
  },
  {
    id: "private-food",
    number: "8",
    title: "Private patient food rules",
    blocks: [
      list([
        "Private food must be clearly labelled with the patient or family name and the date.",
        "Do not move private food around unless reorganising for hygiene.",
        "Do not discard private food without checking with the coordinator unless it is clearly spoiled or out of date.",
        "Keep private food separate from communal stock where possible.",
      ]),
    ],
  },
  {
    id: "close",
    number: "9",
    title: "Closing the shift",
    blocks: [
      list([
        "Return crates and trolleys to the hub.",
        "Send a written report to the coordinator covering stock, cleanliness and any incidents or requests.",
        "Hand over any keys or access cards as agreed.",
      ]),
      callout(
        "note",
        "See also",
        "Booklet 5 — Reporting, Incidents & Requests covers what to put in the written report and the templates to use.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 4 — Shabbos & Yom Tov  (already approved sample)
// ---------------------------------------------------------------------------

const BOOKLET_4_SECTIONS: BookletSection[] = [
  {
    id: "awareness",
    number: "1",
    title: "Shabbos and Yom Tov awareness",
    intro:
      "Shabbos and Yom Tov preparation is one of the most important parts of the hospital room operation. The room must be ready well before candle-lighting so that patients and families experience a calm, dignified Shabbos.",
    blocks: [
      para(
        "Volunteers preparing a hospital room for Shabbos or Yom Tov are not only restocking — they are creating the conditions for dignity and calm during one of the most difficult moments in a family's life. Plan the shift around candle-lighting, not the other way around.",
      ),
      callout(
        "key",
        "Key message",
        "Erev Shabbos shifts must finish with comfortable margin before candle-lighting. If anything is missing or broken, it must be reported in writing immediately — never left until after Shabbos.",
      ),
    ],
  },
  {
    id: "items",
    number: "2",
    title: "Items checklist",
    intro: "The following items should be available in the room before Shabbos and Yom Tov.",
    blocks: [
      checklist([
        "Challah and grape juice / wine",
        "Candles where permitted by the hospital",
        "Siddurim, Tehillim and benchers",
        "Shabbos kettle or urn",
        "Hot water facilities ready for Shabbos use",
        "Fridge and freezer prepared in Shabbos mode",
        "Pre-prepared Shabbos meals where provided",
        "Disposable plates, cups and cutlery",
        "Reading materials suitable for Shabbos",
      ]),
      callout(
        "tip",
        "Tip",
        "Confirm hospital-specific permissions for candles, flames and electrical items before each Shabbos. Permissions can vary by ward and by site.",
      ),
    ],
  },
  {
    id: "kettle",
    number: "3",
    title: "Shabbos kettle / water machine procedure",
    intro:
      "The Shabbos kettle or water machine must be set up before Shabbos so that hot water is available without contravening Shabbos.",
    blocks: [
      steps([
        "Fill the kettle or urn before Shabbos.",
        "Switch it on before Shabbos and confirm it is heating.",
        "Confirm any Shabbos-mode setting is engaged where the appliance supports it.",
        "Position the kettle safely, away from edges and walkways.",
        "Leave clear written guidance for users where helpful.",
      ]),
      callout(
        "important",
        "Important rule",
        "Do not switch the kettle or water machine on or off during Shabbos. If an issue is noticed, report it in writing after Shabbos using the incident form.",
      ),
    ],
  },
  {
    id: "fridge-freezer",
    number: "4",
    title: "Fridge and freezer Shabbos mode",
    intro:
      "Fridges and freezers must be set into Shabbos mode where the appliance supports it, before Shabbos begins.",
    blocks: [
      steps([
        "Identify whether the appliance supports a Shabbos mode.",
        "Engage Shabbos mode before candle-lighting.",
        "Confirm the internal light is disabled where appropriate.",
        "Place new items behind older items and keep the door area clear.",
        "Check that the door closes fully and seals properly.",
      ]),
      callout(
        "tip",
        "Rotation rule",
        "Place new items behind older items. Remove expired or unlabelled items. Keep labels facing forward so the next volunteer can read them at a glance.",
      ),
    ],
  },
  {
    id: "appliances-room",
    number: "5",
    title: "Hot warmer, lights and air-conditioning guidance",
    intro:
      "Appliances and room conditions must be set before Shabbos so that the room remains usable without any switching during Shabbos.",
    blocks: [
      table(
        ["Item", "Set before Shabbos"],
        [
          ["Hot warmer", "Switch on with food in place where used; confirm it is heating safely."],
          ["Lights", "Keep on before Shabbos where needed; confirm timers if any are in use."],
          [
            "Air-conditioning",
            "If hot weather is expected, set air-conditioning before Shabbos and leave it running.",
          ],
          ["Heating", "Set to a comfortable level before Shabbos and leave undisturbed."],
        ],
      ),
      callout(
        "important",
        "Important rule",
        "Nothing should be switched on or off during Shabbos. Decisions about lights, heating and air-conditioning must be made before candle-lighting.",
      ),
    ],
  },
  {
    id: "erev-shabbos",
    number: "6",
    title: "Erev Shabbos preparation checklist",
    intro:
      "This checklist consolidates the Erev Shabbos responsibilities already present in the source manual: timing, the full hospital shift procedure, stock management, cleanliness and written reporting.",
    blocks: [
      checklist([
        "Start the Erev Shabbos shift early enough to finish with margin before candle-lighting",
        "Confirm with the coordinator which hospital and which room",
        "Collect goods from the hub or confirm goods have already been prepared",
        "Check fridge, freezer and warmers on arrival at the hospital",
        "Restock shelves, fridge, freezer and cupboards; place new items behind older items",
        "Remove expired or unlabelled items",
        "Wipe surfaces and the fridge where needed",
        "Set the Shabbos kettle / water machine before Shabbos",
        "Set fridge and freezer into Shabbos mode where supported",
        "Confirm lights, heating and air-conditioning are set as required",
        "Place Shabbos items, siddurim, Tehillim and benchers neatly",
        "Send a written report with stock shortages, incidents and requests, including photos where helpful",
      ]),
    ],
  },
  {
    id: "motzei-shabbos",
    number: "7",
    title: "Motzei Shabbos clear-up checklist",
    intro: "After Shabbos, the room must be returned to its weekday standard so the next team can use it.",
    blocks: [
      checklist([
        "Return appliances to their normal weekday setting where they were placed into Shabbos mode",
        "Remove remaining perishable food that cannot safely be carried into the next week",
        "Wipe surfaces and the fridge where needed",
        "Reorganise items neatly, labels facing forward, similar items together",
        "Note any stock shortages and items that need restocking",
        "Note any breakages, faults or hospital issues that arose over Shabbos",
        "Send a written Motzei Shabbos report to the coordinator so the weekday team can plan accordingly",
      ]),
      footnote(
        "Source limitation: the source manual does not contain a dedicated Motzei Shabbos section. This checklist is assembled from related appliance, cleanliness, stock-management and reporting rules already present in the manual. Ezra Umarpeh to confirm any additional hospital-specific or halachic steps before final print.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 5 — Reporting, Incidents & Requests
// ---------------------------------------------------------------------------

const BOOKLET_5_SECTIONS: BookletSection[] = [
  {
    id: "incident-vs-request",
    number: "1",
    title: "Incident vs request",
    blocks: [
      table(
        ["Incident", "Request"],
        [
          ["Something happened that needs attention — a fault, a safety issue, a complaint.", "Something would improve the room or service — an idea, an upgrade, an extra item."],
          ["Often time-sensitive.", "Usually non-urgent."],
          ["Reported on the incident form.", "Reported on the request / improvement form."],
        ],
      ),
      callout(
        "key",
        "If in doubt",
        "If you are not sure whether something is an incident or a request, treat it as an incident and tell the coordinator. It is always safer to over-report than under-report.",
      ),
    ],
  },
  {
    id: "how-to-report",
    number: "2",
    title: "How to report",
    blocks: [
      steps([
        "Confirm what happened, when, and where.",
        "Decide if it is urgent. If anyone is at risk, contact the coordinator immediately by phone as well as in writing.",
        "Take photos where helpful.",
        "Write a clear short message: hospital, room, time, what happened, what you have done.",
        "Send the message to the coordinator and, where appropriate, complete the matching QR / digital form.",
      ]),
    ],
  },
  {
    id: "why-written",
    number: "3",
    title: "Why written reporting matters",
    blocks: [
      para(
        "If it is not written down, it often does not get fixed. Verbal-only reports are easily lost between shifts and between coordinators.",
      ),
      list([
        "Written reports give coordinators an evidence trail.",
        "They prevent the same problem being raised again and again.",
        "They help us plan stock, maintenance and Shabbos cover.",
        "They protect the volunteer who raised the issue.",
      ]),
    ],
  },
  {
    id: "whatsapp-good",
    number: "4",
    title: "Sample WhatsApp messages — good and poor",
    blocks: [
      callout(
        "tip",
        "Good stock report",
        '"Royal Free room checked at 7:45 PM. Fridge is clean. Milk is low, grape juice low, crackers empty. Storage cupboard organised. No incidents. Crates returned to hub."',
      ),
      callout(
        "tip",
        "Good incident report",
        '"Urgent incident: Homerton room lock not working at 6:20 PM. Door cannot close properly. Photos attached. Please advise. I have informed the coordinator by phone."',
      ),
      callout(
        "tip",
        "Good request",
        '"Request for UCLH: the top shelf is too full and difficult to use. Suggest adding one extra shelf or rearranging the dry goods section. Photo attached."',
      ),
      callout(
        "important",
        "Poor example",
        '"Room not good." — Does not say which room, what is wrong, whether it is urgent, what action is needed, or whether photos exist.',
      ),
    ],
  },
  {
    id: "incident-template",
    number: "5",
    title: "Incident report template",
    blocks: [
      table(
        ["Question", "Details"],
        [
          ["Hospital / room", ""],
          ["Date and time", ""],
          ["Volunteer name", ""],
          ["What happened?", ""],
          ["Who was informed?", ""],
          ["Was anyone at risk?", ""],
          ["Was hospital staff / security involved?", ""],
          ["Photos taken?", ""],
          ["Immediate action taken", ""],
          ["Further action requested", ""],
        ],
      ),
    ],
  },
  {
    id: "request-template",
    number: "6",
    title: "Request / improvement template",
    blocks: [
      table(
        ["Question", "Details"],
        [
          ["Hospital / room", ""],
          ["Date", ""],
          ["Volunteer name", ""],
          ["What is being requested?", ""],
          ["Why is it helpful?", ""],
          ["Is it urgent?", ""],
          ["Suggested solution", ""],
          ["Photo attached?", ""],
          ["Coordinator notified?", ""],
        ],
      ),
    ],
  },
  {
    id: "qr-forms",
    number: "7",
    title: "QR codes and digital forms",
    blocks: [
      list([
        "Volunteer registration form",
        "Accessible transport booking",
        "Incident report form",
        "Request / improvement form",
        "Volunteer email: volunteers@ezraumarpeh.org",
      ]),
      footnote(
        "Client to confirm the live URLs and QR codes for the digital forms before printing the wallet card.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 6 — Trainer's Pack
// ---------------------------------------------------------------------------

const BOOKLET_6_SECTIONS: BookletSection[] = [
  {
    id: "programme",
    number: "1",
    title: "Training programme structure and timetable",
    blocks: [
      table(
        ["Module", "Suggested duration"],
        [
          ["Welcome and why this work matters", "10 minutes"],
          ["Mission and values", "10 minutes"],
          ["Hub procedure", "15 minutes"],
          ["Five-star room standard", "20 minutes"],
          ["Safety and confidentiality", "20 minutes"],
          ["Shabbos operations", "20 minutes"],
          ["Reporting, incidents and requests", "15 minutes"],
          ["QR codes and digital forms", "10 minutes"],
          ["Roleplay and activities", "30 minutes"],
          ["Q&A and sign-off", "10 minutes"],
        ],
      ),
    ],
  },
  {
    id: "trainer-guide",
    number: "2",
    title: "Trainer / facilitator guide",
    blocks: [
      table(
        ["Module", "Trainer focus", "Suggested activity"],
        [
          ["Welcome", "Create warmth and explain why the work matters.", "Each volunteer says name and hospital/team."],
          ["Mission and values", "Connect practical tasks to Kiddush Hashem and dignity.", "Short discussion: What does dignity look like in a hospital room?"],
          ["Hub procedure", "Make sure volunteers know the access and collection process.", "Walk through the hub step-by-step or show photos."],
          ["Room standards", "Explain five-star and 'like soldiers' expectations.", "Spot the mistake activity."],
          ["Safety and confidentiality", "Explain risks without frightening volunteers.", "Quiz and case study."],
          ["Shabbos operations", "Demonstrate appliances and preparation checklist.", "Hands-on demonstration."],
          ["Reporting", "Show how reports prevent recurring problems.", "Example incident vs request exercise."],
          ["Forms and QR systems", "Make sure everyone joins and completes forms.", "Scan QR codes together."],
        ],
      ),
      callout(
        "tip",
        "Trainer reminder",
        "Keep the session warm, clear and practical. Volunteers should leave feeling appreciated, but also clear that standards matter.",
      ),
    ],
  },
  {
    id: "sample-script",
    number: "3",
    title: "Sample trainer script",
    blocks: [
      callout(
        "note",
        "Opening words",
        "Thank you for giving your time to Ezra Umarpeh. The work you do may look simple — collecting, stocking, cleaning and reporting — but for a patient or family in hospital, it can change the whole experience. Our goal is to make every room feel cared for, safe, dignified and ready.",
      ),
      callout(
        "note",
        "Introducing standards",
        "We are aiming for a five-star standard. Not because we are fancy, but because people in hospital deserve dignity. A shelf that is neat, a fridge that is fresh and a room that is clean sends a message: someone cares.",
      ),
      callout(
        "note",
        "Introducing reporting",
        "If it is not written down, it often does not get fixed. Please do not rely only on verbal messages. Send clear WhatsApp or email reports, and use the QR forms where available.",
      ),
      callout(
        "note",
        "Closing words",
        "Every volunteer is part of the system. If each person does their part properly, the whole operation becomes easier, stronger and more reliable.",
      ),
    ],
  },
  {
    id: "roleplay",
    number: "4",
    title: "Roleplay scenarios",
    blocks: [
      list([
        "A family asks for medical advice — how do you respond?",
        "You find an unlabelled item in the fridge — what do you do?",
        "A patient asks you to fetch something from another ward.",
        "You notice a broken kettle on Erev Shabbos at 4 PM.",
        "Security challenges you in a corridor.",
        "Another volunteer is using the WhatsApp group inappropriately.",
        "A patient asks you a personal question about another patient.",
        "You arrive to find the room dirty and the previous team has left.",
        "A family member offers you a generous gift.",
        "You suspect a safeguarding concern about a child in the family.",
      ]),
      callout(
        "tip",
        "How to run it",
        "For each scenario: read it aloud, give the group two minutes to discuss, take answers, then share the agreed Ezra Umarpeh response.",
      ),
    ],
  },
  {
    id: "spot-the-mistake",
    number: "5",
    title: "Spot-the-mistake activity",
    blocks: [
      para(
        "Show photos of a hospital room with deliberate problems: messy shelves, expired food, an open fridge door, unlabelled items, a blocked walkway. Ask volunteers to find as many as they can.",
      ),
    ],
  },
  {
    id: "stock-challenge",
    number: "6",
    title: "Stock rotation challenge",
    blocks: [
      para(
        "Give the group a tray of items with different dates. Ask them to restock a model shelf correctly: newest behind, oldest at the front, expired removed, labels forward.",
      ),
    ],
  },
  {
    id: "confidentiality-quiz",
    number: "7",
    title: "Confidentiality quiz",
    blocks: [
      list([
        "True or false: I can mention a patient's name in the volunteer WhatsApp group if I am asking for advice. (False.)",
        "True or false: I can post a photo of the room with the patient out of the frame on social media. (False, unless authorised.)",
        "True or false: I can tell my family that a well-known person is in hospital. (False.)",
        "True or false: A safeguarding concern should always be escalated to the coordinator. (True.)",
      ]),
    ],
  },
  {
    id: "safety-challenge",
    number: "8",
    title: "Health and safety challenge",
    blocks: [
      list([
        "Find every hazard in the room photo.",
        "Decide which ones need immediate action and which need a written request.",
        "Practise writing the incident or request message.",
      ]),
    ],
  },
  {
    id: "simulation",
    number: "9",
    title: "Emergency simulation",
    blocks: [
      table(
        ["Question", "Team answer"],
        [
          ["What happened?", ""],
          ["Is it an incident or request?", ""],
          ["Who must be contacted?", ""],
          ["Is it urgent?", ""],
          ["Should photos be taken?", ""],
          ["What written report is needed?", ""],
          ["What should be done immediately?", ""],
        ],
      ),
    ],
  },
  {
    id: "attendance",
    number: "10",
    title: "Attendance log and feedback form",
    blocks: [
      table(
        ["Name", "Phone", "Email", "Session date", "Hospital / team", "Signature"],
        [["", "", "", "", "", ""]],
      ),
      footnote(
        "The attendance log and feedback form are also available as digital QR forms — see Booklet 5.",
      ),
    ],
  },
  {
    id: "certificate",
    number: "11",
    title: "Certificate of completion",
    blocks: [
      para(
        "Each volunteer who completes training receives a Certificate of Completion confirming they have read the handbook, completed the training and signed the volunteer agreement.",
      ),
      footnote("Certificate template is included in the print pack."),
    ],
  },
  {
    id: "closing",
    number: "12",
    title: "Final message to volunteers",
    blocks: [
      para(
        "Every stocked shelf, every organised cupboard, every clean fridge, every returned crate, every clear report, every Shabbos room prepared properly and every act of kindness helps create comfort and dignity for patients and families during difficult moments.",
      ),
      callout(
        "key",
        "Thank you",
        "Thank you for being part of Ezra Umarpeh.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Booklet 7 — Health, Safety & Safeguarding
// ---------------------------------------------------------------------------

const BOOKLET_7_SECTIONS: BookletSection[] = [
  {
    id: "principles",
    number: "1",
    title: "Health and safety principles",
    blocks: [
      list([
        "Look before you act — assess the room when you arrive.",
        "Lift safely — knees bent, back straight, get help for heavy or awkward loads.",
        "Walk, do not run, in corridors.",
        "Report hazards immediately — do not assume someone else will.",
        "Never block fire exits, doorways or walkways with crates.",
      ]),
    ],
  },
  {
    id: "cleaning-materials",
    number: "2",
    title: "Cleaning materials",
    blocks: [
      list([
        "Use only approved cleaning products.",
        "Never mix products — particularly bleach and ammonia-based cleaners.",
        "Store cleaning products out of reach of children.",
        "Wear gloves where the product label requires it.",
        "Ventilate the room while cleaning.",
      ]),
    ],
  },
  {
    id: "electricals",
    number: "3",
    title: "Electrical appliances",
    blocks: [
      list([
        "Do not use damaged plugs, cables or appliances.",
        "Do not overload sockets.",
        "Keep liquids away from electrical equipment.",
        "Report faulty appliances immediately on the incident form.",
        "On Erev Shabbos, confirm appliances are set before candle-lighting and not switched on or off during Shabbos.",
      ]),
    ],
  },
  {
    id: "ladders",
    number: "4",
    title: "Ladders",
    blocks: [
      list([
        "Use only ladders that are safe and stable.",
        "Always have someone hold the ladder for high reaches.",
        "Do not stand on chairs or boxes instead of a ladder.",
        "Report damaged ladders immediately.",
      ]),
    ],
  },
  {
    id: "broken-glass",
    number: "5",
    title: "Broken glass",
    blocks: [
      steps([
        "Keep people away from the area.",
        "Use a brush and dustpan or thick gloves; never pick up glass with bare hands.",
        "Wrap glass in paper or card before binning.",
        "Wipe the area afterwards.",
        "Report the breakage in writing.",
      ]),
    ],
  },
  {
    id: "allergies",
    number: "6",
    title: "Allergies and food labels",
    blocks: [
      list([
        "Always keep allergy information on food labels intact.",
        "Do not decant food into unlabelled containers.",
        "Be especially careful with nuts, dairy and gluten.",
        "If you spot an unlabelled item, remove it from communal stock and report it.",
      ]),
    ],
  },
  {
    id: "manual-handling",
    number: "7",
    title: "Manual handling and PPE",
    blocks: [
      list([
        "Plan the lift — where is it going, what is in the way?",
        "Bend your knees, keep your back straight, keep the load close.",
        "Use a trolley for heavy or repeated loads.",
        "Wear gloves where the task requires it.",
        "Ask for help — never struggle with a load that is too heavy.",
      ]),
    ],
  },
  {
    id: "confidentiality",
    number: "8",
    title: "Confidentiality and safeguarding",
    blocks: [
      callout(
        "important",
        "Confidentiality",
        "What you see, hear or notice in a hospital room is private. It must not be discussed with anyone outside the Ezra Umarpeh team, and must not be shared on social media or in WhatsApp groups beyond the operational team.",
      ),
      para(
        "Safeguarding concerns about a child or vulnerable adult must be reported to the coordinator immediately. Safeguarding is never something to handle alone.",
      ),
    ],
  },
  {
    id: "boundaries",
    number: "9",
    title: "Professional boundaries",
    blocks: [
      list([
        "Do not give medical advice.",
        "Do not enter wards unless approved and trained.",
        "Do not photograph patients or families.",
        "Do not accept gifts that could compromise the relationship.",
        "Refer all sensitive requests to the coordinator.",
      ]),
    ],
  },
  {
    id: "policies",
    number: "10",
    title: "Policies and procedures awareness",
    blocks: [
      list([
        "Equal opportunities — we treat everyone with the same dignity, regardless of background.",
        "Anti-bullying — bullying or harassment of volunteers, staff, patients or families is unacceptable.",
        "Complaints — complaints from patients or families are routed to the coordinator and recorded.",
        "Data protection — personal information is held only where necessary and only by authorised people.",
        "Whistleblowing — concerns about wrongdoing can be raised confidentially to the Head of Operations.",
      ]),
      footnote(
        "Client to confirm the live complaints procedure detail and whistleblowing contact for the final print.",
      ),
    ],
  },
  {
    id: "self-assessment",
    number: "11",
    title: "Volunteer self-assessment",
    blocks: [
      list([
        "Did I arrive on time and prepared?",
        "Did I follow the room standard?",
        "Did I report incidents and requests in writing?",
        "Did I keep what I saw confidential?",
        "Did I treat everyone with dignity?",
        "Is there something I could do better next shift?",
      ]),
    ],
  },
];

// ---------------------------------------------------------------------------
// Loose-leaf items
// ---------------------------------------------------------------------------

const LOOSE_1_SECTIONS: BookletSection[] = [
  {
    id: "letter",
    number: "1",
    title: "Welcome from the Head of Operations",
    blocks: [
      para("Dear volunteer,"),
      para(
        "Welcome to Ezra Umarpeh. Thank you for choosing to give your time to families during one of the hardest moments in their lives.",
      ),
      para(
        "This pack is yours to keep. It explains what we do, what your role is, and how we work together. Start with Booklet 1 — About Ezra Umarpeh — for an overview, then read Booklet 2 — Volunteer Handbook before your first shift.",
      ),
      para(
        "If you have any questions, large or small, please email volunteers@ezraumarpeh.org or speak to your coordinator.",
      ),
      para("With appreciation,"),
      para("Head of Operations, Ezra Umarpeh"),
      footnote("Client to confirm the signatory name and any additional welcome lines."),
    ],
  },
];

const LOOSE_2_SECTIONS: BookletSection[] = [
  {
    id: "inspection",
    number: "1",
    title: "Room Inspection Checklist",
    intro: "Use this checklist when assessing a hospital room during or after a shift.",
    blocks: [
      table(
        ["Area", "Check", "OK?", "Action needed"],
        [
          ["Entrance", "Door, code and lock working", "", ""],
          ["General room", "Looks clean and welcoming", "", ""],
          ["Surfaces", "Tables and counters wiped", "", ""],
          ["Floors", "No obvious dirt, spill or hazard", "", ""],
          ["Shelves", "Stock neat and labels facing forward", "", ""],
          ["Storage cupboard", "Full, organised and not dumped", "", ""],
          ["Fridge", "Clean, no smell, items in date", "", ""],
          ["Freezer", "Working and organised", "", ""],
          ["Hot water", "Kettle / urn working", "", ""],
          ["Microwave", "Clean and safe", "", ""],
          ["Lights", "On before Shabbos if required", "", ""],
          ["Air-conditioning", "Prepared if hot weather", "", ""],
          ["Judaica", "Siddurim, Tehillim and benchers available", "", ""],
          ["Bins", "Not overflowing", "", ""],
          ["Crates / trolley", "Returned or ready to return", "", ""],
        ],
      ),
    ],
  },
];

const LOOSE_3_SECTIONS: BookletSection[] = [
  {
    id: "stock",
    number: "1",
    title: "Stock Checklist Template",
    intro: "Use this as a printable template for stock checks. It can be adapted for each hospital.",
    blocks: [
      table(
        ["Category", "Item", "Full / Low / Empty", "Expiry concern?", "Notes"],
        [
          ["Drinks", "Water", "", "", ""],
          ["Drinks", "Juice", "", "", ""],
          ["Dairy", "Milk", "", "", ""],
          ["Dairy", "Cheese / yogurt", "", "", ""],
          ["Fresh", "Fruit", "", "", ""],
          ["Fresh", "Fresh food packs", "", "", ""],
          ["Dry goods", "Biscuits / crackers", "", "", ""],
          ["Dry goods", "Snacks", "", "", ""],
          ["Shabbos", "Challah", "", "", ""],
          ["Shabbos", "Grape juice", "", "", ""],
          ["Shabbos", "Candles where appropriate", "", "", ""],
          ["Judaica", "Siddurim / Tehillim", "", "", ""],
          ["Disposables", "Cups / plates / cutlery", "", "", ""],
          ["Other", "Other missing items", "", "", ""],
        ],
      ),
    ],
  },
];

const LOOSE_4_SECTIONS: BookletSection[] = [
  {
    id: "qr",
    number: "1",
    title: "QR Quick-Reference Card",
    intro: "Wallet-sized double-sided card with the key Ezra Umarpeh QR codes and contacts.",
    blocks: [
      list([
        "Volunteer registration form",
        "Accessible transport booking",
        "Incident report form",
        "Request / improvement form",
      ]),
      callout(
        "note",
        "Volunteer email",
        "volunteers@ezraumarpeh.org",
      ),
      footnote(
        "Client to confirm the live URLs for the four QR codes before print. The wallet card itself is in the print pack.",
      ),
    ],
  },
];

const LOOSE_5_SECTIONS: BookletSection[] = [
  {
    id: "notice",
    number: "1",
    title: "Patient / Family Room Notice",
    intro: "A patient- and family-facing notice for the Ezra Umarpeh hospital room.",
    blocks: [
      callout(
        "key",
        "Welcome",
        "Welcome to the Ezra Umarpeh hospital room. You are welcome to use this room during your stay.",
      ),
      para("What is available:"),
      list([
        "Hot water, tea, coffee.",
        "Light food in the fridge and cupboards.",
        "Siddurim, Tehillim and benchers.",
        "On Shabbos and Yom Tov: pre-prepared meals, challah and grape juice where provided.",
      ]),
      callout(
        "important",
        "Private food",
        "Please label any private food clearly with your name and the date. Unlabelled food may be removed by our volunteers.",
      ),
      para(
        "If anything is missing or broken, please contact the Ezra Umarpeh coordinator or email volunteers@ezraumarpeh.org.",
      ),
    ],
  },
];

// ---------------------------------------------------------------------------
// Item index
// ---------------------------------------------------------------------------

export const BOOKLETS: PackItem[] = [
  {
    slug: "01-about-ezra-umarpeh",
    number: "01",
    title: "About Ezra Umarpeh",
    subtitle: "Public-facing introduction",
    audience: "Hospital staff, donors, families, partners, general public",
    pages: "A5, 12 pages",
    group: "booklet",
    status: "live",
    accent: "sage",
    summary:
      "Welcome, vision, mission and values, core services overview, accommodation, accessible transport, donations and contact information.",
    pdfUrl: "/manus-storage/Booklet_1_About_Ezra_Umarpeh_bc678a29.pdf",
    sections: BOOKLET_1_SECTIONS,
  },
  {
    slug: "02-volunteer-handbook",
    number: "02",
    title: "Volunteer Handbook",
    subtitle: "Core handbook for every volunteer",
    audience: "Every volunteer",
    pages: "A5, 12 pages",
    group: "booklet",
    status: "live",
    accent: "forest",
    summary:
      "Mission and values, responsibilities, do's and don'ts, professional boundaries, confidentiality and safeguarding, WhatsApp etiquette, ID and access, hospital staff interaction, volunteer agreement.",
    pdfUrl: "/manus-storage/Booklet_2_Volunteer_Handbook_d2b976e8.pdf",
    sections: BOOKLET_2_SECTIONS,
  },
  {
    slug: "03-hospital-room-operations",
    number: "03",
    title: "Hospital Room Operations Guide",
    subtitle: "Practical operations reference",
    audience: "Active volunteers; kept in the hub",
    pages: "A5, 12 pages",
    group: "booklet",
    status: "live",
    accent: "slate",
    summary:
      "Hub arrival, full hospital shift procedure, access and stock labelling, the Five-Star Hospital Room standard, cleanliness, stock management, private patient food rules.",
    pdfUrl: "/manus-storage/Booklet_3_Hospital_Room_Operations_e57d7583.pdf",
    sections: BOOKLET_3_SECTIONS,
  },
  {
    slug: "04-shabbos-yom-tov",
    number: "04",
    title: "Shabbos & Yom Tov Preparation Guide",
    subtitle: "Specialist guide for Shabbos shift volunteers",
    audience: "Shabbos shift volunteers",
    pages: "A5, 8 pages",
    group: "booklet",
    status: "live",
    accent: "ezra",
    summary:
      "Awareness, items checklist, Shabbos kettle, fridge and freezer Shabbos mode, hot warmer / lights / air-conditioning guidance, Erev Shabbos and Motzei Shabbos checklists.",
    pdfUrl: "/manus-storage/Booklet_4_Shabbos_Yom_Tov_077d71ec.pdf",
    sections: BOOKLET_4_SECTIONS,
  },
  {
    slug: "05-reporting-incidents",
    number: "05",
    title: "Reporting, Incidents & Requests",
    subtitle: "Reference for clear written reporting",
    audience: "All volunteers and coordinators",
    pages: "A5, 12 pages",
    group: "booklet",
    status: "live",
    accent: "amber",
    summary:
      "Incident vs request, how to report, why written reporting matters, sample WhatsApp messages, incident and request templates, QR codes and digital forms.",
    pdfUrl: "/manus-storage/Booklet_5_Reporting_Incidents_Requests_518d6b84.pdf",
    sections: BOOKLET_5_SECTIONS,
  },
  {
    slug: "06-trainers-pack",
    number: "06",
    title: "Trainer's Pack",
    subtitle: "Restricted: trainers and coordinators only",
    audience: "Trainers and coordinators only",
    pages: "A5, 16 pages",
    group: "booklet",
    status: "live",
    accent: "plum",
    summary:
      "Programme, trainer guide, sample script, ten roleplay scenarios, activities, simulation, attendance log, certificate of completion.",
    pdfUrl: "/manus-storage/Booklet_6_Trainers_Pack_459b37f3.pdf",
    sections: BOOKLET_6_SECTIONS,
  },
  {
    slug: "07-health-safety-safeguarding",
    number: "07",
    title: "Health, Safety & Safeguarding",
    subtitle: "Compliance reference",
    audience: "All volunteers; reference for hospitals and funders",
    pages: "A5, 16 pages",
    group: "booklet",
    status: "live",
    accent: "crimson",
    summary:
      "Health and safety principles, cleaning materials, electricals, ladders, broken glass, allergies, manual handling, PPE, confidentiality, safeguarding, professional boundaries, policies, self-assessment.",
    pdfUrl: "/manus-storage/Booklet_7_Health_Safety_Safeguarding_ec7b406c.pdf",
    sections: BOOKLET_7_SECTIONS,
  },
];

export const LOOSE_LEAF: PackItem[] = [
  {
    slug: "loose-welcome-letter",
    number: "L1",
    title: "Welcome letter from the Head of Operations",
    subtitle: "Single-page signed welcome",
    audience: "Every new volunteer",
    pages: "A4, 1 page",
    group: "loose-leaf",
    status: "live",
    accent: "neutral",
    summary:
      "A short, warm welcome from the Head of Operations introducing the pack and what the role means in practice.",
    pdfUrl: "/manus-storage/Looseleaf_1_Welcome_Letter_ec3ea9ec.pdf",
    sections: LOOSE_1_SECTIONS,
  },
  {
    slug: "loose-room-inspection",
    number: "L2",
    title: "Room Inspection Checklist",
    subtitle: "Designed to be laminated and reused",
    audience: "Active volunteers and coordinators",
    pages: "A4, 1 page",
    group: "loose-leaf",
    status: "live",
    accent: "neutral",
    summary:
      "A single-sheet inspection checklist covering door, surfaces, shelves, fridge, freezer, kettle, microwave, lights, Judaica, bins and crates.",
    pdfUrl: "/manus-storage/Looseleaf_2_Room_Inspection_Checklist_6fc127b9.pdf",
    sections: LOOSE_2_SECTIONS,
  },
  {
    slug: "loose-stock-checklist",
    number: "L3",
    title: "Stock Checklist Template",
    subtitle: "Adaptable per hospital",
    audience: "Active volunteers and coordinators",
    pages: "A4, 1 page",
    group: "loose-leaf",
    status: "live",
    accent: "neutral",
    summary:
      "A structured stock checklist grouping drinks, dairy, fresh, dry goods, Shabbos items, Judaica and disposables.",
    pdfUrl: "/manus-storage/Looseleaf_3_Stock_Checklist_Template_03ebb048.pdf",
    sections: LOOSE_3_SECTIONS,
  },
  {
    slug: "loose-qr-card",
    number: "L4",
    title: "QR Code Quick-Reference Card",
    subtitle: "Wallet-sized, double-sided",
    audience: "Every volunteer",
    pages: "Wallet card",
    group: "loose-leaf",
    status: "live",
    accent: "ezra",
    summary:
      "Wallet card with the key Ezra Umarpeh QR codes: volunteer registration, transport booking, incident form, request form, plus the volunteer email.",
    pdfUrl: "/manus-storage/Looseleaf_4_QR_QuickReference_Card_487797ca.pdf",
    sections: LOOSE_4_SECTIONS,
  },
  {
    slug: "loose-room-notice",
    number: "L5",
    title: "Patient / Family Room Notice",
    subtitle: "Visible in the hospital room",
    audience: "Patients, families and visitors using the room",
    pages: "A5",
    group: "loose-leaf",
    status: "live",
    accent: "neutral",
    summary:
      "A patient- and family-facing notice explaining what the room is, what is available and the private food labelling rule.",
    pdfUrl: "/manus-storage/Looseleaf_5_Patient_Family_Room_Notice_94169eac.pdf",
    sections: LOOSE_5_SECTIONS,
  },
];

export const ALL_ITEMS: PackItem[] = [...BOOKLETS, ...LOOSE_LEAF];

export function getItemBySlug(slug: string): PackItem | undefined {
  return ALL_ITEMS.find((i) => i.slug === slug);
}

export function itemPath(item: PackItem): string {
  return item.group === "booklet" ? `/booklets/${item.slug}` : `/loose-leaf/${item.slug}`;
}

// ---------------------------------------------------------------------------
// Pack-level meta documents
// ---------------------------------------------------------------------------

export const PACK_META = {
  contentsPdfUrl: "/manus-storage/00_Pack_Contents_32fee4e1.pdf",
  designSystemPdfUrl: "/manus-storage/01_Design_System_b4888525.pdf",
  verificationListPdfUrl: "/manus-storage/02_Client_Verification_List_3da00e68.pdf",
};

// ---------------------------------------------------------------------------
// Search index
// ---------------------------------------------------------------------------

export type SearchRecord = {
  id: string;
  itemSlug: string;
  itemTitle: string;
  itemGroup: "booklet" | "loose-leaf";
  itemNumber: string;
  sectionId?: string;
  title: string;
  excerpt: string;
};

function excerptFromBlocks(intro: string | undefined, blocks: SectionBlock[]): string {
  const parts: string[] = [];
  if (intro) parts.push(intro);
  for (const b of blocks) {
    if (b.kind === "paragraph") parts.push(b.text);
    else if (b.kind === "callout") parts.push(`${b.title}: ${b.text}`);
    else if (b.kind === "list" || b.kind === "checklist" || b.kind === "steps")
      parts.push(b.items.join(" • "));
    else if (b.kind === "footnote") parts.push(b.text);
    else if (b.kind === "table")
      parts.push(b.rows.map((r) => r.filter(Boolean).join(" — ")).join(" • "));
  }
  return parts.join(" ").slice(0, 240);
}

export function buildSearchIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];
  for (const item of ALL_ITEMS) {
    const itemTitle = `${item.group === "booklet" ? "Booklet" : "Loose-leaf"} ${item.number} — ${item.title}`;
    // top-level item record
    records.push({
      id: item.slug,
      itemSlug: item.slug,
      itemTitle,
      itemGroup: item.group,
      itemNumber: item.number,
      title: itemTitle,
      excerpt: item.summary,
    });
    // section records
    for (const s of item.sections) {
      records.push({
        id: `${item.slug}#${s.id}`,
        itemSlug: item.slug,
        itemTitle,
        itemGroup: item.group,
        itemNumber: item.number,
        sectionId: s.id,
        title: `${s.number}. ${s.title}`,
        excerpt: excerptFromBlocks(s.intro, s.blocks),
      });
    }
  }
  return records;
}
