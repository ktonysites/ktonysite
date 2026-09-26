const siteBase = import.meta.env.BASE_URL;

export const projects = [
  {
    index: "A / 01", category: "E-commerce / Online store", title: "Kioo Home",
    description: "A home and lifestyle storefront with tactile product imagery, easy category browsing, and the details shoppers need to choose with confidence.",
    image: `${siteBase}images/sample-ecommerce.svg`, imageAlt: "E-commerce storefront with homeware product cards and a shopping call to action", accent: "lime",
    services: ["Storefront UX", "Product discovery", "Responsive design"],
    result: "Design focus: make product discovery effortless and guide shoppers naturally from browsing to checkout.",
  },
  {
    index: "B / 02", category: "Blog / Digital magazine", title: "The Weekend Ledger",
    description: "A culture and travel journal with striking lead stories, comfortable long-form reading, and thoughtful ways to discover the next story.",
    image: `${siteBase}images/sample-blog.svg`, imageAlt: "Editorial blog with featured story artwork, article headlines, and category navigation", accent: "blue",
    services: ["Editorial design", "Reading experience", "Content discovery"],
    result: "Design focus: make each story inviting to find, a pleasure to read, and easy to share.",
  },
  {
    index: "C / 03", category: "Restaurant / Hospitality", title: "Soko Table",
    description: "A neighbourhood restaurant site that brings the menu, location, and table reservations together in one welcoming place.",
    image: `${siteBase}images/sample-restaurant.svg`, imageAlt: "Restaurant website with a featured dish, menu navigation, and reservation button", accent: "coral",
    services: ["Hospitality web design", "Menu presentation", "Booking journey"],
    result: "Design focus: put the menu, directions, and reservation details right where guests expect them.",
  },
  {
    index: "D / 04", category: "Real estate / Property", title: "Nia Homes",
    description: "A property search experience for exploring homes by location, price, and the practical details that shape a decision.",
    image: `${siteBase}images/sample-property.svg`, imageAlt: "Real estate listing with a featured house, property search, and listing cards", accent: "blue",
    services: ["Property search", "Listing cards", "Lead generation"],
    result: "Design focus: bring useful property details forward and make it simple to enquire about a home.",
  },
  {
    index: "E / 05", category: "SaaS / Product website", title: "Relay Desk",
    description: "A team-planning platform with a clear product story, a calm dashboard, and focused feature pages that show how the work fits together.",
    image: `${siteBase}images/sample-saas.svg`, imageAlt: "SaaS website with a product dashboard preview, feature summary, and sign-up action", accent: "lime",
    services: ["Product positioning", "Interface design", "Conversion flow"],
    result: "Design focus: explain the product in plain language and let the interface show how it works.",
  },
  {
    index: "F / 06", category: "Portfolio / Creative studio", title: "Amani Studio",
    description: "An independent design practice with a distinctive portfolio, concise case studies, and a personal introduction to the work.",
    image: `${siteBase}images/sample-portfolio.svg`, imageAlt: "Creative portfolio with a typographic introduction and a curated project grid", accent: "coral",
    services: ["Portfolio direction", "Case study layout", "Personal brand"],
    result: "Design focus: let selected work lead, while making the designer and their approach easy to get to know.",
  },
  {
    index: "G / 07", category: "Education / Online learning", title: "Orbit Academy",
    description: "An online learning hub with considered course categories, clear lesson formats, and an inviting path into each course.",
    image: `${siteBase}images/sample-learning.svg`, imageAlt: "Online learning website with course categories, instructor cards, and lesson options", accent: "lime",
    services: ["Course discovery", "Learning UX", "Accessible content"],
    result: "Design focus: help learners choose a course by making its subject, format, and next step clear.",
  },
  {
    index: "H / 08", category: "Healthcare / Clinic", title: "Poa Health",
    description: "A community clinic website with clear care information, opening hours, and a reassuring route to an appointment.",
    image: `${siteBase}images/sample-health.svg`, imageAlt: "Clinic website with care service cards, opening details, and an appointment action", accent: "blue",
    services: ["Service information", "Trust and clarity", "Appointment flow"],
    result: "Design focus: make essential care information and appointment details easy to find.",
  },
  {
    index: "I / 09", category: "Professional services / Consultancy", title: "Route / Path",
    description: "A technical consultancy site that makes a complex offer easier to understand with plain language, useful context, and a clear enquiry path.",
    image: `${siteBase}images/project-route.svg`, imageAlt: "Professional services website with a clear service message and connected pathway diagram", accent: "lime",
    services: ["Service positioning", "Information design", "Enquiry journey"],
    result: "Design focus: help the right clients understand a specialist service and feel ready to start a conversation.",
  },
  {
    index: "J / 10", category: "Banking / Financial services", title: "Mwangaza Bank",
    description: "A digital banking experience that brings everyday money tools, account benefits, and secure next steps into a clear, approachable interface.",
    image: `${siteBase}images/sample-banking.svg`, imageAlt: "Digital banking website with account cards, savings progress, and financial tools", accent: "blue",
    services: ["Digital banking UX", "Financial product pages", "Trust-led design"],
    result: "Design focus: make account features easy to compare and the path to opening an account reassuringly clear.",
  },
  {
    index: "K / 11", category: "Business systems / Operations", title: "Kazi Flow",
    description: "A business operations workspace for team tasks, inventory, reporting, and the day-to-day workflows that keep things moving.",
    image: `${siteBase}images/sample-systems.svg`, imageAlt: "Colorful business systems dashboard showing workflow, inventory, and team operations", accent: "coral",
    services: ["Systems dashboards", "Workflow design", "Operations UX"],
    result: "Design focus: bring everyday processes into one clear workspace that feels natural for the whole team.",
  },
  {
    index: "L / 12", category: "Point of sale / Retail tech", title: "Pesa Point",
    description: "A point-of-sale platform for shops and cafés, pairing quick checkout with clear sales summaries and practical stock controls.",
    image: `${siteBase}images/sample-pos.svg`, imageAlt: "Bright point-of-sale system with checkout screen, payment choices, and daily sales cards", accent: "lime",
    services: ["POS product design", "Checkout flows", "Retail dashboards"],
    result: "Design focus: keep checkout moving smoothly and give owners a useful picture of the day.",
  },
] as const;

export const featuredProjects = [projects[0], projects[9], projects[10], projects[11]];
