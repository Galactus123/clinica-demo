export const clinic = {
  name: "Consultório Médico Saúde Plena",
  shortName: "Saúde Plena",
  tagline: "Consultório Médico",

  whatsapp: {
    number: "258833891504",
    getLink: (message?: string) => {
      const msg = message || "Olá, Saúde Plena. Gostaria de obter informações sobre uma consulta.";
      return `https://wa.me/258833891504?text=${encodeURIComponent(msg)}`;
    },
  },

  phone: "+258 83 389 1504",

  location: {
    address: "Rua Kamba Simango, nº 416, rés-do-chão, Sommerschield, Maputo",
    city: "Maputo",
    country: "Moçambique",
    zone: "Sommerschield",
  },

  hours: [
    { days: "Segunda a sábado", time: "08:00 — 20:00" },
    { days: "Domingo", time: "Encerrado" },
  ],

  social: {
    instagram: "https://www.instagram.com/saudeplena_consultoriomedico/",
    facebook: "#",
  },

  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contactos", href: "#contactos" },
  ],

  specialties: [
    {
      icon: "brain",
      title: "Psicologia",
      description: "Acompanhamento psicológico e psicoterapêutico.",
    },
    {
      icon: "heart-pulse",
      title: "Psiquiatria",
      description: "Avaliação e acompanhamento especializado em saúde mental.",
    },
    {
      icon: "mic",
      title: "Terapia da Fala",
      description: "Acompanhamento relacionado à comunicação e fala.",
    },
    {
      icon: "hand",
      title: "Terapia Ocupacional",
      description: "Intervenções voltadas para autonomia e funcionalidade.",
    },
    {
      icon: "activity",
      title: "Neurologia",
      description: "Avaliação e acompanhamento de condições neurológicas.",
    },
    {
      icon: "stethoscope",
      title: "Clínica Geral",
      description: "Atendimento médico geral.",
    },
    {
      icon: "baby",
      title: "Pediatria",
      description: "Cuidados de saúde direcionados às crianças.",
    },
    {
      icon: "heart",
      title: "Ginecologia",
      description: "Acompanhamento da saúde da mulher.",
    },
    {
      icon: "eye",
      title: "Oftalmologia",
      description: "Cuidados relacionados à saúde ocular.",
    },
    {
      icon: "scan-face",
      title: "Dermatologia",
      description: "Avaliação e acompanhamento da saúde da pele.",
    },
    {
      icon: "dumbbell",
      title: "Fisioterapia",
      description: "Acompanhamento e reabilitação física.",
    },
  ],

  benefits: [
    {
      title: "Atendimento humanizado",
      description: "Uma experiência pensada para que cada paciente se sinta acolhido.",
      icon: "heart-handshake",
    },
    {
      title: "Abordagem multidisciplinar",
      description: "Diferentes áreas de saúde reunidas num mesmo espaço.",
      icon: "users",
    },
    {
      title: "Facilidade de contacto",
      description: "Entre em contacto facilmente para esclarecer dúvidas ou solicitar um agendamento.",
      icon: "message-circle",
    },
  ],

  process: [
    {
      step: "01",
      title: "Escolha a especialidade",
      description: "Identifique o tipo de atendimento que procura.",
      icon: "search",
    },
    {
      step: "02",
      title: "Entre em contacto",
      description: "Fale com a equipa através do WhatsApp.",
      icon: "message-circle",
    },
    {
      step: "03",
      title: "Agende o seu atendimento",
      description: "Confirme a disponibilidade e o horário da consulta.",
      icon: "calendar-check",
    },
  ],

  faq: [
    {
      question: "Como posso marcar uma consulta?",
      answer: "Entre em contacto com a Saúde Plena através do WhatsApp ou telefone para solicitar informações sobre o agendamento.",
    },
    {
      question: "Onde fica a Saúde Plena?",
      answer: "A clínica está localizada na Rua Kamba Simango, nº 416, rés-do-chão, Sommerschield, Maputo.",
    },
    {
      question: "Quais especialidades estão disponíveis?",
      answer: "A Saúde Plena possui diferentes áreas de atendimento, incluindo psicologia, psiquiatria, terapia da fala, neurologia, clínica geral, pediatria, ginecologia, oftalmologia, dermatologia e fisioterapia.",
    },
    {
      question: "Qual é o horário de atendimento?",
      answer: "Atendemos de segunda a sábado, das 08:00 às 20:00.",
    },
    {
      question: "Posso entrar em contacto pelo WhatsApp?",
      answer: "Sim! Pode contactar-nos pelo WhatsApp para informações, dúvidas ou para marcar a sua consulta. Utilize o botão de WhatsApp disponível na página.",
    },
  ],
};
