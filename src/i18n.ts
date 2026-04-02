import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          nav: {
            inicio: "Início",
            oportunidades: "Oportunidades",
            projetos: "Projetos",
            estudo: "Estudo dos Ventos",
            regioes: "Regiões",
            contato: "Entrar em contato"
          },
          hero: {
            cta: "Conhecer Projetos",
            tags: [
              "Lançamento Terra Ventos",
              "Oportunidade Pé na Areia",
              "Lugar de Evento",
              "Investimentos no litoral do Ceará"
            ],
            titles: [
              "ESTUDO<br />DOS VENTOS",
              "INVISTA EM<br />BITUPITÁ, CEARÁ",
              "DESCUBRA<br />A CASA TERRA<br />VENTOS NO PREÁ",
              "INVISTA COM O<br />VENTO A FAVOR."
            ],
            subtitles: [
              "Turismo Esportivo & Investimento<br />Imobiliário no litoral oeste do Ceará",
              "Projetos terreno exclusivos <b>beira-mar</b><br />com valorização estimada em 20% ao ano.",
              "Viva momentos exclusivos à beira-mar no maior spot<br />de kitesurf e wingfoil do Ceará.",
              "Terrenos, casas e projetos exclusivos com segurança<br />jurídica, valorização real e assessoria completa."
            ],
            card: {
              experience: "10+ anos de experiência\nimobiliária no Ceará"
            },
            saberMais: "Quero saber mais"
          },
          oportunidades: {
            badge: "Oportunidades exclusivas",
            title1: "ENCONTRE SEU PRÓXIMO",
            title2: "IMÓVEL NO LITORAL DO CEARÁ",
            titles: ["LUGAR DE EVENTO", "VENDA", "INVESTIMENTOS", "LANÇAMENTO"],
            cards: {
              "01": "Residências de alto padrão prontas, com arquitetura contemporânea e integração com a natureza. Ideais para segunda moradia e experiências exclusivas beira-mar.",
              "02": "Terrenos pé na areia no último village planejado do Roteiro Costa dos Ventos. Oportunidade de investimento estratégico com os melhores vetores de valorização.",
              "03": "Empreendimentos boutique para investidores com visão antecipada. Produto com estudo de vento aplicado, personalização arquitetônica e localização de alta escassez.",
              "04": "O Villa Prabhu é um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e segurança em uma região privilegiada."
            }
          },
          projetos: {
            badge: "Projetos em destaque",
            title: "VENDA, INVESTIMENTOS E LUGARES DE EVENTOS NO CEARA",
            cards: {
              "1": { tag: "Lan\u00E7amento", title: "Villa Prabhu \u2014 Paracuru-CE", price: "Sob Consulta" },
              "2": { tag: "Venda", title: "Terrenos p\u00E9 na areia em Bitupit\u00E1", price: "A partir de R$ 120 MIL" },
              "3": { tag: "Investimento", title: "Vila do Ingl\u00EAs", price: "Em Breve" }
            }
          },
          condudu: {
            badge: "Exclusividade",
            title: "VILLA CONDURU III<br />NO PREA",
            subtitle: "Casa de alto padrão em Preá, pensada para momentos únicos com vento constante, serviço personalizado e integração total com o mar.",
            tags: ["Lugar de Evento", "3 quartos", "2 banheiros", "500 m²"],
            priceNote: "consultar disponibilidade",
            cta: "Ver detalhes da casa"
          },
          cidades: {
            badge: "Litoral Cearense",
            title: "CIDADES ONDE<br />ESTAMOS PRESENTES",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Infraestrutura completa e proximidade estratégica com Fortaleza. Um mercado maduro, com liquidez imediata e fluxo constante de turistas internacionais o ano todo." },
              "2": { title: "Tatajuba, Ceará", desc: "Conexão profunda com a natureza e ventos lendários. Um destino exclusivo que atrai o público high-end em busca de privacidade e experiências autênticas à beira-mar." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "O paraíso das águas paradas e o destino técnico por excelência. Combinação única de ventos constantes com uma lagoa extensa, ideal para performance e hospitalidade." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "Um dos metros quadrados mais desejados do Ceará. Vila charmosa com gastronomia de alto padrão e uma baía segura, perfeita para o turismo de charme e esportes de vento." },
              "5": { title: "Preá, Ceará", desc: "Epicentro do kitesurf global com infraestrutura consolidada e demanda internacional constante." },
              "6": { title: "Flecheiras, Ceará", desc: "Infraestrutura de luxo consolidada e demanda internacional recorde. Onde o estilo de vida cosmopolita encontra a melhor janela de vento do planeta." },
              "7": { title: "Bitupitá, Ceará", desc: "Pé na areia intocado e o segredo mais bem guardado da Rota das Emoções. Oportunidade early stage com alto potencial de valorização e águas perfeitas para o kite e wingfoil." }
            }
          },
          estudo: {
            badge: "Estudo dos Ventos",
            title: "ESTUDO<br />DOS VENTOS",
            desc: "Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <strong>Mergulhe em dados e análise potencial do Litoral Cearense.</strong>",
            stats: { 
              "1": "Cidades analisadas", "2": "de ventos constante", "3": "de valorização ao ano", "4": "técnico e ambiental" 
            },
            cta: "Ver o estudo completo",
            videoInfo: ["Fundador e CEO Terra Ventos", "Estudo dos Ventos - clique para assistir", "Reproduzir vídeo"],
            watchFull: "Assista o vídeo completo"
          },
          mapa: {
            title: "ESTUDO DOS VENTOS PELO LITORAL DE CEARA",
            activateInstructions: "Clique para interagir com o mapa",
            deactivate: "Travar mapa para scroll"
          },
          assessoria: {
            badge: "Diferenciais da Terra Ventos",
            title: "ASSESSORIA COMPLETA<br/>DO INICIO AO FIM",
            items: {
              "1": { title: "Curadoria Early Stage", text: "Identificação de ativos com alto potencial de valorização antes da exposição ao mercado aberto." },
              "2": { title: "Networking", text: "Acesso a uma rede seleta de investidores e atletas dos esportes de vento." },
              "3": { title: "Atendimento Concierge", text: "Assessoria personalizada em todas as etapas, garantindo uma jornada de investimento fluida e sofisticada." },
              "4": { title: "Valorização Real", text: "Histórico comprovado de rentabilidade nas regiões com maior crescimento do litoral cearense." },
              "5": { title: "Segurança Jurídica", text: "Due diligence rigoroso e auditoria fundiária para garantir a proteção integral do patrimônio." },
              "6": { title: "Suporte Global Multilíngue", text: "Atendimento especializado em Português, Inglês e Espanhol." }
            }
          },
          depoimentos: {
            badge: "Depoimentos",
            title: "VOZES DA<br />COMUNIDADE",
            subtitle: "Mais do que investidores, somos um ecossistema de visionários, atletas e entusiastas do litoral que escolheram o Ceará como o seu próximo marco de vida e patrimônio.",
            roles: ["Investidor Internacional", "Empresario e Kitesurfista", "Proprietaria de Casa de Veraneio", "Advogada e Investidora", "Designer e Kitesurfista", "CTO de Tech e Kitesurfista"],
            quotes: [
              "\"O que me atraiu na Terra Ventos foi a capacidade de antecipação. Eles não me ofereceram apenas um terreno, mas um posicionamento estratégico em Bitupitá antes da valorização explodir. A segurança jurídica e o suporte bilíngue foram fundamentais para eu investir com tranquilidade, mesmo morando fora.\"",
              "\"Como praticante de wingfoil, eu buscava um lugar onde o vento fosse constante e a comunidade vibrante. Na Terra Ventos, encontrei uma curadoria que entendeu o que um velejador precisa. O Estudo dos Ventos aplicado ao meu lote garantiu que minha casa fosse integrada à natureza e perfeita para o esporte.\"",
              "\"A assessoria concierge da Terra Ventos é o que realmente diferencia a marca. Eles cuidaram de tudo, do due diligence jurídico à conexão com os melhores arquitetos locais. Sentir que você faz parte de uma comunidade que preserva a essência rústica do Ceará, mas com um padrão internacional, é impagável.\"",
              "\"Como advogada, a minha prioridade sempre foi a segurança documental. No litoral, a informalidade assusta, mas a Terra Ventos entregou um due diligence impecável. Investi em uma propriedade na Praia dos Monteiros com a certeza de que estava a construir um patrimônio sólido e regularizado para a minha família. É uma tranquilidade que não tem preço.\"",
              "\"O que me conquistou foi o Estudo dos Ventos. Como designer, valorizo projetos que respeitam o meio ambiente. Ver como a Terra Ventos utiliza a ciência do clima para orientar a implantação das casas, garantindo frescor natural e luz perfeita, é fascinante. Não é apenas um terreno, é a base para uma arquitetura de alto padrão que conversa com a natureza.\"",
              "\"O que me conquistou foi o Estudo dos Ventos. Como designer, valorizo projetos que respeitam o meio ambiente. Ver como a Terra Ventos utiliza a ciência do clima para orientar a implantação das casas, garantindo frescor natural e luz perfeita, é fascinante. Não é apenas um terreno, é a base para uma arquitetura de alto padrão que conversa com a natureza.\""
            ]
          },
          form: {
            badge: "Receba as novidades",
            title: "VENTO SOPRA PRIMEIRO PARA<br />QUEM ESTA CONECTADO.",
            subtitle: "Junte-se à nossa lista prioritária e receba curadoria de terrenos early stage, dados de valorização do litoral cearense e oportunidades que não chegam ao mercado aberto.",
            fields: { first: "Nome", last: "Sobrenome", email: "E-mail", phone: "Telefone" },
            message: "Como podemos ajudar?",
            submit: "Enviar Mensagem",
            success: "Mensagem recebida com sucesso! Em breve, um de nossos especialistas entrará em contato."
          },
          footer: { rights: "© Copyright 2025. Todos os direitos reservados." },
          pagina: {
            back: "Voltar",
            about: "Sobre a propriedade",
            infra: "Infra-estrutura",
            facilities: "Facilidades",
            contact: "Fale com um de nossos consultores",
            cta: "Entrar em contato",
            location: "Localização",
            videoGallery: "Galeria de Vídeos",
            downloadTitle: "Baixar Material",
            downloadDesc: "Acesse os arquivos oficiais do empreendimento.",
            viewPdf: "Visualizar PDF"
          }
        }
      },
      en: {
        translation: {
          nav: { inicio: "Home", oportunidades: "Opportunities", projetos: "Projects", estudo: "Wind Study", regioes: "Regions", contato: "Contact Us" },
          hero: {
            cta: "View Projects",
            tags: ["Terra Ventos Launch", "Beachfront Opportunity", "Event Venue", "Investments on the coast of Ceará"],
            titles: ["WIND<br />STUDY", "INVEST IN<br />BITUPITÁ, CEARÁ", "DISCOVER<br />CASA TERRA<br />VENTOS IN PREÁ", "INVEST WITH THE<br />WIND IN YOUR FAVOR."],
            subtitles: ["Sports Tourism & Real Estate<br />Investment on Ceará's west coast", "Exclusive <b>beachfront</b> land projects<br />with estimated 20% per year appreciation.", "Experience beachfront excellence at the biggest<br />kitesurf & wingfoil spot in Ceará.", "Land, houses, and exclusive projects with legal<br />security, real appreciation, and full advisory."],
            card: { experience: "10+ years of real estate\nexperience in Ceará" },
            saberMais: "Learn more"
          },
          oportunidades: {
            badge: "Exclusive Opportunities",
            title1: "FIND YOUR NEXT",
            title2: "PROPERTY ON CEARÁ'S COAST",
            titles: ["EVENT VENUE", "FOR SALE", "INVESTMENTS", "LAUNCH"],
            cards: {
              "01": "Ready high-end residences with contemporary architecture integrated into nature. Ideal for a second home and exclusive beachfront experiences.",
              "02": "Beachfront land in the latest planned village on the Costa dos Ventos Route. Strategic investment opportunity with the best appreciation drivers.",
              "03": "Boutique developments for early-vision investors. Product featuring applied wind study, architectural customization, and highly scarce locations.",
              "04": "Villa Prabhu is a development planned by Bianchi Urbanismo, focused on offering quality of life and security in a privileged region."
            }
          },
          projetos: {
            badge: "Featured Projects",
            title: "FOR SALE, INVESTMENTS AND EVENT VENUES IN CEARÁ",
            cards: {
              "1": { tag: "Launch", title: "Villa Prabhu \u2014 Paracuru-CE", price: "On Request" },
              "2": { tag: "For Sale", title: "Beachfront land in Bitupit\u00E1", price: "R$ 120,000" },
              "3": { tag: "Investment", title: "Vila do Ingl\u00EAs", price: "Coming Soon" }
            }
          },
          condudu: {
            badge: "Exclusive",
            title: "VILLA CONDURU III<br />IN PREÁ",
            subtitle: "High-end house in Preá, designed for unique moments with constant wind, personalized service, and total integration with the sea.",
            tags: ["Event Venue", "3 bedrooms", "2 bathrooms", "500 m²"],
            priceNote: "consult availability",
            cta: "View house details"
          },
          cidades: {
            badge: "Ceará Coast",
            title: "CITIES WHERE<br />WE ARE PRESENT",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Complete infrastructure and strategic proximity to Fortaleza. A mature market, with immediate liquidity and a constant flow of international tourists all year round." },
              "2": { title: "Tatajuba, Ceará", desc: "Deep connection with nature and legendary winds. An exclusive destination that attracts a high-end public looking for privacy and authentic beachfront experiences." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "The paradise of flat waters and the technical destination par excellence. A unique combination of constant winds with an extensive lagoon, ideal for performance and hospitality." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "One of the most desired square meters in Ceará. Charming village with high-end gastronomy and a safe bay, perfect for charm tourism and wind sports." },
              "5": { title: "Preá, Ceará", desc: "Epicenter of global kitesurfing with consolidated infrastructure and constant international demand." },
              "6": { title: "Flecheiras, Ceará", desc: "Consolidated luxury infrastructure and record international demand. Where the cosmopolitan lifestyle meets the best wind window on the planet." },
              "7": { title: "Bitupitá, Ceará", desc: "Untouched beachfront and the best-kept secret of the Route of Emotions. Early stage opportunity with high appreciation potential and perfect waters for kite and wingfoil." }
            }
          },
          estudo: {
            badge: "Wind Study",
            title: "WIND<br />STUDY",
            desc: "Terra Ventos presents: Which locations grow most in value, where is least explored and with the greatest potential. <strong>Dive into data and potential analysis of the Ceará Coast.</strong>",
            stats: { "1": "Analyzed cities", "2": "months of constant wind", "3": "yearly appreciation", "4": "technical environmental areas" },
            cta: "View full study",
            videoInfo: ["Founder and CEO Terra Ventos", "Wind Study - click to watch", "Play video"],
            watchFull: "Watch full video"
          },
          mapa: {
            title: "WIND STUDY BY THE CEARA COAST",
            activateInstructions: "Click to interact with the map",
            deactivate: "Lock map for scroll"
          },
          assessoria: {
            badge: "Terra Ventos Differentials",
            title: "COMPLETE ADVISORY<br/>FROM START TO FINISH",
            items: {
              "1": { title: "Early Stage Curation", text: "Identification of assets with high appreciation potential before exposure to the open market." },
              "2": { title: "Networking", text: "Access to a select network of investors and wind sports athletes." },
              "3": { title: "Concierge Service", text: "Personalized advice at all stages, ensuring a smooth and sophisticated investment journey." },
              "4": { title: "Real Appreciation", text: "Proven track record of profitability in the regions with the highest growth on the Ceará coast." },
              "5": { title: "Legal Security", text: "Rigorous due diligence and land auditing to ensure full protection of assets." },
              "6": { title: "Global Multilingual Support", text: "Specialized service in Portuguese, English, and Spanish." }
            }
          },
          depoimentos: {
            badge: "Testimonials",
            title: "VOICES OF THE<br />COMMUNITY",
            subtitle: "More than investors, we are an ecosystem of visionaries, athletes, and coastal enthusiasts who have chosen Ceará as their next life and wealth milestone.",
            roles: ["International Investor", "Businessman and Kitesurfer", "Vacation Home Owner", "Lawyer and Investor", "Designer and Kitesurfer", "Tech CTO and Kitesurfer"],
            quotes: [
              "\"What attracted me to Terra Ventos was the anticipation capability. They didn't just offer me land, but a strategic positioning in Bitupitá before the appreciation exploded. Legal security and bilingual support were fundamental for me to invest with peace of mind, even living abroad.\"",
              "\"As a wingfoil practitioner, I was looking for a place where the wind was constant and the community vibrant. At Terra Ventos, I found a curation that understood what a sailor needs. The Wind Study applied to my lot ensured my house was integrated with nature and perfect for the sport.\"",
              "\" Terra Ventos' concierge advisory is what really sets the brand apart. They took care of everything, from legal due diligence to connecting with the best local architects. Feeling part of a community that preserves the rustic essence of Ceará, but with an international standard, is priceless.\"",
              "\"As a lawyer, my priority has always been document security. On the coast, informality is frightening, but Terra Ventos delivered an impeccable due diligence. I invested in a property in Praia dos Monteiros with the certainty that I was building a solid and regularized patrimony for my family. It's an invaluable peace of mind.\"",
              "\"What conquered me was the Wind Study. As a designer, I value projects that respect the environment. Seeing how Terra Ventos uses climate science to guide the implementation of houses, ensuring natural freshness and perfect light, is fascinating. It's not just a plot, it's the basis for a high-end architecture that converses with nature.\"",
              "\"What conquered me was the Wind Study. As a designer, I value projects that respect the environment. Seeing how Terra Ventos uses climate science to guide the implementation of houses, ensuring natural freshness and perfect light, is fascinating. It's not just a plot, it's the basis for a high-end architecture that converses with nature.\""
            ]
          },
          form: {
            badge: "Receive News",
            title: "THE WIND BLOWS FIRST FOR<br />THOSE WHO ARE CONNECTED.",
            subtitle: "Join our priority list and receive early-stage land curation, appreciation data from the Ceará coast, and opportunities that don't reach the open market.",
            fields: { first: "First Name", last: "Last Name", email: "Email", phone: "Phone" },
            message: "How can we help you?",
            submit: "Send Message",
            success: "Message received successfully! One of our experts will contact you shortly."
          },
          footer: { rights: "© Copyright 2025. All Rights Reserved." },
          pagina: {
            back: "Back",
            about: "About the property",
            infra: "Infrastructure",
            facilities: "Facilities",
            contact: "Talk to one of our consultants",
            cta: "Contact Us",
            location: "Location",
            videoGallery: "Video Gallery",
            downloadTitle: "Download Material",
            downloadDesc: "Access the official project files.",
            viewPdf: "View PDF"
          }
        }
      },
      es: {
        translation: {
          nav: { inicio: "Inicio", oportunidades: "Oportunidades", projetos: "Proyectos", estudo: "Estudio de los Vientos", regioes: "Regiones", contato: "Contáctenos" },
          hero: {
            cta: "Ver Proyectos",
            tags: ["Lanzamiento Terra Ventos", "Oportunidad Frente al Mar", "Lugar de Eventos", "Inversiones en la costa de Ceará"],
            titles: ["ESTUDIO DE<br />LOS VIENTOS", "INVIERTA EN<br />BITUPITÁ, CEARÁ", "DESCUBRA<br />LA CASA TERRA<br />VENTOS EN PREÁ", "INVIERTA CON EL<br />VIENTO A FAVOR."],
            subtitles: ["Turismo Deportivo e Inversión<br />Inmobiliaria en la costa oeste de Ceará", "Proyectos exclusivos de terrenos <b>frente al mar</b><br />con apreciación estimada al 20% anual.", "Viva momentos exclusivos en el mayor punto de<br />kitesurf y wingfoil de Ceará.", "Terrenos, casas y proyectos exclusivos con seguridad<br />jurídica, apreciación real y asesoría completa."],
            card: { experience: "10+ años de experiencia\ninmobiliaria en Ceará" },
            saberMais: "Quiero saber más"
          },
          oportunidades: {
             badge: "Oportunidades exclusivas",
             title1: "ENCUENTRA TU PRÓXIMA",
             title2: "PROPIEDAD EN LA COSTA DE CEARÁ",
             titles: ["LUGAR DE EVENTOS", "VENTA", "INVERSIONES", "LANZAMIENTO"],
             cards: {
               "01": "Residencias de alta gama listas, con arquitectura contemporánea integrada a la naturaleza. Ideales para segunda vivienda y experiencias exclusivas frente al mar.",
               "02": "Terrenos frente al mar en el último pueblo planeado en la Ruta Costa dos Ventos. Oportunidad de inversión estratégica con los mejores vectores de apreciación.",
               "03": "Desarrollos boutique para inversores con visión anticipada. Producto con estudio de vientos aplicado, personalización arquitectónica y ubicaciones de alta escasez.",
               "04": "Villa Prabhu es un desarrollo planificado por Bianchi Urbanismo, enfocado en ofrecer calidad de vida y seguridad en una región privilegiada."
             }
          },
          projetos: {
            badge: "Proyectos destacados",
            title: "VENTA, INVERSIONES Y LUGARES DE EVENTOS EN EL LITORAL DE CEARA",
            cards: {
              "1": { tag: "Lanzamiento", title: "Villa Prabhu \u2014 Paracuru-CE", price: "Bajo Consulta" },
              "2": { tag: "Venta", title: "Terrenos frente al mar en Bitupit\u00E1", price: "Desde R$ 120 MIL" },
              "3": { tag: "Inversi\u00F3n", title: "Vila do Ingl\u00EAs", price: "Pr\u00F3ximamente" }
            }
          },
          condudu: {
            badge: "Exclusivo",
            title: "VILLA CONDURU III<br />EN PREÁ",
            subtitle: "Casa de alto estándar en Preá, diseñada para momentos únicos con viento constante, servicio personalizado e integración total con el mar.",
            tags: ["Lugar de Evento", "3 dormitorios", "2 baños", "500 m²"],
            priceNote: "consultar disponibilidad",
            cta: "Ver detalles de la casa"
          },
          cidades: {
            badge: "Costa Cearense",
            title: "CIUDADES DONDE<br />ESTAMOS PRESENTES",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Infraestructura completa y proximidad estratégica con Fortaleza. Un mercado maduro, con liquidez inmediata y un flujo constante de turistas internacionales durante todo el año." },
              "2": { title: "Tatajuba, Ceará", desc: "Profunda conexión con la naturaleza y vientos legendarios. Un destino exclusivo que atrae a un público de alto nivel que busca privacidad y experiencias auténticas junto al mar." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "El paraíso de las aguas planas y el destino técnico por excelencia. Una combinación única de vientos constantes con una extensa laguna, ideal para el rendimiento y la hospitalidad." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "Uno de los metros cuadrados más deseados de Ceará. Encantador pueblo con gastronomía de alta gama y una bahía segura, perfecto para turismo con encanto y deportes de viento." },
              "5": { title: "Preá, Ceará", desc: "Epicentro del kitesurf global con infraestructura consolidada y demanda internacional constante." },
              "6": { title: "Flecheiras, Ceará", desc: "Infraestructura de lujo consolidada y demanda internacional récord. Donde el estilo de vida cosmopolita se encuentra con la mejor ventana de viento del planeta." },
              "7": { title: "Bitupitá, Ceará", desc: "Frente al mar virgen y el secreto mejor guardado de la Ruta de las Emociones. Oportunidad en etapa temprana con alto potencial de apreciación y aguas perfectas para el kite y wingfoil." }
            }
          },
          estudo: {
            badge: "Estudio de Vientos",
            title: "ESTUDIO<br />DE VIENTOS",
            desc: "Terra Ventos presenta: Qué ubicaciones crecen más en valor, dónde está menos explorado y con mayor potencial. <strong>Sumérgete en los datos y análisis de potencial de la Costa Ceará.</strong>",
            stats: { "1": "Ciudades analizadas", "2": "meses de viento constante", "3": "apreciación anual", "4": "áreas técnicas y ambientales" },
            cta: "Ver estudio completo",
            videoInfo: ["Fundador y CEO Terra Ventos", "Estudio de Vientos - clic para ver", "Reproducir vídeo"],
            watchFull: "Ver el vídeo completo"
          },
          mapa: {
            title: "ESTUDIO DE LOS VIENTOS POR EL LITORAL DE CEARA",
            activateInstructions: "Haz clic para interactuar con el mapa",
            deactivate: "Bloquear mapa para scroll"
          },
          assessoria: {
            badge: "Diferenciales de Terra Ventos",
            title: "ASESORÍA COMPLETA<br/>DE PRINCIPIO A FIN",
            items: {
              "1": { title: "Curaduría Temprana", text: "Identificación de activos con alto potencial de apreciación antes de la exposición al mercado abierto." },
              "2": { title: "Networking", text: "Acceso a una selecta red de inversores y atletas de deportes de viento." },
              "3": { title: "Atención Concierge", text: "Asesoramiento personalizado en todas las etapas, garantizando un viaje de inversión fluido y sofisticado." },
              "4": { title: "Apreciación Real", text: "Historial comprobado de rentabilidad en las regiones de mayor crecimiento en la costa de Ceará." },
              "5": { title: "Seguridad Legal", text: "Debida diligencia rigurosa y auditoría de tierras para garantizar la protección total de los activos." },
              "6": { title: "Soporte Global Multilingüe", text: "Servicio especializado en portugués, inglés y español." }
            }
          },
          depoimentos: {
            badge: "Testimonios",
            title: "VOCES DE LA<br />COMUNIDAD",
            subtitle: "Más que inversores, somos un ecosistema de visionarios, atletas y entusiastas costeros que han elegido Ceará como su próximo hito de vida y riqueza.",
            roles: ["Inversor Internacional", "Propietario de Negocio y Kitesurfista", "Propietaria de Casa de Vacaciones", "Abogada e Inversora", "Diseñadora y Kitesurfista", "CTO Técnico y Kitesurfista"],
            quotes: [
              "\"Lo que me atrajo de Terra Ventos fue su capacidad de anticipación. No solo me ofrecieron un terreno, sino un posicionamiento estratégico en Bitupitá antes de que explotara la apreciación. La seguridad legal y el soporte bilingüe fueron fundamentales para que pudiera invertir con tranquilidad, incluso viviendo en el extranjero.\"",
              "\"Como practicante de wingfoil, buscaba un lugar donde el viento fuera constante y la comunidad vibrante. En Terra Ventos, encontré una curaduría que entendió lo que necesita un navegante. El Estudio de Vientos aplicado a mi lote aseguró que mi casa estuviera integrada a la naturaleza y perfecta para el deporte.\"",
              "\"La asesoría concierge de Terra Ventos es lo que realmente diferencia a la marca. Se encargaron de todo, desde la debida diligencia legal hasta conectarme con los mejores arquitectos locales. Sentir que eres parte de una comunidad que conserva la esencia rústica de Ceará, pero con un estándar internacional, no tiene precio.\"",
              "\"Como abogada, mi prioridad siempre ha sido la seguridad de los documentos. En la costa, la informalidad asusta, pero Terra Ventos entregó un proceso impecable. Invertí en una propiedad en la Praia dos Monteiros con la certeza de que estaba construyendo un patrimonio sólido y regularizado para mi familia. Es una tranquilidad invaluable.\"",
              "\"Lo que me conquistó fue el Estudio de Vientos. Como diseñadora, valoro proyectos que respetan el medio ambiente. Ver cómo Terra Ventos utiliza la ciencia del clima para guiar la implementación de casas, garantizando frescura natural y luz perfecta, es fascinante. No es solo una parcela, es la base para una arquitectura de alta gama que dialoga con la naturaleza.\"",
              "\"Lo que me conquistó fue el Estudio de Vientos. Como diseñadora, valoro proyectos que respetan el medio ambiente. Ver cómo Terra Ventos utiliza la ciencia del clima para guiar la implementación de casas, garantizando frescura natural y luz perfecta, es fascinante. No es solo una parcela, es la base para una arquitectura de alta gama que dialoga con la naturaleza.\""
            ]
          },
          form: {
            badge: "Recibe Novedades",
            title: "EL VIENTO SOPLA PRIMERO PARA<br />LOS QUE ESTÁN CONECTADOS.",
            subtitle: "Únase a nuestra lista de prioridad y reciba curaduría de tierras temprano, datos de apreciación de la costa de Ceará y oportunidades que no llegan al mercado abierto.",
            fields: { first: "Nombre", last: "Apellido", email: "Correo", phone: "Teléfono" },
            message: "¿En qué te podemos ayudar?",
            submit: "Enviar Mensaje",
            success: "¡Mensaje recibido con éxito! En breve uno de nuestros expertos se pondrá en contacto contigo."
          },
          footer: { rights: "© Copyright 2025. Todos los derechos reservados." },
          pagina: {
            back: "Volver",
            about: "Sobre la propiedad",
            infra: "Infraestructura",
            facilities: "Instalaciones",
            contact: "Hable con uno de nuestros consultores",
            cta: "Contáctenos",
            location: "Ubicación",
            videoGallery: "Galería de Videos",
            downloadTitle: "Descargar Material",
            downloadDesc: "Acceda a los archivos oficiales del proyecto.",
            viewPdf: "Ver PDF"
          }
        }
      }
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
