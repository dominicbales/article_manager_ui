import React from "react";
import HomeFeed from "./HomeFeed";
import HomeWelcome from "./HomeWelcome";

interface Props {
  user: any;
}

const Home = (props: Props) => {
  return <>{props.user ? <HomeFeed user={props.user} /> : <HomeWelcome />}</>;
};

export default Home;
