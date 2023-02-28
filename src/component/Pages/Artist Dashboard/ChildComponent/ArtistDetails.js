import { Button, Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Artist Stage Name",
    dataIndex: "name",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Province",
    dataIndex: "address",
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Atif Aslam `,
    city: `Lahore`,
    address: `Punjab`,
  });
}
const ArtistDetails = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const start = () => {
  //     setLoading(true);
  //     // ajax request after empty completing
  //     setTimeout(() => {
  //       setSelectedRowKeys([]);
  //       setLoading(false);
  //     }, 1000);
  //   };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div style={{ padding: 20, marginTop: -30 }}>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        {/* <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button> */}
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default ArtistDetails;
