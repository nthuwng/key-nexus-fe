import { Card, Row, Col, Table, Tag, Progress } from "antd";
import { Column } from "@ant-design/plots";

const TableDashboard = () => {
  // ================== Chart Data (Doanh thu theo ngày) ==================
  const chartData = [
    { day: "Thứ 2", revenue: 1200 },
    { day: "Thứ 3", revenue: 1800 },
    { day: "Thứ 4", revenue: 900 },
    { day: "Thứ 5", revenue: 2200 },
    { day: "Thứ 6", revenue: 1700 },
    { day: "Thứ 7", revenue: 2500 },
    { day: "Chủ nhật", revenue: 2000 },
  ];

  const chartConfig = {
    data: chartData,
    xField: "day",
    yField: "revenue",
    columnStyle: {
      radius: [6, 6, 0, 0],
    },
    label: {
      position: "top",
    },
  };

  // ================== Recent Orders ==================
  const orderColumns = [
    { title: "Mã đơn", dataIndex: "id" },
    { title: "Khách hàng", dataIndex: "customer" },
    { title: "Tổng tiền", dataIndex: "total" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "Hoàn thành" ? "green" : "orange"}>
          {status}
        </Tag>
      ),
    },
  ];

  const orderData = [
    {
      key: 1,
      id: "#1001",
      customer: "Phúc",
      total: "120$",
      status: "Hoàn thành",
    },
    {
      key: 2,
      id: "#1002",
      customer: "An",
      total: "80$",
      status: "Đang xử lý",
    },
    {
      key: 3,
      id: "#1003",
      customer: "Minh",
      total: "200$",
      status: "Hoàn thành",
    },
  ];

  // ================== Best Seller ==================
  const bestSellerColumns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      render: (_: any, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={record.image}
            alt=""
            style={{ width: 32, height: 32, borderRadius: 6 }}
          />
          {record.name}
        </div>
      ),
    },
    {
      title: "Đã bán",
      dataIndex: "sold",
      render: (value: number) => (
        <Progress percent={value} size="small" />
      ),
    },
    {
      title: "Doanh thu",
      dataIndex: "revenue",
    },
  ];

  const bestSellerData = [
    {
      key: 1,
      name: "Chuột gaming",
      sold: 80,
      revenue: "$2,400",
      image: "",
    },
    {
      key: 2,
      name: "Bàn phím cơ RGB",
      sold: 65,
      revenue: "$4,250",
      image: "",
    },
    {
      key: 3,
      name: "Chuột Không dây",
      sold: 50,
      revenue: "$3,000",
      image: "",
    },
  ];

  return (
    <>
      <h2 style={{ marginBottom: 20 }}>Bảng điều khiển</h2>

      {/* ===== KPI Cards ===== */}
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={6}>
          <Card bordered={false} style={{ background: "#1677ff", color: "#fff" }}>
            <h3>Tổng doanh thu</h3>
            <h1>9,541$</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} style={{ background: "#13c2c2", color: "#fff" }}>
            <h3>Đơn hàng mới</h3>
            <h1>320</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} style={{ background: "#eb2f96", color: "#fff" }}>
            <h3>Người dùng mới</h3>
            <h1>120</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false} style={{ background: "#52c41a", color: "#fff" }}>
            <h3>Lượt truy cập</h3>
            <h1>8,240</h1>
          </Card>
        </Col>
      </Row>

      {/* ===== Chart + Right Panel ===== */}
      <Row gutter={16}>
        {/* Chart */}
        <Col span={16}>
          <Card title="Báo cáo doanh thu tuần này">
            <Column {...chartConfig} />
          </Card>
        </Col>

        {/* Right side */}
        <Col span={8}>
          <Card title="Đơn hàng gần đây" style={{ marginBottom: 16 }}>
            <Table
              columns={orderColumns}
              dataSource={orderData}
              pagination={false}
              size="small"
            />
          </Card>

          <Card title="Sản phẩm bán chạy">
            <Table
              columns={bestSellerColumns}
              dataSource={bestSellerData}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TableDashboard;
