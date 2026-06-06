"use client"

import type { RefObject } from "react"

type KadimTaslarSectionProps = {
  stones: Record<string, Array<{ image: string; title: string }>>
  selectedStone: string
  stonesRef: RefObject<HTMLDivElement | null>
  setSelectedStone: (value: string) => void
  setSelectedRoom: (value: string) => void
  setSelectedImage: (value: string) => void
  setPortalOpen: (value: boolean) => void
  setSelectedSection: (value: string) => void
  setStoneStep: (value: number) => void
}

export default function KadimTaslarSection({
  stones,
  selectedStone,
  stonesRef,
  setSelectedStone,
  setSelectedRoom,
  setSelectedImage,
  setPortalOpen,
  setSelectedSection,
  setStoneStep,
}: KadimTaslarSectionProps) {
  return (
<section
  id="kadim-taslar"
  className="relative z-20 px-6 md:px-24 pb-16"
>

  <div className="mb-8">

    <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
      Kadim Taşlar
    </div>

    <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
      Sessizce Korunan
      Taş Hafızaları
    </h3>

  </div>

  <div className="flex gap-6 mb-10 flex-wrap">

    <button
      onClick={() => {
        setSelectedStone("tesbihler")
        setSelectedRoom("Tesbihler")
        setSelectedImage("/tesbih1.png")
        setPortalOpen(false)
      }}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedStone === "tesbihler"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Tesbihler
    </button>

    <button
      onClick={() => {
        setSelectedStone("kolyeler")
        setSelectedRoom("Kolyeler")
        setSelectedImage("/kolye1.png")
        setPortalOpen(false)
      }}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedStone === "kolyeler"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Kolyeler
    </button>

    <button
      onClick={() => {
        setSelectedStone("bileklikler")
        setSelectedRoom("Bileklikler")
        setSelectedImage("/bileklik1.png")
        setPortalOpen(false)
      }}
      className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
        selectedStone === "bileklikler"
          ? "border-[#8b7a67] text-[#d6d0c7]"
          : "border-[#2a2a2a] text-[#5e564e]"
      }`}
    >
      Bileklikler
    </button>

  </div>

  <div
    ref={stonesRef}
    onWheel={(e) => {
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.scrollLeft += e.deltaY
    }}
    className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 px-2 no-scrollbar max-w-full"
  >

    {stones[selectedStone as keyof typeof stones].map((item, index) => (

      <div
        key={item.image}
        className="group flex-shrink-0 w-[150px] md:w-[170px]"
      >

        <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.30)]">

          <img
            src={item.image}
            alt={`Kadim Taş ${index + 1}`}
            onError={(e) => {
              e.currentTarget.src = "/2.png"
            }}
            onClick={() => {
  setSelectedSection("kadimtaslar")
  setPortalOpen(true)
  setSelectedImage(item.image)
  setStoneStep(1)
}}
            className="w-full opacity-90 transition-all duration-700 group-hover:scale-[1.03] cursor-pointer"
          />

        </div>

        <div className="mt-4 flex flex-col items-center">

          <div className="text-[#d2cbc2] text-[15px]">
            {item.title}
          </div>

          <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
            REMZ Kadim Taşlar
          </div>

        </div>

      </div>

    ))}

  </div>

</section>
  )
}
