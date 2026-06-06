"use client"

import { useEffect, useRef, useState } from "react"

export default function RemzLandingPage() {

const audioRef = useRef<HTMLAudioElement>(null)

const [zoomed, setZoomed] = useState(false)
const [fullscreen, setFullscreen] = useState(false)
const [fullscreenReady, setFullscreenReady] = useState(false)
const [selectedImage, setSelectedImage] = useState("/archive-1.png")
const [portalOpen, setPortalOpen] = useState(false)
const [secretOpen, setSecretOpen] = useState(false)
const [loading, setLoading] = useState(true)
const [ownershipOpen, setOwnershipOpen] = useState(false)
const [ownershipStep, setOwnershipStep] = useState(1)
const [ownershipComplete, setOwnershipComplete] = useState(false)
const [headwearOpen, setHeadwearOpen] = useState(false)
const [headwearStep, setHeadwearStep] = useState(1)
const [headwearComplete, setHeadwearComplete] = useState(false)
const [openGate, setOpenGate] = useState<string | null>(null)
const [gateFocus, setGateFocus] = useState(false)
const [selectedRoom, setSelectedRoom] = useState("")
const [selectedCovering, setSelectedCovering] = useState("esarplar")
const [selectedKnot, setSelectedKnot] = useState("kravatlar")
const [selectedHeadwear, setSelectedHeadwear] = useState("sapkalar")
const [coveringOpen, setCoveringOpen] = useState(false)
const [coveringStep, setCoveringStep] = useState(1)
const [coveringComplete, setCoveringComplete] = useState(false)
useEffect(() => {
  if (zoomed) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }

  return () => {
    document.body.style.overflow = ""
  }
}, [zoomed])
const artifacts: Record<string, {
    
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

const coverings = {
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

const knots = {
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

const headwear = {
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
const currentCovering =
  coverings[selectedCovering as keyof typeof coverings].find(
    (item) => item.image === selectedImage
  )
  const currentKnot =
  knots[selectedKnot as keyof typeof knots].find(
    (item) => item.image === selectedImage
  )

  const currentHeadwear =
  headwear[selectedHeadwear as keyof typeof headwear].find(
    (item) => item.image === selectedImage
  )
  
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
  if (e.key !== "Escape") return

  if (fullscreen) {
    setFullscreen(false)
    return
  }

  if (zoomed) {
    setZoomed(false)
    return
  }

  if (secretOpen) {
    setSecretOpen(false)
  }
}

  window.addEventListener("keydown", handleEscape)

  return () => {
    window.removeEventListener("keydown", handleEscape)
  }
}, [fullscreen, zoomed, secretOpen])
const archiveRef = useRef<HTMLDivElement>(null)
const coveringsRef = useRef<HTMLDivElement>(null)
const knotsRef = useRef<HTMLDivElement>(null)
const headwearRef = useRef<HTMLDivElement>(null)
useEffect(() => {
  const coverings = coveringsRef.current

  if (!coverings) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    coverings.scrollLeft += e.deltaY
  }

  coverings.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    coverings.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])
useEffect(() => {
  const knots = knotsRef.current

  if (!knots) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    knots.scrollLeft += e.deltaY
  }

  knots.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    knots.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])

useEffect(() => {
  const headwear = headwearRef.current

  if (!headwear) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    headwear.scrollLeft += e.deltaY
  }

  headwear.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    headwear.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])

const zoomArchiveRef = useRef<HTMLDivElement>(null)
useEffect(() => {
  const archive = archiveRef.current

  if (!archive) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    archive.scrollLeft += e.deltaY
  }

  archive.addEventListener("wheel", handleWheel, { passive: false })

  return () => {
    archive.removeEventListener("wheel", handleWheel)
  }
}, [])

useEffect(() => {
  const archive = zoomArchiveRef.current

  if (!archive) return

  const handleWheel = (e: WheelEvent) => {
  if (window.innerWidth < 768) return

  e.preventDefault()
  archive.scrollLeft += e.deltaY
}

  archive.addEventListener("wheel", handleWheel, { passive: false })

  return () => {
    archive.removeEventListener("wheel", handleWheel)
  }
}, [zoomed])

useEffect(() => {
  const playAudio = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.07
        await audioRef.current.play()
      }
    } catch (err) {
      console.log("Autoplay blocked")
    }
  }

  playAudio()
}, [])

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1800)

  return () => clearTimeout(timer)
}, [])

useEffect(() => {
  const disableRightClick = (e: MouseEvent) => {
    e.preventDefault()
  }

  document.addEventListener("contextmenu", disableRightClick)

  return () => {
    document.removeEventListener("contextmenu", disableRightClick)
  }
}, [])

