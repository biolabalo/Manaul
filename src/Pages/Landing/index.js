import { useState } from "react";
import "../../App.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import logo from "../../assets/bald.png";
import smile from "../../assets/smile.png";
import Footer from "../../Components/footer"
import Quiz from "../Quiz";
function Home() {

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="App-header">
        <div className="header_word_container ">
          <Logo />

          <div className="main_word">
            Be good <br />
            to yourself
          </div>
          <p className="lh_30">
            We’re working around the clock to bring you a holistic
            <br /> approach to your wellness. From top to bottom, inside and
            <br /> out.
          </p>
          <button onClick={()=> setIsOpen(true)}>Take the quiz</button>
        </div>
      </div>

      <div className="middle_section ">
        <h1 className="text-center">What we can help with</h1>
        <div className="container_middle">
          <section className="img-container">
            <img src={logo} alt="baldhead" />
          </section>
          <section className="content">
            <div className="watermark">01</div>
            <p className="title align-left">
              <small>Hair Loss</small>
            </p>
            <h2 className="caption">
              Hair loss needn’t be
              <br /> irreversible. We can help!{" "}
            </h2>
            <p className="desc">
              We’re working around the clock to bring you a<br /> holistic
              approach to your wellness. From top to bottom, inside and out.
            </p>
          </section>
        </div>
      </div>

      <div className="middle_section ">
        <div className="container_middle">
          <section className="content">
            <div className="watermark2">02</div>
            <div className="m-5">
              <p className="title align-left">
                <small>Hair Loss</small>
              </p>
              <h2 className="caption">
                Hair loss needn’t be
                <br /> irreversible. We can help!{" "}
              </h2>
              <p className="desc">
                We’re working around the clock to bring you a<br /> holistic
                approach to your wellness. From top to bottom, inside and out.
              </p>
            </div>
          </section>
          <section  className="img-container">
            <img src={smile} alt="smile" />
          </section>
        </div>
      </div>
      <Footer/>
      <Quiz modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/> 
    </>
  );
}

export default Home;
