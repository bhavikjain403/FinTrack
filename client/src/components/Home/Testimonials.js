import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonials() {
  return (
    <>
    <div className="vision">
            <div className="vision_cards_group">
                <div className="vision_cards" style={{ background:"transparent"}}>
                    <div className="vision_cards_img" style={{ marginTop:"-10%"}}>
                        <img className="rounded-circle shadow-1-strong"
              width="150"
              height="150" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="card-1" />
                    </div>
                    <div className="vision_cards_text">
                        <h4>Maria Smantha</h4><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    </div>
                </div>
                <div className="vision_cards" style={{ background:"transparent"}}>
                    <div className="vision_cards_img" style={{ marginTop:"-10%"}}>
                        <img className="rounded-circle shadow-1-strong"
              width="150"
              height="150" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="card-1" />
                    </div>
                    <div className="vision_cards_text">
                        <h4>John Smith</h4><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    </div>
                </div>
                <div className="vision_cards" style={{ background:"transparent"}}>
                    <div className="vision_cards_img" style={{ marginTop:"-10%"}}>
                        <img className="rounded-circle shadow-1-strong"
              width="150"
              height="150" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="card-1" />
                    </div>
                    <div className="vision_cards_text">
                        <h4>Lisa Cudrow</h4><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    </div>
                </div>
                <div className="vision_cards" style={{ background:"transparent"}}>
                    <div className="vision_cards_img" style={{ marginTop:"-10%"}}>
                        <img className="rounded-circle shadow-1-strong"
              width="150"
              height="150" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="card-1" />
                    </div>
                    <div className="vision_cards_text">
                        <h4>Sara Smith</h4><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}