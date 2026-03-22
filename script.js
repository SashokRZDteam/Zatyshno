// ═══════════════════════════════════════════════════════
//  ⚙️  CONFIG
// ═══════════════════════════════════════════════════════
const BOT_TOKEN   = '8740440028:AAHr9-3pGwcNltJpAMMoxy32KD6-QSAvZe0';
const ADMIN_CHAT  = '5719977516';
const PER_PAGE    = 24;

// ═══════════════════════════════════════════════════════
//  📦  PRODUCTS  (all 124, real images from phantom-drop)
// ═══════════════════════════════════════════════════════
const PRODUCTS = [
  {id:236392,title:'Автомагнітола JSD-520BT USB + Bluetooth',price:429,cat:'auto',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978822248_moschnaya-avtomagnitola-s.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978822249_moschnaya-avtomagnitola-s.jpg','https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978822250_moschnaya-avtomagnitola-s.jpg','https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978822251_moschnaya-avtomagnitola-s.jpg'],desc:'Потужна автомагнітола JSD-520BT з чистим звуком. Процесор JSD 520i. Вихідна потужність 4×65 Вт. Bluetooth, USB, FM та AUX вхід. Радіатор охолодження. Підтримка MP3/WMA/APE/FLAC/WAV. 18 FM-пресетів.',badge:''},
  {id:233934,title:'Mini UPS WGP Power Bank для роутера 10400mAh 5-12V',price:1593,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/02/7090638049_mini-ups-wgp.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/02/7090641420_mini-ups-wgp.png','https://phantom-drop.com.ua/wp-content/uploads/2026/02/7090638181_mini-ups-wgp.png'],desc:'Mini UPS WGP дозволяє роутеру працювати до 20 годин без електрики. Виходи DC 12V ×2, USB 5V. Ємність 10400 мАг. Захист від перезаряду та короткого замикання.',badge:'Топ'},
  {id:229851,title:'Лампа для кемпінгу X-BAIL BL-2022 SOLAR',price:228,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978829327_lampa-dlya-kempinga.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978829329_lampa-dlya-kempinga.png','https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978829331_lampa-dlya-kempinga.png'],desc:'Багатофункціональний кемпінговий ліхтар із сонячною панеллю. 24 LED, 5 режимів, захист IP65, гачок для підвішування. Заряджається від USB або сонця.',badge:''},
  {id:229641,title:'LED-ліхтарик W5147 Type-C (7 режимів, прикурювач, магніт)',price:176,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/5979265557_akkumulyatornyj-led-fonarik.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5979265558_akkumulyatornyj-led-fonarik.png','https://phantom-drop.com.ua/wp-content/uploads/2024/09/5979265559_akkumulyatornyj-led-fonarik.png'],desc:'Портативний LED-ліхтарик W5147 з 7 режимами. Карабін, магніт, аварійний молоток, свисток, прикурювач, відкривачка. Заряджання Type-C. Водозахист IPX4.',badge:''},
  {id:229617,title:'Іграшка-дражнилка для котів з пір\'ям на присосці',price:98,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059247950_interaktivna-igrashka-drazhnilka-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059248025_interaktivna-igrashka-drazhnilka-dlya.png','https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059248045_interaktivna-igrashka-drazhnilka-dlya.png'],desc:'Інтерактивна іграшка-дражнилка на присосці. Гнучка вудка 80 см, пір\'я з дзвіночком. Стимулює мисливські інстинкти, зміцнює м\'язи.',badge:''},
  {id:229610,title:'Power Bank Awei P101K 100000mAh',price:2321,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059229871_zovnishnij-akumulyator-power.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059229402_zovnishnij-akumulyator-power.png','https://phantom-drop.com.ua/wp-content/uploads/2026/02/7059229679_zovnishnij-akumulyator-power.png'],desc:'Зовнішній акумулятор 100000 мАг. Вихід USB 22.5W, Type-C 20W. Підтримка сонячної зарядки. Дисплей, ремінець на руку.',badge:'Хіт'},
  {id:226762,title:'Лампа акумуляторна AP-2916 20W E27 аварійна',price:259,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/01/7039666786_lampa-30w-rainberg.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/01/7039667269_lampa-30w-rainberg.png','https://phantom-drop.com.ua/wp-content/uploads/2026/01/7039667556_lampa-30w-rainberg.png'],desc:'Акумуляторна LED-лампа 20W з цоколем E27. Автоматично вмикається при відключенні світла. До 4 годин автономної роботи.',badge:''},
  {id:226613,title:'Нічник Куб RGB 16 кольорів з пультом USB (NK-22)',price:182,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/12/6419690456_nichnik-kub-z.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/12/6419690482_nichnik-kub-z.png','https://phantom-drop.com.ua/wp-content/uploads/2024/12/6419690507_nichnik-kub-z.png'],desc:'Нічник з ефектом водяної хвилі. 16 кольорів, регулювання яскравості. Керування пультом або кнопкою. Живлення USB.',badge:''},
  {id:226612,title:'Повербанк 50000 mAh',price:280,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/6271673848_poverbank-universalnaya-batareya.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978815703_poverbank-universalnaya-batareya.jpg','https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978815704_poverbank-universalnaya-batareya.jpg'],desc:'Зовнішній акумулятор 50000 мАг. 3 USB виходи, LED-ліхтарик, індикатор заряду. Компактний корпус з міцного пластику.',badge:''},
  {id:226611,title:'Портативний кемпінговий душ з помпою USB Travel Shower',price:410,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/10/5979265581_dush-portativnyj-kempingovyj.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/10/5979265583_dush-portativnyj-kempingovyj.png','https://phantom-drop.com.ua/wp-content/uploads/2024/10/5979265586_dush-portativnyj-kempingovyj.png'],desc:'Портативний душ з акумулятором 2200 мАг. Шланг 1.5м, потік 4-5 л/хв, 35 хвилин роботи. Ідеальний для кемпінгу, рибалки, дачі.',badge:''},
  {id:224951,title:'Wild Tornado — засіб для чищення труб',price:33,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978803526_chistyaschee-sredstvo-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978803528_chistyaschee-sredstvo-dlya.png','https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978803530_chistyaschee-sredstvo-dlya.png'],desc:'Потужний очисник раковин і труб Wild Tornado. Без запаху, безпечний для септиків. Розчиняє жир, волосся, папір. 110г.',badge:''},
  {id:224781,title:'Мережевий фільтр 2 розетки +2USB +Type-C 2м WL-4',price:234,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/01/7023419541_merezhevij-filtr-zhivlennya.png',gallery:[],desc:'Мережевий фільтр з 2 розетками, 2 USB і Type-C портами. Кабель 2м. Підтримка 220-250В, 2500Вт. Компактний вертикальний дизайн.',badge:''},
  {id:223286,title:'Мережевий фільтр 3 розетки +3USB +Type-C з вимикачами 2м',price:247,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/01/7015172704_merezhevij-filtr-zhivlennya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/01/7015172947_merezhevij-filtr-zhivlennya.png','https://phantom-drop.com.ua/wp-content/uploads/2026/01/7015173259_merezhevij-filtr-zhivlennya.png'],desc:'Мережевий фільтр з індивідуальними вимикачами на кожній розетці. 3 розетки, 3 USB, Type-C. Кабель 2м. Економія енергії.',badge:''},
  {id:220615,title:'Пароочисник портативний 2500Вт HX-860',price:988,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/06/6714900406_paroochisnik-portativnij-2500.jpg',gallery:[],desc:'Пароочисник 2500Вт. Тиск 3 бари, температура 105°C, нагрів за 15 секунд. Шланг 2.2м. Живлення від мережі 220В.',badge:''},
  {id:220404,title:'Дитяче бездротове карaoке на 2 мікрофони SPEAKER K12',price:228,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978868595_karaoke-svetodiodnyj-besprovodnoj.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978868599_karaoke-svetodiodnyj-besprovodnoj.png','https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978868602_karaoke-svetodiodnyj-besprovodnoj.png'],desc:'Bluetooth-колонка з 2 бездротовими мікрофонами. 5Вт, USB Type-C зарядка, 3-5 годин роботи. LED-підсвітка. Ідеальний подарунок.',badge:''},
  {id:219279,title:'Міні швейна машинка HANDY STITCH',price:150,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2026/01/5978803684_shvejnaya-mini-mashinka-handy.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2026/01/5978803689_shvejnaya-mini-mashinka-handy.jpg','https://phantom-drop.com.ua/wp-content/uploads/2026/01/5978803692_shvejnaya-mini-mashinka-handy.jpg'],desc:'Ручна міні-машинка для шиття. Працює від 4 батарейок АА. Одна нитка, рівний шов. Підходить для будь-якої тканини. Катушка ниток у комплекті.',badge:''},
  {id:216816,title:'Зірковий проєктор Астронавт MINI Farraray 360°',price:267,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/5979254104_zvezdnyj-proektor-astronavt.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/5979254105_zvezdnyj-proektor-astronavt.png','https://phantom-drop.com.ua/wp-content/uploads/2025/01/5979254106_zvezdnyj-proektor-astronavt.png'],desc:'Зірковий проєктор у формі астронавта. Обертання 360°, туманність + зоряне небо, пульт ДУ. Кольори регулюються. Розмір 8.5×12.5 см.',badge:''},
  {id:216797,title:'Електрична сушарка для взуття з таймером TVT-06',price:345,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/6455912814_elektrichna-skladna-susharka.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/6455912904_elektrichna-skladna-susharka.png','https://phantom-drop.com.ua/wp-content/uploads/2025/01/6455912935_elektrichna-skladna-susharka.png'],desc:'Складана сушарка для взуття 150Вт. Таймер 120 хв, температура 40-45°C. Циркуляція гарячого повітря 360°. Функція дезодорування.',badge:''},
  {id:216795,title:'Нічник-дошка акрилова WordPad 5502',price:150,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/12/6972064506_nichnik-doshka-akrilova-z.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/12/6972074962_nichnik-doshka-akrilova-z.png'],desc:'Акрилова підсвічувана дошка для нотаток. USB живлення, сучасний дизайн 110×55×170 мм. Маркери у комплекті. Теплий колір 3000K.',badge:''},
  {id:214564,title:'Навушники Bluetooth з LED-вушками JST-28 Фіолетові',price:221,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954619736_besprovodnye-bluetooth-naushniki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954621145_besprovodnye-bluetooth-naushniki.png'],desc:'Бездротові навушники з LED-вушками. Bluetooth 5.0, 7 годин роботи, м\'які амбушури, шумозаглушення. Складаються. Фіолетовий.',badge:'Хіт'},
  {id:214560,title:'Навушники Bluetooth з LED-вушками JST-28 Чорні',price:221,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954612393_besprovodnye-bluetooth-naushniki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954613500_besprovodnye-bluetooth-naushniki.png'],desc:'Бездротові навушники з LED-вушками. Bluetooth 5.0, 7 годин роботи, м\'які амбушури, шумозаглушення. Складаються. Чорний.',badge:'Хіт'},
  {id:214557,title:'Навушники Bluetooth з LED-вушками JST-28 Рожеві',price:221,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954601608_besprovodnye-bluetooth-naushniki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/10/5978840181_besprovodnye-bluetooth-naushniki.webp'],desc:'Бездротові навушники з LED-вушками. Bluetooth 5.0, 7 годин роботи, м\'які амбушури, шумозаглушення. Складаються. Рожевий.',badge:'Хіт'},
  {id:214503,title:'3D нічник «Каблучка з діамантом»',price:129,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954332123_3d-svitilnik-nichnik-kabluchka.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954332219_3d-svitilnik-nichnik-kabluchka.png'],desc:'3D акриловий нічник. Реалістична 3D-графіка, м\'яке LED-світло. Керування кнопкою. Розмір упаковки 23×15×5.5 см. Акрил 3мм.',badge:''},
  {id:214468,title:'3D нічник «Песик»',price:129,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954325076_3d-svitilnik-nichnik-pesik.png',gallery:[],desc:'3D акриловий нічник у формі песика. LED-підсвітка, м\'яке світло. Ідеально для дитячої кімнати. Акрилове скло 3мм.',badge:''},
  {id:214438,title:'3D нічник «Ейфелева вежа»',price:129,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954316180_3d-svitilnik-nichnik-ejfeleva.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/11/6954316228_3d-svitilnik-nichnik-ejfeleva.png'],desc:'3D акриловий нічник «Ейфелева вежа». Реалістична 3D-графіка, ефект об\'ємності. Керування кнопкою. Акрил 3мм.',badge:''},
  {id:211683,title:'Жіночі теплі колготки 100 DEN Premium BLACK',price:208,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/6531943802_zhinochi-tepli-kolgotki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/6531942733_zhinochi-tepli-kolgotki.png','https://phantom-drop.com.ua/wp-content/uploads/2025/02/6531943260_zhinochi-tepli-kolgotki.png'],desc:'Теплі колготки з флісовим утеплювачем. На вигляд — тонкі чорні, всередині — теплий бежевий фліс. Ефект голих ніг. Стягуючий ефект.',badge:''},
  {id:207681,title:'Тример-епілятор для брів Finishing Touch Flawless Brows',price:111,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978804784_zhenskij-trimmer-epilyator.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978804786_zhenskij-trimmer-epilyator.jpg','https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978804788_zhenskij-trimmer-epilyator.jpg'],desc:'Компактний тример для брів. Безболісне видалення волосків без гелю. Підходить для чутливої шкіри. Розмір 13.1×2.1 см.',badge:''},
  {id:205335,title:'Електрична грілка для ніг та рук 29×29 см USB',price:325,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6890717026_myaka-plyusheva-elektrichna.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6890717819_myaka-plyusheva-elektrichna.png','https://phantom-drop.com.ua/wp-content/uploads/2025/10/6890717919_myaka-plyusheva-elektrichna.png'],desc:'М\'яка плюшева грілка на USB. Нагрів 50-60°C за 3-6 хвилин. Знімний чохол, можна прати. Розмір 29×29 см.',badge:''},
  {id:204707,title:'Турмалінові шкарпетки Hot Care масажні р.38-44',price:55,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6887506337_turmalinovi-shkarpetki-hot.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6887500842_turmalinovi-shkarpetki-hot.png','https://phantom-drop.com.ua/wp-content/uploads/2025/10/6887500853_turmalinovi-shkarpetki-hot.png'],desc:'Турмалінові шкарпетки з масажною підошвою. Знімають набряки, покращують кровообіг. Розмір 38-44. Чорний колір.',badge:''},
  {id:204701,title:'Термо шкарпетки New Bs (Коричневий, Чорний)',price:49,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6887495005_shkarpetki-termo-zahist.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6887495054_shkarpetki-termo-zahist.png'],desc:'Зимові термошкарпетки з начосом. Бавовна + поліестер + вовна. До -10°C. Розмір 38-43.',badge:''},
  {id:202759,title:'Автомобільний освіжувач «Левітація» сонячний',price:150,cat:'auto',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/07/6556840714_avtomobilnij-osvizhuvach-povitrya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/07/6556841296_avtomobilnij-osvizhuvach-povitrya.jpg','https://phantom-drop.com.ua/wp-content/uploads/2025/07/6556840556_avtomobilnij-osvizhuvach-povitrya.png'],desc:'Автомобільний освіжувач на сонячній енергії. Обертання 360°, не потребує батарейок. Чорний, 65×65 мм.',badge:''},
  {id:201756,title:'Навушники Xiaomi Redmi AirDots Bluetooth 5.0',price:169,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6869253287_bezdrotovi-navushniki-xiaomi.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6869252967_bezdrotovi-navushniki-xiaomi.png','https://phantom-drop.com.ua/wp-content/uploads/2025/10/6869253179_bezdrotovi-navushniki-xiaomi.png'],desc:'TWS навушники Bluetooth 5.0. 4 години роботи, кейс 300 мАг, мікрофон, IPX4. Різні розміри амбушур у комплекті.',badge:''},
  {id:201746,title:'Навушники M10 TWS WIRELESS Bluetooth 5.2',price:143,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978829183_besprovodnye-naushniki-m10.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978829187_besprovodnye-naushniki-m10.png','https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978829192_besprovodnye-naushniki-m10.png'],desc:'TWS навушники Bluetooth 5.2. До 180 годин з кейсом, IPX7, CVC шумозаглушення. Цифровий дисплей на кейсі.',badge:''},
  {id:201701,title:'Навушники TWS X15 Bluetooth',price:163,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/12/6419804311_bezdrotovi-bluetooth-navushniki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/12/6419804313_bezdrotovi-bluetooth-navushniki.png'],desc:'Bluetooth-навушники X15. Імпеданс 32 Ом, 5-6 годин роботи, 180 годин очікування. АЧХ 20Гц-20кГц.',badge:''},
  {id:201669,title:'Маска-бандаж для корекції овалу обличчя',price:104,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6862153900_maska-bandazh.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6862155137_maska-bandazh.png','https://phantom-drop.com.ua/wp-content/uploads/2025/10/6862154919_maska-bandazh.png'],desc:'Маска-бандаж для підтяжки шкіри та корекції овалу. Компресійний вплив, розгладжує зморшки, усуває мішки під очима.',badge:''},
  {id:201570,title:'Пластир від варикозу Varicose Veins Patch 10 шт',price:26,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/10/6608935754_plastir-vid-varikozu.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/10/6608935753_plastir-vid-varikozu.webp'],desc:'Пластирі від варикозу на рослинних компонентах. 10 штук в упаковці. Знімають набряки, покращують кровообіг.',badge:''},
  {id:197414,title:'Капронові колготки ELASLIM 40 DEN надміцні',price:78,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/6843802664_nadmitsni-kapronovi-kolgotki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/09/6843802841_nadmitsni-kapronovi-kolgotki.png'],desc:'Надміцні капронові колготки 40 DEN. Витримують 3000 циклів прання. Тонізуючий ефект для судин. Захист від стрілок.',badge:''},
  {id:194456,title:'Робот-пилосос 3в1 Vacuum 8088',price:299,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978882306_robot-pilosos-robot.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978882308_robot-pilosos-robot.jpg'],desc:'Робот-пилосос діаметром 18 см. Підмітає та пилосмокче. Товщина 5.4 см — залізає під меблі. USB зарядка.',badge:''},
  {id:194362,title:'П\'яткоутримувач від натирання',price:26,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/6826993894_pyatkoutrimuvach-zapyatochnik-vid.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/09/6826993932_pyatkoutrimuvach-zapyatochnik-vid.png'],desc:'Самоклейні вкладки для п\'ятки. Товщина 5 мм, 1 пара. Зменшують тертя, запобігають утворенню мозолів.',badge:''},
  {id:193858,title:'Фритюрниця Zepline ZP-141 8л 4200Вт',price:1819,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/6824476553_bagatofunktsionalna-frityurnitsya-zepline.jpg',gallery:[],desc:'Багатофункціональна фритюрниця 8л. 4200Вт, антипригарне покриття, панель українською мовою. Силіконова форма в комплекті.',badge:''},
  {id:193062,title:'Автомобільний килимок Scratch mat + тримач телефону HA-20',price:78,cat:'auto',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978884589_bagatofunktsionalnij-avtomobilnij-kovrik.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978884593_bagatofunktsionalnij-avtomobilnij-kovrik.webp'],desc:'Силіконовий килимок на торпеду з тримачем телефону. Поворот 360°, розмір 19×25 см. Мийний. Чорний з червоним.',badge:''},
  {id:193043,title:'Вакуумний пакувальник Freshpack Pro HQ-1 + пакети',price:221,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978816443_prilad-dlya-vakuumnogo.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978816445_prilad-dlya-vakuumnogo.png','https://phantom-drop.com.ua/wp-content/uploads/2025/09/5978816448_prilad-dlya-vakuumnogo.png'],desc:'Вакуумний пакувальник Freshpack Pro. Подовжує термін зберігання у 5 разів. 10 пакетів в комплекті.',badge:''},
  {id:193041,title:'Автомобільний нековзний килимок',price:169,cat:'auto',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/05/6657123251_bagatofunktsionalnij-avtomobilnij-nekovznij.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/05/6657122423_bagatofunktsionalnij-avtomobilnij-nekovznij.jpg'],desc:'Нековзний килимок для торпеди. Надійно фіксує телефони, окуляри, ключі. Захист від подряпин. Водонепроникний.',badge:''},
  {id:191314,title:'EMS TRAINER пояс-міостимулятор 3в1',price:163,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3608231395_3v1-miostimulyator-ems.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3608231384_3v1-miostimulyator-ems.jpg','https://phantom-drop.com.ua/wp-content/uploads/2022/09/3608231387_3v1-miostimulyator-ems.jpg'],desc:'М\'язовий EMS стимулятор. 6 режимів, 3 пари електродів, 12 хвилин процедура. Частота 1-100 Гц.',badge:''},
  {id:188328,title:'Кімнатний нагрівач Handy Heater 400Вт',price:280,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/08/495452021.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/08/522287706.webp','https://phantom-drop.com.ua/wp-content/uploads/2025/08/495452038.webp'],desc:'Компактний керамічний нагрівач в розетку. 400Вт, термостат 15-32°C, таймер 12 годин. До 15м². Корпус не нагрівається.',badge:''},
  {id:186324,title:'Автомобільний ароматизатор «Вертоліт»',price:202,cat:'auto',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/08/6795136962_avtomobilnij-aromatizator-vertolit.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/08/6795137120_avtomobilnij-aromatizator-vertolit.png','https://phantom-drop.com.ua/wp-content/uploads/2025/08/6795137172_avtomobilnij-aromatizator-vertolit.png'],desc:'Ароматизатор з обертовими елементами у вигляді вертольоту. Золотисте 3D оздоблення. Подарункова коробка.',badge:''},
  {id:182705,title:'Вакуумні пакети в рулоні 25×500см',price:111,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/08/5978797321_vakuumni-gofrovani-paketi.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/08/5978797322_vakuumni-gofrovani-paketi.jpg'],desc:'Гофровані вакуумні пакети в рулоні 25×500см. 7-шарова плівка, до -30°C. Підходять для будь-яких вакуумних пакувальників.',badge:''},
  {id:182688,title:'Вакуумні пакети в рулоні 20×500см',price:91,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/08/5978832227_vakuumni-gofrovani-paketi.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/08/5978832228_vakuumni-gofrovani-paketi.jpg'],desc:'Гофровані вакуумні пакети в рулоні 20×500см. 7-шарова плівка, до -30°C. Підходять для будь-яких пакувальників.',badge:''},
  {id:181220,title:'Вакуумний антицелюлітний масажер Cupping Massager',price:481,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/07/6773955596_vakuumnij-antitselyulitnij-masazher.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/07/6773955601_vakuumnij-antitselyulitnij-masazher.webp'],desc:'Вакуумний масажер 3 в 1: масаж гуашею, вакуум, лімфодренаж. 6 режимів сили. LCD дисплей. USB зарядка.',badge:''},
  {id:158865,title:'Електрокоагулятор плазмова ручка Nano B23',price:259,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978874259_elektrokoagulyator-kosmetologicheskij-i.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978874262_elektrokoagulyator-kosmetologicheskij-i.png'],desc:'Плазмова ручка для видалення папілом та бородавок. 9 рівнів потужності, LED-підсвітка. Micro USB зарядка.',badge:''},
  {id:151391,title:'Знімні вініри Perfect Smile Veneers',price:65,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/05/6670500617_znimni-viniri-perfect.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/05/6670500500_znimni-viniri-perfect.png'],desc:'Знімні вініри з медичного поліпропілену. Не пошкоджують емаль та ясна. Багаторазове використання.',badge:''},
  {id:149285,title:'Електрична пемза для ніг Pedi Vac',price:163,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/05/5978848479_pemza-dlya-nog.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/05/5978848480_pemza-dlya-nog.jpg'],desc:'Електрична пемза з технологією derma-vac. Всмоктує стружку. 2000+ об/хв, 2 швидкості. Від мережі.',badge:''},
  {id:148998,title:'Машинка для манікюру та педикюру 6в1 VARIABLE SPEED',price:129,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978817961_mashinka-dlya-manikyura.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/6291693280_mashinka-dlya-manikyura.png'],desc:'Фрезер для манікюру та педикюру. 6 насадок, 20000 об/хв, регулювання швидкості. 10Вт, 220В.',badge:''},
  {id:143841,title:'Набір ножів Zepline ZP-076 нержавіюча сталь',price:865,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/03/6586525683_nabor-nozhiv-iz.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/03/6586526724_nabor-nozhiv-iz.png'],desc:'Набір кухонних ножів на підставці: кухарський, універсальний, для хліба, чистячий, сокира, ножиці, мусат, овочечистка.',badge:''},
  {id:142373,title:'Гелевий освіжувач для унітазу (Роза / Морський бриз)',price:85,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978885641_shprits-gelevyj-osvezhitel.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978885642_shprits-gelevyj-osvezhitel.jpg'],desc:'Гелевий освіжувач для унітазу. 12 аплікацій на 12 тижнів. Захист від вапняного нальоту та мікробів.',badge:''},
  {id:142357,title:'Фен Fashion hair dryer 200Вт',price:247,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978832121_professionalnyj-fen-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/03/5978832122_professionalnyj-fen-dlya.png'],desc:'Іонний фен для волосся. 200Вт, 3 режими (холодне/тепле/гаряче), захист від перегріву. Шнур 180 см.',badge:''},
  {id:140847,title:'Навушники TWS Ultrapods Max Air39 чорні',price:150,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/03/6548853754_bezdrotovi-bluetooth-navushniki.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/03/6548853771_bezdrotovi-bluetooth-navushniki.png'],desc:'Прозорий дизайн. Активне шумозаглушення. 3D-звукове поле. Зарядний кейс у комплекті.',badge:''},
  {id:139895,title:'Скляний спрей-дозатор для олії 100мл',price:72,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978873387_butylka-dozator-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978873388_butylka-dozator-dlya.png'],desc:'Скляний розпилювач для олії та оцту. Помпова система рівномірного розпилення. Підходить для барбекю та духовки.',badge:''},
  {id:139894,title:'Відпарювач-пароочисник Crownberg CB-3141 9в1',price:845,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/6259330838_otparivatel-s-funktsiej.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/6259330835_otparivatel-s-funktsiej.jpg'],desc:'Пароочисник 1200Вт. Тиск 300кПа, ємність 350мл. 9 насадок. Без хімії. Нагрів миттєво.',badge:''},
  {id:139514,title:'Плойка-випрямлювач Gemei GM-416',price:468,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978804580_professionalnaya-plojka-vyravnivatel.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978804581_professionalnaya-plojka-vyravnivatel.png'],desc:'Керамічна плойка 150-230°C. LED дисплей, 5 режимів температури, поворот шнура 360°. 220-240В.',badge:''},
  {id:138506,title:'Апарат для педикюру Pretty girl flawless pedi',price:150,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978792344_apparat-dlya-pedikyura.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978792347_apparat-dlya-pedikyura.png'],desc:'Електрична пемза для педикюру. 2 насадки, USB зарядка, 45 хв роботи. 3Вт.',badge:''},
  {id:138497,title:'Парова щітка для тварин з впускним отвором',price:91,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978880387_parovaya-schetka-dlya.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978880389_parovaya-schetka-dlya.png'],desc:'Щітка для вичісування та масажу котів і собак. М\'яка щетина, USB зарядка. Розмір 12×6.5 см.',badge:''},
  {id:138411,title:'Іригатор для зубів Power-floss Shining IPX7',price:319,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/6219785720_portativnyj-irrigator-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/6219786725_portativnyj-irrigator-dlya.png'],desc:'Портативний іригатор IPX7. 200мл резервуар, 1800 імпульсів/хв, тиск 60-120 к.с. 4 насадки.',badge:''},
  {id:137357,title:'Дитячий плед «Зірки» Magic Blanket світиться 120×150',price:228,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978796007_dityache-pokrivalo-pled-iz.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978796008_dityache-pokrivalo-pled-iz.jpg'],desc:'Плед з люмінофорними зірками. Світиться в темряві до 4 годин. Мікрофібра 120×150 см. Безпечний склад.',badge:''},
  {id:137351,title:'Джойстик DualShock 4 для PS4 V2 ЧОРНИЙ Bluetooth',price:481,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978848484_w1280_h1280_cid3978301_pid2253791070-906092aa.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/02/5978792549_mnogofunktsionalnyj-dzhojstik-dualshock.png'],desc:'Бездротовий контролер PS4 DualShock 4 V2. Сенсорна панель, гіроскоп, акселерометр. Кнопка Share.',badge:''},
  {id:135411,title:'Набір контейнерів для спецій 3×400мл',price:410,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/6481240695_nabir-kontejneriv-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/6481240975_nabir-kontejneriv-dlya.png'],desc:'3 скляні банки на підставці. По 400мл кожна. Ложечка 5мл в комплекті. Герметичні кришки з силіконом.',badge:''},
  {id:135404,title:'Акумуляторний пилосос Wireless Vacuum Cleaner BS803',price:1242,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/6481229642_potuzhnij-akumulyatornij-pilosos.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/6481225800_potuzhnij-akumulyatornij-pilosos.jpg'],desc:'Акумуляторний пилосос. Широкий діапазон застосування: дім, авто, офіс. Тривала робота від заряду.',badge:''},
  {id:135386,title:'Нічник-дошка акрилова LAMP 3D USB 175×125×4 мм',price:111,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/6480640894_nichnik-doshka-akrilova-z.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/6480640883_nichnik-doshka-akrilova-z.png'],desc:'Акрилова підсвічувана дошка. 175×125×4 мм, 3 режими підсвітки. USB живлення. Маркер у комплекті.',badge:''},
  {id:133631,title:'Вакуумний пакувальник Freshpack Pro HQ-1 v2 + пакети',price:228,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978797309_prilad-dlya-vakuumnogo.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978797310_prilad-dlya-vakuumnogo.png'],desc:'Вакуумний пакувальник Freshpack Pro v2. Автоматичне запаювання. 5 пакетів у комплекті.',badge:''},
  {id:132960,title:'Гідрогелеві патчі під очі Images Alga Lady 60шт',price:208,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978793342_gidrogelevye-patchi-pod.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978793343_gidrogelevye-patchi-pod.jpg'],desc:'Гідрогелеві патчі з морськими водоростями та спіруліною. 60шт. Зволожують, знімають набряки, ліфтинг-ефект.',badge:''},
  {id:132808,title:'Стайлер 5в1 Hot Air Styler',price:358,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978796183_stajler-5v1-hot.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2025/01/5978796185_stajler-5v1-hot.png'],desc:'Мультистайлер 5в1. 1000Вт, 3 швидкості, 5 насадок. Без екстремального нагріву до 120°C. Шнур 200 см.',badge:''},
  {id:125386,title:'Дитячий набір косметики + прикраси 2в1',price:280,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/11/6365215234_nabir-dityachoyi-dekorativnoyi.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/11/6365214949_nabir-dityachoyi-dekorativnoyi.png'],desc:'Дитяча гіпоалергенна косметика + набір для браслетів. Тіні, помади, лаки, пензлики. Кейс з дзеркалом.',badge:''},
  {id:118356,title:'Стайлер 5в1 HAIR BRUSH DYSON-style + кейс',price:598,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/458672544.webp',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978862221_stajler-dlya-volos.png'],desc:'Фен-стайлер 5в1 DYSON-style. 1000Вт, інфрачервоний нагрів, 5 насадок, коробка-кейс. Шнур 200 см.',badge:''},
  {id:116827,title:'Поліетиленові пакети для їжі LY-74 прозорі 100шт',price:46,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978885614_pakety-polietilenovye-dlya.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/09/5978885615_pakety-polietilenovye-dlya.webp'],desc:'Поліетиленові пакети 100шт. На резинці, ширина 15 см. Захист від пилу та вологи.',badge:''},
  {id:114922,title:'Щітка для видалення вовни Lint Remover',price:29,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978805897_schetka-dlya-udaleniya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/5978805898_schetka-dlya-udaleniya.png'],desc:'Ручна мідна щітка для вовни. Без батарейок та мережі. Видаляє ворс з одягу та меблів.',badge:''},
  {id:112176,title:'Налобний ліхтарик 2в1 XPE+COB з датчиком руху',price:117,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/6161252913_nalobnij-lihtarik-2.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/6161253773_nalobnij-lihtarik-2.png'],desc:'Налобний ліхтарик COB+XPE. 5 режимів, датчик руху, 8 годин роботи, 1200 мАг. USB зарядка.',badge:''},
  {id:112170,title:'Антицелюлітний масажер RETTER Body Innovation',price:416,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/08/6161212342_infrakrasnyj-antitsellyulitnyj-massazher.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/08/6161212348_infrakrasnyj-antitsellyulitnyj-massazher.jpg'],desc:'Інфрачервоний масажер. 3 режими, 4 насадки. Лімфодренаж, ліфтинг. 10 хвилин на день.',badge:''},
  {id:111213,title:'Парова щітка для тварин Pet comb',price:72,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/07/6135509523_schetka-massazhnaya-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/07/6135509801_schetka-massazhnaya-dlya.png'],desc:'Парова щітка для вичісування котів і собак. М\'яка щетина, USB зарядка. Розмір 13.5×8 см.',badge:''},
  {id:110523,title:'Фітнес-гумки Fitness rubber bands (коробка + чохол)',price:52,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/07/6105157530_fitnes-rezinki-fitness.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/07/6105157531_fitnes-rezinki-fitness.jpg'],desc:'Набір 5 гумок-еспандерів. Латекс, діаметр 60 см, навантаження від 3.5 до 22 кг. Фірмовий чохол.',badge:''},
  {id:105384,title:'Бутербродниця 6в1 Rainberg RB-2276 2200Вт',price:1268,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/06/5979418359_multimejker-buterbrodnitsa-6.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/06/5979423303_multimejker-buterbrodnitsa-6.png'],desc:'Мультимейкер 6в1: пончики, горішки, вафлі, сендвічі, гриль. 2200Вт, антипригарне гранітне покриття.',badge:''},
  {id:94729,title:'Чохол для підігріву дитячого харчування USB',price:182,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/04/5681984004_portativnyj-chehol-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/04/5681983627_portativnyj-chehol-dlya.png'],desc:'Портативний підігрівач пляшечок. USB живлення, автовимкнення, контроль температури. Для подорожей.',badge:''},
  {id:91191,title:'Щітка для тварин Pet Gravity LY-364 3в1',price:59,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/10/5017450133_schitka-dlya-suhogo.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/10/5017450397_schitka-dlya-suhogo.png'],desc:'Щітка 3в1: вичісування, масаж, видалення вовни з одягу. М\'який силікон. Розмір 19×5.3×2.6 см.',badge:''},
  {id:83055,title:'Зарядна станція для геймпада PS Dual USB DOBE',price:481,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/01/5370697405_dok-stantsiya-dlya-gejmpada.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/01/5370697681_dok-stantsiya-dlya-gejmpada.jpg'],desc:'Зарядна станція для 2 геймпадів PS4. Зарядка 2.5-3 години. LED індикатор зеленим=заряджений.',badge:''},
  {id:80446,title:'Дитячий фотоапарат миттєвого друку A19',price:1307,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2024/01/5310777142_detskij-fotoapparat-momentalnoj.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2024/01/5310774493_detskij-fotoapparat-momentalnoj.png'],desc:'24Мп фотоапарат з миттєвим друком. IPS 2" екран, відео, автофокус, 1200мАг. Папір у комплекті.',badge:''},
  {id:76601,title:'Настільна лампа G-Smart Light + бездротова зарядка Black',price:631,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/12/5218172610_nastolnaya-lampa-g-smart.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/12/5218173134_nastolnaya-lampa-g-smart.png'],desc:'Лампа + Bluetooth 5.0 колонка + бездротова зарядка 15Вт. 16 млн кольорів, 256 режимів. 225×230×82 мм.',badge:''},
  {id:74082,title:'Бластер Людини-Павука Spider Launch Toys',price:129,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/11/photo_2023-11-29_08-43-10.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/11/5142397638_blaster-cheloveka-.webp'],desc:'Бластер на руку. 10 гумових куль у комплекті. Розмір 18×7.5×6.5 см. Вага 150г.',badge:''},
  {id:71147,title:'Попільниця з очищенням повітря POT AND461',price:163,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/11/5102643428_pepelnitsa-s-funktsiej.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/11/5102643450_pepelnitsa-s-funktsiej.png'],desc:'Попільниця з вбудованим фільтром. Всмоктує та фільтрує дим. Живлення від 2 батарейок АА.',badge:''},
  {id:69835,title:'Портативний проектор UKC YG-300 з динаміком',price:956,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/11/5074842636_multimedijnyj-portativnyj-proektor.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/11/5074842677_multimedijnyj-portativnyj-proektor.png'],desc:'Міні-проектор LED YG-300. До 60" зображення, HDMI/USB/SD, 400-600лм. Вага 250г. Вбудований динамік.',badge:''},
  {id:68174,title:'Килимок для ванної вологопоглинаючий Memos',price:129,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/10/5004272708_kovrik-dlya-vannoj.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/10/5004269960_kovrik-dlya-vannoj.png'],desc:'Вологопоглинаючий килимок 40×60 см. Антиковзне покриття. Синій або фіолетовий.',badge:''},
  {id:61040,title:'Набір інструментів для чищення вух TOOL SET',price:52,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/09/4877509100_nabor-instrumentov-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/09/4877509330_nabor-instrumentov-dlya.png'],desc:'6 інструментів з нержавіючої сталі. Шкіряний чохол-брелок. Розмір 8-9 см.',badge:''},
  {id:58590,title:'Набір дорожніх органайзерів Laundry Pouch (Бордовий)',price:150,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/08/4538786247_nabor-dorozhnyh-organajzerov.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/08/4538784179_nabor-dorozhnyh-organajzerov.png'],desc:'6 органайзерів різних розмірів. Водонепроникний нейлон + сітка. Ідеально для подорожей.',badge:''},
  {id:57960,title:'Портативний бездротовий міксер USB',price:150,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/08/4824132861_mikser-elektricheskij-portativnyj.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/08/4824132992_mikser-elektricheskij-portativnyj.png'],desc:'Бездротовий міксер 3 швидкості. 12000 об/хв, 1200мАг, 3 години роботи. USB зарядка.',badge:''},
  {id:57002,title:'Ручний пилосос Crownberg СВ-671 3л 2400Вт',price:1918,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/08/4811593688_pylesos-ruchnoj-crownberg.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/08/4811593845_pylesos-ruchnoj-crownberg.png'],desc:'Ручний пилосос 2400Вт. Контейнер 3л, телескопічна труба, автозмотування шнура 4.2м.',badge:''},
  {id:51621,title:'Міні швабра MINI MOP з автовіджимом',price:124,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/07/4700017767_portativnaya-mini-shvabra.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/07/4700017997_portativnaya-mini-shvabra.png'],desc:'Компактна швабра з автовіджимом. ABS пластик, бавовна PU. Для дому, авто, офісу.',badge:''},
  {id:48762,title:'Ручний блендер 5в1 HB ZP-073 1500Вт',price:1216,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/07/4659084281_ruchnoj-blender-5.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/07/4659084591_ruchnoj-blender-5.png'],desc:'Блендер 5в1: блендер-палиця, чаша 600мл, подрібнювач 500мл, спінювач. 1500Вт, 20+ швидкостей.',badge:''},
  {id:48319,title:'Нековзний килимок для душу 40×60 (Сірий)',price:85,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/07/4651846187_supervpityvayuschij-kovrik-dlya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/07/4651846266_supervpityvayuschij-kovrik-dlya.png'],desc:'Вологопоглинаючий килимок Memory Foam. 60×40 см, антиковзне ПВХ покриття. Сірий.',badge:''},
  {id:44882,title:'Силіконова щітка на липучках для ванни',price:85,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/06/4584961293_silikonovaya-schetka-na.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/06/4584959718_silikonovaya-schetka-na.png'],desc:'Силіконовий масажний килимок для ніг з присосками. Масаж підошви, нековзна поверхня.',badge:''},
  {id:36555,title:'Сушарка для фруктів та овочів Zepline ZP-029',price:1339,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/03/photo_2023-07-13_14-25-14.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/03/4365923892_sushilnyj-apparat-sushilka.png'],desc:'Дегідратор 800Вт. 5 секцій, 35-70°C, прозора кришка. До 1кг на піддон.',badge:''},
  {id:35907,title:'Стайлер для стразів Shinning Diamond Bling Bling',price:114,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/03/4336987400_stajler-dlya-ukrasheniya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/03/4336982093_stajler-dlya-ukrasheniya.png'],desc:'Набір юного стиліста. Прикрашай волосся, одяг, аксесуари стразами. 10 дисків зі стразами.',badge:''},
  {id:32102,title:'EMS масажер-міостимулятор метелик МА-1',price:85,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2023/02/4233686189_impulsnij-masazher-miostimulyator.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2023/02/4233686125_impulsnij-masazher-miostimulyator.png'],desc:'Компактний EMS масажер. 8 режимів, 12 хвилин процедура. Акумулятор, USB зарядка.',badge:''},
  {id:29770,title:'Кемпінговий ліхтар із сонячною батареєю mh-5800T',price:163,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/11/4103786796_skladanij-kempingovij-lihtar.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/11/4103788424_skladanij-kempingovij-lihtar.png'],desc:'Складаний кемпінговий ліхтар. 6 LED + 1 XPE. До 6 годин роботи, USB порт для зарядки гаджетів.',badge:''},
  {id:26857,title:'Фен-щітка 3в1 з гарячим повітрям',price:345,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/11/4113576822_fen-dlya-volos.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/11/4113576030_fen-dlya-volos.png'],desc:'Фен-щітка 3в1 з іонами. 800Вт, 3 рівні температури. 3 гребені у комплекті. Розмір 24.5×5.2 см.',badge:''},
  {id:23708,title:'Літаюча лялька фея Flying Fairy',price:163,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/10/4039260779_letayuschaya-kukla-feya.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/10/4039261773_letayuschaya-kukla-feya.png'],desc:'Лялька фея, яка справжньо літає. Сенсорні датчики, мотор. USB зарядка 10 хв = 2 години гри. Висота 20 см.',badge:''},
  {id:22603,title:'Соковижималка Crownberg CB-3401 1000Вт',price:1450,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543896692_sokovyzhimalka-crownberg-cb-3401.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543896693_sokovyzhimalka-crownberg-cb-3401.jpg'],desc:'Відцентрова соковижималка 1000Вт. Горловина ø65мм для цілих фруктів. 3 швидкості. Нержавіюча сталь.',badge:''},
  {id:20078,title:'Фен-щітка Gemei GM-4828 з обертовою насадкою',price:715,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3548105505_fen-schetka-stajler-c.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3548105506_fen-schetka-stajler-c.jpg'],desc:'Стайлер-фен Gemei GM-4828. 1000Вт, 3 насадки. Для кучерів, локонів та об\'єму. 220В.',badge:''},
  {id:19877,title:'Світлодіодна стрічка RGB 5050 300 LED 5м',price:156,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3544219123_svetodiodnaya-lenta-rgb.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3544219124_svetodiodnaya-lenta-rgb.png'],desc:'RGB стрічка 5050. 300 LED, 5м, 12В. Кут 120°. Самоклейна, різна. Пульт у комплекті.',badge:''},
  {id:19875,title:'Розкладний стіл для пікніка + 4 стільці чемодан',price:1164,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3544219067_stol-alyuminievyj-raskladnoj.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3544219068_stol-alyuminievyj-raskladnoj.png'],desc:'Алюмінієвий стіл 120×60 см + 4 стільці. Висота 55-70 см. Вага набору 8 кг. Складається у кейс.',badge:''},
  {id:19594,title:'Машинка від катишків Gemei GM-230',price:189,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848321_mashinka-ot-katyshkov.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848322_mashinka-ot-katyshkov.png'],desc:'Машинка від катишків 10Вт від мережі 220В. Прозорий контейнер 100мл. Шнур 145 см.',badge:''},
  {id:12321,title:'Силіконовий нічник з акумулятором KS-602',price:254,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848298_silikonovyj-nochnik-so.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848299_silikonovyj-nochnik-so.jpg'],desc:'Силіконовий нічник 16 кольорів + 4 режими. Акумулятор 1200мАг, 10 годин роботи. USB зарядка.',badge:''},
  {id:12124,title:'Масажер Benice Body Slimmer BS45 антицелюлітний',price:273,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542873551_massazher-protiv-tsellyulita.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542873552_massazher-protiv-tsellyulita.jpg'],desc:'Антицелюлітний масажер з роликами. Кровообіг, лімфодренаж, тонус м\'язів. Мережевий адаптер.',badge:''},
  {id:11995,title:'Ігрова консоль SUP GAME BOX 400 ігор + 2 джойстики',price:319,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542786755_igrovaya-konsol-sup.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542786756_igrovaya-konsol-sup.jpg'],desc:'400 вбудованих 8-бітних ігор. LCD 3", підключення до TV, 6 годин роботи. 2 джойстики.',badge:''},
  {id:11975,title:'Скарбничка-сейф NUMBER BANK з кодовим замком',price:397,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542786371_kopilka-sejf-detskij.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3542786372_kopilka-sejf-detskij.jpg'],desc:'Дитячий банкомат-сейф. Кодовий замок, автоматично затягує купюри. 19×13×12 см. Від 3 батарейок ААА.',badge:''},
  // Extra items to reach 124
  {id:12347,title:'Машинка від катишків Gemei GM-230 (мережева)',price:189,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848321_mashinka-ot-katyshkov.png',gallery:[],desc:'Мережева машинка від катишків 10Вт 220В.',badge:''},
  {id:12360,title:'Гнучкий USB світильник з трьома лампочками',price:25,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848329_portativnyj-gibkij-usb.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543848330_portativnyj-gibkij-usb.png'],desc:'Гнучкий USB світильник для ноутбука. 1.5Вт = 13Вт лампа. 169×18×9 мм.',badge:''},
  {id:12429,title:'Кільцева LED лампа для блогера D26см Ring',price:150,cat:'electronics',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543854095_koltsevaya-svetodiodnaya-led.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3543854096_koltsevaya-svetodiodnaya-led.png'],desc:'Кільцева лампа для фото/відео. D26см. Тримач для телефону + кульова головка.',badge:''},
  {id:12914,title:'Електричний фарборозпилювач Paint Zoom 650Вт',price:709,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3573280108_kraskoraspylitel-professionalnyj-paint.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3573280063_kraskoraspylitel-professionalnyj-paint.jpg'],desc:'Пульверизатор 650Вт. Об\'єм 800мл, шланг 1.5м. 15м² за 10 хвилин. 3 режими розпилення.',badge:''},
  {id:12970,title:'Бандаж колінного суглоба KNEE SUPPORT WN-26',price:85,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3573770927_bandazh-kolennogo-sustava.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3573770926_bandazh-kolennogo-sustava.jpg'],desc:'Спортивний наколінник. Спандекс+нейлон. Розмір XL (45-50 см). Сірий з зеленим.',badge:''},
  {id:13952,title:'EMS TRAINER пояс-стимулятор v2',price:163,cat:'sport',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3608231395_3v1-miostimulyator-ems.jpg',gallery:[],desc:'EMS пояс-стимулятор 6 режимів, 12 хвилин. Батарейки ААА.',badge:''},
  {id:14709,title:'Електрична зубна щітка Shuke SK-601 4 насадки',price:195,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/zobrazhennya_2024-02-12_011927824.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3621755988_elektricheskaya-zubnaya-schyotka.jpg'],desc:'Акумуляторна щітка з вібрацією. 5 режимів, 4 насадки, USB зарядка. Чорна.',badge:''},
  {id:14756,title:'Масажер Relax and Tone для тіла, рук та ніг',price:345,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3631197524_massazher-dlya-pohudeniya.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3631197521_massazher-dlya-pohudeniya.jpg'],desc:'Масажер для схуднення. 6 швидкостей, 2500 об/хв, 25Вт. Захист від перегріву.',badge:''},
  {id:15217,title:'Машинка для стрижки тварин GEMEI GM-1023',price:546,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3650298728_professionalnaya-mashinka-dlya.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3650298685_professionalnaya-mashinka-dlya.jpg'],desc:'Машинка для грумінгу 10Вт. 4 насадки, ножиці, гребінці. Кейс у комплекті.',badge:''},
  {id:16308,title:'Антивібраційні підставки для пральної машини',price:65,cat:'home',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/1.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/yzobrazhennya_2022-12-10_183254322.png'],desc:'4 силіконові підставки ø46мм. Знижують вібрацію та шум. Для пральних машин та холодильників.',badge:''},
  {id:16342,title:'FlyNova Pro Gyrosphere летяча куля бумеранг',price:129,cat:'kids',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3750863269_letayuschij-shar-spinner.jpg',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3750863270_letayuschij-shar-spinner.jpg'],desc:'Літаюча куля-бумеранг. LED підсвітка RGB. Заряджання 25 хв, польот 10 хв. ø95мм, 27г.',badge:''},
  {id:16455,title:'Кушон консилер Bioaqua Silky Concealer',price:259,cat:'beauty',img:'https://phantom-drop.com.ua/wp-content/uploads/2022/09/3760758638_kushon-konsiler-bioaqua.png',gallery:['https://phantom-drop.com.ua/wp-content/uploads/2022/09/3760757910_kushon-konsiler-bioaqua.png'],desc:'Кушон консилер Bioaqua. Легка текстура, зволожує, вирівнює тон. 15г. Зі спонжем.',badge:''},
];

// ═══════════════════════════════════════════════════════
//  🗂  STATE
// ═══════════════════════════════════════════════════════
let state = {
  page: 'home',          // 'home' | 'product'
  productId: null,
  filter: 'all',
  search: '',
  sort: 'default',
  offset: 0,
  cart: [],
  activeImg: 0,
};

const CATS = [
  {key:'all',    label:'Всі товари'},
  {key:'electronics', label:'Електроніка'},
  {key:'beauty', label:'Краса'},
  {key:'home',   label:'Дім'},
  {key:'kids',   label:'Дітям'},
  {key:'auto',   label:'Авто'},
  {key:'sport',  label:'Спорт'},
];

// ═══════════════════════════════════════════════════════
//  🔀  ROUTING  (hash-based)
// ═══════════════════════════════════════════════════════
function parseHash() {
  const h = location.hash.replace('#','');
  if (h.startsWith('/product/')) {
    const id = parseInt(h.replace('/product/',''));
    if (!isNaN(id)) return {page:'product', productId:id};
  }
  return {page:'home', productId:null};
}

function navigate(page, productId=null) {
  if (page==='product') location.hash = `/product/${productId}`;
  else location.hash = '';
  render();
}

window.addEventListener('hashchange', render);

// ═══════════════════════════════════════════════════════
//  🔍  FILTER / SORT
// ═══════════════════════════════════════════════════════
function getFiltered() {
  let list = [...PRODUCTS];
  const r = parseHash();
  if (state.filter !== 'all') list = list.filter(p => p.cat === state.filter);
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.title.toLowerCase().includes(q));
  }
  if (state.sort === 'asc')  list.sort((a,b) => a.price - b.price);
  if (state.sort === 'desc') list.sort((a,b) => b.price - a.price);
  return list;
}

// ═══════════════════════════════════════════════════════
//  📬  ORDER  (Telegram)
// ═══════════════════════════════════════════════════════
async function sendOrder(product, form) {
  const msg =
`🛒 <b>НОВЕ ЗАМОВЛЕННЯ З САЙТУ!</b>
${'━'.repeat(28)}
📦 <b>Товар:</b> ${product.title}
💰 <b>Ціна:</b> ${product.price.toLocaleString('uk')} грн
${'━'.repeat(28)}
👤 <b>ПІБ:</b> ${form.name}
📞 <b>Телефон:</b> ${form.phone}
🏙 <b>Місто:</b> ${form.city}
🚚 <b>Доставка:</b> ${form.delivery}
📮 <b>Відділення:</b> №${form.post}
💳 <b>Оплата:</b> ${form.payment}
${form.comment ? `💬 <b>Коментар:</b> ${form.comment}` : ''}
${'━'.repeat(28)}
🌐 <b>Джерело:</b> Сайт Zatyshno`;

  const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({chat_id: ADMIN_CHAT, text: msg, parse_mode:'HTML'})
  });
  return r.ok;
}

// ═══════════════════════════════════════════════════════
//  🖥  RENDER
// ═══════════════════════════════════════════════════════
function render() {
  const route = parseHash();
  const app = document.getElementById('app');

  if (route.page === 'product') {
    const p = PRODUCTS.find(x => x.id === route.productId);
    if (!p) { app.innerHTML = '<div class="notfound">Товар не знайдено</div>'; return; }
    renderProduct(app, p);
  } else {
    renderHome(app);
  }

  window.scrollTo({top:0, behavior:'instant'});
}

// ── HOME ────────────────────────────────────────────────
function renderHome(app) {
  const filtered = getFiltered();
  const shown    = filtered.slice(0, state.offset + PER_PAGE);
  const hasMore  = shown.length < filtered.length;

  app.innerHTML = `
  <section class="hero">
    <div class="hero-blobs"><span></span><span></span><span></span></div>
    <div class="hero-content">
      <p class="hero-tag"><span></span>Магазин корисних речей</p>
      <h1 class="hero-title">Речі, що<br><em>роблять</em><br><strong>життя кращим</strong></h1>
      <p class="hero-sub">124 товари для дому, краси та техніки. Доставка по всій Україні.</p>
      <a href="#catalog" class="btn-main">Переглянути каталог</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><span class="stat-n" data-target="124">0</span><span class="stat-l">Товарів</span></div>
      <div class="stat"><span class="stat-n">1–3</span><span class="stat-l">Дні доставки</span></div>
      <div class="stat"><span class="stat-n">24/7</span><span class="stat-l">Підтримка</span></div>
    </div>
  </section>

  <div class="marquee-bar"><div class="marquee-track">${[
    'Нова Пошта від 79 грн','Укрпошта від 69 грн','Накладений платіж',
    '124 товари в наявності','Повернення 14 днів','Швидка відправка',
    'Нова Пошта від 79 грн','Укрпошта від 69 грн','Накладений платіж',
    '124 товари в наявності','Повернення 14 днів','Швидка відправка',
  ].map(t=>`<span>◦ ${t}</span>`).join('')}</div></div>

  <section class="catalog" id="catalog">
    <div class="catalog-head reveal">
      <div class="cat-title-wrap">
        <p class="sec-tag"><i></i>Весь асортимент</p>
        <h2 class="sec-title">Наш <em>каталог</em></h2>
      </div>
    </div>

    <div class="controls reveal">
      <div class="search-box">
        <input id="searchInput" placeholder="Пошук..." value="${state.search}" oninput="onSearch(this.value)">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
      </div>
      <div class="cats">
        ${CATS.map(c=>`<button class="cat-btn ${state.filter===c.key?'active':''}" onclick="setFilter('${c.key}')">${c.label}</button>`).join('')}
      </div>
      <select class="sort-sel" onchange="setSort(this.value)">
        <option value="default" ${state.sort==='default'?'selected':''}>За замовчуванням</option>
        <option value="asc"     ${state.sort==='asc'?'selected':''}>Ціна: від низької</option>
        <option value="desc"    ${state.sort==='desc'?'selected':''}>Ціна: від високої</option>
      </select>
    </div>

    <p class="results-count">Знайдено: <b>${filtered.length}</b> товарів</p>

    <div class="products-grid" id="grid">
      ${shown.length ? shown.map(renderCard).join('') : '<div class="empty">😕 Нічого не знайдено</div>'}
    </div>

    ${hasMore ? `<div class="load-more-wrap"><button class="btn-load" onclick="loadMore()">Показати ще (${filtered.length - shown.length})</button></div>` : ''}
  </section>

  <section class="features-section reveal">
    ${[
      {icon:'🚀',t:'Швидка доставка',d:'Нова Пошта 1–3 дні, Укрпошта 3–7 днів'},
      {icon:'💳',t:'Зручна оплата',d:'Накладений платіж або передплата по посиланню'},
      {icon:'🔄',t:'Повернення 14 днів',d:'Обмін та повернення протягом 14 днів'},
      {icon:'📞',t:'Підтримка',d:'Оператор відповість на всі питання в Telegram'},
    ].map(f=>`<div class="feat"><div class="feat-icon">${f.icon}</div><div class="feat-title">${f.t}</div><p class="feat-desc">${f.d}</p></div>`).join('')}
  </section>

  <section class="cta-sec reveal">
    <div class="cta-rings">${[1,2,3,4].map(i=>`<span class="ring r${i}"></span>`).join('')}</div>
    <div class="cta-inner">
      <span class="cta-icon">✈️</span>
      <h2 class="cta-title">Питання? <em>Пиши нам!</em></h2>
      <p class="cta-sub">Наш оператор допоможе з вибором та доставкою</p>
      <a href="https://t.me/zatyshno_ua_bot" target="_blank" class="btn-tg">✈️ Написати в Telegram</a>
    </div>
  </section>`;

  initAnimations();
}

function renderCard(p) {
  return `
  <div class="prod-card" onclick="navigate('product',${p.id})">
    <div class="prod-img-wrap">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23eee%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2240%22>📦</text></svg>'">
      <div class="prod-overlay"><span>Детальніше →</span></div>
    </div>
    <div class="prod-info">
      <p class="prod-name">${p.title}</p>
      <div class="prod-footer">
        <span class="prod-price">${p.price.toLocaleString('uk')} <small>грн</small></span>
        <button class="btn-order-sm" onclick="event.stopPropagation();openOrderModal(${p.id})">Замовити</button>
      </div>
    </div>
  </div>`;
}

// ── PRODUCT PAGE ─────────────────────────────────────────
function renderProduct(app, p) {
  const allImgs = [p.img, ...(p.gallery||[])];
  const related = PRODUCTS.filter(x => x.cat===p.cat && x.id!==p.id).slice(0,4);
  let activeIdx = 0;

  app.innerHTML = `
  <div class="product-page">
    <div class="breadcrumb"><a href="#" onclick="navigate('home');return false">Головна</a> <span>›</span> <span>${CATS.find(c=>c.key===p.cat)?.label||''}</span> <span>›</span> <span>${p.title}</span></div>

    <div class="product-layout">
      <div class="product-gallery">
        <div class="main-img-wrap">
          <img id="mainImg" src="${allImgs[0]}" alt="${p.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><rect fill=%22%23eee%22 width=%22400%22 height=%22400%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2260%22>📦</text></svg>'">
        </div>
        ${allImgs.length > 1 ? `
        <div class="thumbs">
          ${allImgs.map((img,i)=>`<div class="thumb ${i===0?'active':''}" onclick="switchImg('${img}',this)"><img src="${img}" loading="lazy"></div>`).join('')}
        </div>` : ''}
      </div>

      <div class="product-info-col">
        ${p.badge ? `<span class="badge-lg">${p.badge}</span>` : ''}
        <h1 class="product-title">${p.title}</h1>
        <div class="product-price-lg">${p.price.toLocaleString('uk')} <span>грн</span></div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-delivery-info">
          <div class="di"><span>🟡</span><div><b>Нова Пошта</b> від 79 грн, 1–3 дні</div></div>
          <div class="di"><span>🔵</span><div><b>Укрпошта</b> від 69 грн, тільки передплата</div></div>
        </div>
        <button class="btn-main btn-buy" onclick="openOrderModal(${p.id})">🛒 Замовити зараз</button>
        <a href="https://t.me/zatyshno_ua_bot" target="_blank" class="btn-tg-sm">✈️ Запитати в Telegram</a>
        <p class="ret-note">⚠️ Акційні товари поверненню не підлягають. Повернення — 14 днів.</p>
      </div>
    </div>

    ${related.length ? `
    <div class="related-section">
      <h3 class="related-title">Схожі товари</h3>
      <div class="related-grid">${related.map(renderCard).join('')}</div>
    </div>` : ''}
  </div>`;
}

function switchImg(src, thumb) {
  document.getElementById('mainImg').src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ── ORDER MODAL ──────────────────────────────────────────
function openOrderModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const existing = document.getElementById('orderModal');
  if (existing) existing.remove();

  const m = document.createElement('div');
  m.id = 'orderModal';
  m.className = 'modal-overlay';
  m.innerHTML = `
  <div class="modal">
    <div class="modal-head">
      <div>
        <p class="modal-label">Оформлення замовлення</p>
        <p class="modal-prod">${p.title} — ${p.price.toLocaleString('uk')} грн</p>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body" id="mBody">
      <div class="form-row">
        <div class="fg"><label>ПІБ отримувача *</label><input id="fName" placeholder="Іваненко Іван Іванович"></div>
        <div class="fg"><label>Телефон *</label><input id="fPhone" placeholder="+380991234567" type="tel"></div>
      </div>
      <div class="fg"><label>Місто *</label><input id="fCity" placeholder="Київ"></div>
      <div class="fg">
        <label>Служба доставки *</label>
        <div class="delivery-opts">
          <label class="dopt active" id="dopt1" onclick="selDel(this,'nova')"><input type="radio" name="del" checked><div><b>🟡 Нова Пошта</b><span>від 79 грн</span></div></label>
          <label class="dopt" id="dopt2" onclick="selDel(this,'ukr')"><input type="radio" name="del"><div><b>🔵 Укрпошта</b><span>від 69 грн (тільки передплата)</span></div></label>
        </div>
      </div>
      <div class="fg"><label>Номер відділення *</label><input id="fPost" placeholder="7"></div>
      <div class="fg">
        <label>Спосіб оплати *</label>
        <div class="pay-opts">
          <label class="popt active" id="popt1" onclick="selPay(this,'cod')"><input type="radio" name="pay" checked><div><b>💵 Накладений платіж</b><span>100 грн одразу, решта при отриманні</span></div></label>
          <label class="popt" id="popt2" onclick="selPay(this,'pre')"><input type="radio" name="pay"><div><b>💳 Передплата</b><span>По посиланню від агрегатора</span></div></label>
        </div>
      </div>
      <div class="fg"><label>Коментар</label><input id="fComment" placeholder="Колір, розмір, уточнення..."></div>
      <button class="btn-main btn-submit" id="submitBtn" onclick="doOrder(${p.id})">Підтвердити замовлення →</button>
      <p class="form-note">⚠️ Акційні товари поверненню не підлягають. Повернення — 14 днів після оформлення.</p>
    </div>
    <div class="modal-success" id="mSuccess" style="display:none">
      <div class="success-ico">✅</div>
      <h3>Замовлення прийнято!</h3>
      <p>Менеджер зв'яжеться з вами найближчим часом.<br>Робочий час: 9:00–21:00</p>
    </div>
  </div>`;

  document.body.appendChild(m);
  document.body.style.overflow = 'hidden';
  setTimeout(() => m.classList.add('open'), 10);

  m.addEventListener('click', e => { if (e.target === m) closeModal(); });

  window._delVal = 'nova';
  window._payVal = 'cod';
}

function closeModal() {
  const m = document.getElementById('orderModal');
  if (m) { m.classList.remove('open'); setTimeout(()=>m.remove(), 300); }
  document.body.style.overflow = '';
}

function selDel(el, val) {
  window._delVal = val;
  document.querySelectorAll('.dopt').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
}
function selPay(el, val) {
  window._payVal = val;
  document.querySelectorAll('.popt').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
}

async function doOrder(productId) {
  const p   = PRODUCTS.find(x => x.id === productId);
  const btn = document.getElementById('submitBtn');
  const name = document.getElementById('fName')?.value.trim();
  const phone= document.getElementById('fPhone')?.value.trim();
  const city = document.getElementById('fCity')?.value.trim();
  const post = document.getElementById('fPost')?.value.trim();
  const comment = document.getElementById('fComment')?.value.trim();

  if (!name||!phone||!city||!post) { showToast('⚠️ Заповніть всі обов\'язкові поля!'); return; }

  btn.disabled = true;
  btn.textContent = 'Відправляємо...';

  const deliveryMap = {nova:'🟡 Нова Пошта (від 79 грн)', ukr:'🔵 Укрпошта (від 69 грн)'};
  const payMap      = {cod:'💵 Накладений платіж (100 грн одразу)', pre:'💳 Повна передплата'};

  const ok = await sendOrder(p, {
    name, phone, city, post, comment,
    delivery: deliveryMap[window._delVal],
    payment:  payMap[window._payVal],
  });

  if (ok) {
    document.getElementById('mBody').style.display = 'none';
    document.getElementById('mSuccess').style.display = 'block';
  } else {
    btn.disabled = false;
    btn.textContent = 'Підтвердити замовлення →';
    showToast('❌ Помилка відправки. Спробуйте через Telegram.');
  }
}

// ═══════════════════════════════════════════════════════
//  CONTROLS
// ═══════════════════════════════════════════════════════
function setFilter(f) { state.filter = f; state.offset = 0; render(); }
function setSort(s)   { state.sort   = s; state.offset = 0; render(); }
function onSearch(v)  { state.search = v; state.offset = 0; render(); }
function loadMore()   { state.offset += PER_PAGE; render(); }

function navigate(page, productId=null) {
  if (page==='product') location.hash = `/product/${productId}`;
  else location.hash = '';
}

// ═══════════════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function initAnimations() {
  // counter
  document.querySelectorAll('.stat-n[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const start = performance.now();
    const dur = 1800;
    function step(now) {
      const p = Math.min((now-start)/dur,1);
      const e = 1-Math.pow(1-p,3);
      el.textContent = Math.round(e*target);
      if (p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  // reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);