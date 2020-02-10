import React, { Component } from "react";
import Stripes from "../../Resources/images/stripes.png";
import { Tag } from "../ui/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "./PortfolioCards";

class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div>
              <Tag
                bck="#0e1731"
                size="100px"
                color="#ffffff"
                add={{
                  display: "inline-block",
                  marginBottom: "20px",
                  marginTop: "100px"
                }}
              >
                My Portfolio
              </Tag>
            </div>
            <div className="portfolio_showcase_wrapper">
              <div className="portfolio_showcase_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
