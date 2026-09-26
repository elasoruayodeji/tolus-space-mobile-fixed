export const site = {
  name: "Tolu's Space",
  displayName: "TOLU SPACE",
  tagline: "Escape to Serenity.",
  headline: "Stylish 2BR in Soluyi, Gbagada",
  subheadline: "Your calm in the chaos of Lagos. Modern, Minimalist, Fully Serviced.",
  phoneDisplay: "08142485613",
  phoneE164: "+2348142485613",
  whatsapp: "https://wa.me/2348142485613",
  address: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
  mapsQuery: "No. 8 Dogo Majekodunmi Street, Soluyi, Gbagada, Lagos",
  nightlyRate: null,
  rateCurrency: "₦",
  rateNote: "Nightly and extended-stay rates available on request",
  bookingFootnote: "Fastest response — direct booking, no service fees",
  heroImage: "bedroom-1-a.jpg"
};

export const about = {
  intro: "TOLU SPACE is a thoughtfully designed 2-bedroom apartment in the heart of Soluyi, Gbagada. Natural light, minimalist decor, fully equipped kitchen, serene balcony, and 24/7 security. Perfect for business travelers, couples, and staycations seeking comfort and style.",
  story: "Tolu's Space is a quietly considered short-let in the heart of Soluyi, Gbagada — natural light, minimalist decor, a fully equipped kitchen, and 24/7 security. Built for business travellers, couples, and slow weekends.",
  team: "Owned and managed by the Tolu's Space team; direct host contact via WhatsApp.",
  values: ["Serenity", "Considered design", "Full-service hosting"]
};

export const amenities = [
  { icon: "wifi", title: "Fast WiFi", detail: "100 Mbps" },
  { icon: "kitchen", title: "Fully Equipped Kitchen", detail: "Cook, dine and settle in" },
  { icon: "ac", title: "AC in All Rooms", detail: "Comfort throughout" },
  { icon: "tv", title: "Smart TV + Netflix", detail: "Easy nights in" },
  { icon: "parking", title: "Free Parking", detail: "Convenient on-site parking" },
  { icon: "security", title: "24/7 Security & CCTV", detail: "Peace of mind, day and night" },
  { icon: "workspace", title: "Dedicated Workspace", detail: "Settle in and get work done" }
];

export const gallery = [
  { file: "bedroom-1-a.jpg", title: "Bedroom 1", caption: "Master · TV wall", alt: "Master bedroom TV wall" },
  { file: "bedroom-1-b.jpg", title: "Bedroom 1", caption: "Master · Bed side", alt: "Master bedroom bed side" },
  { file: "bedroom-2-a.jpg", title: "Bedroom 2", caption: "TV wall", alt: "Second bedroom TV wall" },
  { file: "bedroom-2-b.jpg", title: "Bedroom 2", caption: "Bed side", alt: "Second bedroom bed side" },
  { file: "bathroom-1-a.jpg", title: "Master En-suite", caption: "Bathtub", alt: "Master ensuite bathtub" },
  { file: "bathroom-1-b.jpg", title: "Master En-suite", caption: "Basin", alt: "Master ensuite wash basin" },
  { file: "bathroom-2.jpg", title: "Second Bathroom", caption: "Shower", alt: "Second bathroom shower" },
  { file: "living-room.jpg", title: "Living Room", caption: "Lounge", alt: "Tolu's Space living room" },
  { file: "kitchen.jpg", title: "Kitchen", caption: "Fully equipped", alt: "Tolu's Space kitchen" },
  { file: "dining.jpg", title: "Dining Area", caption: "Dining", alt: "Tolu's Space dining area" }
];

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export const bookingMessage = "Hello Tolu's Space, I would like to enquire about booking the 2-bedroom apartment in Soluyi, Gbagada. Please share availability and the current nightly/extended-stay rates. Thank you.";

export const whatsappUrl = `${site.whatsapp}?text=${encodeURIComponent(bookingMessage)}`;
