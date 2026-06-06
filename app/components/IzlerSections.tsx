"use client"

type IzlerSectionsProps = {
  selectedSection: any
  selectedRoom: any
  archiveRef: any
  artifacts: any
  setPortalOpen: any
  setSelectedImage: any
  selectedCovering: any
  setSelectedCovering: any
  coverings: any
  coveringsRef: any
  selectedKnot: any
  setSelectedKnot: any
  knots: any
  knotsRef: any
  selectedHeadwear: any
  setSelectedHeadwear: any
  headwear: any
  headwearRef: any
}

export default function IzlerSections(props: IzlerSectionsProps) {
  const { selectedSection, selectedRoom, archiveRef, artifacts, setPortalOpen, setSelectedImage, selectedCovering, setSelectedCovering, coverings, coveringsRef, selectedKnot, setSelectedKnot, knots, knotsRef, selectedHeadwear, setSelectedHeadwear, headwear, headwearRef } = props

  return (
    <>
{/* Archive Grid */}

{selectedSection === "izler" && selectedRoom === "Sessiz Yüzeyler" && (
<section
  className="relative z-20 px-6 md:px-24 pb-16"
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

{selectedSection === "izler" && selectedRoom === "Örtüler" && (

<section
  className="relative z-20 px-6 md:px-24 pb-16"
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
  

    {coverings[selectedCovering as keyof typeof coverings].map((item: any, index: number) => (

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

{selectedSection === "izler" && selectedRoom === "Düğümler" && (

<section
  className="relative z-20 px-6 md:px-24 pb-16"
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

    {knots[selectedKnot as keyof typeof knots].map((item: any, index: number) => (

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

{selectedSection === "izler" && selectedRoom === "Başlıklar" && (

<section
  className="relative z-20 px-6 md:px-24 pb-16"
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

  {headwear[selectedHeadwear as keyof typeof headwear].map((item: any) => (

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
    </>
  )
}