return (
  <>
  
    {loading && !zoomed && !secretOpen && (
  <div
  style={{ WebkitTransform: "translateZ(0)" }}
  className="hidden md:flex fixed inset-0 z-[100] bg-black items-center justify-center overflow-hidden"
>
        <video
  autoPlay
  muted
  loop
  playsInline
  className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-20"
>
          <source src="/sis.webm" type="video/webm" />
          <img
  src="/remz-seal.png"
  alt="REMZ"
  className="relative z-10 w-[220px] opacity-60 animate-pulse"
/>
        </video>
        <img
  src="/remz-seal.png"
  alt="REMZ"
  className="relative z-10 w-[140px] opacity-50"
 />

        

      </div>
    )}
    
<div
  className="min-h-screen text-[#d1d1d1] overflow-hidden relative bg-black"
>

{gateFocus && (
  <div className="fixed inset-0 z-40 overflow-hidden pointer-events-none">

    <div className="absolute inset-0 bg-black/30" />

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    >
      <source src="/sis.webm" type="video/webm" />
    </video>

  </div>
)}
<audio ref={audioRef} loop hidden>
  <source src="/ambient.mp3" type="audio/mpeg" />
</audio>

      {/* Hero Background Image */}
<div
  
  className="absolute inset-0 bg-cover bg-center opacity-30 scale-[1.08] transition-all duration-[4000ms] pointer-events-none"
  style={{
    backgroundImage: "url('/hero-bg.png')",
  }}
></div>

{/* Moving Light */}
<div className="absolute inset-0 overflow-hidden">

  <div
    className="absolute -left-[10%] top-0 h-full w-[50%]
    bg-gradient-to-r from-transparent via-orange-200/20 to-transparent
    rotate-12 blur-2xl animate-pulse"
  ></div>

</div>
{/* Atmospheric Gradient */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 z-[1] w-full h-full object-cover opacity-25 pointer-events-none"
>
  <source src="/sis.webm" type="video/webm" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/95 pointer-events-none"></div>


{/* Hero Section */}
<section className="relative z-10 min-h-[70vh] flex flex-col items-start justify-center px-10 md:px-24 text-left">


        <div className="mb-10 flex items-center justify-between w-full">

  <div className="tracking-[0.38em] uppercase text-[22px] text-[#8b7a67] opacity-70 blur-[0.3px]">
    REMZ
  </div>

  <div className={`relative hidden xl:flex items-center gap-2 uppercase tracking-[0.30em] text-[10px] transition-all duration-700 ${
  gateFocus
    ? "z-[120] text-[#b89f84] scale-[1.04]"
    : "text-[#5f584f]"
}`}>
    

   <div className="relative">

  <span
    onClick={() =>
      setOpenGate(openGate === "izler" ? null : "izler")
    }
    className="opacity-80 hover:opacity-100 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
  >
    İzler
  </span>

  {openGate === "izler" && (
    <div className="absolute top-[24px] left-0 z-200 w-[180px] border border-[#2b241d]/40 bg-black/70 backdrop-blur-3xl p-6 rounded-[12px]">

      <div
  onClick={() => {
  setSelectedRoom("Sessiz Yüzeyler")
  setOpenGate(null)
  setGateFocus(false)

  window.scrollTo({
  top: 900,
  behavior: "smooth",
})
}}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Sessiz Yüzeyler
</div>

      <div
  onClick={() => {
    setSelectedRoom("Örtüler")
setOpenGate(null)
setGateFocus(false)

window.scrollTo({
  top: 900,
  behavior: "smooth",
})
  }}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Örtüler
</div>

      <div
  onClick={() => {
    setSelectedRoom("Düğümler")
setOpenGate(null)
setGateFocus(false)

window.scrollTo({
  top: 900,
  behavior: "smooth",
})
  }}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Düğümler
</div>

      <div
  onClick={() => {
    setSelectedRoom("Başlıklar")
setOpenGate(null)
setGateFocus(false)

window.scrollTo({
  top: 900,
  behavior: "smooth",
})
  }}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Başlıklar
</div>

    </div>
  )}

</div>

<span className="opacity-20">·</span>

<span
  className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
>
  Kadim Taşlar
</span>

<span className="opacity-20">·</span>

<span
  className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
>
  Mühürler
</span>

<span className="opacity-20">·</span>

<span
  className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
>
  Yankılar
</span>

  </div>

</div>

        <img
          src="/hero-title.png"
          alt="Çağları Delen Kadim Bir Ruh"
          className="max-w-[760px] w-full opacity-95"
        />

        <p className="mt-16 max-w-xl text-[#8a8178] text-base md:text-[19px] leading-relaxed tracking-[0.06em] font-light">
          Kadim Sırların Sessizliği.
        </p>
        
<div className="mt-4 text-[#8b7a67] text-xs uppercase tracking-[0.25em]">
  {selectedRoom}
</div>

        <div className="mt-14 flex items-center gap-6">

          <button
  onClick={() => {
  setGateFocus(true)
  setOpenGate("izler")
}}
  className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] hover:bg-[#111111] hover:border-[#4a4036] transition-all duration-700"
>
  Kapıyı Arala
</button>

          <button className="text-[#6e6e6e] uppercase tracking-[0.25em] text-xs hover:text-[#b8b8b8] transition-all duration-500">
            Arşiv
          </button>

        </div>

      </section>
      

{/* Featured Artifact */}

<section className="relative z-10 min-h-[55vh] flex items-center px-10 md:px-24 py-10">

  <div className="grid md:grid-cols-2 gap-20 items-center w-full">

   {/* Product Image */}
<div
  style={{ pointerEvents: "auto" }}
  className="group relative overflow-hidden rounded-[28px] z-10 flex items-center justify-center h-[700px]"
>

  <img
    src={portalOpen ? selectedImage : "/hero-artifact.png"}
    alt="REMZ Artifact"
    draggable={false}
onContextMenu={(e) => e.preventDefault()}
    className="relative z-10 max-h-[520px] w-auto object-contain opacity-95 transition-all duration-700 group-hover:scale-[1.015]"
  />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0">
    <div className="w-[74px] h-[74px] rounded-full border border-[#d6c2ab]/30 bg-black/30 backdrop-blur-md flex items-center justify-center">

      <div className="text-[#d6c2ab] text-[26px]">
        ⊕
      </div>

    </div>

  </div>

</div>

    {/* Product Content */}
    <div className="max-w-xl">

      <div className="uppercase tracking-[0.25em] text-[23px] text-[#d6d0c7] mb-8">
  KADİM SIR
</div>

<p className="mt-10 text-[#81786f] leading-relaxed text-[15px] md:text-[18px]">
  Bazı sırlar yalnızca
  <br />
  kapıyı aralayanlara görünür.
</p>

<div className="mt-14 flex items-center gap-8">

  <button
    onClick={() => {
  if (!selectedRoom) return

  setLoading(true)

  setTimeout(() => {
    setLoading(false)
    setZoomed(true)
  }, 1400)
}}
    className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] hover:bg-[#111111] hover:border-[#4a4036] transition-all duration-700"
  >
    Çağrı
  </button>

  <div className="text-[#5e564e] uppercase tracking-[0.3em] text-[11px]">
    Saklı Evren
  </div>

</div>

    </div>

  </div>

</section>

{/* Archive Grid */}

{selectedRoom === "Sessiz Yüzeyler" && (
<section
  className="relative z-20 px-10 md:px-24 pb-16"
>


  <div className="mb-8">

    <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
      İzler
    </div>

    <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
      Sessizce Korunan
      Kadim İzler
    </h3>

  </div>

  <div
  ref={archiveRef}
  onWheel={(e) => {
    e.currentTarget.scrollLeft += e.deltaY
  }}
  className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-4 px-8 no-scrollbar"
>
  

    {/* Item 1 */}
    <div className="group flex-shrink-0 w-[260px] relative">

      <div className="overflow-hidden rounded-[24px]  transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">
<div
  className="absolute bottom-[-28px] left-1/2 -translate-x-1/2
w-[82%] h-[60px]
bg-[#8f6a3b]
opacity-[0.16]
blur-[55px]
rounded-full
pointer-events-none
z-0
transition-all duration-700
group-hover:opacity-[0.24]"
></div>

        <img
  src="/archive-1.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-1.png")
  }}

          alt="Archive 1"
          className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
        />

      </div>

      <div className="mt-6 flex flex-col items-center">

        <div>
          <div className="text-[#d2cbc2] text-[15px]">
            Sessiz Mühür
          </div>

          <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
            Saklı Evren
          </div>
        </div>

      </div>

    </div>

    {/* Item 2 */}
    <div className="group flex-shrink-0 w-[260px]">
      <div className="relative z-10 overflow-hidden rounded-[24px] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

        <img
  src="/archive-2.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-2.png")
  }}
          alt="Archive 2"
          className="w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

      </div>

      <div className="mt-6 flex flex-col items-center">

        <div>
          <div className="text-[#d2cbc2] text-[15px]">
            Taş Hafızası
          </div>

          <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
            REMZ Archive
          </div>
        </div>

      </div>

    </div>

    {/* Item 3 */}
    <div className="group flex-shrink-0 w-[260px]">

      <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

        <img
  src="/archive-3.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-3.png")
  }}
          alt="Archive 3"
          className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
        />

      </div>

      <div className="mt-6 flex flex-col items-center">

        <div>
          <div className="text-[#d2cbc2] text-[15px]">
            Kayıp Katman
          </div>

          <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
            REMZ Archive
          </div>
        </div>

      </div>

    </div>

 {/* Item 4 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-4.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-4.png")
  }}
      alt="Archive 4"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Karanlık İz
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

 {/* Item 5 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-5.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-5.png")
  }}
      alt="Archive 5"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Kayıp Geometri
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 6 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-6.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-6.png")
  }}
      alt="Archive 6"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Küllerin Altında
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 7 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-7.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-7.png")
  }}
      alt="Archive 7"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Zamanın Perdesi 
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 8 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-8.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-8.png")
  }}
      alt="Archive 8"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Gölgeli Yazıt
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 9 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-9.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-9.png")
  }}
      alt="Archive 9"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Kırık Mühür
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 10 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-10.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-10.png")
  }}
      alt="Archive 10"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Derin Katman
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

{/* Item 11 */}
<div className="group flex-shrink-0 w-[260px]">

  <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.35)]">

    <img
  src="/archive-11.png"
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage("/archive-11.png")
  }}
      alt="Archive 11"
      className="w-full transition-all duration-700 group-hover:scale-[1.03] opacity-90"
    />

  </div>

  <div className="mt-6 flex flex-col items-center">

    <div className="text-[#d2cbc2] text-[15px]">
      Sessiz Taşlar
    </div>

    <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
      REMZ Archive
    </div>

  </div>

