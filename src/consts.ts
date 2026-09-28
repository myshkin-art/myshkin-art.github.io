export const ROUTES: {href: string, label: string, labelImage?: string}[] = [
  { href: "/", label: "Art", labelImage: "/art.PNG" },
  { href: "/about", label: "About", labelImage: "/about.PNG" },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL: {label: string, href: string, icon: string}[] = [
  {
    label: "Instagram",
    //TODO change
    href: "https://www.instagram.com/myshkin.art",
    icon: "mdi:instagram",
  }
] as const;

export const PERSONAL_INFO = {
  name: "Myshkin",
  title: "Myshkin",
  subtitle:
    "Art",
  role: "Myshkin",
  contact: "mailto:mmyshkin.art@gmail.com",
  contactLabel: "Email",
  avatar: "/icon.PNG",
} as const;

