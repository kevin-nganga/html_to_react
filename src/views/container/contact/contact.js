import React from 'react';
import Form from "./form/form";

export default function Contact() {
    return (
         /*Contact Section*/
        <section className="page-section" id="contact">
            <div className="container">
                 {/*Contact Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                 {/*Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                 {/*Contact Section Form*/}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                         <Form />
                    </div>
                </div>
            </div>
        </section>
    );
}
