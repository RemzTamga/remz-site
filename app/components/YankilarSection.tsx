"use client"

type EchoTab = {
  key: string
  label: string
  image: string
}

type UniqueEcho = {
  image: string
  title: string
  code: string
  status: string
  note: string
  price: string
}

type EchoArchiveItem = {
  image: string
  title: string
  date: string
  status: string
}

type DecreeAuction = {
  image: string
  title: string
  code: string
  opening: string
  current: string
  remaining: string
  lastBid: string
}

type YankilarSectionProps = {
  echoTabs: EchoTab[]
  selectedEcho: string
  uniqueEcho: UniqueEcho
  echoArchive: EchoArchiveItem[]
  decreeAuction: DecreeAuction
  setSelectedEcho: (value: string) => void
  setSelectedRoom: (value: string) => void
  setSelectedImage: (value: string) => void
  setPortalOpen: (value: boolean) => void
}

export default function YankilarSection({
  echoTabs,
  selectedEcho,
  uniqueEcho,
  echoArchive,
  decreeAuction,
  setSelectedEcho,
  setSelectedRoom,
  setSelectedImage,
  setPortalOpen,
}: YankilarSectionProps) {
  const activeLabel =
    echoTabs.find((item) => item.key === selectedEcho)?.label ?? "Eşsiz"

  return (
    <section id="yankilar" className="relative z-20 px-6 md:px-24 pb-20">
      <div className="mb-8">
        <div className="uppercase tracking-[0.42em] text-[11px] text-[#6f655c] mb-6">
          Yankılar
        </div>

        <h3 className="text-[26px] md:text-[42px] leading-[1.05] text-[#8b7a67] max-w-3xl">
          Ferman Okundu,
          <br />
          Hüküm Yankılandı
        </h3>
      </div>

      <div className="flex gap-6 mb-12 flex-wrap">
        {echoTabs.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setSelectedEcho(item.key)
              setSelectedRoom(item.label)
              setSelectedImage(item.image)
              setPortalOpen(false)
            }}
            className={`uppercase tracking-[0.25em] text-[11px] px-6 py-3 border transition-all duration-500 ${
              selectedEcho === item.key
                ? "border-[#8b7a67] text-[#d6d0c7]"
                : "border-[#2a2a2a] text-[#5e564e]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {selectedEcho === "essiz" && (
        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] gap-14 items-center">
          <div className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
            <img
              src={uniqueEcho.image}
              alt={uniqueEcho.title}
              className="relative z-10 max-h-[520px] w-auto object-contain opacity-95"
              onError={(e) => {
                e.currentTarget.src = "/muhur.png"
              }}
            />
          </div>

          <div className="max-w-xl">
            <div className="uppercase tracking-[0.35em] text-[10px] text-[#6f655c] mb-6">
              {activeLabel} / {uniqueEcho.code}
            </div>

            <h4 className="text-[34px] md:text-[54px] leading-[0.95] text-[#d6d0c7]">
              {uniqueEcho.title}
            </h4>

            <p className="mt-8 text-[#81786f] leading-relaxed text-[16px]">
              {uniqueEcho.note}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 text-[12px] uppercase tracking-[0.2em]">
              <div className="border border-[#24201b] p-5">
                <div className="text-[#5e564e] mb-3">Durum</div>
                <div className="text-[#b1a08d]">{uniqueEcho.status}</div>
              </div>

              <div className="border border-[#24201b] p-5">
                <div className="text-[#5e564e] mb-3">Kayıt Bedeli</div>
                <div className="text-[#b1a08d]">{uniqueEcho.price}</div>
              </div>
            </div>

            <button className="mt-10 border border-[#3a3128] px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] bg-black/20">
              Sahiplen
            </button>
          </div>
        </div>
      )}

      {selectedEcho === "iz" && (
        <div>
          <div className="max-w-2xl mb-10 text-[#81786f] leading-relaxed text-[15px]">
            Kaçırılan tek eserler burada susmaz. Her biri, koruyucusunu bulduktan
            sonra iz olarak kalır.
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {echoArchive.map((item) => (
              <div key={item.title} className="group">
                <div className="h-[260px] flex items-center justify-center overflow-hidden border border-[#1f1a16] bg-black/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[240px] w-auto object-contain opacity-85 transition-all duration-700 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.src = "/muhur.png"
                    }}
                  />
                </div>

                <div className="mt-5 text-[#d2cbc2] text-[18px]">
                  {item.title}
                </div>

                <div className="mt-3 flex justify-between gap-4 text-[#6f655c] text-[11px] uppercase tracking-[0.2em]">
                  <span>{item.date}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedEcho === "hukum" && (
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,0.75fr)] gap-14 items-center">
          <div className="relative min-h-[440px] flex items-center justify-center overflow-hidden">
            <img
              src={decreeAuction.image}
              alt={decreeAuction.title}
              className="relative z-10 max-h-[540px] w-auto object-contain opacity-95"
              onError={(e) => {
                e.currentTarget.src = "/muhur.png"
              }}
            />
          </div>

          <div className="max-w-xl border-l border-[#2a211a] pl-8">
            <div className="uppercase tracking-[0.35em] text-[10px] text-[#6f655c] mb-6">
              Müzayede Salonu / {decreeAuction.code}
            </div>

            <h4 className="text-[34px] md:text-[54px] leading-[0.95] text-[#d6d0c7]">
              {decreeAuction.title}
            </h4>

            <div className="mt-10 space-y-5 text-[13px]">
              <div className="flex justify-between border-b border-[#1d1a17] pb-4">
                <span className="text-[#5e564e] uppercase tracking-[0.22em]">
                  Başlangıç
                </span>
                <span className="text-[#b1a08d]">{decreeAuction.opening}</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1a17] pb-4">
                <span className="text-[#5e564e] uppercase tracking-[0.22em]">
                  Son Teklif
                </span>
                <span className="text-[#d6d0c7]">{decreeAuction.current}</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1a17] pb-4">
                <span className="text-[#5e564e] uppercase tracking-[0.22em]">
                  Kalan Süre
                </span>
                <span className="text-[#b1a08d]">{decreeAuction.remaining}</span>
              </div>

              <div className="flex justify-between border-b border-[#1d1a17] pb-4">
                <span className="text-[#5e564e] uppercase tracking-[0.22em]">
                  Son Katılan
                </span>
                <span className="text-[#81786f]">{decreeAuction.lastBid}</span>
              </div>
            </div>

            <button className="mt-10 border border-[#3a3128] px-10 py-5 uppercase tracking-[0.32em] text-[11px] text-[#b1a08d] bg-black/20">
              Teklif Ver
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
