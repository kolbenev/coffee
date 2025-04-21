import telegram from "@/shared/assets/telegram.png";
import whatsapp from "@/shared/assets/whatsapp.png";
import { contacts } from "@/shared/constants/contacts";


export const socialsConfig = [
  {
    img: telegram,
    path: contacts.telegram,
    alt:'telegram'
  },
  {
    img: whatsapp,
    path: contacts.whatsApp,
    alt:'whats-app'
  },
];
