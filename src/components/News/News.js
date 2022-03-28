import React from "react";
import { Card } from "react-bootstrap";
import "./News.scss";

const News = (props) => {
  // console.log(props.article);
  const { title, description, urlToImage, url } = props.article;

  return (
    <div>
      <Card className="card-portion">
        <Card.Img className="card-img" variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="">
            {description}
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
