import React from "react";

const Table = ({ descriptions, items }) => {
  return (
    <table>
      <tr>
        {descriptions.map((description) => (
          <th>{description}</th>
        ))}
      </tr>
      {items.map(({ id, name }) => (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