</div>

  </div>

 
</section>
)}

{/* COVERINGS GRID */}

{selectedRoom === "Örtüler" && (

<section
  className="relative z-20 px-10 md:px-24 pb-16"
>

  <div className="mb-8">

    <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
      Örtüler
    </div>

    <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
      Sessizce Korunan
      Kadim Örtüler
    </h3>

  </div>

  <div className="flex gap-6 mb-10">

    <button
  onClick={() => setSelectedCovering("esarplar")}
  className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
    selectedCovering === "esarplar"
      ? "border-[#8b7a67] text-[#d6d0c7]"
      : "border-[#2a2a2a] text-[#5e564e]"
  }`}
>
  Eşarplar
</button>

<button
  onClick={() => setSelectedCovering("fularlar")}
  className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
    selectedCovering === "fularlar"
      ? "border-[#8b7a67] text-[#d6d0c7]"
      : "border-[#2a2a2a] text-[#5e564e]"
  }`}
>
  Fularlar
</button>

<button
  onClick={() => setSelectedCovering("sallar")}
  className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
    selectedCovering === "sallar"
      ? "border-[#8b7a67] text-[#d6d0c7]"
      : "border-[#2a2a2a] text-[#5e564e]"
  }`}
>
  Şallar
</button>

  </div>

  <div
    
  ref={coveringsRef}
  onWheel={(e) => {
  e.preventDefault()
  e.currentTarget.scrollLeft += e.deltaY
}}


  className="flex gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 px-2 no-scrollbar max-w-full"
>
  

    {coverings[selectedCovering as keyof typeof coverings].map((item, index) => (

  <div
    key={item.image}
    className="group flex-shrink-0 w-[260px]"
  >

    <div className="overflow-hidden rounded-2xl">

      <img
  src={item.image}
  alt={`Covering ${index + 1}`}
  onClick={() => {
    setPortalOpen(true)
    setSelectedImage(item.image)
  }}
  className="w-full opacity-90 transition-all duration-700 group-hover:scale-[1.03] cursor-pointer"
/>

    </div>

    <div className="mt-6 flex flex-col items-center">

      <div className="text-[#d2cbc2] text-[15px]">
        {item.title}
      </div>

      <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
        REMZ Coverings
      </div>

    </div>

  </div>

))}

  </div>

</section>
)}

{selectedRoom === "Düğümler" && (

<section
  className="relative z-20 px-10 md:px-24 pb-16"
>

  <div className="mb-8">

    <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
      Düğümler
    </div>

    <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
      Sessizce Korunan
      Kadim Bağlar
    </h3>

  </div>

  <div className="flex gap-6 mb-10">

    <button
      onClick={() => setSelectedKnot("kravatlar")}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedKnot === "kravatlar"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Kravatlar
    </button>

    <button
      onClick={() => setSelectedKnot("kemerler")}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedKnot === "kemerler"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Kemerler
    </button>

    <button
      onClick={() => setSelectedKnot("cuzdanlar")}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedKnot === "cuzdanlar"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Cüzdanlar
    </button>

  </div>

  <div
  ref={knotsRef}
  onWheel={(e) => {
    e.preventDefault()
    e.stopPropagation()
    e.currentTarget.scrollLeft += e.deltaY
  }}
  className="flex gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 px-2 no-scrollbar max-w-full"
>

    {knots[selectedKnot as keyof typeof knots].map((item, index) => (

      <div
        key={item.image}
        className="group flex-shrink-0 w-[260px]"
      >

        <div className="overflow-hidden rounded-2xl">

          <img
            src={item.image}
            alt={`Knot ${index + 1}`}
            onClick={() => {
              setPortalOpen(true)
              setSelectedImage(item.image)
            }}
            className="w-full opacity-90 transition-all duration-700 group-hover:scale-[1.03] cursor-pointer"
          />

        </div>

        <div className="mt-6 flex flex-col items-center">

          <div className="text-[#d2cbc2] text-[15px]">
            {item.title}
          </div>

          <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
            REMZ Düğümler
          </div>

        </div>

      </div>

    ))}

  </div>

</section>

)}

{selectedRoom === "Başlıklar" && (

<section
  className="relative z-20 px-10 md:px-24 pb-16"
>

  <div className="mb-8">

    <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
      Başlıklar
    </div>

    <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
      Sessizce Korunan
      Kadim Başlıklar
    </h3>

  </div>
<div className="flex gap-6 mb-10">

  <button
    onClick={() => setSelectedHeadwear("sapkalar")}
    className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
      selectedHeadwear === "sapkalar"
        ? "border-[#8b7a67] text-[#d6d0c7]"
        : "border-[#2a2a2a] text-[#5e564e]"
    }`}
  >
    Şapkalar
  </button>

  <button
    onClick={() => setSelectedHeadwear("kapusonlar")}
    className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
      selectedHeadwear === "kapusonlar"
        ? "border-[#8b7a67] text-[#d6d0c7]"
        : "border-[#2a2a2a] text-[#5e564e]"
    }`}
  >
    Kapüşonlar
  </button>

  <button
    onClick={() => setSelectedHeadwear("boneler")}
    className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
      selectedHeadwear === "boneler"
        ? "border-[#8b7a67] text-[#d6d0c7]"
        : "border-[#2a2a2a] text-[#5e564e]"
    }`}
  >
    Boneler
  </button>

