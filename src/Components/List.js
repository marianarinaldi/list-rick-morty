import React from "react";
import { Table } from "antd";

function List(props) {
  const data = [];
  for (const {
    id: i,
    name: n,
    status: s,
    location: { name: nl },
  } of props.items) {
    data.push({
      id: i,
      name: n,
      status: s,
      location: nl,
    });
  }

  return (
    <Table
      pagination={false}
      style={{ overflowX: "hidden" }}
      columns={[
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "location",
        },
      ]}
      dataSource={data}
    />
  );
}

export default List;
