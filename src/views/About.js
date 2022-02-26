import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';



class About extends React.Component {
  render() {
  
    const sectionHeader = {
      title: 'About us'
    }
  
    return (
      <React.Fragment>
        <GenericSection>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h2 className="h2">Who we are</h2>
          <p> Flip<sup>x</sup> was born when a real estate professional and a software engineer decided to apply their knowledge and change the real estate industry.
              We are a team composed of passionate real estate professionals and passionate software engineers.
              Together, we identify ways to reduce entry barriers to real estate home flipping. 
              Our aim is to enable everyone the ability and opportunity to flip a home.
          </p>
        </GenericSection>
          <FeaturesSplit topDivider className="center-content" />
          {/* <Team /> */}
        <Cta topDivider split />
      </React.Fragment>
      
    );
  }
}

export default About;