</div>

<div className="flex gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 px-2 no-scrollbar max-w-full">

  {headwear[selectedHeadwear as keyof typeof headwear].map((item) => (

    <div
      key={item.image}
      className="group flex-shrink-0 w-[260px]"
    >

      <div className="overflow-hidden rounded-2xl">

        <img
          src={item.image}
          alt={item.title}
          onClick={() => {
            setPortalOpen(true)
            setSelectedImage(item.image)
          }}
          className="w-full opacity-90 transition-all duration-700 group-hover:scale-[1.03] cursor-pointer"
        />

      </div>

      <div className="mt-6 flex flex-col items-center">

        <div className="text-[#d2cbc2] text-[15px]">
          {item.title}
        </div>

        <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
          REMZ Başlıklar
        </div>

      </div>

    </div>

  ))}

</div>

</section>

)}

<div className="relative h-[170px] overflow-hidden">
  <img
    src="/footer-riders.png"
    alt=""
    className="absolute bottom-0 left-1/2 -translate-x-1/2
    w-[600px] max-w-none
    opacity-[0.40]
    pointer-events-none
    select-none"
  />
</div>

<footer className="relative z-10 border-t border-[#141414] py-4 px-6 text-center bg-black/30 backdrop-blur-sm">      

  <div className="text-[#6a6259] uppercase tracking-[0.48em] text-[11px] opacity-70 mb-8">
    REMZ — Tüm Sırlar Açığa Çıkmadı
  </div>

  <div className="flex justify-center">
    <img
  src="/remz-seal.png"
  alt="REMZ Seal"
  onClick={() => setSecretOpen(true)}
  className="w-[140px] opacity-40 hover:opacity-60 hover:scale-105 transition-all duration-700 cursor-pointer"
/>
  </div>

  <div className="mt-4 text-[#5f584f] text-[12px] tracking-[0.28em] uppercase opacity-60">
    Bazı sırlar, yalnızca sessizliğe emanet edilir.
  </div>

</footer>


