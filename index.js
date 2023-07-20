const element = (
  <div className="congrats-card-bg">
    <h1 className="congratulation-heading">Congratulation</h1>
    <div className="congrats-card-profile-bg">
      <img
        className="congrats-card-profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1>Kiran V</h1>
      <p>Vishnu Institute of Computer Education and Technology</p>
      <p>Bhimavaram</p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
