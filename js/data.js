/**
 * Dades multilingües per a l'Aula d'Acollida
 * Llengua meta: Català (CA)
 * Llengües pont: Castellà (ES), Francès (FR), Anglès (EN), Àrab (AR), Ucraïnès (UK), Xinès (ZH)
 * Dissenyat segons els criteris dels quaderns de Suport Lingüístic i Social (SLS)
 */

const ACOLLIDA_DATA = {
  "categories": [
    {
      "id": "urgencies",
      "icon": "🚨",
      "color": "#ff6b6b",
      "titol": {
        "ca": "Necessitats bàsiques i comunicació d'urgència",
        "es": "Necesidades básicas y comunicación de urgencia",
        "fr": "Besoins essentiels et communication d'urgence",
        "en": "Basic needs & emergency communication",
        "ar": "احتياجات أساسية وتواصل طارئ",
        "uk": "Базові потреби та невідкладне спілкування",
        "zh": "基本需求与紧急沟通"
      },
      "descripcio": {
        "ca": "Paraules i expressions per demanar ajuda i comunicar necessitats immediates.",
        "es": "Palabras y expresiones para pedir ayuda y comunicar necesidades inmediatas.",
        "fr": "Mots et expressions pour demander de l'aide et exprimer des besoins urgents.",
        "en": "Words and phrases to ask for help and communicate urgent needs.",
        "ar": "كلمات وعبارات لطلب المساعدة والتعبير عن الاحتياجات العاجلة.",
        "uk": "Слова та вирази, щоб попросити про допомогу та повідомити про термінові потреби.",
        "zh": "用于求助和表达急需的单词和常用语。"
      }
    },
    {
      "id": "escola",
      "icon": "✏️",
      "color": "#4dabf7",
      "titol": {
        "ca": "La classe i el material escolar",
        "es": "La clase y el material escolar",
        "fr": "La classe et le matériel scolaire",
        "en": "Classroom and school supplies",
        "ar": "القسم والأدوات المدرسية",
        "uk": "Клас та шкільне приладдя",
        "zh": "教室与学习文具"
      },
      "descripcio": {
        "ca": "El material de treball diari a l'aula i les instruccions escolars.",
        "es": "El material de trabajo diario en el aula y las instrucciones escolares.",
        "fr": "Le matériel de travail quotidien en classe et les consignes scolaires.",
        "en": "Daily classroom supplies and school instructions.",
        "ar": "الأدوات المدرسية اليومية والتعليمات الصفية.",
        "uk": "Щоденні шкільні матеріали та інструкції на уроці.",
        "zh": "日常课堂学习用品与学校常规指令。"
      }
    },
    {
      "id": "pati",
      "icon": "⚽",
      "color": "#51cf66",
      "titol": {
        "ca": "El pati i els jocs de relació",
        "es": "El patio y juegos de relación",
        "fr": "La cour de récréation et les jeux",
        "en": "Playground & playground games",
        "ar": "ساحة الاستراحة والألعاب",
        "uk": "Шкільне подвір'я та спільні ігри",
        "zh": "操场与课间游戏"
      },
      "descripcio": {
        "ca": "Vocabulari per jugar amb els companys, demanar participar i compartir.",
        "es": "Vocabulario para jugar con los compañeros, pedir participar y compartir.",
        "fr": "Vocabulaire pour jouer avec ses camarades, participer et partager.",
        "en": "Vocabulary to play with peers, ask to join, and share.",
        "ar": "مفردات للعب مع الزملاء وطلب المشاركة والمشاركة.",
        "uk": "Слова для гри з однокласниками, прохання приєднатися та взаємодії.",
        "zh": "与同伴玩耍、加入游戏和分享的词汇。"
      }
    },
    {
      "id": "casa",
      "icon": "🏡",
      "color": "#fcc419",
      "titol": {
        "ca": "La casa i la família",
        "es": "La casa y la familia",
        "fr": "La maison et la famille",
        "en": "Home and family",
        "ar": "البيت والعائلة",
        "uk": "Дім та сім'я",
        "zh": "家庭与家人"
      },
      "descripcio": {
        "ca": "Membres de la família, espais de la casa i accions de la vida quotidiana.",
        "es": "Miembros de la familia, espacios de la casa y acciones cotidianas.",
        "fr": "Membres de la famille, pièces de la maison et actions du quotidien.",
        "en": "Family members, rooms in the house, and daily routines.",
        "ar": "أفراد العائلة وأرجاء المنزل والأفعال اليومية.",
        "uk": "Члени родини, кімнати в будинку та щоденні дії.",
        "zh": "家庭成员、房间布局与日常生活动作。"
      }
    },
    {
      "id": "emocions",
      "icon": "❤️",
      "color": "#cc5de8",
      "titol": {
        "ca": "El cos, la salut i les emocions",
        "es": "El cuerpo, la salud y las emociones",
        "fr": "Le corps, la santé et les émotions",
        "en": "Body, health and feelings",
        "ar": "الجسم والصحة والمشاعر",
        "uk": "Тіло, здоров'я та емоції",
        "zh": "身体、健康与情绪"
      },
      "descripcio": {
        "ca": "Expressar com ens sentim físicament i emocionalment.",
        "es": "Expresar cómo nos sentimos física y emocionalmente.",
        "fr": "Exprimer comment on se sent physiquement et émotionnellement.",
        "en": "Express how we feel physically and emotionally.",
        "ar": "التعبير عن مشاعرنا وحالتنا الجسدية.",
        "uk": "Вираження самопочуття, частин тіла та емоційного стану.",
        "zh": "表达身体感受、健康状况与情绪体验。"
      }
    },
    {
      "id": "menjador",
      "icon": "🍽️",
      "color": "#ff922b",
      "titol": {
        "ca": "El menjador escolar i els aliments",
        "es": "El comedor escolar y los alimentos",
        "fr": "La cantine scolaire et les aliments",
        "en": "School cafeteria & food",
        "ar": "المطعم المدرسي والأغذية",
        "uk": "Шкільна їдальня та їжа",
        "zh": "学校食堂与食物"
      },
      "descripcio": {
        "ca": "Estris per menjar, aliments bàsics i comunicació d'al·lèrgies i preferències.",
        "es": "Utensilios para comer, alimentos básicos y comunicación de alergias y preferencias.",
        "fr": "Ustensiles pour manger, aliments de base et communication d'allergies.",
        "en": "Eating utensils, basic foods, and communicating allergies and preferences.",
        "ar": "أدوات الأكل والأطعمة الأساسية والتعبير عن الحساسية والتفضيلات.",
        "uk": "Столові прибори, основні продукти та повідомлення про алергії.",
        "zh": "餐具、基础食物以及过敏与饮食偏好。"
      }
    },
    {
      "id": "roba",
      "icon": "🧥",
      "color": "#20c997",
      "titol": {
        "ca": "La roba i el temps atmosfèric",
        "es": "La ropa y el tiempo atmosférico",
        "fr": "Les vêtements et la météo",
        "en": "Clothes & the weather",
        "ar": "الملابس والطقس",
        "uk": "Одяг та погода",
        "zh": "服装与天气气候"
      },
      "descripcio": {
        "ca": "Peces de vestir diàries i expressions per parlar del temps que fa.",
        "es": "Prendas de vestir diarias y expresiones para hablar del tiempo que hace.",
        "fr": "Vêtements quotidiens et expressions pour parler de la météo.",
        "en": "Everyday clothes and phrases to talk about the weather.",
        "ar": "الملابس اليومية وعبارات للحديث عن حالة الطقس.",
        "uk": "Повсякденний одяг та вирази для розмови про погоду.",
        "zh": "日常衣物穿着与谈论天气的常用表达。"
      }
    },
    {
      "id": "nombres",
      "icon": "🔢",
      "color": "#4263eb",
      "titol": {
        "ca": "Els nombres, el temps i el calendari",
        "es": "Los números, el tiempo y el calendario",
        "fr": "Les nombres, l'heure et le calendrier",
        "en": "Numbers, time & the calendar",
        "ar": "الأرقام والوقت والتقويم",
        "uk": "Числа, час та календар",
        "zh": "数字、时间与日历"
      },
      "descripcio": {
        "ca": "Nombres per comptar, mirar l'hora i situar-se en els dies de la setmana.",
        "es": "Números para contar, mirar la hora y situarse en los días de la semana.",
        "fr": "Nombres pour compter, lire l'heure et se repérer dans la semaine.",
        "en": "Numbers for counting, telling time, and days of the week.",
        "ar": "الأرقام للعد ومعرفة الوقت وأيام الأسبوع.",
        "uk": "Числа для лічби, перевірки часу та орієнтації в днях тижня.",
        "zh": "用于计数、辨认时钟和星期日子的词汇。"
      }
    },
    {
      "id": "ciutat",
      "icon": "🚌",
      "color": "#f76707",
      "titol": {
        "ca": "El barri, la ciutat i els transports",
        "es": "El barrio, la ciudad y los transportes",
        "fr": "Le quartier, la ville et les transports",
        "en": "Neighborhood, city & transport",
        "ar": "الحي والمدينة ووسائل النقل",
        "uk": "Район, місто та транспорт",
        "zh": "社区、城市与交通工具"
      },
      "descripcio": {
        "ca": "Com moure's pel carrer amb seguretat, utilitzar el transport i explorar el barri.",
        "es": "Cómo moverse por la calle con seguridad, usar el transporte y explorar el barrio.",
        "fr": "Se déplacer dans la rue en sécurité, prendre les transports et explorer le quartier.",
        "en": "Navigating streets safely, using public transport, and exploring the neighborhood.",
        "ar": "التنقل بأمان في الشارع واستخدام المواصلات واكتشاف الحي.",
        "uk": "Безпечне пересування вулицею, користування транспортом та знайомство з районом.",
        "zh": "安全过马路、搭乘公共交通和探索社区。"
      }
    },
    {
      "id": "rutines",
      "icon": "⏰",
      "color": "#ae3ec9",
      "titol": {
        "ca": "Les rutines escolars i accions d'aula",
        "es": "Las rutinas escolares y acciones de aula",
        "fr": "Les routines scolaires et actions en classe",
        "en": "School routines & classroom actions",
        "ar": "الروتين المدرسي وأنشطة القسم",
        "uk": "Шкільний розпорядок та дії на уроці",
        "zh": "校园常规与课堂行动"
      },
      "descripcio": {
        "ca": "Instruccions bàsiques, ordre de la jornada i accions per participar a classe.",
        "es": "Instrucciones básicas, orden de la jornada y acciones para participar en clase.",
        "fr": "Consignes de base, déroulement de la journée et actions pour participer en classe.",
        "en": "Basic instructions, daily schedule, and actions to participate in class.",
        "ar": "التعليمات الأساسية وترتيب اليوم المدرسي والمشاركة في القسم.",
        "uk": "Базові вказівки, порядок дня та активна участь у класі.",
        "zh": "基本课堂指令、一日作息与课堂参与。"
      }
    },
    {
      "id": "centre",
      "icon": "🏫",
      "color": "#0ca678",
      "titol": {
        "ca": "El nostre centre escolar",
        "es": "Nuestro centro escolar",
        "fr": "Notre école et le centre",
        "en": "Our school & campus",
        "ar": "مدرستنا ومرافقها",
        "uk": "Наша школа та приміщення",
        "zh": "我们的学校与校园"
      },
      "descripcio": {
        "ca": "Espais, persones, serveis i projectes propis de la nostra escola.",
        "es": "Espacios, personas, servicios y proyectos propios de nuestra escuela.",
        "fr": "Espaces, personnes, services et projets de notre école.",
        "en": "Spaces, staff, services and projects of our school.",
        "ar": "مرافق المدرسة والموظفون والخدمات والمشاريع الخاصة بمدرستنا.",
        "uk": "Приміщення, працівники, служби та проекти нашої школи.",
        "zh": "我们学校的特色空间、教职人员、服务与校园项目。"
      }
    }
  ],
  "vocabulary": [
    {
      "id": "urg_aigua",
      "categoria": "urgencies",
      "icon": "💧",
      "arasaacId": 2439,
      "ca": "L'aigua",
      "es": "El agua",
      "fr": "L'eau",
      "en": "Water",
      "ar": "الماء",
      "ar_fonetica": "Al-ma'",
      "frase_model": {
        "ca": "Tinc set, puc beure aigua?",
        "es": "Tengo sed, ¿puedo beber agua?",
        "fr": "J'ai soif, puis-je boire de l'eau ?",
        "en": "I'm thirsty, can I drink water?",
        "ar": "أنا عطشان، هل يمكنني شرب الماء؟",
        "uk": "Я хочу пити, можна попити води?",
        "zh": "我口渴了，我可以喝水吗？"
      },
      "uk": "Вода",
      "zh": "水"
    },
    {
      "id": "urg_lavabo",
      "categoria": "urgencies",
      "icon": "🚻",
      "arasaacId": 2843,
      "ca": "El lavabo",
      "es": "El lavabo / baño",
      "fr": "Les toilettes",
      "en": "The bathroom / toilet",
      "ar": "المرحاض",
      "ar_fonetica": "Al-mirhad",
      "frase_model": {
        "ca": "Puc anar al lavabo, si us plau?",
        "es": "¿Puedo ir al baño, por favor?",
        "fr": "Puis-je aller aux toilettes, s'il vous plaît ?",
        "en": "May I go to the bathroom, please?",
        "ar": "هل يمكنني الذهاب إلى المرحاض من فضلك؟",
        "uk": "Чи можу я вийти в туалет, будь ласка?",
        "zh": "请问我可以去洗手间吗？"
      },
      "uk": "Туалет",
      "zh": "厕所 / 洗手间"
    },
    {
      "id": "urg_ajuda",
      "categoria": "urgencies",
      "icon": "🤝",
      "arasaacId": 6489,
      "ca": "L'ajuda",
      "es": "La ayuda",
      "fr": "L'aide",
      "en": "Help",
      "ar": "المساعدة",
      "ar_fonetica": "Al-musa'ada",
      "frase_model": {
        "ca": "Em pots ajudar?",
        "es": "¿Me puedes ayudar?",
        "fr": "Peux-tu m'aider ?",
        "en": "Can you help me?",
        "ar": "هل يمكنك مساعدتي؟",
        "uk": "Ти можеш мені допомогти?",
        "zh": "你能帮帮我吗？"
      },
      "uk": "Допомога",
      "zh": "帮助"
    },
    {
      "id": "urg_dolor",
      "categoria": "urgencies",
      "icon": "🩹",
      "arasaacId": 4684,
      "ca": "El dolor / Fer-se mal",
      "es": "El dolor / Hacerse daño",
      "fr": "La douleur / Se faire mal",
      "en": "Pain / Hurt",
      "ar": "الألم / وجع",
      "ar_fonetica": "Al-alam / Waja'",
      "frase_model": {
        "ca": "M'he fet mal, em fa mal aquí.",
        "es": "Me he hecho daño, me duele aquí.",
        "fr": "Je me suis fait mal, j'ai mal ici.",
        "en": "I hurt myself, it hurts here.",
        "ar": "لقد تأذيت، يؤلمني هنا.",
        "uk": "Я вдарився, мені тут болить.",
        "zh": "我受伤了，这里很痛。"
      },
      "uk": "Біль / Забитися",
      "zh": "疼痛 / 受伤"
    },
    {
      "id": "urg_noentenc",
      "categoria": "urgencies",
      "icon": "❓",
      "arasaacId": 27958,
      "ca": "No ho entenc",
      "es": "No lo entiendo",
      "fr": "Je ne comprends pas",
      "en": "I don't understand",
      "ar": "لا أفهم",
      "ar_fonetica": "La afham",
      "frase_model": {
        "ca": "Ho pots repetir? No ho entenc.",
        "es": "¿Puedes repetirlo? No lo entiendo.",
        "fr": "Peux-tu répéter ? Je ne comprends pas.",
        "en": "Can you repeat? I don't understand.",
        "ar": "هل يمكنك الإعادة؟ لا أفهم.",
        "uk": "Чи можете ви повторити? Я не розумію.",
        "zh": "你能再说一遍吗？我不明白。"
      },
      "uk": "Я не розумію",
      "zh": "我不懂 / 我不明白"
    },
    {
      "id": "urg_si_no",
      "categoria": "urgencies",
      "icon": "👍",
      "arasaacId": 6051,
      "ca": "Sí / No",
      "es": "Sí / No",
      "fr": "Oui / Non",
      "en": "Yes / No",
      "ar": "نعم / لا",
      "ar_fonetica": "Na'am / La",
      "frase_model": {
        "ca": "Sí, ho vull. / No, gràcies.",
        "es": "Sí, lo quiero. / No, gracias.",
        "fr": "Oui, je le veux. / Non, merci.",
        "en": "Yes, I want it. / No, thanks.",
        "ar": "نعم، أريد ذلك. / لا، شكراً.",
        "uk": "Так, будь ласка. / Ні, дякую.",
        "zh": "是的，我要。/ 不用了，谢谢。"
      },
      "uk": "Так / Ні",
      "zh": "是 / 否"
    },
    {
      "id": "esc_llapis",
      "categoria": "escola",
      "icon": "✏️",
      "arasaacId": 2476,
      "ca": "El llapis",
      "es": "El lápiz",
      "fr": "Le crayon",
      "en": "The pencil",
      "ar": "قلم الرصاص",
      "ar_fonetica": "Qalam ar-rasas",
      "frase_model": {
        "ca": "Agafo el llapis per escriure.",
        "es": "Cojo el lápiz para escribir.",
        "fr": "Je prends le crayon pour écrire.",
        "en": "I take the pencil to write.",
        "ar": "آخذ قلم الرصاص لأكتب.",
        "uk": "Я беру олівець, щоб писати.",
        "zh": "我拿铅笔写字。"
      },
      "uk": "Олівець",
      "zh": "铅笔"
    },
    {
      "id": "esc_goma",
      "categoria": "escola",
      "icon": "🧼",
      "arasaacId": 2452,
      "ca": "La goma d'esborrar",
      "es": "La goma de borrar",
      "fr": "La gomme",
      "en": "The eraser",
      "ar": "الممحاة",
      "ar_fonetica": "Al-mimhah",
      "frase_model": {
        "ca": "Em deixes la goma, si us plau?",
        "es": "¿Me dejas la goma, por favor?",
        "fr": "Tu me prêtes la gomme, s'il te plaît ?",
        "en": "Can you lend me the eraser, please?",
        "ar": "هل تعيرني الممحاة من فضلك؟",
        "uk": "Чи можеш позичити мені гумку, будь ласка?",
        "zh": "请借给我橡皮擦用一下好吗？"
      },
      "uk": "Гумка",
      "zh": "橡皮擦"
    },
    {
      "id": "esc_llibre",
      "categoria": "escola",
      "icon": "📖",
      "arasaacId": 2482,
      "ca": "El llibre",
      "es": "El libro",
      "fr": "Le livre",
      "en": "The book",
      "ar": "الكتاب",
      "ar_fonetica": "Al-kitab",
      "frase_model": {
        "ca": "Obrim el llibre per la pàgina deu.",
        "es": "Abrimos el libro por la página diez.",
        "fr": "Ouvrons le livre à la page dix.",
        "en": "We open the book to page ten.",
        "ar": "نفتح الكتاب في الصفحة العاشرة.",
        "uk": "Відкриваємо підручник на десятій сторінці.",
        "zh": "我们把书翻到第十页。"
      },
      "uk": "Книга",
      "zh": "书本"
    },
    {
      "id": "esc_llibreta",
      "categoria": "escola",
      "icon": "📓",
      "arasaacId": 2483,
      "ca": "La llibreta",
      "es": "El cuaderno",
      "fr": "Le cahier",
      "en": "The notebook",
      "ar": "الدفتر",
      "ar_fonetica": "Ad-daftar",
      "frase_model": {
        "ca": "Escriu la data a la llibreta.",
        "es": "Escribe la fecha en el cuaderno.",
        "fr": "Écris la date dans le cahier.",
        "en": "Write the date in your notebook.",
        "ar": "اكتب التاريخ في الدفتر.",
        "uk": "Запиши дату в зошиті.",
        "zh": "在笔记本上写下今天的日期。"
      },
      "uk": "Зошит",
      "zh": "笔记本 / 练习本"
    },
    {
      "id": "esc_tisores",
      "categoria": "escola",
      "icon": "✂️",
      "arasaacId": 2496,
      "ca": "Les tisores",
      "es": "Las tijeras",
      "fr": "Les ciseaux",
      "en": "The scissors",
      "ar": "المقص",
      "ar_fonetica": "Al-miqas",
      "frase_model": {
        "ca": "Tallo el paper amb les tisores.",
        "es": "Corto el papel con las tijeras.",
        "fr": "Je coupe le papier avec les ciseaux.",
        "en": "I cut the paper with scissors.",
        "ar": "أقص الورق بالمقص.",
        "uk": "Я ріжу папір ножицями.",
        "zh": "我用剪刀剪纸。"
      },
      "uk": "Ножиці",
      "zh": "剪刀"
    },
    {
      "id": "esc_motxilla",
      "categoria": "escola",
      "icon": "🎒",
      "arasaacId": 2485,
      "ca": "La motxilla",
      "es": "La mochila",
      "fr": "Le sac à dos / cartable",
      "en": "The backpack",
      "ar": "المحفظة / الحقيبة",
      "ar_fonetica": "Al-mihfadha / Al-haqiba",
      "frase_model": {
        "ca": "Guardo tot el material a la motxilla.",
        "es": "Guardo todo el material en la mochila.",
        "fr": "Je range tout le matériel dans le sac.",
        "en": "I put all the supplies in the backpack.",
        "ar": "أضع كل الأدوات في المحفظة.",
        "uk": "Я складаю всі речі в рюкзак.",
        "zh": "我把所有文具都放进书包里。"
      },
      "uk": "Рюкзак",
      "zh": "书包"
    },
    {
      "id": "esc_taula",
      "categoria": "escola",
      "icon": "🪑",
      "arasaacId": 2494,
      "ca": "La taula i la cadira",
      "es": "La mesa y la silla",
      "fr": "La table et la chaise",
      "en": "The table and the chair",
      "ar": "الطاولة والكرسي",
      "ar_fonetica": "At-tawila wal-kursi",
      "frase_model": {
        "ca": "Seieu a la vostra cadira, si us plau.",
        "es": "Sentaos en vuestra silla, por favor.",
        "fr": "Asseyez-vous sur votre chaise, s'il vous plaît.",
        "en": "Sit on your chair, please.",
        "ar": "اجلسوا على كراسيكم من فضلكم.",
        "uk": "Сідайте на свої стільці, будь ласка.",
        "zh": "请坐在你们的椅子上。"
      },
      "uk": "Стіл та стілець",
      "zh": "桌子和椅子"
    },
    {
      "id": "pat_pilota",
      "categoria": "pati",
      "icon": "⚽",
      "arasaacId": 2517,
      "ca": "La pilota",
      "es": "La pelota / balón",
      "fr": "Le ballon / la balle",
      "en": "The ball",
      "ar": "الكرة",
      "ar_fonetica": "Al-kura",
      "frase_model": {
        "ca": "Passa'm la pilota!",
        "es": "¡Pásame la pelota!",
        "fr": "Passe-moi le ballon !",
        "en": "Pass me the ball!",
        "ar": "مرر لي الكرة!",
        "uk": "Пасуй мені м'яч!",
        "zh": "把球传给我！"
      },
      "uk": "М'яч",
      "zh": "球"
    },
    {
      "id": "pat_jugar",
      "categoria": "pati",
      "icon": "🎲",
      "arasaacId": 6516,
      "ca": "Jugar",
      "es": "Jugar",
      "fr": "Jouer",
      "en": "To play",
      "ar": "اللعب / يلعب",
      "ar_fonetica": "Al-la'ib / Yal'ab",
      "frase_model": {
        "ca": "Puc jugar amb vosaltres?",
        "es": "¿Puedo jugar con vosotros?",
        "fr": "Puis-je jouer avec vous ?",
        "en": "Can I play with you?",
        "ar": "هل يمكنني اللعب معكم؟",
        "uk": "Можна мені пограти з вами?",
        "zh": "我可以和你们一起玩吗？"
      },
      "uk": "Грати",
      "zh": "玩耍 / 玩游戏"
    },
    {
      "id": "pat_correr",
      "categoria": "pati",
      "icon": "🏃",
      "arasaacId": 6470,
      "ca": "Córrer",
      "es": "Correr",
      "fr": "Courir",
      "en": "To run",
      "ar": "الجري / يركض",
      "ar_fonetica": "Al-jary / Yarkud",
      "frase_model": {
        "ca": "Correm molt ràpid al pati!",
        "es": "¡Corremos muy rápido en el patio!",
        "fr": "Nous courons très vite dans la cour !",
        "en": "We run very fast in the playground!",
        "ar": "نركض بسرعة في الساحة!",
        "uk": "Ми швидко бігаємо на шкільному подвір'ї!",
        "zh": "我们在操场上跑得飞快！"
      },
      "uk": "Бігти",
      "zh": "跑步"
    },
    {
      "id": "pat_amic",
      "categoria": "pati",
      "icon": "🧑‍🤝‍🧑",
      "arasaacId": 27954,
      "ca": "L'amic / L'amiga",
      "es": "El amigo / La amiga",
      "fr": "L'ami / L'amie",
      "en": "The friend",
      "ar": "الصديق / الصديقة",
      "ar_fonetica": "As-sadiq / As-sadiqa",
      "frase_model": {
        "ca": "Tu ets el meu amic.",
        "es": "Tú eres mi amigo.",
        "fr": "Tu es mon ami.",
        "en": "You are my friend.",
        "ar": "أنت صديقي.",
        "uk": "Ти мій друг.",
        "zh": "你是我的好朋友。"
      },
      "uk": "Друг / Подруга",
      "zh": "朋友"
    },
    {
      "id": "pat_pati",
      "categoria": "pati",
      "icon": "🌳",
      "arasaacId": 2840,
      "ca": "El pati",
      "es": "El patio",
      "fr": "La cour de récréation",
      "en": "The playground / schoolyard",
      "ar": "ساحة الاستراحة",
      "ar_fonetica": "Sahat al-istirahah",
      "frase_model": {
        "ca": "És l'hora de sortir al pati!",
        "es": "¡Es la hora de salir al patio!",
        "fr": "C'est l'heure de sortir dans la cour !",
        "en": "It's time to go to the playground!",
        "ar": "إنه وقت الخروج إلى الساحة!",
        "uk": "Час іти на перерву на подвір'я!",
        "zh": "去操场活动的时间到了！"
      },
      "uk": "Шкільне подвір'я",
      "zh": "操场 / 院子"
    },
    {
      "id": "cas_casa",
      "categoria": "casa",
      "icon": "🏠",
      "arasaacId": 2404,
      "ca": "La casa",
      "es": "La casa",
      "fr": "La maison",
      "en": "Home / House",
      "ar": "البيت / المنزل",
      "ar_fonetica": "Al-bayt / Al-manzil",
      "frase_model": {
        "ca": "A la tarda vaig a casa.",
        "es": "Por la tarde voy a casa.",
        "fr": "L'après-midi, je rentre à la maison.",
        "en": "In the afternoon I go home.",
        "ar": "في المساء أذهب إلى البيت.",
        "uk": "Увечері я йду додому.",
        "zh": "下午我回家。"
      },
      "uk": "Дім",
      "zh": "家"
    },
    {
      "id": "cas_familia",
      "categoria": "casa",
      "icon": "👨‍👩‍👧‍👦",
      "arasaacId": 2419,
      "ca": "La família (pare i mare)",
      "es": "La familia (padre y madre)",
      "fr": "La famille (père et mère)",
      "en": "The family (father and mother)",
      "ar": "العائلة (الأب والأم)",
      "ar_fonetica": "Al-'a'ila (Al-ab wal-umm)",
      "frase_model": {
        "ca": "Estimo molt la meva família.",
        "es": "Quiero mucho a mi familia.",
        "fr": "J'aime beaucoup ma famille.",
        "en": "I love my family very much.",
        "ar": "أحب عائلتي كثيراً.",
        "uk": "Я дуже люблю свою родину.",
        "zh": "我非常爱我的家人。"
      },
      "uk": "Сім'я (батько і мати)",
      "zh": "家人 (爸爸和妈妈)"
    },
    {
      "id": "cas_menjar",
      "categoria": "casa",
      "icon": "🍽️",
      "arasaacId": 6467,
      "ca": "El menjar / Dinar",
      "es": "La comida / Comer",
      "fr": "La nourriture / Manger",
      "en": "Food / To eat",
      "ar": "الطعام / الأكل",
      "ar_fonetica": "At-ta'am / Al-akl",
      "frase_model": {
        "ca": "Tinc gana, vull menjar.",
        "es": "Tengo hambre, quiero comer.",
        "fr": "J'ai faim, je veux manger.",
        "en": "I'm hungry, I want to eat.",
        "ar": "أنا جائع، أريد أن آكل.",
        "uk": "Я голодний, я хочу їсти.",
        "zh": "我饿了，我想吃东西。"
      },
      "uk": "Їжа / Обід",
      "zh": "食物 / 吃饭"
    },
    {
      "id": "cas_dormir",
      "categoria": "casa",
      "icon": "🛏️",
      "arasaacId": 6475,
      "ca": "Dormir / El llit",
      "es": "Dormir / La cama",
      "fr": "Dormir / Le lit",
      "en": "To sleep / The bed",
      "ar": "النوم / السرير",
      "ar_fonetica": "An-nawm / As-sarir",
      "frase_model": {
        "ca": "Estic cansat, me'n vaig a dormir.",
        "es": "Estoy cansado, me voy a dormir.",
        "fr": "Je suis fatigué, je vais dormir.",
        "en": "I am tired, I am going to sleep.",
        "ar": "أنا متعب، سأذهب للنوم.",
        "uk": "Я втомився, я йду спати.",
        "zh": "我累了，我要去睡觉了。"
      },
      "uk": "Спати / Ліжко",
      "zh": "睡觉 / 床"
    },
    {
      "id": "emo_content",
      "categoria": "emocions",
      "icon": "😄",
      "arasaacId": 6241,
      "ca": "Content / Contenta",
      "es": "Contento / Contenta",
      "fr": "Content / Contente",
      "en": "Happy",
      "ar": "سعيد / فرحان",
      "ar_fonetica": "Sa'id / Farhan",
      "frase_model": {
        "ca": "Avui estic molt content!",
        "es": "¡Hoy estoy muy contento!",
        "fr": "Aujourd'hui, je suis très content !",
        "en": "Today I am very happy!",
        "ar": "اليوم أنا سعيد جداً!",
        "uk": "Сьогодні я дуже радісний!",
        "zh": "今天我非常开心！"
      },
      "uk": "Радісний / Веселий",
      "zh": "高兴 / 开心"
    },
    {
      "id": "emo_trist",
      "categoria": "emocions",
      "icon": "😢",
      "arasaacId": 6243,
      "ca": "Trist / Trista",
      "es": "Triste",
      "fr": "Triste",
      "en": "Sad",
      "ar": "حزين / حزينة",
      "ar_fonetica": "Hazin / Hazina",
      "frase_model": {
        "ca": "Estic trist, trobo a faltar el meu país.",
        "es": "Estoy triste, echo de menos mi país.",
        "fr": "Je suis triste, mon pays me manque.",
        "en": "I am sad, I miss my country.",
        "ar": "أنا حزين، أشتاق لبلدي.",
        "uk": "Мені сумно, я сумую за своєю країною.",
        "zh": "我很难过，我想念我的故乡。"
      },
      "uk": "Сумний",
      "zh": "伤心 / 难过"
    },
    {
      "id": "emo_cap",
      "categoria": "emocions",
      "icon": "🧠",
      "arasaacId": 2362,
      "ca": "El cap",
      "es": "La cabeza",
      "fr": "La tête",
      "en": "The head",
      "ar": "الرأس",
      "ar_fonetica": "Ar-ra's",
      "frase_model": {
        "ca": "Em fa mal el cap.",
        "es": "Me duele la cabeza.",
        "fr": "J'ai mal à la tête.",
        "en": "My head hurts.",
        "ar": "يؤلمني رأسي.",
        "uk": "У мене болить голова.",
        "zh": "我头痛。"
      },
      "uk": "Голова",
      "zh": "头"
    },
    {
      "id": "emo_panxa",
      "categoria": "emocions",
      "icon": "🤰",
      "arasaacId": 2364,
      "ca": "La panxa",
      "es": "La barriga / tripa",
      "fr": "Le ventre",
      "en": "The tummy / belly",
      "ar": "البطن",
      "ar_fonetica": "Al-batn",
      "frase_model": {
        "ca": "Em fa mal la panxa.",
        "es": "Me duele la barriga.",
        "fr": "J'ai mal au ventre.",
        "en": "My stomach hurts.",
        "ar": "يؤلمني بطني.",
        "uk": "У мене болить живіт.",
        "zh": "我肚子痛。"
      },
      "uk": "Живіт",
      "zh": "肚子"
    },
    {
      "id": "emo_mans",
      "categoria": "emocions",
      "icon": "👋",
      "arasaacId": 2378,
      "ca": "Les mans",
      "es": "Las manos",
      "fr": "Les mains",
      "en": "The hands",
      "ar": "اليدان / اليدين",
      "ar_fonetica": "Al-yadan",
      "frase_model": {
        "ca": "Ens rentem les mans amb sabó.",
        "es": "Nos lavamos las manos con jabón.",
        "fr": "Nous nous lavons les mains avec du savon.",
        "en": "We wash our hands with soap.",
        "ar": "نغسل أيدينا بالصابون.",
        "uk": "Ми миємо руки з милом.",
        "zh": "我们用肥皂洗手。"
      },
      "uk": "Руки",
      "zh": "手"
    },
    {
      "id": "men_pa",
      "categoria": "menjador",
      "icon": "🥖",
      "arasaacId": 2434,
      "ca": "El pa",
      "es": "El pan",
      "fr": "Le pain",
      "en": "Bread",
      "ar": "الخبز",
      "ar_fonetica": "Al-khubz",
      "frase_model": {
        "ca": "Puc agafar una mica de pa, si us plau?",
        "es": "¿Puedo coger un poco de pan, por favor?",
        "fr": "Puis-je prendre un peu de pain, s'il vous plaît ?",
        "en": "Can I take some bread, please?",
        "ar": "هل يمكنني أخذ قليل من الخبز من فضلك؟",
        "uk": "Чи можу я взяти трохи хліба, будь ласка?",
        "zh": "请问我可以拿一点面包吗？"
      },
      "uk": "Хліб",
      "zh": "面包"
    },
    {
      "id": "men_aigua",
      "categoria": "menjador",
      "icon": "🥛",
      "arasaacId": 2439,
      "ca": "El got d'aigua",
      "es": "El vaso de agua",
      "fr": "Le verre d'eau",
      "en": "A glass of water",
      "ar": "كأس ماء",
      "ar_fonetica": "Ka's ma'",
      "frase_model": {
        "ca": "Pots omplir el meu got d'aigua?",
        "es": "¿Puedes llenar mi vaso de agua?",
        "fr": "Peux-tu remplir mon verre d'eau ?",
        "en": "Can you fill my glass with water?",
        "ar": "هل يمكنك ملء كأسي بالماء؟",
        "uk": "Чи можеш налити мені склянку води?",
        "zh": "你能帮我倒一杯水吗？"
      },
      "uk": "Склянка води",
      "zh": "一杯水"
    },
    {
      "id": "men_cullera",
      "categoria": "menjador",
      "icon": "🥄",
      "arasaacId": 2516,
      "ca": "La cullera",
      "es": "La cuchara",
      "fr": "La cuillère",
      "en": "The spoon",
      "ar": "الملعقة",
      "ar_fonetica": "Al-mil'aqa",
      "frase_model": {
        "ca": "Menjo la sopa amb la cullera.",
        "es": "Como la sopa con la cuchara.",
        "fr": "Je mange la soupe avec la cuillère.",
        "en": "I eat the soup with the spoon.",
        "ar": "آكل الحساء بالملعقة.",
        "uk": "Я їм суп ложкою.",
        "zh": "我用勺子喝汤。"
      },
      "uk": "Ложка",
      "zh": "勺子 / 汤匙"
    },
    {
      "id": "men_forquilla",
      "categoria": "menjador",
      "icon": "🍴",
      "arasaacId": 2517,
      "ca": "La forquilla",
      "es": "El tenedor",
      "fr": "La fourchette",
      "en": "The fork",
      "ar": "الشوكة",
      "ar_fonetica": "Ash-shawka",
      "frase_model": {
        "ca": "M'ha caigut la forquilla a terra.",
        "es": "Se me ha caído el tenedor al suelo.",
        "fr": "Ma fourchette est tombée par terre.",
        "en": "My fork fell on the floor.",
        "ar": "سقطت شوكتي على الأرض.",
        "uk": "Моя виделка впала на підлогу.",
        "zh": "我的叉子掉在地上了。"
      },
      "uk": "Виделка",
      "zh": "叉子"
    },
    {
      "id": "men_fruita",
      "categoria": "menjador",
      "icon": "🍎",
      "arasaacId": 2404,
      "ca": "La fruita",
      "es": "La fruta",
      "fr": "Le fruit",
      "en": "Fruit",
      "ar": "الفاكهة",
      "ar_fonetica": "Al-fakiha",
      "frase_model": {
        "ca": "De postres menjo una poma.",
        "es": "De postre como una manzana.",
        "fr": "En dessert, je mange une pomme.",
        "en": "For dessert I eat an apple.",
        "ar": "في التحلية آكل تفاحة.",
        "uk": "На десерт я їм яблуко.",
        "zh": "饭后甜点我吃了一个苹果。"
      },
      "uk": "Фрукти",
      "zh": "水果"
    },
    {
      "id": "men_alergia",
      "categoria": "menjador",
      "icon": "⚠️",
      "arasaacId": 32679,
      "ca": "L'al·lèrgia (No puc menjar...)",
      "es": "La alergia (No puedo comer...)",
      "fr": "L'allergie (Je ne peux pas manger...)",
      "en": "Allergy (I cannot eat...)",
      "ar": "الحساسية (لا يمكنني أكل...)",
      "ar_fonetica": "Al-hasasiyya",
      "frase_model": {
        "ca": "No puc menjar porc ni fruits secs.",
        "es": "No puedo comer cerdo ni frutos secos.",
        "fr": "Je ne peux pas manger de porc ni de fruits secs.",
        "en": "I cannot eat pork or nuts.",
        "ar": "لا يمكنني أكل لحم الخنزير أو المكسرات.",
        "uk": "Я не можу їсти свинину та горіхи.",
        "zh": "我不能吃猪肉和坚果。"
      },
      "uk": "Алергія (Я не можу їсти...)",
      "zh": "过敏 (我不能吃...)"
    },
    {
      "id": "rob_jaqueta",
      "categoria": "roba",
      "icon": "🧥",
      "arasaacId": 2470,
      "ca": "La jaqueta",
      "es": "La chaqueta",
      "fr": "La veste",
      "en": "The jacket",
      "ar": "السترة",
      "ar_fonetica": "As-sutra",
      "frase_model": {
        "ca": "Em poso la jaqueta per sortir al pati.",
        "es": "Me pongo la chaqueta para salir al patio.",
        "fr": "Je mets ma veste pour aller dans la cour.",
        "en": "I put on my jacket to go out to the yard.",
        "ar": "أرتدي السترة للخروج إلى الساحة.",
        "uk": "Я вдягаю куртку, щоб вийти на подвір'я.",
        "zh": "我穿上外套去操场。"
      },
      "uk": "Куртка",
      "zh": "外套 / 夹克"
    },
    {
      "id": "rob_sabates",
      "categoria": "roba",
      "icon": "👟",
      "arasaacId": 2482,
      "ca": "Les sabates",
      "es": "Los zapatos / zapatillas",
      "fr": "Les chaussures",
      "en": "Shoes / sneakers",
      "ar": "الحذاء",
      "ar_fonetica": "Al-hidha'",
      "frase_model": {
        "ca": "Em lligo els cordons de les sabates.",
        "es": "Me ato los cordones de los zapatos.",
        "fr": "J'attache les lacets de mes chaussures.",
        "en": "I tie my shoelaces.",
        "ar": "أربط أربطة حذائي.",
        "uk": "Я зав'язую шнурки на взутті.",
        "zh": "我系好鞋带。"
      },
      "uk": "Взуття / Кросівки",
      "zh": "鞋子 / 运动鞋"
    },
    {
      "id": "rob_pantalons",
      "categoria": "roba",
      "icon": "👖",
      "arasaacId": 2473,
      "ca": "Els pantalons",
      "es": "Los pantalones",
      "fr": "Le pantalon",
      "en": "Trousers / pants",
      "ar": "السروال",
      "ar_fonetica": "As-sirwal",
      "frase_model": {
        "ca": "Porto pantalons d'esport per fer gimnàstica.",
        "es": "Llevo pantalones de deporte para hacer gimnasia.",
        "fr": "Je porte un pantalon de sport pour la gym.",
        "en": "I wear sport pants for gym class.",
        "ar": "أرتدي سروالاً رياضياً للتربية البدنية.",
        "uk": "Я ношу спортивні штани на фізкультуру.",
        "zh": "上体育课我穿运动裤。"
      },
      "uk": "Штани",
      "zh": "裤子"
    },
    {
      "id": "rob_fred",
      "categoria": "roba",
      "icon": "❄️",
      "arasaacId": 6954,
      "ca": "Fa fred",
      "es": "Hace frío",
      "fr": "Il fait froid",
      "en": "It's cold",
      "ar": "الجو بارد",
      "ar_fonetica": "Al-jaww barid",
      "frase_model": {
        "ca": "Avui fa molt de fred.",
        "es": "Hoy hace mucho frío.",
        "fr": "Aujourd'hui il fait très froid.",
        "en": "Today it is very cold.",
        "ar": "اليوم الجو بارد جداً.",
        "uk": "Сьогодні дуже холодно.",
        "zh": "今天天气很冷。"
      },
      "uk": "Холодно",
      "zh": "天气冷"
    },
    {
      "id": "rob_calor",
      "categoria": "roba",
      "icon": "☀️",
      "arasaacId": 6953,
      "ca": "Fa calor",
      "es": "Hace calor",
      "fr": "Il fait chaud",
      "en": "It's hot",
      "ar": "الجو حار",
      "ar_fonetica": "Al-jaww harr",
      "frase_model": {
        "ca": "Tinc calor, em puc treure el jersei?",
        "es": "Tengo calor, ¿puedo quitarme el jersey?",
        "fr": "J'ai chaud, puis-je enlever mon pull ?",
        "en": "I'm hot, can I take off my sweater?",
        "ar": "أشعر بالحر، هل يمكنني خلع كنزتي؟",
        "uk": "Мені жарко, чи можу я зняти светр?",
        "zh": "我觉得很热，可以脱掉毛衣吗？"
      },
      "uk": "Жарко",
      "zh": "天气热"
    },
    {
      "id": "rob_pluja",
      "categoria": "roba",
      "icon": "🌧️",
      "arasaacId": 6965,
      "ca": "La pluja (Plou)",
      "es": "La lluvia (Llueve)",
      "fr": "La pluie (Il pleut)",
      "en": "Rain (It's raining)",
      "ar": "المطر (تمطر)",
      "ar_fonetica": "Al-matar",
      "frase_model": {
        "ca": "Plou i obrim el paraigua.",
        "es": "Llueve y abrimos el paraguas.",
        "fr": "Il pleut et nous ouvrons le parapluie.",
        "en": "It's raining and we open the umbrella.",
        "ar": "إنها تمطر ونفتح المظلة.",
        "uk": "Іде дощ, і ми відкриваємо парасольку.",
        "zh": "下雨了，我们撑开雨伞。"
      },
      "uk": "Дощ (Іде дощ)",
      "zh": "下雨 / 雨水"
    },
    {
      "id": "nom_nombres",
      "categoria": "nombres",
      "icon": "🔢",
      "arasaacId": 7088,
      "ca": "Els nombres / Comptar",
      "es": "Los números / Contar",
      "fr": "Les nombres / Compter",
      "en": "Numbers / Counting",
      "ar": "الأرقام / العد",
      "ar_fonetica": "Al-arqam / Al-'add",
      "frase_model": {
        "ca": "Sé comptar de l'un al deu: un, dos, tres...",
        "es": "Sé contar del uno al diez: uno, dos, tres...",
        "fr": "Je sais compter de un à dix : un, deux, trois...",
        "en": "I can count from one to ten: one, two, three...",
        "ar": "أعرف العد من واحد إلى عشرة: واحد، اثنان، ثلاثة...",
        "uk": "Я вмію рахувати від одного до десяти: один, два, три...",
        "zh": "我能从一数到十：一、二、三……"
      },
      "uk": "Числа / Рахувати",
      "zh": "数字 / 数数"
    },
    {
      "id": "nom_rellotge",
      "categoria": "nombres",
      "icon": "⏰",
      "arasaacId": 2470,
      "ca": "El rellotge / L'hora",
      "es": "El reloj / La hora",
      "fr": "L'horloge / L'heure",
      "en": "The clock / The time",
      "ar": "الساعة / الوقت",
      "ar_fonetica": "As-sa'a / Al-waqt",
      "frase_model": {
        "ca": "Quina hora és? Falta poc per sortir?",
        "es": "¿Qué hora es? ¿Falta poco para salir?",
        "fr": "Quelle heure est-il ? Bientôt l'heure de sortir ?",
        "en": "What time is it? Is it almost time to leave?",
        "ar": "كم الساعة؟ هل اقترب وقت الخروج؟",
        "uk": "Котра година? Скоро дзвінок?",
        "zh": "现在几点了？快放学了吗？"
      },
      "uk": "Годинник / Час",
      "zh": "时钟 / 时间"
    },
    {
      "id": "nom_avui",
      "categoria": "nombres",
      "icon": "📅",
      "arasaacId": 3014,
      "ca": "Avui / Ahir / Demà",
      "es": "Hoy / Ayer / Mañana",
      "fr": "Aujourd'hui / Hier / Demain",
      "en": "Today / Yesterday / Tomorrow",
      "ar": "اليوم / أمس / غداً",
      "ar_fonetica": "Al-yawm / Ams / Ghadan",
      "frase_model": {
        "ca": "Quin dia és avui? Avui és dilluns.",
        "es": "¿Qué día es hoy? Hoy es lunes.",
        "fr": "Quel jour sommes-nous aujourd'hui ? Aujourd'hui c'est lundi.",
        "en": "What day is today? Today is Monday.",
        "ar": "ما هو اليوم؟ اليوم هو الاثنين.",
        "uk": "Який сьогодні день? Сьогодні понеділок.",
        "zh": "今天星期几？今天星期一。"
      },
      "uk": "Сьогодні / Вчора / Завтра",
      "zh": "今天 / 昨天 / 明天"
    },
    {
      "id": "nom_mati_tarda",
      "categoria": "nombres",
      "icon": "🌅",
      "arasaacId": 7083,
      "ca": "El matí i la tarda",
      "es": "La mañana y la tarde",
      "fr": "Le matin et l'après-midi",
      "en": "Morning and afternoon",
      "ar": "الصباح والمساء",
      "ar_fonetica": "As-sabah wal-masa'",
      "frase_model": {
        "ca": "Al matí vinc a l'escola i a la tarda vaig a casa.",
        "es": "Por la mañana vengo a la escuela y por la tarde voy a casa.",
        "fr": "Le matin je viens à l'école et l'après-midi je rentre à la maison.",
        "en": "In the morning I come to school and in the afternoon I go home.",
        "ar": "في الصباح آتي إلى المدرسة وفي المساء أذهب إلى البيت.",
        "uk": "Вранці я йду до школи, а ввечері повертаюся додому.",
        "zh": "早上我去学校，下午我回家。"
      },
      "uk": "Ранок і вечір",
      "zh": "上午与下午"
    },
    {
      "id": "nom_dilluns_divendres",
      "categoria": "nombres",
      "icon": "🗓️",
      "arasaacId": 28662,
      "ca": "Els dies d'escola (Dilluns a divendres)",
      "es": "Los días de escuela (Lunes a viernes)",
      "fr": "Les jours d'école (Lundi à vendredi)",
      "en": "School days (Monday to Friday)",
      "ar": "أيام المدرسة (من الاثنين إلى الجمعة)",
      "ar_fonetica": "Ayyam al-madrasa",
      "frase_model": {
        "ca": "De dilluns a divendres tenim classe.",
        "es": "De lunes a viernes tenemos clase.",
        "fr": "Du lundi au vendredi nous avons classe.",
        "en": "From Monday to Friday we have class.",
        "ar": "من الاثنين إلى الجمعة لدينا دروس.",
        "uk": "З понеділка по п'ятницю у нас уроки.",
        "zh": "从星期一到星期五我们都要上课。"
      },
      "uk": "Шкільні дні (з понеділка по п'ятницю)",
      "zh": "上学日 (周一至周五)"
    },
    {
      "id": "nom_cap_setmana",
      "categoria": "nombres",
      "icon": "🎈",
      "arasaacId": 7084,
      "ca": "El cap de setmana (Dissabte i diumenge)",
      "es": "El fin de semana (Sábado y domingo)",
      "fr": "Le week-end (Samedi et dimanche)",
      "en": "The weekend (Saturday and Sunday)",
      "ar": "عطلة نهاية الأسبوع (السبت والأحد)",
      "ar_fonetica": "'Utlat nihayat al-usbu'",
      "frase_model": {
        "ca": "El cap de setmana no hi ha escola, descanso amb la família.",
        "es": "El fin de semana no hay escuela, descanso con la familia.",
        "fr": "Le week-end il n'y a pas d'école, je me repose en famille.",
        "en": "On the weekend there is no school, I rest with my family.",
        "ar": "في عطلة نهاية الأسبوع لا توجد مدرسة، أستريح مع عائلتي.",
        "uk": "У вихідні школи немає, я відпочиваю з сім'єю.",
        "zh": "周末不上学，我和家人一起休息。"
      },
      "uk": "Вихідні (субота та неділя)",
      "zh": "周末 (周六和周日)"
    },
    {
      "id": "ciu_carrer",
      "categoria": "ciutat",
      "icon": "🛣️",
      "arasaacId": 2844,
      "ca": "El carrer i el pas de vianants",
      "es": "La calle y el paso de peatones",
      "fr": "La rue et le passage piéton",
      "en": "The street and pedestrian crossing",
      "ar": "الشارع وممر الراجلين",
      "ar_fonetica": "Ash-shari' wa mamarr ar-rajilin",
      "frase_model": {
        "ca": "Miro a l'esquerra i a la dreta abans de creuar el carrer.",
        "es": "Miro a la izquierda y a la derecha antes de cruzar la calle.",
        "fr": "Je regarde à gauche et à droite avant de traverser la rue.",
        "en": "I look left and right before crossing the street.",
        "ar": "أنظر يميناً ويساراً قبل عبور الشارع.",
        "uk": "Я дивлюся ліворуч і праворуч перед тим, як перейти вулицю.",
        "zh": "过马路前我先看左边再看右边。"
      },
      "uk": "Вулиця та пішохідний перехід",
      "zh": "街道与人行横道"
    },
    {
      "id": "ciu_autobus",
      "categoria": "ciutat",
      "icon": "🚌",
      "arasaacId": 2544,
      "ca": "L'autobús escolar / El bus",
      "es": "El autobús escolar / El bus",
      "fr": "Le bus scolaire / Le bus",
      "en": "School bus / The bus",
      "ar": "حافلة المدرسة / الحافلة",
      "ar_fonetica": "Hafilat al-madrasa / Al-hafila",
      "frase_model": {
        "ca": "Vinc a l'escola amb autobús.",
        "es": "Vengo a la escuela en autobús.",
        "fr": "Je viens à l'école en bus.",
        "en": "I come to school by bus.",
        "ar": "آتي إلى المدرسة بالحافلة.",
        "uk": "Я приїжджаю до школи автобусом.",
        "zh": "我坐公共汽车来学校。"
      },
      "uk": "Шкільний автобус / Автобус",
      "zh": "校车 / 公共汽车"
    },
    {
      "id": "ciu_tren",
      "categoria": "ciutat",
      "icon": "🚆",
      "arasaacId": 2841,
      "ca": "El tren i el metro",
      "es": "El tren y el metro",
      "fr": "Le train et le métro",
      "en": "The train and subway",
      "ar": "القطار والمترو",
      "ar_fonetica": "Al-qitar wal-mitru",
      "frase_model": {
        "ca": "Pugem al tren per anar a la ciutat.",
        "es": "Subimos al tren para ir a la ciudad.",
        "fr": "Nous montons dans le train pour aller en ville.",
        "en": "We get on the train to go to the city.",
        "ar": "نركب القطار للذهاب إلى المدينة.",
        "uk": "Ми сідаємо на потяг, щоб поїхати до міста.",
        "zh": "我们坐火车去城里。"
      },
      "uk": "Поїзд і метро",
      "zh": "火车与地铁"
    },
    {
      "id": "ciu_parada",
      "categoria": "ciutat",
      "icon": "🚏",
      "arasaacId": 32448,
      "ca": "La parada de bus / L'estació",
      "es": "La parada de autobús / La estación",
      "fr": "L'arrêt de bus / La gare",
      "en": "Bus stop / Station",
      "ar": "موقف الحافلة / المحطة",
      "ar_fonetica": "Mawqif al-hafila / Al-mahatta",
      "frase_model": {
        "ca": "M'espero a la parada de l'autobús.",
        "es": "Espero en la parada del autobús.",
        "fr": "J'attends à l'arrêt de bus.",
        "en": "I wait at the bus stop.",
        "ar": "أنتظر في موقف الحافلة.",
        "uk": "Я чекаю на автобусній зупинці.",
        "zh": "我在公交车站等车。"
      },
      "uk": "Автобусна зупинка / Станція",
      "zh": "公交车站 / 车站"
    },
    {
      "id": "ciu_botiga",
      "categoria": "ciutat",
      "icon": "🛒",
      "arasaacId": 2845,
      "ca": "La botiga / El supermercat",
      "es": "La tienda / El supermercado",
      "fr": "Le magasin / Le supermarché",
      "en": "The shop / Supermarket",
      "ar": "الدكان / السوبرماركت",
      "ar_fonetica": "Ad-dukkan / As-subarmarkit",
      "frase_model": {
        "ca": "Anem a la botiga a comprar el berenar.",
        "es": "Vamos a la tienda a comprar la merienda.",
        "fr": "Nous allons au magasin pour acheter le goûter.",
        "en": "We go to the store to buy a snack.",
        "ar": "نذهب إلى الدكان لشراء اللمجة.",
        "uk": "Ми йдемо в магазин купити полуденок.",
        "zh": "我们去商店买课间点心。"
      },
      "uk": "Магазин / Супермаркет",
      "zh": "商店 / 超市"
    },
    {
      "id": "ciu_parc",
      "categoria": "ciutat",
      "icon": "🌳",
      "arasaacId": 2842,
      "ca": "El parc i la plaça",
      "es": "El parque y la plaza",
      "fr": "Le parc et la place",
      "en": "The park and the square",
      "ar": "الحديقة والساحة",
      "ar_fonetica": "Al-hadiqa was-saha",
      "frase_model": {
        "ca": "Després d'escola vaig a jugar al parc.",
        "es": "Después de la escuela voy a jugar al parque.",
        "fr": "Après l'école je vais jouer au parc.",
        "en": "After school I go play at the park.",
        "ar": "بعد المدرسة أذهب للعب في الحديقة.",
        "uk": "Після школи я йду гратися в парк.",
        "zh": "放学后我去公园玩耍。"
      },
      "uk": "Парк і площа",
      "zh": "公园与广场"
    },
    {
      "id": "rut_fila",
      "categoria": "rutines",
      "icon": "🚶",
      "arasaacId": 32675,
      "ca": "Fer la fila / Entrar a classe",
      "es": "Hacer la fila / Entrar a clase",
      "fr": "Faire le rang / Entrer en classe",
      "en": "Line up / Enter class",
      "ar": "الوقوف في الصف / الدخول إلى القسم",
      "ar_fonetica": "Al-wuquf fis-saff / Ad-dukhul ila al-qism",
      "frase_model": {
        "ca": "Fem la fila sense empènyer per pujar a la classe.",
        "es": "Hacemos la fila sin empujar para subir a clase.",
        "fr": "On fait le rang sans pousser pour monter en classe.",
        "en": "We line up without pushing to go up to class.",
        "ar": "نقف في الصف دون تدافع للصعود إلى القسم.",
        "uk": "Ми шикуємося без штовханини, щоб піднятися до класу.",
        "zh": "我们排好队不推挤，一起走进教室。"
      },
      "uk": "Стати в шеренгу / Зайти в клас",
      "zh": "排队 / 进入教室"
    },
    {
      "id": "rut_escoltar",
      "categoria": "rutines",
      "icon": "👂",
      "arasaacId": 6476,
      "ca": "Escoltar / Fer silenci",
      "es": "Escuchar / Hacer silencio",
      "fr": "Écouter / Faire silence",
      "en": "Listen / Be quiet",
      "ar": "الاستماع / التزام الهدوء",
      "ar_fonetica": "Al-istima' / Iltizam al-hudoo'",
      "frase_model": {
        "ca": "Escoltem la mestra quan explica l'activitat.",
        "es": "Escuchamos a la maestra cuando explica la actividad.",
        "fr": "On écoute la maîtresse quand elle explique l'activité.",
        "en": "We listen to the teacher when she explains the activity.",
        "ar": "نستمع إلى المعلمة عندما تشرح النشاط.",
        "uk": "Ми уважно слухаємо вчительку, коли вона пояснює завдання.",
        "zh": "老师讲解活动要求时，我们认真听讲。"
      },
      "uk": "Слухати / Дотримуватися тиші",
      "zh": "倾听 / 保持安静"
    },
    {
      "id": "rut_seure",
      "categoria": "rutines",
      "icon": "🪑",
      "arasaacId": 6496,
      "ca": "Seure a la cadira / Aixecar-se",
      "es": "Sentarse en la silla / Levantarse",
      "fr": "S'asseoir sur la chaise / Se lever",
      "en": "Sit on the chair / Stand up",
      "ar": "الجلوس على الكرسي / الوقوف",
      "ar_fonetica": "Al-julus 'ala al-kursi / Al-wuquf",
      "frase_model": {
        "ca": "Seguem a la cadira i posem atenció.",
        "es": "Nos sentamos en la silla y prestamos atención.",
        "fr": "On s'assoit sur la chaise et on est attentif.",
        "en": "We sit on our chair and pay attention.",
        "ar": "نجلس على الكرسي وننتبه.",
        "uk": "Ми сідаємо на стільці та зосереджуємося.",
        "zh": "我们坐在椅子上，集中注意力。"
      },
      "uk": "Сісти на стілець / Встати",
      "zh": "坐在椅子上 / 起立"
    },
    {
      "id": "rut_escriure",
      "categoria": "rutines",
      "icon": "✍️",
      "arasaacId": 6480,
      "ca": "Escriure i dibuixar",
      "es": "Escribir y dibujar",
      "fr": "Écrire et dessiner",
      "en": "Write and draw",
      "ar": "الكتابة والرسم",
      "ar_fonetica": "Al-kitaba war-rasm",
      "frase_model": {
        "ca": "Escriu la data a la llibreta i fes un dibuix.",
        "es": "Escribe la fecha en la libreta y haz un dibujo.",
        "fr": "Écris la date dans le cahier et fais un dessin.",
        "en": "Write the date in your notebook and make a drawing.",
        "ar": "اكتب التاريخ في الدفتر وارسم رسماً.",
        "uk": "Напиши дату в зошиті і намалюй малюнок.",
        "zh": "在笔记本上写下日期并画一幅画。"
      },
      "uk": "Писати та малювати",
      "zh": "写字与画画"
    },
    {
      "id": "rut_llegir",
      "categoria": "rutines",
      "icon": "📖",
      "arasaacId": 6484,
      "ca": "Llegir un conte / Llibre",
      "es": "Leer un cuento / Libro",
      "fr": "Lire une histoire / Livre",
      "en": "Read a story / Book",
      "ar": "قراءة قصة / كتاب",
      "ar_fonetica": "Qira'at qissa / Kitab",
      "frase_model": {
        "ca": "Obrim el llibre per la pàgina indicada per llegir.",
        "es": "Abrimos el libro por la página indicada para leer.",
        "fr": "On ouvre le livre à la page indiquée pour lire.",
        "en": "We open the book to the indicated page to read.",
        "ar": "نفتح الكتاب في الصفحة المحددة للقراءة.",
        "uk": "Ми відкриваємо книгу на потрібній сторінці для читання.",
        "zh": "我们打开书读指定的那一页。"
      },
      "uk": "Читати казку / Книгу",
      "zh": "读故事 / 读书"
    },
    {
      "id": "rut_endrecar",
      "categoria": "rutines",
      "icon": "🧹",
      "arasaacId": 6494,
      "ca": "Recollir i endreçar el material",
      "es": "Recoger y ordenar el material",
      "fr": "Ranger le matériel",
      "en": "Tidy up & pack away",
      "ar": "جمع وترتيب الأدوات",
      "ar_fonetica": "Jam' wa tartib al-adawat",
      "frase_model": {
        "ca": "S'ha acabat la classe: recollim els llapis i endrecem la taula.",
        "es": "Ha terminado la clase: recogemos los lápices y ordenamos la mesa.",
        "fr": "Le cours est fini : on range les crayons et la table.",
        "en": "Class is over: let's pack up our pencils and tidy the desk.",
        "ar": "انتهى الدرس: نجمع الأقلام ونرتب الطاولة.",
        "uk": "Урок закінчився: збираємо олівці та прибираємо зі столу.",
        "zh": "下课了：我们收好铅笔，把桌子整理干净。"
      },
      "uk": "Зібрати та скласти приладдя",
      "zh": "收拾与整理用具"
    },
    {
      "id": "cen_biblioteca",
      "categoria": "centre",
      "icon": "📚",
      "arasaacId": 2848,
      "ca": "La biblioteca",
      "es": "La biblioteca",
      "fr": "La bibliothèque",
      "en": "The library",
      "ar": "المكتبة",
      "ar_fonetica": "Al-maktaba",
      "uk": "Бібліотека",
      "zh": "图书馆",
      "frase_model": {
        "ca": "Anem a la biblioteca a buscar un llibre.",
        "es": "Vamos a la biblioteca a buscar un libro.",
        "fr": "Nous allons à la bibliothèque pour chercher un livre.",
        "en": "We go to the library to look for a book.",
        "ar": "نذهب إلى المكتبة للبحث عن كتاب.",
        "uk": "Ми йдемо до бібліотеки шукати книгу.",
        "zh": "我们去图书馆找书。"
      }
    },
    {
      "id": "cen_hort",
      "categoria": "centre",
      "icon": "🌱",
      "arasaacId": 2849,
      "ca": "L'hort escolar",
      "es": "El huerto escolar",
      "fr": "Le potager scolaire",
      "en": "The school garden",
      "ar": "حديقة المدرسة",
      "ar_fonetica": "Hadiqat al-madrasa",
      "uk": "Шкільний город",
      "zh": "学校菜园",
      "frase_model": {
        "ca": "A l'hort escolar reguem les plantes i collim enciam.",
        "es": "En el huerto escolar regamos las plantas y cosechamos lechuga.",
        "fr": "Dans le potager de l'école nous arrosons les plantes.",
        "en": "In the school garden we water the plants.",
        "ar": "في حديقة المدرسة نسقي النباتات.",
        "uk": "На шкільному городі ми поливаємо рослини.",
        "zh": "在学校菜园里我们给植物浇水。"
      }
    },
    {
      "id": "cen_consergeria",
      "categoria": "centre",
      "icon": "🔔",
      "arasaacId": 2850,
      "ca": "La consergeria",
      "es": "La conserjería",
      "fr": "La loge du gardien",
      "en": "The reception / caretaker office",
      "ar": "مكتب الاستقبال",
      "ar_fonetica": "Maktab al-istiqbal",
      "uk": "Чергова частина / Рецепція",
      "zh": "传达室 / 门卫室",
      "frase_model": {
        "ca": "Vaig a la consergeria a demanar guix.",
        "es": "Voy a la conserjería a pedir tiza.",
        "fr": "Je vais à la loge pour demander une craie.",
        "en": "I go to the caretaker to ask for chalk.",
        "ar": "أذهب إلى مكتب الاستقبال لطلب الطباشير.",
        "uk": "Я йду до чергової частини попросити крейду.",
        "zh": "我去传达室要粉笔。"
      }
    }
  ],
  "ui": {
    "appTitle": {
      "ca": "Aula d'Acollida Digital",
      "es": "Aula de Acogida Digital",
      "fr": "Classe d'Accueil Numérique",
      "en": "Digital Welcome Classroom",
      "ar": "قسم الاستقبال الرقمي",
      "uk": "Цифровий вітальний клас",
      "zh": "数字化迎新课堂"
    },
    "appSubtitle": {
      "ca": "Suport lingüístic i d'acollida per a l'alumnat nouvingut",
      "es": "Apoyo lingüístico y de acogida para el alumnado recién llegado",
      "fr": "Soutien linguistique et accueil pour les nouveaux élèves",
      "en": "Linguistic and welcoming support for newly arrived students",
      "ar": "دعم لغوي واستقبال للتلاميذ الوافدين الجدد",
      "uk": "Мовна та адаптаційна підтримка новоприбулих учнів",
      "zh": "新入学学生的语言与适应支持"
    },
    "studentNameLabel": {
      "ca": "El teu nom:",
      "es": "Tu nombre:",
      "fr": "Ton prénom :",
      "en": "Your name:",
      "ar": "اسمك:",
      "uk": "Твоє ім'я:",
      "zh": "你的名字："
    },
    "bridgeLangLabel": {
      "ca": "La teva llengua de suport:",
      "es": "Tu lengua de apoyo:",
      "fr": "Ta langue de soutien :",
      "en": "Your bridge language:",
      "ar": "لغة المساعدة:",
      "uk": "Твоя допоміжна мова:",
      "zh": "你的辅助语言："
    },
    "startSessionBtn": {
      "ca": "Comença la sessió ✨",
      "es": "Empezar la sesión ✨",
      "fr": "Commencer la séance ✨",
      "en": "Start session ✨",
      "ar": "ابدأ الحصة ✨",
      "uk": "Почати заняття ✨",
      "zh": "开始学习 ✨"
    },
    "modeDiscover": {
      "ca": "1. Descobreix i Escolta 🎧",
      "es": "1. Descubre y Escucha 🎧",
      "fr": "1. Découvre et Écoute 🎧",
      "en": "1. Discover & Listen 🎧",
      "ar": "١. اكتشف واستمع 🎧",
      "uk": "1. Досліджуй і слухай 🎧",
      "zh": "1. 探索与聆听 🎧"
    },
    "modePractice": {
      "ca": "2. Jocs i Reptes 🎯",
      "es": "2. Juegos y Retos 🎯",
      "fr": "2. Jeux et Défis 🎯",
      "en": "2. Games & Challenges 🎯",
      "ar": "٢. ألعاب وتحديات 🎯",
      "uk": "2. Ігри та завдання 🎯",
      "zh": "2. 互动挑战 🎯"
    },
    "finishSessionBtn": {
      "ca": "Finalitza i Descarrega Progrés 📄",
      "es": "Finalizar y Descargar Progreso 📄",
      "fr": "Terminer et Télécharger Progrès 📄",
      "en": "Finish & Download Progress 📄",
      "ar": "إنهاء وتحميل التقرير 📄",
      "uk": "Завершити та завантажити прогрес 📄",
      "zh": "完成并下载学习报告 📄"
    },
    "changeCategoryBtn": {
      "ca": "Tornar als temes 📚",
      "es": "Volver a temas 📚",
      "fr": "Retour aux thèmes 📚",
      "en": "Back to topics 📚",
      "ar": "العودة للمواضيع 📚",
      "uk": "Повернутися до тем 📚",
      "zh": "返回主题列表 📚"
    },
    "listenCatalan": {
      "ca": "Escolta en català",
      "es": "Escuchar en catalán",
      "fr": "Écouter en catalan",
      "en": "Listen in Catalan",
      "ar": "استمع بالكتالونية",
      "uk": "Слухати каталонською",
      "zh": "听加泰罗尼亚语"
    },
    "listenSupport": {
      "ca": "Escolta en la teva llengua",
      "es": "Escuchar en tu idioma",
      "fr": "Écouter dans ta langue",
      "en": "Listen in your language",
      "ar": "استمع بلغتك",
      "uk": "Слухати твоєю мовою",
      "zh": "听你的母语"
    },
    "challengeListenTitle": {
      "ca": "Repte auditiu: Què escoltes?",
      "es": "Reto auditivo: ¿Qué escuchas?",
      "fr": "Défi auditif : Qu'entends-tu ?",
      "en": "Listening challenge: What do you hear?",
      "ar": "تحدي الاستماع: ماذا تسمع؟",
      "uk": "Слуховий виклик: Що ти чуєш?",
      "zh": "听力挑战：你听到了什么？"
    },
    "challengeListenInstr": {
      "ca": "Clica l'altaveu i selecciona la imatge corresponent:",
      "es": "Pulsa el altavoz y selecciona la imagen correspondiente:",
      "fr": "Clique sur le haut-parleur et choisis la bonne image :",
      "en": "Click the speaker and choose the matching image:",
      "ar": "اضغط على مكبر الصوت واختر الصورة المطابقة:",
      "uk": "Натисни динамік і вибери відповідний малюнок:",
      "zh": "点击喇叭，选择对应的图片："
    },
    "challengeMemoryTitle": {
      "ca": "Joc de parelles (Memory)",
      "es": "Juego de parejas (Memory)",
      "fr": "Jeu de mémoire (Memory)",
      "en": "Memory Matching Game",
      "ar": "لعبة مطابقة الأزواج (الذاكرة)",
      "uk": "Гра в пари (Меморі)",
      "zh": "连连看记忆游戏 (Memory)"
    },
    "challengeMemoryInstr": {
      "ca": "Gira dues targetes per associar la imatge amb la paraula en català:",
      "es": "Gira dos tarjetas para asociar la imagen con la palabra en catalán:",
      "fr": "Retourne deux cartes pour associer l'image au mot en catalan :",
      "en": "Flip two cards to match the picture with the Catalan word:",
      "ar": "اقلب بطاقتين لمطابقة الصورة مع الكلمة بالكتالونية:",
      "uk": "Переверни дві картки, щоб поєднати малюнок зі словом каталонською:",
      "zh": "翻开两张卡片，将图片与加泰罗尼亚语单词配对："
    },
    "memoryWellDone": {
      "ca": "Fantàstic! Has trobat totes les parelles! 🌟",
      "es": "¡Fantástico! ¡Has encontrado todas las parejas! 🌟",
      "fr": "Fantastique ! Tu as trouvé toutes les paires ! 🌟",
      "en": "Fantastic! You found all the pairs! 🌟",
      "ar": "رائع! لقد وجدت جميع الأزواج! 🌟",
      "uk": "Чудово! Ти знайшов усі пари! 🌟",
      "zh": "太棒了！你找到了所有的配对！🌟"
    },
    "playAgainBtn": {
      "ca": "Jugar una altra partida 🔄",
      "es": "Jugar otra partida 🔄",
      "fr": "Rejouer une partie 🔄",
      "en": "Play again 🔄",
      "ar": "العب جولة أخرى 🔄",
      "uk": "Грати ще раз 🔄",
      "zh": "再玩一次 🔄"
    },
    "challengeMatchTitle": {
      "ca": "Repte de lectura: Quina paraula és?",
      "es": "Reto de lectura: ¿Qué palabra es?",
      "fr": "Défi de lecture : Quel est ce mot ?",
      "en": "Reading challenge: Which word is it?",
      "ar": "تحدي القراءة: ما هي الكلمة؟",
      "uk": "Завдання з читання: Яке це слово?",
      "zh": "阅读挑战：这是哪个单词？"
    },
    "challengeSentenceTitle": {
      "ca": "La frase útil del dia",
      "es": "La frase útil del día",
      "fr": "La phrase utile du jour",
      "en": "Useful phrase of the day",
      "ar": "العبارة المفيدة لليوم",
      "uk": "Корисна фраза дня",
      "zh": "每日实用短句"
    },
    "wellDone": {
      "ca": "Molt bé! Felicitats! 🌟",
      "es": "¡Muy bien! ¡Felicidades! 🌟",
      "fr": "Très bien ! Félicitations ! 🌟",
      "en": "Well done! Congratulations! 🌟",
      "ar": "أحسنت! مبروك! 🌟",
      "uk": "Молодець! Вітаємо! 🌟",
      "zh": "做得很棒！恭喜你！🌟"
    },
    "tryAgain": {
      "ca": "Torna-ho a provar! Tu pots! 💪",
      "es": "¡Vuelve a intentarlo! ¡Tú puedes! 💪",
      "fr": "Réessaie ! Tu es capable ! 💪",
      "en": "Try again! You can do it! 💪",
      "ar": "حاول مرة أخرى! أنت تستطيع! 💪",
      "uk": "Спробуй ще раз! Ти зможеш! 💪",
      "zh": "再试一次！你一定可以的！💪"
    }
  }
};

// Exportació per a entorns modulars o finestra global
if (typeof module !== "undefined" && module.exports) {
  module.exports = ACOLLIDA_DATA;
}
