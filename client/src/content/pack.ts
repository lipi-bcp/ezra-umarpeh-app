// Central data for the Ezra Umarpeh Volunteer Resource Hub shell.
// Only Booklet 4 has approved sample content. All other items are deliberately
// shown as "Coming soon — awaiting production" because they have not yet been
// produced from the source manual. Do not add invented procedural content here.

export type PackStatus = "approved-sample" | "coming-soon";

export type PackItem = {
  slug: string;
  number: string; // "01", "02", ... or "L1" for loose-leaf
  title: string;
  subtitle: string;
  audience: string;
  pages: string;
  group: "booklet" | "loose-leaf";
  status: PackStatus;
  summary: string;
  intendedContents: string[];
};

export const PACK_VERSION = "Version 1.0 — May 2026";

export const BOOKLETS: PackItem[] = [
  {
    slug: "01-about-ezra-umarpeh",
    number: "01",
    title: "About Ezra Umarpeh",
    subtitle: "Public-facing introduction",
    audience: "Hospital staff, donors, families, partners, general public",
    pages: "8–12 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Welcome, vision, mission and values, core services overview, accommodation, accessible transport, donations and contact information.",
    intendedContents: [
      "Welcome",
      "Vision, mission and values",
      "Core services overview",
      "Hospital accommodation support",
      "Accessible transport",
      "Donations and sponsorship",
      "How to get in touch",
    ],
  },
  {
    slug: "02-volunteer-handbook",
    number: "02",
    title: "Volunteer Handbook",
    subtitle: "Core handbook for every volunteer",
    audience: "Every volunteer",
    pages: "16–20 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Mission and values summary, responsibilities, do's and don'ts, boundaries, confidentiality, safeguarding, WhatsApp etiquette, ID and access, volunteer agreement.",
    intendedContents: [
      "Welcome to volunteers",
      "Mission and values summary",
      "Volunteer responsibilities",
      "Do's and don'ts",
      "Professional boundaries",
      "Confidentiality and safeguarding",
      "Communication standards and WhatsApp etiquette",
      "ID and access guidance",
      "Hospital staff and security interaction",
      "Volunteer agreement and sign-off",
    ],
  },
  {
    slug: "03-hospital-room-operations",
    number: "03",
    title: "Hospital Room Operations Guide",
    subtitle: "Practical operations reference",
    audience: "Active volunteers; kept in the hub",
    pages: "12–16 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Hub arrival, full hospital shift procedure, access and stock labelling, the Five-Star Hospital Room standard, cleanliness, stock management, rotation rules.",
    intendedContents: [
      "Hub arrival and collection procedure",
      "Leadership and coordinator structure",
      "Full hospital shift procedure",
      "Access, keys, codes and stock labelling",
      "Five-Star Hospital Room standard",
      "Cleanliness responsibilities",
      "Stock management and rotation",
      "Private patient food rules",
    ],
  },
  {
    slug: "04-shabbos-yom-tov",
    number: "04",
    title: "Shabbos & Yom Tov Preparation Guide",
    subtitle: "Specialist guide for Shabbos shift volunteers",
    audience: "Shabbos shift volunteers",
    pages: "A5, 8 pages",
    group: "booklet",
    status: "approved-sample",
    summary:
      "Awareness, items checklist, Shabbos kettle, fridge and freezer Shabbos mode, hot warmer / lights / air-conditioning guidance, Erev Shabbos and Motzei Shabbos checklists.",
    intendedContents: [
      "Shabbos and Yom Tov awareness",
      "Items checklist",
      "Shabbos kettle / water machine procedure",
      "Fridge and freezer Shabbos mode",
      "Hot warmer, lights and air-conditioning guidance",
      "Erev Shabbos preparation checklist",
      "Motzei Shabbos clear-up checklist (flagged: assembled from related procedures)",
    ],
  },
  {
    slug: "05-reporting-incidents",
    number: "05",
    title: "Reporting, Incidents & Requests",
    subtitle: "Reference for clear written reporting",
    audience: "All volunteers and coordinators",
    pages: "6–8 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Incident vs request, how to report, why written reporting matters, sample WhatsApp messages, report templates, QR codes and digital forms.",
    intendedContents: [
      "Incident vs request explained",
      "How to report",
      "Why written reporting matters",
      "Sample WhatsApp messages (good and poor)",
      "Incident report template",
      "Request / improvement template",
      "QR codes and digital forms",
    ],
  },
  {
    slug: "06-trainers-pack",
    number: "06",
    title: "Trainer's Pack",
    subtitle: "Restricted: trainers and coordinators only",
    audience: "Trainers and coordinators only",
    pages: "16–20 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Training programme, trainer guide, sample script, all ten roleplay scenarios, activities, simulation, attendance log, feedback form, certificate.",
    intendedContents: [
      "Training programme structure and timetable",
      "Trainer / facilitator guide",
      "Sample trainer script",
      "All ten roleplay scenarios with discussion notes",
      "Spot-the-mistake activity",
      "Stock rotation challenge",
      "Confidentiality quiz",
      "Health and safety challenge",
      "Emergency simulation",
      "Attendance log and feedback form",
      "Certificate of completion template",
    ],
  },
  {
    slug: "07-health-safety-safeguarding",
    number: "07",
    title: "Health, Safety & Safeguarding",
    subtitle: "Compliance reference",
    audience: "All volunteers; reference for hospitals and funders",
    pages: "8–10 pages",
    group: "booklet",
    status: "coming-soon",
    summary:
      "Health and safety principles, cleaning materials, electricals, ladders, broken glass, allergies and food labels, manual handling, PPE, confidentiality, safeguarding, professional boundaries, policies awareness.",
    intendedContents: [
      "Health and safety principles",
      "Cleaning materials",
      "Electrical appliances",
      "Ladders",
      "Broken glass",
      "Allergies and food labels",
      "Manual handling and PPE",
      "Confidentiality and safeguarding",
      "Professional boundaries",
      "Policies and procedures awareness",
    ],
  },
];

