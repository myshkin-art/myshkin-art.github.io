export const ROUTES: {href: string, label: string, labelImage?: string}[] = [
  { href: "/", label: "Art", labelImage: "/art.PNG" },
  { href: "/about", label: "About", labelImage: "/about.PNG" },
  { href: "/contact", label: "Contact", labelImage: "/contact.PNG" }
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
  email: "mmyshkin.art@gmail.com",
  phone: "(810) 858-3222",
  instaUrl: "https://www.instagram.com/myshkin.art",
  insta: "myshkin.art"
} as const;

