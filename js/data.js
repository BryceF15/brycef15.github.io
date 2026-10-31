/* =====================================================================
   SITE CONTENT — edit this file to change what the site says.
   ---------------------------------------------------------------------
   Everything on the home page and every case-study page is built from
   the lists below. You never need to touch the HTML to add a project.

   TO ADD A PROJECT
     1. Copy one block in PROJECTS (from its opening { to its closing },)
     2. Give it a new, unique `slug` (lowercase-with-dashes). Its page
        will live at  project.html?p=<slug>
     3. Set `group` to "featured", "also" or "building" (where it shows).
     4. Put its photos in  assets/img/<slug>/  and list them in `images`.
        A missing photo just shows a labelled placeholder, so you can add
        the text first and the photos later.

   IMAGES
     { src: "assets/img/flexure-clamps/hero.jpg", alt: "what is in it",
       label: "shown on the placeholder until the photo exists" }

   Keep claims exactly true: poster not paper, prototype not deployed.
   ===================================================================== */

window.SITE = {

  /* ---------------------------------------------------------------- */
  person: {
    name: "Bryce Forsgren",
    // Shown under the name in the hero (left side).
    line: "Mechanical engineer and applied mathematician building composite structures, precision mechanisms and thermal-fluid systems, then testing them until the data agrees.",
    email: "bfors15@mit.edu",
    linkedin: "https://www.linkedin.com/in/bryce-forsgren/",
    instagram: "",            // leave "" to hide
    // The PDF includes a phone number. Remove it from the PDF if you don't want it public.
    resumePdf: "assets/docs/Bryce_Forsgren_Resume.pdf",
    resumeUpdated: "October 2026",
  },

  /* ---------------------------------------------------------------- */
  // Order here = order on the page.
  // Optional fields: `credit` (co-authors / team), `docs` (links shown on the case page).
  projects: [

    /* ===== FEATURED (big rows under "Selected work") ===== */
    {
      slug: "flexure-clamps",
      group: "featured",
      title: "Novel in-plane flexure clamps",
      where: "MIT BioInstrumentation Lab · UROP",
      when: "Mar – Dec 2024",
      status: "done",
      role: "Undergraduate researcher: design, modeling, FEA, fabrication and testing",
      team: "Vineet Padia, Bryce Forsgren and Prof. Ian Hunter",
      credit: "Poster authors: Vineet Padia, Bryce D. Forsgren and Ian W. Hunter, MIT BioInstrumentation Lab.",
      tags: ["Precision mechanics", "Flexure design", "FEA", "Wire EDM"],
      result: "Fifteen working clamps with repeatable, non-yielding clamping. Poster presented at the 39th ASPE Annual Meeting, Houston, November 2024, and an accepted MIT TLO invention disclosure.",
      did: [
        "Designed 30 in-plane flexure clamps for optics tables and test stands, validated by analytical models and FEA.",
        "Made 15 working clamps with repeatable, non-yielding clamping, fabricated across 3 machine shops.",
        "Presented the research poster at the 39th ASPE Annual Meeting to leading precision engineering researchers.",
        "Co-inventor on an accepted MIT Technology Licensing Office invention disclosure.",
      ],
      why: "Set screws make point loads that damage rods, need flats machined onto them, and loosen under vibration. Most flexure clamps also need radial access to tighten, which rules them out in tight spaces. These designs clamp in the plane of the part instead.",
      how: [
        "Each clamp is a single part: a tapered screw drives an in-plane flexure closed around the rod, giving uniform clamping pressure with no radial access needed. Rod clamps are 6061-T6 aluminum cut by wire EDM and hold 6 mm 316 stainless rods; panel clamps are laser-cut 6 mm Delrin that hold 3 mm acrylic sheets at 90°.",
        "The flexure is modeled as a cantilever beam, and the tapered-screw interference fit gives a closed-form relation from screw torque to clamping pressure on the rod: pressure is directly proportional to applied torque. FEA of the loaded flexure checked the model and located the stress concentrations at the clamping interface.",
        "Variants cover different jobs: screw-tightened clamps (one design holds two rods at once), insert-and-remove clamps where removing the screw clamps the rod, side-entry clamps for confined spaces, and panel clamps.",
      ],
      docs: [
        { label: "View the ASPE 2024 poster (PDF)", href: "assets/docs/Flexure_Clamps_ASPE_2024_Poster.pdf" },
      ],
      images: [
        { src: "assets/img/flexure-clamps/rod-designs.jpg", alt: "CAD of eleven rod flexure clamp designs, labeled A through K", label: "Rod flexure clamp designs A to K", fit: "contain" },
        { src: "assets/img/flexure-clamps/poster.jpg", alt: "The full ASPE 2024 poster, Novel In-Plane Flexure-Based Clamp Designs", label: "The ASPE 2024 poster", fit: "contain" },
        { src: "assets/img/flexure-clamps/model.jpg", alt: "Equations relating screw torque to clamping pressure, with cantilever and tapered-screw diagrams", label: "Torque-to-pressure model", fit: "contain" },
        { src: "assets/img/flexure-clamps/fea.jpg", alt: "Von Mises stress plot of a flexure clamp under load", label: "FEA: von Mises stress under clamping load", fit: "contain" },
        { src: "assets/img/flexure-clamps/panel-designs.jpg", alt: "CAD of three panel flexure clamp designs, labeled L, M and N", label: "Panel flexure clamp designs L to N", fit: "contain" },
      ],
    },
    {
      slug: "mit-motorsports",
      group: "featured",
      title: "MIT Motorsports: getting the car to competition",
      where: "MIT Motorsports · Formula SAE Electric",
      when: "Sep 2024 – now",
      status: "active",
      role: "Testing lead (Aug 2025 – now) · Composites sub-team analyst (Sep 2024 – now)",
      team: "MIT Motorsports, about 150 members; worked with every subteam",
      tags: ["Composites", "Vehicle testing", "Instrumentation", "Manufacturing"],
      result: "Rear wing built and on the car three days before the 2026 competition, where the team placed 20th of more than 100 teams at FSAE Michigan.",
      did: [
        "Led a cross-country test campaign at Ford's wind tunnel and Toyota Racing Development, producing the team's first-ever aero map and kinematics and compliance (K&C) data.",
        "Organized 40 test trips (about 400 km on the car), leading maintenance and scrutineering to keep the driver safe.",
        "Owned the 2026 rear-wing build through the end plates and bonded joints, under a timeline that ended 3 days before competition.",
        "Wet laid up 7 aerodynamic body panels in under 2 weeks before the 2025 competition, including post-processing and weight optimization.",
      ],
      why: "An FSAE car only scores if it runs. Most of this work was closing the gap between a design and a car that passes tech and survives testing, on a student team's timeline.",
      how: [
        "End-plate laminate: a hex-weave outer ply for a smooth surface, 2x2 twill, a 1/4 in foam core, 2x2 twill and 12K spread tow, tuned for stiffness.",
        "The wing has no bolted joints: the airfoils are bonded to the end plates with epoxy fillets and carbon overlaminate. With no reliable way to predict the bond's strength, the joint was deliberately oversized. Problems like that one are what I want to understand well enough to design with confidence.",
        "Instrumented the car with push-rod strain gauges and tire and brake temperature sensors, and worked on debugging inverter and battery faults.",
      ],
      images: [
        { src: "assets/img/mit-motorsports/hero.jpg", alt: "The MIT Motorsports car at competition", label: "Hero · the car at competition" },
        { src: "assets/img/mit-motorsports/wing-layup.jpg", alt: "Rear wing end plate layup under vacuum", label: "End-plate layup under vacuum" },
        { src: "assets/img/mit-motorsports/wind-tunnel.jpg", alt: "The car in the wind tunnel", label: "Wind tunnel test" },
        { src: "assets/img/mit-motorsports/testing.jpg", alt: "Testing day with the car on track", label: "Testing day" },
      ],
    },

    /* ===== ALSO BUILT (compact list) ===== */
    {
      slug: "woven-clpt",
      group: "also",
      title: "Woven composites vs. classical laminate theory",
      short: "Showed classical laminate theory overestimates the bending stiffness of 2x2 twill laminates by up to 89%, and found a constant correction factor that fixes it.",
      where: "MIT 2.671 · MIT Motorsports composites",
      when: "2025 – 2026",
      status: "done",
      role: "Lead researcher",
      team: "MIT Motorsports composites sub-team",
      tags: ["Composites", "Mechanics of materials", "MATLAB", "Testing"],
      result: "Classical Laminated Plate Theory overestimated bending stiffness by up to 89% for 20-ply laminates, but a constant correction factor of about 1.5 brings the predictions in line with the data, giving the team a usable design rule.",
      did: [
        "Made woven carbon laminates with varying ply counts and tested them for tensile modulus and bending stiffness on a mechanical tester (tensile and 3-point bend).",
        "Built the CLPT predictions in MATLAB and compared them to the measurements.",
        "Used optical microscopy to read the failure modes.",
        "Authored a 35-page paper on the findings, in preparation for publication.",
      ],
      why: "CLPT is the industry-standard tool for predicting laminate stiffness, but it assumes unidirectional plies. The team designs with woven fabric, so knowing how far off the theory is, and how to correct it, decides whether it can be trusted for layup design.",
      how: [
        "The weave was modeled as a single ply with equal longitudinal and transverse moduli. The error grew with ply count but stayed consistent enough that one constant factor flattened the predictions onto the data.",
      ],
      paperNote: "The full paper is in preparation for publication and available on request.",
      images: [
        { src: "assets/img/woven-clpt/hero.jpg", alt: "Composite test coupons", label: "Hero · test coupons" },
        { src: "assets/img/woven-clpt/plot.jpg", alt: "Experiment vs CLPT stiffness plot", label: "Experiment vs. CLPT plot" },
      ],
    },
    {
      slug: "spacex-dragon",
      group: "also",
      title: "Dragon final integration, SpaceX",
      short: "Designed thruster cluster covers in Siemens NX and built tools that cut daily closeout work from 15–30 minutes to under 30 seconds.",
      where: "SpaceX · Cape Canaveral",
      when: "Summer 2026",
      status: "done",
      role: "Dragon Final Integration Launch Engineering Intern",
      team: "Dragon final integration",
      tags: ["Hardware design", "Siemens NX", "Testing", "Automation"],
      result: "Covers that prevent impact damage costing about 200 labor hours to repair, plus a closeout tool now used by about 100 people across every Dragon department.",
      did: [
        "Designed thruster cluster protective covers from scratch in Siemens NX, ran abrasion, adhesive and fitment tests on a development capsule, and led design reviews with about 20 engineers, including propulsion leads.",
        "Built an Excel VBA tool using SQL queries to pull every open ticket blocking mission-critical Dragon closeouts: a daily 15–30 minute task now takes under 30 seconds, deployed to about 100 people for all future missions, saving 30+ hours per mission.",
        "Prototyped a Python tool that auto-imports 1,000+ fasteners into active work orders through a remote Linux worker, projected to save about 30 hours per mission.",
        "Supported 30+ technicians through final integration of Dragon for NASA Crew-13, CRS-36 and NASA Crew-14.",
      ],
      why: "Thruster clusters are exposed during processing, and one accidental impact can mean a long, expensive replacement. Closeouts are on the critical path to launch, so minutes spent chasing paperwork add up across a mission.",
      how: [],
      images: [
        { src: "assets/img/spacex-dragon/hero.jpg", alt: "Dragon final integration work", label: "Hero · photo cleared for public use" },
      ],
    },
    {
      slug: "membrane-cart",
      group: "also",
      title: "Membrane filtration test cart",
      short: "Designed the sensor network for an industry-sponsored filtration rig: six flow sensors on one I2C bus through a multiplexer.",
      where: "MIT BioInstrumentation Lab · Fonterra-sponsored",
      when: "Jun 2024 – Jun 2026",
      status: "done",
      role: "Undergraduate researcher: sensor network and cart build",
      team: "BioInstrumentation Lab, sponsored by Fonterra",
      tags: ["Fluids", "Instrumentation", "Electronics", "KiCad"],
      result: "The sensor board measured high and low flow across 3 parallel paths at constant flux and ran robustly through 10+ tests and 3 sponsor meetings with Fonterra.",
      did: [
        "Designed and soldered an I2C master–slave perf board linking 6 high-flow and low-flow sensors.",
        "Measured high and low flow across 3 parallel paths at constant flux.",
        "Supported construction of the high-pressure membrane test cart under tight timelines before 3 sponsor meetings with Fonterra.",
      ],
      why: "The cart pushes a protein-laden water byproduct through a filtration membrane at constant flux, so the flow measurements before and after the membrane had to stay trustworthy across long runs.",
      how: [
        "Each of the 3 parallel flow paths has a high-flow and a low-flow sensor in series. All six sensors connect through a PCA9548A I2C multiplexer (HW-617 breakout) on a perf board, which gives each sensor its own bus channel, with an Arduino Uno as the bus master.",
        "The wiring was documented as a KiCad schematic with a color-coded harness (separate wire colors for power, ground, clock and data) so anyone on the team could rewire a sensor.",
      ],
      images: [
        { src: "assets/img/membrane-cart/perfboard-diagram.png", alt: "KiCad wiring schematic: Arduino Uno connected to a PCA9548A I2C multiplexer perf board serving six flow sensors", label: "Perf board wiring schematic (KiCad)", fit: "contain" },
      ],
    },
    {
      slug: "fluidic-lens",
      group: "also",
      title: "Fluidic lens shaping model",
      short: "Modeled how to shape UV-cured lenses from liquid resin, and used COMSOL to find the effect that blocked fabrication.",
      where: "MIT BioInstrumentation Lab · UROP",
      when: "Dec 2024 – Jun 2026",
      status: "done",
      role: "Modeling and simulation",
      team: "BioInstrumentation Lab",
      tags: ["Fluids", "Optics", "Simulation", "Mathematica"],
      result: "A Mathematica PDE optimization model for lens shape, and COMSOL wetting simulations that identified poor surface wetting as the fabrication barrier.",
      did: [
        "Built a Mathematica PDE optimization model to shape spherical and aspheric UV-cured lenses from liquid resin.",
        "Ran COMSOL simulations of resin wetting and capillary action.",
        "Identified poor surface wetting as the barrier to reliable fabrication.",
        "Wrote the 18.354 paper \"Surface Tension as a Lens Maker\" on the underlying physics.",
      ],
      why: "Shaping lenses directly from liquid, with surface tension doing the polishing, could make custom optics without grinding or molds.",
      how: [],
      images: [
        { src: "assets/img/fluidic-lens/hero.jpg", alt: "Simulated lens profile", label: "Hero · simulated lens profile" },
      ],
    },

    /* ===== CURRENTLY BUILDING (the ledger) ===== */
    {
      slug: "cnt-tim",
      group: "building",
      title: "Nanotube thermal interface material",
      where: "SB thesis · MIT",
      discipline: "Heat transfer · materials",
      status: "starting",
      now: "A thermal paste for computer chips: AC voltage aligns multi-walled carbon nanotubes along the main heat path, Joule heating cures the matrix, and piezoelectric sensing reports the clamping force on the paste.",
      next: "Test rig for nanotube properties",
      nextDate: "Spring 2027",
      role: "SB thesis",
      team: "MIT",
      tags: ["Heat transfer", "Materials", "Sensing"],
      why: "Heat is now a limiting factor for AI hardware, and the thin layer of paste between a chip and its cooler is one of the worst links in the thermal path. The most interesting physics happens in that thin layer between two parts.",
      how: [
        "Designing a test rig to measure many properties of multi-walled carbon nanotubes before building the paste itself.",
      ],
      images: [
        { src: "assets/img/cnt-tim/hero.jpg", alt: "Concept diagram of the interface material", label: "Hero · concept diagram" },
      ],
    },
    {
      slug: "monocoque",
      group: "building",
      title: "Carbon-fiber monocoque",
      where: "MIT Motorsports",
      discipline: "Composites · structures",
      status: "active",
      now: "Designing a carbon-fiber shell chassis for lower weight and higher torsional stiffness. It changes the car's whole architecture, so it is being proven on a test article first: full design, composite FEA, and design for manufacturing and assembly.",
      next: "Fabricate the test monocoque",
      nextDate: "January 2027",
      role: "R&D lead",
      team: "MIT Motorsports",
      tags: ["Composites", "Structures", "FEA", "Manufacturing"],
      why: "A carbon monocoque is lighter and stiffer than a steel space frame, but it is a big manufacturing jump for a student team. A test article first means the competition chassis is built by people who have already made one.",
      how: [
        "Presented the design and testing requirements review on October 12, 2026.",
        "Comparing honeycomb core options (material, cell size, density, thickness) against what other FSAE teams use, to decide what to test first.",
      ],
      images: [
        { src: "assets/img/monocoque/hero.jpg", alt: "Monocoque test article in progress", label: "Hero · test monocoque in progress" },
      ],
    },
    {
      slug: "uuv-lars",
      group: "building",
      title: "Autonomous launch and recovery for small UUVs",
      where: "MIT 2.013 capstone · industry sponsors",
      discipline: "Ocean systems · dynamics",
      status: "active",
      now: "Designing a system to recover UUVs in up to Sea State 4. The ship moves and the vehicle drifts with the waves, which industry considers one of the hardest recovery problems. Current concept: a crane and A-frame that deploy a soft net to scoop the vehicle aboard without stressing its fragile fins.",
      next: "Visit an operating UUV recovery facility",
      nextDate: "Being arranged",
      role: "Team member · autonomy spec",
      team: "MIT 2.013 team",
      tags: ["Ocean engineering", "Dynamics", "Autonomy", "Mechanisms"],
      why: "Recovering a small research UUV at sea is still a hands-on, weather-limited job. Making it autonomous and gentle protects the vehicle and the crew.",
      how: [],
      images: [
        { src: "assets/img/uuv-lars/hero.jpg", alt: "UUV recovery concept sketch", label: "Hero · concept sketch" },
      ],
    },
    {
      slug: "lensless-dust",
      group: "building",
      title: "Lensless imaging of carbon-fiber dust",
      where: "MIT 2.71 Optics · team of two",
      discipline: "Optics · imaging",
      status: "active",
      now: "Finding the limits of lensless imaging, set by speckle patterns and particle size, on carbon-fiber particulate samples from the shop where we cut parts, with a forward model and a reconstruction method.",
      next: "Validation and testing",
      nextDate: "Nov 28, 2026",
      role: "Co-lead",
      team: "Team of two",
      tags: ["Optics", "Imaging", "Inverse problems"],
      why: "Lensless sensors see a whole sensor's worth of field at once and refocus numerically, which suits small particles. Carbon-fiber dust from cutting is a real exposure question in our own shop.",
      how: [
        "LED and pinhole illumination onto a bare camera sensor, sealed dust samples from the shop, microscope ground truth.",
        "Milestones: validation Nov 28, analysis Dec 5, presentation Dec 9, 2026.",
      ],
      images: [
        { src: "assets/img/lensless-dust/hero.jpg", alt: "Lensless imaging bench", label: "Hero · the optics bench" },
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  experience: [
    {
      when: "Jun – Aug 2026",
      org: "SpaceX",
      role: "Dragon Final Integration Launch Engineering Intern · Cape Canaveral, FL",
      did: [
        "Designed thruster cluster protective covers in Siemens NX; abrasion, adhesive and fitment testing on a development capsule; design reviews with about 20 engineers.",
        "Excel VBA and SQL closeout tool: 15–30 min daily task down to under 30 s, about 100 users, 30+ hours saved per mission.",
        "Supported 30+ technicians through final integration for NASA Crew-13, CRS-36 and NASA Crew-14.",
      ],
    },
    {
      when: "Sep 2024 – now",
      org: "MIT Motorsports",
      role: "Testing lead (Aug 2025 – now) · Composites sub-team analyst",
      did: [
        "Ford wind tunnel and Toyota Racing Development campaign: the team's first aero map and K&C data.",
        "40 test trips, about 400 km on the car, for a team of about 150.",
        "Rear wing (2026) and body panels (2025) built days before competition; CLPT study of woven laminates.",
      ],
    },
    {
      when: "Mar 2024 – Jun 2026",
      org: "MIT BioInstrumentation Lab",
      role: "Undergraduate researcher (UROP) · Prof. Ian Hunter",
      did: [
        "Precision flexure clamps: 30 designed, 15 built; ASPE 2024 poster; TLO disclosure.",
        "Fonterra-sponsored membrane test cart: I2C sensor network across 3 flow paths.",
        "Fluidic optical shaping: Mathematica and COMSOL lens-shaping models.",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  // Teaching & mentoring section. `subjects` shows as small tags (optional).
  teaching: [
    {
      role: "Undergraduate TA",
      where: "MIT 2.006 Thermal-Fluids Engineering II · Spring 2026",
      what: "Office hours and tutoring for 60 students in thermodynamics, fluid mechanics and heat transfer. Grader for the same class in Fall 2026.",
      subjects: [],
    },
    {
      role: "MechE department tutor",
      where: "MIT Mechanical Engineering · Sep 2025 – now",
      what: "Tutoring for about 100 peers across the core MechE subjects.",
      subjects: ["Mechanics", "Dynamics", "Controls", "Thermal-fluids", "Electronics"],
    },
    {
      role: "Private tutor",
      where: "MIT 2.004 Dynamics and Controls II · Spring 2026",
      what: "Weekly support for a visually impaired student in a class built on block diagrams, Bode plots and Nyquist plots. Finding new, non-visual ways to explain them taught me what mastering a subject really means.",
      subjects: [],
    },
    {
      role: "SHED Lab mentor",
      where: "MIT EHS · Feb 2025 – May 2026",
      what: "Maintained the advanced fabrication lab and oversaw student research projects.",
      subjects: [],
    },
  ],

  /* ---------------------------------------------------------------- */
  resume: [
    { k: "Education", v: "<strong>MIT</strong>, SB Mechanical Engineering and SB Applied Mathematics, minor in Spanish, June 2027 · GPA 4.9/5.0" },
    { k: "Graduate coursework", v: "2.55 Advanced Heat &amp; Mass Transfer, 2.25 Fluid Mechanics, 16.511 Aircraft Engines &amp; Gas Turbines" },
    { k: "Other coursework", v: "Mechanics &amp; Materials II, Design &amp; Manufacturing II, Measurement &amp; Instrumentation, 18.354 Nonlinear Dynamics: Continuum Systems, 2.71 Optics" },
    { k: "Honors", v: "Pi Tau Sigma ME Honor Society (2025) · International Design Competition Award, 5th of about 130 students in 2.007 (2025)" },
    { k: "CAD / CAE", v: "Siemens NX, SolidWorks, Autodesk Fusion, Onshape, ANSYS, COMSOL" },
    { k: "Programming", v: "Python, MATLAB, Mathematica, SQL, Excel VBA, ROS2, Linux, LaTeX" },
    { k: "Fabrication", v: "Composite wet layup and bonding, CNC machining and Fusion CAM, wire EDM, waterjet, laser cutting, FDM printing" },
  ],


  /* ---------------------------------------------------------------- */
  // Up to ~20 photos. `ratio` is width / height, used for the placeholder.
  photos: [
    { src: "assets/img/photos/01.jpg", title: "Bokeh study", place: "", ratio: 0.8 },
    { src: "assets/img/photos/02.jpg", title: "Perspective", place: "", ratio: 1.5 },
    { src: "assets/img/photos/03.jpg", title: "Coastline", place: "", ratio: 1.5 },
    { src: "assets/img/photos/04.jpg", title: "Facade", place: "", ratio: 0.75 },
    { src: "assets/img/photos/05.jpg", title: "Night lights", place: "", ratio: 1.33 },
    { src: "assets/img/photos/06.jpg", title: "Stairwell", place: "", ratio: 0.8 },
    { src: "assets/img/photos/07.jpg", title: "Landscape", place: "", ratio: 1.78 },
    { src: "assets/img/photos/08.jpg", title: "Reflections", place: "", ratio: 1 },
    { src: "assets/img/photos/09.jpg", title: "Skyline", place: "", ratio: 1.5 },
  ],
  // One before/after pair to show editing.
  edit: {
    before: "assets/img/photos/edit-before.jpg",
    after: "assets/img/photos/edit-after.jpg",
    title: "Raw to finished",
    note: "Drag across to compare the straight-out-of-camera frame with the final edit.",
  },
};
