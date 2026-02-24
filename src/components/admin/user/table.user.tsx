import { fetchUserAPI, updateUserStatusAPI } from "@/service/admin";
import {
  DeleteTwoTone,
  EditTwoTone,
  LockOutlined,
  PlusOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import {
  LightFilter,
  ProFormDatePicker,
  ProTable,
} from "@ant-design/pro-components";
import { Button, message, Space, Tag, Tooltip } from "antd";
import { useRef, useState } from "react";

const TableUser = () => {
  const actionRef = useRef<ActionType>(null);

  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 5,
    pages: 0,
    total: 0,
  });

  const handleToggleStatus = async (user: IUserTable) => {
    if (user.roleId?.name === "SUPER_ADMIN") {
      message.warning("Không thể thay đổi trạng thái SUPER ADMIN");
      return;
    }

    try {
      const newStatus = user.status === "ACTIVE" ? "LOCKED" : "ACTIVE";

      const res = await updateUserStatusAPI(user._id, newStatus);

      if (res.data?.modifiedCount === 1) {
        message.success("Cập nhật trạng thái thành công");
        actionRef.current?.reload();
      } else {
        message.warning("Không có thay đổi");
      }
    } catch (error) {
      message.error("Cập nhật thất bại");
    }
  };

  const columns: ProColumns<IUserTable>[] = [
    {
      dataIndex: "index",
      valueType: "indexBorder",
      width: 48,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      render(_, entity) {
        return (
          <a
            href="#"
            onClick={() => {
              console.log("Xem chi tiết:", entity);
            }}
          >
            {entity.fullName}
          </a>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => {
        const isActive = record.status === "ACTIVE";
        const isSuperAdmin = record.roleId?.name === "SUPER_ADMIN";

        return (
          <Space>
            <Tag color={isActive ? "green" : "red"}>{record.status}</Tag>

            {isActive ? (
              <Button
                size="small"
                danger
                icon={<LockOutlined />}
                disabled={isSuperAdmin}
                onClick={() => handleToggleStatus(record)}
              />
            ) : (
              <Button
                size="small"
                type="primary"
                icon={<UnlockOutlined />}
                disabled={isSuperAdmin}
                onClick={() => handleToggleStatus(record)}
              />
            )}
          </Space>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "roleId",
      render: (_, record) => {
        const roleName = record.roleId?.name || "No Role";

        let color = "default";

        if (roleName === "SUPER_ADMIN") color = "purple";
        else if (roleName === "USER") color = "green";

        return <Tag color={color}>{roleName}</Tag>;
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      valueType: "dateTime",
    },
    {
      title: "Action",
      hideInSearch: true,
      width: 120,
      render: () => (
        <Space size="middle">
          <Tooltip title="Edit">
            <EditTwoTone
              twoToneColor="#faad14"
              style={{
                cursor: "pointer",
                fontSize: 18,
              }}
            />
          </Tooltip>

          <Tooltip title="Delete">
            <DeleteTwoTone
              twoToneColor="#ff4d4f"
              style={{
                cursor: "pointer",
                fontSize: 18,
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <ProTable<IUserTable>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params,sort, filter) => {
        const res = await fetchUserAPI();
        if (res.data) {
          setMeta(res.data.meta);
        }

        return {
          data: res.data?.result,
          success: true,
          total: res.data?.meta.total,
        };
      }}
      rowKey="_id"
      pagination={{
        current: meta.current,
        pageSize: meta.pageSize,
        showSizeChanger: true,
        total: meta.total,
        showTotal: (total, range) => {
          return (
            <div>
              {" "}
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
      headerTitle="Customer Management"
      toolbar={{
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="Date" />
          </LightFilter>
        ),
      }}
      toolBarRender={() => [
        <Button
          key="add"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => message.info("Open modal Add New")}
        >
          Add New
        </Button>,
      ]}
      search={false}
    />
  );
};

export default TableUser;
