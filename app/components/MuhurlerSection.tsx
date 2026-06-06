"use client"

import type { Dispatch, RefObject, SetStateAction } from "react"

type SealItem = {
  image: string
  title: string
}

type SealTab = {
  key: string
  label: string
  image: string
}

type MuhurlerSectionProps = {
  sealTabs: SealTab[]
  seals: Record<string, SealItem[]>
  selectedSeal: string
  sealsRef: RefObject<HTMLDivElement | null>
  setSelectedSeal: Dispatch<SetStateAction<string>>
  setSelectedRoom: Dispatch<SetStateAction<string>>
  setSelectedSection: Dispatch<SetStateAction<string>>
  setSelectedImage: Dispatch<SetStateAction<string>>
  setPortalOpen: Dispatch<SetStateAction<boolean>>
  setSealStep: Dispatch<SetStateAction<number>>
}

export default function MuhurlerSection({
  sealTabs,
  seals,
  selectedSeal,
  sealsRef,
  setSelectedSeal,
  setSelectedRoom,
  setSelectedSection,
  setSelectedImage,
  setPortalOpen,
  setSealStep,
}: MuhurlerSectionProps) {
  return (
    <section id="muhurler" className="relative z-20 px-6 md:px-24 pb-16">
      <div className="mb-8">
        <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
          Mühürler
        </div>

        <h3 className="text-[26px] md:text-[40px] leading-[1.05] text-[#8b7a67] max-w-2xl">
          Sessizce Saklanan Mühür Hatıraları
        </h3>
      </div>

      <div className="flex gap-6 mb-10 flex-wrap">
        {sealTabs.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setSelectedSeal(item.key)
              setSelectedRoom(item.label)
              setSelectedImage(item.image)
              setPortalOpen(false)
            }}
            className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
              selectedSeal === item.key
                ? "border-[#8b7a67] text-[#d6d0c7]"
                : "border-[#2a2a2a] text-[#5e564e]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        ref={sealsRef}
        onWheel={(e) => {
          e.preventDefault()
          e.stopPropagation()
          e.currentTarget.scrollLeft += e.deltaY
        }}
        className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 px-2 no-scrollbar max-w-full"
      >
        {seals[selectedSeal].map((item, index) => (
          <div
            key={item.image}
            className="group flex-shrink-0 w-[150px] md:w-[170px]"
          >
            <div className="overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(198,161,91,0.30)]">
              <img
                src={item.image}
                alt={`Mühür ${index + 1}`}
                onError={(e) => {
                  e.currentTarget.src = "/muhur.png"
                }}
                onClick={() => {
                  setSelectedSection("muhurler")
                  setPortalOpen(true)
                  setSelectedImage(item.image)
                  setSealStep(1)
                }}
                className="w-full opacity-90 transition-all duration-700 group-hover:scale-[1.03] cursor-pointer"
              />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="text-[#d2cbc2] text-[15px]">
                {item.title}
              </div>

              <div className="text-[#6f655c] text-[12px] tracking-[0.2em] uppercase mt-2">
                REMZ Mühürler
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
