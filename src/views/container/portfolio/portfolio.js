import React from 'react';
import Portfolio_item from "./portfolio_item/portfolio_item";


export default function Portfolio() {
    return (
         /*Portfolio Section*/
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                 {/*Portfolio Section Heading*/}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                 {/*Icon Divider*/}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                 {/*Portfolio Grid Items*/}
                <div class="row">
                   <Portfolio_item />
                </div>
            </div>
        </section>
    );
}
