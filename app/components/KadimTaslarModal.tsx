"use client"

type KadimTaslarModalProps = {
  stoneOpen: any
  stoneStep: any
  stoneComplete: any
  selectedImage: any
  selectedStone: any
  currentStone: any
  setStoneOpen: any
  setStoneStep: any
  setStoneComplete: any
}

export default function KadimTaslarModal(props: KadimTaslarModalProps) {
  const { stoneOpen, stoneStep, stoneComplete, selectedImage, selectedStone, currentStone, setStoneOpen, setStoneStep, setStoneComplete } = props

  return (
    <>
{stoneOpen && (
  <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6 overflow-hidden">

    <button
      onClick={() => {
        setStoneOpen(false)
        setStoneStep(1)
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

      <div className="flex justify-center">
        <img
          src={selectedImage}
          alt="Kadim Taş"
          className="max-h-[78vh] object-contain opacity-95"
        />
      </div>

      <div>

        {stoneStep === 1 && (
          <div>

            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Taş Kaydı
            </div>

            <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
              {currentStone?.title}
            </h2>

            <div className="mt-10 w-[120px] h-[1px] bg-[#3a3128]"></div>

            <p className="mt-10 text-[#81786f] leading-relaxed text-[15px] md:text-[18px] max-w-lg">
              Kadim taşlarda saklanan sessiz bir hafıza.
            </p>

            <div className="mt-14 flex items-center gap-8">

              <button
                onClick={() => setStoneStep(2)}
                className="border border-[#2a2a2a] bg-black/20 backdrop-blur-sm px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d]"
              >
                Taş Hafızası
              </button>

            </div>

          </div>
        )}

        {stoneStep === 2 && (
          <div>

            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Taş Muhteviyatı
            </div>

            <h2 className="text-[34px] md:text-[56px] leading-[0.92] text-[#d6d0c7]">
              {currentStone?.title}
            </h2>

            <div className="space-y-6 mt-10 text-[#8f857a] max-w-md">

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Tür</span>
                <span>
                  {selectedStone === "tesbihler"
                    ? "Tesbih"
                    : selectedStone === "kolyeler"
                    ? "Kolye"
                    : "Bileklik"}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Katman</span>
                <span>Taş Hafızası</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1d1d] pb-3">
                <span>Durum</span>
                <span>Sessiz Koruma</span>
              </div>

            </div>

            <button
              onClick={() => setStoneStep(3)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>

          </div>
        )}

        {stoneStep === 3 && (
          <div>

            <div className="uppercase tracking-[0.45em] text-[11px] text-[#6f6254] mb-6">
              Kayıt Bedeli
            </div>

            <h2 className="text-[42px] text-[#d6d0c7] mb-10">
              Koruyucu Kaydı
            </h2>

            <div className="text-[#8f857a] text-lg">
              Bu taşın kayıt bedeli
            </div>

            <div className="mt-4 text-[48px] text-[#d6d0c7]">
              2.500 TL
            </div>

            <button
              onClick={() => setStoneStep(4)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>

          </div>
        )}

        {stoneStep === 4 && (
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
              onClick={() => setStoneStep(5)}
              className="mt-12 border border-[#333] px-8 py-4"
            >
              İLERLE →
            </button>

          </div>
        )}

        {stoneStep === 5 && (
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
                setStoneOpen(false)
                setStoneStep(1)
                setStoneComplete(true)
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

{stoneComplete && (
  <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center">

    <button
      onClick={() => setStoneComplete(false)}
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
          alt="Owned Stone"
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
          setStoneComplete(false)
        }}
        className="mt-12 border border-[#333] px-8 py-4 uppercase tracking-[0.3em] text-[#b1a08d]"
      >
        Taşlara Dön
      </button>

    </div>

  </div>
)}
    </>
  )
}