export const LOOSE_LEAF: PackItem[] = [
  {
    slug: "loose-welcome-letter",
    number: "L1",
    title: "Welcome letter from the Head of Operations",
    subtitle: "Single page, signed welcome",
    audience: "Every new volunteer",
    pages: "1 page",
    group: "loose-leaf",
    status: "coming-soon",
    summary:
      "A short, warm welcome from the Head of Operations introducing the pack and what the role means in practice.",
    intendedContents: [
      "Welcome and thanks",
      "What the pack is for",
      "What to read first",
      "How to ask for help",
    ],
  },
  {
    slug: "loose-room-inspection",
    number: "L2",
    title: "Room Inspection Checklist",
    subtitle: "Designed to be laminated and reused",
    audience: "Active volunteers and coordinators",
    pages: "1 page",
    group: "loose-leaf",
    status: "coming-soon",
    summary:
      "A single-sheet inspection checklist for the hospital room: cleanliness, stock, appliances, Shabbos readiness and reporting.",
    intendedContents: [
      "Cleanliness",
      "Stock and labelling",
      "Appliance checks",
      "Shabbos readiness",
      "Reporting reminders",
    ],
  },
  {
    slug: "loose-stock-checklist",
    number: "L3",
    title: "Stock Checklist template",
    subtitle: "Adaptable per hospital",
    audience: "Active volunteers and coordinators",
    pages: "1 page",
    group: "loose-leaf",
    status: "coming-soon",
    summary:
      "A blank-but-structured stock checklist template grouping fresh, dry, freezer, drinks, Shabbos and Judaica items.",
    intendedContents: [
      "Fresh food",
      "Dry goods",
      "Freezer",
      "Drinks",
      "Shabbos items",
      "Judaica",
    ],
  },
  {
    slug: "loose-qr-card",
    number: "L4",
    title: "QR Code Quick-Reference Card",
    subtitle: "Wallet-sized, double-sided",
    audience: "Every volunteer",
    pages: "Wallet card",
    group: "loose-leaf",
    status: "coming-soon",
    summary:
      "Wallet-sized card with the key Ezra Umarpeh QR codes and links: volunteer registration, transport booking, incident and request forms, volunteer email.",
    intendedContents: [
      "Volunteer Registration Form",
      "Accessible Transport Booking",
      "Incident report form",
      "Request / improvement form",
      "Volunteer email",
    ],
  },
  {
    slug: "loose-room-notice",
    number: "L5",
    title: "Patient / Family Room Notice",
    subtitle: "Visible in the hospital room",
    audience: "Patients, families and visitors using the room",
    pages: "A5 or A4",
    group: "loose-leaf",
    status: "coming-soon",
    summary:
      "A patient- and family-facing notice explaining what the room is, what is available, and the private food labelling rule.",
    intendedContents: [
      "Welcome to the Ezra Umarpeh hospital room",
      "What is available",
      "Private food labelling rule",
      "How to ask for help",
    ],
  },
];

