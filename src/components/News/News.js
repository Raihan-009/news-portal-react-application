import React from "react";
import { Card } from "react-bootstrap";
import "./News.scss";

const News = (props) => {
  console.log(props.article);
  const { title, description, urlToImage, url } = props.article;

  let descript = description;
  console.log(descript);
  if (descript.length > 150) {
    descript = description.substring(0, 150);
  }
  console.log(descript);

  return (
    <div>
      <Card className="card-portion">
        <Card.Img className="card-img" variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="">
            {descript}
            <a href={url}>
              <span className="blue-text"> see more</span>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
