"use client"

type IzlerActionModalsProps = {
  ownershipOpen: any
  ownershipStep: any
  ownershipComplete: any
  coveringOpen: any
  coveringStep: any
  coveringComplete: any
  headwearOpen: any
  headwearStep: any
  headwearComplete: any
  selectedImage: any
  currentCovering: any
  currentHeadwear: any
  setOwnershipOpen: any
  setOwnershipStep: any
  setOwnershipComplete: any
  setCoveringOpen: any
  setCoveringStep: any
  setCoveringComplete: any
  setHeadwearOpen: any
  setHeadwearStep: any
  setHeadwearComplete: any
  setZoomed: any
}

export default function IzlerActionModals(props: IzlerActionModalsProps) {
  const { ownershipOpen, ownershipStep, ownershipComplete, coveringOpen, coveringStep, coveringComplete, headwearOpen, headwearStep, headwearComplete, selectedImage, currentCovering, currentHeadwear, setOwnershipOpen, setOwnershipStep, setOwnershipComplete, setCoveringOpen, setCoveringStep, setCoveringComplete, setHeadwearOpen, setHeadwearStep, setHeadwearComplete, setZoomed } = props

  return (
    <>
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
    setOwnershipOpen(false)
    setOwnershipStep(1)
    setOwnershipComplete(true)
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
  onClick={() => {
    setOwnershipComplete(false)
    setOwnershipOpen(false)
    setOwnershipStep(1)
  }}
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
    setOwnershipStep(1)
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
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none perf-layer"
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
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none perf-layer"
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
    </>
  )
}
