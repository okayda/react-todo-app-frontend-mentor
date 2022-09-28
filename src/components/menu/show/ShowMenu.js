const ShowMenu = function (prop) {
  return (
    <div className={prop.classShow}>
      <h3 className={prop.showTitle}>Show Specific Todo</h3>

      <ul className={prop.showList}>
        <li>
          <button className={prop.active}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </div>
  );
};

export default ShowMenu;
