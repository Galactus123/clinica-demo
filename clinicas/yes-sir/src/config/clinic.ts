export const clinic = {
  name: "Clínica Dentária Yes Sir",
  shortName: "Yes Sir",
  tagline: "O seu sorriso merece cuidados de excelência.",

  whatsapp: {
    number: "258000000000",
    getLink: (message?: string) => {
      const msg = message || "Olá, gostaria de marcar uma consulta na Clínica Dentária Yes Sir.";
      return `https://wa.me/258000000000?text=${encodeURIComponent(msg)}`;
    },
  },

  location: {
    address: "Karl Marx, Maputo, Moçambique",
    city: "Maputo",
    country: "Moçambique",
  },

  hours: [
    { days: "Segunda a sexta-feira", time: "08h00 – 18h00" },
    { days: "Sábado", time: "08h00 – 14h00" },
    { days: "Domingo", time: "Encerrado" },
  ],

  social: {
    instagram: "#",
    facebook: "#",
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
      icon: "stethoscope",
      title: "Consultas e Avaliação",
      description: "Avaliação completa da saúde oral para diagnóstico preciso e plano de tratamento personalizado.",
    },
    {
      icon: "sparkles",
      title: "Limpeza Dentária",
      description: "Remoção profissional de tártaro e placa bacteriana para manter os dentes saudáveis e limpos.",
    },
    {
      icon: "shield",
      title: "Prevenção e Higiene Oral",
      description: "Orientação e tratamentos preventivos para proteger os seus dentes e gengivas.",
    },
    {
      icon: "wrench",
      title: "Restauração Dentária",
      description: "Restaurações estéticas e funcionais com materiais de alta qualidade.",
    },
    {
      icon: "heart",
      title: "Tratamento de Cáries",
      description: "Tratamento eficaz para eliminação de cáries e restauração da saúde dentária.",
    },
    {
      icon: "activity",
      title: "Tratamento de Canal",
      description: "Endodontia com técnicas modernas para preservar o dente natural.",
    },
    {
      icon: "minus-circle",
      title: "Extração Dentária",
      description: "Extrações realizadas com segurança e cuidado, incluso dentes do siso.",
    },
    {
      icon: "sun",
      title: "Clareamento Dentário",
      description: "Tratamentos de clareamento para um sorriso mais branco e luminoso.",
    },
    {
      icon: "layers",
      title: "Próteses Dentárias",
      description: "Próteses fixas e removíveis para substituição de dentes perdidos.",
    },
    {
      icon: "align-left",
      title: "Ortodontia",
      description: "Aparelhos ortodônticos para alinhamento dentário e correção da mordida.",
    },
    {
      icon: "anchor",
      title: "Implantes Dentários",
      description: "Implantes de última geração para reabilitação oral completa.",
    },
    {
      icon: "heart-pulse",
      title: "Tratamento de Gengivas",
      description: "Tratamento especializado para doenças gengivais e periodontais.",
    },
    {
      icon: "baby",
      title: "Odontopediatria",
      description: "Cuidados dentários especializados para crianças em ambiente acolhedor.",
    },
    {
      icon: "gem",
      title: "Estética Dentária",
      description: "Procedimentos estéticos para harmonizar o sorriso com naturalidade.",
    },
  ],

  testimonials: [
    {
      name: "Maria S.",
      text: "Excelente atendimento! A equipa foi muito profissional e atenciosa durante toda a consulta.",
      rating: 5,
    },
    {
      name: "Carlos M.",
      text: "A clínica tem um ambiente muito limpo e acolhedor. Recomendo a todos os meus amigos.",
      rating: 5,
    },
    {
      name: "Ana R.",
      text: "Fiquei muito satisfeita com o resultado do tratamento. Equipa competente e dedicada.",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "Como posso marcar uma consulta?",
      answer: "Pode marcar uma consulta através do nosso WhatsApp ou visitando-nos diretamente na clínica. Estamos aqui para ajudá-lo.",
    },
    {
      question: "Quais são os horários de atendimento?",
      answer: "Atendemos de segunda a sexta-feira das 08h00 às 18h00 e aos sábados das 08h00 às 14h00. Domingos e feriados encontram-se encerrados.",
    },
    {
      question: "Onde fica a Clínica Dentária Yes Sir?",
      answer: "Estamos localizados na Rua Karl Marx, em Maputo, Moçambique. Venha visitar-nos!",
    },
    {
      question: "A clínica atende aos sábados?",
      answer: "Sim, atendemos aos sábados das 08h00 às 14h00.",
    },
    {
      question: "Que serviços dentários estão disponíveis?",
      answer: "Oferecemos uma ampla gama de serviços dentários, incluindo consultas, limpezas, restaurações, tratamentos de canal, implantes, ortodontia, clareamento e muito mais.",
    },
    {
      question: "Posso entrar em contacto pelo WhatsApp?",
      answer: "Sim! Pode contactar-nos pelo WhatsApp para informações, dúvidas ou para marcar a sua consulta. Utilize o botão de WhatsApp disponível na página.",
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
      description: "Realizamos uma avaliação completa da sua saúde oral.",
      icon: "search",
    },
    {
      step: 4,
      title: "Receba a Orientação",
      description: "Apresentamos o melhor plano de tratamento para o seu caso.",
      icon: "check-circle",
    },
  ],

  whyChooseUs: [
    {
      title: "Atendimento Personalizado",
      description: "Cada paciente é único. Oferecemos tratamentos adaptados às suas necessidades.",
      icon: "user-check",
    },
    {
      title: "Ambiente Profissional",
      description: "Instalações modernas, limpas e equipadas com tecnologia de ponta.",
      icon: "building",
    },
    {
      title: "Cuidados Centrados no Paciente",
      description: "O seu conforto e bem-estar são a nossa prioridade em cada consulta.",
      icon: "heart-handshake",
    },
    {
      title: "Diversos Serviços Dentários",
      description: "Uma vasta gama de serviços para cuidar de toda a família num só lugar.",
      icon: "grid",
    },
    {
      title: "Localização Conveniente",
      description: "Localizados no centro de Maputo, na Rua Karl Marx, com fácil acesso.",
      icon: "map-pin",
    },
    {
      title: "Horário Flexível",
      description: "Atendemos de segunda a sábado para se adaptar à sua rotina.",
      icon: "clock",
    },
  ],
};
