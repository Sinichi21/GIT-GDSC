import HeroDivision from "../Divisions/Hero/Hero.js";
import CoreSection from "../Divisions/Section/CoreSection";
import EngineeringSection from "../Divisions/Section/EngineeringSection";
import TechDevSection from "../Divisions/Section/TechDevSection";
import DesignSection from "../Divisions/Section/DesignSection";
import GrowthSection from "../Divisions/Section/GrowthSection.js";

export default function DivisionsLayout() {
    return (
        <>
            <HeroDivision />
            <CoreSection />
            <EngineeringSection />
            <TechDevSection />
            <DesignSection />
            <GrowthSection />
        </>
    )
}