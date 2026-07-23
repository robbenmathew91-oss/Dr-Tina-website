# Publications Completeness & Gap Analysis Report

This report audits the completeness of the publications database (`data/publications.json`) against the complete 80-work bibliography of Dr. Tina Salguero documented in the research dossier.

## 1. Bibliography Completeness Summary

- **Total Bibliography Publications:** 79
- **Currently Included in `publications.json`:** 8
- **Total Missing/Omitted Publications:** 71

## 2. Omission Rationale Classification

Omitted papers have been categorized into one of three classifications:

1. **[PREPRINT]**: The entry is an un-reviewed ArXiv preprint. To prevent duplicating bibliography entries, we only include the final peer-reviewed journal article.
2. **[PROCEEDINGS / ABSTRACT]**: The entry is a short conference summary, workshop abstract, or SPIE proceeding rather than a primary journal article or review. These are excluded to keep the lab portal publication list focused on high-impact journal articles.
3. **[DEVELOPMENT PHASE]**: To validate the initial layout rendering, search functions, and schema logic, a curated representative set of 8 landmark and recent papers was chosen. The remaining peer-reviewed journal papers will be migrated into the JSON database in the next phase of deployment.

## 3. List of Missing Publications & Omission Rationales

| Year | Title | Venue | DOI/ID | Omission Rationale |
| :--- | :--- | :--- | :--- | :--- |
| 2026 | Electrically and Magnetically Tunable Charge-Density-Wave Transport in Quasi-2D h-BN/1T-TaS2 Thin-Film Heterostructures | — | ArXiv 2603.27731 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2026 | Phonon Signatures of Near-Room-Temperature Phase Transition in Quasi-One-Dimensional Bi4I4 Topological Narrow-Gap Semiconductor | ACS Appl. Mater. Interfaces | 10.1021/acsami.6c07650 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2026 | Phonon Signatures of Near-Room-Temperature Phase Transition in Quasi-One-Dimensional Bi4I4 Topological van der Waals Material | — | ArXiv 2603.29189 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2026 | Radio-Frequency-Driven Reshaping of the Mesoscale Charge-Density-Wave Landscape in 1T-TaS2 Thin-Film Devices | — | ArXiv 2604.00463 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2025 | Giant gate response of the charge in an electron–lattice condensate | Nature Electronics | 10.1038/s41928-026-01636-x | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2025 | Quantum Spin Singlet and Classical Néel-Ordered Ground States in MoX3 (X = I, Br) Spin-3/2 Dimerized Antiferromagnetic Chain Crystals | — | ArXiv 2510.12613 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2025 | A quieter state of charge and ultra-low-noise of the collective current in quasi-1D charge-density-wave nanowires | Nature Communications | 10.1038/s41467-025-67567-x | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2024 | Development of Inks with Fillers of NbS3 Quasi-One-Dimensional Charge-Density-Wave Material | ACS Appl. Electron. Mater. | 10.1021/acsaelm.4c00646 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2024 | Solution-Processed Inks with Fillers of NbS3 Quasi-One-Dimensional Charge-Density-Wave Material | — | ArXiv 2404.09038 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2023 | Machine-Learning-Driven Expansion of the 1D van der Waals Materials Space | J. Phys. Chem. C | 10.1021/acs.jpcc.3c03882 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2023 | Electric-field modulation of the charge-density-wave quantum condensate in h-BN/NbS3 quasi-2D/1D heterostructure devices | Applied Physics Letters | 10.1063/5.0185060 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2023 | Quantum Composites with Charge-Density-Wave Fillers | Advanced Materials | 10.1002/adma.202209708 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2023 | Electrical-Field Modulation of the Charge-Density-Wave Quantum Condensate in h-BN/NbS3 Heterostructure Devices | — | ArXiv 2310.19027 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2023 | Quantum Composites with the Functionality Defined by the Charge-Density-Wave Phase Transitions | — | ArXiv 2302.11069 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2023 | Investigating a Wide Array of Thermally-driven Events... (Microscopy & Microanalysis abstract) | Microscopy and Microanalysis | 10.1093/micmic/ozad067.763 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2022 | Charge-density-wave phase transitions in quasi-2D 1T-TaS2/h-BN heterostructure devices | NanoScience + Engineering (SPIE) | 10.1117/12.2637881 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2022 | Electrical Gating of the Charge-Density-Wave Phases in Two-Dimensional h-BN/1T-TaS2 Devices | ACS Nano | 10.1021/acsnano.2c07876 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2022 | Elemental excitations in MoI3 one-dimensional van der Waals nanowires | Applied Physics Letters | 10.1063/5.0129904 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2022 | Low-Frequency Noise in Quasi-1D (TaSe4)2I Weyl Semimetal Nanoribbons | — | ArXiv 2208.06476 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2022 | Metallic vs. semiconducting properties of quasi-one-dimensional tantalum selenide van der Waals nanoribbons | Nanoscale | 10.1039/d1nr07772d | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2022 | Charge-Density-Wave Thin-Film Devices Printed with Chemically Exfoliated 1T-TaS2 Ink | ACS Nano | 10.1021/acsnano.2c00378 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2022 | Low-Frequency Current Fluctuations in Quasi-1D (TaSe4)2I Weyl Semimetal Nanoribbons | Advanced Electronic Materials | 10.1002/aelm.202200860 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2022 | Electrical Gating of the Charge-Density-Wave Phases in Quasi-2D h-BN/1T-TaS2 Devices | — | ArXiv 2208.07857 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2021 | Electromagnetic-Polarization-Selective Composites with Quasi-1D Van der Waals Fillers | ACS Appl. Mater. Interfaces | 10.1021/acsami.1c03204 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2021 | Electrically Insulating Flexible Films with Quasi-1D van der Waals Fillers as Efficient Electromagnetic Shields in the GHz and Sub-THz Frequency Bands | Advanced Materials | 10.1002/adma.202007286 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2021 | Thermal Stability of Quasi-1D NbS3 Nanoribbons and Their Transformation to 2D NbS2 | Chemistry of Materials | 10.1021/acs.chemmater.1c03411 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2021 | Metallic vs. Semiconducting Properties of Quasi-One-Dimensional Tantalum Selenide van der Waals Nanoribbons (preprint) | — | ArXiv 2111.12829 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2021 | Turning the Tide for Academic Women in STEM: A Postpandemic Vision for Supporting Female Scientists | ACS Nano | 10.1021/acsnano.1c09686 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2019 | Synthesis and characterization of polyaniline nanofibers as cathode active material for sodium-ion battery | J. Appl. Electrochem. | 10.1007/s10800-019-01298-y | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2019 | Proton-irradiation-immune electronics implemented with two-dimensional charge-density-wave devices | Nanoscale | 10.1039/C9NR01614G | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2019 | Bias-Voltage Driven Switching of the Charge-Density-Wave and Normal Metallic Phases in 1T-TaS2 Thin-Film Devices | ACS Nano | 10.1021/acsnano.9b02870 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2019 | Low-Frequency Noise Spectroscopy of the Charge-Density-Wave Phase Transitions in Vertical Tantalum Disulfide Devices | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2019 | Low-frequency noise spectroscopy of charge-density-wave phase transitions in vertical quasi-2D 1T-TaS2 devices | Applied Physics Express | 10.7567/1882-0786/ab0397 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2019 | Application of Low kV EELS to Problematic Samples | Microscopy and Microanalysis | 10.1017/S1431927619003064 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Dielectric Ceramics in Nanosheet Form (Final report) | DOE technical report | 10.2172/1579348 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Total Ionizing Dose Effects on the 1T-TaS2 Charge-Density-Wave Devices | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Monoclinic structures of niobium trisulfide | APL Materials | 10.1063/1.5005813 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Current Carrying Capacity of Quasi-1D ZrTe3 Van Der Waals Nanoribbons | IEEE Electron Device Letters | 10.1109/LED.2018.2820140 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Electronic and Vibrational Properties of New Polymorphs of NbS3: Phase-IV and Phase-V | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Low-Frequency Current Fluctuations and Sliding of the Charge Density Waves in Two-Dimensional Materials | Nano Letters | 10.1021/acs.nanolett.8b00729 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Nanostructuring of Strontium Hexaboride via Lithiation | Inorganic Chemistry | 10.1021/acs.inorgchem.7b02460 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Current-Voltage Characteristics of Quasi-1D Monoclinic NbS3-V Devices | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Insights Into the Structure of the Ligand Capping Layer of Inorganic Nanostructures via Multi kV Electron Microscopy Analysis | Microscopy and Microanalysis | 10.1017/S1431927618003872 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Unique Features of Electron Transport and Low-Frequency Noise in Quasi-One-Dimensional ZrTe3 van der Waals Nanoribbons | Device Research Conference | 10.1109/DRC.2018.8442263 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2018 | Unique features of the generation-recombination noise in quasi-one-dimensional van der Waals nanoribbons | Nanoscale | 10.1039/c8nr06984k | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Pigments, binders, and ages of rock art at Viuda Quenzana, Santa Cruz, Patagonia (Argentina) | J. Archaeological Science: Reports | 10.1016/J.JASREP.2018.01.004 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2018 | Anomalous Characteristics of the Generation-Recombination Noise in Quasi-One-Dimensional Van der Waals Nanoribbons | — | ArXiv 1808.09618 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2017 | Total-Ionizing-Dose Effects on Threshold Switching in 1T-TaS2 Charge Density Wave Devices | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2017 | Expanding the Depth of Field for Imaging with Low keV Electrons... (LaB6 study) | Microscopy and Microanalysis | 10.1017/S1431927617009813 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2017 | δ-Polymorph of Manganese Phosphate | Crystal Growth & Design | 10.1021/ACS.CGD.7B00816 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2017 | Low-frequency noise in quasi-1D TaSe3 van der Waals nanowires | Intl. Conf. on Noise and Fluctuations | 10.1109/ICNF.2017.7986013 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2017 | Total-Ionizing-Dose Effects on Threshold Switching in 1T-TaS2 Charge Density Wave Devices | IEEE Electron Device Letters | 10.1109/LED.2017.2763597 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2016 | An Integrated Tantalum Sulfide–Boron Nitride–Graphene Oscillator (preprint) | — | ArXiv 1602.05147 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2016 | Breakdown current density in h-BN-capped quasi-1D TaSe3 metallic nanowires | Nanoscale | 10.1039/c6nr03469a | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2016 | Quasi-1D van der Waals materials as high current-density local interconnects | NanoScience + Engineering (SPIE) | 10.1117/12.2235467 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2016 | Analysis of metal chalcogenide materials grown by chemical vapor transport | — | — | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2016 | Formation and Scrolling Behavior of Metal Fluoride and Oxyfluoride Nanosheets | Chemistry of Materials | 10.1021/ACS.CHEMMATER.6B02061 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2015 | The Commensurate-Incommensurate Charge-Density-Wave Transition and Phonon Zone Folding in 1T-TaSe2 Thin Films (preprint) | — | ArXiv 1503.06891 | **[PREPRINT]** Duplicative; official peer-reviewed version preferred. |
| 2015 | Frontispiece: Hydrothermal Formation of Calcium Copper Tetrasilicate | Chemistry – A European Journal | 10.1002/chem.201584961 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2015 | Zone-Folded Phonons and the Commensurate-Incommensurate Charge-Density-Wave Transition in 1T-TaSe2 Thin Films | Nano Letters | 10.1021/nl504811s | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2015 | Hydrothermal Formation of Calcium Copper Tetrasilicate | Chemistry – A European Journal | 10.1002/chem.201503364 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2014 | Nanoscience of Metal Silicate-Based Pigments | MRS Online Proceedings | 10.1557/OPL.2014.465 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2014 | Exfoliation of Egyptian Blue and Han Blue, Two Alkali Earth Copper Silicate-based Pigments | J. Visualized Experiments | 10.3791/51686 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2014 | Chromism of Bi2WO6 in single crystal and nanosheet forms | J. Mater. Chem. C | 10.1039/C3TC32070G | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2013 | Phonon and Thermal Properties of Exfoliated Tantalum Diselenide Thin Films | — | 10.1063/1.4833250 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |
| 2013 | All-metallic electrically gated 2H-TaSe2 thin-film switches and logic circuits | J. Applied Physics | 10.1063/1.4862336 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2012 | A conductive and hydrophilic bipolar plate coating for enhanced PEM fuel cell performance and water management | J. Power Sources | 10.1016/J.JPOWSOUR.2012.03.005 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2012 | Nanostructured Scrolls from Graphene Oxide for Microjet Engines | J. Phys. Chem. Lett. | 10.1021/jz300749p | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2009 | Local bonding and atomic environments in Ni-catalyzed complex hydrides | Nanotechnology | 10.1088/0957-4484/20/20/204007 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2007 | Thermodynamic destabilization and reaction kinetics in light metal hydride systems | J. Alloys Compd. | 10.1016/J.JALLCOM.2007.02.080 | **[DEVELOPMENT PHASE]** Omitted from initial subset; to be imported in Content Phase 2. |
| 2007 | Spatial Configurations of Ti- and Ni- Species Catalyzing Complex Metal Hydrides | (proceedings) | 10.1063/1.2644617 | **[PROCEEDINGS / ABSTRACT]** Non-journal conference proceeding or abstract. |