{zoomed && (
  <div className="fixed inset-0 z-[999] bg-black/95 overflow-x-hidden overflow-y-auto">
    


    {/* Atmosphere */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    >
      <source src="/sis.webm" type="video/webm" />
    </video>

   <button
  onClick={() => {
  if (fullscreen) {
    setFullscreen(false)
  } else {
    setZoomed(false)
  }
}}
  className="fixed top-8 right-8 z-[2001] text-[#8b7a67] tracking-[0.35em] uppercase text-xs hover:opacity-60 transition"
>
  Close
</button>
    {/* Content */}
<div
  className={`relative z-10 min-h-screen items-center transition-all duration-700 overflow-x-hidden overflow-y-auto ${
    fullscreen
      ? "flex justify-center px-0 pt-0 pb-0"
      : "grid md:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] gap-10 px-10 md:px-20 pt-24 pb-10"
  }`}
>


      {/* Left Image */}
<div
  className="group relative flex justify-center items-center cursor-zoom-in w-full"
>

  <div className="w-[600px] h-[600px] flex items-center justify-center">

    <img
      src={selectedImage}
      alt="REMZ Artifact"
      onClick={() => setFullscreen(true)}
      className={`object-contain opacity-95 transition-all duration-700 cursor-zoom-in ${
        fullscreen
          ? "fixed inset-0 z-[1000] w-screen h-screen bg-black object-contain p-0"
          : "max-w-full max-h-full w-auto h-auto"
      }`}
    />

  </div>

  <div
    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(180,150,110)"
      strokeWidth="1.4"
      className="w-7 h-7"
    >
      <circle cx="11" cy="11" r="7"></circle>
      <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
    </svg>
  </div>

</div>

      {/* Right Content */}
<div className={`${fullscreen ? "hidden" : "max-w-xl w-full min-w-0"}`}>

        <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f655c] mb-8">
  Dokuma Kaydı
</div>

<div className="uppercase tracking-[0.35em] text-[10px] text-[#7b6d5d] mb-6">
  {selectedRoom === "Düğümler"
    ? "Mühürlü Düğüm"
    : "Mühürlü Dokuma"}
</div>
<h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7] break-words">
  {selectedRoom === "Sessiz Yüzeyler"
    ? artifacts[selectedImage]?.title
    : selectedRoom === "Örtüler"
    ? currentCovering?.title
    : selectedRoom === "Düğümler"
    ? currentKnot?.title
    : selectedRoom === "Başlıklar"
    ? currentHeadwear?.title
    : ""}
</h2>        <div className="mt-10 w-[120px] h-[1px] bg-[#3a3128]"></div>

        <div className="mt-10">

  <div className="uppercase tracking-[0.35em] text-[10px] text-[#5e564e] mb-4">
  {selectedRoom === "Düğümler"
    ? "Kayıp Düğüm"
    : "Kayıp Dokuma"}
</div>

  <p className="text-[#81786f] leading-relaxed text-[15px] md:text-[18px]">
  {selectedRoom === "Sessiz Yüzeyler"
    ? artifacts[selectedImage]?.lore
    : selectedRoom === "Örtüler"
    ? "Sessiz liflerde korunan mühürlü bir katman."
    : selectedRoom === "Düğümler"
    ? "Kadim bağlarda korunan mühürlü bir düğüm."
    : selectedRoom === "Başlıklar"
    ? "Kadim başlıklarda korunan mühürlü bir iz."
    : ""}
</p>

</div>

        <div className="mt-14 flex items-center gap-8 flex-wrap">
          <div className="mt-12">

  <div className="uppercase tracking-[0.35em] text-[10px] text-[#5e564e] mb-4">
    Durum
  </div>

  <div className="text-[#a3937d] text-[14px]">
  {selectedRoom === "Düğümler"
  ? "Kadim bağlarda korunuyor"
  : "Sessiz liflerde korunuyor"}
</div>

</div>

           
{selectedRoom === "Örtüler" ? (
  <button
    onClick={() => {
      setCoveringOpen(true)
    }}
    className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#7b6d5d] hover:border-[#4a4036] hover:text-[#b1a08d] transition-all duration-700"
  >
    Sessiz Dokuma
  </button>

) : selectedRoom === "Düğümler" ? (

  <button
    onClick={() => {
      setCoveringOpen(true)
    }}
    className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#7b6d5d] hover:border-[#4a4036] hover:text-[#b1a08d] transition-all duration-700"
  >
    Sessiz Düğüm
  </button>



) : selectedRoom === "Başlıklar" ? (

  <button
    onClick={() => {
      setHeadwearStep(1)
      setHeadwearOpen(true)
    }}
    className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] hover:bg-[#111111] hover:border-[#4a4036] transition-all duration-700"
  >
    Başlık Kaydı
  </button>

) : (

  <button
    onClick={() => {
      setOwnershipStep(1)
      setOwnershipOpen(true)
    }}
    className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] hover:bg-[#111111] hover:border-[#4a4036] transition-all duration-700"
  >
    Sahip Çık
  </button>

)}

          <div className="text-[#5e564e] uppercase tracking-[0.3em] text-[11px]">
            Saklı Evren
          </div>

        </div>

      </div>

    </div>
    {/* Category Strip */}

  
<div
    ref={zoomArchiveRef}
  className={`relative mt-0 w-full overflow-x-scroll overflow-y-hidden no-scrollbar z-20 ${
    fullscreen ? "hidden" : ""
  }`}
>
    <div className="flex gap-6 px-6 min-w-max items-start">

    {selectedRoom === "Örtüler" ? (

  coverings[selectedCovering as keyof typeof coverings].map((item) => (

  <div
    key={item.image}
    className="flex-shrink-0 w-[240px] flex flex-col items-center gap-1"
  >

    <img
      src={item.image}
      alt={item.title}
      onClick={() => {
        setSelectedImage(item.image)
      }}
      className={`w-full rounded-2xl transition-all duration-500 cursor-pointer ${
        selectedImage === item.image
          ? "opacity-100 scale-[1.03]"
          : "opacity-55 hover:opacity-100 hover:scale-[1.03]"
      }`}
    />

    <div className="mt-1 text-center">
      <div className="text-[#8b7a67] text-[11px] uppercase tracking-[0.18em]">
        {item.title}
      </div>
    </div>

  </div>

))

) : selectedRoom === "Düğümler" ? (

  knots[selectedKnot as keyof typeof knots].map((item) => (

  <div
  key={item.image}
  className="flex-shrink-0 w-[140px] flex flex-col items-center gap-1"
>

    <img
      src={item.image}
      alt={item.title}
      onClick={() => {
        setSelectedImage(item.image)
      }}
      className={`w-full rounded-2xl transition-all duration-500 cursor-pointer ${
        selectedImage === item.image
          ? "opacity-100 scale-[1.03]"
          : "opacity-55 hover:opacity-100 hover:scale-[1.03]"
      }`}
    />

    <div className="mt-1 text-center">
      <div className="text-[#8b7a67] text-[11px] uppercase tracking-[0.18em]">
        {item.title}
      </div>
    </div>

  </div>

))

) : selectedRoom === "Başlıklar" ? (

  headwear[selectedHeadwear as keyof typeof headwear].map((item) => (

    <div
      key={item.image}
      className="flex-shrink-0 w-[140px] flex flex-col items-center gap-1"
    >

      <img
        src={item.image}
        alt={item.title}
        onClick={() => {
          setSelectedImage(item.image)
        }}
        className={`w-full rounded-2xl transition-all duration-500 cursor-pointer ${
          selectedImage === item.image
            ? "opacity-100 scale-[1.03]"
            : "opacity-55 hover:opacity-100 hover:scale-[1.03]"
        }`}
      />

      <div className="mt-1 text-center">
        <div className="text-[#8b7a67] text-[11px] uppercase tracking-[0.18em]">
          {item.title}
        </div>
      </div>

    </div>

  ))


) : (

  Object.entries(artifacts)
    .filter(([_, item]) => item.category === "garments")
    .map(([image, item]) => (

      <div
        key={image}
        className="flex-shrink-0 w-[220px] flex flex-col items-center gap-1"
      >

        <img
          src={image}
          alt={item.title}
          onClick={() => {
            setSelectedImage(image)
          }}
          className={`w-full rounded-2xl transition-all duration-500 cursor-pointer ${
            selectedImage === image
              ? "opacity-100 scale-[1.03]"
              : "opacity-55 hover:opacity-100 hover:scale-[1.03]"
          }`}
        />

        <div className="mt-1 text-center">
          <div className="text-[#8b7a67] text-[11px] uppercase tracking-[0.18em]">
            {item.title}
          </div>
        </div>

      </div>

    ))

)}

</div>
</div>
</div>

)}

