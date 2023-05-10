import React, { Component } from "react";
// import Gambar2 from '../../asset/img/PNG/DrawKit Vector Illustration Project Manager (1).png'


export default class Article extends Component {
    render() {
        return (
            <section id="why-us" className="why-us section-bg">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h3>Artikel pilihan</h3>
                        </div>

                        <div className="card col-lg-6 order-1 order-lg-2">

                            <div className="cardticle d-flex flex-wrap">
                                <div className="card m-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Belajar Investasi Saham dengan Mudah Bersama NGOBIT</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle 1</h6> */}
                                        <p className="card-text">Artikel ini akan membahas tentang cara belajar investasi saham dengan mudah melalui NGOBIT...</p>
                                        <a href="#" className="card-link">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="card m-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">NGOBIT: Platform Belajar Investasi Saham Terbaik...</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle 1</h6> */}
                                        <p className="card-text">Artikel ini akan membahas tentang platform belajar investasi saham terbaik untuk pemula, yaitu NGOBIT...</p>
                                        <a href="#" className="card-link">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="card m-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Mengenal NGOBIT: Platform Investasi Saham untuk Pemula</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle 1</h6> */}
                                        <p className="card-text">Artikel ini akan membahas tentang pengenalan NGOBIT sebagai platform investasi saham untuk pemula...</p>
                                        <a href="#" className="card-link">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="card m-2" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Pentingnya Belajar Investasi Saham Sejak Dini Bersama NGOBIT</h5>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle 1</h6> */}
                                        <p className="card-text">Artikel ini akan membahas tentang pentingnya belajar investasi saham sejak dini bersama NGOBIT...</p>
                                        <a href="#" className="card-link">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}