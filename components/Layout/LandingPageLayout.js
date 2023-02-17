import { Container } from 'react-bootstrap';

import HeroLandingPage from 'components/Home/Hero/Hero';
import SectionWhat from 'components/Home/Section/SectionWhat/SectionWhat';
import Activity from 'components/Home/Section/SectionActivity/Activity';
import SectionClub from '../Home/Section/SectionClub/SectionClub';

import style from 'styles/LandingPage.module.css';

export default function LandingPage() {
  return (
    <>
      <HeroLandingPage />
      <SectionWhat />
      
      <Container fluid 
        className='p-0' 
        style = {{ backgroundColor: '#495375' }}
      >
        <Container fluid 
          className = {`bg-white mb-4 ${style.container_section_rounded_bottom}`} 
          style = {{ 
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >

          {/* Section Sic Existed */}

        </Container>

        <Activity />

        <Container fluid 
          className = {`bg-white px-0 ${style.container_section_rounded_top}`} 
          style = {{ 
            boxShadow: '0px -25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >

            { /* Section Join Club and Section Question */ }
            <SectionClub />

        </Container>
      </Container>
    </>
  );
}