{ownershipOpen && (
  <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-10">

    <button
      onClick={() => setOwnershipOpen(false)}
      className="absolute top-8 right-8 text-[#8b7a67] uppercase tracking-[0.3em] text-xs"
    >
      Close
    </button>

    <div className="grid md:grid-cols-2 gap-20 items-center w-full max-w-6xl">

      {/* Sol taraf */}
      <div className="flex justify-center">
        <img
          src={selectedImage}
          alt="Artifact"
          className="max-h-[70vh] object-contain"
        />
      </div>

      {/* Sağ taraf */}
      <div>

        {ownershipStep === 1 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f655c] mb-8">
              Endam
            </div>

            <h2 className="text-[42px] text-[#d6d0c7] mb-10">
              Endam Seç
            </h2>

            <div className="flex gap-4 mb-12">

              <button className="border border-[#333] px-6 py-3">
                S
              </button>

              <button className="border border-[#333] px-6 py-3">
                M
              </button>

              <button className="border border-[#333] px-6 py-3">
                L
              </button>

              <button className="border border-[#333] px-6 py-3">
                XL
              </button>

            </div>
            

            <button
              onClick={() => setOwnershipStep(2)}
              className="border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>
          </>
        )}

        {ownershipStep === 2 && (
  <>
    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f655c] mb-8">
      Muhteviyat
    </div>

    <h2 className="text-[42px] text-[#d6d0c7] mb-10">
      Eser Kaydı
    </h2>

    <div className="space-y-6 mb-12 text-[#8f857a]">

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Kalan Eser</span>
        <span>100</span>
      </div>

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Yüzey</span>
        <span>%100 Pamuk</span>
      </div>

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Baskı Tekniği</span>
        <span>DTF</span>
      </div>

    </div>

   <button
  onClick={() => setOwnershipStep(3)}
  className="border border-[#333] px-8 py-4"
>
  İLERLE →
</button>

  </>
)}
{ownershipStep === 3 && (
  <>
    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f655c] mb-8">
      Kayıt Bedeli
    </div>

    <h2 className="text-[42px] text-[#d6d0c7] mb-10">
      Koruyucu Kaydı
    </h2>

    <div className="mb-12">

      <div className="text-[#8f857a] text-lg">
        Bu eserin kayıt bedeli
      </div>

      <div className="mt-4 text-[48px] text-[#d6d0c7]">
        2.500 TL
      </div>

    </div>
    

    <button
      onClick={() => setOwnershipStep(4)}
      className="border border-[#333] px-8 py-4"
    >
      İLERLE →
    </button>

  </>
)}
{ownershipStep === 4 && (
  <>
    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f655c] mb-8">
  Ulak
</div>

<h2 className="text-[42px] text-[#d6d0c7] mb-10">
  İzin Süreceği Yol
</h2>

    <div className="space-y-5 mb-10">

      <input
        type="text"
        placeholder="Koruyucu Adı"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

      <input
        type="text"
        placeholder="0 (5__) ___ __ __"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

      <input
        type="text"
        placeholder="Ulak Noktası"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

      <input
        type="text"
        placeholder="Bölge"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

    </div>

    <button
  onClick={() => {
    setCoveringOpen(false)
    setCoveringStep(1)
    setCoveringComplete(true)
  }}
  className="mt-12 border border-[#333] px-8 py-4"
>
  SAHİPLEN →
</button>

  </>
)}
      </div>

    </div>

  </div>
)}
{ownershipComplete && (
  <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center">
<button
  onClick={() => setOwnershipComplete(false)}
  className="absolute top-8 right-8 text-[#8b7a67] uppercase tracking-[0.3em] text-xs"
>
  Close
</button>

    <div className="text-center">

      <div className="uppercase tracking-[0.45em] text-[11px] text-[#8b7a67] mb-8">
        Koruyucu Bulundu
      </div>

      <div className="relative inline-block">

        <img
          src={selectedImage}
          alt="Owned Artifact"
          className="max-h-[60vh] object-contain opacity-90"
        />

        <img
  src="/muhur.png"
  alt="Sahiplenildi"
  className="absolute inset-0 m-auto
  w-[55%]
  opacity-60
  rotate-[-18deg]
  translate-x-[6%]
  translate-y-[-4%]
  pointer-events-none"
/>

      </div>
      <button
  onClick={() => {
    setOwnershipComplete(false)
    setOwnershipOpen(false)
    setZoomed(false)
  }}
  className="mt-12 border border-[#333] px-8 py-4 uppercase tracking-[0.3em] text-[#b1a08d]"
>
  Arşive Dön
</button>

    </div>

  </div>
)}

