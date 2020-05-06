import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import axios from "axios";

const EnhancedSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

interface Props {
  user: any;
}

const HomeFeed = (props: Props) => {
  const [data, setData] = useState([]);
  const titles = [
    { link: "", title: "test1" },
    { link: "", title: "test2" },
    { link: "", title: "test3" },
    { link: "", title: "test4" },
    { link: "", title: "test5" },
    { link: "", title: "test6" },
  ];

  function slideRenderer(params: any) {
    const { index, key } = params;

    return (
      <div style={{ color: "black" }} key={key}>
        {arrayItemToElement(data[index])}
      </div>
    );
  }

  const arrayItemToElement = (item: any) => {
    return (
      <a
        href={`https://dev.to${item?.link}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.5rem" }}
      >
        {item["title"]}
      </a>
    );
  };

  const handleApiClick = async () => {
    const data = { url: "dev.to" };
    const result = await axios.post(
      `http://localhost:3000/api/v1/accounts`,
      data
    );
    console.log("results:", result);
    setData(result.data["test"]);
  };

  return (
    <div className="container" style={{ height: "93%" }}>
      <div className="columns" style={{ marginTop: "0", height: "100%" }}>
        <div className="column is-half is-offset-one-quarter">
          <h1 className="is-size-1">Feed</h1>
          <button onClick={handleApiClick}>Test account API</button>
          {data.length > 0 ? (
            <EnhancedSwipeableViews
              style={{ height: "50%", backgroundColor: "yellow" }}
              enableMouseEvents
              slideCount={data.length}
              slideRenderer={slideRenderer}
            />
          ) : (
            <div>No Data to be displayed</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
