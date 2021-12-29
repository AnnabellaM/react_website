import React from "react";
import BgImage from "../assets/bgImage.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          He has weighty, startling bright eyes that are like thick, rich ink.
          He has very deep hollows under his eyebrows, and thick eyelashes that
          half covered his eyes. In those eyes, there seems to be a coalesced
          black that will not diffuse. Only when the angle changed, did a barely
          there reserved luster flow over them. He had a habit of looking down,
          which was a common habit. However, the rare times he looked up, a
          chilling cold in his eyes could be seen. The addition of an elegant
          slope of nose, and a contemptuous curl of lips is a treacherous touch
          to his handsome look. The pale regions of his face are far too pale,
          the striking regions are too deep. They always give off the impression
          of cold-heartedness. It is only when he laughs that his brows relax,
          lines appear by the corners of his mouth, and faint color surfaces on
          his pale lips. According to Wen Kexing, this makes him look adorable.
          He wore turquoise robes when he was still a leader in the Tian Chuang.
          He looks relatively well-built. However, once his robes are removed, a
          shriveled body comes into view, like something has drained life
          completely out of it. On his haggard frame are six Nails already being
          put in for apparently a long time ago, having almost become one with
          the flesh.
        </p>
      </div>
    </div>
  );
}

export default About;
