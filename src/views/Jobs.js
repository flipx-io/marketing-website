import React from 'react';
import GenericSection from '../components/sections/GenericSection';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Image from '../components/elements/Image';
import { SliderButton } from '@typeform/embed-react'



class Jobs extends React.Component {
    render() {
        const sectionHeader = {
            title: 'Careers available at FlipX',
            paragraph: 'We believe that everyone should be treated with respect and kindness. We strive to make FlipX the best home for top talent. We believe in cultivating a fun, rewarding, and challenging environment. If you enjoy breaking the status quo, and diving into challenges, then you are the right person we are looking for. Join us in our journey to change real estate through better workflows and technology.' 
        }

        return (
            <React.Fragment>
                <GenericSection>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <section className="section center-content" style={{padding: '0'}}>
                        <div className="container" style={{padding: '0'}}>
                            <div class="section-inner" style={{padding: '0'}}>
                            <Image
                                    src={require('./../assets/images/team.svg')}
                                    alt="image"
                                />
                                {/* <!-- Tiles pattern --> */}
                                <div className="tiles-wrap">
                           
                                    {/* <!-- Tiles item --> */}
                                    <div className="tiles-item">
                                        <h3>Software Engineer Frontend</h3>
                                        <Image src={require('./../assets/images/frontend-job.svg')} alt="Image"/>
                                        <p>You will help design, prototype, and implement core features while ensuring the scalability and stability of the FlipX platform. 
                                            Being a young project, FlipX's development area is broad and deep. We're working to develop a user interface that is both desktop and mobile friendly. 
                                            In this role, you will have ownership and creative freedom to set the direction of the UI. We are building a SaaS platform that will include a lot of UI flows typical of what you would find in a SaaS app</p>
                                            <p>Click Apply to learn more!</p>
                                            <SliderButton id="mHcu2pbz" style={{ fontSize: 20 }} className="button button-primary" position="right">
                                                Apply
                                            </SliderButton>
                                       {/* <button data-tf-slider="mHcu2pbz" data-tf-width="550" data-tf-iframe-props="title=Front End Engineer Job Application Form" data-tf-medium="snippet" style={{"all":"unset","fontFamily":"Helvetica,Arial,sans-serif","display":"inline-block","maxWidth":"100%","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","backgroundColor":"#0445AF","color":"#FFFFFF","fontSize":"20px","borderRadius":"25px","padding":"0 33px","fontWeight":"bold","height":"50px","cursor":"pointer","lineHeight":"50px","textAlign":"center","margin":"0","textDecoration":"none"}}>Apply</button> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </GenericSection>
            </React.Fragment>

        );
    }
}

export default Jobs;
