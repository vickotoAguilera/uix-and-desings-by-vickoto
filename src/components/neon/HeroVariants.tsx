"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Zap, Shield, Cpu, Globe, ArrowRight, Terminal } from 'lucide-react';

import { MaisonLuxuryHero } from './designs/MaisonLuxuryHero';
import { CyberpunkTerminalHero } from './designs/CyberpunkTerminalHero';
import { CorporateSaaSHero } from './designs/CorporateSaaSHero';
import { FoodieKitchenHero } from './designs/FoodieKitchenHero';
import { SocialImpactHero } from './designs/SocialImpactHero';
import { TravelAdventureHero } from './designs/TravelAdventureHero';
import { RealEstateHero } from './designs/RealEstateHero';
import { FitnessWellnessHero } from './designs/FitnessWellnessHero';
import { EducationHero } from './designs/EducationHero';
import { ShopHero } from './designs/ShopHero';
import { PortfolioHero } from './designs/PortfolioHero';
import { DashboardSaaSHero } from './designs/DashboardSaaSHero';
import { FintechCryptoHero } from './designs/FintechCryptoHero';
import { EventsConferencesHero } from './designs/EventsConferencesHero';
import { AIOrchestratorHero } from './designs/AIOrchestratorHero';
import { QuantumEvolutionHero } from './designs/QuantumEvolutionHero';
import { BiotechGenomicsHero } from './designs/BiotechGenomicsHero';
import { EcoCitiesHero } from './designs/EcoCitiesHero';

