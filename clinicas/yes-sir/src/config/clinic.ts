export const clinic = {
  name: "Clínica Marcelino dos Santos",
  shortName: "CMS",
  tagline: "Prevenção e Tratamento da Diabetes em Maputo.",

  whatsapp: {
    number: "258825181818",
    getLink: (message?: string) => {
      const msg = message || "Olá, gostaria de marcar uma consulta na Clínica Marcelino dos Santos.";
      return `https://wa.me/258825181818?text=${encodeURIComponent(msg)}`;
    },
  },

  location: {
    address: "Av. Paulo Samuel Kankhomba, 1170, Maputo, Moçambique",
    city: "Maputo",
    country: "Moçambique",
  },

  hours: [
    { days: "Segunda a domingo", time: "08h00 – 20h00" },
    { days: "Emergência", time: "Disponível 24 horas" },
  ],

  social: {
    instagram: "https://www.instagram.com/clinica_marcelinodossantos/",
    facebook: "https://www.facebook.com/profile.php/?id=61576116748193",
  },

  navLinks: [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],

  services: [
    {
      icon: "activity",
      title: "Prevenção da Diabetes",
      description: "Programas de prevenção e rastreio para deteção precoce da diabetes.",
    },
    {
      icon: "heart-pulse",
      title: "Tratamento da Diabetes",
      description: "Tratamento de primeira linha com HEBERPROT-B, reduzindo 70% as hipóteses de amputação.",
    },
    {
      icon: "stethoscope",
      title: "Consultas Médicas",
      description: "Avaliação clínica completa com profissionais especializados em diabetes.",
    },
    {
      icon: "flask",
      title: "Exames de Laboratório",
      description: "Análises clínicas, hormonais e de rastreio realizadas na clínica.",
    },
    {
      icon: "shield",
      title: "Prevenção de Complicações",
      description: "Monitorização e prevenção de complicações associadas à diabetes.",
    },
    {
      icon: "heart",
      title: "Acompanhamento Integral",
      description: "Cuidado integral da saúde com foco na qualidade de vida do paciente.",
    },
    {
      icon: "users",
      title: "Educação em Diabetes",
      description: "Sessões gratuitas de educação para pacientes, familiares e cuidadores.",
    },
    {
      icon: "microscope",
      title: "Análises Hormonais",
      description: "Resultados de exames hormonais disponíveis no dia seguinte.",
    },
    {
      icon: "baby",
      title: "Saúde da Mulher",
      description: "Acompanhamento de saúde feminina e prevenção de complicações.",
    },
    {
      icon: "eye",
      title: "Rastreios Preventivos",
      description: "Exames de rastreio gratuitos para toda a família.",
    },
    {
      icon: "clipboard",
      title: "Frotis Sanguíneo",
      description: "Exames de sangue periférico para diagnóstico preciso.",
    },
    {
      icon: "droplet",
      title: "Microalbuminúria",
      description: "Exames de microalbuminúria para avaliação renal em diabéticos.",
    },
  ],

  testimonials: [
    {
      name: "Fernando T.",
      text: "A Clínica Marcelino dos Santos mudou a minha vida. O tratamento com HEBERPROT-B evitou uma amputação. Sou eternamente grato à equipa.",
      rating: 5,
    },
    {
      name: "Ana M.",
      text: "As sessões de educação em diabetes são fantásticas. Aprendi a conviver com a doença de forma positiva. Recomendo a todos.",
      rating: 5,
    },
    {
      name: "Carlos D.",
      text: "Profissionalismo e humanismo num só lugar. A clínica é moderna e os profissionais são extremamente atenciosos.",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "Como posso marcar uma consulta?",
      answer: "Pode marcar uma consulta através do nosso WhatsApp +258 82 518 1818 ou visitando-nos diretamente na clínica na Av. Paulo Samuel Kankhomba, 1170.",
    },
    {
      question: "Qual é o horário de atendimento?",
      answer: "Atendemos de segunda a domingo das 08h00 às 20h00. Para emergências, estamos disponíveis 24 horas.",
    },
    {
      question: "Onde fica a Clínica Marcelino dos Santos?",
      answer: "Estamos localizados na Av. Paulo Samuel Kankhomba, nº 1170, em Maputo, Moçambique.",
    },
    {
      question: "A clínica trata apenas diabetes?",
      answer: "Somos especializados no tratamento da diabetes, mas oferecemos consultas médicas gerais, exames de laboratório e rastreios preventivos para toda a família.",
    },
    {
      question: "O que é o HEBERPROT-B?",
      answer: "O HEBPERPROT-B é um medicamento injectável criado em Cuba que reduz em 70% as hipóteses de amputação em pacientes com úlcera diabética.",
    },
    {
      question: "Posso entrar em contacto pelo WhatsApp?",
      answer: "Sim! Pode contactar-nos pelo WhatsApp +258 82 518 1818 para informações, dúvidas ou para marcar a sua consulta.",
    },
  ],

  process: [
    {
      step: 1,
      title: "Entre em Contacto",
      description: "Fale connosco pelo WhatsApp ou visite-nos na clínica.",
      icon: "message-circle",
    },
    {
      step: 2,
      title: "Marque a sua Consulta",
      description: "Escolha o dia e horário mais conveniente para si.",
      icon: "calendar",
    },
    {
      step: 3,
      title: "Faça a Avaliação",
      description: "Realizamos uma avaliação completa da sua saúde.",
      icon: "search",
    },
    {
      step: 4,
      title: "Receba o Tratamento",
      description: "Iniciamos o plano de tratamento personalizado para o seu caso.",
      icon: "check-circle",
    },
  ],

  whyChooseUs: [
    {
      title: "Primeira Clínica de Diabetes",
      description: "Primeira clínica especializada na prevenção e tratamento da diabetes em Moçambique.",
      icon: "award",
    },
    {
      title: "Tratamento de Excelência",
      description: "HEBERPROT-B — tratamento de primeira linha que reduz 70% as amputações.",
      icon: "shield",
    },
    {
      title: "Ambiente Acolhedor",
      description: "Um espaço criado para cuidar de si, com conforto e profissionalismo.",
      icon: "heart-handshake",
    },
    {
      title: "Exames no Próprio Dia",
      description: "Resultados de exames hormonais disponíveis no dia seguinte.",
      icon: "clock",
    },
    {
      title: "Educação e Prevenção",
      description: "Sessões gratuitas de educação em diabetes para pacientes e familiares.",
      icon: "book-open",
    },
    {
      title: "24 Horas de Atendimento",
      description: "Disponibilidade 24 horas para emergências e cuidados urgentes.",
      icon: "clock",
    },
  ],
};
