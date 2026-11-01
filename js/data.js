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
        { src: "assets/img/flexure-clamps/aspe-poster-session.jpg", alt: "The flexure clamp poster on its board at the 39th ASPE Annual Meeting", label: "At the 39th ASPE Annual Meeting, Houston" },
        { src: "assets/img/flexure-clamps/edm-plate.jpg", alt: "Bryce holding the aluminum plate the flexure clamps were wire-EDM cut from", label: "The wire-EDM plate the clamps were cut from" },
        { src: "assets/img/flexure-clamps/poster.jpg", alt: "The full ASPE 2024 poster, Novel In-Plane Flexure-Based Clamp Designs", label: "The ASPE 2024 poster", fit: "contain" },
        { src: "assets/img/flexure-clamps/model.jpg", alt: "Equations relating screw torque to clamping pressure, with cantilever and tapered-screw diagrams", label: "Torque-to-pressure model", fit: "contain" },
        { src: "assets/img/flexure-clamps/fea.jpg", alt: "Von Mises stress plot of a flexure clamp under load", label: "FEA: von Mises stress under clamping load", fit: "contain" },
        { src: "assets/img/flexure-clamps/panel-designs.jpg", alt: "CAD of three panel flexure clamp designs, labeled L, M and N", label: "Panel flexure clamp designs L to N", fit: "contain" },
      ],
    },
    {
      // Season 1 of 2 on the team. The MY26 season is the next entry.
      slug: "motorsports-my25",
      group: "featured",
      title: "MIT Motorsports MY25: 9th of 86",
      where: "MIT Motorsports · Formula SAE Electric",
      when: "Sep 2024 – Aug 2025",
      status: "done",
      role: "Composites sub-team: body panels, livery and competition prep · Testing lead from summer 2025",
      team: "MIT Motorsports, about 150 members",
      tags: ["Composites", "Manufacturing", "Livery", "Vehicle testing"],
      result: "Placed 9th of 86 teams at FSAE Michigan 2025, with body panels I laid up and finished in the last two weeks before competition.",
      did: [
        "Wet laid up 7 aerodynamic body panels in under 2 weeks before the 2025 competition, including post-processing and weight optimization.",
        "Handled the car's livery.",
        "Prepared the car for competition and helped carry it through technical inspection at FSAE Michigan.",
        "Became testing lead after competition and ran the MY25 car through summer 2025 and into the MY26 season.",
      ],
      why: "An FSAE car only scores if it runs. In MY25 the gap between a finished design and a car that passes tech came down to composites work on a very short timeline.",
      how: [
        "In June 2025 the aero team left for the summer, so the autonomous team built the aero package. I mentored them in manufacturing and made the body panels, finishing them in a parking lot the night before competition in Michigan.",
        "Panels were wet laid up and cured under vacuum, then trimmed, sanded and lightened before paint and livery.",
        "As testing lead I ran the cross-country test campaign at Ford's wind tunnel and Toyota Racing Development, which produced the team's first-ever aero map and kinematics and compliance (K&C) data.",
      ],
      images: [
        { src: "assets/img/mit-motorsports/my25-autocross.jpg", alt: "The MY25 car on track at FSAE Michigan 2025", label: "MY25 on track at FSAE Michigan, June 2025" },
        { src: "assets/img/mit-motorsports/my25-panels-airtech.jpg", alt: "Team members holding MY25 carbon body panels in progress, in a thank-you photo for sponsor Airtech", label: "MY25 carbon body panels weeks before competition, with thanks to Airtech for materials" },
        { src: "assets/img/mit-motorsports/my25-layup.jpg", alt: "Body panels curing under vacuum bags", label: "MY25 body panels curing under vacuum" },
        { src: "assets/img/mit-motorsports/my25-trailer.jpg", alt: "Bryce with the MY25 car beside the team trailer", label: "With the MY25 car" },
        { src: "assets/img/mit-motorsports/times-square.jpg", alt: "The MIT Motorsports car on the Nasdaq screen in Times Square", label: "MY25 on the Times Square Nasdaq screen, through our sponsor Navitas" },
        { src: "assets/img/mit-motorsports/kc-rig.jpg", alt: "The car on the kinematics and compliance rig at Toyota Racing Development", label: "Kinematics and compliance rig, Toyota Racing Development" },
        { src: "assets/img/mit-motorsports/kc-team.jpg", alt: "The test team with the car at Toyota Racing Development", label: "The K&C test team at TRD" },
      ],
    },
    {
      // Season 2 of 2. (Slug kept as "mit-motorsports" so older links still work.)
      slug: "mit-motorsports",
      group: "featured",
      title: "MIT Motorsports MY26: 20th of 103",
      where: "MIT Motorsports · Formula SAE Electric",
      when: "Sep 2025 – Jun 2026",
      status: "done",
      role: "Testing lead · Rear-wing manufacturing · Autonomous mechanisms and sensors lead · Mechanical prep",
      team: "MIT Motorsports, about 150 members; worked with every subteam",
      tags: ["Composites", "Vehicle testing", "Instrumentation", "Autonomy"],
      result: "Placed 20th of 103 teams at FSAE Michigan 2026. I was the main person getting the car through competition, with the rear wing I built going on three days before.",
      did: [
        "Owned the rear-wing build through the end plates and bonded joints, under a timeline that ended 3 days before competition.",
        "Prepared every mechanical component of the car for assembly once it was designed.",
        "Organized 40 test trips (about 400 km on the car), leading maintenance and scrutineering to keep the driver safe.",
        "Led autonomous mechanisms and sensors, building the team's autonomous testbed vehicle.",
        "Was the main person getting the car through technical inspection and the events at FSAE Michigan 2026.",
      ],
      why: "MY26 was a new car that had to be built, tested and taken through tech in one season. Most of my work was closing the gap between the design and a car that runs.",
      how: [
        "End-plate laminate: a hex-weave outer ply for a smooth surface, 2x2 twill, a 1/4 in foam core, 2x2 twill and 12K spread tow, tuned for stiffness.",
        "The wing has no bolted joints: the airfoils are bonded to the end plates with epoxy fillets and carbon overlaminate. With no reliable way to predict the bond's strength, the joint was deliberately oversized. Problems like that one are what I want to understand well enough to design with confidence.",
        "Instrumented the car with push-rod strain gauges and tire and brake temperature sensors, and worked on debugging inverter and battery faults.",
      ],
      images: [
        { src: "assets/img/mit-motorsports/my26-autocross.jpg", alt: "The MY26 car on track at FSAE Michigan 2026", label: "MY26 on track at FSAE Michigan, June 2026" },
        { src: "assets/img/mit-motorsports/my26-rear-wing.jpg", alt: "The MY26 rear wing, with hex-weave carbon end plates bonded to the airfoils", label: "MY26 rear wing: bonded end plates, no bolts" },
        { src: "assets/img/mit-motorsports/my26-staging.jpg", alt: "Bryce and teammates staging the MY26 car at competition", label: "Staging the MY26 car at competition" },
        { src: "assets/img/mit-motorsports/my26-first-build.jpg", alt: "The MY26 car fully assembled for the first time, on stands beside the team trailer", label: "MY26 fully assembled for the first time" },
        { video: "assets/video/night-testing.mp4", src: "assets/video/night-testing-poster.jpg", alt: "The car running an autocross course in a parking lot at night", label: "Overnight testing, fall 2025" },
        { src: "assets/img/mit-motorsports/team-2026.jpg", alt: "MIT Motorsports team photo at FSAE Michigan 2026", label: "The team at FSAE Michigan 2026" },
      ],
    },

    {
      slug: "scissor-lift",
      group: "featured",
      title: "Scissor-ception: a double scissor-lift robot",
      where: "MIT 2.007 Design and Manufacturing I",
      when: "Spring 2025",
      status: "done",
      role: "Designer and builder",
      team: "Individual project, 2.007",
      tags: ["Mechanism design", "Machining", "Robotics"],
      result: "Placed 5th of about 130 students and received the International Design Competition Award.",
      did: [
        "Designed and machined a double scissor-lift mechanism that extends far above the robot's footprint and collapses back down into it.",
        "Prototyped the linkage, then built the full aluminum lift and mounted it on a driven base.",
        "Competed in the 2.007 final contest and presented the robot on stage.",
      ],
      why: "2.007 is MIT's design and build course where every student builds their own competition robot. A scissor lift reaches high scoring positions from a small starting footprint, but stacking two lifts makes alignment, stiffness and binding the real design problems.",
      how: [],
      images: [
        { src: "assets/img/scissor-lift/robot-lit.jpg", alt: "The Scissor-ception robot, its scissor lift collapsed, lit green on the contest table", label: "Scissor-ception on contest day" },
        { src: "assets/img/scissor-lift/lift-extended.jpg", alt: "The double scissor lift built on its aluminum base", label: "The double scissor lift" },
        { src: "assets/img/scissor-lift/lift-tower.jpg", alt: "The scissor lift fully extended in the shop", label: "Fully extended in the shop" },
        { video: "assets/video/scissor-extend.mp4", src: "assets/video/scissor-extend-poster.jpg", alt: "The powered double scissor lift extending to full height", label: "The powered lift extending" },
        { src: "assets/img/scissor-lift/prototype.jpg", alt: "Early scissor linkage prototype on the bench", label: "Early linkage prototype" },
        { video: "assets/video/scissor-prototype.mp4", src: "assets/video/scissor-prototype-poster.jpg", alt: "Opening and closing the hand-built linkage prototype", label: "Hand-testing the linkage prototype" },
        { src: "assets/img/scissor-lift/contest-field.jpg", alt: "The lift extended on the competition field", label: "Extended on the competition field" },
        { video: "assets/video/scissor-contest.mp4", src: "assets/video/scissor-contest-poster.jpg", alt: "The lift extending on the competition field", label: "Extending on the contest field" },
        { src: "assets/img/scissor-lift/presenting.jpg", alt: "Bryce presenting the robot at the 2.007 final contest", label: "Presenting at the final contest" },
        { src: "assets/img/scissor-lift/award.jpg", alt: "Bryce receiving the International Design Competition Award certificate", label: "International Design Competition Award, May 2025" },
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
        { src: "assets/img/woven-clpt/three-point-bend.jpg", alt: "A woven carbon coupon loaded in a three-point bend fixture", label: "Three-point bend test on a woven laminate coupon" },
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
        { src: "assets/img/membrane-cart/perfboard-front.jpg", alt: "The finished perf board with the purple PCA9548A multiplexer and color-coded wiring", label: "The finished sensor board" },
        { src: "assets/img/membrane-cart/perfboard-diagram.png", alt: "KiCad wiring schematic: Arduino Uno connected to a PCA9548A I2C multiplexer perf board serving six flow sensors", label: "Perf board wiring schematic (KiCad)", fit: "contain" },
        { src: "assets/img/membrane-cart/perfboard-back.jpg", alt: "Solder side of the perf board", label: "Solder side" },
        { src: "assets/img/membrane-cart/perfboard-soldering.jpg", alt: "The board mid-build in the soldering station", label: "Mid-build" },
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
        "Designed the shaper: a three-plate SLA-printed housing with a borosilicate UV window and 365 nm LEDs, targeting a 25 mm NOA-81 lens.",
        "Ran COMSOL simulations of resin wetting and capillary action.",
        "Identified poor surface wetting as the barrier to reliable fabrication.",
        "Wrote the 18.354 paper \"Surface Tension as a Lens Maker\" on the underlying physics.",
      ],
      why: "Shaping lenses directly from liquid, with surface tension doing the polishing, could make custom optics without grinding or molds.",
      how: [
        "In fluidic shaping, the resin sits in an immersion liquid so surface tension rather than gravity sets the lens shape, and UV light through the window cures it in place. I developed a Bond-number framework that uses a controlled density mismatch to design asymmetric biconvex lenses.",
        "Irradiance-uniformity and cure-time calculations sized the LED array and diffuser.",
      ],
      images: [
        { src: "assets/img/fluidic-lens/shaper-rig.jpg", alt: "The fluidic lens shaper: a black printed housing with fluid lines and valve on an aluminum stand", label: "The lens shaper rig" },
        { src: "assets/img/fluidic-lens/shaper-body.jpg", alt: "The stacked three-plate shaper housing", label: "Three-plate printed housing" },
        { src: "assets/img/fluidic-lens/resin-fill.jpg", alt: "Filling the shaping chamber with a syringe", label: "Filling the shaping chamber" },
        { video: "assets/video/test-lens.mp4", src: "assets/video/test-lens-poster.jpg", alt: "Looking through a cured test lens at handwriting", label: "Looking through a test lens" },
      ],
    },

    {
      slug: "yoyo-2008",
      group: "also",
      title: "Injection-molded yo-yos with an overmolded bearing",
      short: "Designed and machined most of the injection molds for a yo-yo run, and found a way to overmold the bearing that worked on the first try.",
      where: "MIT 2.008 Design and Manufacturing II",
      when: "Fall 2025",
      status: "done",
      role: "Mold designer and machinist",
      team: "2.008 team",
      tags: ["Injection molding", "CNC machining", "Manufacturing"],
      result: "Overmolded bearings held in place in the yo-yo bodies on the first attempt.",
      did: [
        "Designed most of the team's injection molds and machined almost all of them, including the molds shown here.",
        "Ran the molds on a Boy injection molding machine to produce the yo-yo bodies.",
        "As an independent side project, used shoulder bolts to hold a bearing in place in the mold so the plastic is molded around it.",
        "Presented the production run at the 2.008 showcase.",
      ],
      why: "Pressing a bearing into a molded part adds an assembly step and a fit that can loosen. Molding the part around the bearing removes both, if the bearing can be held exactly in place against the injection pressure.",
      how: [],
      images: [
        { src: "assets/img/yoyo-2008/yoyos.jpg", alt: "Three translucent blue injection-molded yo-yos", label: "Finished yo-yos" },
        { src: "assets/img/yoyo-2008/mold-open.jpg", alt: "The two machined aluminum mold halves, opened", label: "Machined mold halves" },
        { src: "assets/img/yoyo-2008/overmolded-bearing.jpg", alt: "A bearing molded into the center of a yo-yo body", label: "The overmolded bearing" },
        { src: "assets/img/yoyo-2008/mold-cavity.jpg", alt: "The mold cavity in the injection molding machine", label: "Mold in the press" },
        { src: "assets/img/yoyo-2008/showcase.jpg", alt: "Showing a yo-yo at the 2.008 showcase", label: "At the 2.008 showcase" },
        { video: "assets/video/yoyo.mp4", src: "assets/video/yoyo-poster.jpg", alt: "A finished yo-yo in motion", label: "A finished yo-yo" },
      ],
    },
    {
      slug: "maslab",
      group: "also",
      title: "MASLAB autonomous robot",
      short: "Built an autonomous robot that scoops up green blocks and stacks them, in MIT's month-long Mobile Autonomous Systems Laboratory.",
      where: "MIT MASLAB · Team 1",
      when: "IAP (January) 2025",
      status: "done",
      role: "Team member",
      team: "MASLAB Team 1",
      tags: ["Robotics", "Autonomy", "Mechanisms"],
      result: "A fully autonomous robot that finds green blocks on the field, scoops them up and stacks them.",
      did: [
        "Built the robot with my team during MASLAB 2025: a laser-cut chassis with an intake that scoops blocks and a lift tower that stacks them.",
      ],
      why: "MASLAB (Mobile Autonomous Systems Laboratory) runs during MIT's January term: teams design, wire and program a fully autonomous robot from scratch in about a month, then compete.",
      how: [],
      images: [
        { src: "assets/img/maslab/robot.jpg", alt: "The MASLAB Team 1 robot, a laser-cut wooden frame with a lift tower", label: "The MASLAB Team 1 robot" },
        { video: "assets/video/maslab-robot.mp4", src: "assets/video/maslab-robot-poster.jpg", alt: "The MASLAB robot on the bench", label: "The robot on the bench" },
        { src: "assets/img/maslab/robot-desk.jpg", alt: "The robot on the workbench", label: "On the bench" },
      ],
    },
    {
      slug: "autonomous-testbed",
      group: "also",
      title: "Autonomous testbed vehicle",
      short: "Built the scaled test vehicle MIT Motorsports' autonomous team develops its driving stack on, including all of the sensor mounting.",
      where: "MIT Motorsports · autonomous team",
      when: "Fall 2025",
      status: "done",
      role: "Autonomous mechanisms and sensors lead (MY26): built the vehicle, sensor mounting and mechanical setup",
      team: "Built for the MIT Motorsports autonomous team",
      tags: ["Autonomy", "Vehicle systems", "Sensor mounting"],
      result: "A sensor-equipped scaled vehicle, ready for the autonomous team to run on cone courses.",
      did: [
        "Built the testbed myself, setting it up to work for the autonomous team.",
        "Designed and installed all of the sensor mounting.",
        "Got everything working mechanically on the vehicle so the team could focus on software.",
      ],
      why: "Testing perception and control on a small vehicle is faster, cheaper and safer than on the full race car.",
      how: [],
      images: [
        { src: "assets/img/autonomous-testbed/track.jpg", alt: "The autonomous test vehicle on a running track among traffic cones", label: "Running a cone course" },
        { src: "assets/img/autonomous-testbed/build.jpg", alt: "The test vehicle with its blue sensor mast on the workbench", label: "Sensor mast and electronics" },
        { src: "assets/img/autonomous-testbed/early-build.jpg", alt: "Early build of the test vehicle with roll cage and compute", label: "Early build" },
      ],
    },
    {
      slug: "sem-nanomaterials",
      group: "also",
      title: "Metamaterial unit cells",
      short: "Designed a 25%-density metamaterial unit cell that placed 3rd in the class on stiffness and toughness before the density adjustment.",
      where: "MIT 2.002 Mechanics and Materials II",
      when: "Spring 2026",
      status: "done",
      role: "Team member",
      team: "2.002 project team",
      tags: ["Metamaterials", "Mechanics of materials", "Testing", "SEM"],
      result: "3rd in the class on raw stiffness and toughness; 8th once results were normalized for density.",
      did: [
        "Designed metamaterial unit cells at 25% relative density by volume.",
        "Measured their stiffness and toughness in mechanical testing, as part of a class-wide competition.",
        "Imaged the lattice structure in a scanning electron microscope.",
      ],
      why: "A metamaterial's behavior comes from the geometry of its unit cell as much as from the base material, so the challenge was to get the most stiffness and toughness out of a fixed amount of material.",
      how: [],
      images: [
        { src: "assets/img/sem-nanomaterials/sem-lattice.jpg", alt: "SEM image of the metamaterial lattice on the microscope monitor", label: "The lattice under the SEM" },
        { src: "assets/img/sem-nanomaterials/sem-closeup.jpg", alt: "Closer SEM view of the lattice sample", label: "Closer view" },
      ],
    },
    {
      slug: "handcuff-pen",
      group: "also",
      title: "The handcuff pen",
      short: "A first design project that invented a new interface: a pen chained to a handcuff bracelet. It is also where flexure design first caught my attention.",
      where: "MIT 2.S00 · first-year design",
      when: "Spring 2024",
      status: "done",
      role: "Co-designer",
      team: "Team of two",
      tags: ["Product design", "3D printing", "Flexures"],
      result: "A Lego-compatible, 3D-printed pen set built around a cops-and-robbers story, featured in a published paper about the class.",
      did: [
        "Took a brief for Lego-compatible 3D-printed parts and built a cops-and-robbers story around a pen holder, with a handcuff bracelet chained to the pen.",
        "Designed the cuff to flex closed. It didn't flex the way we wanted, because I didn't know flexure design yet.",
      ],
      why: "That cuff is why I later did a full research project on flexure clamps: I wanted the intuition to design parts like it properly.",
      how: [],
      images: [
        { src: "assets/img/handcuff-pen/pen.jpg", alt: "The 3D-printed pen holder, pen and chained cuff on a desk", label: "The handcuff pen" },
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
      where: "MIT Motorsports · MY27 design",
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
      role: "Testing lead (Aug 2025 – now) · Composites · Monocoque R&D lead (MY27)",
      did: [
        "MY25: body panels, livery and competition prep; 9th of 86 teams at FSAE Michigan 2025.",
        "MY26: rear wing, mechanical prep, autonomous testbed and 40 test trips; 20th of 103 at FSAE Michigan 2026.",
        "Ford wind tunnel and Toyota Racing Development campaign: the team's first aero map and K&C data.",
        "MY27: leading R&D on the team's first carbon-fiber monocoque.",
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
  // Photographs. `ratio` is width / height. `place` is optional; leave it
  // "" unless you know where the shot was taken. All files in
  // assets/img/photos have had their metadata (EXIF, GPS, camera) removed.
  photos: [
    { src: "assets/img/photos/canyon.jpg", title: "Canyon rim", place: "", ratio: 0.75 },
    { src: "assets/img/photos/strawberry.jpg", title: "Strawberry, submerged", place: "", ratio: 0.848 },
    { src: "assets/img/photos/telluride-after.jpg", title: "Above Telluride", place: "Telluride, Colorado", ratio: 0.751 },
    { src: "assets/img/photos/dunes.jpg", title: "Dunes under a storm", place: "", ratio: 0.894 },
    { src: "assets/img/photos/stapler-after.jpg", title: "Stapler in bokeh", place: "", ratio: 0.776 },
    { src: "assets/img/photos/asphalt-sunset.jpg", title: "Sunrise at road level", place: "", ratio: 0.75 },
    { src: "assets/img/photos/double-exposure.jpg", title: "Double exposure", place: "", ratio: 0.968 },
    { src: "assets/img/photos/leaf-after.jpg", title: "Through the leaf", place: "", ratio: 0.762 },
    { src: "assets/img/photos/silhouette.jpg", title: "First light", place: "", ratio: 0.75 },
    { src: "assets/img/photos/bb8-after.jpg", title: "BB-8 in bokeh", place: "", ratio: 0.83 },
    { src: "assets/img/photos/flare.jpg", title: "Light through a window", place: "", ratio: 0.75 },
    { src: "assets/img/photos/palms.jpg", title: "Palms at sunrise", place: "", ratio: 0.75 },
    { src: "assets/img/photos/doorway.jpg", title: "Stone doorway", place: "", ratio: 0.75 },
  ],
  // Before / after editing comparisons. Visitors switch between them with
  // the tabs above the slider. Add or remove pairs freely.
  edits: [
    { title: "Through the leaf", before: "assets/img/photos/leaf-before.jpg", after: "assets/img/photos/leaf-after.jpg", ratio: 0.762 },
    { title: "Stapler", before: "assets/img/photos/stapler-before.jpg", after: "assets/img/photos/stapler-after.jpg", ratio: 0.776 },
    { title: "BB-8", before: "assets/img/photos/bb8-before.jpg", after: "assets/img/photos/bb8-after.jpg", ratio: 0.83 },
    { title: "Telluride", before: "assets/img/photos/telluride-before.jpg", after: "assets/img/photos/telluride-after.jpg", ratio: 0.751 },
  ],
  editNote: "Drag across each frame to compare the photo straight out of the camera with the finished edit. Pick a pair with the buttons.",
};
