import React from "react";
import img5 from '../../images/Group 2444.png';
import img2 from '../../images/Group 7330.png';
import img1 from '../../images/Group 7436.png';
import img3 from '../../images/Group 7482.png';
import img4 from '../../images/googleadsensesm.png';
import logo from '../../images/fintrack.png';
import '../../styles/global.css';

function HomePage() {
    return (
        // <>
        <div className="vision">
            <div className="vision_head">
                <div className="vision_header"><img src={logo} alt=".." style={{ borderRadius:"30px" }} /></div>
                <div className="vision_img"><img src={img5} alt=".." style={{ maxWidth:"110%" }} /></div>
                <h3>One stop destination for all your finance needs</h3>
            </div>
            <div className="vision_cards_group">
                <div className="vision_cards">
                    <div className="vision_cards_img">
                        <img src={img1} alt="card-1" />
                    </div>
                    <div className="vision_cards_text">
                        <p>Real time portfolio tracking</p>
                    </div>
                </div>
                <div className="vision_cards">
                    <div className="vision_cards_img">
                        <img src={img2} alt="card-2" />
                    </div>
                    <div className="vision_cards_text">
                        <p>Keep a track of expenses your and set financial goals</p>
                    </div>
                </div>
                <div className="vision_cards">
                    <div className="vision_cards_img">
                        <img src={img3} alt="card-3" />
                    </div>
                    <div className="vision_cards_text">
                        <p>
                            Credit Score Calculator
                        </p>
                    </div>
                </div>
                <div className="vision_cards">
                    <div className="vision_cards_img">
                        <img src={img4} alt="card-4" />
                    </div>
                    <div className="vision_cards_text">
                        <p>
                            Information about Government Schemes and other financial benefits
                        </p>
                    </div>
                </div>
            </div>
        </div>

        // </>
    );
}
export default HomePage;