"use client"

import { useEffect, useRef, useState } from "react"
import KadimTaslarSection from "./components/KadimTaslarSection"
import KadimTaslarModal from "./components/KadimTaslarModal"
import MuhurlerSection from "./components/MuhurlerSection"
import MuhurlerModal from "./components/MuhurlerModal"
import IzlerSections from "./components/IzlerSections"
import IzlerZoomModal from "./components/IzlerZoomModal"
import IzlerActionModals from "./components/IzlerActionModals"
import MainHero from "./components/MainHero"
import FeaturedArtifact from "./components/FeaturedArtifact"
import SiteFooter from "./components/SiteFooter"
import SecretModal from "./components/SecretModal"
import YankilarSection from "./components/YankilarSection"
import {
  artifacts,
  coverings,
  decreeAuction,
  echoArchive,
  echoTabs,
  headwear,
  knots,
  sealTabs,
  seals,
  stones,
  uniqueEcho,
} from "./data/remzData"

export default function RemzLandingPage() {

const audioRef = useRef<HTMLAudioElement>(null)

const [zoomed, setZoomed] = useState(false)
const [fullscreen, setFullscreen] = useState(false)
const [fullscreenReady, setFullscreenReady] = useState(false)
const [selectedImage, setSelectedImage] = useState("/archive-1.png")
const [portalOpen, setPortalOpen] = useState(false)
const [secretOpen, setSecretOpen] = useState(false)
const [loading, setLoading] = useState(true)
const [ownershipOpen, setOwnershipOpen] = useState(false)
const [ownershipStep, setOwnershipStep] = useState(1)
const [ownershipComplete, setOwnershipComplete] = useState(false)
const [headwearOpen, setHeadwearOpen] = useState(false)
const [headwearStep, setHeadwearStep] = useState(1)
const [headwearComplete, setHeadwearComplete] = useState(false)
const [stoneOpen, setStoneOpen] = useState(false)
const [stoneStep, setStoneStep] = useState(1)
const [stoneComplete, setStoneComplete] = useState(false)
const [sealOpen, setSealOpen] = useState(false)
const [sealStep, setSealStep] = useState(1)
const [sealComplete, setSealComplete] = useState(false)
const [openGate, setOpenGate] = useState<string | null>(null)
const [gateFocus, setGateFocus] = useState(false)
const [selectedSection, setSelectedSection] = useState("izler")
const [selectedRoom, setSelectedRoom] = useState("")
const [selectedCovering, setSelectedCovering] = useState("esarplar")
const [selectedKnot, setSelectedKnot] = useState("kravatlar")
const [selectedHeadwear, setSelectedHeadwear] = useState("sapkalar")
const [selectedStone, setSelectedStone] = useState("tesbihler")
const [selectedSeal, setSelectedSeal] = useState("objeler")
const [selectedEcho, setSelectedEcho] = useState("essiz")
const [coveringOpen, setCoveringOpen] = useState(false)
const [coveringStep, setCoveringStep] = useState(1)
const [coveringComplete, setCoveringComplete] = useState(false)


const currentStoneCategory =
  stones[selectedStone as keyof typeof stones]
const currentStone =
  currentStoneCategory.find((item) => item.image === selectedImage) ??
  currentStoneCategory[0]



const currentSealCategory =
  seals[selectedSeal as keyof typeof seals]
const currentSeal =
  currentSealCategory.find((item) => item.image === selectedImage) ??
  currentSealCategory[0]

useEffect(() => {
  if (zoomed) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }

  return () => {
    document.body.style.overflow = ""
  }
}, [zoomed])







const currentCovering =
  coverings[selectedCovering as keyof typeof coverings].find(
    (item) => item.image === selectedImage
  )
  const currentKnot =
  knots[selectedKnot as keyof typeof knots].find(
    (item) => item.image === selectedImage
  )

  const currentHeadwear =
  headwear[selectedHeadwear as keyof typeof headwear].find(
    (item) => item.image === selectedImage
  )
  
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
  if (e.key !== "Escape") return

  if (fullscreen) {
    setFullscreen(false)
    return
  }

  if (zoomed) {
    setZoomed(false)
    return
  }

  if (stoneOpen) {
    setStoneOpen(false)
    setStoneStep(1)
    return
  }

  if (sealOpen) {
    setSealOpen(false)
    setSealStep(1)
    return
  }

  if (secretOpen) {
    setSecretOpen(false)
  }
}

  window.addEventListener("keydown", handleEscape)

  return () => {
    window.removeEventListener("keydown", handleEscape)
  }
}, [fullscreen, zoomed, stoneOpen, secretOpen])
const archiveRef = useRef<HTMLDivElement>(null)
const coveringsRef = useRef<HTMLDivElement>(null)
const knotsRef = useRef<HTMLDivElement>(null)
const headwearRef = useRef<HTMLDivElement>(null)
const stonesRef = useRef<HTMLDivElement>(null)
const sealsRef = useRef<HTMLDivElement>(null)
useEffect(() => {
  const coverings = coveringsRef.current

  if (!coverings) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    coverings.scrollLeft += e.deltaY
  }

  coverings.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    coverings.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])
