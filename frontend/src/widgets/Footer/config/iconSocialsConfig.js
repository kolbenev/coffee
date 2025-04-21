import telegram from "@/shared/assets/telegram.png";
import whatsapp from "@/shared/assets/whatsapp.png";
import mail from "@/shared/assets/mail.png";
import { contacts } from "@/shared/constants/contacts";

export const iconSocialsConfig = [
  {
    img: telegram,
    path: contacts.telegram,
    alt: "telegram",
  },
  {
    img: whatsapp,
    path: contacts.whatsApp,
    alt: "whats-app",
  },
  {
    img: mail,
    path: contacts.mail.href,
    alt: "mail",
  },
];
