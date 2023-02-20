import img from "../../images/Group 2439.png";
import Testimonials from "./Testimonials";

function Last() {
  return (
    <div>
      <footer><Testimonials/></footer>
    <div className="last">
      <div className="last_container">
        <div className="last_head">
          <div className="part-1"><h2>Acquire</h2></div>
          <div className="last_head_img">
            <div className="part-1" style={{ marginBottom:'-10%' }}><h2>quality users</h2></div>
            <div className="img"><img src={img} alt="bg" layout="responsive"/></div>
          </div>
        </div>
        <div className="last_body" style={{ marginTop:"-1%" }}>
          Join us today and invest your money at the right place according to your needs.
        </div>
      </div>
    </div>
    </div>
  );
}
export default Last;