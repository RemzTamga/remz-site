"use client"

type SecretModalProps = {
  secretOpen: any
  setSecretOpen: any
}

export default function SecretModal({ secretOpen, setSecretOpen }: SecretModalProps) {
  return (
    <>
{secretOpen && (
  <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6 overflow-hidden">

    <button
      onClick={() => setSecretOpen(false)}
      className="absolute top-8 right-8 text-[#8b7a64] text-sm tracking-[0.3em] uppercase hover:opacity-70 transition"
    >
      Close
    </button>

    <div className="text-center max-w-5xl">
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

      <div className="mb-6 text-[#6f6254] tracking-[0.45em] uppercase text-[11px]">
        Unregistered Artifact
      </div>

      <img
        src="/hidden-artifact.png"
        alt="Secret Artifact"
        className="max-h-[78vh] mx-auto object-contain opacity-95"
      />

      <div className="mt-8 text-[#5f584f] tracking-[0.28em] uppercase text-[12px]">
        Accessed Through The REMZ Seal
      </div>

    </div>
  </div>
  
)}
    </>
  )
}
