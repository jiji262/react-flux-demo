import React, { Component } from "react";

export default class List extends Component {
  static defaultProps = {
    items: [],
    remove: () => {}
  };

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    remove: React.PropTypes.func.isRequired
  };

  render = () => {
    var styles = {
      uList: {
        paddingLeft: 0,
        listStyleType: "none"
      },
      listGroup: {
        margin: "5px 0",
        borderRadius: 5
      },
      removeItem: {
        fontSize: 20,
        float: "left",
        position: "absolute",
        top: 12,
        left: 6,
        cursor: "pointer",
        color: "rgb(222, 79, 79)"
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };
    var listItems = this.props.items.map(
      function(item, index) {
        return (
          <li key={index} className="list-group-item" style={styles.listGroup}>
            <span
              className="glyphicon glyphicon-remove"
              style={styles.removeItem}
              onClick={this.props.remove.bind(null, index)}
            />
            <span style={styles.todoItem}>
              {item}
            </span>
          </li>
        );
      }.bind(this)
    );
    return (
      <ul style={styles.uList}>
        {listItems}
      </ul>
    );
  };
}
