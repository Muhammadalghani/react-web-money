import React, { Component } from 'react';
import Gambar1 from '../../asset/img/PNG/DrawKit Vector Illustration Project Manager (3).png'
import InstaLogo from '../../asset/img/Front View/playstore.png'
import AppLogo from '../../asset/img/Front View/app-store.png'

export default class Hero extends Component {
    render() {

        return (
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h2>Ngopi di Hotel 80K dirasa mahal?</h2>
                            <h1>Belajar saham yuk!</h1>
                            <p>
                                Mau tau cara hemat beli kopi mahal? Belajar saham!
                                Dengan investasi saham, kamu bisa beli kopi 80 ribu tapi tetap untung banyak
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">Mari Berinvestas</a>
                            </div>
                            <div className="sm d-flex align-items-center">
                                <div className="sm-btn">
                                    <a href="#about" className="btn-sm scrollto">
                                    <img src={AppLogo} className="icon1 img-fluid animated" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#about" className="btn-sm scrollto">
                                        <img src={InstaLogo} className="icon1 img-fluid animated" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={Gambar1} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}