export const HeroVariants = {
  // D18. Eco-Cities & Sustainable Architecture (20/20 Variantes)
  Vertical_Forest: EcoCitiesHero.Vertical_Forest,
  Solar_Pavilion: EcoCitiesHero.Solar_Pavilion,
  Rain_Harvest: EcoCitiesHero.Rain_Harvest,
  Bio_Dome: EcoCitiesHero.Bio_Dome,
  Smart_Grid: EcoCitiesHero.Smart_Grid,
  Wind_Towers: EcoCitiesHero.Wind_Towers,
  Mycelium_Build: EcoCitiesHero.Mycelium_Build,
  Urban_Agri: EcoCitiesHero.Urban_Agri,
  Eco_Transit: EcoCitiesHero.Eco_Transit,
  Net_Zero_Home: EcoCitiesHero.Net_Zero_Home,
  Carbon_Capture: EcoCitiesHero.Carbon_Capture,
  Hydro_Tower: EcoCitiesHero.Hydro_Tower,
  Green_Roof: EcoCitiesHero.Green_Roof,
  Thermal_Vault: EcoCitiesHero.Thermal_Vault,
  Circular_Loop: EcoCitiesHero.Circular_Loop,
  Biodiversity_Hub: EcoCitiesHero.Biodiversity_Hub,
  Permaculture_Park: EcoCitiesHero.Permaculture_Park,
  Zero_Waste_Node: EcoCitiesHero.Zero_Waste_Node,
  Active_Façade: EcoCitiesHero.Active_Façade,
  Gaia_Network: EcoCitiesHero.Gaia_Network,

  // D17. Biotech & Genomics (20/20 Variantes)
  Genome_Sequencer: BiotechGenomicsHero.Genome_Sequencer,
  CRISPR_Editor: BiotechGenomicsHero.CRISPR_Editor,
  Molecular_Nexus: BiotechGenomicsHero.Molecular_Nexus,
  Synthetic_Biology: BiotechGenomicsHero.Synthetic_Biology,
  Clinical_Trials: BiotechGenomicsHero.Clinical_Trials,
  Neural_BioLink: BiotechGenomicsHero.Neural_BioLink,
  Bioluminescent_Grid: BiotechGenomicsHero.Bioluminescent_Grid,
  Lab_Protocol: BiotechGenomicsHero.Lab_Protocol,
  Stem_Cell_Hub: BiotechGenomicsHero.Stem_Cell_Hub,
  Genomic_Archive: BiotechGenomicsHero.Genomic_Archive,
  Cell_Differentiator: BiotechGenomicsHero.Cell_Differentiator,
  Protein_Folding: BiotechGenomicsHero.Protein_Folding,
  Bio_Circuit: BiotechGenomicsHero.Bio_Circuit,
  Organoid_Grower: BiotechGenomicsHero.Organoid_Grower,
  Viral_Vector: BiotechGenomicsHero.Viral_Vector,
  Immune_Response: BiotechGenomicsHero.Immune_Response,
  Pathogen_Scanner: BiotechGenomicsHero.Pathogen_Scanner,
  Life_Matrix: BiotechGenomicsHero.Life_Matrix,
  Evolutionary_Loop: BiotechGenomicsHero.Evolutionary_Loop,
  Final_Sequence: BiotechGenomicsHero.Final_Sequence,

  // D16. Quantum Evolution (20/20 Variantes)
  Quantum_Superposition: QuantumEvolutionHero.Quantum_Superposition,
  Multiverse_Grid: QuantumEvolutionHero.Multiverse_Grid,
  Singularity_Focus: QuantumEvolutionHero.Singularity_Focus,
  Entropy_Breaker: QuantumEvolutionHero.Entropy_Breaker,
  Neural_Collapse: QuantumEvolutionHero.Neural_Collapse,
  Event_Horizon: QuantumEvolutionHero.Event_Horizon,
  Quantum_Teleportation: QuantumEvolutionHero.Quantum_Teleportation,
  Dimensional_Shift: QuantumEvolutionHero.Dimensional_Shift,
  Probability_Cloud: QuantumEvolutionHero.Probability_Cloud,
  Reality_Sync: QuantumEvolutionHero.Reality_Sync,
  Spacetime_Fabric: QuantumEvolutionHero.Spacetime_Fabric,
  Observer_Effect: QuantumEvolutionHero.Observer_Effect,
  Quantum_Entanglement: QuantumEvolutionHero.Quantum_Entanglement,
  Chronos_Engine: QuantumEvolutionHero.Chronos_Engine,
  Dimension_Gate: QuantumEvolutionHero.Dimension_Gate,
  String_Theory: QuantumEvolutionHero.String_Theory,
  Void_Architect: QuantumEvolutionHero.Void_Architect,
  Nexus_Core: QuantumEvolutionHero.Nexus_Core,
  Infinite_Loop: QuantumEvolutionHero.Infinite_Loop,
  Universal_Harmonic: QuantumEvolutionHero.Universal_Harmonic,

  // D15. AI Orchestrator (20/20 Variantes)
  CentralIntelligence: AIOrchestratorHero.CentralIntelligence,
  AgentSwarm: AIOrchestratorHero.AgentSwarm,
  LogicFlowOrchestrator: AIOrchestratorHero.LogicFlowOrchestrator,
  NeuralPathway: AIOrchestratorHero.NeuralPathway,
  AutonomousAgentDashboard: AIOrchestratorHero.AutonomousAgentDashboard,
  MultiModalBrain: AIOrchestratorHero.MultiModalBrain,
  InfiniteReasoningLoop: AIOrchestratorHero.InfiniteReasoningLoop,
  OpenDesignCanvas: AIOrchestratorHero.OpenDesignCanvas,
  SemanticSearchHero: AIOrchestratorHero.SemanticSearchHero,
  PromptEngineeringTerminal: AIOrchestratorHero.PromptEngineeringTerminal,
  KnowledgeGraphHero: AIOrchestratorHero.KnowledgeGraphHero,
  AIAgentPersona: AIOrchestratorHero.AIAgentPersona,
  RealTimeInference: AIOrchestratorHero.RealTimeInference,
  SecurityHardenedAI: AIOrchestratorHero.SecurityHardenedAI,
  GlobalDeploymentNode: AIOrchestratorHero.GlobalDeploymentNode,
  VectorDatabaseExplorer: AIOrchestratorHero.VectorDatabaseExplorer,
  CustomTrainingMonitor: AIOrchestratorHero.CustomTrainingMonitor,
  AIPoweredSearch: AIOrchestratorHero.AIPoweredSearch,
  CollaborativeCodingAgent: AIOrchestratorHero.CollaborativeCodingAgent,
  MasterOrchestratorFinal: AIOrchestratorHero.MasterOrchestratorFinal,

  // D14. Events & Conferences (20/20 Variantes)
  Event_ModernBento: EventsConferencesHero.ModernBento,
  Event_CyberTerminal: EventsConferencesHero.CyberTerminal,
  Event_Glassmorphism: EventsConferencesHero.Glassmorphism,
  Event_NeoBrutalist: EventsConferencesHero.NeoBrutalist,
  Event_LuxuryEditorial: EventsConferencesHero.LuxuryEditorial,
  Event_Claymorphism: EventsConferencesHero.Claymorphism,
  Event_SwissStyle: EventsConferencesHero.SwissStyle,
  Event_Solarpunk: EventsConferencesHero.Solarpunk,
  Event_KineticTypography: EventsConferencesHero.KineticTypography,
  Event_ASCIIArt: EventsConferencesHero.ASCIIArt,
  Ascii_Terminal_Core: EventsConferencesHero.Ascii_Terminal_Core,
  Ascii_Crt_Glitch: EventsConferencesHero.Ascii_Crt_Glitch,
  Ascii_Data_Stream: EventsConferencesHero.Ascii_Data_Stream,
  Ascii_Bento_Matrix: EventsConferencesHero.Ascii_Bento_Matrix,
  Ascii_Hero_Profile: EventsConferencesHero.Ascii_Hero_Profile,
  Ascii_System_Monitor: EventsConferencesHero.Ascii_System_Monitor,
  Ascii_Retro_Hack: EventsConferencesHero.Ascii_Retro_Hack,
  Ascii_Cyber_Scroll: EventsConferencesHero.Ascii_Cyber_Scroll,
  Ascii_Phosphor_Glow: EventsConferencesHero.Ascii_Phosphor_Glow,
  Ascii_Final_Command: EventsConferencesHero.Ascii_Final_Command,

  // D13. Fintech & Crypto (20/20 Variantes)
  Crypto_ModernBento: FintechCryptoHero.ModernBento,
  Crypto_CyberTerminal: FintechCryptoHero.CyberTerminal,
  Crypto_GlassExchange: FintechCryptoHero.GlassExchange,
  Crypto_NeoBrutalistSwap: FintechCryptoHero.NeoBrutalistSwap,
  Crypto_MinimalistOTC: FintechCryptoHero.MinimalistOTC,
  Crypto_ClayWallet: FintechCryptoHero.ClayWallet,
  Crypto_SwissTrading: FintechCryptoHero.SwissTrading,
  Crypto_SolarFinance: FintechCryptoHero.SolarFinance,
  Crypto_KineticPromo: FintechCryptoHero.KineticPromo,
  Crypto_ASCIIPaperWallet: FintechCryptoHero.ASCIIPaperWallet,
  Crypto_SkeuoVault: FintechCryptoHero.SkeuoVault,
  Crypto_PastelCard: FintechCryptoHero.PastelCard,
  Crypto_LiquidYield: FintechCryptoHero.LiquidYield,
  Crypto_HyperPopStake: FintechCryptoHero.HyperPopStake,
  Crypto_BauhausIndex: FintechCryptoHero.BauhausIndex,
  Crypto_AuroraWealth: FintechCryptoHero.AuroraWealth,
  Crypto_SpotlightNodes: FintechCryptoHero.SpotlightNodes,
  Crypto_FrostedDEX: FintechCryptoHero.FrostedDEX,
  Crypto_IndustrialBond: FintechCryptoHero.IndustrialBond,
  Crypto_EditorialLegacy: FintechCryptoHero.EditorialLegacy,

  // D12. Dashboards & SaaS (20/20 Variantes)
  Dashboard_ModernBento: DashboardSaaSHero.ModernBento,
  Dashboard_DarkCommand: DashboardSaaSHero.DarkCommand,
  Dashboard_GlassAnalytics: DashboardSaaSHero.GlassAnalytics,
  Dashboard_NeoBrutalistDash: DashboardSaaSHero.NeoBrutalistDash,
  Dashboard_MinimalistSaaS: DashboardSaaSHero.MinimalistSaaS,
  Dashboard_ClayDash: DashboardSaaSHero.ClayDash,
  Dashboard_SwissFunctional: DashboardSaaSHero.SwissFunctional,
  Dashboard_SolarMetrics: DashboardSaaSHero.SolarMetrics,
  Dashboard_KineticData: DashboardSaaSHero.KineticData,
  Dashboard_ASCIIDash: DashboardSaaSHero.ASCIIDash,
  Dashboard_SkeuoGlass: DashboardSaaSHero.SkeuoGlass,
  Dashboard_LuxuryEditorial: DashboardSaaSHero.LuxuryEditorial,
  Dashboard_Retro8Bit: DashboardSaaSHero.Retro8Bit,
  Dashboard_WabiSabi: DashboardSaaSHero.WabiSabi,
  Dashboard_NeoMemphis: DashboardSaaSHero.NeoMemphis,
  Dashboard_Blueprint: DashboardSaaSHero.Blueprint,
  Dashboard_Glitch: DashboardSaaSHero.Glitch,
  Dashboard_PastelCloud: DashboardSaaSHero.PastelCloud,
  Dashboard_LiquidMotion: DashboardSaaSHero.LiquidMotion,
  Dashboard_HyperPop: DashboardSaaSHero.HyperPop,

  // D11. Creative Portfolios (20/20 Variantes)
  Portfolio_MinimalistStudio: PortfolioHero.MinimalistStudio,
  Portfolio_BrutalistAgency: PortfolioHero.BrutalistAgency,
  Portfolio_CinematicDark: PortfolioHero.CinematicDark,
  Portfolio_BauhausExperimental: PortfolioHero.BauhausExperimental,
  Portfolio_GlassPortfolio: PortfolioHero.GlassPortfolio,
  Portfolio_SwissType: PortfolioHero.SwissType,
  Portfolio_CyberHUD: PortfolioHero.CyberHUD,
  Portfolio_OrganicZen: PortfolioHero.OrganicZen,
  Portfolio_KineticType: PortfolioHero.KineticType,
  Portfolio_ASCIIDev: PortfolioHero.ASCIIDev,
  Portfolio_ClaymorphicCreative: PortfolioHero.ClaymorphicCreative,
  Portfolio_SolarpunkArchitect: PortfolioHero.SolarpunkArchitect,
  Portfolio_IndustrialBlueprint: PortfolioHero.IndustrialBlueprint,
  Portfolio_LiquidMotion: PortfolioHero.LiquidMotion,
  Portfolio_GlitchPortfolio: PortfolioHero.GlitchPortfolio,
  Portfolio_PastelCloudCreative: PortfolioHero.PastelCloudCreative,
  Portfolio_BrutalistArchive: PortfolioHero.BrutalistArchive,
  Portfolio_Frosted3D: PortfolioHero.Frosted3D,
  Portfolio_HyperPopCreative: PortfolioHero.HyperPopCreative,
  Portfolio_MinimalistMono: PortfolioHero.MinimalistMono,

  // D10. Shop & E-commerce (20/20 Variantes)
  Shop_NeoMemphis: ShopHero.NeoMemphis,
  Shop_LuxuryEditorial: ShopHero.LuxuryEditorial,
  Shop_BentoShop: ShopHero.BentoShop,
  Shop_CyberDrop: ShopHero.CyberDrop,
  Shop_MinimalistDark: ShopHero.MinimalistDark,
  Shop_Claymorphism: ShopHero.Claymorphism,
  Shop_SwissCatalog: ShopHero.SwissCatalog,
  Shop_SolarGreen: ShopHero.SolarGreen,
  Shop_KineticPromo: ShopHero.KineticPromo,
  Shop_RetroStore: ShopHero.RetroStore,
  Shop_WabiSabiShop: ShopHero.WabiSabiShop,
  Shop_ASCIIShop: ShopHero.ASCIIShop,
  Shop_SkeuoGlass: ShopHero.SkeuoGlass,
  Shop_BlueprintShop: ShopHero.BlueprintShop,
  Shop_BauhausShop: ShopHero.BauhausShop,
  Shop_GlitchShop: ShopHero.GlitchShop,
  Shop_PastelCloud: ShopHero.PastelCloud,
  Shop_ArchiveShop: ShopHero.ArchiveShop,
  Shop_Glass3DShop: ShopHero.Glass3DShop,
  Shop_HyperPopShop: ShopHero.HyperPopShop,

  // D09. Education & E-Learning (20/20 Variantes)
  Education_UniversityClassic: EducationHero.UniversityClassic,
  Education_ELearningPlatform: EducationHero.ELearningPlatform,
  Education_LanguageAcademy: EducationHero.LanguageAcademy,
  Education_TechBootcamp: EducationHero.TechBootcamp,
  Education_CreativeStudio: EducationHero.CreativeStudio,
  Education_AcademicResearch: EducationHero.AcademicResearch,
  Education_EarlyChildhood: EducationHero.EarlyChildhood,
  Education_TestPrep: EducationHero.TestPrep,
  Education_MusicAcademy: EducationHero.MusicAcademy,
  Education_EducationBento: EducationHero.EducationBento,
  Education_Brutalist: EducationHero.Edu_Brutalist,
  Education_Glass20: EducationHero.Edu_Glass20,
  Education_Retro8Bit: EducationHero.Edu_Retro8Bit,
  Education_CyberFuture: EducationHero.Edu_CyberFuture,
  Education_SwissMinimal: EducationHero.Edu_SwissMinimal,
  Education_Neumorphic: EducationHero.Edu_Neumorphic,
  Education_WabiSabi: EducationHero.Edu_WabiSabi,
  Education_BentoPro: EducationHero.Edu_BentoPro,
  Education_LuxuryEditorial: EducationHero.Edu_LuxuryEditorial,
  Education_SciFiAcademy: EducationHero.Edu_SciFiAcademy,

  // D08. Fitness & Wellness (20/20 Variantes)
  Fitness_HardcoreGym: FitnessWellnessHero.HardcoreGym,
  Fitness_ZenYoga: FitnessWellnessHero.ZenYoga,
  Fitness_FitnessApp: FitnessWellnessHero.FitnessApp,
  Fitness_CrossfitBox: FitnessWellnessHero.CrossfitBox,
  Fitness_PilatesStudio: FitnessWellnessHero.PilatesStudio,
  Fitness_NutritionWellness: FitnessWellnessHero.NutritionWellness,
  Fitness_MartialArts: FitnessWellnessHero.MartialArts,
  Fitness_SpinHIIT: FitnessWellnessHero.SpinHIIT,
  Fitness_RecoveryBiohacking: FitnessWellnessHero.RecoveryBiohacking,
  Fitness_FitnessCatalog: FitnessWellnessHero.FitnessCatalog,
  Fitness_OutdoorBootCamp: FitnessWellnessHero.OutdoorBootCamp,
  Fitness_AquaticFitness: FitnessWellnessHero.AquaticFitness,
  Fitness_DanceCardio: FitnessWellnessHero.DanceCardio,
  Fitness_JuiceBarCleanse: FitnessWellnessHero.JuiceBarCleanse,
  Fitness_MindfulMeditation: FitnessWellnessHero.MindfulMeditation,
  Fitness_KidsFitness: FitnessWellnessHero.KidsFitness,
  Fitness_SeniorWellness: FitnessWellnessHero.SeniorWellness,
  Fitness_CorporateWellness: FitnessWellnessHero.CorporateWellness,
  Fitness_AthleticRecovery: FitnessWellnessHero.AthleticRecovery,
  Fitness_FitnessShowcaseFinal: FitnessWellnessHero.FitnessShowcaseFinal,

  // D07. Real Estate & Architecture (20/20 Variantes)
  RealEstate_LuxuryEstate: RealEstateHero.LuxuryEstate,
  RealEstate_ModernSearch: RealEstateHero.ModernSearch,
  RealEstate_ArchitectureFocus: RealEstateHero.ArchitectureFocus,
  RealEstate_PropertyShowcase: RealEstateHero.PropertyShowcase,
  RealEstate_AgentFocus: RealEstateHero.AgentFocus,
  RealEstate_CommercialSpaces: RealEstateHero.CommercialSpaces,
  RealEstate_UrbanLiving: RealEstateHero.UrbanLiving,
  RealEstate_InvestmentPortfolio: RealEstateHero.InvestmentPortfolio,
  RealEstate_VacationRentals: RealEstateHero.VacationRentals,
  RealEstate_NeighborhoodGuide: RealEstateHero.NeighborhoodGuide,
  RealEstate_EcoFriendly: RealEstateHero.EcoFriendly,
  RealEstate_SmartHome: RealEstateHero.SmartHome,
  RealEstate_IndustrialLoft: RealEstateHero.IndustrialLoft,
  RealEstate_LuxuryPenthouse: RealEstateHero.LuxuryPenthouse,
  RealEstate_NewDevelopment: RealEstateHero.NewDevelopment,
  RealEstate_RuralRetreat: RealEstateHero.RuralRetreat,
  RealEstate_PropertyAuctions: RealEstateHero.PropertyAuctions,
  RealEstate_ArchitectPortfolio: RealEstateHero.ArchitectPortfolio,
  RealEstate_HomeValuation: RealEstateHero.HomeValuation,
  RealEstate_RealEstateShowcaseFinal: RealEstateHero.RealEstateShowcaseFinal,

  // D06. Travel & Adventure (20/20 Variantes)
  Travel_Classic: TravelAdventureHero.Classic,
  Travel_ModernSearch: TravelAdventureHero.ModernSearch,
  Travel_LuxuryEscape: TravelAdventureHero.LuxuryEscape,
  Travel_MountainPeak: TravelAdventureHero.MountainPeak,
  Travel_TropicalVibe: TravelAdventureHero.TropicalVibe,
  Travel_RoadTrip: TravelAdventureHero.RoadTrip,
  Travel_UrbanJungle: TravelAdventureHero.UrbanJungle,
  Travel_DesertOasis: TravelAdventureHero.DesertOasis,
  Travel_WinterWonder: TravelAdventureHero.WinterWonder,
  Travel_AdventureCatalog: TravelAdventureHero.AdventureCatalog,
  Travel_CruiseVoyager: TravelAdventureHero.CruiseVoyager,
  Travel_RailAdventure: TravelAdventureHero.RailAdventure,
  Travel_SoloBackpacker: TravelAdventureHero.SoloBackpacker,
  Travel_SafariWild: TravelAdventureHero.SafariWild,
  Travel_LastMinute: TravelAdventureHero.LastMinute,
  Travel_ZenWellness: TravelAdventureHero.ZenWellness,
  Travel_CarRental: TravelAdventureHero.CarRental,
  Travel_DigitalNomad: TravelAdventureHero.DigitalNomad,
  Travel_FlightTracker: TravelAdventureHero.FlightTracker,
  Travel_TravelShowcaseFinal: TravelAdventureHero.TravelShowcaseFinal,

  // D05. Social Impact / ONG (20/20 Variantes)
  SocialImpact_Classic: SocialImpactHero.Classic,
  SocialImpact_UrgentCause: SocialImpactHero.UrgentCause,
  SocialImpact_VolunteerFocus: SocialImpactHero.VolunteerFocus,
  SocialImpact_EcoImpact: SocialImpactHero.EcoImpact,
  SocialImpact_GlobalHealth: SocialImpactHero.GlobalHealth,
  SocialImpact_EducationForAll: SocialImpactHero.EducationForAll,
  SocialImpact_CleanWater: SocialImpactHero.CleanWater,
  SocialImpact_AnimalWelfare: SocialImpactHero.AnimalWelfare,
  SocialImpact_SocialJustice: SocialImpactHero.SocialJustice,
  SocialImpact_ImpactDashboard: SocialImpactHero.ImpactDashboard,
  SocialImpact_PeaceAmbassadors: SocialImpactHero.PeaceAmbassadors,
  SocialImpact_RefugeeSupport: SocialImpactHero.RefugeeSupport,
  SocialImpact_YouthEmpowerment: SocialImpactHero.YouthEmpowerment,
  SocialImpact_CleanEnergy: SocialImpactHero.CleanEnergy,
  SocialImpact_IndigenousRights: SocialImpactHero.IndigenousRights,
  SocialImpact_CrisisHotline: SocialImpactHero.CrisisHotline,
  SocialImpact_MicroFinance: SocialImpactHero.MicroFinance,
  SocialImpact_OceanCleanup: SocialImpactHero.OceanCleanup,
  SocialImpact_DisabilityInclusion: SocialImpactHero.DisabilityInclusion,
  SocialImpact_SocialImpactShowcaseFinal: SocialImpactHero.SocialImpactShowcaseFinal,

  // D04. Foodie Kitchen (20/20 Variantes)
  FoodieKitchen_Classic: FoodieKitchenHero.Classic,
  FoodieKitchen_DeliveryFast: FoodieKitchenHero.DeliveryFast,
  FoodieKitchen_FineDining: FoodieKitchenHero.FineDining,
  FoodieKitchen_FoodMarket: FoodieKitchenHero.FoodMarket,
  FoodieKitchen_HealthyOrganic: FoodieKitchenHero.HealthyOrganic,
  FoodieKitchen_CoffeeShop: FoodieKitchenHero.CoffeeShop,
  FoodieKitchen_BurgerBold: FoodieKitchenHero.BurgerBold,
  FoodieKitchen_ChefShowcase: FoodieKitchenHero.ChefShowcase,
  FoodieKitchen_SpecialOffers: FoodieKitchenHero.SpecialOffers,
  FoodieKitchen_GlobalFlavors: FoodieKitchenHero.GlobalFlavors,
  FoodieKitchen_StreetFoodNight: FoodieKitchenHero.StreetFoodNight,
  FoodieKitchen_ArtisanBakery: FoodieKitchenHero.ArtisanBakery,
  FoodieKitchen_SushiZen: FoodieKitchenHero.SushiZen,
  FoodieKitchen_SteakhouseRough: FoodieKitchenHero.SteakhouseRough,
  FoodieKitchen_VeganGarden: FoodieKitchenHero.VeganGarden,
  FoodieKitchen_JuiceBar: FoodieKitchenHero.JuiceBar,
  FoodieKitchen_WineCellar: FoodieKitchenHero.WineCellar,
  FoodieKitchen_FamilyPizzeria: FoodieKitchenHero.FamilyPizzeria,
  FoodieKitchen_SeafoodCoastal: FoodieKitchenHero.SeafoodCoastal,
  FoodieKitchen_FoodieShowcaseFinal: FoodieKitchenHero.FoodieShowcaseFinal,

  // D03. Corporate Clean SaaS (20/20 Variantes)
  CorporateSaaS_Classic: CorporateSaaSHero.Classic,
  CorporateSaaS_ModernGrid: CorporateSaaSHero.ModernGrid,
  CorporateSaaS_BentoHighlight: CorporateSaaSHero.BentoHighlight,
  CorporateSaaS_Glassmorphism: CorporateSaaSHero.Glassmorphism,
  CorporateSaaS_Minimalist: CorporateSaaSHero.Minimalist,
  CorporateSaaS_GradientFlow: CorporateSaaSHero.GradientFlow,
  CorporateSaaS_TechDashboard: CorporateSaaSHero.TechDashboard,
  CorporateSaaS_InteractiveDots: CorporateSaaSHero.InteractiveDots,
  CorporateSaaS_ProductShowcase: CorporateSaaSHero.ProductShowcase,
  CorporateSaaS_EnterpriseSolid: CorporateSaaSHero.EnterpriseSolid,
  CorporateSaaS_AIChatFocus: CorporateSaaSHero.AIChatFocus,
  CorporateSaaS_DataVizDashboard: CorporateSaaSHero.DataVizDashboard,
  CorporateSaaS_MobileAppFirst: CorporateSaaSHero.MobileAppFirst,
  CorporateSaaS_CinematicVideo: CorporateSaaSHero.CinematicVideo,
  CorporateSaaS_HighTrustPartners: CorporateSaaSHero.HighTrustPartners,
  CorporateSaaS_SplitDemo: CorporateSaaSHero.SplitDemo,
  CorporateSaaS_DarkCommandCenter: CorporateSaaSHero.DarkCommandCenter,
  CorporateSaaS_SoftClaymorphism: CorporateSaaSHero.SoftClaymorphism,
  CorporateSaaS_VerticalFeatureList: CorporateSaaSHero.VerticalFeatureList,
  CorporateSaaS_SaaSShowcaseFinal: CorporateSaaSHero.SaaSShowcaseFinal,

  // D01. Maison Luxury Designs (20 Variantes)
  Maison_Classic: MaisonLuxuryHero.Classic,
  Maison_Dark: MaisonLuxuryHero.Dark,
  Maison_Split: MaisonLuxuryHero.Split,
  Maison_GoldenBorder: MaisonLuxuryHero.GoldenBorder,
  Maison_Editorial: MaisonLuxuryHero.Editorial,
  Maison_GlassCards: MaisonLuxuryHero.GlassCards,
  Maison_MinimalShop: MaisonLuxuryHero.MinimalShop,
  Maison_Archive: MaisonLuxuryHero.Archive,
  Maison_VideoFocus: MaisonLuxuryHero.VideoFocus,
  Maison_GeometricGrid: MaisonLuxuryHero.GeometricGrid,
  Maison_VerticalTypography: MaisonLuxuryHero.VerticalTypography,
  Maison_ParallaxReveal: MaisonLuxuryHero.ParallaxReveal,
  Maison_Brutalist: MaisonLuxuryHero.Brutalist,
  Maison_SoftPastel: MaisonLuxuryHero.SoftPastel,
  Maison_HighTech: MaisonLuxuryHero.HighTech,
  Maison_Slider: MaisonLuxuryHero.Slider,
  Maison_Asymmetric: MaisonLuxuryHero.Asymmetric,
  Maison_Monochrome: MaisonLuxuryHero.Monochrome,
  Maison_Newsletter: MaisonLuxuryHero.Newsletter,
  Maison_FinalShowcase: MaisonLuxuryHero.FinalShowcase,

  // D02. Cyberpunk Terminal (20/20 Variantes)
  CyberTerminal_Classic: CyberpunkTerminalHero.Classic,
  CyberTerminal_NeonOverride: CyberpunkTerminalHero.NeonOverride,
  CyberTerminal_DataStream: CyberpunkTerminalHero.DataStream,
  CyberTerminal_HolographicHUD: CyberpunkTerminalHero.HolographicHUD,
  CyberTerminal_NightCity: CyberpunkTerminalHero.NightCity,
  CyberTerminal_MatrixRain: CyberpunkTerminalHero.MatrixRain,
  CyberTerminal_GlitchWarning: CyberpunkTerminalHero.GlitchWarning,
  CyberTerminal_DeepWeb: CyberpunkTerminalHero.DeepWeb,
  CyberTerminal_CyberMechanic: CyberpunkTerminalHero.CyberMechanic,
  CyberTerminal_NeonGridPulse: CyberpunkTerminalHero.NeonGridPulse,
  CyberTerminal_SecurityBreach: CyberpunkTerminalHero.SecurityBreach,
  CyberTerminal_CyberLogin: CyberpunkTerminalHero.CyberLogin,
  CyberTerminal_NeonHUDStats: CyberpunkTerminalHero.NeonHUDStats,
  CyberTerminal_MatrixCode: CyberpunkTerminalHero.MatrixCode,
  CyberTerminal_CyberGlitchV2: CyberpunkTerminalHero.CyberGlitchV2,
  CyberTerminal_NeuralInterface: CyberpunkTerminalHero.NeuralInterface,
  CyberTerminal_SatelliteUplink: CyberpunkTerminalHero.SatelliteUplink,
  CyberTerminal_NeonAlley: CyberpunkTerminalHero.NeonAlley,
  CyberTerminal_BunkerAccess: CyberpunkTerminalHero.BunkerAccess,
  CyberTerminal_SystemArchitecture: CyberpunkTerminalHero.SystemArchitecture,

  // 1. Cyberpunk Neon
  Cyberpunk: () => (
    <div className="w-full py-20 px-8 bg-black border-2 border-[#0fa] shadow-[0_0_20px_#0fa] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0fa] animate-pulse" />
      <h1 className="text-6xl font-black text-white italic tracking-tighter mb-4" style={{ textShadow: '4px 4px #f09' }}>CYBER_CORE 2077</h1>
      <p className="text-[#0fa] font-mono">SYSTEM_STATUS: OPERATIONAL // NEON_OVERRIDE: ACTIVE</p>
    </div>
  ),

  // 2. Glassmorphism Deep
  GlassDeep: () => (
    <div className="w-full py-24 px-8 bg-gradient-to-br from-blue-600 to-purple-700 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay opacity-40" />
      <div className="relative z-10 p-12 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Oceanic Glass</h1>
        <p className="text-white/80 leading-relaxed">Explora la profundidad de las interfaces modernas con efectos de desenfoque avanzados.</p>
      </div>
    </div>
  ),

  // 3. Minimalist Dark
  MinimalDark: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 flex flex-col items-center text-center">
      <div className="w-16 h-1 bg-orange-500 mb-8" />
      <h1 className="text-7xl font-light text-white tracking-tight mb-8">Less is more.</h1>
      <p className="text-zinc-500 max-w-xl text-lg">Un diseño enfocado en la tipografía y el espacio en blanco para máxima legibilidad.</p>
    </div>
  ),

  // 4. Aurora Gradient
  Aurora: () => (
    <div className="w-full py-28 px-8 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] bg-emerald-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-6">Aurora Borealis</h1>
        <p className="text-slate-400 text-xl">Suaves transiciones de color inspiradas en la naturaleza.</p>
      </div>
    </div>
  ),

  // 5. Retro 8-Bit
  Retro8Bit: () => (
    <div className="w-full py-20 px-8 bg-[#212529] border-8 border-black relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-4 h-4 bg-red-500" />
        <div className="w-4 h-4 bg-yellow-500" />
        <div className="w-4 h-4 bg-green-500" />
      </div>
      <h1 className="text-5xl font-mono text-[#92cc41] mb-6 uppercase tracking-widest">Player One</h1>
      <p className="text-white font-mono text-lg underline decoration-[#e76e55] decoration-4 underline-offset-8">Press START to continue...</p>
    </div>
  ),

  // 6. Bento Grid Hero
  BentoHero: () => (
    <div className="w-full p-4 bg-zinc-900 grid grid-cols-4 gap-4 aspect-[21/9]">
      <div className="col-span-2 row-span-2 bg-zinc-800 rounded-3xl p-8 flex flex-col justify-end border border-zinc-700">
        <h1 className="text-4xl font-bold text-white">Main Feature</h1>
      </div>
      <div className="bg-orange-500 rounded-3xl p-6 border border-white/10" />
      <div className="bg-zinc-800 rounded-3xl p-6 border border-zinc-700" />
      <div className="col-span-2 bg-zinc-800 rounded-3xl p-6 border border-zinc-700 flex items-center justify-between px-10">
        <span className="text-white font-medium">Secondary Action</span>
        <div className="w-10 h-10 bg-white rounded-full" />
      </div>
    </div>
  ),

  // 7. Spotlight Dark
  Spotlight: () => (
    <div className="w-full py-32 px-8 bg-black relative group cursor-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.15)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black text-zinc-800 group-hover:text-white transition-colors duration-700">In the Shadows</h1>
        <p className="text-zinc-600 mt-4">Pasa el mouse para revelar el secreto.</p>
      </div>
    </div>
  ),

  // 8. Brutalist Industrial
  Brutalist: () => (
    <div className="w-full py-20 px-8 bg-yellow-400 border-b-[16px] border-black flex flex-col items-start">
      <h1 className="text-8xl font-[black] text-black uppercase leading-[0.8] mb-8">Hard<br/>Design</h1>
      <button className="bg-black text-white px-10 py-5 font-bold text-2xl hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">EXPLORE NOW</button>
    </div>
  ),

  // 9. Soft Claymorphism
  Clay: () => (
    <div className="w-full py-24 px-8 bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-16 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center max-w-xl">
        <h1 className="text-5xl font-bold text-zinc-800 mb-6">Soft UI</h1>
        <p className="text-zinc-500">Interfaces táctiles y amigables para el usuario moderno.</p>
      </div>
    </div>
  ),

  // 10. Split Screen Hero
  Split: () => (
    <div className="w-full h-[400px] flex overflow-hidden">
      <div className="flex-1 bg-zinc-900 flex items-center justify-center p-12 hover:flex-[1.5] transition-all duration-500">
        <h1 className="text-4xl font-bold text-white">Left Side</h1>
      </div>
      <div className="flex-1 bg-white flex items-center justify-center p-12 hover:flex-[1.5] transition-all duration-500">
        <h1 className="text-4xl font-bold text-black">Right Side</h1>
      </div>
    </div>
  ),

  // 11. Matrix Rain (CSS only simplified)
  Matrix: () => (
    <div className="w-full py-24 px-8 bg-black relative overflow-hidden font-mono">
      <div className="absolute inset-0 text-[#0f0] opacity-20 text-xs leading-none select-none pointer-events-none overflow-hidden whitespace-pre">
        {Array(20).fill("010110100101101001011010\n").join("")}
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-[#0f0] mb-4 shadow-[0_0_10px_#0f0]">Wake up, Neo...</h1>
        <p className="text-[#0f0]/80">The system has you.</p>
      </div>
    </div>
  ),

  // 12. Floating Cards
  FloatingCards: () => (
    <div className="w-full py-24 px-8 bg-zinc-100 flex items-center justify-center gap-8 relative overflow-hidden">
      <div className="w-48 h-64 bg-white rounded-2xl shadow-xl -rotate-12 translate-y-12 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl z-10 p-8 flex flex-col justify-end">
        <h1 className="text-2xl font-bold">Featured</h1>
      </div>
      <div className="w-48 h-64 bg-white rounded-2xl shadow-xl rotate-12 -translate-y-8 animate-bounce" style={{ animationDuration: '4s' }} />
    </div>
  ),

  // 13. Deep Space
  Space: () => (
    <div className="w-full py-32 px-8 bg-[#020617] relative">
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent)] bg-[size:40px_40px] opacity-20" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black text-white mb-6">To Infinity</h1>
        <p className="text-slate-400 max-w-lg mx-auto">Explora las fronteras del diseño galáctico con componentes espaciales.</p>
      </div>
    </div>
  ),

  // 14. Modern SaaS
  SaaS: () => (
    <div className="w-full py-20 px-8 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6">v2.0 is out!</span>
        <h1 className="text-6xl font-black text-zinc-900 tracking-tight mb-8">Deploy faster than ever.</h1>
        <p className="text-zinc-600 text-lg mb-10">La plataforma definitiva para desarrolladores que buscan velocidad y escala.</p>
      </div>
    </div>
  ),

  // 15. Glitch Static
  GlitchStatic: () => (
    <div className="w-full py-24 px-8 bg-zinc-900 flex items-center justify-center">
      <div className="relative">
        <h1 className="text-7xl font-black text-white relative z-10">ERROR_404</h1>
        <div className="absolute -inset-1 bg-red-500 -z-0 translate-x-1 opacity-50" />
        <div className="absolute -inset-1 bg-cyan-500 -z-0 -translate-x-1 opacity-50" />
      </div>
    </div>
  ),

  // 16. Typography Focus
  TypeFocus: () => (
    <div className="w-full py-32 px-8 bg-black flex flex-col items-start">
      <h1 className="text-[12vw] font-black text-white leading-none tracking-tighter uppercase">Design</h1>
      <h1 className="text-[12vw] font-black text-zinc-800 leading-none tracking-tighter uppercase -mt-[2vw]">Systems</h1>
    </div>
  ),

  // 17. Mesh Gradient
  Mesh: () => (
    <div className="w-full py-28 px-8 bg-rose-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-pulse" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white">Vibrant Mesh</h1>
        <p className="text-white/80 mt-4 italic">Colores que cobran vida propia.</p>
      </div>
    </div>
  ),

  // 18. Outline Stroke
  Outline: () => (
    <div className="w-full py-24 px-8 bg-zinc-950 flex flex-col items-center">
      <h1 className="text-7xl font-black text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px white' }}>OUTLINE</h1>
      <h1 className="text-7xl font-black text-white -mt-4">SOLID</h1>
      <h1 className="text-7xl font-black text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px white' }}>OUTLINE</h1>
    </div>
  ),

  // 19. Comic Pop
  Comic: () => (
    <div className="w-full py-20 px-8 bg-white border-4 border-black shadow-[12px_12px_0px_#000] relative">
      <div className="absolute -top-6 -left-4 bg-yellow-400 border-4 border-black px-4 py-2 font-black text-2xl rotate-[-5deg]">WOW!</div>
      <h1 className="text-5xl font-black italic uppercase text-blue-600">Pop Art Hero</h1>
      <p className="text-black font-bold mt-4">Inspirado en el estilo clásico de los cómics.</p>
    </div>
  ),

  // 20. Zen Nature
  Zen: () => (
    <div className="w-full py-32 px-8 bg-[#fdfcf0] flex flex-col items-center">
      <div className="w-32 h-32 bg-[#2d3a27] rounded-full mb-12 flex items-center justify-center">
        <div className="w-16 h-16 bg-[#fdfcf0] rounded-full opacity-20" />
      </div>
      <h1 className="text-4xl font-serif text-[#2d3a27] italic mb-4">Peace of mind.</h1>
      <p className="text-[#2d3a27]/60 font-serif">Un diseño orgánico para aplicaciones de bienestar.</p>
    </div>
  ),

  // 21. Video Style Background (CSS Gradient Animation)
  VideoStyle: () => (
    <div className="w-full py-32 px-8 relative overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-zinc-900 to-purple-900 animate-pulse opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black text-white mb-6 uppercase tracking-[0.2em]">Motion Design</h1>
        <div className="w-20 h-20 border-4 border-white rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2" />
        </div>
      </div>
    </div>
  ),

  // 22. Dashboard Preview
  Dashboard: () => (
    <div className="w-full py-20 px-8 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Manage your workflow.</h1>
        <p className="text-zinc-500 text-lg">La interfaz más intuitiva para equipos de alto rendimiento.</p>
      </div>
      <div className="max-w-5xl mx-auto h-64 bg-zinc-900 rounded-t-3xl border-x-8 border-t-8 border-zinc-800 shadow-2xl overflow-hidden p-4">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-32 bg-zinc-800 rounded-xl animate-pulse" />
          <div className="h-32 bg-zinc-800 rounded-xl animate-pulse delay-75" />
          <div className="h-32 bg-zinc-800 rounded-xl animate-pulse delay-150" />
        </div>
      </div>
    </div>
  ),

  // 23. Gradient Text Reveal
  TextReveal: () => (
    <div className="w-full py-32 px-8 bg-black flex flex-col items-center justify-center group">
      <h1 className="text-8xl font-black tracking-tighter text-zinc-800 transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-rose-600">
        REVEAL THE LIGHT
      </h1>
      <p className="text-zinc-600 mt-8 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-1000">HOVER TO DISCOVER THE COLOR</p>
    </div>
  ),

  // 24. Particle Grid (CSS Only)
  Particles: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Particle Flow</h1>
        <p className="text-zinc-400">Diseño minimalista con texturas geométricas sutiles.</p>
      </div>
    </div>
  ),

  // 25. Bauhaus Retro
  Bauhaus: () => (
    <div className="w-full py-24 px-8 bg-[#f0f0f0] grid grid-cols-3 gap-0 border-8 border-black">
      <div className="bg-[#e63946] aspect-square border-r-8 border-black flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-black rounded-full" />
      </div>
      <div className="col-span-2 bg-[#a8dadc] p-12 flex flex-col justify-between">
        <h1 className="text-6xl font-black uppercase text-black leading-none">Bau<br/>Haus</h1>
        <p className="text-black font-bold border-t-8 border-black pt-4">FORM FOLLOWS FUNCTION</p>
      </div>
      <div className="col-span-2 bg-[#f1faee] p-12 border-t-8 border-black">
        <p className="text-black text-xl italic font-serif">A revolution in modern design and architecture.</p>
      </div>
      <div className="bg-[#1d3557] aspect-square border-t-8 border-l-8 border-black" />
    </div>
  ),

  // 26. Duotone Image
  Duotone: () => (
    <div className="w-full py-32 px-8 relative overflow-hidden group">
      <div className="absolute inset-0 bg-blue-900" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-screen opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000" />
      <div className="relative z-10">
        <h1 className="text-7xl font-black text-white uppercase tracking-tighter">Identity</h1>
        <div className="w-24 h-2 bg-pink-500 mt-4" />
      </div>
    </div>
  ),

  // 27. Magazine Feature
  Magazine: () => (
    <div className="w-full py-20 px-12 bg-white text-black font-serif">
      <div className="border-b-2 border-black pb-4 mb-12 flex justify-between items-end">
        <span className="text-4xl font-black uppercase tracking-tighter">The Edition</span>
        <span className="text-sm font-bold uppercase tracking-widest">May 2026</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <h1 className="text-8xl font-black leading-[0.85] tracking-tighter">DESIGN AS A WEAPON.</h1>
        <div className="space-y-8">
          <p className="text-2xl leading-relaxed italic">"How the modern web is changing our perception of reality through pixels and light."</p>
          <button className="px-8 py-3 bg-black text-white font-sans font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors">Read Full Article</button>
        </div>
      </div>
    </div>
  ),

  // 28. Abstract Blob
  BlobHero: () => (
    <div className="w-full py-32 px-8 bg-indigo-50 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }} />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black text-indigo-950 mb-6">Organic Flow</h1>
        <p className="text-indigo-900/60 max-w-lg mx-auto">Diseños fluidos y formas abstractas para una experiencia natural.</p>
      </div>
    </div>
  ),

  // 29. Terminal Animated
  TerminalHero: () => (
    <div className="w-full p-8 bg-black flex items-center justify-center">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden font-mono">
        <div className="bg-zinc-800 px-4 py-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="p-6 space-y-2 text-sm">
          <p className="text-green-500">$ init project --uix-pro</p>
          <p className="text-zinc-400">Loading modules...</p>
          <p className="text-blue-400">[OK] Hero Variants Loaded</p>
          <p className="text-blue-400">[OK] Copy System Active</p>
          <p className="text-zinc-400">Ready for development.</p>
          <div className="flex gap-2">
            <span className="text-green-500">$</span>
            <span className="w-2 h-5 bg-[#0fa] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  ),

  // 30. Spotlight Grid
  SpotlightGrid: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 relative group overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,255,170,0.15)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-black text-white mb-6">Spotlight Grid</h1>
        <p className="text-zinc-500 text-xl italic">Interactive focus on every pixel.</p>
      </div>
    </div>
  ),

  // 31. Card Stack
  CardStack: () => (
    <div className="w-full py-32 px-8 bg-zinc-100 flex items-center justify-center gap-4 group">
      <div className="w-64 h-80 bg-white rounded-3xl shadow-xl border border-zinc-200 transition-all duration-500 group-hover:-translate-x-12 group-hover:-rotate-12" />
      <div className="w-64 h-80 bg-zinc-900 rounded-3xl shadow-2xl z-10 border border-zinc-800 flex flex-col justify-end p-8 transition-transform duration-500 group-hover:scale-110">
        <h1 className="text-2xl font-bold text-white uppercase tracking-widest">Stack</h1>
      </div>
      <div className="w-64 h-80 bg-white rounded-3xl shadow-xl border border-zinc-200 transition-all duration-500 group-hover:translate-x-12 group-hover:rotate-12" />
    </div>
  ),

  // 32. Product Focus
  ProductFocus: () => (
    <div className="w-full py-20 px-8 bg-white flex flex-col items-center">
      <div className="relative mb-12 group">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="w-64 h-64 bg-zinc-100 rounded-[40px] border border-zinc-200 relative z-10 flex items-center justify-center">
          <div className="w-32 h-32 bg-blue-600 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700" />
        </div>
      </div>
      <h1 className="text-4xl font-black text-zinc-900 mb-4">Precision Engineering.</h1>
      <p className="text-zinc-500 max-w-sm text-center">Diseñado hasta el último detalle para ofrecer el máximo rendimiento.</p>
    </div>
  ),

  // 33. App Store Style
  AppStore: () => (
    <div className="w-full py-24 px-8 bg-zinc-50 dark:bg-black">
      <div className="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-[48px] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="h-96 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Featured Game</span>
            <h1 className="text-3xl font-black text-white leading-tight">Cyber Quest: The Beginning</h1>
          </div>
        </div>
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl" />
            <div>
              <p className="font-bold">Cyber Quest</p>
              <p className="text-xs text-zinc-500 italic">Action & RPG</p>
            </div>
          </div>
          <button className="px-6 py-1.5 bg-blue-500 text-white rounded-full font-bold text-sm">GET</button>
        </div>
      </div>
    </div>
  ),

  // 34. Noise Texture
  NoiseHero: () => (
    <div className="w-full py-32 px-8 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="relative z-10 text-center">
        <h1 className="text-[15vw] font-black text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">TEXTURE</h1>
        <h1 className="text-6xl font-black text-white relative">Grainy Aesthetic</h1>
        <p className="text-zinc-500 mt-4 tracking-[0.5em] uppercase text-xs">Modern Noise Design</p>
      </div>
    </div>
  ),

  // 35. Device Mockup Floating
  DeviceHero: () => (
    <div className="w-full py-32 px-8 bg-zinc-900 flex flex-col md:flex-row items-center justify-center gap-20 overflow-hidden">
      <div className="max-w-md space-y-8">
        <h1 className="text-6xl font-black text-white leading-none">Your app, anywhere.</h1>
        <p className="text-zinc-400 text-xl">Sincronización perfecta entre todos tus dispositivos favoritos.</p>
        <div className="flex gap-4">
          <div className="w-32 h-10 bg-white rounded-lg" />
          <div className="w-32 h-10 bg-zinc-800 border border-white/10 rounded-lg" />
        </div>
      </div>
      <div className="relative">
        <div className="w-64 h-[500px] bg-zinc-800 rounded-[3rem] border-8 border-zinc-700 shadow-2xl relative z-10 animate-bounce" style={{ animationDuration: '4s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-700 rounded-b-xl" />
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-[500px] bg-zinc-800/30 rounded-[3rem] border-8 border-zinc-700/30 blur-sm -z-0" />
      </div>
    </div>
  ),

  // 36. Bauhaus Primary
  BauhausPrimary: () => (
    <div className="w-full py-20 px-8 bg-white grid grid-cols-4 gap-0 border-y-8 border-black">
      <div className="bg-[#ff0000] h-40 border-r-8 border-black" />
      <div className="bg-[#ffff00] h-40 border-r-8 border-black" />
      <div className="bg-[#0000ff] h-40 border-r-8 border-black" />
      <div className="bg-black h-40" />
      <div className="col-span-4 p-12 text-center">
        <h1 className="text-8xl font-black tracking-tighter text-black uppercase leading-none">PRIMARY COLORS</h1>
      </div>
    </div>
  ),

  // 37. Typography Gradient
  TypeGradient: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 flex flex-col items-center">
      <h1 className="text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-zinc-900 bg-clip-text text-transparent leading-none">DRAMA</h1>
      <p className="text-zinc-500 text-2xl font-light tracking-[0.3em] uppercase -mt-4">Visual Storytelling</p>
    </div>
  ),

  // 38. Grid with Spotlight Focus
  GridSpotlight: () => (
    <div className="w-full py-32 px-8 bg-black relative group flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.08)_0%,transparent_25%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl font-bold text-white uppercase tracking-widest">Focus Point</h1>
        <div className="w-12 h-12 bg-white rounded-full mx-auto animate-ping opacity-20" />
      </div>
    </div>
  ),

  // 39. Modern Dark SaaS v2
  SaaSDark: () => (
    <div className="w-full py-32 px-8 bg-[#030303] flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        New: Analytics Engine v4.2
      </div>
      <h1 className="text-7xl font-black text-white tracking-tight max-w-3xl mb-8">Intelligence for every business.</h1>
      <p className="text-zinc-500 text-xl max-w-xl mb-12">Potencia tus decisiones con datos en tiempo real y machine learning avanzado.</p>
      <div className="flex gap-4">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl">Start Free Trial</button>
        <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800">View Demo</button>
      </div>
    </div>
  ),

  // 40. Interactive Card Stack v2
  CardStackV2: () => (
    <div className="w-full py-32 px-8 bg-zinc-50 flex items-center justify-center relative h-[500px] group">
      <div className="absolute w-64 h-80 bg-rose-500 rounded-3xl shadow-xl rotate-[-15deg] translate-x-[-40px] transition-all duration-500 group-hover:rotate-[-25deg] group-hover:translate-x-[-120px]" />
      <div className="absolute w-64 h-80 bg-blue-500 rounded-3xl shadow-xl rotate-[15deg] translate-x-[40px] transition-all duration-500 group-hover:rotate-[25deg] group-hover:translate-x-[120px]" />
      <div className="relative w-64 h-80 bg-zinc-900 rounded-3xl shadow-2xl z-10 border border-zinc-800 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
        <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Stack 40</h1>
      </div>
    </div>
  ),

  // 41. Futuristic Hub
  FuturisticHub: () => (
    <div className="w-full py-32 px-8 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-[400px] h-[400px] border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-black text-white mb-4 tracking-widest">NEXUS_CORE</h1>
        <p className="text-blue-400 font-mono text-sm uppercase tracking-[0.5em]">Centralized Intelligence System</p>
      </div>
    </div>
  ),

  // 42. Glassmorphism Light
  GlassLight: () => (
    <div className="w-full py-32 px-8 bg-gradient-to-tr from-rose-100 to-teal-100 flex items-center justify-center">
      <div className="p-16 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-2xl max-w-2xl text-center">
        <h1 className="text-5xl font-black text-zinc-800 mb-6">Crystal Clear</h1>
        <p className="text-zinc-600 leading-relaxed text-lg">Efectos de transparencia premium para interfaces elegantes y ligeras.</p>
      </div>
    </div>
  ),

  // 43. Bold Typography Slant
  BoldSkew: () => (
    <div className="w-full py-32 px-8 bg-orange-500 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-[12vw] font-black text-black leading-none uppercase -skew-x-12 translate-x-10">IMPACT</h1>
      <h1 className="text-[12vw] font-black text-white leading-none uppercase -skew-x-12 -translate-x-10">DESIGN</h1>
    </div>
  ),

  // 44. Retro TV Static
  RetroTV: () => (
    <div className="w-full py-32 px-8 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicGPoY/giphy.gif')] bg-cover" />
      <div className="relative z-10 border-8 border-zinc-800 p-12 bg-black/40 backdrop-blur-sm rounded-3xl">
        <h1 className="text-6xl font-mono text-green-500 mb-4 animate-pulse">NO_SIGNAL</h1>
        <p className="text-zinc-500 font-mono italic">Please check your antenna connection...</p>
      </div>
    </div>
  ),

  // 45. Modern Architecture
  ModernArch: () => (
    <div className="w-full py-32 px-12 bg-white flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <div className="w-20 h-1 bg-black" />
        <h1 className="text-7xl font-light text-black leading-[0.9]">Minimal<br/><span className="font-black">Structure.</span></h1>
        <p className="text-zinc-500 text-xl max-w-md">Inspirado en el diseño arquitectónico contemporáneo y la simetría perfecta.</p>
      </div>
      <div className="flex-1 w-full aspect-square bg-zinc-100 rounded-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
      </div>
    </div>
  ),

  // 46. Neon Grid Floor
  NeonGrid: () => (
    <div className="w-full py-40 px-8 bg-black relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0fa2_1px,transparent_1px),linear-gradient(to_bottom,#0fa2_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] [transform-origin:top] h-[200%] -top-[100%]" />
      <h1 className="relative z-10 text-8xl font-black text-white italic tracking-tighter" style={{ textShadow: '0 0 20px #0fa, 0 0 40px #0fa' }}>RETROWAVE</h1>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#f09] to-transparent mt-4 shadow-[0_0_20px_#f09]" />
    </div>
  ),

  // 47. Floating Geometric
  GeoFloating: () => (
    <div className="w-full py-32 px-8 bg-slate-50 relative overflow-hidden flex items-center justify-center gap-12">
      <div className="w-32 h-32 bg-blue-500 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="w-32 h-32 bg-purple-500 rotate-45 animate-pulse" />
      <div className="w-32 h-32 bg-orange-500 rounded-3xl animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-6xl font-black text-slate-900/10 uppercase tracking-[1em]">Geometry</h1>
      </div>
    </div>
  ),

  // 48. Cyber Login Focus
  CyberLogin: () => (
    <div className="w-full py-32 px-8 bg-[#050505] border-y border-zinc-800 flex flex-col items-center">
      <div className="w-full max-w-md p-8 border border-[#0fa]/30 bg-black rounded-sm relative group">
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#0fa]" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#0fa]" />
        <h2 className="text-[#0fa] font-mono mb-8 text-center tracking-widest">AUTHORIZATION_REQUIRED</h2>
        <div className="space-y-4">
          <div className="h-10 bg-zinc-900 border border-zinc-800" />
          <div className="h-10 bg-zinc-900 border border-zinc-800" />
          <button className="w-full py-3 bg-[#0fa] text-black font-black uppercase tracking-tighter">Enter_System</button>
        </div>
      </div>
    </div>
  ),

  // 49. Soft Bento Pastel
  SoftBento: () => (
    <div className="w-full p-8 bg-zinc-50 grid grid-cols-6 gap-4 aspect-[21/9]">
      <div className="col-span-3 row-span-2 bg-blue-100 rounded-[2.5rem] p-10 flex flex-col justify-between">
        <h1 className="text-4xl font-bold text-blue-900">Sweet Interfaces.</h1>
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm" />
      </div>
      <div className="col-span-2 bg-purple-100 rounded-[2.5rem] p-6" />
      <div className="bg-orange-100 rounded-[2.5rem] p-6" />
      <div className="col-span-3 bg-emerald-100 rounded-[2.5rem] p-6 flex items-center justify-center">
        <span className="text-emerald-900 font-bold">Pastel Palette</span>
      </div>
    </div>
  ),

  // 50. Industrial Blueprint
  Blueprint: () => (
    <div className="w-full py-32 px-12 bg-blue-700 relative overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="relative z-10 border-2 border-white/40 p-12 max-w-3xl">
        <span className="text-white/60 text-xs uppercase mb-4 block">Project_Ref: 00-160-PRO</span>
        <h1 className="text-6xl font-black text-white mb-6 uppercase leading-tight">Master Plan for<br/>Web Evolution</h1>
        <div className="flex gap-4">
          <div className="px-4 py-1 border border-white text-white text-xs">REVISION_A</div>
          <div className="px-4 py-1 border border-white text-white text-xs">APPROVED</div>
        </div>
      </div>
    </div>
  ),

  // 51. Spotlight Dark v2
  SpotlightV2: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 flex flex-col items-center text-center group cursor-crosshair">
      <div className="w-24 h-24 bg-white rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity absolute pointer-events-none" />
      <h1 className="text-8xl font-black text-white/5 group-hover:text-white transition-colors duration-1000">DISCOVER</h1>
      <p className="text-zinc-800 mt-4 group-hover:text-zinc-500 transition-colors duration-1000 uppercase tracking-[0.5em]">Hidden in plain sight</p>
    </div>
  ),

  // 52. Split Typography
  SplitType: () => (
    <div className="w-full h-[400px] flex overflow-hidden group">
      <div className="flex-1 bg-black flex items-center justify-end pr-2 overflow-hidden">
        <h1 className="text-9xl font-black text-white translate-x-1/2 group-hover:translate-x-0 transition-transform duration-700">CREA</h1>
      </div>
      <div className="flex-1 bg-white flex items-center justify-start pl-2 overflow-hidden border-l border-zinc-200">
        <h1 className="text-9xl font-black text-black -translate-x-1/2 group-hover:translate-x-0 transition-transform duration-700">TIVE</h1>
      </div>
    </div>
  ),

  // 53. Abstract Mesh Soft
  MeshSoft: () => (
    <div className="w-full py-32 px-8 bg-zinc-100 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 animate-pulse" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-serif italic text-indigo-950 mb-4">Ethereal Design</h1>
        <p className="text-indigo-900/40">Suavidad y elegancia en cada píxel.</p>
      </div>
    </div>
  ),

  // 54. Brutalist Pop v2
  BrutalistPop: () => (
    <div className="w-full py-24 px-12 bg-pink-400 flex items-center justify-between border-y-8 border-black">
      <h1 className="text-8xl font-black text-black uppercase leading-[0.8]">YES<br/>WE<br/>CAN</h1>
      <div className="w-48 h-48 bg-black rounded-full flex items-center justify-center -rotate-12 hover:rotate-12 transition-transform cursor-pointer">
        <span className="text-pink-400 font-black text-4xl">GO!</span>
      </div>
    </div>
  ),

  // 55. Modern Tech SaaS
  TechSaaS: () => (
    <div className="w-full py-32 px-8 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-500 text-xs font-bold inline-block">Cloud Native v5.0</div>
        <h1 className="text-7xl font-black text-white tracking-tighter">Scale your infra,<br/>not your costs.</h1>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed">La plataforma de orquestación definitiva para contenedores y microservicios a escala global.</p>
      </div>
    </div>
  ),

  // 56. Vintage Magazine Cover
  VintageCover: () => (
    <div className="w-full py-20 px-8 bg-[#fdfcf0] flex items-center justify-center">
      <div className="w-full max-w-2xl border-2 border-black p-4 bg-white shadow-2xl relative">
        <div className="absolute top-8 right-8 text-right">
          <p className="font-black text-4xl">50¢</p>
          <p className="text-[10px] uppercase font-bold tracking-widest">Issue No. 42</p>
        </div>
        <h1 className="text-[10vw] font-serif font-black leading-none mb-12 border-b-4 border-black pb-4">DESIGN</h1>
        <div className="h-64 bg-zinc-100 mb-8 overflow-hidden">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale hover:scale-110 transition-transform duration-1000" />
        </div>
        <p className="text-2xl font-serif italic text-center max-w-md mx-auto">"The future is already here, it's just not evenly distributed."</p>
      </div>
    </div>
  ),

  // 57. Gradient Wave Hero
  WaveHero: () => (
    <div className="w-full py-32 px-8 bg-black relative overflow-hidden flex flex-col items-center">
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/20 to-transparent animate-pulse" />
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-black text-white mb-6">Oceanic Waves</h1>
        <p className="text-blue-400 text-xl font-light tracking-[0.2em] uppercase">Rhythm of the Sea</p>
      </div>
    </div>
  ),

  // 58. Minimalist Portfolio Focus
  PortfolioHero: () => (
    <div className="w-full py-32 px-12 bg-zinc-950 flex flex-col items-start space-y-12">
      <div className="space-y-2">
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Senior Frontend Architect</p>
        <h1 className="text-8xl font-black text-white tracking-tighter">VICTOR<br/>KOD.</h1>
      </div>
      <p className="text-zinc-400 text-2xl font-light max-w-2xl leading-relaxed">
        Building high-performance user interfaces and design systems that push the boundaries of the modern web.
      </p>
      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
        <ChevronRight className="rotate-90 text-white" />
      </div>
    </div>
  ),

  // 59. Glitch Static v2
  StaticHero: () => (
    <div className="w-full py-32 px-8 bg-zinc-900 flex items-center justify-center group cursor-none">
      <div className="relative">
        <h1 className="text-9xl font-black text-white opacity-10 group-hover:opacity-100 transition-opacity duration-100">STATIC</h1>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>
    </div>
  ),

  // 60. Ultimate Glass Card Stack
  GlassStack: () => (
    <div className="w-full py-40 px-8 bg-gradient-to-br from-indigo-900 to-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse" />
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        <div className="h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-4 transition-transform duration-500">
          <div className="w-10 h-10 bg-[#0fa] rounded-full mb-6" />
          <h3 className="text-white font-bold text-xl mb-2">Nexus_A</h3>
          <p className="text-zinc-500 text-sm">Automated workflows for modern teams.</p>
        </div>
        <div className="h-64 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 -translate-y-8 hover:-translate-y-12 transition-transform duration-500">
          <div className="w-10 h-10 bg-purple-500 rounded-full mb-6" />
          <h3 className="text-white font-bold text-xl mb-2">Nexus_B</h3>
          <p className="text-zinc-500 text-sm">Deep learning integrated at the core.</p>
        </div>
        <div className="h-64 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-4 transition-transform duration-500">
          <div className="w-10 h-10 bg-rose-500 rounded-full mb-6" />
          <h3 className="text-white font-bold text-xl mb-2">Nexus_C</h3>
          <p className="text-zinc-500 text-sm">Global scale with zero-latency.</p>
        </div>
      </div>
    </div>
  ),

  // 61. Neo-Brutalist Grid
  NeoBrutalistGrid: () => (
    <div className="w-full py-32 px-8 bg-yellow-400 border-y-8 border-black grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="border-8 border-black p-12 flex flex-col justify-center bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] z-10">
        <h1 className="text-7xl font-black text-black uppercase mb-6 leading-none">NO<br/>MORE<br/>RULES.</h1>
        <p className="text-black font-bold text-xl uppercase tracking-tighter">Design without boundaries.</p>
      </div>
      <div className="border-8 border-black border-l-0 p-12 bg-black flex items-center justify-center overflow-hidden group">
        <div className="w-64 h-64 bg-yellow-400 border-4 border-white rotate-12 group-hover:rotate-45 transition-transform duration-500" />
      </div>
    </div>
  ),

  // 62. Cyberpunk Terminal
  CyberTerminal: () => (
    <div className="w-full py-32 px-8 bg-black border-y border-[#0fa]/20 font-mono">
      <div className="max-w-4xl mx-auto border border-[#0fa]/30 bg-zinc-950 p-6 rounded-lg shadow-[0_0_30px_rgba(0,255,170,0.1)]">
        <div className="flex gap-2 mb-6 border-b border-[#0fa]/20 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-[#0fa]/40 text-xs ml-4">root@cyber_vault:~</span>
        </div>
        <div className="space-y-2">
          <p className="text-[#0fa] animate-pulse">{">"} Initializing neural link...</p>
          <p className="text-zinc-500">{">"} Connection established via NODE_77</p>
          <p className="text-white text-4xl font-black mt-8 mb-4">ACCESS_GRANTED</p>
          <p className="text-zinc-400 max-w-xl">Bienvenido al núcleo del sistema. Todos los protocolos de seguridad han sido anulados.</p>
          <div className="h-4 w-2 bg-[#0fa] animate-bounce mt-8" />
        </div>
      </div>
    </div>
  ),

  // 63. Bauhaus Geometric
  BauhausGeo: () => (
    <div className="w-full py-32 px-8 bg-[#e5e5e5] relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-64 h-full bg-[#d62828]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-32 bg-[#fcbf49]" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 bg-[#003049] rounded-full mb-8 shadow-2xl" />
        <h1 className="text-8xl font-black text-black tracking-tighter mix-blend-difference">BAUHAUS</h1>
        <p className="text-black font-medium tracking-[0.4em] uppercase mt-4">Form follows function</p>
      </div>
    </div>
  ),

  // 64. Minimalist Typographic Focus
  TypoFocus: () => (
    <div className="w-full py-40 px-8 bg-white flex flex-col items-center justify-center text-center">
      <h1 className="text-[15vw] font-black text-black leading-[0.8] tracking-tighter hover:italic transition-all cursor-default">
        BOLD<br/>SOUL
      </h1>
      <div className="mt-12 space-y-4">
        <div className="h-[2px] w-32 bg-black mx-auto" />
        <p className="text-zinc-400 uppercase tracking-[0.5em] text-sm">Defining the essence of UI</p>
      </div>
    </div>
  ),

  // 65. Glass Bento v2
  GlassBentoV2: () => (
    <div className="w-full p-12 bg-[#050505] grid grid-cols-12 gap-6 min-h-[600px]">
      <div className="col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
        <h2 className="text-5xl font-black text-white mb-4">Visionary<br/>Intelligence</h2>
        <p className="text-zinc-500 max-w-md">Explora el futuro de la inteligencia artificial con interfaces translúcidas y fluidas.</p>
      </div>
      <div className="col-span-4 space-y-6">
        <div className="h-1/2 bg-gradient-to-br from-[#0fa]/20 to-transparent backdrop-blur-lg border border-[#0fa]/20 rounded-[3rem] p-8 flex items-center justify-center">
          <Zap size={48} className="text-[#0fa]" />
        </div>
        <div className="h-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8" />
      </div>
    </div>
  ),

  // 66. Retro TV Static V2
  RetroTVV2: () => (
    <div className="w-full py-40 px-8 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[pulse_0.1s_infinite]" />
      <div className="relative z-10 border-8 border-zinc-800 p-16 rounded-[4rem] bg-zinc-900 shadow-2xl">
        <h1 className="text-7xl font-mono font-black text-zinc-300 tracking-tighter">NO_SIGNAL</h1>
        <div className="mt-8 flex gap-2 justify-center">
          <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
          <div className="w-4 h-4 bg-zinc-700 rounded-full" />
          <div className="w-4 h-4 bg-zinc-700 rounded-full" />
        </div>
      </div>
    </div>
  ),

  // 67. Cyberpunk HUD
  CyberHUD: () => (
    <div className="w-full py-32 px-8 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 border-[20px] border-[#0fa]/5" />
      <div className="absolute top-10 left-10 text-[#0fa] font-mono text-xs space-y-2">
        <p>LAT: 40.7128 N</p>
        <p>LONG: 74.0060 W</p>
        <p>ALT: 2500 FT</p>
      </div>
      <div className="relative w-80 h-80 border-2 border-[#0fa]/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
        <div className="w-64 h-64 border-2 border-[#f09]/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
          <div className="w-48 h-48 border-4 border-dashed border-[#0fa]/40 rounded-full" />
        </div>
      </div>
      <div className="absolute z-10 text-center">
        <h1 className="text-4xl font-black text-white italic tracking-widest">TARGET_LOCKED</h1>
        <p className="text-[#0fa] font-mono text-xs mt-2 uppercase">Scanning for vulnerabilities...</p>
      </div>
    </div>
  ),

  // 68. Brutalist Magazine
  BrutalistMag: () => (
    <div className="w-full py-24 px-8 bg-white border-y-4 border-black font-serif">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-9xl font-black text-black leading-none mb-8">THE<br/>EDGE</h1>
          <p className="text-3xl font-medium text-black leading-tight italic">Exploring the intersection of raw brutalism and digital elegance.</p>
        </div>
        <div className="w-full md:w-1/3 space-y-8">
          <div className="aspect-[3/4] bg-zinc-900 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm font-sans font-bold uppercase tracking-widest border-t-2 border-black pt-4">Vol. 01 / Issue 04</p>
        </div>
      </div>
    </div>
  ),

  // 69. Aurora Glow Modern
  AuroraGlow: () => (
    <div className="w-full py-40 px-8 bg-[#020617] relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full rotate-12 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] bg-purple-500/20 blur-[120px] rounded-full -rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="relative z-10 space-y-8">
        <h1 className="text-8xl font-black text-white tracking-tighter">Beyond the Horizon.</h1>
        <p className="text-slate-400 text-2xl font-light max-w-2xl mx-auto">Experiencias digitales inmersivas creadas con la luz de la próxima generación.</p>
      </div>
    </div>
  ),

  // 70. Pixel Art Game
  PixelGame: () => (
    <div className="w-full py-32 px-8 bg-black flex flex-col items-center justify-center font-mono">
      <div className="mb-12 relative">
        <div className="w-64 h-32 bg-zinc-800 border-4 border-white flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <h1 className="text-white text-4xl uppercase tracking-widest animate-pulse">Start_Game</h1>
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#0fa]" />
      </div>
      <div className="flex gap-8 text-zinc-500 text-sm uppercase">
        <span className="hover:text-white cursor-pointer transition-colors">[ 1 PLAYER ]</span>
        <span className="hover:text-white cursor-pointer transition-colors">[ 2 PLAYERS ]</span>
      </div>
    </div>
  ),

  // 71. Kinetic Typography
  KineticTypo: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 overflow-hidden relative flex flex-col">
      <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-20">
        <span className="text-9xl font-black text-white/5 uppercase">INNOVATE • DESIGN • CREATE • EVOLVE • </span>
        <span className="text-9xl font-black text-white/5 uppercase">INNOVATE • DESIGN • CREATE • EVOLVE • </span>
      </div>
      <div className="relative z-10 text-center mt-[-60px]">
        <h1 className="text-7xl font-black text-[#0fa] italic">MOTION_UI</h1>
        <p className="text-zinc-500 mt-4 uppercase tracking-[1em]">The speed of light</p>
      </div>
    </div>
  ),

  // 72. 3D Card Showcase
  CardShowcase3D: () => (
    <div className="w-full py-32 px-8 bg-zinc-100 flex items-center justify-center gap-8 perspective-[1000px]">
      <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl border border-zinc-200 [transform:rotateY(-20deg)_rotateX(10deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 p-8 flex flex-col justify-between group">
        <div className="w-12 h-12 bg-indigo-600 rounded-lg group-hover:scale-110 transition-transform" />
        <div>
          <h3 className="font-bold text-xl text-zinc-900">Alpha_Node</h3>
          <p className="text-zinc-500 text-sm">Primary infrastructure core.</p>
        </div>
      </div>
      <div className="w-64 h-80 bg-zinc-900 rounded-2xl shadow-2xl [transform:rotateY(20deg)_rotateX(10deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 p-8 flex flex-col justify-between group">
        <div className="w-12 h-12 bg-[#0fa] rounded-lg group-hover:scale-110 transition-transform" />
        <div>
          <h3 className="font-bold text-xl text-white">Beta_Node</h3>
          <p className="text-zinc-400 text-sm">Secondary backup systems.</p>
        </div>
      </div>
    </div>
  ),

  // 73. Abstract Fluid
  FluidGradient: () => (
    <div className="w-full py-40 px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-orange-400 to-yellow-300 animate-[spin_10s_linear_infinite] opacity-30 blur-3xl scale-150" />
      <div className="relative z-10">
        <h1 className="text-[12vw] font-black text-black mix-blend-overlay leading-none tracking-tighter">FLUIDITY</h1>
        <p className="text-black/40 font-bold text-xl mt-4">Seamless transitions for modern web.</p>
      </div>
    </div>
  ),

  // 74. Bauhaus Minimal Red
  BauhausRed: () => (
    <div className="w-full py-32 px-12 bg-[#d62828] flex flex-col items-start justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black" />
      <div className="w-20 h-20 bg-[#fcbf49] mb-12" />
      <h1 className="text-8xl font-black text-white tracking-tighter leading-none z-10">THE<br/>MODERN<br/>ARCH.</h1>
      <p className="text-white/60 font-mono mt-8 uppercase tracking-widest z-10">Est. 1919 / Reborn 2024</p>
    </div>
  ),

  // 75. Cyber Neon City
  NeonCity: () => (
    <div className="w-full py-40 px-8 bg-black relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,#f092_50%,#0fa2_100%)] opacity-30" />
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0fa] to-transparent shadow-[0_0_20px_#0fa]" />
      <div className="space-y-4">
        <h1 className="text-9xl font-black text-white tracking-tighter italic" style={{ textShadow: '0 0 10px #f09, 0 0 20px #f09, 0 0 40px #f09' }}>NEON</h1>
        <h1 className="text-9xl font-black text-white tracking-tighter italic" style={{ textShadow: '0 0 10px #0fa, 0 0 20px #0fa, 0 0 40px #0fa' }}>NIGHTS</h1>
      </div>
      <p className="text-zinc-500 font-mono mt-8 uppercase tracking-[1.5em]">The city never sleeps</p>
    </div>
  ),

  // 76. Brutalist Bold Headline
  BoldHeadline: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 flex flex-col items-center">
      <div className="w-full max-w-4xl border-x-2 border-zinc-800 px-12">
        <span className="text-zinc-500 font-bold text-sm uppercase tracking-widest mb-8 block underline underline-offset-8 decoration-rose-500 decoration-4">New Perspective</span>
        <h1 className="text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12">REDEFINING<br/>HOW WE<br/>BUILD THE<br/>WEB.</h1>
        <div className="flex justify-between items-end border-t-2 border-zinc-800 pt-8">
          <p className="text-zinc-400 max-w-sm">No más interfaces aburridas. Es hora de volver a la web cruda, honesta y brutal.</p>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <ArrowRight size={32} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  ),

  // 77. Glass Sidebar Hero
  GlassSidebar: () => (
    <div className="w-full py-32 px-8 bg-gradient-to-tr from-slate-900 to-indigo-950 flex items-center gap-12 overflow-hidden">
      <div className="w-1/3 h-[400px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
            <Cpu size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">System_Alpha</h3>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-[#0fa] animate-pulse" />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <h1 className="text-7xl font-black text-white tracking-tight">Integrated<br/>Ecosystems.</h1>
        <p className="text-slate-400 text-xl max-w-lg leading-relaxed">Conecta todas tus herramientas en un solo lugar con nuestra arquitectura modular translúcida.</p>
      </div>
    </div>
  ),

  // 78. Retro Cassette Focus
  CassetteHero: () => (
    <div className="w-full py-32 px-8 bg-[#fdfcf0] flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-[#e5e0d8] border-8 border-zinc-800 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-zinc-800/10" />
        <div className="flex justify-between items-center mb-12">
          <div className="w-24 h-4 bg-zinc-400 rounded-full" />
          <div className="w-24 h-4 bg-zinc-400 rounded-full" />
        </div>
        <div className="flex items-center gap-8 border-4 border-zinc-800 p-8 bg-zinc-100 rounded-3xl">
          <div className="w-24 h-24 border-8 border-zinc-800 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite]">
            <div className="w-4 h-4 bg-zinc-800 rounded-full" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-black text-zinc-800 italic uppercase">Mixtape_Vol_1</h2>
            <p className="text-zinc-500 font-mono text-sm mt-2">SIDE_A | 45:00 MIN</p>
          </div>
          <div className="w-24 h-24 border-8 border-zinc-800 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite]">
            <div className="w-4 h-4 bg-zinc-800 rounded-full" />
          </div>
        </div>
      </div>
      <p className="mt-12 text-zinc-400 font-serif italic text-2xl">"Press play to start the journey."</p>
    </div>
  ),

  // 79. Modern SaaS v2
  ModernSaaS: () => (
    <div className="w-full py-40 px-8 bg-[#030712] relative flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-indigo-600/20 rounded-[2rem] border border-indigo-500/30 flex items-center justify-center mb-12 animate-bounce">
        <Globe size={40} className="text-indigo-400" />
      </div>
      <h1 className="text-8xl font-black text-white tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Ship faster than<br/>ever before.</h1>
      <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-12">La infraestructura global que permite a los equipos de ingeniería desplegar aplicaciones a escala planetaria sin fricciones.</p>
      <div className="flex gap-6">
        <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors">Start Deploying</button>
        <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl border border-zinc-800 hover:bg-zinc-800 transition-colors">View Documentation</button>
      </div>
    </div>
  ),

  // 80. Ultimate Cyber Showcase
  CyberShowcase: () => (
    <div className="w-full py-40 px-8 bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0fa1_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full border-[1px] border-[#0fa1] grid grid-cols-6 grid-rows-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-[#0fa1] hover:bg-[#0fa]/5 transition-colors duration-1000" />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="px-6 py-2 border-2 border-[#0fa] bg-black text-[#0fa] font-mono text-sm tracking-[0.3em] uppercase animate-pulse shadow-[0_0_15px_#0fa]">System_Status: Optimal</div>
        <h1 className="text-[10vw] font-black text-white italic tracking-tighter mix-blend-difference" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>UIX_SHOWCASE</h1>
        <div className="flex gap-12 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white">80+</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Heroes</span>
          </div>
          <div className="w-[1px] h-12 bg-zinc-800" />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white">60+</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Buttons</span>
          </div>
          <div className="w-[1px] h-12 bg-zinc-800" />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-white">40+</span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Effects</span>
          </div>
        </div>
      </div>
    </div>
  ),

  // 81. SaaS Professional
  SaaSProfessional: () => (
    <div className="w-full py-32 px-8 bg-white flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-blue-700 text-sm font-medium">New: Enterprise AI v2.0 is live</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
        Manage your entire business<br/>in one single dashboard.
      </h1>
      <p className="text-slate-500 text-xl max-w-2xl mb-12">
        Streamline your workflow with our production-ready components. Built for teams that value speed and reliability.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Get Started Free</button>
        <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">Book a Demo</button>
      </div>
    </div>
  ),

  // 82. Corporate Office
  CorporateOffice: () => (
    <div className="w-full py-24 px-12 bg-slate-50 flex items-center justify-between border-y border-slate-200">
      <div className="max-w-xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Corporate Solutions</h2>
        <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">Redefining the modern workspace for global teams.</h1>
        <p className="text-slate-600 text-lg mb-8">Our infrastructure ensures 99.9% uptime and enterprise-grade security for your most sensitive operations.</p>
        <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
          <div>
            <p className="text-3xl font-bold text-slate-900">500+</p>
            <p className="text-slate-500 text-sm uppercase font-semibold">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">24/7</p>
            <p className="text-slate-500 text-sm uppercase font-semibold">Expert Support</p>
          </div>
        </div>
      </div>
      <div className="w-96 h-[450px] bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
        <div className="h-4 w-full bg-slate-100 rounded-full" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-blue-50 rounded-xl" />
          <div className="h-20 bg-slate-50 rounded-xl" />
          <div className="h-20 bg-slate-50 rounded-xl" />
        </div>
        <div className="h-32 bg-slate-900 rounded-xl" />
      </div>
    </div>
  ),

  // 83. E-commerce Minimalist
  EcomMinimal: () => (
    <div className="w-full py-20 px-8 bg-[#fafafa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-white rounded-3xl border border-zinc-200 p-12 flex items-center justify-center group cursor-pointer">
          <div className="w-64 h-64 bg-zinc-100 rounded-full group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div className="space-y-8">
          <span className="text-zinc-400 font-medium tracking-widest uppercase">New Collection 2024</span>
          <h1 className="text-6xl font-light text-zinc-900 leading-none">The Essence of<br/>Pure Design.</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">Sustainably sourced, handcrafted furniture for the modern home. Minimalism meets comfort.</p>
          <div className="flex items-center gap-8">
            <span className="text-3xl font-bold text-zinc-900">$299.00</span>
            <button className="px-10 py-4 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ),

  // 84. Foodie Kitchen
  FoodieKitchen: () => (
    <div className="w-full py-32 px-8 bg-orange-50 relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl" />
      <h2 className="text-orange-600 font-bold italic text-2xl mb-4">Delivered to your door.</h2>
      <h1 className="text-7xl font-black text-slate-900 tracking-tight mb-8">Fresh ingredients for<br/>extraordinary meals.</h1>
      <p className="text-slate-600 text-xl max-w-xl mb-12">Choose from 100+ seasonal recipes curated by top chefs. Simple, healthy, and delicious.</p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center gap-3">
          <span className="text-2xl">🥗</span>
          <span className="font-bold text-slate-800">Fresh Salads</span>
        </div>
        <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center gap-3">
          <span className="text-2xl">🥩</span>
          <span className="font-bold text-slate-800">Premium Meats</span>
        </div>
        <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center gap-3">
          <span className="text-2xl">🍰</span>
          <span className="font-bold text-slate-800">Artisan Desserts</span>
        </div>
      </div>
    </div>
  ),

  // 85. Studio Portfolio
  StudioPortfolio: () => (
    <div className="w-full min-h-screen bg-white flex flex-col justify-between p-12">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-black tracking-tighter">STUDIO_X</h1>
        <div className="text-right">
          <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Based in Tokyo</p>
          <p className="text-zinc-900 font-medium">Available for projects 2024</p>
        </div>
      </div>
      <div className="max-w-4xl">
        <h2 className="text-[10vw] font-bold text-zinc-900 leading-[0.9] tracking-tighter">WE CRAFT<br/>DIGITAL<br/>POETRY.</h2>
      </div>
      <div className="flex justify-between items-end border-t border-zinc-100 pt-8">
        <p className="text-zinc-400 max-w-xs">An independent design studio focusing on high-end digital experiences and motion design.</p>
        <ArrowRight size={48} className="text-zinc-900 cursor-pointer hover:translate-x-4 transition-transform" />
      </div>
    </div>
  ),

  // 86. Financial Services
  FinancialServices: () => (
    <div className="w-full py-32 px-12 bg-slate-900 flex items-center justify-center text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="max-w-4xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">Secure your wealth with intelligence.</h1>
          <p className="text-slate-400 text-lg">Next-generation wealth management powered by AI. Real-time insights, zero hidden fees, total control.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-emerald-400" />
              <span>Enterprise-grade encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-emerald-400" />
              <span>Instant global transfers</span>
            </div>
          </div>
          <button className="px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all">Open Account Now</button>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Portfolio Value</span>
            <span className="text-emerald-400 font-bold">+12.4%</span>
          </div>
          <div className="text-4xl font-bold mb-8">$1,284,592.00</div>
          <div className="h-32 w-full bg-slate-700/50 rounded-xl flex items-end gap-2 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 bg-emerald-500/40 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  // 87. Fashion E-commerce
  FashionEcom: () => (
    <div className="w-full py-20 px-8 bg-zinc-50 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-zinc-200 rounded-[3rem] h-[600px] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          <div className="absolute bottom-10 left-10 z-10">
            <h3 className="text-3xl font-bold text-white mb-2">Summer Essentials</h3>
            <span className="text-white/80 border-b border-white pb-1">Shop Men's</span>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="bg-white p-12 rounded-[3rem] h-1/2 border border-zinc-200 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tighter">UP TO 50% OFF</h2>
            <p className="text-zinc-500 mb-6">Mid-season sale is here. Elevate your style with our premium selection.</p>
            <button className="w-fit px-8 py-3 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-colors">Browse Sale</button>
          </div>
          <div className="bg-black p-12 rounded-[3rem] h-1/2 flex flex-col justify-center text-white">
            <h2 className="text-4xl font-black mb-4 tracking-tighter">NEW ARRIVALS</h2>
            <p className="text-zinc-400 mb-6">Discover the latest trends in luxury streetwear and accessories.</p>
            <button className="w-fit px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">Shop New</button>
          </div>
        </div>
      </div>
    </div>
  ),

  // 88. Coffee Shop
  CoffeeShop: () => (
    <div className="w-full py-32 px-8 bg-[#1a120b] text-[#e5e5cb] flex flex-col items-center text-center">
      <div className="w-20 h-20 border-2 border-[#e5e5cb]/30 rounded-full flex items-center justify-center mb-8">
        <span className="text-3xl">☕</span>
      </div>
      <h1 className="text-6xl font-serif italic mb-6">Artisan Roasters.</h1>
      <p className="text-xl max-w-2xl text-[#e5e5cb]/70 font-light leading-relaxed mb-12">Hand-picked beans, roasted in small batches to preserve the complex flavors of the origin. Experience the perfect cup.</p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-[#e5e5cb] text-[#1a120b] font-bold rounded-sm hover:bg-white transition-colors">Order Beans</button>
        <button className="px-8 py-3 border border-[#e5e5cb]/30 text-[#e5e5cb] font-bold rounded-sm hover:bg-white/10 transition-colors">Our Story</button>
      </div>
    </div>
  ),

  // 89. Tech Startup Clean
  TechStartupClean: () => (
    <div className="w-full py-40 px-8 bg-white relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f615_0%,transparent_50%)]" />
      <div className="px-6 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-semibold mb-8">Trusted by 10,000+ engineers worldwide</div>
      <h1 className="text-7xl font-bold text-slate-900 tracking-tight mb-8">The operating system for<br/>modern software teams.</h1>
      <p className="text-slate-500 text-xl max-w-2xl mb-12 leading-relaxed">Collaborate on code, manage tasks, and deploy applications without ever leaving your terminal.</p>
      <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-sm max-w-md w-full">
        <input type="email" placeholder="Enter your work email" className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-900" />
        <button className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">Join Waitlist</button>
      </div>
    </div>
  ),

  // 90. Real Estate Minimal
  RealEstateMinimal: () => (
    <div className="w-full py-24 px-12 bg-zinc-50 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8">
          <h1 className="text-7xl font-black text-zinc-900 tracking-tighter leading-none">FIND YOUR<br/>SPACE.</h1>
          <p className="text-zinc-500 text-xl">Curated luxury properties in the most desirable locations across the globe.</p>
          <div className="grid grid-cols-3 gap-4 border-y border-zinc-200 py-8">
            <div>
              <p className="text-2xl font-bold">1.2k</p>
              <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Properties</p>
            </div>
            <div>
              <p className="text-2xl font-bold">45</p>
              <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Cities</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24h</p>
              <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Viewing</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full aspect-[4/3] bg-zinc-200 rounded-[3rem] shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-12 text-white">
            <h3 className="text-2xl font-bold">Villa Mediterranean</h3>
            <p className="text-white/80">Ibiza, Spain • $4.2M</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 91. Education LMS
  EducationLMS: () => (
    <div className="w-full py-32 px-8 bg-indigo-50 flex flex-col items-center text-center">
      <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-4">Learn from the best</h2>
      <h1 className="text-6xl font-black text-slate-900 mb-8">Master the craft of<br/>modern web development.</h1>
      <p className="text-slate-600 text-xl max-w-2xl mb-12">Expert-led courses designed to take you from beginner to professional in weeks, not years.</p>
      <div className="flex gap-4">
        <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all">Start Learning</button>
        <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-indigo-100 hover:bg-indigo-50 transition-all">Browse Catalog</button>
      </div>
    </div>
  ),

  // 92. Luxury Minimal Black
  LuxuryBlack: () => (
    <div className="w-full h-[600px] bg-black flex flex-col items-center justify-center text-white relative">
      <div className="absolute top-12 left-12">
        <div className="w-8 h-[1px] bg-white mb-2" />
        <div className="w-8 h-[1px] bg-white" />
      </div>
      <h1 className="text-[15vw] font-serif italic font-light tracking-tighter opacity-10 absolute select-none">PRECISION</h1>
      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-sm font-bold tracking-[0.6em] uppercase text-zinc-500">The 2024 Collection</h2>
        <h1 className="text-7xl font-bold tracking-tight">ELEGANCE REDEFINED.</h1>
        <div className="h-20 w-[1px] bg-white/20 mx-auto mt-12" />
        <p className="text-zinc-400 font-light tracking-widest uppercase text-xs pt-4 cursor-pointer hover:text-white transition-colors">Discover More</p>
      </div>
    </div>
  ),

  // 93. Healthcare Medical
  MedicalClean: () => (
    <div className="w-full py-32 px-8 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
            <Shield size={32} />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">Better healthcare for a better life.</h1>
          <p className="text-slate-500 text-lg">Connect with top-rated specialists instantly. Secure, private, and professional medical consultations from your home.</p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">Find a Doctor</button>
            <button className="px-8 py-3 bg-slate-50 text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">Learn More</button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6 w-full">
          <div className="bg-blue-50 p-8 rounded-[2rem] space-y-4">
            <h3 className="text-xl font-bold text-blue-900">24/7 Care</h3>
            <p className="text-blue-700/70 text-sm">Always here when you need us most.</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-[2rem] mt-8 space-y-4">
            <h3 className="text-xl font-bold text-emerald-900">Secure Data</h3>
            <p className="text-emerald-700/70 text-sm">Your privacy is our priority.</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 94. Electronics E-commerce
  ElectronicsEcom: () => (
    <div className="w-full py-32 px-8 bg-zinc-950 text-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#3b82f620_0%,transparent_50%)]" />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-8">
          <span className="px-4 py-1 bg-blue-600 rounded-md text-xs font-bold uppercase tracking-widest">Next Gen Sound</span>
          <h1 className="text-8xl font-black tracking-tighter leading-none">AUDIO<br/>ABSOLUTE.</h1>
          <p className="text-zinc-400 text-xl leading-relaxed">Wireless noise cancellation like never before. 40 hours of battery life. Pure immersion.</p>
          <div className="flex items-center gap-8">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all">Buy Now</button>
            <span className="text-3xl font-mono">$349.00</span>
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
          <div className="relative w-full h-full bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center">
            <div className="w-48 h-48 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
              <Zap size={64} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 95. Travel Hero
  TravelHero: () => (
    <div className="w-full h-screen bg-zinc-900 relative overflow-hidden flex flex-col justify-center px-12 text-white">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-black via-transparent to-black" />
      <div className="relative z-10 space-y-6 max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-emerald-400">Escape the ordinary</h2>
        <h1 className="text-[8vw] font-black leading-none tracking-tighter">JOURNEY<br/>FURTHER.</h1>
        <p className="text-xl text-zinc-300 max-w-xl">Curated travel experiences for the modern explorer. Discover hidden gems and unforgettable landscapes.</p>
        <div className="flex gap-6 pt-8">
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">Plan Trip</button>
          <button className="px-10 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full hover:bg-white/10 transition-colors">Explore</button>
        </div>
      </div>
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
        <div className="flex gap-8">
          <div>
            <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-2">Location</p>
            <p className="text-lg font-bold italic">Iceland, North Highlands</p>
          </div>
          <div className="w-[1px] h-12 bg-white/10" />
          <div>
            <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-2">Temp</p>
            <p className="text-lg font-bold italic">-4°C / 25°F</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 96. Minimalist Agency
  MinimalistAgency: () => (
    <div className="w-full py-40 px-8 bg-white flex flex-col items-center text-center">
      <div className="max-w-4xl space-y-12">
        <h1 className="text-8xl font-black text-zinc-900 tracking-tighter leading-[0.8]">SIMPLICITY IS THE ULTIMATE SOPHISTICATION.</h1>
        <div className="h-0.5 w-24 bg-zinc-900 mx-auto" />
        <p className="text-zinc-400 text-2xl font-medium uppercase tracking-[0.2em]">Creative Direction / Design / Strategy</p>
        <div className="flex flex-wrap justify-center gap-12 text-zinc-300 font-bold text-sm uppercase tracking-widest">
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Branding</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Digital</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Motion</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Print</span>
        </div>
      </div>
    </div>
  ),

  // 97. SaaS Pricing Hero
  SaaSPricingHero: () => (
    <div className="w-full py-32 px-8 bg-slate-50 flex flex-col items-center text-center">
      <h2 className="text-blue-600 font-bold mb-4">Simple, transparent pricing</h2>
      <h1 className="text-6xl font-black text-slate-900 tracking-tight mb-8">Choose the plan that<br/>works for your team.</h1>
      <p className="text-slate-500 text-xl max-w-2xl mb-16">All plans include our core features, unlimited users, and enterprise-grade security protocols.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-4">Free</h3>
          <p className="text-4xl font-black mb-8">$0<span className="text-lg text-slate-400 font-medium">/mo</span></p>
          <button className="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Start for free</button>
        </div>
        <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl scale-105 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-blue-500 text-xs font-bold uppercase tracking-widest">Popular</div>
          <h3 className="text-xl font-bold mb-4">Pro</h3>
          <p className="text-4xl font-black mb-8">$49<span className="text-lg text-slate-500 font-medium">/mo</span></p>
          <button className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-colors">Get Started Pro</button>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-4xl font-black mb-8">Custom</p>
          <button className="w-full py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">Contact Sales</button>
        </div>
      </div>
    </div>
  ),

  // 98. Restaurant Hero
  RestaurantHero: () => (
    <div className="w-full h-screen bg-[#0c0c0c] flex flex-col items-center justify-center text-[#d4af37] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="relative z-10 text-center space-y-8">
        <h2 className="text-sm font-bold tracking-[0.8em] uppercase text-white/40">The Culinary Art</h2>
        <h1 className="text-8xl font-serif italic font-light tracking-tighter">LUXURY<br/>DINING.</h1>
        <p className="text-white/60 text-lg max-w-md mx-auto font-light leading-relaxed">Experience an unforgettable evening of gourmet cuisine and exquisite wines in the heart of the city.</p>
        <div className="pt-12">
          <button className="px-12 py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all font-bold tracking-widest uppercase text-xs">Book a Table</button>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-[#d4af37]/20" />
      <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-[#d4af37]/20" />
    </div>
  ),

  // 99. Fitness Gym Bold
  FitnessGym: () => (
    <div className="w-full py-40 px-8 bg-zinc-950 text-white relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] text-[40vw] font-black italic opacity-5 leading-none select-none">POWER</div>
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-black italic tracking-tighter mb-8 leading-none">PUSH YOUR<br/>LIMITS.</h1>
        <p className="text-2xl text-rose-500 font-bold italic mb-12 uppercase tracking-widest">No pain, no gain. Join the elite.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-12 py-5 bg-rose-600 text-white font-black italic rounded-none skew-x-[-10deg] hover:bg-rose-500 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">Start Training</button>
          <button className="px-12 py-5 border-2 border-white text-white font-black italic rounded-none skew-x-[-10deg] hover:bg-white hover:text-black transition-all">View Plans</button>
        </div>
      </div>
    </div>
  ),

  // 100. Ultimate Mix Showcase
  UltimateMix: () => (
    <div className="w-full py-40 px-8 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-rose-50 opacity-50" />
      <div className="relative z-10 text-center space-y-12">
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">100+ Heroes</span>
          <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">60+ Buttons</span>
          <span className="px-4 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">Minimalist</span>
          <span className="px-4 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">Neon</span>
        </div>
        <h1 className="text-[8vw] font-black text-slate-900 leading-[0.8] tracking-tighter">THE ULTIMATE<br/>UI SHOWCASE.</h1>
        <p className="text-slate-500 text-2xl max-w-2xl mx-auto leading-relaxed">Everything you need to build stunning interfaces for any industry. From corporate to cyberpunk, we have you covered.</p>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-black text-slate-900">100%</p>
            <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Stable Build</p>
          </div>
          <div className="w-[1px] h-12 bg-slate-200" />
          <div className="text-center">
            <p className="text-4xl font-black text-slate-900">2024</p>
            <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Ready</p>
          </div>
        </div>
      </div>
    </div>
  )
};
