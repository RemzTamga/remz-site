"use client"

type GateTab = {
  key: string
  label: string
  image: string
}

type MainHeroProps = {
  loading: any
  audioRef: any
  zoomed: any
  secretOpen: any
  gateFocus: any
  openGate: any
  selectedRoom: any
  sealTabs: GateTab[]
  echoTabs: GateTab[]
  setOpenGate: any
  setGateFocus: any
  setSelectedSection: any
  setSelectedRoom: any
  setSelectedCovering: any
  setSelectedKnot: any
  setSelectedHeadwear: any
  setSelectedStone: any
  setSelectedSeal: any
  setSelectedEcho: any
  setSelectedImage: any
  setPortalOpen: any
}

export default function MainHero(props: MainHeroProps) {
  const { loading, audioRef, zoomed, secretOpen, gateFocus, openGate, selectedRoom, sealTabs, echoTabs, setOpenGate, setGateFocus, setSelectedSection, setSelectedRoom, setSelectedCovering, setSelectedKnot, setSelectedHeadwear, setSelectedStone, setSelectedSeal, setSelectedEcho, setSelectedImage, setPortalOpen } = props

  const openMobileGate = (
    section: string,
    room: string,
    image: string,
    extra?: () => void
  ) => {
    setSelectedSection(section)
    setSelectedRoom(room)
    setSelectedImage(image)
    setPortalOpen(false)
    setOpenGate(null)
    setGateFocus(false)
    extra?.()

    window.scrollTo({
      top: 900,
      behavior: "smooth",
    })
  }

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
  className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-20 perf-layer"
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
    
{gateFocus && (
  <div className="fixed inset-0 z-40 overflow-hidden pointer-events-none">

    <div className="absolute inset-0 bg-black/30" />

    <video
      autoPlay
      muted
      loop
      playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20 perf-layer"
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
  
  className="absolute inset-0 bg-cover bg-center opacity-30 scale-[1.08] transition-all duration-[4000ms] pointer-events-none perf-layer"
  style={{
    backgroundImage: "url('/hero-bg.png')",
  }}
></div>

{/* Moving Light */}
<div className="absolute inset-0 overflow-hidden">

  <div
    className="absolute -left-[10%] top-0 h-full w-[50%]
    bg-gradient-to-r from-transparent via-orange-200/20 to-transparent
    rotate-12 blur-2xl animate-pulse perf-layer"
  ></div>

</div>
{/* Atmospheric Gradient */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 z-[1] w-full h-full object-cover opacity-25 pointer-events-none perf-layer"
>
  <source src="/sis.webm" type="video/webm" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/95 pointer-events-none"></div>


{/* Hero Section */}
<section className="relative z-10 min-h-[70vh] flex flex-col items-start justify-center px-6 md:px-24 text-left">


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
  setSelectedSection("izler")
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
    setSelectedSection("izler")
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
    setSelectedSection("izler")
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
    setSelectedSection("izler")
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

<div className="relative">

  <span
    onClick={() =>
      setOpenGate(openGate === "kadimtaslar" ? null : "kadimtaslar")
    }
    className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
  >
    Kadim Taşlar
  </span>

  {openGate === "kadimtaslar" && (
    <div className="absolute top-[24px] left-0 z-200 w-[180px] border border-[#2b241d]/40 bg-black/70 backdrop-blur-3xl p-6 rounded-[12px]">

      <div
  onClick={() => {
  setSelectedSection("kadimtaslar")
  setSelectedRoom("Tesbihler")
  setSelectedStone("tesbihler")
  setSelectedImage("/tesbih1.png")
  setPortalOpen(false)
  setOpenGate(null)
  setGateFocus(false)

  window.scrollTo({
  top: 900,
  behavior: "smooth",
})
}}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Tesbihler
</div>

      <div
 onClick={() => {
  setSelectedSection("kadimtaslar")
  setSelectedRoom("Kolyeler")
  setSelectedStone("kolyeler")
  setSelectedImage("/kolye1.png")
  setPortalOpen(false)
  setOpenGate(null)
  setGateFocus(false)

  window.scrollTo({
  top: 900,
  behavior: "smooth",
})
}}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Kolyeler
</div>

      <div
  onClick={() => {
  setSelectedSection("kadimtaslar")
  setSelectedRoom("Bileklikler")
  setSelectedStone("bileklikler")
  setSelectedImage("/bileklik1.png")
  setPortalOpen(false)
  setOpenGate(null)
  setGateFocus(false)

  window.scrollTo({
  top: 900,
  behavior: "smooth",
})
}}
  className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
>
  Bileklikler
</div>

    </div>
  )}

  

</div>
<span className="opacity-20">·</span>

<div className="relative">
  <span
    onClick={() =>
      setOpenGate(openGate === "muhurler" ? null : "muhurler")
    }
    className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
  >
    Mühürler
  </span>

  {openGate === "muhurler" && (
    <div className="absolute top-[24px] left-0 z-200 w-[210px] border border-[#2b241d]/40 bg-black/70 backdrop-blur-3xl p-6 rounded-[12px]">
      {sealTabs.map((item) => (
        <div
          key={item.key}
          onClick={() => {
            setSelectedSection("muhurler")
            setSelectedRoom(item.label)
            setSelectedSeal(item.key)
            setSelectedImage(item.image)
            setPortalOpen(false)
            setOpenGate(null)
            setGateFocus(false)

            window.scrollTo({
              top: 900,
              behavior: "smooth",
            })
          }}
          className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
        >
          {item.label}
        </div>
      ))}
    </div>
  )}
</div>

<span className="opacity-20">·</span>

<div className="relative">
  <span
    onClick={() =>
      setOpenGate(openGate === "yankilar" ? null : "yankilar")
    }
    className="opacity-50 hover:opacity-90 hover:text-[#8b7a67] hover:[text-shadow:0_0_12px_rgba(139,122,103,0.12)] transition-all duration-700 cursor-pointer"
  >
    Yankılar
  </span>

  {openGate === "yankilar" && (
    <div className="absolute top-[24px] left-0 z-200 w-[190px] border border-[#2b241d]/40 bg-black/70 backdrop-blur-3xl p-6 rounded-[12px]">
      {echoTabs.map((item) => (
        <div
          key={item.key}
          onClick={() => {
            setSelectedSection("yankilar")
            setSelectedRoom(item.label)
            setSelectedEcho(item.key)
            setSelectedImage(item.image)
            setPortalOpen(false)
            setOpenGate(null)
            setGateFocus(false)

            window.scrollTo({
              top: 900,
              behavior: "smooth",
            })
          }}
          className="py-2 text-[#8b7a67] uppercase tracking-[0.25em] text-[10px] cursor-pointer"
        >
          {item.label}
        </div>
      ))}
    </div>
  )}
</div>

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

        <div className="mt-14 hidden xl:flex items-center gap-6">

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

          <div className="mobile-gate-panel relative z-[120] xl:hidden mt-8 w-full max-w-[360px] border border-[#2b241d]/50 bg-black/80 backdrop-blur-2xl p-5">
            <div className="mb-4 text-[#6f655c] uppercase tracking-[0.26em] text-[10px]">
              Kapılar
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  openMobileGate("izler", "Sessiz Yüzeyler", "/archive-1.png")
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                İzler
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("izler", "Örtüler", "/esarp1.png", () =>
                    setSelectedCovering("esarplar")
                  )
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Örtüler
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("izler", "Düğümler", "/kravat1.png", () =>
                    setSelectedKnot("kravatlar")
                  )
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Düğümler
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("izler", "Başlıklar", "/sapka1.png", () =>
                    setSelectedHeadwear("sapkalar")
                  )
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Başlıklar
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("kadimtaslar", "Tesbihler", "/tesbih1.png", () =>
                    setSelectedStone("tesbihler")
                  )
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Taşlar
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("muhurler", "Objeler", "/obje1.png", () =>
                    setSelectedSeal("objeler")
                  )
                }
                className="mobile-gate-button border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Mühürler
              </button>

              <button
                type="button"
                onClick={() =>
                  openMobileGate("yankilar", "Eşsiz", "/yankilar-hukum.png", () =>
                    setSelectedEcho("essiz")
                  )
                }
                className="mobile-gate-button col-span-2 border border-[#2a2a2a] px-4 py-4 text-[#b1a08d] uppercase tracking-[0.22em] text-[10px]"
              >
                Yankılar
              </button>
            </div>
          </div>

      </section>
    </>
  )
}