{coveringComplete && (
  <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center">

    <button
      onClick={() => setCoveringComplete(false)}
      className="absolute top-8 right-8 text-[#8b7a67] uppercase tracking-[0.3em] text-xs"
    >
      Close
    </button>

    <div className="text-center">

      <div className="uppercase tracking-[0.45em] text-[11px] text-[#8b7a67] mb-8">
        Koruyucu Bulundu
      </div>

      <div className="relative inline-block">

        <img
          src={selectedImage}
          alt="Owned Covering"
          className="max-h-[60vh] object-contain opacity-90"
        />

        <img
          src="/muhur.png"
          alt="Sahiplenildi"
          className="absolute inset-0 m-auto
          w-[55%]
          opacity-60
          rotate-[-18deg]
          translate-x-[6%]
          translate-y-[-4%]
          pointer-events-none"
        />

      </div>

      <button
        onClick={() => {
          setCoveringComplete(false)
          setCoveringOpen(false)
          setZoomed(false)
        }}
        className="mt-12 border border-[#333] px-8 py-4 uppercase tracking-[0.3em] text-[#b1a08d]"
      >
        Arşive Dön
      </button>

    </div>

  </div>
)}

{coveringOpen && (
  <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6 overflow-hidden">

    <button
      onClick={() => setCoveringOpen(false)}
      className="absolute top-8 right-8 text-[#8b7a64] text-sm tracking-[0.3em] uppercase hover:opacity-70 transition"
    >
      Close
    </button>

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    >
      <source src="/sis.webm" type="video/webm" />
    </video>

    <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center w-full max-w-6xl">

      <div className="flex justify-center">
        <img
          src={selectedImage}
          alt="Sessiz Dokuma"
          className="max-h-[78vh] object-contain opacity-95"
        />
      </div>

      <div>

        {coveringStep === 1 && (
  <div>

    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
      Sessiz Dokuma
    </div>

    <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
      {currentCovering?.title}
    </h2>

    <div className="mt-10 w-[120px] h-[1px] bg-[#3a3128]"></div>

    <p className="mt-10 text-[#81786f] leading-relaxed text-[15px] md:text-[18px] max-w-lg">
      Sessiz liflerde korunan mühürlü bir katman.
    </p>

    <div className="mt-14 flex items-center gap-8">

      <button
        onClick={() => setCoveringStep(2)}
        className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d]"
      >
        Lif Kaydı
      </button>

    </div>

  </div>
)}


{coveringStep === 2 && (
  <div>

    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
      Lif Kaydı
    </div>

    <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
      {currentCovering?.title}
    </h2>

    <div className="mt-10 w-[120px] h-[1px] bg-[#3a3128]"></div>

    <div className="space-y-6 mt-10 text-[#8f857a] max-w-md">

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Dokuma</span>
        <span>Mühürlü Lif</span>
      </div>

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Katman</span>
        <span>Arşiv Dokusu</span>
      </div>

      <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
        <span>Durum</span>
        <span>Sessiz Koruma</span>
      </div>

    </div>

    <button
      onClick={() => setCoveringStep(3)}
      className="mt-12 border border-[#333] px-8 py-4"
    >
      İLERLE →
    </button>

  </div>
)}

{coveringStep === 3 && (
  <div>

    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
      Dokuma Bedeli
    </div>

    <h2 className="text-[42px] text-[#d6d0c7] mb-10">
      Kayıt Bedeli
    </h2>

    <div className="text-[#8f857a] text-lg">
      Bu dokumanın kayıt bedeli
    </div>

    <div className="mt-4 text-[48px] text-[#d6d0c7]">
      2.500 TL
    </div>

    <button
      onClick={() => setCoveringStep(4)}
      className="mt-12 border border-[#333] px-8 py-4"
    >
      İLERLE →
    </button>

  </div>
)}

{coveringStep === 4 && (
  <div>

    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
      Koruyucu Kaydı
    </div>

    <h2 className="text-[42px] text-[#d6d0c7] mb-10">
      Koruyucu Bilgileri
    </h2>

    <div className="space-y-5">

      <input
        type="text"
        placeholder="Koruyucu Adı"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

      <input
        type="text"
        placeholder="0 (5__) ___ __ __"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

    </div>

    <button
      onClick={() => setCoveringStep(5)}
      className="mt-12 border border-[#333] px-8 py-4"
    >
      İLERLE →
    </button>

  </div>
)}

{coveringStep === 5 && (
  <div>

    <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
      Ulak
    </div>

    <h2 className="text-[42px] text-[#d6d0c7] mb-10">
      İzin Süreceği Yol
    </h2>

    <div className="space-y-5">

      <input
        type="text"
        placeholder="Ulak Noktası"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

      <input
        type="text"
        placeholder="Bölge"
        className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
      />

    </div>

    <button
  onClick={() => {
    setCoveringOpen(false)
    setCoveringStep(1)
    setCoveringComplete(true)
  }}
  className="mt-12 border border-[#333] px-8 py-4"
>
  SAHİPLEN →
</button>

  </div>
  
)}
</div>
</div>
</div>
)}

