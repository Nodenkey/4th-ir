import React from 'react';
import {
    CarouselWrapper, ClientName, ClientPosition,
    ClientsWrapper,
    CompanyImage,
    InfoSection,
    TestimonialText,
    TestimonialWrapper
} from "./clients.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import OwlCarousel from 'react-owl-carousel';
import {testimonials} from "../../utils/testimonials";


const Clients = () => {

    const options = {
        loop: true,
        margin: 100,
        items: 1,
        autoplay: true,
        autoplayTimeout: 15000,
        dots: false,
    };

    return (
        <ClientsWrapper>
            <PageHeader>A few of our clients</PageHeader>
            <CarouselWrapper>
                <OwlCarousel {...options} className="owl-theme" id="carousel-wrapper">
                    {
                        testimonials.map((testimonial) =>
                            <TestimonialWrapper className='item' key={testimonial.key}>
                                <TestimonialText>{testimonial.testimonial}</TestimonialText>
                                <InfoSection>
                                    {
                                        testimonial.image && <CompanyImage src={require(`../../assets/images/${testimonial.image}`)}
                                                                           alt={testimonial.image}/>
                                    }
                                                  <Container>
                                                      <ClientName>{testimonial.name}</ClientName>
                                                      <ClientPosition>{testimonial.company}</ClientPosition>
                                                  </Container>
                                </InfoSection>
                            </TestimonialWrapper>
                        )
                    }
                </OwlCarousel>
            </CarouselWrapper>
        </ClientsWrapper>
    );
};

export default Clients;
