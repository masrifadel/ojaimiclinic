import { Metadata } from "next";
import CataractSurgeryClient from "./CataractSurgeryClient";

export const metadata: Metadata = {
  title: "Cataract Surgery | Dr. Karl Ojaimi Eye Clinic",
  description:
    "Advanced cataract surgery using phacoemulsification technology. Expert care with Dr. Karl Ojaimi in Baabda, Lebanon. Quick recovery and excellent visual outcomes.",
  keywords: [
    "cataract surgery Lebanon",
    "phacoemulsification",
    "cataract removal",
    "lens replacement surgery",
    "eye surgery Lebanon",
    "Dr. Karl Ojaimi cataract",
    "cataract treatment Baabda",
  ],
  openGraph: {
    title: "Cataract Surgery | Dr. Karl Ojaimi Eye Clinic",
    description:
      "Advanced cataract surgery with phacoemulsification technology for clear vision restoration.",
    url: "/cataract-surgery",
    images: [
      {
        url: "/ClinicImage.webp",
        width: 1200,
        height: 630,
        alt: "Cataract Surgery at Dr. Karl Ojaimi Eye Clinic",
      },
    ],
  },
};

export default function CataractSurgery() {
  return <CataractSurgeryClient />;
}
