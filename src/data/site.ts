export const business = {
  name: "Islamabad Solar Installation",
  shortName: "ISI",
  owner: "Amjid Khan",
  tagline: "Buy solar panels, inverters, lithium batteries & get professional installation in Islamabad",
  phone: "0347-8931193",
  phoneRaw: "03478931193",
  whatsapp: "923478931193",
  address: "House No. 169, Street 53, Sector G-10/3, Islamabad",
  city: "Islamabad",
  trademarkClass: "Class 37",
  serviceArea: "Islamabad & surrounding areas",
}

export const categories = [
  { id: "panels", name: "Solar Panels", href: "#products" },
  { id: "inverters", name: "Inverters", href: "#products" },
  { id: "batteries", name: "Lithium Batteries", href: "#products" },
  { id: "install", name: "Installation", href: "#services" },
]

export const services = [
  {
    title: "Solar System Installation",
    description: "Complete on-grid, off-grid and hybrid solar setups for homes, shops and facilities.",
    icon: "sun",
  },
  {
    title: "Solar Maintenance",
    description: "Panel cleaning, inverter checks, wiring inspection and performance optimization.",
    icon: "wrench",
  },
  {
    title: "Electrical Services",
    description: "Wiring, breakers, load management and backup solutions by certified technicians.",
    icon: "zap",
  },
  {
    title: "Battery & Inverter Setup",
    description: "Hybrid inverters, lithium batteries and backup power configuration.",
    icon: "battery",
  },
  {
    title: "Net Metering Support",
    description: "Guidance and support for DISCO net metering applications in Islamabad.",
    icon: "file",
  },
  {
    title: "Commercial Solar",
    description: "Larger kW systems for offices, warehouses, petrol pumps and industrial sites.",
    icon: "building",
  },
]

export type Product = {
  id: string
  name: string
  category: string
  brand: string
  specs: string
  price: string
  badge: string | null
  image: string
}

export const products: Product[] = [
  {
    id: "panel-longi-590",
    name: "LONGi HiMo X6 590W",
    category: "Solar Panels",
    brand: "LONGi",
    specs: "590W · Single Glass · 22.6% efficiency · 25yr performance",
    price: "Request price",
    badge: "Best Seller",
    image: "products/panel-longi-590w.png",
  },
  {
    id: "panel-longi-580",
    name: "LONGi HiMo7 580W Bifacial",
    category: "Solar Panels",
    brand: "LONGi",
    specs: "580W · Double Glass · 22.5% efficiency · Bifacial",
    price: "Request price",
    badge: null,
    image: "products/panel-longi-580w.png",
  },
  {
    id: "inv-fox-10kw",
    name: "FOX ESS H3/AC3 10kW Hybrid",
    category: "Inverters",
    brand: "FOX ESS",
    specs: "10kW · Hybrid Three-Phase · IP65 · Remote monitoring",
    price: "Request price",
    badge: "Popular",
    image: "products/inv-fox-10kw.png",
  },
  {
    id: "inv-simtek-dual",
    name: "Simtek Simrex X Series Dual",
    category: "Inverters",
    brand: "Simtek",
    specs: "Dual output · Circular display · Home & commercial",
    price: "Request price",
    badge: null,
    image: "products/inv-simtek-dual.png",
  },
  {
    id: "bat-voltix-5kwh",
    name: "Smart Power Voltix 5kWh",
    category: "Lithium Batteries",
    brand: "Zaksun / Sunvoor",
    specs: "5kWh · 51.2V · 100Ah · 6yr replacement warranty",
    price: "Request price",
    badge: "New",
    image: "products/bat-voltix-5kwh.png",
  },
  {
    id: "bat-sunkapower-100ah",
    name: "Sunkapower Lithium Power Bank",
    category: "Lithium Batteries",
    brand: "Sunkapower",
    specs: "51.2V · 100Ah · Long life · LCD display",
    price: "Request price",
    badge: null,
    image: "products/bat-sunkapower-100ah.png",
  },
]

export const packages = [
  {
    name: "3kW Home Starter",
    kw: "3 kW",
    ideal: "Small homes, 1–2 rooms AC",
    includes: ["Solar panels", "Inverter", "Installation", "Basic monitoring"],
    price: "Request quote",
  },
  {
    name: "5kW Family Package",
    kw: "5 kW",
    ideal: "Medium homes, multiple appliances",
    includes: ["Premium panels", "Hybrid inverter", "Lithium option", "1-year support"],
    price: "Request quote",
    featured: true,
  },
  {
    name: "10kW Commercial",
    kw: "10 kW+",
    ideal: "Shops, offices, small factories",
    includes: ["High-output panels", "Commercial inverter", "Site survey", "AMC options"],
    price: "Request quote",
  },
]

export const stats = [
  { value: "500+", label: "Systems Installed" },
  { value: "100+", label: "Products Available" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Genuine Products" },
]

export const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
]
