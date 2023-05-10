import React, { Component } from 'react';
import YoutubeLogo  from "../../asset/img/yt.svg";
import  InstaLogo  from "../../asset/img/instagram.svg";
import  TwitLogo  from "../../asset/img/twitter.svg";
import  WaLogo  from "../../asset/img/wa.svg";

export default class Footer extends Component {
    render() {
        const socilaMedias = [
            {
                id: 1,
                image: YoutubeLogo,
                alt: 'yt',
                link: ''
            },
            {
                id: 2,
                image: InstaLogo,
                alt: 'ig',
                link: ''
            },
            {
                id: 3,
                image: TwitLogo,
                alt: 'tw',
                link: ''
            },
            {
                id: 4,
                image: WaLogo,
                alt: 'wa',
                link: ''
            }
        ]

        return (
            <footer id="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>NGOBIT</h3>
                                <p>
                                NGOBIT adalah sebuah organisasi non-profit yang bertujuan untuk memberikan edukasi dan pelatihan tentang teknologi informasi kepada masyarakat Indonesia.
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Lokasi</h4>
                                <p>
                                    Jalan-jalan kemana hayoo
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Layanan Kami</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Program Pelatihan</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Akses ke Sumber Daya</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Komunitas Investor</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links ">
                                <h4>Social Media</h4>
                                <p>Kunjungi kami di media sosial :</p>
                                <ul class="list-unstyled d-flex justify-content-between">
                                    {
                                        socilaMedias.map((md) => (
                                            <li class="flex-fill">
                                                <img src={md.image} alt={md.alt} srcset={md.link} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="justify-content-center text-light">
                    <div class="d-flex align-items-center">
                        <div class="mx-auto my-4">
                            &copy; Copyright <strong><span>NGOBIT</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}