import type { Project } from "@/types/project";

import dexImg from "@/assets/images/fx-stablecoin-dex/dex.png";
import selectTokenImg from "@/assets/images/fx-stablecoin-dex/select-token.png";
import poolsImg from "@/assets/images/fx-stablecoin-dex/pools.png";
import poolCreationImg from "@/assets/images/fx-stablecoin-dex/pool-creation.png";
import poolStep1Img from "@/assets/images/fx-stablecoin-dex/pool-step-1.png";
import poolStep2Img from "@/assets/images/fx-stablecoin-dex/pool-step-2.png";
import poolStep3Img from "@/assets/images/fx-stablecoin-dex/pool-step-3.png";
import poolStep4Img from "@/assets/images/fx-stablecoin-dex/pool-step-4.png";
import routingImg from "@/assets/images/fx-stablecoin-dex/routing.png";
import transactionImg from "@/assets/images/fx-stablecoin-dex/transaction.png";

const project: Project = {
  id: "fx-stablecoin-dex",
  title: "FX-based stablecoin DEX",
  logo: poolStep4Img,
  overviewImage: poolStep4Img,
  description:
    "A decentralised exchange (DEX) that enables seamless trading between fiat-pegged digital assets such as USD, EUR, and GBP stablecoins. The platform leverages smart contracts and custom AMM logic to provide efficient, low-slippage swaps using real-time FX pricing. By bringing foreign exchange on-chain, it offers a unique and scalable solution for cross-border payments and digital asset trading.",
  bullets: [
    "Built an FX oracle aggregator to power accurate stablecoin exchange rates.",
    "Integrated third-party protocols and custom AMM logic for on-chain swaps.",
    "Led frontend development and delivered the approved PoC.",
    "Defined architecture and coding standards for the custom DEX.",
  ],
  techStack: ["Smart contracts", "AMM", "FX oracle", "Web3", "DeFi"],
  year: "Feb 2024 – Oct 2025",
  gallery: [
    dexImg,
    selectTokenImg,
    poolsImg,
    poolCreationImg,
    poolStep1Img,
    poolStep2Img,
    poolStep3Img,
    poolStep4Img,
    routingImg,
    transactionImg,
  ],
};

export default project;
