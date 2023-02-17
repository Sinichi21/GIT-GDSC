import { Container } from "react-bootstrap";
import HeroDivision from "../Divisions/Hero/Hero.js";
import DesignSection from "../Divisions/Section/DesignSection";
import TechDevSection from "../Divisions/Section/TechDevSection";

export default function DivisionsLayout() {
    return (
        <>
            <HeroDivision />
            <TechDevSection />
            <DesignSection />
        </>
    )
}