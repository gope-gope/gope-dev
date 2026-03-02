import type { Project } from "@/types/project";

import landingImg from "@/assets/images/liquid-restaking-protocol/landing.png";
import connectImg from "@/assets/images/liquid-restaking-protocol/connect.png";
import dashboardImg from "@/assets/images/liquid-restaking-protocol/dashboard.png";
import vaultsImg from "@/assets/images/liquid-restaking-protocol/vaults.png";
import stakeImg from "@/assets/images/liquid-restaking-protocol/stake.png";
import delegateImg from "@/assets/images/liquid-restaking-protocol/delegate.png";
import operatorImg from "@/assets/images/liquid-restaking-protocol/operator.png";
import becomeValidatorImg from "@/assets/images/liquid-restaking-protocol/become-validator.png";
import editValidatorImg from "@/assets/images/liquid-restaking-protocol/edit-validator.png";
import avsListImg from "@/assets/images/liquid-restaking-protocol/avs-list.png";
import architectureImg from "@/assets/images/liquid-restaking-protocol/architecture.png";
import logoDarkImg from "@/assets/images/liquid-restaking-protocol/logo-dark.svg";

const project: Project = {
  id: "liquid-restaking-protocol",
  title: "Liquid Restaking Protocol",
  logo: logoDarkImg,
  overviewImage: architectureImg,
  description:
    "I contributed as the main smart contract developer for a Liquid Restaking Protocol built on Binance Smart Chain. The protocol enables users to restake assets while maintaining liquidity, combining yield optimization with composability across DeFi. I worked closely with the tech lead and architect to design and implement the smart contract architecture, proactively identifying and resolving logic loopholes to strengthen protocol security and reliability. In parallel, I oversaw frontend development, ensuring clean Web3 integrations and consistent engineering standards across the stack.",
  bullets: [
    "Led smart contract architecture and core protocol implementation.",
    "Identified and resolved architectural logic gaps to improve security and robustness.",
    "Collaborated closely with the tech lead and architect on system design decisions.",
    "Oversaw frontend development, approving PRs and refining Web3 UI logic and coding standards.",
  ],
  techStack: [
    "Solidity",
    "Binance Smart Chain",
    "DeFi",
    "Web3",
    "Smart contracts",
  ],
  year: "Aug 2024 – Feb 2025",
  gallery: [
    landingImg,
    connectImg,
    dashboardImg,
    vaultsImg,
    stakeImg,
    delegateImg,
    operatorImg,
    becomeValidatorImg,
    editValidatorImg,
    avsListImg,
    architectureImg,
  ],
};

export default project;
