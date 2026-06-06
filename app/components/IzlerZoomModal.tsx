"use client"

type IzlerZoomModalProps = {
  zoomed: any
  selectedSection: any
  fullscreen: any
  selectedImage: any
  selectedRoom: any
  artifacts: any
  currentCovering: any
  currentKnot: any
  currentHeadwear: any
  selectedCovering: any
  coverings: any
  selectedKnot: any
  knots: any
  selectedHeadwear: any
  headwear: any
  zoomArchiveRef: any
  setFullscreen: any
  setZoomed: any
  setCoveringOpen: any
  setHeadwearStep: any
  setHeadwearOpen: any
  setOwnershipStep: any
  setOwnershipOpen: any
  setSelectedImage: any
}

export default function IzlerZoomModal(props: IzlerZoomModalProps) {
  const { zoomed, selectedSection, fullscreen, selectedImage, selectedRoom, artifacts, currentCovering, currentKnot, currentHeadwear, selectedCovering, coverings, selectedKnot, knots, selectedHeadwear, headwear, zoomArchiveRef, setFullscreen, setZoomed, setCoveringOpen, setHeadwearStep, setHeadwearOpen, setOwnershipStep, setOwnershipOpen, setSelectedImage } = props

  return (
    <>
{zoomed && selectedSection === "izler" && (
  <div className="fixed inset-0 z-[999] bg-black/95 overflow-x-hidden overflow-y-auto">
    


    {/* Atmosphere */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none perf-layer"
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

  Object.entries(artifacts as Record<string, any>)
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
    </>
  )
}