useEffect(() => {
  const knots = knotsRef.current

  if (!knots) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    knots.scrollLeft += e.deltaY
  }

  knots.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    knots.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])

useEffect(() => {
  const headwear = headwearRef.current

  if (!headwear) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    headwear.scrollLeft += e.deltaY
  }

  headwear.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    headwear.removeEventListener("wheel", handleWheel)
  }
}, [selectedRoom])

useEffect(() => {
  const stones = stonesRef.current

  if (!stones) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    stones.scrollLeft += e.deltaY
  }

  stones.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    stones.removeEventListener("wheel", handleWheel)
  }
}, [selectedSection, selectedStone])

useEffect(() => {
  const seals = sealsRef.current

  if (!seals) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    e.stopPropagation()

    seals.scrollLeft += e.deltaY
  }

  seals.addEventListener("wheel", handleWheel, {
    passive: false,
  })

  return () => {
    seals.removeEventListener("wheel", handleWheel)
  }
}, [selectedSection, selectedSeal])

const zoomArchiveRef = useRef<HTMLDivElement>(null)
useEffect(() => {
  const archive = archiveRef.current

  if (!archive) return

  const handleWheel = (e: WheelEvent) => {
    if (window.innerWidth < 768) return

    e.preventDefault()
    archive.scrollLeft += e.deltaY
  }

  archive.addEventListener("wheel", handleWheel, { passive: false })

  return () => {
    archive.removeEventListener("wheel", handleWheel)
  }
}, [])

useEffect(() => {
  const archive = zoomArchiveRef.current

  if (!archive) return

  const handleWheel = (e: WheelEvent) => {
  if (window.innerWidth < 768) return

  e.preventDefault()
  archive.scrollLeft += e.deltaY
}

  archive.addEventListener("wheel", handleWheel, { passive: false })

  return () => {
    archive.removeEventListener("wheel", handleWheel)
  }
}, [zoomed])

useEffect(() => {
  const playAudio = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.07
        await audioRef.current.play()
      }
    } catch (err) {
      console.log("Autoplay blocked")
    }
  }

  playAudio()
}, [])

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1800)

  return () => clearTimeout(timer)
}, [])

useEffect(() => {
  const disableRightClick = (e: MouseEvent) => {
    e.preventDefault()
  }

  document.addEventListener("contextmenu", disableRightClick)

  return () => {
    document.removeEventListener("contextmenu", disableRightClick)
  }
}, [])

