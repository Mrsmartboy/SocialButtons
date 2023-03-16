const Button = (props) => {
  const { content, classNames } = props;

  return (
    <button type="button" className={classNames}>
      {content}
    </button>
  );
};

const element = (
  <div className="main-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button content="Like" classNames="like-button" />
      <Button content="Comment" classNames="comment-button" />
      <Button content="Share" classNames="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
