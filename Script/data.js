// Sample ukulele catalog — mirrors the Tamsta listing
const PRODUCTS = [
  {
    id: 20001, slug: "cort-cap810-optrailblazer acoustic", brand: "cort",
    name: "cort CAP810 Optrailblazer Acoustic Guitar",
    category: "Acoustic", price: 299.00, stock: 5, isNew: true, pack: false,
    rating: 4.8, reviews: 24,
    images: [
      "images/akustines-gitaros-komplektas-cort-cap810-op-trailblazer-pack.avif",
      "images/akustines-gitaros-komplektas-cort-cap810-op-trailblazer-pack(1).avif",
      "images/akustines-gitaros-komplektas-cort-cap810-op-trailblazer-pack(2).avif"
      ],
    short: "Acoustic Guitar Pack Cort CAP810 OP Trailblazer Pack.",
    description: "The Cort Trailblazer Pack (CAP810) is a starter set built around the full-size Cort AD810 dreadnought, with everything needed to start playing the same day. The guitar has a spruce top with mahogany back and sides, a mahogany neck and a merbau fingerboard and bridge. The body wears an Open Pore finish: thinner than a conventional lacquer, it lets the wood resonate more freely and keeps the weight down. The neck is fitted with a dovetail joint, and the body uses Advanced X bracing. The pack adds a Cort gig bag, an E310C clip-on tuner with a backlit display, a shoulder strap and medium-thickness picks.",
    features: ["Type: acoustic guitar pack","Brand: Cort","Model: Trailblazer Pack (CAP810)","Guitar: Cort AD810","Body shape: dreadnought", "Top: spruce","Back and sides: mahogany","Bracing: Advanced X", "Neck: mahogany, C shape", "Neck joint: dovetail", "Truss rod: dual acting, 4 mm wrench", "Fingerboard: merbau, 400 mm radius", "Frets: 20", "Bridge: laurel", "Nut and saddle: PPS, 43 mm width","Scale length: 648 mm", "Sound hole: 100 mm", "Tuners: die-cast", "Strings: coated", "Finish: Open Pore (OP)", "Included: Cort gig bag, Cort E310C tuner, shoulder strap, picks"],    
    specs: {
      "Brand": "cort", "Model": "CAP810", "Type": "Acoustic guitar pack", "Body shape": "dreadnought", "Top": "spruce",
      "Country of origin": "China", "Warranty": "24 months"
    }
  },
  {
    id: 20002, slug: "Electro-Acoustic Guitar Epiphone J-200 Studio", brand: "Epiphone",
    name: "Electro-Acoustic Guitar Epiphone J-200 Studio EC Ebony",
    category: "Acoustic", price: 519.00, stock: 8, isNew: true, pack: false,
    rating: 4.9, reviews: 18,
    images: [
      "images/elektro-akustine-gitara-epiphone-j-200-studio-ec-ebony.avif",
      "images/elektro-akustine-gitara-epiphone-j-200-studio-ec-ebony(1).avif",
      "images/elektro-akustine-gitara-epiphone-j-200-studio-ec-ebony(2).avif"
    ],
    short: "Electro-Acoustic Guitar Epiphone J-200 Studio EC Ebony.",
    description: "The Epiphone J-200 Studio EC is an electro-acoustic guitar inspired by the legendary Gibson SJ-200, the “King of the Flat-Tops”. The large super jumbo cutaway body delivers powerful projection, while the cutaway gives easy access to the upper frets. A solid spruce top with layered maple back and sides gives a balanced, articulate tone that will open up with age. The mahogany neck is glued in with a tapered dovetail joint and has a comfortable 1960s SlimTaper D profile. The Fishman Presys II preamp with S-Core under-saddle pickup, tuner and phase switch makes it stage-ready. Ebony gloss finish, J-200 moustache bridge and imitation tortoise pickguard. Gig bag included.",
    features: ["Type: electro-acoustic guitar", "Brand: Epiphone", "Model: J-200 Studio EC", "Body shape: super jumbo cutaway", "Top: solid spruce", "Back and sides: layered maple", "Neck: mahogany, glued-in, 1960s SlimTaper D profile", "Fingerboard: rosewood, 12\" (304.8 mm) radius", "Frets: 20", "Nut: plastic, 43 mm", "Scale length: 25.5\" (647.7 mm)", "Bridge: J-200 moustache", "Electronics: Fishman Presys II, Fishman S-Core under-saddle pickup", "Controls: volume, bass, treble, phase switch, tuner", "Tuning machines: Epiphone Deluxe", "Strings: .012–.053", "Included: gig bag", "Colour: Ebony, gloss"],
    specs: {"Brand":"Epiphone","Model":"J-200 Studio EC","Type":"Acoustic","Scale length":"25.5in (647.7 mm)","Frets":"20"}
  },
  {
    id: 20003, slug: "Electro-Acoustic Guitar Furch Vintage 2 OM-SR L.R. Baggs Anthem", brand: "Furch",
    name: "Electro-Acoustic Guitar Furch Vintage",
    category: "Acoustic", price: 2609.00, stock: 5, isNew: true, pack: false,
    rating: 5.0, reviews: 31,
    images: [
      "images/elektro-akustine-gitara-furch-vintage-2-om-sr-lr-baggs-anthem.avif",
      "images/elektro-akustine-gitara-furch-vintage-2-om-sr-lr-baggs-anthem(1).avif",
      "images/elektro-akustine-gitara-furch-vintage-2-om-sr-lr-baggs-anthem(2).avif"
    ],
    short: "Electro-Acoustic Guitar Furch Vintage 2 OM-SR L.R. Baggs Anthem.",
    description: "The Furch Vintage 2 OM-SR is a 2026 Vintage series orchestra model guitar for players who appreciate traditional design. An individually voiced solid Sitka spruce top and solid Indian rosewood back and sides deliver a rich, deep tone with clear trebles and long sustain. The Full-Pore Vintage Finish leaves the wood pores open so the body resonates freely. Artificial ivory binding, herringbone purfling, a green abalone rosette and an artificial tortoise pickguard complete the vintage look. The built-in L.R. Baggs Anthem system combines an under-saddle pickup with a TRU•MIC microphone for a natural amplified sound on stage. Supplied with a Furch T-Line hard shell case.",
    features: ["Type: electro-acoustic guitar", "Manufacturer: Furch", "Model: Vintage 2 OM-SR (2026)", "Body shape: OM – orchestra model", "Top: solid Sitka spruce, AA grade", "Back and sides: solid Indian rosewood, AA grade", "Binding: artificial ivory, herringbone purfling", "Rosette: green abalone with black and white line", "Neck: African mahogany", "Neck joint: Furch CNR System® Active with automatic string action regulation", "Truss rod: two-way, carbon reinforced", "Neck profile: Furch Soft V", "Fretboard: ebony, 400 mm radius", "Bridge: ebony, TUSQ saddle", "Scale length: 650 mm", "Nut: TUSQ, 45 mm", "Pickup: L.R. Baggs Anthem – under-saddle pickup combined with a TRU•MIC microphone, volume and mix controls at the soundhole", "Finish: Full-Pore Vintage Finish", "Tuners: Gotoh SE700, gold patina, 1:15", "Strings: D'Addario XS Bronze 12-53", "Body dimensions: lower bout 378 mm, body length 490 mm", "Overall length: 1026 mm", "Included: Furch T-Line hard shell case"],
    specs: {"Brand":"Furch","Model":"Vintage 2 OM-SR (2026)","Type":"Electro-Acoustic","Scale length":"650 mm","Frets":"20"}
  },
  {
    id: 20004, slug: "Acoustic-electric guitar Yamaha TAG1 E Natural", brand: "Yamaha",
    name: "Acoustic-electric guitar Yamaha",
    category: "Acoustic", price: 811.00, stock: 6, isNew: false, pack: false,
    rating: 4.5, reviews: 42,
    images: [
      "images/elektro-akustine-gitara-yamaha-tas1e-natural.avif",
      "images/elektro-akustine-gitara-yamaha-tas1e-natural(1).avif",
      "images/elektro-akustine-gitara-yamaha-tas1e-natural(2).avif" 
     ],
    short: "Acoustic-electric guitar Yamaha TAG1 E Natural.",
    description: "The Yamaha TAG1 E Natural is a second-generation TransAcoustic guitar that creates reverb and chorus inside the body itself, with no amp or cables needed. An actuator inside the guitar vibrates the top, so the effects come naturally from the instrument. The dreadnought body with solid spruce top and mahogany back and sides delivers a full, rich tone with strong low end, while the comfortable mahogany neck with walnut fingerboard suits long practice sessions. A line output lets you connect to an amp or mixer on stage. A hard bag is included.",
    features: ["Type: acoustic-electric guitar with TransAcoustic technology", "Brand: Yamaha", "Model: TAG1 E (2nd generation)", "Body shape: dreadnought", "Top: solid spruce", "Back and sides: mahogany", "Neck: mahogany", "Fingerboard and bridge: walnut", "Fingerboard radius: 400 mm", "Scale length: 650 mm", "Nut width: 44 mm", "Electronics: TransAcoustic SYSTEM70", "Controls: reverb, chorus, line out volume", "Connections: line out", "Tuning machines: die-cast chrome", "Strings: Elixir Nanoweb 80/20 Bronze Light", "Dimensions: body length 505 mm, width 412 mm, depth 100–125 mm, total length 1039 mm", "Color: Natural, gloss", "Included: hard bag, hex wrench"],
    specs: {"Brand":"Yamaha","Model":"TAG1 E","Type":"Acoustic-electric","Scale length":"650 mm","Frets":"20"}
  },
  {
    id: 30001, slug: "Electric guitar Ibanez AS53-TKF", brand: "Ibanez",
    name: "Electric guitar Ibanez AS53-TKF",
    category: "Electric", price: 359.00, stock: 15, isNew: false, pack: false,
    rating: 4.2, reviews: 56,
    images: [
      "images/elektrine-gitara-ibanez-as53-tkf.avif",
      "images/elektrine-gitara-ibanez-as53-tkf(1).avif",
      "images/elektrine-gitara-ibanez-as53-tkf(2).avif"
    ],
    short: "Electric guitar Ibanez AS53-TKF.",
    description: "The Ibanez AS53 is an Artcore semi-hollow guitar with a solid centre block and a linden body. The combination gives a warm, full tone with clear attack while keeping feedback under control at higher volumes. The set-in nyatoh neck with a bound rosewood fretboard and 22 frets suits both chord work and solo lines, and the 628 mm scale makes bending easier. Two Infinity R humbuckers with individual volume and tone controls cover jazz, blues and rock. A Gibraltar Performer bridge with a Quik Change III tailpiece makes string changes quick.",
    features: ["Type: semi-hollow electric guitar", "Brand: Ibanez", "Model: AS53 (Artcore)", "Body: linden top, back and sides", "Neck: nyatoh, set-in", "Fretboard: bound rosewood, white dot inlay", "Fretboard radius: 305 mm", "Frets: 22, medium", "Scale: 628 mm", "Nut width: 43 mm", "Bridge: Gibraltar Performer", "Tailpiece: Quik Change III", "Pickups: 2x Infinity R (H), passive, ceramic", "Hardware: chrome", "Strings: .010–.052", "Color: Transparent Black Flat"],
    specs: {"Brand":"Ibanez","Model":"AS53 (Artcore)","Type":"Electric","Scale length":"628 mm","Frets":"22"}
  },{
    id: 30002, slug: "Electric Guitar Cort G300 Pro BK", brand: "cort",
    name: "Electric Guitar Cort G300 Pro BK",
    category: "Electric", price: 649.00, stock: 10, isNew: false, pack: true,
    rating: 4.2, reviews: 72,
    images: [
      "images/elektrine-gitara-cort-g300-pro-bk.avif",
      "images/elektrine-gitara-cort-g300-pro-bk(1).avif",
      "images/elektrine-gitara-cort-g300-pro-bk(2).avif"
    ],
    short: "Electric Guitar Cort G300 Pro BK.",
    description: "The Cort G300 Pro is a modern S-style guitar loaded with Seymour Duncan SH-2N and TB-4 pickups. A 5-way Super Switch gives access to both humbucker and single-coil sounds. The basswood body has a maple top, and the roasted maple neck features an Ergo V profile with a rolled fingerboard edge. The compound radius (12in–15.75in) fingerboard with 24 tall stainless steel frets is comfortable for chords and fast lead playing alike. A Cort CFA-III tremolo, staggered locking tuners and a Graph Tech TUSQ nut keep the guitar in tune. The pack includes a Cort gig bag, strap, cable and picks.",
    features: ["Type: electric guitar", "Manufacturer: Cort", "Model: G300 Pro", "Construction: bolt-on", "Body: basswood, maple top", "Neck: roasted maple, Ergo V profile (21 mm at 1st fret, 23 mm at 12th)", "Fingerboard: roasted maple, 12in – 15.75in compound radius, rolled edges", "Frets: 24, tall medium-jumbo, stainless steel", "Scale length: 25.5in (648 mm)", "Nut: Graph Tech Black TUSQ, 42 mm", "Truss rod: two-way adjustable", "Tuning machines: Cort staggered locking", "Bridge: Cort CFA-III tremolo", "Pickups: Seymour Duncan SH-2N and TB-4 (HH)", "Controls: volume, tone, 5-way Super Switch", "Hardware: chrome", "Strings: D'Addario EXL120", "Finish: gloss body, matte neck", "Colour: Black (BK)"],
    specs: {"Brand":"Cort","Model":"G300 Pro","Type":"Electric","Scale length":"648 mm","Frets":"24"}
  },
  {
    id: 30003, slug: "Electric Guitar Epiphone ES-335 Figured Sixties Cherry with Gig Bag", brand: "Epiphone",
    name: "Electric Guitar Epiphone ES-335 Figured Sixties Cherry",
    category: "Electric", price: 639.00, stock: 7, isNew: false, pack: false,
    rating: 4.7, reviews: 29,
    images: [
      "images/elektrine-gitara-epiphone-es-335-figured-sixties-cherry-su-deklu.avif",
      "images/elektrine-gitara-epiphone-es-335-figured-sixties-cherry-su-deklu(1).avif",
      "images/elektrine-gitara-epiphone-es-335-figured-sixties-cherry-su-deklu(2).avif"
    ],
    short: "Electric Guitar Epiphone ES-335 Figured Sixties Cherry.",
    description: "The Epiphone ES-335 Figured from the Inspired by Gibson collection – a limited Sixties Cherry version with an AAA flame maple veneer top and back. The layered maple body with a solid maple centre block sounds lively and open, while the block reduces feedback and extends sustain. The glued-in mahogany neck with a rounded C profile and the Indian laurel fingerboard with 22 medium jumbo frets are comfortable for chords and lead lines alike. Two Epiphone Alnico Classic PRO humbuckers with medium output respond closely to picking dynamics – from clean jazz to overdriven rock. A LockTone Tune-O-Matic bridge, Graph Tech NuBone nut and Epiphone Deluxe tuners keep tuning stable. A gig bag is included.",
    features: ["Type: electric guitar, semi-hollow body with solid centre block", "Manufacturer: Epiphone", "Model: ES-335 Figured (Inspired by Gibson)", "Body: layered maple, AAA flame maple veneer top and back", "Centre block: maple", "Binding: 1-ply cream, top and back", "Neck: mahogany, set neck, rounded C profile", "Fingerboard: Indian laurel, 12in radius, small block inlays", "Frets: 22, medium jumbo", "Scale length: 24.724in (628 mm)", "Nut: Graph Tech NuBone, 43 mm", "Pickups: 2x Epiphone Alnico Classic PRO humbucker", "Controls: 2x volume, 2x tone (CTS), 3-way pickup selector", "Bridge: LockTone Tune-O-Matic", "Tailpiece: LockTone Stop Bar", "Tuning machines: Epiphone Deluxe", "Hardware: nickel", "Strings: .010–.046", "Included: gig bag", "Colour: Sixties Cherry, gloss"],
    specs: {"Brand":"Epiphone","Model":"ES-335 Figured","Type":"Electric","Scale length":"628 mm","Frets":"22"}
  },
  {
    id: 30004, slug: "Electric guitar Fender 75th Anniversary Vintera Road Worn 1951 Telecaster", brand: "Fender",
    name: "Electric guitar Fender 75th Anniversary Vintera Road Worn 1951 Telecaster Butterscotch Blonde",
    category: "Electric", price: 1499.00, stock: 14, isNew: false, pack: false,
    rating: 4.9, reviews: 38,
    images: [
      "images/elektrine-gitara-fender-75th-anniversary-vintera-road-worn-1951-telecaster.avif",
      "images/elektrine-gitara-fender-75th-anniversary-vintera-road-worn-1951-telecaster(1).avif",
      "images/elektrine-gitara-fender-75th-anniversary-vintera-road-worn-1951-telecaster(2).avif"
    ],
    short: "Electric guitar Fender 75th Anniversary Vintera Road Worn 1951 Telecaster Butterscotch Blonde.",
    description: "The Fender 75th Anniversary Vintera Road Worn 1951 Telecaster is a limited-edition model released for the Telecasters 75th anniversary, faithfully recreating the 1951 original. The ash body and maple neck are finished in Road Worn nitrocellulose lacquer that captures decades of playing wear. The chunky 1951 U-shape neck, 7.25in radius maple fingerboard and vintage tall frets give an authentic ’50s feel. A pair of Pure Vintage ’51 Tele pickups deliver clear, chiming and bright Telecaster tone, while the 3-saddle string-through-body bridge with brass barrel saddles keeps the classic twang. Tweed case included.",
    features: ["Type: electric guitar", "Manufacturer: Fender", "Model: 75th Anniversary Vintera Road Worn 1951 Telecaster", "Series: Limited Edition 75th Anniversary Telecaster Collection", "Body shape: Telecaster", "Body: ash"],
    specs: {"Brand":"Fender","Model":"75th Anniversary Vintera Road Worn 1951 Telecaster","Type": "Electric","Scale length":"648 mm","Frets":"21","Tuning machines": "vintage-style","Pickguard": "1-ply black","Hardware": "nickel/chrome","Strings": "Fender USA 250L .009 - .042","Color": "Butterscotch Blonde","Included": "tweed case"}
   },
  {
    id: 40001, slug: "Bass guitar Fender American Professional Jazz Bass", brand: "Fender",
    name: "Bass guitar Fender American Professional Jazz Bass RW 3-Color Sunburst",
    category: "Bass", price: 2150.00, stock: 4, isNew: false, pack: false,
    rating: 4.9, reviews: 15,
    images: [
      "images/bosine-gitara-fender-american-professional-jazz-bass-rw-3-color-sunburst.avif",
      "images/bosine-gitara-fender-american-professional-jazz-bass-rw-3-color-sunburst(1).avif",
      "images/bosine-gitara-fender-american-professional-jazz-bass-rw-3-color-sunburst(2).avif"
    ],
    short: "Bass guitar Fender American Professional Jazz Bass RW 3-Color Sunburst.",
    description: "The Fender American Professional Jazz Bass RW 3-Color Sunburst is part of the new US-made American Professional series. An alder body and maple neck with a Slim C profile deliver the classic, articulate Jazz Bass tone, while the Super-Natural satin neck finish feels fast and comfortable. Two V-Mod III single-coil pickups with individual volume controls and master tone cover everything from round to punchy tones. Rosewood fingerboard with 20 narrow tall frets, bone nut and a HiMass Pro bridge with string-through or top-load stringing. A Deluxe Molded Case is included.",
    features: ["Type: 4-string bass guitar", "Manufacturer: Fender", "Model: American Professional Jazz Bass", "Body: alder, polyurethane finish", "Neck: maple, Slim C, 5-bolt", "Fingerboard: rosewood, white dot inlays", "Fingerboard radius: 9.5\" (241 mm)", "Frets: 20, narrow tall", "Scale length: 34\" (864 mm)", "Nut: bone, 38.1 mm", "Pickups: 2 × V-Mod III Jazz Bass single-coil", "Controls: 2 volume, master tone", "Bridge: 4-saddle HiMass Pro", "Pickguard: 4-ply tortoiseshell", "Strings: Fender USA 7250M .045–.105", "Color: 3-Color Sunburst", "Included: Deluxe Molded Case"],
    specs: {"Brand":"Fender","Model":"American Professional Jazz Bass","Type": "Bass","Scale length":"864 mm","Frets":"20","Tuning machines": "vintage-style","Pickguard": "4-ply tortoiseshell","Hardware": "nickel/chrome","Strings": "Fender USA 7250M .045–.105","Color": "3-Color Sunburst","Included": "Deluxe Molded Case"}
  },
  {
    id: 40002, slug: "Bass guitar Ibanez SR305EB-WK", brand: "Ibanez",
    name: "Bass guitar Ibanez SR305EB-WK",
    category: "Bass", price: 389.99, stock: 5, isNew: false, pack: false,
    rating: 4.6, reviews: 28,
    images: [
      "images/bosine-gitara-ibanez-sr305eb-wk.avif",
      "images/bosine-gitara-ibanez-sr305eb-wk(1).avif",
      "images/bosine-gitara-ibanez-sr305eb-wk(2).avif"
    ],
    short: "Bass guitar Ibanez SR305EB-WK.",
    description: "The Ibanez SR305EB is a five-string bass from the SR series, built for comfort and a wide tonal range. The okoume body with a thin five-piece maple and walnut neck keeps the instrument light, and the 24-fret jatoba fretboard gives easy access to the highest notes. Two PowerSpan Dual Coil pickups, an Ibanez Custom Electronics 3-band EQ and a 3-way Power Tap switch move from a full humbucking sound to a brighter single-coil voice. The 864 mm scale and 16.5 mm string spacing suit both fingerstyle and pick players.",
    features: ["Type: 5-string bass guitar", "Manufacturer: Ibanez", "Model: SR305EB", "Body: okoume", "Neck: SR 5pc maple / walnut", "Fretboard: jatoba, white dot inlay","Manufacturer: Ibanez","Model: SR305EB","Body: okoume","Neck: SR 5pc maple / walnut","Fretboard: jatoba, white dot inlay","Fretboard radius: 305 mm","Frets: 24, medium","Scale: 864 mm (34in)","String spacing: 16.5 mm","Bridge: Accu-cast B125","Pickups: 2x PowerSpan Dual Coil, passive","Electronics: Ibanez Custom Electronics 3-band EQ with 3-way Power Tap switch","Hardware: black","Strings: .045–.130","Color: Weathered Black"],
    specs: {"Brand":"Ibanez","Model":"SR305EB","Type":"Bass"}
  },
  {
    id: 40003, slug: "Bass guitar Sterling by Music Man StingRay RAY4 Walnut Satin", brand: "Sterling by Music Man",
    name: "Bass guitar Sterling by Music Man StingRay RAY4 Walnut Satin",
    category: "Bass", price: 444.00, stock: 6, isNew: false, pack: false,
    rating: 4.7, reviews: 21,
    images: [
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4-walnut-satin.avif",
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4-walnut-satin(1).avif",
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4-walnut-satin(2).avif"
    ],
    short: "Bass guitar Sterling by Music Man StingRay RAY4 Walnut Satin",
    description: "The Sterling by Music Man StingRay RAY4 Walnut Satin is an affordable SUB Series StingRay that keeps the key features of the legendary model. A ceramic humbucker and 9 V active preamp with 2-band EQ deliver powerful, clear and articulate bass tones that cut through the mix. A basswood body, 6-bolt hard maple neck and 34\" scale provide a solid foundation and comfortable playability, while the fixed, fully adjustable bridge keeps tuning stable. Suitable for beginners as well as rehearsals and gigs.",
    features: ["Type: 4-string electric bass with active electronics", "Manufacturer: Sterling by Music Man", "Model: StingRay RAY4", "Body: basswood", "Neck: hard maple, 6-bolt attachment", "Scale length: 34\" (864 mm)", "Fingerboard radius: 9.5\" (241 mm)", "Frets: 21, medium", "Nut width: 38 mm (62 mm at last fret)", "Fret markers: white dot markers", "Pickup: 1 ceramic humbucker", "Electronics: 2-band active preamp, 9 V battery", "Bridge: fixed, fully adjustable", "Tuning machines: open gear", "Pickguard: black", "Strings: .045–.105", "Color: Walnut Satin", "Gig bag: not included"],
    specs: {"Brand":"Sterling by Music Man","Model":"StingRay RAY4","Type":"Bass"}
  },
  {
    id: 40004, slug: "Electro-acoustic Bass guitar Fender Kingman Bass SEB WN(B-Stock)", brand: "Fender",
    name: "Bass guitar Fender Kingman Bass SEB WN(B-Stock)",
    category: "Bass", price: 569.00, stock: 8, isNew: false, pack: false,
    rating: 4.0, reviews: 15,
    images: [
      "images/giara-fender-kingman-bass-seb-wn.avif",
      "images/giara-fender-kingman-bass-seb-wn(1).avif",
      "images/giara-fender-kingman-bass-seb-wn(2).avif"
    ],
    short: "Electro-acoustic Bass guitar Fender Kingman Bass.",
    description: "Electro-acoustic Bass guitar Fender Kingman Bass SEB WN(B-Stock).",
    features: ["Type: Electro-Acoustic Bass Guitar", "Manufacturer: Fender", "Model: Kingman Bass SEB WN", "Top: Solid Spruce", "Back and Sides: Sapele","Shape: Auditorium","Neck: Nato","Fingerboard: Walnut","Scale: 30.3\" (770 mm)","Nut Width: 1.5\" (38.1 mm)","Color: Shaded Edge Burst","Electronics: Fishman Presys Plus, Side-Mounted Preamp with Built-In Electronic Tuner","Cutaway: Yes","Includes: Fender deluxe case"],
    specs: {"Brand":"Fender","Model":"Kingman Bass SEB WN"}
  },
    {
    id: 20005, slug: "Acoustic-electric guitar Fender California Deluxe", brand: "Fender",
    name: "Acoustic-electric guitar Fender California Deluxe Redondo CE Black",
    category: "Acoustic", price: 3659.00, stock: 10, isNew: true, pack: false,
    rating: 4.9, reviews: 24,
    images: [
      "images/elektro-akustine-gitara-fender-california-deluxe-redondo-ce-black.avif",
      "images/elektro-akustine-gitara-fender-california-deluxe-redondo-ce-black(1).avif",
      "images/elektro-akustine-gitara-fender-california-deluxe-redondo-ce-black(2).avif"
      ],
    short: "Acoustic-electric guitar Fender California Deluxe Redondo CE Black.",
    description: "The Fender California Deluxe Redondo CE Black is a cutaway dreadnought-style guitar from the California series with a Jazzmaster-style headstock. A solid spruce top with mahogany back and sides gives a clear, balanced tone, while the mahogany Slim C neck with walnut fingerboard is comfortable for chords and leads. The Fishman CD-1 preamp with volume, bass and treble controls, tuner and phase switch makes plugging into an amp or mixer easy. Gloss black finish with tortoiseshell pickguard.",
    features: ["Type: acoustic-electric cutaway guitar","Manufacturer: Fender","Model: California Deluxe Redondo CE","Body shape: Redondo","Top: solid spruce","Back and sides: laminated mahogany","Neck: mahogany, Slim C","Fingerboard: walnut, 12\" (305 mm) radius","Frets: 20", "Scale length: 25.5\" (648 mm)","Nut width: 42.86 mm","Electronics: Fishman CD-1 preamp with tuner","Controls: volume, bass, treble, phase","Bridge: Modern Viking","Tuning machines: sealed die-cast","Strings: phosphor bronze .011 –.052","Color: Black, gloss","Included: gig bag",],    
    specs: {"Brand": "Fender", "Model": "California Deluxe Redondo CE", "Type": "Acoustic guitar pack", "Body shape": "dreadnought", "Top": "spruce","Warranty": "24 months" }
  },
  {
    id: 20006, slug: "Electro-acoustic guitar Ibanez V40WSCE-OPB", brand: "Ibanez",
    name: "Electro-Acoustic Guitar Ibanez V40WSCE-OPB",
    category: "Acoustic", price: 169.00, stock: 8, isNew: true, pack: false,
    rating: 4.0, reviews: 18,
    images: [
      "images/gitara-ibanez-v40wsce-opb.avif",
      "images/gitara-ibanez-v40wsce-opb(1).avif",
      "images/gitara-ibanez-v40wsce-opb(2).avif"
    ],
    short: "Electro-acoustic guitar Ibanez",
    description: "a versatile cutaway dreadnought acoustic-electric guitar designed for comfortable playability and rich, balanced sound. Its White Siris top, back, and sides give it a distinctive natural look, while the Ibanez Undersaddle pickup and AEQ-2T preamp with a built-in tuner make it ready for both live performances and recording. Combining quality craftsmanship with reliable electronics, it's an excellent choice for beginners and experienced players alike.",
    features: ["Type: electro-acoustic guitar","Manufacturer: Ibanez","Model: V40WSCE-OPB","Shape: cutaway dreadnought","Top: White Siris","Sides & back: White Siris","Neck: meranti","Fretboard: nandu","Scale: 650 mm","Nut width: 42 mm","Cutaway: yes","Electronics: Ibanez AEQ-2T","Color: Open Pore Brown","Included: gig bag"], 
    specs: {"Brand":"Ibanez","Model":"V40WSCE-OPB","Type":"Electro-Acoustic","Scale length":"650 mm","Frets":"20"}
  },
  {
    id: 20007, slug: "Electro-acoustic guitar Zemaitis CAF-85H-NAT", brand: "Zemaitis",
    name: "Electro-Acoustic Guitar Zemaitis CAF-85H-NAT",
    category: "Acoustic", price: 549.00, stock: 15, isNew: true, pack: false,
    rating: 4.1, reviews: 31,
    images: [
      "images/elektro-akustine-gitara-zemaitis-caf-85h-nat.avif",
      "images/elektro-akustine-gitara-zemaitis-caf-85h-nat(1).avif",
      "images/elektro-akustine-gitara-zemaitis-caf-85h-nat(2).avif"
    ],
    short: "Electro-Acoustic Guitar Zemaitis.",
    description: "Zemaitis CAF-85H-NAT - an electro-acoustic guitar with a unique design, in which the legendary Zemaitis style is combined with modern functionality and great sound. The solid spruce top and sapele wood body ensure a warm, rich and balanced sound, and the Forward X edge construction gives the instrument more resonance and dynamics. The exclusive heart-shaped sound hole, decorative rosette and iconic \"Moustache\" bridge make this guitar a real stage decoration. Integrated Zemaitis EX-4 electronics with 4-band equalizer and chromatic tuner allow you to easily adapt to various playing situations - from rehearsals to live performances. A comfortable 43 mm upper bridge, 630 mm scale and satin finish ensure comfortable playing, and the included padded case allows you to safely transport the instrument. This is a great choice for guitarists looking for a unique look, reliable electronics and high-quality acoustic sound in one instrument.",
    features: ["Type: electro-acoustic guitar", "Manufacturer: Zemaitis", "Model: CAF-85H-NAT", "Body shape: cutaway dreadnought", "Top: solid spruce", "Back and sides: sapele wood", "Binding: artificial ivory, herringbone purfling", "Rosette: green abalone with black and white line", "Neck: African mahogany", "Neck joint: Zemaitis CNR System® Active with automatic string action regulation", "Truss rod: two-way, carbon reinforced", "Neck profile: Zemaitis Soft V", "Fretboard: ebony, 400 mm radius", "Bridge: ebony, TUSQ saddle", "Scale length: 650 mm", "Nut: TUSQ, 45 mm", "Pickup: Zemaitis EX-4 – under-saddle pickup combined with a TRU•MIC microphone, volume and mix controls at the soundhole", "Finish: Full-Pore Vintage Finish", "Tuners: Gotoh SE700, gold patina, 1:15", "Strings: D'Addario XS Bronze 12-53", "Body dimensions: lower bout 378 mm, body length 490 mm", "Overall length: 1026 mm", "Included: Zemaitis T-Line hard shell case"],
    specs: {"Brand":"Zemaitis","Model":"CAF-85H-NAT ","Type":"Electro-Acoustic","Scale length":"650 mm","Frets":"20"}
  },
  {
    id: 20008, slug: "Electro Acoustic guitar Ditson DC-10E", brand: "Ditson",
    name: "Electro-Acoustic Guitar Ditson DC-10E",
    category: "Acoustic", price: 259.00, stock: 6, isNew: false, pack: false,
    rating: 4.1, reviews: 42,
    images: [
      "images/elektro-akustine-gitara-ditson-dc-10e.avif",
      "images/elektro-akustine-gitara-ditson-dc-10e(1).avif",
      "images/elektro-akustine-gitara-ditson-dc-10e(2).avif" 
     ],
    short: "Electro Acoustic guitar Ditson DC-10E.",
    description: "Ditson DC-10E is a versatile electro-acoustic guitar with a cutaway Dreadnought shape, which is characterized by an excellent price-quality ratio. The model was created in collaboration with the well-known manufacturer Sigma Guitars, so the instrument is distinguished by its high-quality assembly, comfortable playability and rich, balanced sound. The top is made of Sitka spruce, and the back and sides are made of mahogany, so the guitar sounds warm, clear and dynamic both when playing chords and fingerstyle. The integrated Sigma Preamp electronics with a tuner allow you to conveniently use the guitar at concerts or during recordings. Due to its comfortable neck profile and universal sound, the Ditson DC-10E is perfect for both beginners and advanced guitarists looking for a reliable instrument for everyday playing.",
    features: ["Type: Electro-Acoustic Guitar", "Manufacturer: Ditson", "Model: DC-10E", "Shape: Dreadnought", "Top: Spruce", "Back and Sides: Mahogany", "Neck: Mahogany", "Fingerboard: Laurel", "Scale: 632 mm", "Width of Top Nut: 43 mm", "Color: Natural Wood", "Electronics: Sigma Preamp with built-in tuner", "Cutaway: Yes", "Finish: Satin", "Strings: D'Addario EXP16 Phosphor Bronze .012–.053", "Included: Gig bag"],
    specs: {"Brand":"Ditson","Model":"DC-10E","Type":"Electro-Acoustic","Scale length":"632 mm","Frets":"20"}
  },
  {
    id: 30005, slug: "Electric Guitar Cort KX307MS OPBK", brand: "Cort",
    name: "Electric Guitar Cort KX307MS OPBK",
    category: "Electric", price: 399.00, stock: 15, isNew: false, pack: false,
    rating: 4.3, reviews: 56,
    images: [
      "images/elektrine-gitara-cort-kx307ms-opbk.avif",
      "images/elektrine-gitara-cort-kx307ms-opbk(1).avif",
      "images/elektrine-gitara-cort-kx307ms-opbk(2).avif"
    ],
    short: "Electric Guitar Cort KX307MS OPBK.",
    description: "The Cort KX307MS is a 7-string multi-scale guitar built for heavy music. The fanned scale (25.5\" – 27\") adds tension and definition to the low strings while keeping a familiar feel on the high strings. The body is mahogany, the neck and fingerboard are roasted maple, with 24 frets. PowerBar humbuckers deliver a powerful, articulate sound even in low tunings. Individual bridges with string-through-body, black nickel hardware and an Open Pore finish.",
    features: ["Type: electric guitar", "Manufacturer: Cort", "Model: KX307MS OPBK", "Construction: bolt-on", "Body: basswood, maple top", "Neck: roasted maple, Ergo V profile (21 mm at 1st fret, 23 mm at 12th)", "Fingerboard: roasted maple, 12in–15.75in compound radius, rolled edges", "Frets: 24, tall medium-jumbo, stainless steel", "Scale length: 25.5in (648 mm)", "Nut: Graph Tech Black TUSQ, 42 mm", "Truss rod: two-way adjustable", "Tuning machines: Cort staggered locking", "Bridge: Cort CFA-III tremolo", "Pickups: Seymour Duncan SH-2N and TB-4 (HH)", "Controls: volume, tone, 5-way Super Switch", "Hardware: chrome", "Strings: D'Addario EXL120", "Finish: gloss body, matte neck", "Colour: Transparent Black Flat"],
    specs: {"Brand":"Cort","Model":"KX307MS OPBK","Type":"Electric","Scale length":"648 mm","Frets":"24"}
  },
  {
    id: 30006, slug: "Electric Guitar Squier Limited Edition Classic Vibe Custom Telecaster SH with Bigsby, Black", brand: "Squier",
    name: "Electric Guitar Squier Limited Edition Classic Vibe Custom Telecaster SH with Bigsby, Black",
    category: "Electric", price: 509.00, stock: 10, isNew: false, pack: true,
    rating: 4.3, reviews: 72,
    images: [
      "images/elektrine-gitara-squier-classic-vibe-custom-telecaster-sh-bigsby-juoda.avif",
      "images/elektrine-gitara-squier-classic-vibe-custom-telecaster-sh-bigsby-juoda(1).avif",
      "images/elektrine-gitara-squier-classic-vibe-custom-telecaster-sh-bigsby-juoda(2).avif"
    ],
    short: "Electric Guitar Squier Limited Edition Classic Vibe Custom Telecaster SH with Bigsby, Black.",
    description: "The Squier Classic Vibe Custom Telecaster SH with Bigsby is a limited edition that revisits the look of the late-fifties and sixties Telecaster Custom. The poplar body is bound top and back and finished in gloss polyurethane, while the maple neck carries a vintage-tinted gloss finish and a comfortable C profile. A Fender Designed alnico humbucker sits in the neck position and an alnico single-coil at the bridge, so one guitar covers both thick, full tones and the familiar Tele snap. The string-through Bigsby B50 vibrato makes string changes easy and adds a gentle shimmer.",
    features: ["Type: electric guitar","Manufacturer: Squier","Series: Classic Vibe", "Model: Limited Edition Custom Telecaster SH with Bigsby","Body: poplar, bound top and back","Body finish: gloss polyurethane","Neck: maple, C shape","Neck finish: tinted gloss urethane","Fingerboard: maple","Fingerboard radius: 241 mm (9.5\")","Frets: 22, narrow tall","Scale length: 648 mm (25.5\")","Nut: bone, 42 mm (1.650\")","Inlays: black dot","Bridge pickup: Fender Designed alnico single-coil","Neck pickup: Fender Designed alnico humbucker","Pickup configuration: SH","Switching: 3-position blade","Controls: master volume, master tone","Bridge: vintage-style floating with Mustang saddles",
      "Tailpiece: Bigsby B50","Tuners: vintage-style","Pickguard: 3-ply parchment", "Hardware finish: nickel", "Strings: nickel plated steel, .009-.042", "Colour: black"],
     specs: {"Brand":"Squier","Model":"Classic Vibe Custom Telecaster","Type":"Electric","Scale length":"648 mm","Frets":"22"}
  },
  {
    id: 30007, slug: "Electric Guitar Schecter Omen Elite-7 Charcoal", brand: "Schecter",
    name: "Electric Guitar Schecter Omen Elite-7 Charcoal",
    category: "Electric", price: 659.00, stock: 7, isNew: false, pack: false,
    rating: 4.7, reviews: 29,
    images: [
      "images/elektrine-gitara-schecter-omen-elite-7-charcoal.avif",
      "images/elektrine-gitara-schecter-omen-elite-7-charcoal(1).avif",
      "images/elektrine-gitara-schecter-omen-elite-7-charcoal(2).avif"
    ],
    short: "Electric Guitar Schecter Omen Elite-7 Charcoal.",
    description: "The Schecter Omen Elite-7 is a seven-string built for low tunings and heavy music. The longer 673 mm scale keeps the lowest string tight and articulate, while the 16\"-radius fingerboard with 24 X-Jumbo frets and a 48 mm nut leaves ample room for seven strings. A mahogany body with a burl top and arched contour gives a solid midrange foundation, the Schecter Custom hardtail bridge with string-thru-body stringing improves sustain and tuning stability, and two Schecter Diamond Heretic humbuckers with a 5-way switch suit both rhythm and lead work.",
    features: ["Number of strings: 7", "Body: mahogany with burl top, arched, black 1-ply binding", "Neck: maple, bolt-on, thin \"C\" profile", "Fingerboard: rosewood, 16\" (406 mm) radius, pearloid line inlays", "Frets: 24 X-Jumbo", "Scale: 673 mm (26.5\")", "Nut: Graph Tech XL Black Tusq, width 48 mm (1.889\")", "Pickups: 2 × Schecter Diamond Heretic humbuckers", "Controls: volume, tone, 5-way switch", "Bridge: Schecter Custom hardtail, string-thru-body", "Hardware: black, Schecter tuners", "Strings: Ernie Ball 7-string (.009 –.062)", "Colour: Charcoal"],
    specs: {"Brand":"Schecter","Model":"Omen Elite-7 Charcoal","Type":"Electric","Scale length":"673 mm","Frets":"24"}
  },
  {
    id: 30008, slug: "Electric guitar Spira S-400 MGR", brand: "Spira",
    name: "Electric guitar Spira S-400 MGR",
    category: "Electric", price: 299.00, stock: 14, isNew: false, pack: false,
    rating: 4.0, reviews: 38,
    images: [
      "images/elektrine-gitara-spira-s-400-mgr.avif",
      "images/elektrine-gitara-spira-s-400-mgr(1).avif",
      "images/elektrine-gitara-spira-s-400-mgr(2).avif"
    ],
    short: "Electric guitar Spira S-400 MGR.",
    description: "The S-400 is a sleek high-performance double cutaway shred machine designed for players who demand modern design with exceptional tone and playability. The S-400 features a roasted poplar body and a Canadian roasted maple neck, ensuring both durability and superior performance. Its Ebony Tech fretboard with 24 jumbo frets provides a silky smooth, responsive playing experience whatever the genre. Equipped with Spira’s VillainTM custom humbucker set in an HH configuration; the S-400 delivers powerful yet articulate tones however high the gain levels. The guitar’s sleek design, precision hardware and locking tuners offer excellent tuning stability and intonation, making it a reliable choice for both stage and studio.",
    features: ["Type: Electric Guitar", "Manufacturer: Spira", "Model: S-400 MGR", "Body: Roasted Poplar", "Neck: Canadian Roasted Maple", "Fingerboard: Hi graded Ebony Tech", "Scale: 25.5\" (648 mm)", "Nut Width: 43 mm", "Bridge: Fixed", "Pickups: HH, Spira Villain, Custom Made, 12k output, Ceramic Magnet", "Controls: Master Volume, Master Tone", "Color: Satin Dark Green"],
    specs: {"Brand":"Spira","Model":"S-400 MGR","Type":"Electric","Scale length":"648 mm","Frets":"24"}
  },
  {
    id: 40005, slug: "Bass Guitar Cort A4 Plus FMMH OPLB", brand: "Cort",
    name: "Bass guitar Cort A4 Plus FMMH OPLB",
    category: "Bass", price: 599.00, stock: 10, isNew: false, pack: false,
    rating: 4.8, reviews: 15,
    images: [
      "images/bosine-gitara-cort-a4-plus-fmmh-oplb.avif",
      "images/bosine-gitara-cort-a4-plus-fmmh-oplb(1).avif",
      "images/bosine-gitara-cort-a4-plus-fmmh-oplb(2).avif"
    ],
    short: "Bass Guitar Cort A4 Plus FMMH OPLB.",
    description: "The Cort Artisan A4 Plus FMMH is a 4-string bass with a neck-through construction that provides long sustain and easy access to the upper frets. The mahogany body has a figured maple top, the neck is 5-ply maple and panga panga, and the panga panga fingerboard has black binding. Bartolini MK-1 pickups and electronics with a 3-band EQ, blend control and mini toggle allow precise tone shaping. Hipshot Ultralite tuners and a Hipshot TransTone bridge, 24 frets, a 34\" scale and a matte Open Pore finish.",
    features: ["Type: bass guitar, 4-string","Manufacturer: Cort","Model: Artisan A4 Plus FMMH","Construction: neck-through","Body: mahogany, figured maple top","Neck: 5-ply maple and panga panga, C shape","Fingerboard: panga panga with black binding, 15.75\" (400 mm) radius","Frets: 24, medium-jumbo","Scale length: 34\" (864 mm)","Nut: black PPS, 38 mm","Tuning machines: Hipshot Ultralite","Bridge: Hipshot TransTone","Pickups: Bartolini MK-1","Controls: volume, blend, 3-band EQ, mini toggle","Hardware: Platinum Silver",
                "Strings: D'Addario EXL165","Finish: matte Open Pore","Colour: Open Pore Blue Black (OPLB)"],
    specs: {"Brand":"Cort","Model":"Artisan A4 Plus FMMH","Type": "Bass","Scale length":"864 mm","Frets":"24","Tuning machines": "Hipshot Ultralite","Pickguard": "4-ply tortoiseshell","Hardware": "nickel/chrome","Strings": "D'Addario EXL165","Color": "Open Pore Blue Black (OPLB)","Included": "Deluxe Molded Case"}
  },
  {
    id: 40006, slug: "Bass guitar Sterling by Music Man StingRay RAY4HH Cobra Blue", brand: "Sterling by Music Man",
    name: "Bass guitar Sterling by Music Man StingRay RAY4HH Cobra Blue",
    category: "Bass", price: 389.99, stock: 5, isNew: false, pack: false,
    rating: 4.6, reviews: 28,
    images: [
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4hh-cobra-blue.avif",
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4hh-cobra-blue(1).avif",
      "images/bosine-gitara-sterling-by-music-man-stingray-ray4hh-cobra-blue(2).avif"
    ],
    short: "Bass guitar Sterling by Music Man StingRay RAY4HH Cobra Blue.",
    description: "The Sterling by Music Man StingRay RAY4HH Cobra Blue is the dual-humbucker version of the StingRay, adding more tonal options to the iconic StingRay sound. A 9 V active preamp with 2-band EQ and a 5-way pickup selector take you from deep, round tones to a bright, punchy slap sound. A jabon body, hard maple neck with maple fingerboard and 34\" scale give the familiar StingRay feel, while the fixed, fully adjustable bridge keeps tuning stable. A great gateway into HH bass tones for rehearsals and the stage.",
    features: ["Type: 4-string electric bass with active electronics", "Manufacturer: Sterling by Music Man", "Model: StingRay RAY4HH", "Body: jabon", "Neck: hard maple, 6-bolt attachment", "Fingerboard: hard maple", "Scale length: 34\" (864 mm)", "Fingerboard radius: 9.5\" (241 mm)", "Frets: 21, medium", "Nut width: 38 mm (62 mm at last fret)", "Fret markers: black dot markers", "Pickups: 2 ceramic humbuckers", "Electronics: 2-band active preamp, 9 V battery", "Pickup selector: 5-way", "Bridge: fixed, fully adjustable", "Tuning machines: open gear", "Pickguard: white", "Strings: .045–.105", "Color: Cobra Blue", "Gig bag: not included"],
    specs: {"Brand":"Sterling by Music Man","Model":"StingRay RAY4HH","Type":"Bass"}
  },
  {
    id: 40007, slug: "Bass Guitar Danelectro 58 Longhorn Bass Black", brand: "Danelectro",
    name: "Bass guitar Danelectro 58 Longhorn Bass Black",
    category: "Bass", price: 599.00, stock: 6, isNew: false, pack: false,
    rating: 4.3, reviews: 21,
    images: [
      "images/bosine-gitara-danelectro-58-longhorn-bass-black.avif",
      "images/bosine-gitara-danelectro-58-longhorn-bass-black(1).avif",
      "images/bosine-gitara-danelectro-58-longhorn-bass-black(2).avif"
    ],
    short: "Bass guitar Danelectro 58 Longhorn Bass Black",
    description: "The Danelectro Longhorn Bass is a short-scale bass first built in 1958 and still recognisable by its horned body outline. A 756 mm scale and 24 frets make it comfortable for guitarists moving over to bass, while the pair of Danelectro Lipstick pickups delivers the bright, cutting tone heard on countless records. Stacked volume and tone controls let you blend both pickups freely. An aluminium nut and a rosewood saddle complete the vintage build. Black is the classic finish for this model.",
    features: ["Type: bass guitar", "Manufacturer: Danelectro", "Model: 58 Longhorn Bass", "Body shape: Longhorn", "Top: laminated maple", "Back and sides: laminated maple", "Neck: maple, bolt-on", "Fingerboard: rosewood, 15.75\" (400 mm) radius", "Frets: 24, medium-jumbo", "Scale length: 756 mm (29.75\")", "Nut: aluminium, 38 mm (1.5\")", "Pickups: 2 × Danelectro Lipstick single-coil", "Controls: stacked volume and tone", "Bridge: rosewood saddle with aluminium baseplate", "Tuning machines: open-gear, nickel-plated", "Strings: D\'Addario EXL165 (.045–.105)", "Colour: black"],
    specs: {"Brand":"Danelectro","Model":"58 Longhorn Bass","Type":"Bass"}
  },
  {
    id: 40008, slug: "Bass Guitar Orange O BASS Black", brand: "Orange",
    name: "Bass guitar Orange O BASS Black",
    category: "Bass", price: 349.00, stock: 8, isNew: false, pack: false,
    rating: 4.0, reviews: 15,
    images: [
      "images/bosine-gitara-orange-o-bass-black.avif",
      "images/bosine-gitara-orange-o-bass-black(1).avif",
      "images/bosine-gitara-orange-o-bass-black(2).avif"
    ],
    short: "Bass guitar Orange O BASS Black",
    description: "The Orange O BASS is a high-performance electric bass designed for modern musicians. With its distinctive look and powerful sound, it delivers the versatility and tone that today's bassists demand.",
    features: ["Type: bass guitar", "Manufacturer: Orange", "Model: O BASS", "Body: okoumé", "Neck: maple", "Fingerboard: purpleheart", "Scale: 864 mm (34\")", "Nut width: 43 mm (1.693\")", "Pickups: 1 × custom-wound split-coil humbucker", "String gauge: .045 –.105", "Color: black"],
    specs: {"Brand":"Orange","Model":"O BASS","Type":"Bass"}
  }
];

// Expose
if (typeof window !== 'undefined') window.PRODUCTS = PRODUCTS;
