export const stones = {
  tesbihler: [
    { image: "/tesbih1.png", title: "Tesbih I" },
    { image: "/tesbih2.png", title: "Tesbih II" },
    { image: "/tesbih3.png", title: "Tesbih III" },
    { image: "/tesbih4.png", title: "Tesbih IV" },
    { image: "/tesbih5.png", title: "Tesbih V" },
    { image: "/tesbih6.png", title: "Tesbih VI" },
    { image: "/tesbih7.png", title: "Tesbih VII" },
  ],

  kolyeler: [
    { image: "/kolye1.png", title: "Kolye I" },
    { image: "/kolye2.png", title: "Kolye II" },
    { image: "/kolye3.png", title: "Kolye III" },
    { image: "/kolye4.png", title: "Kolye IV" },
    { image: "/kolye5.png", title: "Kolye V" },
    { image: "/kolye6.png", title: "Kolye VI" },
    { image: "/kolye7.png", title: "Kolye VII" },
  ],

  bileklikler: [
    { image: "/bileklik1.png", title: "Bileklik I" },
    { image: "/bileklik2.png", title: "Bileklik II" },
    { image: "/bileklik3.png", title: "Bileklik III" },
    { image: "/bileklik4.png", title: "Bileklik IV" },
    { image: "/bileklik5.png", title: "Bileklik V" },
    { image: "/bileklik6.png", title: "Bileklik VI" },
    { image: "/bileklik7.png", title: "Bileklik VII" },
  ],
}

export const seals = {
  objeler: [
    { image: "/obje1.png", title: "Obje I" },
    { image: "/obje2.png", title: "Obje II" },
    { image: "/obje3.png", title: "Obje III" },
    { image: "/obje4.png", title: "Obje IV" },
    { image: "/obje5.png", title: "Obje V" },
    { image: "/obje6.png", title: "Obje VI" },
    { image: "/obje7.png", title: "Obje VII" },
  ],

  hediyelikler: [
    { image: "/hediyelik1.png", title: "Hediyelik I" },
    { image: "/hediyelik2.png", title: "Hediyelik II" },
    { image: "/hediyelik3.png", title: "Hediyelik III" },
    { image: "/hediyelik4.png", title: "Hediyelik IV" },
    { image: "/hediyelik5.png", title: "Hediyelik V" },
    { image: "/hediyelik6.png", title: "Hediyelik VI" },
    { image: "/hediyelik7.png", title: "Hediyelik VII" },
  ],

  ozelUretimler: [
    { image: "/ozel-uretim1.png", title: "Ozel Uretim I" },
    { image: "/ozel-uretim2.png", title: "Ozel Uretim II" },
    { image: "/ozel-uretim3.png", title: "Ozel Uretim III" },
    { image: "/ozel-uretim4.png", title: "Ozel Uretim IV" },
    { image: "/ozel-uretim5.png", title: "Ozel Uretim V" },
    { image: "/ozel-uretim6.png", title: "Ozel Uretim VI" },
    { image: "/ozel-uretim7.png", title: "Ozel Uretim VII" },
  ],

  hatiralar: [
    { image: "/hatira1.png", title: "Hatira I" },
    { image: "/hatira2.png", title: "Hatira II" },
    { image: "/hatira3.png", title: "Hatira III" },
    { image: "/hatira4.png", title: "Hatira IV" },
    { image: "/hatira5.png", title: "Hatira V" },
    { image: "/hatira6.png", title: "Hatira VI" },
    { image: "/hatira7.png", title: "Hatira VII" },
  ],
}

export const sealTabs = [
  { key: "objeler", label: "Objeler", image: "/obje1.png" },
  { key: "hediyelikler", label: "Hediyelikler", image: "/hediyelik1.png" },
  { key: "ozelUretimler", label: "Ozel Uretimler", image: "/ozel-uretim1.png" },
  { key: "hatiralar", label: "Hatiralar", image: "/hatira1.png" },
]

