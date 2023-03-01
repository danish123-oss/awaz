import { Button, Table } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const columns = [
  {
    title: "Artist ID",
    dataIndex: "art_id",
  },

  {
    title: "Artist Stage Name",
    dataIndex: "art_stage_name",
  },
  {
    title: "Artist Full Name",
    dataIndex: "art_full_name",
  },
  {
    title: "City",
    dataIndex: "cty_name",
  },
  {
    title: "Province",
    dataIndex: "prv_name",
  },
];
const ArtistDetails = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.devhelper.co.uk/Api/Artists/SelectForDropDown",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJBaHRlc2hhbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFodDc4NkBob3RtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkFodGVzaGFtIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IkhhaWRlciIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjMiLCJleHAiOjE2Nzc2Njg3MDIsImlzcyI6Imh0dHBzOi8vYXBpLmRldmhlbHBlci5jby51ayIsImF1ZCI6Imh0dHBzOi8vYXBpLmRldmhlbHBlci5jby51ayJ9.o4TaP2NFvE-jaQJokKKW562kkI4E2UwuisYQyIjH4Os",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setdata(response.data);
        console.log(response.data.art_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
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
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
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
        {/* <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span> */}
      </div>
      <Table
        //    rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default ArtistDetails;
