/**
 * Dades multilingües per a l'Aula d'Acollida
 * Llengua meta: Català (CA)
 * Llengües pont: Castellà (ES), Francès (FR), Anglès (EN), Àrab (AR)
 * Dissenyat segons els criteris dels quaderns de Suport Lingüístic i Social (SLS)
 */

const ACOLLIDA_DATA = {
  categories: [
    {
      id: "urgencies",
      icon: "🚨",
      color: "#ff6b6b",
      titol: {
        ca: "Necessitats bàsiques i comunicació d'urgència",
        es: "Necesidades básicas y comunicación de urgencia",
        fr: "Besoins essentiels et communication d'urgence",
        en: "Basic needs & emergency communication",
        ar: "احتياجات أساسية وتواصل طارئ"
      },
      descripcio: {
        ca: "Paraules i expressions per demanar ajuda i comunicar necessitats immediates.",
        es: "Palabras y expresiones para pedir ayuda y comunicar necesidades inmediatas.",
        fr: "Mots et expressions pour demander de l'aide et exprimer des besoins urgents.",
        en: "Words and phrases to ask for help and communicate urgent needs.",
        ar: "كلمات وعبارات لطلب المساعدة والتعبير عن الاحتياجات العاجلة."
      }
    },
    {
      id: "escola",
      icon: "✏️",
      color: "#4dabf7",
      titol: {
        ca: "La classe i el material escolar",
        es: "La clase y el material escolar",
        fr: "La classe et le matériel scolaire",
        en: "Classroom and school supplies",
        ar: "القسم والأدوات المدرسية"
      },
      descripcio: {
        ca: "El material de treball diari a l'aula i les instruccions escolars.",
        es: "El material de trabajo diario en el aula y las instrucciones escolares.",
        fr: "Le matériel de travail quotidien en classe et les consignes scolaires.",
        en: "Daily classroom supplies and school instructions.",
        ar: "الأدوات المدرسية اليومية والتعليمات الصفية."
      }
    },
    {
      id: "pati",
      icon: "⚽",
      color: "#51cf66",
      titol: {
        ca: "El pati i els jocs de relació",
        es: "El patio y juegos de relación",
        fr: "La cour de récréation et les jeux",
        en: "Playground & playground games",
        ar: "ساحة الاستراحة والألعاب"
      },
      descripcio: {
        ca: "Vocabulari per jugar amb els companys, demanar participar i compartir.",
        es: "Vocabulario para jugar con los compañeros, pedir participar y compartir.",
        fr: "Vocabulaire pour jouer avec ses camarades, participer et partager.",
        en: "Vocabulary to play with peers, ask to join, and share.",
        ar: "مفردات للعب مع الزملاء وطلب المشاركة والمشاركة."
      }
    },
    {
      id: "casa",
      icon: "🏡",
      color: "#fcc419",
      titol: {
        ca: "La casa i la família",
        es: "La casa y la familia",
        fr: "La maison et la famille",
        en: "Home and family",
        ar: "البيت والعائلة"
      },
      descripcio: {
        ca: "Membres de la família, espais de la casa i accions de la vida quotidiana.",
        es: "Miembros de la familia, espacios de la casa y acciones cotidianas.",
        fr: "Membres de la famille, pièces de la maison et actions du quotidien.",
        en: "Family members, rooms in the house, and daily routines.",
        ar: "أفراد العائلة وأرجاء المنزل والأفعال اليومية."
      }
    },
    {
      id: "emocions",
      icon: "❤️",
      color: "#cc5de8",
      titol: {
        ca: "El cos, la salut i les emocions",
        es: "El cuerpo, la salud y las emociones",
        fr: "Le corps, la santé et les émotions",
        en: "Body, health and feelings",
        ar: "الجسم والصحة والمشاعر"
      },
      descripcio: {
        ca: "Expressar com ens sentim físicament i emocionalment.",
        es: "Expresar cómo nos sentimos física y emocionalmente.",
        fr: "Exprimer comment on se sent physiquement et émotionnellement.",
        en: "Express how we feel physically and emotionally.",
        ar: "التعبير عن مشاعرنا وحالتنا الجسدية."
      }
    },
    {
      id: "menjador",
      icon: "🍽️",
      color: "#ff922b",
      titol: {
        ca: "El menjador escolar i els aliments",
        es: "El comedor escolar y los alimentos",
        fr: "La cantine scolaire et les aliments",
        en: "School cafeteria & food",
        ar: "المطعم المدرسي والأغذية"
      },
      descripcio: {
        ca: "Estris per menjar, aliments bàsics i comunicació d'al·lèrgies i preferències.",
        es: "Utensilios para comer, alimentos básicos y comunicación de alergias y preferencias.",
        fr: "Ustensiles pour manger, aliments de base et communication d'allergies.",
        en: "Eating utensils, basic foods, and communicating allergies and preferences.",
        ar: "أدوات الأكل والأطعمة الأساسية والتعبير عن الحساسية والتفضيلات."
      }
    },
    {
      id: "roba",
      icon: "🧥",
      color: "#20c997",
      titol: {
        ca: "La roba i el temps atmosfèric",
        es: "La ropa y el tiempo atmosférico",
        fr: "Les vêtements et la météo",
        en: "Clothes & the weather",
        ar: "الملابس والطقس"
      },
      descripcio: {
        ca: "Peces de vestir diàries i expressions per parlar del temps que fa.",
        es: "Prendas de vestir diarias y expresiones para hablar del tiempo que hace.",
        fr: "Vêtements quotidiens et expressions pour parler de la météo.",
        en: "Everyday clothes and phrases to talk about the weather.",
        ar: "الملابس اليومية وعبارات للحديث عن حالة الطقس."
      }
    }
  ],

  vocabulary: [
    // --- 1. URGÈNCIES I NECESSITATS BÀSIQUES ---
    {
      id: "urg_aigua",
      categoria: "urgencies",
      icon: "💧",
      arasaacId: 2439, // aigua
      ca: "L'aigua",
      es: "El agua",
      fr: "L'eau",
      en: "Water",
      ar: "الماء",
      ar_fonetica: "Al-ma'",
      frase_model: {
        ca: "Tinc set, puc beure aigua?",
        es: "Tengo sed, ¿puedo beber agua?",
        fr: "J'ai soif, puis-je boire de l'eau ?",
        en: "I'm thirsty, can I drink water?",
        ar: "أنا عطشان، هل يمكنني شرب الماء؟"
      }
    },
    {
      id: "urg_lavabo",
      categoria: "urgencies",
      icon: "🚻",
      arasaacId: 2843, // lavabo
      ca: "El lavabo",
      es: "El lavabo / baño",
      fr: "Les toilettes",
      en: "The bathroom / toilet",
      ar: "المرحاض",
      ar_fonetica: "Al-mirhad",
      frase_model: {
        ca: "Puc anar al lavabo, si us plau?",
        es: "¿Puedo ir al baño, por favor?",
        fr: "Puis-je aller aux toilettes, s'il vous plaît ?",
        en: "May I go to the bathroom, please?",
        ar: "هل يمكنني الذهاب إلى المرحاض من فضلك؟"
      }
    },
    {
      id: "urg_ajuda",
      categoria: "urgencies",
      icon: "🤝",
      arasaacId: 6489, // ajudar
      ca: "L'ajuda",
      es: "La ayuda",
      fr: "L'aide",
      en: "Help",
      ar: "المساعدة",
      ar_fonetica: "Al-musa'ada",
      frase_model: {
        ca: "Em pots ajudar?",
        es: "¿Me puedes ayudar?",
        fr: "Peux-tu m'aider ?",
        en: "Can you help me?",
        ar: "هل يمكنك مساعدتي؟"
      }
    },
    {
      id: "urg_dolor",
      categoria: "urgencies",
      icon: "🩹",
      arasaacId: 4684, // fer-se mal
      ca: "El dolor / Fer-se mal",
      es: "El dolor / Hacerse daño",
      fr: "La douleur / Se faire mal",
      en: "Pain / Hurt",
      ar: "الألم / وجع",
      ar_fonetica: "Al-alam / Waja'",
      frase_model: {
        ca: "M'he fet mal, em fa mal aquí.",
        es: "Me he hecho daño, me duele aquí.",
        fr: "Je me suis fait mal, j'ai mal ici.",
        en: "I hurt myself, it hurts here.",
        ar: "لقد تأذيت، يؤلمني هنا."
      }
    },
    {
      id: "urg_noentenc",
      categoria: "urgencies",
      icon: "❓",
      arasaacId: 27958, // no entendre
      ca: "No ho entenc",
      es: "No lo entiendo",
      fr: "Je ne comprends pas",
      en: "I don't understand",
      ar: "لا أفهم",
      ar_fonetica: "La afham",
      frase_model: {
        ca: "Ho pots repetir? No ho entenc.",
        es: "¿Puedes repetirlo? No lo entiendo.",
        fr: "Peux-tu répéter ? Je ne comprends pas.",
        en: "Can you repeat? I don't understand.",
        ar: "هل يمكنك الإعادة؟ لا أفهم."
      }
    },
    {
      id: "urg_si_no",
      categoria: "urgencies",
      icon: "👍",
      arasaacId: 6051, // sí
      ca: "Sí / No",
      es: "Sí / No",
      fr: "Oui / Non",
      en: "Yes / No",
      ar: "نعم / لا",
      ar_fonetica: "Na'am / La",
      frase_model: {
        ca: "Sí, ho vull. / No, gràcies.",
        es: "Sí, lo quiero. / No, gracias.",
        fr: "Oui, je le veux. / Non, merci.",
        en: "Yes, I want it. / No, thanks.",
        ar: "نعم، أريد ذلك. / لا، شكراً."
      }
    },

    // --- 2. LA CLASSE I EL MATERIAL ESCOLAR ---
    {
      id: "esc_llapis",
      categoria: "escola",
      icon: "✏️",
      arasaacId: 2476, // llapis
      ca: "El llapis",
      es: "El lápiz",
      fr: "Le crayon",
      en: "The pencil",
      ar: "قلم الرصاص",
      ar_fonetica: "Qalam ar-rasas",
      frase_model: {
        ca: "Agafo el llapis per escriure.",
        es: "Cojo el lápiz para escribir.",
        fr: "Je prends le crayon pour écrire.",
        en: "I take the pencil to write.",
        ar: "آخذ قلم الرصاص لأكتب."
      }
    },
    {
      id: "esc_goma",
      categoria: "escola",
      icon: "🧼",
      arasaacId: 2452, // goma
      ca: "La goma d'esborrar",
      es: "La goma de borrar",
      fr: "La gomme",
      en: "The eraser",
      ar: "الممحاة",
      ar_fonetica: "Al-mimhah",
      frase_model: {
        ca: "Em deixes la goma, si us plau?",
        es: "¿Me dejas la goma, por favor?",
        fr: "Tu me prêtes la gomme, s'il te plaît ?",
        en: "Can you lend me the eraser, please?",
        ar: "هل تعيرني الممحاة من فضلك؟"
      }
    },
    {
      id: "esc_llibre",
      categoria: "escola",
      icon: "📖",
      arasaacId: 2482, // llibre
      ca: "El llibre",
      es: "El libro",
      fr: "Le livre",
      en: "The book",
      ar: "الكتاب",
      ar_fonetica: "Al-kitab",
      frase_model: {
        ca: "Obrim el llibre per la pàgina deu.",
        es: "Abrimos el libro por la página diez.",
        fr: "Ouvrons le livre à la page dix.",
        en: "We open the book to page ten.",
        ar: "نفتح الكتاب في الصفحة العاشرة."
      }
    },
    {
      id: "esc_llibreta",
      categoria: "escola",
      icon: "📓",
      arasaacId: 2483, // quadern
      ca: "La llibreta",
      es: "El cuaderno",
      fr: "Le cahier",
      en: "The notebook",
      ar: "الدفتر",
      ar_fonetica: "Ad-daftar",
      frase_model: {
        ca: "Escriu la data a la llibreta.",
        es: "Escribe la fecha en el cuaderno.",
        fr: "Écris la date dans le cahier.",
        en: "Write the date in your notebook.",
        ar: "اكتب التاريخ في الدفتر."
      }
    },
    {
      id: "esc_tisores",
      categoria: "escola",
      icon: "✂️",
      arasaacId: 2496, // tisores
      ca: "Les tisores",
      es: "Las tijeras",
      fr: "Les ciseaux",
      en: "The scissors",
      ar: "المقص",
      ar_fonetica: "Al-miqas",
      frase_model: {
        ca: "Tallo el paper amb les tisores.",
        es: "Corto el papel con las tijeras.",
        fr: "Je coupe le papier avec les ciseaux.",
        en: "I cut the paper with scissors.",
        ar: "أقص الورق بالمقص."
      }
    },
    {
      id: "esc_motxilla",
      categoria: "escola",
      icon: "🎒",
      arasaacId: 2485, // motxilla
      ca: "La motxilla",
      es: "La mochila",
      fr: "Le sac à dos / cartable",
      en: "The backpack",
      ar: "المحفظة / الحقيبة",
      ar_fonetica: "Al-mihfadha / Al-haqiba",
      frase_model: {
        ca: "Guardo tot el material a la motxilla.",
        es: "Guardo todo el material en la mochila.",
        fr: "Je range tout le matériel dans le sac.",
        en: "I put all the supplies in the backpack.",
        ar: "أضع كل الأدوات في المحفظة."
      }
    },
    {
      id: "esc_taula",
      categoria: "escola",
      icon: "🪑",
      arasaacId: 2494, // taula / cadira
      ca: "La taula i la cadira",
      es: "La mesa y la silla",
      fr: "La table et la chaise",
      en: "The table and the chair",
      ar: "الطاولة والكرسي",
      ar_fonetica: "At-tawila wal-kursi",
      frase_model: {
        ca: "Seieu a la vostra cadira, si us plau.",
        es: "Sentaos en vuestra silla, por favor.",
        fr: "Asseyez-vous sur votre chaise, s'il vous plaît.",
        en: "Sit on your chair, please.",
        ar: "اجلسوا على كراسيكم من فضلكم."
      }
    },

    // --- 3. EL PATI I ELS JOCS ---
    {
      id: "pat_pilota",
      categoria: "pati",
      icon: "⚽",
      arasaacId: 2517, // pilota
      ca: "La pilota",
      es: "La pelota / balón",
      fr: "Le ballon / la balle",
      en: "The ball",
      ar: "الكرة",
      ar_fonetica: "Al-kura",
      frase_model: {
        ca: "Passa'm la pilota!",
        es: "¡Pásame la pelota!",
        fr: "Passe-moi le ballon !",
        en: "Pass me the ball!",
        ar: "مرر لي الكرة!"
      }
    },
    {
      id: "pat_jugar",
      categoria: "pati",
      icon: "🎲",
      arasaacId: 6516, // jugar
      ca: "Jugar",
      es: "Jugar",
      fr: "Jouer",
      en: "To play",
      ar: "اللعب / يلعب",
      ar_fonetica: "Al-la'ib / Yal'ab",
      frase_model: {
        ca: "Puc jugar amb vosaltres?",
        es: "¿Puedo jugar con vosotros?",
        fr: "Puis-je jouer avec vous ?",
        en: "Can I play with you?",
        ar: "هل يمكنني اللعب معكم؟"
      }
    },
    {
      id: "pat_correr",
      categoria: "pati",
      icon: "🏃",
      arasaacId: 6470, // córrer
      ca: "Córrer",
      es: "Correr",
      fr: "Courir",
      en: "To run",
      ar: "الجري / يركض",
      ar_fonetica: "Al-jary / Yarkud",
      frase_model: {
        ca: "Correm molt ràpid al pati!",
        es: "¡Corremos muy rápido en el patio!",
        fr: "Nous courons très vite dans la cour !",
        en: "We run very fast in the playground!",
        ar: "نركض بسرعة في الساحة!"
      }
    },
    {
      id: "pat_amic",
      categoria: "pati",
      icon: "🧑‍🤝‍🧑",
      arasaacId: 27954, // amics
      ca: "L'amic / L'amiga",
      es: "El amigo / La amiga",
      fr: "L'ami / L'amie",
      en: "The friend",
      ar: "الصديق / الصديقة",
      ar_fonetica: "As-sadiq / As-sadiqa",
      frase_model: {
        ca: "Tu ets el meu amic.",
        es: "Tú eres mi amigo.",
        fr: "Tu es mon ami.",
        en: "You are my friend.",
        ar: "أنت صديقي."
      }
    },
    {
      id: "pat_pati",
      categoria: "pati",
      icon: "🌳",
      arasaacId: 2840, // pati
      ca: "El pati",
      es: "El patio",
      fr: "La cour de récréation",
      en: "The playground / schoolyard",
      ar: "ساحة الاستراحة",
      ar_fonetica: "Sahat al-istirahah",
      frase_model: {
        ca: "És l'hora de sortir al pati!",
        es: "¡Es la hora de salir al patio!",
        fr: "C'est l'heure de sortir dans la cour !",
        en: "It's time to go to the playground!",
        ar: "إنه وقت الخروج إلى الساحة!"
      }
    },

    // --- 4. LA CASA I LA FAMÍLIA ---
    {
      id: "cas_casa",
      categoria: "casa",
      icon: "🏠",
      arasaacId: 2404, // casa
      ca: "La casa",
      es: "La casa",
      fr: "La maison",
      en: "Home / House",
      ar: "البيت / المنزل",
      ar_fonetica: "Al-bayt / Al-manzil",
      frase_model: {
        ca: "A la tarda vaig a casa.",
        es: "Por la tarde voy a casa.",
        fr: "L'après-midi, je rentre à la maison.",
        en: "In the afternoon I go home.",
        ar: "في المساء أذهب إلى البيت."
      }
    },
    {
      id: "cas_familia",
      categoria: "casa",
      icon: "👨‍👩‍👧‍👦",
      arasaacId: 2419, // família
      ca: "La família (pare i mare)",
      es: "La familia (padre y madre)",
      fr: "La famille (père et mère)",
      en: "The family (father and mother)",
      ar: "العائلة (الأب والأم)",
      ar_fonetica: "Al-'a'ila (Al-ab wal-umm)",
      frase_model: {
        ca: "Estimo molt la meva família.",
        es: "Quiero mucho a mi familia.",
        fr: "J'aime beaucoup ma famille.",
        en: "I love my family very much.",
        ar: "أحب عائلتي كثيراً."
      }
    },
    {
      id: "cas_menjar",
      categoria: "casa",
      icon: "🍽️",
      arasaacId: 6467, // menjar
      ca: "El menjar / Dinar",
      es: "La comida / Comer",
      fr: "La nourriture / Manger",
      en: "Food / To eat",
      ar: "الطعام / الأكل",
      ar_fonetica: "At-ta'am / Al-akl",
      frase_model: {
        ca: "Tinc gana, vull menjar.",
        es: "Tengo hambre, quiero comer.",
        fr: "J'ai faim, je veux manger.",
        en: "I'm hungry, I want to eat.",
        ar: "أنا جائع، أريد أن آكل."
      }
    },
    {
      id: "cas_dormir",
      categoria: "casa",
      icon: "🛏️",
      arasaacId: 6475, // dormir
      ca: "Dormir / El llit",
      es: "Dormir / La cama",
      fr: "Dormir / Le lit",
      en: "To sleep / The bed",
      ar: "النوم / السرير",
      ar_fonetica: "An-nawm / As-sarir",
      frase_model: {
        ca: "Estic cansat, me'n vaig a dormir.",
        es: "Estoy cansado, me voy a dormir.",
        fr: "Je suis fatigué, je vais dormir.",
        en: "I am tired, I am going to sleep.",
        ar: "أنا متعب، سأذهب للنوم."
      }
    },

    // --- 5. EL COS, LA SALUT I LES EMOCIONS ---
    {
      id: "emo_content",
      categoria: "emocions",
      icon: "😄",
      arasaacId: 6241, // content
      ca: "Content / Contenta",
      es: "Contento / Contenta",
      fr: "Content / Contente",
      en: "Happy",
      ar: "سعيد / فرحان",
      ar_fonetica: "Sa'id / Farhan",
      frase_model: {
        ca: "Avui estic molt content!",
        es: "¡Hoy estoy muy contento!",
        fr: "Aujourd'hui, je suis très content !",
        en: "Today I am very happy!",
        ar: "اليوم أنا سعيد جداً!"
      }
    },
    {
      id: "emo_trist",
      categoria: "emocions",
      icon: "😢",
      arasaacId: 6243, // trist
      ca: "Trist / Trista",
      es: "Triste",
      fr: "Triste",
      en: "Sad",
      ar: "حزين / حزينة",
      ar_fonetica: "Hazin / Hazina",
      frase_model: {
        ca: "Estic trist, trobo a faltar el meu país.",
        es: "Estoy triste, echo de menos mi país.",
        fr: "Je suis triste, mon pays me manque.",
        en: "I am sad, I miss my country.",
        ar: "أنا حزين، أشتاق لبلدي."
      }
    },
    {
      id: "emo_cap",
      categoria: "emocions",
      icon: "🧠",
      arasaacId: 2362, // cap
      ca: "El cap",
      es: "La cabeza",
      fr: "La tête",
      en: "The head",
      ar: "الرأس",
      ar_fonetica: "Ar-ra's",
      frase_model: {
        ca: "Em fa mal el cap.",
        es: "Me duele la cabeza.",
        fr: "J'ai mal à la tête.",
        en: "My head hurts.",
        ar: "يؤلمني رأسي."
      }
    },
    {
      id: "emo_panxa",
      categoria: "emocions",
      icon: "🤰",
      arasaacId: 2364, // panxa
      ca: "La panxa",
      es: "La barriga / tripa",
      fr: "Le ventre",
      en: "The tummy / belly",
      ar: "البطن",
      ar_fonetica: "Al-batn",
      frase_model: {
        ca: "Em fa mal la panxa.",
        es: "Me duele la barriga.",
        fr: "J'ai mal au ventre.",
        en: "My stomach hurts.",
        ar: "يؤلمني بطني."
      }
    },
    {
      id: "emo_mans",
      categoria: "emocions",
      icon: "👋",
      arasaacId: 2378, // mans
      ca: "Les mans",
      es: "Las manos",
      fr: "Les mains",
      en: "The hands",
      ar: "اليدان / اليدين",
      ar_fonetica: "Al-yadan",
      frase_model: {
        ca: "Ens rentem les mans amb sabó.",
        es: "Nos lavamos las manos con jabón.",
        fr: "Nous nous lavons les mains avec du savon.",
        en: "We wash our hands with soap.",
        ar: "نغسل أيدينا بالصابون."
      }
    },

    // --- 6. EL MENJADOR ESCOLAR I ELS ALIMENTS ---
    {
      id: "men_pa",
      categoria: "menjador",
      icon: "🥖",
      arasaacId: 2434, // pa
      ca: "El pa",
      es: "El pan",
      fr: "Le pain",
      en: "Bread",
      ar: "الخبز",
      ar_fonetica: "Al-khubz",
      frase_model: {
        ca: "Puc agafar una mica de pa, si us plau?",
        es: "¿Puedo coger un poco de pan, por favor?",
        fr: "Puis-je prendre un peu de pain, s'il vous plaît ?",
        en: "Can I take some bread, please?",
        ar: "هل يمكنني أخذ قليل من الخبز من فضلك؟"
      }
    },
    {
      id: "men_aigua",
      categoria: "menjador",
      icon: "🥛",
      arasaacId: 2439, // aigua
      ca: "El got d'aigua",
      es: "El vaso de agua",
      fr: "Le verre d'eau",
      en: "A glass of water",
      ar: "كأس ماء",
      ar_fonetica: "Ka's ma'",
      frase_model: {
        ca: "Pots omplir el meu got d'aigua?",
        es: "¿Puedes llenar mi vaso de agua?",
        fr: "Peux-tu remplir mon verre d'eau ?",
        en: "Can you fill my glass with water?",
        ar: "هل يمكنك ملء كأسي بالماء؟"
      }
    },
    {
      id: "men_cullera",
      categoria: "menjador",
      icon: "🥄",
      arasaacId: 2516, // cullera
      ca: "La cullera",
      es: "La cuchara",
      fr: "La cuillère",
      en: "The spoon",
      ar: "الملعقة",
      ar_fonetica: "Al-mil'aqa",
      frase_model: {
        ca: "Menjo la sopa amb la cullera.",
        es: "Como la sopa con la cuchara.",
        fr: "Je mange la soupe avec la cuillère.",
        en: "I eat the soup with the spoon.",
        ar: "آكل الحساء بالملعقة."
      }
    },
    {
      id: "men_forquilla",
      categoria: "menjador",
      icon: "🍴",
      arasaacId: 2517, // forquilla
      ca: "La forquilla",
      es: "El tenedor",
      fr: "La fourchette",
      en: "The fork",
      ar: "الشوكة",
      ar_fonetica: "Ash-shawka",
      frase_model: {
        ca: "M'ha caigut la forquilla a terra.",
        es: "Se me ha caído el tenedor al suelo.",
        fr: "Ma fourchette est tombée par terre.",
        en: "My fork fell on the floor.",
        ar: "سقطت شوكتي على الأرض."
      }
    },
    {
      id: "men_fruita",
      categoria: "menjador",
      icon: "🍎",
      arasaacId: 2404, // poma
      ca: "La fruita",
      es: "La fruta",
      fr: "Le fruit",
      en: "Fruit",
      ar: "الفاكهة",
      ar_fonetica: "Al-fakiha",
      frase_model: {
        ca: "De postres menjo una poma.",
        es: "De postre como una manzana.",
        fr: "En dessert, je mange une pomme.",
        en: "For dessert I eat an apple.",
        ar: "في التحلية آكل تفاحة."
      }
    },
    {
      id: "men_alergia",
      categoria: "menjador",
      icon: "⚠️",
      arasaacId: 32679, // alergia
      ca: "L'al·lèrgia (No puc menjar...)",
      es: "La alergia (No puedo comer...)",
      fr: "L'allergie (Je ne peux pas manger...)",
      en: "Allergy (I cannot eat...)",
      ar: "الحساسية (لا يمكنني أكل...)",
      ar_fonetica: "Al-hasasiyya",
      frase_model: {
        ca: "No puc menjar porc ni fruits secs.",
        es: "No puedo comer cerdo ni frutos secos.",
        fr: "Je ne peux pas manger de porc ni de fruits secs.",
        en: "I cannot eat pork or nuts.",
        ar: "لا يمكنني أكل لحم الخنزير أو المكسرات."
      }
    },

    // --- 7. LA ROBA I EL TEMPS ATMOSFÈRIC ---
    {
      id: "rob_jaqueta",
      categoria: "roba",
      icon: "🧥",
      arasaacId: 2470, // jaqueta
      ca: "La jaqueta",
      es: "La chaqueta",
      fr: "La veste",
      en: "The jacket",
      ar: "السترة",
      ar_fonetica: "As-sutra",
      frase_model: {
        ca: "Em poso la jaqueta per sortir al pati.",
        es: "Me pongo la chaqueta para salir al patio.",
        fr: "Je mets ma veste pour aller dans la cour.",
        en: "I put on my jacket to go out to the yard.",
        ar: "أرتدي السترة للخروج إلى الساحة."
      }
    },
    {
      id: "rob_sabates",
      categoria: "roba",
      icon: "👟",
      arasaacId: 2482, // sabates
      ca: "Les sabates",
      es: "Los zapatos / zapatillas",
      fr: "Les chaussures",
      en: "Shoes / sneakers",
      ar: "الحذاء",
      ar_fonetica: "Al-hidha'",
      frase_model: {
        ca: "Em lligo els cordons de les sabates.",
        es: "Me ato los cordones de los zapatos.",
        fr: "J'attache les lacets de mes chaussures.",
        en: "I tie my shoelaces.",
        ar: "أربط أربطة حذائي."
      }
    },
    {
      id: "rob_pantalons",
      categoria: "roba",
      icon: "👖",
      arasaacId: 2473, // pantalons
      ca: "Els pantalons",
      es: "Los pantalones",
      fr: "Le pantalon",
      en: "Trousers / pants",
      ar: "السروال",
      ar_fonetica: "As-sirwal",
      frase_model: {
        ca: "Porto pantalons d'esport per fer gimnàstica.",
        es: "Llevo pantalones de deporte para hacer gimnasia.",
        fr: "Je porte un pantalon de sport pour la gym.",
        en: "I wear sport pants for gym class.",
        ar: "أرتدي سروالاً رياضياً للتربية البدنية."
      }
    },
    {
      id: "rob_fred",
      categoria: "roba",
      icon: "❄️",
      arasaacId: 6954, // fred
      ca: "Fa fred",
      es: "Hace frío",
      fr: "Il fait froid",
      en: "It's cold",
      ar: "الجو بارد",
      ar_fonetica: "Al-jaww barid",
      frase_model: {
        ca: "Avui fa molt de fred.",
        es: "Hoy hace mucho frío.",
        fr: "Aujourd'hui il fait très froid.",
        en: "Today it is very cold.",
        ar: "اليوم الجو بارد جداً."
      }
    },
    {
      id: "rob_calor",
      categoria: "roba",
      icon: "☀️",
      arasaacId: 6953, // calor
      ca: "Fa calor",
      es: "Hace calor",
      fr: "Il fait chaud",
      en: "It's hot",
      ar: "الجو حار",
      ar_fonetica: "Al-jaww harr",
      frase_model: {
        ca: "Tinc calor, em puc treure el jersei?",
        es: "Tengo calor, ¿puedo quitarme el jersey?",
        fr: "J'ai chaud, puis-je enlever mon pull ?",
        en: "I'm hot, can I take off my sweater?",
        ar: "أشعر بالحر، هل يمكنني خلع كنزتي؟"
      }
    },
    {
      id: "rob_pluja",
      categoria: "roba",
      icon: "🌧️",
      arasaacId: 6965, // pluja
      ca: "La pluja (Plou)",
      es: "La lluvia (Llueve)",
      fr: "La pluie (Il pleut)",
      en: "Rain (It's raining)",
      ar: "المطر (تمطر)",
      ar_fonetica: "Al-matar",
      frase_model: {
        ca: "Plou i obrim el paraigua.",
        es: "Llueve y abrimos el paraguas.",
        fr: "Il pleut et nous ouvrons le parapluie.",
        en: "It's raining and we open the umbrella.",
        ar: "إنها تمطر ونفتح المظلة."
      }
    }
  ],

  // Textos de la interfície multilingüe
  ui: {
    appTitle: {
      ca: "Aula d'Acollida Digital",
      es: "Aula de Acogida Digital",
      fr: "Classe d'Accueil Numérique",
      en: "Digital Welcome Classroom",
      ar: "قسم الاستقبال الرقمي"
    },
    appSubtitle: {
      ca: "Suport lingüístic i d'acollida per a l'alumnat nouvingut",
      es: "Apoyo lingüístico y de acogida para el alumnado recién llegado",
      fr: "Soutien linguistique et accueil pour les nouveaux élèves",
      en: "Linguistic and welcoming support for newly arrived students",
      ar: "دعم لغوي واستقبال للتلاميذ الوافدين الجدد"
    },
    studentNameLabel: {
      ca: "El teu nom:",
      es: "Tu nombre:",
      fr: "Ton prénom :",
      en: "Your name:",
      ar: "اسمك:"
    },
    bridgeLangLabel: {
      ca: "La teva llengua de suport:",
      es: "Tu lengua de apoyo:",
      fr: "Ta langue de soutien :",
      en: "Your bridge language:",
      ar: "لغة المساعدة:"
    },
    startSessionBtn: {
      ca: "Comença la sessió ✨",
      es: "Empezar la sesión ✨",
      fr: "Commencer la séance ✨",
      en: "Start session ✨",
      ar: "ابدأ الحصة ✨"
    },
    modeDiscover: {
      ca: "1. Descobreix i Escolta 🎧",
      es: "1. Descubre y Escucha 🎧",
      fr: "1. Découvre et Écoute 🎧",
      en: "1. Discover & Listen 🎧",
      ar: "١. اكتشف واستمع 🎧"
    },
    modePractice: {
      ca: "2. Jocs i Reptes 🎯",
      es: "2. Juegos y Retos 🎯",
      fr: "2. Jeux et Défis 🎯",
      en: "2. Games & Challenges 🎯",
      ar: "٢. ألعاب وتحديات 🎯"
    },
    finishSessionBtn: {
      ca: "Finalitza i Descarrega Progrés 📄",
      es: "Finalizar y Descargar Progreso 📄",
      fr: "Terminer et Télécharger Progrès 📄",
      en: "Finish & Download Progress 📄",
      ar: "إنهاء وتحميل التقرير 📄"
    },
    changeCategoryBtn: {
      ca: "Tornar als temes 📚",
      es: "Volver a temas 📚",
      fr: "Retour aux thèmes 📚",
      en: "Back to topics 📚",
      ar: "العودة للمواضيع 📚"
    },
    listenCatalan: {
      ca: "Escolta en català",
      es: "Escuchar en catalán",
      fr: "Écouter en catalan",
      en: "Listen in Catalan",
      ar: "استمع بالكتالونية"
    },
    listenSupport: {
      ca: "Escolta en la teva llengua",
      es: "Escuchar en tu idioma",
      fr: "Écouter dans ta langue",
      en: "Listen in your language",
      ar: "استمع بلغتك"
    },
    challengeListenTitle: {
      ca: "Repte auditiu: Què escoltes?",
      es: "Reto auditivo: ¿Qué escuchas?",
      fr: "Défi auditif : Qu'entends-tu ?",
      en: "Listening challenge: What do you hear?",
      ar: "تحدي الاستماع: ماذا تسمع؟"
    },
    challengeListenInstr: {
      ca: "Clica l'altaveu i selecciona la imatge corresponent:",
      es: "Pulsa el altavoz y selecciona la imagen correspondiente:",
      fr: "Clique sur le haut-parleur et choisis la bonne image :",
      en: "Click the speaker and choose the matching image:",
      ar: "اضغط على مكبر الصوت واختر الصورة المطابقة:"
    },
    challengeMemoryTitle: {
      ca: "Joc de parelles (Memory)",
      es: "Juego de parejas (Memory)",
      fr: "Jeu de mémoire (Memory)",
      en: "Memory Matching Game",
      ar: "لعبة مطابقة الأزواج (الذاكرة)"
    },
    challengeMemoryInstr: {
      ca: "Gira dues targetes per associar la imatge amb la paraula en català:",
      es: "Gira dos tarjetas para asociar la imagen con la palabra en catalán:",
      fr: "Retourne deux cartes pour associer l'image au mot en catalan :",
      en: "Flip two cards to match the picture with the Catalan word:",
      ar: "اقلب بطاقتين لمطابقة الصورة مع الكلمة بالكتالونية:"
    },
    memoryWellDone: {
      ca: "Fantàstic! Has trobat totes les parelles! 🌟",
      es: "¡Fantástico! ¡Has encontrado todas las parejas! 🌟",
      fr: "Fantastique ! Tu as trouvé toutes les paires ! 🌟",
      en: "Fantastic! You found all the pairs! 🌟",
      ar: "رائع! لقد وجدت جميع الأزواج! 🌟"
    },
    playAgainBtn: {
      ca: "Jugar una altra partida 🔄",
      es: "Jugar otra partida 🔄",
      fr: "Rejouer une partie 🔄",
      en: "Play again 🔄",
      ar: "العب جولة أخرى 🔄"
    },
    challengeMatchTitle: {
      ca: "Repte de lectura: Quina paraula és?",
      es: "Reto de lectura: ¿Qué palabra es?",
      fr: "Défi de lecture : Quel est ce mot ?",
      en: "Reading challenge: Which word is it?",
      ar: "تحدي القراءة: ما هي الكلمة؟"
    },
    challengeSentenceTitle: {
      ca: "La frase útil del dia",
      es: "La frase útil del día",
      fr: "La phrase utile du jour",
      en: "Useful phrase of the day",
      ar: "العبارة المفيدة لليوم"
    },
    wellDone: {
      ca: "Molt bé! Felicitats! 🌟",
      es: "¡Muy bien! ¡Felicidades! 🌟",
      fr: "Très bien ! Félicitations ! 🌟",
      en: "Well done! Congratulations! 🌟",
      ar: "أحسنت! مبروك! 🌟"
    },
    tryAgain: {
      ca: "Torna-ho a provar! Tu pots! 💪",
      es: "¡Vuelve a intentarlo! ¡Tú puedes! 💪",
      fr: "Réessaie ! Tu es capable ! 💪",
      en: "Try again! You can do it! 💪",
      ar: "حاول مرة أخرى! أنت تستطيع! 💪"
    }
  }
};

// Exportació per a entorns modulars o finestra global
if (typeof module !== "undefined" && module.exports) {
  module.exports = ACOLLIDA_DATA;
}