export const ALL_ITEMS: PackItem[] = [...BOOKLETS, ...LOOSE_LEAF];

export function getItemBySlug(slug: string): PackItem | undefined {
  return ALL_ITEMS.find((i) => i.slug === slug);
}

// ---------------------------------------------------------------------------
// Booklet 4 — full content (approved sample only)
// ---------------------------------------------------------------------------

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

export const BOOKLET_4_SECTIONS: BookletSection[] = [
  {
    id: "awareness",
    number: "1",
    title: "Shabbos and Yom Tov awareness",
    intro:
      "Shabbos and Yom Tov preparation is one of the most important parts of the hospital room operation. The room must be ready well before candle-lighting so that patients and families experience a calm, dignified Shabbos.",
    blocks: [
      {
        kind: "paragraph",
        text:
          "Volunteers preparing a hospital room for Shabbos or Yom Tov are not only restocking — they are creating the conditions for dignity and calm during one of the most difficult moments in a family's life. Plan the shift around candle-lighting, not the other way around.",
      },
      {
        kind: "callout",
        tone: "key",
        title: "Key message",
        text:
          "Erev Shabbos shifts must finish with comfortable margin before candle-lighting. If anything is missing or broken, it must be reported in writing immediately — never left until after Shabbos.",
      },
    ],
  },
  {
    id: "items",
    number: "2",
    title: "Items checklist",
    intro: "The following items should be available in the room before Shabbos and Yom Tov.",
    blocks: [
      {
        kind: "checklist",
        items: [
          "Challah and grape juice / wine",
          "Candles where permitted by the hospital",
          "Siddurim, Tehillim and benchers",
          "Shabbos kettle or urn",
          "Hot water facilities ready for Shabbos use",
          "Fridge and freezer prepared in Shabbos mode",
          "Pre-prepared Shabbos meals where provided",
          "Disposable plates, cups and cutlery",
          "Reading materials suitable for Shabbos",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Tip",
        text:
          "Confirm hospital-specific permissions for candles, flames and electrical items before each Shabbos. Permissions can vary by ward and by site.",
      },
    ],
  },
  {
    id: "kettle",
    number: "3",
    title: "Shabbos kettle / water machine procedure",
    intro:
      "The Shabbos kettle or water machine must be set up before Shabbos so that hot water is available without contravening Shabbos.",
    blocks: [
      {
        kind: "steps",
        items: [
          "Fill the kettle or urn before Shabbos.",
          "Switch it on before Shabbos and confirm it is heating.",
          "Confirm any Shabbos-mode setting is engaged where the appliance supports it.",
          "Position the kettle safely, away from edges and walkways.",
          "Leave clear written guidance for users where helpful.",
        ],
      },
      {
        kind: "callout",
        tone: "important",
        title: "Important rule",
        text:
          "Do not switch the kettle or water machine on or off during Shabbos. If an issue is noticed, report it in writing after Shabbos using the incident form.",
      },
    ],
  },
  {
    id: "fridge-freezer",
    number: "4",
    title: "Fridge and freezer Shabbos mode",
    intro:
      "Fridges and freezers must be set into Shabbos mode where the appliance supports it, before Shabbos begins.",
    blocks: [
      {
        kind: "steps",
        items: [
          "Identify whether the appliance supports a Shabbos mode.",
          "Engage Shabbos mode before candle-lighting.",
          "Confirm the internal light is disabled where appropriate.",
          "Place new items behind older items and keep the door area clear.",
          "Check that the door closes fully and seals properly.",
        ],
      },
      {
        kind: "callout",
        tone: "tip",
        title: "Rotation rule",
        text:
          "Place new items behind older items. Remove expired or unlabelled items. Keep labels facing forward so the next volunteer can read them at a glance.",
      },
    ],
  },
  {
    id: "appliances-room",
    number: "5",
    title: "Hot warmer, lights and air-conditioning guidance",
    intro:
      "Appliances and room conditions must be set before Shabbos so that the room remains usable without any switching during Shabbos.",
    blocks: [
      {
        kind: "table",
        columns: ["Item", "Set before Shabbos"],
        rows: [
          ["Hot warmer", "Switch on with food in place where used; confirm it is heating safely."],
          ["Lights", "Keep on before Shabbos where needed; confirm timers if any are in use."],
          [
            "Air-conditioning",
            "If hot weather is expected, set air-conditioning before Shabbos and leave it running.",
          ],
          ["Heating", "Set to a comfortable level before Shabbos and leave undisturbed."],
        ],
      },
      {
        kind: "callout",
        tone: "important",
        title: "Important rule",
        text:
          "Nothing should be switched on or off during Shabbos. Decisions about lights, heating and air-conditioning must be made before candle-lighting.",
      },
    ],
  },
  {
    id: "erev-shabbos",
    number: "6",
    title: "Erev Shabbos preparation checklist",
    intro:
      "This checklist consolidates the Erev Shabbos responsibilities already present in the source manual: timing, the full hospital shift procedure, stock management, cleanliness and written reporting.",
    blocks: [
      {
        kind: "checklist",
        items: [
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
        ],
      },
    ],
  },
  {
    id: "motzei-shabbos",
    number: "7",
    title: "Motzei Shabbos clear-up checklist",
    intro:
      "After Shabbos, the room must be returned to its weekday standard so the next team can use it.",
    blocks: [
      {
        kind: "checklist",
        items: [
          "Return appliances to their normal weekday setting where they were placed into Shabbos mode",
          "Remove remaining perishable food that cannot safely be carried into the next week",
          "Wipe surfaces and the fridge where needed",
          "Reorganise items neatly, labels facing forward, similar items together",
          "Note any stock shortages and items that need restocking",
          "Note any breakages, faults or hospital issues that arose over Shabbos",
          "Send a written Motzei Shabbos report to the coordinator so the weekday team can plan accordingly",
        ],
      },
      {
        kind: "footnote",
        text:
          "Source limitation: the source manual does not contain a dedicated Motzei Shabbos section. This checklist is assembled from related appliance, cleanliness, stock-management and reporting rules already present in the manual. Ezra Umarpeh to confirm any additional hospital-specific or halachic steps before final print.",
      },
    ],
  },
];

export const BOOKLET_4_META = {
  status: "Approved sample",
  version: PACK_VERSION,
  lastUpdated: "May 2026",
  audience: "Shabbos shift volunteers",
  digitalPdfHint: "Booklet_4_Shabbos_Yom_Tov_Revised_Sample_Digital.pdf",
  printPdfHint: "Booklet_4_Shabbos_Yom_Tov_Revised_Sample_PrintReady.pdf",
};

// Flatten Booklet 4 into search records for the command palette
export type SearchRecord = {
  id: string;
  itemSlug: string;
  itemTitle: string;
  sectionId?: string;
  title: string;
  excerpt: string;
  status: PackStatus;
};

export function buildSearchIndex(): SearchRecord[] {
  const records: SearchRecord[] = [];

  // Booklet 4 sections
  for (const s of BOOKLET_4_SECTIONS) {
    const excerptParts: string[] = [];
    if (s.intro) excerptParts.push(s.intro);
    for (const b of s.blocks) {
      if (b.kind === "paragraph") excerptParts.push(b.text);
      if (b.kind === "callout") excerptParts.push(`${b.title}: ${b.text}`);
      if (b.kind === "list" || b.kind === "checklist" || b.kind === "steps")
        excerptParts.push(b.items.join(" • "));
      if (b.kind === "footnote") excerptParts.push(b.text);
    }
    records.push({
      id: `04#${s.id}`,
      itemSlug: "04-shabbos-yom-tov",
      itemTitle: "Booklet 4 — Shabbos & Yom Tov Preparation Guide",
      sectionId: s.id,
      title: `${s.number}. ${s.title}`,
      excerpt: excerptParts.join(" ").slice(0, 220),
      status: "approved-sample",
    });
  }

  // All pack items as discoverable entries
  for (const item of ALL_ITEMS) {
    records.push({
      id: item.slug,
      itemSlug: item.slug,
      itemTitle: `${item.group === "booklet" ? "Booklet" : "Loose-leaf"} ${item.number} — ${item.title}`,
      title: `${item.group === "booklet" ? "Booklet" : "Loose-leaf"} ${item.number} — ${item.title}`,
      excerpt: item.summary,
      status: item.status,
    });
  }

  return records;
}
