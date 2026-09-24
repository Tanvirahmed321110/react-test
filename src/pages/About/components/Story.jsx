import React from 'react'

function Story() {
    return (
        <div>
            {/* Story */}
            <section class="story section-gap">
                <div class="container">
                    <div>
                        <h2>How we got here</h2>
                        <p>It began with a simple problem: good sneakers were either fake or overpriced. We decided to buy straight from brands, keep our margins small, and treat every customer the way we'd want to be treated.</p>
                        <p>That's still how we work. If a pair isn't good enough for us to wear, we don't sell it.</p>
                    </div>
                    <ol class="timeline">
                        <li><p class="year">2019</p><p class="text">Started with one small shop and 20 pairs of sneakers.</p></li>
                        <li><p class="year">2021</p><p class="text">Opened our online store and began delivering across the country.</p></li>
                        <li><p class="year">2023</p><p class="text">Partnered directly with brands so every pair is authentic.</p></li>
                        <li><p class="year">2025</p><p class="text">Passed 50,000 orders with a 4.8 average rating.</p></li>
                    </ol>
                </div>
            </section>

            <section class="stats section-gap">
                <div class="container">
                    <div><strong>50K+</strong><span>Orders delivered</span></div>
                    <div><strong>120+</strong><span>Shoe styles</span></div>
                    <div><strong>30+</strong><span>Trusted brands</span></div>
                    <div><strong>4.8</strong><span>Average rating</span></div>
                </div>
            </section>
        </div>
    )
}

export default Story
