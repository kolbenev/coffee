export const itemsConfig = [
  {
    name: "name",
    label: "Ваше имя",
    placeholder: "Иван Иванов",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
  },
  {
    name: "phone",
    label: "Телефон",
    mask: "+{7} (000) 000 00 00",
    placeholder: "+7 (999) 999 99 99",
  },
  {
    name: "preferred_time",
    label: "Удобное время для звонка",
    mask: "с HH:MM до HH:MM",
    placeholder: "Укажите время",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23,
        maxLength: 2,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
        maxLength: 2,
      },
    },
  },
  {
    name: "comment",
    label: "Комментарий",
    placeholder: "Опишите в свободной форме",
    as: "textarea",
  },
];
