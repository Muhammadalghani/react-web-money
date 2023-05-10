import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Tentang Kami</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <h4>Siapa kami ?</h4>
                            <p className='text-justify'>
                            NGOBIT adalah organisasi nirlaba yang didedikasikan untuk membantu masyarakat memahami pasar saham dan investasi. Visi kami adalah untuk menciptakan masyarakat yang lebih sadar akan investasi dan keuangan, di mana orang-orang dapat memanfaatkan pasar saham untuk membangun kekayaan dan mencapai kebebasan finansial.
                            </p>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <h4>Layanan Kami</h4>
                            <p>
                            Kami menyediakan layanan pelatihan dan sumber daya untuk membantu Anda belajar dan berinvestasi di pasar saham. Bergabunglah dengan NGOBIT dan dapatkan:

Pelatihan: Pelajari bagaimana memulai investasi di pasar saham dan strategi investasi yang cerdas dengan program pelatihan kami yang berbasis pengalaman.
Sumber Daya: Akses ke sumber daya berupa artikel, video, dan buku tentang investasi dan pasar saham untuk meningkatkan pemahaman Anda.
Komunitas: Bergabunglah dengan komunitas investor untuk mendapatkan dukungan dan wawasan pasar yang canggih.
                            </p>
                            <a href="/#">
                                <svg className="svg-right-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg><span>Selengkapnya...</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}