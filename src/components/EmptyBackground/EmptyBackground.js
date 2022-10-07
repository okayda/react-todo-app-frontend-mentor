const EmptyBackground = function (prop) {
  return (
    <div className={prop.todo__background}>
      <img
        src={require("../../images/calendar.png")}
        className={prop.todo__background_calendar}
      />
      <h2 className={prop.todo__background_date}>September 22, 2022</h2>
    </div>
  );
};

export default EmptyBackground;
