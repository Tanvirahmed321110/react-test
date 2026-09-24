import React from 'react'

function Hero() {
    return (
        <div>
            <section class="hero">
                <div class="container">
                    <div>
                        <h1>We sell the shoes we'd wear ourselves.</h1>
                        <p>We started as sneaker lovers who were tired of fakes and high prices. Today we help thousands of people find a pair that fits their style and their budget.</p>
                        <div class="actions">
                            <a href="/products" class="btn btn-dark">Shop shoes</a>
                            <a href="/contact" class="btn btn-light">Talk to us</a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="hero-badge">
                            <strong>Since 2019</strong>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