export const echoTabs = [
  { key: "essiz", label: "Eşsiz", image: "/yankilar-hukum.png" },
  { key: "iz", label: "İz", image: "/yankilar-hukum.png" },
  { key: "hukum", label: "Hüküm", image: "/yankilar-hukum.png" },
]

export const uniqueEcho = {
  image: "/yankilar-hukum.png",
  title: "Ayın Eşsiz Eseri",
  code: "Tek Eser 001",
  status: "Koruyucusunu Bekliyor",
  note: "Bir kez görünür, bir kez sahiplenilir, bir daha üretilmez.",
  price: "12.500 TL",
}

export const echoArchive = [
  {
    image: "/yankilar-hukum.png",
    title: "Sessiz Hüküm",
    date: "Mayıs 2026",
    status: "Koruyucusu Bulundu",
  },
  {
    image: "/muhurler-ferman.png",
    title: "Ferman Mührü",
    date: "Nisan 2026",
    status: "İz'e Geçti",
  },
  {
    image: "/kadim-atli.png",
    title: "Ulak Gölgesi",
    date: "Mart 2026",
    status: "Tek Üretimdi",
  },
]

export const decreeAuction = {
  image: "/yankilar-hukum.png",
  title: "Hüküm Eseri",
  code: "Müzayede 001",
  opening: "8.000 TL",
  current: "14.500 TL",
  remaining: "03 Gün 11 Saat",
  lastBid: "Koruyucu Adayı 07",
}

export const artifacts: Record<string, {
    
  category: string
  title: string
  lore: string
  code: string
}> = {
  "/archive-1.png": {
    category: "garments",
    title: "Sessiz Mühür",
    lore: "Kadim yüzeylerde saklanan kırık bir iz.",
    code: "Fragment 001"
  },

  "/archive-2.png": {
    category: "garments",
    title: "Taş Hafızası",
    lore: "Taşın içinde yaşayan unutulmuş yankılar.",
    code: "Fragment 002"
  },

  "/archive-3.png": {
    category: "garments",
    title: "Kayıp Katman",
    lore: "Derin yüzeylerde saklanan sessiz bir iz.",
    code: "Fragment 003"
  },

  "/archive-4.png": {
    category: "garments",
    title: "Karanlık İz",
    lore: "Gölgelerin altında mühürlenmiş bir katman.",
    code: "Fragment 004"
  },

  "/archive-5.png": {
    category: "garments",
    title: "Kayıp Geometri",
    lore: "Kırılmış taş düzenlerinde yaşayan şekiller.",
    code: "Fragment 005"
  },

  "/archive-6.png": {
    category: "garments",
    title: "Küllerin Altında",
    lore: "Sessizliğe gömülmüş kadim yüzeyler.",
    code: "Fragment 006"
  },

  "/archive-7.png": {
    category: "garments",
    title: "Zamanın Perdesi",
    lore: "Kadim geçmişe açılan sessiz bir geçit.",
    code: "Fragment 007"
  },

  "/archive-8.png": {
    category: "garments",
    title: "Gölgeli Yazıt",
    lore: "Silinmiş sembollerin geride bıraktığı izler.",
    code: "Fragment 008"
  },

  "/archive-9.png": {
    category: "garments",
    title: "Kırık Mühür",
    lore: "Parçalanmış yüzeylerde yaşayan eski bir işaret.",
    code: "Fragment 009"
  },

  "/archive-10.png": {
    category: "garments",
    title: "Derin Katman",
    lore: "Taşın altında saklanan sessiz ağırlık.",
    code: "Fragment 010"
  },

  "/archive-11.png": {
    category: "garments",
    title: "Sessiz Taşlar",
    lore: "Unutulmuş yüzeylerde yankılanan sessizlik.",
    code: "Fragment 011"
  }
}