return (
  <>

<div className="min-h-screen text-[#d1d1d1] overflow-hidden relative bg-black">

    <MainHero
  loading={loading}
  audioRef={audioRef}
  zoomed={zoomed}
  secretOpen={secretOpen}
  gateFocus={gateFocus}
  openGate={openGate}
  selectedRoom={selectedRoom}
  sealTabs={sealTabs}
  echoTabs={echoTabs}
  setOpenGate={setOpenGate}
  setGateFocus={setGateFocus}
  setSelectedSection={setSelectedSection}
  setSelectedRoom={setSelectedRoom}
  setSelectedCovering={setSelectedCovering}
  setSelectedKnot={setSelectedKnot}
  setSelectedHeadwear={setSelectedHeadwear}
  setSelectedStone={setSelectedStone}
  setSelectedSeal={setSelectedSeal}
  setSelectedEcho={setSelectedEcho}
  setSelectedImage={setSelectedImage}
  setPortalOpen={setPortalOpen}
/>

<FeaturedArtifact
  portalOpen={portalOpen}
  selectedImage={selectedImage}
  selectedSection={selectedSection}
  selectedRoom={selectedRoom}
  setStoneStep={setStoneStep}
  setStoneOpen={setStoneOpen}
  setSealStep={setSealStep}
  setSealOpen={setSealOpen}
  setLoading={setLoading}
  setZoomed={setZoomed}
/>

<IzlerSections
  selectedSection={selectedSection}
  selectedRoom={selectedRoom}
  archiveRef={archiveRef}
  artifacts={artifacts}
  setPortalOpen={setPortalOpen}
  setSelectedImage={setSelectedImage}
  selectedCovering={selectedCovering}
  setSelectedCovering={setSelectedCovering}
  coverings={coverings}
  coveringsRef={coveringsRef}
  selectedKnot={selectedKnot}
  setSelectedKnot={setSelectedKnot}
  knots={knots}
  knotsRef={knotsRef}
  selectedHeadwear={selectedHeadwear}
  setSelectedHeadwear={setSelectedHeadwear}
  headwear={headwear}
  headwearRef={headwearRef}
/>

{selectedSection === "kadimtaslar" && (
  <KadimTaslarSection
    stones={stones}
    selectedStone={selectedStone}
    stonesRef={stonesRef}
    setSelectedStone={setSelectedStone}
    setSelectedRoom={setSelectedRoom}
    setSelectedImage={setSelectedImage}
    setPortalOpen={setPortalOpen}
    setSelectedSection={setSelectedSection}
    setStoneStep={setStoneStep}
  />
)}

{selectedSection === "muhurler" && (
  <MuhurlerSection
    sealTabs={sealTabs}
    seals={seals}
    selectedSeal={selectedSeal}
    sealsRef={sealsRef}
    setSelectedSeal={setSelectedSeal}
    setSelectedRoom={setSelectedRoom}
    setSelectedSection={setSelectedSection}
    setSelectedImage={setSelectedImage}
    setPortalOpen={setPortalOpen}
    setSealStep={setSealStep}
  />
)}

{selectedSection === "yankilar" && (
  <YankilarSection
    echoTabs={echoTabs}
    selectedEcho={selectedEcho}
    uniqueEcho={uniqueEcho}
    echoArchive={echoArchive}
    decreeAuction={decreeAuction}
    setSelectedEcho={setSelectedEcho}
    setSelectedRoom={setSelectedRoom}
    setSelectedImage={setSelectedImage}
    setPortalOpen={setPortalOpen}
  />
)}

<KadimTaslarModal
  stoneOpen={stoneOpen}
  stoneStep={stoneStep}
  stoneComplete={stoneComplete}
  selectedImage={selectedImage}
  selectedStone={selectedStone}
  currentStone={currentStone}
  setStoneOpen={setStoneOpen}
  setStoneStep={setStoneStep}
  setStoneComplete={setStoneComplete}
/>

<MuhurlerModal
  sealOpen={sealOpen}
  sealStep={sealStep}
  sealComplete={sealComplete}
  selectedImage={selectedImage}
  selectedSeal={selectedSeal}
  currentSeal={currentSeal}
  setSealOpen={setSealOpen}
  setSealStep={setSealStep}
  setSealComplete={setSealComplete}
/>

<SiteFooter setSecretOpen={setSecretOpen} />

<IzlerZoomModal
  zoomed={zoomed}
  selectedSection={selectedSection}
  fullscreen={fullscreen}
  selectedImage={selectedImage}
  selectedRoom={selectedRoom}
  artifacts={artifacts}
  currentCovering={currentCovering}
  currentKnot={currentKnot}
  currentHeadwear={currentHeadwear}
  selectedCovering={selectedCovering}
  coverings={coverings}
  selectedKnot={selectedKnot}
  knots={knots}
  selectedHeadwear={selectedHeadwear}
  headwear={headwear}
  zoomArchiveRef={zoomArchiveRef}
  setFullscreen={setFullscreen}
  setZoomed={setZoomed}
  setCoveringOpen={setCoveringOpen}
  setHeadwearStep={setHeadwearStep}
  setHeadwearOpen={setHeadwearOpen}
  setOwnershipStep={setOwnershipStep}
  setOwnershipOpen={setOwnershipOpen}
  setSelectedImage={setSelectedImage}
/>

<IzlerActionModals
  ownershipOpen={ownershipOpen}
  ownershipStep={ownershipStep}
  ownershipComplete={ownershipComplete}
  coveringOpen={coveringOpen}
  coveringStep={coveringStep}
  coveringComplete={coveringComplete}
  headwearOpen={headwearOpen}
  headwearStep={headwearStep}
  headwearComplete={headwearComplete}
  selectedImage={selectedImage}
  currentCovering={currentCovering}
  currentHeadwear={currentHeadwear}
  setOwnershipOpen={setOwnershipOpen}
  setOwnershipStep={setOwnershipStep}
  setOwnershipComplete={setOwnershipComplete}
  setCoveringOpen={setCoveringOpen}
  setCoveringStep={setCoveringStep}
  setCoveringComplete={setCoveringComplete}
  setHeadwearOpen={setHeadwearOpen}
  setHeadwearStep={setHeadwearStep}
  setHeadwearComplete={setHeadwearComplete}
  setZoomed={setZoomed}
/>

<SecretModal secretOpen={secretOpen} setSecretOpen={setSecretOpen} />

        </div>
        
  </>
  
  )
  
  
  
  
}
