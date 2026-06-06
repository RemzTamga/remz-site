"use client"

type SiteFooterProps = {
  setSecretOpen: any
}

export default function SiteFooter({ setSecretOpen }: SiteFooterProps) {
  return (
    <>
<div className="relative h-[120px] overflow-hidden">
  <img
    src="/footer-riders.png"
    alt=""
    className="absolute bottom-0 left-1/2 -translate-x-1/2
    w-[520px] max-w-none
    opacity-[0.40]
    pointer-events-none
    select-none"
  />
</div>

<footer className="relative z-10 border-t border-[#141414] min-h-[220px] px-6 py-6 text-center bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center">      

  <div className="text-[#6a6259] uppercase tracking-[0.48em] text-[11px] opacity-70 mb-5">
    REMZ — Tüm Sırlar Açığa Çıkmadı
  </div>

  <div className="flex justify-center">
    <img
  src="/remz-seal.png"
  alt="REMZ Seal"
  onClick={() => setSecretOpen(true)}
  className="w-[108px] opacity-40 hover:opacity-60 hover:scale-105 transition-all duration-700 cursor-pointer"
/>
  </div>

  <div className="mt-5 text-[#5f584f] text-[12px] tracking-[0.28em] uppercase opacity-60">
    Bazı sırlar, yalnızca sessizliğe emanet edilir.
  </div>

</footer>
    </>
  )
}
