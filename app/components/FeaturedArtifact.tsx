"use client"

type FeaturedArtifactProps = {
  portalOpen: any
  selectedImage: any
  selectedSection: any
  selectedRoom: any
  setStoneStep: any
  setStoneOpen: any
  setSealStep: any
  setSealOpen: any
  setLoading: any
  setZoomed: any
}

export default function FeaturedArtifact(props: FeaturedArtifactProps) {
  const { portalOpen, selectedImage, selectedSection, selectedRoom, setStoneStep, setStoneOpen, setSealStep, setSealOpen, setLoading, setZoomed } = props

  return (
    <>
{/* Featured Artifact */}

<section id="featured-artifact" className="relative z-10 min-h-[55vh] flex items-center px-6 md:px-24 py-10">

  <div className="grid md:grid-cols-2 gap-20 items-center w-full">

   {/* Product Image */}
<div
  style={{ pointerEvents: "auto" }}
  className="group relative overflow-hidden rounded-[28px] z-10 flex items-center justify-center h-[700px] featured-mobile-frame"
>

  <img
    src={
      portalOpen
        ? selectedImage
        : selectedSection === "kadimtaslar"
        ? "/kadim-atli.png"
        : selectedSection === "muhurler"
        ? "/muhurler-ferman.png"
        : selectedSection === "yankilar"
        ? "/yankilar-hukum.png"
        : "/hero-artifact.png"
    }
    alt="REMZ Artifact"
    onError={(e) => {
      if (selectedSection === "kadimtaslar") {
        e.currentTarget.src = "/2.png"
      } else if (selectedSection === "muhurler") {
        e.currentTarget.src = "/muhur.png"
      } else if (selectedSection === "yankilar") {
        e.currentTarget.src = "/muhur.png"
      }
    }}
    draggable={false}
onContextMenu={(e) => e.preventDefault()}
    className="relative z-10 max-h-[520px] w-auto object-contain opacity-95 transition-all duration-700 group-hover:scale-[1.015] perf-hover"
  />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0">
    <div className="w-[74px] h-[74px] rounded-full border border-[#d6c2ab]/30 bg-black/30 backdrop-blur-md flex items-center justify-center">

      <div className="text-[#d6c2ab] text-[26px]">
        .
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

<div className="mt-14 flex items-center gap-8 mobile-action-row">

  <button
    onClick={() => {
  if (selectedSection === "kadimtaslar") {
    setStoneStep(1)
    setStoneOpen(true)
    return
  }

  if (selectedSection === "muhurler") {
    setSealStep(1)
    setSealOpen(true)
    return
  }

  if (selectedSection === "yankilar") {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    })
    return
  }

  if (selectedSection === "izler" && !selectedRoom) return

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
    </>
  )
}