export const coverings = {
  esarplar: [
    {
      image: "/esarp1.png",
      title: "Shakhinura",
    },
    {
      image: "/esarp2.png",
      title: "Yıldız Mührü",
    },
    {
      image: "/esarp3.png",
      title: "Açılan Katman",
    },
    {
      image: "/esarp4.png",
      title: "Sessiz İz",
    },
    {
      image: "/esarp5.png",
      title: "Kırık Katman",
    },
    {
      image: "/esarp6.png",
      title: "Taşın Hafızası",
    },
    {
      image: "/esarp7.png",
      title: "Gölgeli Yüzey",
    },
  ],

  fularlar: [
    {
      image: "/fular1.png",
      title: "Kadim Geçit",
    },
    {
      image: "/fular2.png",
      title: "Kayıp Mühür",
    },
    {
      image: "/fular3.png",
      title: "Sessiz Kırılma",
    },
  ],

  sallar: [
    {
      image: "/sal1.png",
      title: "Derin Katman",
    },
    {
      image: "/sal2.png",
      title: "Taş Yankısı",
    },
    {
      image: "/sal3.png",
      title: "Karanlık İz",
    },
  ],
}

export const knots = {
  kravatlar: [
    {
      image: "/kravat1.png",
      title: "Sessiz Düğüm",
    },
    {
      image: "/kravat2.png",
      title: "Kırık Mühür",
    },
    {
      image: "/kravat3.png",
      title: "Taş Katmanı",
    },
    {
      image: "/kravat4.png",
      title: "Derin İz",
    },
    {
      image: "/kravat5.png",
      title: "Gölgeli Kayıt",
    },
  ],

  kemerler: [
    {
      image: "/kemer1.png",
      title: "Taş Çemberi",
    },
    {
      image: "/kemer2.png",
      title: "Kadim Bağ",
    },
    {
      image: "/kemer3.png",
      title: "Sessiz Hat",
    },
    {
      image: "/kemer4.png",
      title: "Mühürlü Yol",
    },
    {
      image: "/kemer5.png",
      title: "Kırık Katman",
    },
  ],

  cuzdanlar: [
    {
      image: "/cuzdan1.png",
      title: "İlk Mühür",
    },
    {
      image: "/cuzdan2.png",
      title: "Taş Hafızası",
    },
    {
      image: "/cuzdan3.png",
      title: "Sessiz Yazıt",
    },
    {
      image: "/cuzdan4.png",
      title: "Derin Katman",
    },
    {
      image: "/cuzdan5.png",
      title: "Kayıp İz",
    },
  ],
}

export const headwear = {
  sapkalar: [
    { image: "/sapka1.png", title: "Başlık I" },
    { image: "/sapka2.png", title: "Başlık II" },
    { image: "/sapka3.png", title: "Başlık III" },
    { image: "/sapka4.png", title: "Başlık IV" },
    { image: "/sapka5.png", title: "Başlık V" },
    { image: "/sapka6.png", title: "Başlık VI" },
    { image: "/sapka7.png", title: "Başlık VII" },
  ],

  kapusonlar: [
    { image: "/kapuson1.png", title: "Kapüşon I" },
    { image: "/kapuson2.png", title: "Kapüşon II" },
    { image: "/kapuson3.png", title: "Kapüşon III" },
    { image: "/kapuson4.png", title: "Kapüşon IV" },
    { image: "/kapuson5.png", title: "Kapüşon V" },
    { image: "/kapuson6.png", title: "Kapüşon VI" },
    { image: "/kapuson7.png", title: "Kapüşon VII" },
  ],

  boneler: [
    { image: "/bone1.png", title: "Bone I" },
    { image: "/bone2.png", title: "Bone II" },
    { image: "/bone3.png", title: "Bone III" },
    { image: "/bone4.png", title: "Bone IV" },
    { image: "/bone5.png", title: "Bone V" },
    { image: "/bone6.png", title: "Bone VI" },
    { image: "/bone7.png", title: "Bone VII" },
  ],
}
