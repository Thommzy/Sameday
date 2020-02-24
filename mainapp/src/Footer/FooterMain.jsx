import React, { Component } from "react";
import "./FooterMain.css";
import { Grid, Image, Header } from "semantic-ui-react";
import appleicon from "../Images/apple.png";
import googleplayicon from "../Images/google-play-store.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";

class FooterMain extends Component {
  render() {
    return (
      <div className="footerOverall">
        <div className="innerFooter">
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="downloadAppText">Download App</div>
              <div className="appleIcon">
                <Image src={appleicon} />
              </div>
              <div className="googlePlayIcon">
                <Image src={googleplayicon} />
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="loremTextFooter">
                <Header as="h4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur iure, eos incidunt unde rem perspiciatis
                  exercitationem ex dignissimos quam quos dolores, assumenda
                  placeat quibusdam doloribus delectus error a deleniti
                  voluptatibus.
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="connectSection">
                <Header as="h4">Connect with us</Header>
                <div className="sociaIcons">
                  <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                      <Image src={twitter} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                      <Image src={facebook} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                      <Image src={instagram} />
                    </Grid.Column>
                  </Grid>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default FooterMain;