{headwearOpen && (
  <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6 overflow-hidden">

    <button
      onClick={() => {
        setHeadwearOpen(false)
        setHeadwearStep(1)
      }}
      className="absolute top-8 right-8 text-[#8b7a64] text-sm tracking-[0.3em] uppercase hover:opacity-70 transition"
    >
      Close
    </button>

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    >
      <source src="/sis.webm" type="video/webm" />
    </video>

    <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center w-full max-w-6xl">

      {/* Sol taraf */}
      <div className="flex justify-center">
        <img
          src={selectedImage}
          alt="Başlık"
          className="max-h-[78vh] object-contain opacity-95"
        />
      </div>

      {/* Sağ taraf */}
      <div>

        {headwearStep === 1 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Başlık Kaydı
            </div>

            <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
              {currentHeadwear?.title}
            </h2>

            <div className="mt-10 w-[120px] h-[1px] bg-[#3a3128]"></div>

            <p className="mt-10 text-[#81786f] leading-relaxed text-[15px] md:text-[18px] max-w-lg">
              Kadim başlıklarda korunan mühürlü bir iz.
            </p>

            <button
              onClick={() => setHeadwearStep(2)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>
          </>
        )}

        {headwearStep === 2 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Başlık Muhteviyatı
            </div>

            <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
              {currentHeadwear?.title}
            </h2>

            <div className="space-y-6 mt-10 text-[#8f857a] max-w-md">

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Tür</span>
                <span>Başlık</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Durum</span>
                <span>Sessiz Koruma</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Kayıt</span>
                <span>Mühürlü</span>
              </div>

            </div>

            <button
              onClick={() => setHeadwearStep(3)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>
          </>
        )}

        {headwearStep === 3 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Kayıt Bedeli
            </div>

            <h2 className="text-[42px] text-[#d6d0c7] mb-10">
              Koruyucu Kaydı
            </h2>

            <div className="text-[#8f857a] text-lg">
              Bu başlığın kayıt bedeli
            </div>

            <div className="mt-4 text-[48px] text-[#d6d0c7]">
              2.500 TL
            </div>

            <button
              onClick={() => setHeadwearStep(4)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>
          </>
        )}

        {headwearStep === 4 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Koruyucu Kaydı
            </div>

            <h2 className="text-[42px] text-[#d6d0c7] mb-10">
              Koruyucu Bilgileri
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Koruyucu Adı"
                className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
              />

              <input
                type="text"
                placeholder="0 (5__) ___ __ __"
                className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
              />

            </div>

            <button
              onClick={() => setHeadwearStep(5)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>
          </>
        )}

        {headwearStep === 5 && (
          <>
            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Ulak
            </div>

            <h2 className="text-[42px] text-[#d6d0c7] mb-10">
              İzin Süreceği Yol
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Ulak Noktası"
                className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
              />

              <input
                type="text"
                placeholder="Bölge"
                className="w-full bg-transparent border border-[#222] px-5 py-4 text-[#d6d0c7]"
              />

            </div>

            <button
  onClick={() => {
    setHeadwearOpen(false)
    setHeadwearStep(1)
    setHeadwearComplete(true)
  }}
  className="mt-12 border border-[#333] px-8 py-4"
>
  SAHİPLEN →
</button>
          </>
        )}

      </div>

    </div>

  </div>
)}

{headwearComplete && (
  <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center">

    <button
      onClick={() => setHeadwearComplete(false)}
      className="absolute top-8 right-8 text-[#8b7a67] uppercase tracking-[0.3em] text-xs"
    >
      Close
    </button>

    <div className="text-center">

      <div className="uppercase tracking-[0.45em] text-[11px] text-[#8b7a67] mb-8">
        Koruyucu Bulundu
      </div>

      <div className="relative inline-block">

        <img
          src={selectedImage}
          alt="Owned Headwear"
          className="max-h-[60vh] object-contain opacity-90"
        />

        <img
          src="/muhur.png"
          alt="Sahiplenildi"
          className="absolute inset-0 m-auto w-[55%] opacity-60 rotate-[-18deg] translate-x-[6%] translate-y-[-4%] pointer-events-none"
        />

      </div>

      <button
        onClick={() => {
          setHeadwearComplete(false)
          setZoomed(false)
        }}
        className="mt-12 border border-[#333] px-8 py-4 uppercase tracking-[0.3em] text-[#b1a08d]"
      >
        Arşive Dön
      </button>

    </div>

  </div>
)}

{secretOpen && (
  <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6 overflow-hidden">

    <button
      onClick={() => setSecretOpen(false)}
      className="absolute top-8 right-8 text-[#8b7a64] text-sm tracking-[0.3em] uppercase hover:opacity-70 transition"
    >
      Close
    </button>

    <div className="text-center max-w-5xl">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
  style={{ mixBlendMode: "screen" }}
>
  <source src="/sis.webm" type="video/webm" />
</video>

      <div className="mb-6 text-[#6f6254] tracking-[0.45em] uppercase text-[11px]">
        Unregistered Artifact
      </div>

      <img
        src="/hidden-artifact.png"
        alt="Secret Artifact"
        className="max-h-[78vh] mx-auto object-contain opacity-95"
      />

      <div className="mt-8 text-[#5f584f] tracking-[0.28em] uppercase text-[12px]">
        Accessed Through The REMZ Seal
      </div>

    </div>
  </div>
  
)}

        </div>
        
  </>
  
  )
  
  
  
  
}