import { Container } from 'react-bootstrap';

import HeroLandingPage from 'components/Home/Hero/Hero';
import SectionWhat from 'components/Home/Section/SectionWhat/SectionWhat';
import Activity from 'components/Home/Section/SectionActivity/Activity';
import SectionClub from '../Home/Section/SectionClub/SectionClub';
import SectionQuestion from '../Home/Section/SectionQuestion/SectionQuestion';

import style from 'styles/LandingPage.module.css';
import SectionExisted from '../Home/Section/SectionWhySICExisted/SectionExisted';

export default function LandingPage() {
  return (
    <>
      <HeroLandingPage />

      <Container fluid
        className='p-0'
        style={{ backgroundColor: '#495375' }}
      >
        <Container fluid
          className={`bg-white mb-4 ${style.container_section_rounded_bottom}`}
          style={{
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <SectionWhat />
          <SectionExisted />
        </Container>

        <Activity />

        <Container fluid
          className={`px-0 ${style.container_section_rounded_top} ${style.section_question}`}
          style={{
            boxShadow: '0px -25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <SectionClub />
          <SectionQuestion />

        </Container>

      </Container>
    </>
  );
}
