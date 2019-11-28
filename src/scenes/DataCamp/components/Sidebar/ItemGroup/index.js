import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIcon = iconName => {
  let icon = [];
  console.log(iconName);
  const array = iconName.trim().split(" ");
  if (array && array.length > 0 && array[0].startsWith("fa")) {
    array.forEach(elem => {
      if (elem.startsWith("fa-")) {
        icon.push(elem.substring(3));
      } else {
        icon.push(elem);
      }
    });
  } else {
    icon = ["fas", "bug"];
  }
  return <FontAwesomeIcon icon={icon} />;
};

const ItemGroup = props => {
  const { group } = props;
  return (
    <div>
      <h5>{group.title}</h5>
      <nav>
        {group.items.map(item => (
          <div key={item.path}>
            <Link to={item.path}>
              <span>{getIcon(item.icon)}</span>
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

ItemGroup.propTypes = {
  group: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.string
      })
    ).isRequired
  })
};

export default ItemGroup;
