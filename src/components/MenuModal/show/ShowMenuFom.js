const ShowMenuForm = function (prop) {
  return (
    <form className={prop.header__show_form}>
      <div>
        <input name="show-todo" type="radio" id="all-todo" value="all-todo" />
        <label htmlFor="all-todo">All</label>
      </div>

      <div>
        <input
          name="show-todo"
          type="radio"
          id="active-todo"
          value="active-todo"
        />
        <label htmlFor="active-todo">Active</label>
      </div>

      <div>
        <input
          name="show-todo"
          type="radio"
          id="completed-todo"
          value="completed-todo"
        />
        <label htmlFor="completed-todo">Completed</label>
      </div>
    </form>
  );
};

export default ShowMenuForm;
