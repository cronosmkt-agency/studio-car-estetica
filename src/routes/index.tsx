import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Award,
  Car,
  Wrench,
  Send,
  Camera,
  Check,
  Layers,
  Sun,
  Shield,
  Eye,
  Calendar,
  AlertTriangle,
  HelpCircle,
  ThumbsUp
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: StudioCarLandingPage,
});

export default function StudioCarLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"todos" | "martelinho" | "detailing" | "protecao">("todos");

  // Form State
  const [clientName, setClientName] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [selectedService, setSelectedService] = useState("Martelinho de Ouro (Amassado / Mossa)");
  const [damagedArea, setDamagedArea] = useState("Porta / Lateral");
  const [notes, setNotes] = useState("");

  const phone = "5521966859384";
  const phoneDisplay = "(21) 96685-9384";
  const address = "R. Ten. Luiz Meirelles, 730 - Várzea, Teresópolis - RJ, 25955-001";
  const addressComplement = "No complexo da Unidade Estácio Teresópolis";
  const hours = "Segunda a Sexta das 08:00 às 18:00 | Sábados sob agendamento";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Davidson! Vim pelo site da Studio Car e gostaria de uma avaliação do meu veículo."
  )}`;

  const photoQuoteWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Davidson! Vim pelo site da Studio Car e gostaria de enviar a foto do amassado do meu carro para você avaliar se tem conserto por martelinho de ouro."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Davidson! Vim pelo site oficial da Studio Car Estética Automotiva.

*Nome:* ${clientName || "Não informado"}
*Veículo:* ${vehicleModel || "Não informado"}
*Serviço Desejado:* ${selectedService}
*Local do Amassado / Dano:* ${damagedArea}
${notes ? `*Observações:* ${notes}` : ""}

Gostaria de enviar as fotos do carro para avaliação técnica!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const servicesList = [
    {
      id: "martelinho-alta-precisao",
      category: "martelinho",
      title: "Martelinho de Ouro de Alta Precisão",
      subtitle: "Preserva a pintura original de fábrica",
      desc: "Remoção artesanal de batidas de portas, pequenas colisões de estacionamento, mossas e estragos causados por chuva de granizo. Utilizamos alavancas cirúrgicas e ventosas que massageiam a chapa de volta ao formato de fábrica, sem queimar nem lixar o verniz original.",
      benefits: ["100% da pintura original preservada", "Sem massa plástica ou repintura", "Serviço rápido em poucas horas", "Mantém a nota máxima no laudo cautelar"],
      badge: "Carro-Chefe",
      highlight: true
    },
    {
      id: "polimento-tecnico-espelhado",
      category: "detailing",
      title: "Polimento Técnico Espelhado",
      subtitle: "Correção cirúrgica de verniz",
      desc: "Processo multi-etapas de corte, refino e lustro com politrizes orbitais e compostos de tecnologia alemã. Remove marcas de lavagem inadequada (swirls), teias de aranha, hologramas e manchas d'água, devolvendo o brilho espelhado e profundo da cor.",
      benefits: ["Elimina até 95% dos microrriscos", "Sem hologramas ou marcas circulares", "Profundidade de cor incomparável", "Acabamento de carro zero km"],
      badge: "Estética Avançada",
      highlight: false
    },
    {
      id: "vitrificacao-ceramica",
      category: "protecao",
      title: "Vitrificação Cerâmica de Pintura (9H)",
      subtitle: "Blindagem molecular por até 3 anos",
      desc: "Aplicação de nano-revestimento cerâmico de alta densidade que cria uma camada de vidro flexível sobre o verniz. Oferece resistência contra fezes de pássaros, seiva de árvores, maresia da serra e raios UV, com efeito hidrofóbico que repele água e sujeira.",
      benefits: ["Escudo protetor por até 3 anos", "Super repelência a líquidos e poeira", "Facilita lavagens futuras", "Brilho molhado contínuo"],
      badge: "Proteção Máxima",
      highlight: true
    },
    {
      id: "higienizacao-interna",
      category: "detailing",
      title: "Higienização Interna & Oxi-Sanitização",
      subtitle: "Saúde e conforto para a cabine",
      desc: "Limpeza profunda e detalhada de bancos em couro ou tecido, forrações, teto, carpetes, cintos e painel. Inclui esterilização por gerador de ozônio que elimina fungos, ácaros, bactérias e odores desagradáveis impregnados nos dutos de ar-condicionado.",
      benefits: ["Eliminação de ácaros e bactérias", "Dutos de ar-condicionado esterilizados", "Hidratação profunda de couros nobres", "Sensação autêntica de frescor"],
      badge: "Cuidado Interno",
      highlight: false
    },
    {
      id: "revitalizacao-farois",
      category: "detailing",
      title: "Restauração de Faróis & Plásticos",
      subtitle: "Clareza ótica e segurança noturna",
      desc: "Lixamento técnico e polimento ótico de faróis amarelados ou opacos, seguido de selagem com proteção UV para evitar novo desgaste. Também restauramos plásticos externos desbotados pelo sol com polímeros restauradores de longa duração.",
      benefits: ["Faróis transparentes como novos", "Maior alcance luminoso à noite", "Plásticos hidratados sem aspecto engordurado", "Valorização visual imediata"],
      badge: "Acabamento",
      highlight: false
    },
    {
      id: "combo-pre-venda",
      category: "martelinho",
      title: "Preparação Estética para Venda",
      subtitle: "Valorização de até 15% na negociação",
      desc: "Pacote integrado pensado especialmente para proprietários que vão anunciar o veículo e querem fechar negócio pelo teto da Tabela FIPE. Elimina pequenas mossas, renova o brilho da pintura e higieniza o interior para encantar o comprador no primeiro contato.",
      benefits: ["Elimina objeções de compradores", "Permite fotos muito mais atraentes", "Retorno imediato no valor de venda", "Agilidade para fechar negócio"],
      badge: "Alto Retorno",
      highlight: false
    }
  ];

  const filteredServices = activeTab === "todos"
    ? servicesList
    : servicesList.filter(s => s.category === activeTab);

  const testimonials = [
    {
      name: "Deyse Stanzani",
      role: "Local Guide · Google Maps",
      quote: "Serviços de excelência! O Davidson e todo o time atuam com enorme profissionalismo e honestidade. Atendimento de primeira e serviços executados com todo cuidado pra entregar o melhor! Podem confiar de olhos fechados!",
      rating: 5,
      car: "Martelinho & Polimento Técnico"
    },
    {
      name: "Ricardo Jr",
      role: "Local Guide com 299 avaliações · Google Maps",
      quote: "Levei meu carro na Studio Car para o trabalho de martelinho de ouro e o resultado foi simplesmente incrível. Agradeço ao Davidson e equipe. Meu carro ficou zero km de novo, sem mexer na pintura!",
      rating: 5,
      car: "Martelinho de Ouro em Amassado"
    },
    {
      name: "Carlos Miller",
      role: "Cliente Satisfeito · Google Maps",
      quote: "O Davidson tem um atendimento excelente, muito honesto, educado e com ótimo acolhimento. Serviço de excelência! Indico muito, nota mil. Deixa seu carro zero. Olhem o meu como ficou perfeito!",
      rating: 5,
      car: "Recuperação de Lataria & Brilho"
    }
  ];

  const faqItems = [
    {
      q: "O martelinho de ouro realmente não afeta nem queima a pintura original?",
      a: "Exatamente! A grande vantagem da técnica de martelinho de ouro de alta precisão é preservar 100% da pintura original de fábrica. Ao contrário da funilaria tradicional, nós não lixamos, não aplicamos massa plástica e não repintamos a lataria. O carro mantém a textura do verniz original e a nota máxima de originalidade em qualquer laudo cautelar."
    },
    {
      q: "Como faço para enviar a foto e receber o orçamento prévio pelo WhatsApp?",
      a: "É muito simples: limpe a região com um pano macio para remover poeira, posicione a câmera do celular em um ângulo de 45 graus (de lado) aproveitando o reflexo da luz natural ou de uma lâmpada sobre a chapa, e envie para o WhatsApp (21) 96685-9384. O Davidson analisa a foto e responde em poucos minutos informando a viabilidade técnica e a estimativa de valor."
    },
    {
      q: "Quanto tempo dura a execução de um serviço de martelinho de ouro?",
      a: "Pequenos amassados de portas e batidas de estacionamento geralmente são solucionados em um período de 1 a 3 horas. Casos mais complexos ou danos múltiplos (como granizo) podem levar de um turno a um dia útil. Em grande parte dos casos, você deixa o carro pela manhã e retira no mesmo dia."
    },
    {
      q: "Qual é a diferença entre o polimento comercial e o polimento técnico com vitrificação?",
      a: "O polimento comercial rápido costuma apenas maquiar a pintura com ceras que saem em 2 ou 3 lavagens. O nosso Polimento Técnico é corretivo: nivelamos o verniz milimetricamente para remover riscos e teias de aranha de verdade. Já a Vitrificação Cerâmica aplica uma nano-camada de vidro líquido que sela o verniz por até 3 anos, blindando a pintura contra raios UV, fezes de pássaros e sujeira pesada."
    },
    {
      q: "Onde fica localizada a oficina da Studio Car?",
      a: "Estamos localizados na R. Tenente Luiz Meirelles, 730, dentro do complexo da Unidade Estácio Teresópolis na Várzea. É um local seguro, monitorado, de fácil acesso e com ampla facilidade para você estacionar e deixar o seu veículo com tranquilidade."
    },
    {
      q: "Preciso agendar antes de levar o carro?",
      a: "Atendemos de segunda a sexta das 08:00 às 18:00 e aos sábados sob agendamento. Para garantir um atendimento ágil e sem filas, recomendamos enviar uma mensagem prévia no WhatsApp (21) 96685-9384 para combinarmos o melhor horário."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[#EAB308]/30 selection:text-white pb-24 lg:pb-0">
      
      {/* 1. TOP BAR DESTAQUE INSTITUCIONAL */}
      <div className="border-b border-white/5 bg-[#0D0D11] px-4 py-2 text-xs text-zinc-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-zinc-300">
              No complexo da Unidade Estácio Várzea · Davidson & Equipe Técnica
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-[#EAB308]" />
              Seg a Sex: 08h às 18h | Sáb sob agendamento
            </span>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 font-bold text-[#EAB308] hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVBAR - SEM ICONE (APENAS O NOME DO CLIENTE) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          
          {/* Brand Name ONLY - NO ICON AS REQUESTED */}
          <a href="#" className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Studio Car <span className="text-[#EAB308]">Estética</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase sm:text-xs">
              Martelinho de Ouro & Detailing · Estácio Várzea
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#avaliacao-foto" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              Orçamento por Foto
            </a>
            <a href="#comparativo" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              Martelinho vs Pintura
            </a>
            <a href="#especialidades" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              Especialidades
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              Avaliações 5.0
            </a>
            <a href="#sobre" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              O Estúdio
            </a>
            <a href="#faq" className="text-sm font-medium text-zinc-300 transition hover:text-[#EAB308]">
              Dúvidas
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-lg shadow-[#EAB308]/20 transition-all hover:brightness-110 active:scale-95"
            >
              <Camera className="h-4 w-4 text-zinc-950" />
              Avaliar Amassado por Foto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden hover:bg-white/5 transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#0F0F14] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#avaliacao-foto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                <span>Orçamento por Foto</span>
                <Camera className="h-4 w-4 text-[#EAB308]" />
              </a>
              <a
                href="#comparativo"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                Martelinho vs Pintura
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                Nossas Especialidades
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                Avaliações Google (5.0)
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                O Estúdio na Estácio
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-[#EAB308]"
              >
                Perguntas Frequentes
              </a>
              <a
                href={photoQuoteWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] py-3 text-sm font-bold text-zinc-950"
              >
                <Camera className="h-4 w-4" />
                Mandar Foto no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-14 md:py-24">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EAB308]/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badge de Prova Social */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#EAB308]/30 bg-[#1A1811] px-4 py-1.5 text-xs font-semibold text-[#FDE047]">
                <div className="flex items-center gap-1 text-[#EAB308]">
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                  <Star className="h-3.5 w-3.5 fill-[#EAB308] text-[#EAB308]" />
                </div>
                <span>5,0 no Google · 100% Avaliações 5 Estrelas Unânimes</span>
              </div>

              <h1 className="mt-6 font-['Outfit',sans-serif] text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Elimine amassados sem repintar e preserve a{" "}
                <span className="bg-gradient-to-r from-[#FACC15] via-[#EAB308] to-[#CA8A04] bg-clip-text text-transparent">
                  pintura original de fábrica.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
                A arte milimétrica do martelinho de ouro, vitrificação cerâmica de até 3 anos e polimento técnico espelhado com a precisão e honestidade do <strong className="text-white">Davidson e equipe</strong>. Atendimento técnico especializado no complexo da Unidade Estácio Teresópolis.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#simulador"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] px-7 py-4 text-base font-extrabold text-zinc-950 shadow-xl shadow-[#EAB308]/20 transition-all hover:brightness-110 active:scale-95"
                >
                  <Camera className="h-5 w-5 text-zinc-950" />
                  Enviar Foto do Amassado
                </a>
                <a
                  href="#especialidades"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  Conhecer Especialidades
                  <ArrowRight className="h-4 w-4 text-zinc-400" />
                </a>
              </div>

              {/* 3 Pilares Rápidos no Hero */}
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-left">
                <div className="rounded-xl border border-white/5 bg-[#121216]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-[#EAB308] sm:text-2xl block">
                    100%
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Pintura Original Preservada
                  </span>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#121216]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-white sm:text-2xl block">
                    15 Min
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Avaliação Prévia por Foto
                  </span>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#121216]/60 p-3">
                  <span className="font-['Outfit',sans-serif] text-xl font-black text-[#EAB308] sm:text-2xl block">
                    Estácio
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-400 block mt-0.5">
                    Complexo Seguro na Várzea
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card - Showcase de Confiança e Diagnóstico */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-[#121216] p-7 shadow-2xl backdrop-blur-md">
                
                {/* Header Card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EAB308]">
                      Padrão de Qualidade Davidson
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      Por que não fazer funilaria tradicional?
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 px-3 py-1 text-[11px] font-bold text-[#EAB308]">
                    Originalidade
                  </span>
                </div>

                {/* Items de garantia */}
                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Sem Diferença de Tonalidade</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        A tinta de fábrica permanece intacta. Seu carro não fica bicolor nem com textura de casca de laranja.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Zero Massa Plástica na Lata</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Eliminamos o amassado na chapa pura com hastes milimétricas, evitando trincas futuras.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Valor de Revenda Intacto</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        O medidor de espessura de tinta não acusa repintura no laudo cautelar na hora da venda.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Diagnóstico com Honestidade</h4>
                      <p className="text-xs leading-relaxed text-zinc-400 mt-0.5">
                        Se o amassado não for viável para martelinho, avisamos com total transparência ética.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="rounded-2xl border border-white/10 bg-[#181820] p-4 text-center">
                  <p className="text-xs text-zinc-300">
                    Dúvida se o seu caso resolve com martelinho?
                  </p>
                  <a
                    href={photoQuoteWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 py-2.5 text-xs font-bold text-white transition"
                  >
                    <MessageCircle className="h-4 w-4 text-[#EAB308]" />
                    Conversar direto com o Davidson
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MÓDULO: AVALIAÇÃO POR FOTO NO WHATSAPP (SOLUÇÃO DO MAIOR GARGALO) */}
      <section id="avaliacao-foto" className="border-y border-white/10 bg-gradient-to-b from-[#111116] to-[#0D0D11] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EAB308]/30 bg-[#1A1811] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#FDE047]">
              <Camera className="h-3.5 w-3.5 text-[#EAB308]" />
              Sem Perder Tempo
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
              Como Funciona a Avaliação Técnica por Foto
            </h2>
            <p className="mt-3 text-base text-zinc-300">
              Você não precisa se deslocar até a oficina só para saber se dá conserto. Em 3 passos simples, o Davidson analisa o reflexo da lataria e passa o diagnóstico.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#EAB308]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#EAB308]/20 transition absolute top-5 right-5">
                01
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308]">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Limpe a Região</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Passe um pano macio e seco sobre a mossa ou risco para remover poeira e revelar os detalhes exatos do amassado.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#EAB308]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#EAB308]/20 transition absolute top-5 right-5">
                02
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308]">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Fotografe a 45 Graus</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Tire fotos de lado (45°) e de frente, preferencialmente sob a luz do dia ou com o reflexo de lâmpadas para vermos a distorção da linha da lata.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14141A] p-7 relative group hover:border-[#EAB308]/40 transition">
              <span className="font-['Outfit',sans-serif] text-4xl font-black text-white/10 group-hover:text-[#EAB308]/20 transition absolute top-5 right-5">
                03
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308]">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Receba o Parecer Técnico</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Envie pelo WhatsApp e o Davidson informará se é caso 100% de martelinho sem repintura, tempo estimado e faixa de investimento.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={photoQuoteWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] px-8 py-4 text-base font-extrabold text-zinc-950 shadow-xl shadow-[#EAB308]/20 transition-all hover:brightness-110 active:scale-95"
            >
              <Camera className="h-5 w-5 text-zinc-950" />
              Mandar Fotos no WhatsApp Agora: (21) 96685-9384
            </a>
          </div>
        </div>
      </section>

      {/* 5. COMPARATIVO: MARTELINHO vs LANTERNAGEM TRADICIONAL */}
      <section id="comparativo" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EAB308]">
              Comparativo Transparente
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
              Martelinho de Ouro vs Lanternagem Tradicional
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Entenda por que a maioria dos motoristas prefere a técnica não invasiva e preserva a originalidade do carro.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            
            {/* Coluna Martelinho Studio Car */}
            <div className="rounded-3xl border-2 border-[#EAB308] bg-[#121216] p-8 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 rounded-full bg-[#EAB308] px-4 py-1 text-xs font-black uppercase text-zinc-950">
                Recomendado
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAB308]/20 text-[#EAB308]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Martelinho de Ouro Studio Car</h3>
                  <span className="text-xs text-[#EAB308] font-semibold">Técnica Artesanal de Alta Precisão</span>
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {[
                  "Preserva 100% da tinta original de fábrica",
                  "Sem massa plástica que resseca e trinca com o tempo",
                  "Zero risco de cor diferente (sem emendas ou casca de laranja)",
                  "Laudo cautelar 100% aprovado sem constar repintura",
                  "Conserto rápido: a maioria dos casos fica pronta no mesmo dia",
                  "Custo mais acessível e excelente custo-benefício"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm font-medium text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna Lanternagem / Funilaria Tradicional */}
            <div className="rounded-3xl border border-white/10 bg-[#0F0F14] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-300">Lanternagem Tradicional</h3>
                  <span className="text-xs text-zinc-500 font-semibold">Método Invasivo Convencional</span>
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {[
                  "Lixa e remove a pintura original de fábrica",
                  "Aplica massa plástica na lataria do veículo",
                  "Risco frequente de divergência de tonalidade e brilho",
                  "Desvaloriza o carro na revenda (perceptível no medidor de tinta)",
                  "Carro parado na oficina por 3 a 7 dias úteis",
                  "Custos extras com tintas, vernizes e mão de obra pesada"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <span className="text-sm font-medium text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ESPECIALIDADES & SERVIÇOS (COM ABAS) */}
      <section id="especialidades" className="border-t border-white/10 bg-[#0D0D11] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EAB308]">
              Cuidado Milimétrico
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
              Nossas Especialidades Técnicas
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Tratamento artesanal para valorizar a estética e o valor de mercado do seu automóvel.
            </p>
          </div>

          {/* Abas de Categoria */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "todos", label: "Todos os Serviços" },
              { id: "martelinho", label: "Martelinho & Desamasse" },
              { id: "detailing", label: "Polimento & Detailing" },
              { id: "protecao", label: "Proteção Cerâmica" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#EAB308] text-zinc-950 shadow-md shadow-[#EAB308]/20"
                    : "border border-white/10 bg-[#14141A] text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Serviços */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className={`flex flex-col justify-between rounded-3xl border p-7 transition-all hover:border-[#EAB308]/50 ${
                  srv.highlight
                    ? "border-[#EAB308]/40 bg-gradient-to-b from-[#181820] to-[#121216] shadow-xl"
                    : "border-white/10 bg-[#121216]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 px-3 py-1 text-xs font-bold text-[#EAB308]">
                      {srv.badge}
                    </span>
                    {srv.highlight && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {srv.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#EAB308]">
                    {srv.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {srv.desc}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {srv.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá, Davidson! Gostaria de um orçamento detalhado para o serviço de: ${srv.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/5 hover:bg-[#EAB308] hover:text-zinc-950 p-3 text-xs font-bold text-zinc-200 transition group"
                  >
                    <span>Cotar {srv.title}</span>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-950 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. MURAL DE DEPOIMENTOS REAIS DO GOOGLE MAPS (⭐ 5,0) */}
      <section id="avaliacoes" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-[#EAB308]">
              <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
              <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
              <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
              <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
              <Star className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
            </div>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
              Depoimentos Reais de Clientes
            </h2>
            <p className="mt-2 text-sm text-[#EAB308] font-bold">
              Nota 5,0 no Google Maps com 100% de avaliações 5 estrelas
            </p>
            <p className="mt-1 text-xs text-zinc-400 italic">
              "Esses rapazes são os melhores da cidade!" — Destaque no Google Maps Teresópolis
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121216] p-8 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#EAB308]">
                      {[...Array(t.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="h-4 w-4 fill-[#EAB308] text-[#EAB308]" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      Verificado
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-zinc-300 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="block text-sm font-bold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-zinc-400">
                    {t.role}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold text-[#EAB308]">
                    Serviço: {t.car}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Confiança Davidson */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#181820] to-[#121216] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h4 className="text-base font-bold text-white sm:text-lg">
                Quer ver fotos de outros trabalhos antes e depois?
              </h4>
              <p className="mt-1 text-xs text-zinc-400">
                O Davidson tem um portfólio rico de casos recuperados em Teresópolis para te mostrar no WhatsApp.
              </p>
            </div>
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-[#EAB308] px-5 py-3 text-xs font-bold text-zinc-950 transition hover:brightness-110 shrink-0"
            >
              <MessageCircle className="h-4 w-4" />
              Ver Portfólio no WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* 8. SOBRE O ESPAÇO NO COMPLEXO DA ESTÁCIO */}
      <section id="sobre" className="border-t border-white/10 bg-[#0D0D11] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Info */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EAB308]">
                Localização & Segurança
              </span>
              <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
                Estúdio Técnico no Complexo da Estácio
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                A <strong className="text-white">Studio Car Estética Automotiva</strong> está estrategicamente situada na <strong className="text-white">Rua Tenente Luiz Meirelles, 730</strong>, dentro do complexo da Unidade Estácio Teresópolis na Várzea.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Uma localização de extrema conveniência, monitoramento constante e segurança para você deixar seu veículo enquanto estuda, trabalha ou resolve pendências no centro da cidade.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAB308]/10 text-[#EAB308]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Endereço Exato</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{address}</p>
                    <p className="text-[11px] font-semibold text-[#EAB308] mt-0.5">{addressComplement}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAB308]/10 text-[#EAB308]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Horário de Funcionamento</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAB308]/10 text-[#EAB308]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Contato Direto com Davidson</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Studio Car Estética Automotiva R. Ten. Luiz Meirelles 730 Várzea Teresópolis RJ"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  <MapPin className="h-4 w-4 text-[#EAB308]" />
                  Abrir Trajeto no Google Maps
                </a>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#14141A] shadow-2xl">
                <div className="border-b border-white/10 bg-[#181820] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Unidade Estácio Teresópolis · Várzea
                  </span>
                </div>
                <div className="h-[340px] w-full bg-zinc-900">
                  <iframe
                    title="Mapa Studio Car Estética Automotiva"
                    src="https://maps.google.com/maps?q=Rua+Tenente+Luiz+Meirelles,+730+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 grayscale contrast-125 opacity-85 hover:opacity-100 transition duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. SIMULADOR DE COTAÇÃO INTERATIVO NO WHATSAPP */}
      <section id="simulador" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-[#121216] p-7 sm:p-10 shadow-2xl">
            
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EAB308]/30 bg-[#1A1811] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#FDE047]">
                <Camera className="h-3.5 w-3.5 text-[#EAB308]" />
                Diagnóstico Prévia Rápida
              </span>
              <h2 className="mt-3 font-['Outfit',sans-serif] text-2xl font-extrabold text-white sm:text-3xl">
                Simulador de Orçamento no WhatsApp
              </h2>
              <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
                Preencha os dados do seu veículo e clique para abrir a conversa com o Davidson no WhatsApp pronta para enviar as fotos:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Andrade"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Veículo & Ano:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Corolla 2022 / Compass 2021"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Serviço Pretendido:
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-sm text-white outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition"
                  >
                    <option value="Martelinho de Ouro (Amassado / Mossa)">Martelinho de Ouro (Amassado / Mossa)</option>
                    <option value="Polimento Técnico Espelhado">Polimento Técnico Espelhado</option>
                    <option value="Vitrificação Cerâmica de Pintura (9H)">Vitrificação Cerâmica de Pintura (9H)</option>
                    <option value="Higienização Interna & Oxi-Sanitização">Higienização Interna & Oxi-Sanitização</option>
                    <option value="Restauração de Faróis & Plásticos">Restauração de Faróis & Plásticos</option>
                    <option value="Preparação Estética Completa Pré-Venda">Preparação Estética Completa Pré-Venda</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Região do Amassado / Dano:
                  </label>
                  <select
                    value={damagedArea}
                    onChange={(e) => setDamagedArea(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-sm text-white outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition"
                  >
                    <option value="Porta / Lateral">Porta / Lateral (Batida de estacionamento)</option>
                    <option value="Para-lama Dianteiro ou Traseiro">Para-lama Dianteiro ou Traseiro</option>
                    <option value="Capô do Motor">Capô do Motor</option>
                    <option value="Teto (Chuva de Granizo / Galho)">Teto (Chuva de Granizo / Galho)</option>
                    <option value="Tampa do Porta-Malas">Tampa do Porta-Malas</option>
                    <option value="Pintura Geral (Microrriscos e Swirls)">Pintura Geral (Microrriscos e Swirls)</option>
                    <option value="Outro Local">Outro Local</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Descreva o que aconteceu (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Bateram a porta no estacionamento e ficou uma mossa sem raspar a tinta..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#EAB308] focus:ring-1 focus:ring-[#EAB308] transition"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] py-4 text-sm font-extrabold text-zinc-950 shadow-xl shadow-[#EAB308]/20 transition-all hover:brightness-110 active:scale-98"
              >
                <Send className="h-4 w-4 text-zinc-950" />
                Abrir WhatsApp e Anexar Foto do Carro
              </button>

              <p className="text-center text-[11px] text-zinc-500">
                Atendimento direto com o profissional Davidson no WhatsApp: {phoneDisplay}
              </p>
            </form>

          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section id="faq" className="border-t border-white/10 bg-[#0D0D11] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EAB308]">
              Tire Todas as Suas Dúvidas
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Respostas claras sobre martelinho de ouro, vitrificação e cuidados na Studio Car.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#121216] transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-['Outfit',sans-serif] text-base font-bold text-white hover:text-[#EAB308] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#EAB308] shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-300 border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FOOTER - SEM ICONE */}
      <footer className="border-t border-white/10 bg-[#070709] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Coluna 1: Nome Sem Ícone */}
            <div>
              <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-white block">
                Studio Car <span className="text-[#EAB308]">Estética</span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mt-0.5 uppercase tracking-wider">
                Martelinho de Ouro & Detailing
              </span>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                A arte do martelinho de ouro de alta precisão que preserva 100% da pintura original de fábrica. Polimento técnico espelhado e vitrificação cerâmica no complexo da Estácio Teresópolis.
              </p>
            </div>

            {/* Coluna 2: Endereço */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#EAB308] uppercase">
                Onde Estamos
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                {address}
              </p>
              <p className="mt-1 text-xs text-[#EAB308] font-medium">
                {addressComplement}
              </p>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#EAB308] uppercase">
                Horários
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                Segunda a Sexta: 08:00 às 18:00
              </p>
              <p className="text-xs text-zinc-300">
                Sábados: Sob agendamento prévio
              </p>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#EAB308] uppercase">
                Orçamentos por Foto
              </h4>
              <p className="mt-3 text-xs text-zinc-400">Telefone / WhatsApp:</p>
              <a
                href={photoQuoteWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-[#EAB308] hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">
                Avaliação técnica com Davidson em 15 minutos
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
            <span>
              © {new Date().getFullYear()} Studio Car Estética Automotiva · Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com padrão de excelência por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FIXA FLUTUANTE INFERIOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#09090B]/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-2xl">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-[#EAB308] bg-[#181820]"
            aria-label="Ligar para Davidson"
          >
            <Phone className="h-5 w-5 text-[#EAB308]" />
          </a>
          <a
            href={photoQuoteWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] py-3 text-sm font-extrabold text-zinc-950 shadow-lg shadow-[#EAB308]/20 active:scale-98"
          >
            <Camera className="h-4 w-4 text-zinc-950" />
            Enviar Foto do Amassado
          </a>
        </div>
      </div>


      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Studio%20Car%20Est%C3%A9tica%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
