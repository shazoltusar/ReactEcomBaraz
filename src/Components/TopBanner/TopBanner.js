import React, { Component } from 'react'
import '../Navbar/Navbar.css';
import topBanardata from '../../data/topBanardata';
// import f1 from '../../images/feature1.png'
// import f2 from '../../images/feature2.png'
// import f3 from '../../images/feature3.png'
// import f4 from '../../images/feature4.png'
// import f5 from '../../images/feature5.gif'
import top from '../../images/top.png'

export default class TopBanner extends Component {
    render() {
        return (
            <div className='bg-brand'>
                <div className='container'>
                    <div style={{ textAlign: 'center' }}>
                        <img src={top} alt="Top Img" />
                    </div>
                    <div className="row">
                        {
                            topBanardata.map(banarData =>
                                <div key={banarData.id} style={{ borderRadius: '50px' }} className="col bg-white m-2">
                                    <img src={banarData.image} className="img-fluid text-decoration-none text-dark fw-bold py-1" width='50' alt="Images" />
                                    <a href={banarData.link}> {banarData.name}</a>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
