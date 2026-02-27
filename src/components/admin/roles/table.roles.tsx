import { fetchRolesAPI, fetchUserAPI, updateUserStatusAPI } from "@/service/admin";
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

const TableRoles = () => {
  const actionRef = useRef<ActionType>(null);
   const [meta, setMeta] = useState({
      current: 1,
      pageSize: 5,
      pages: 0,
      total: 0,
    });

  const columns: ProColumns<IRoles>[] = [
    {
      dataIndex: "index",
      valueType: "indexBorder",
      width: 48,
    },
    {
      title: "id",
      dataIndex: "_id",
      render(_, entity) {
        return (
          <a
            href="#"
            onClick={() => {
              console.log("Xem chi tiết:", entity);
            }}
          >
            {entity._id}
          </a>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    // {
    //   title: "Permissions",
    //   dataIndex: "permissions",
    // },
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
    <ProTable<IRoles>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params,sort, filter) => {
        const res = await fetchRolesAPI();
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
            <ProFormDatePicker
              name="startdate"
              label="Date"
            />
          </LightFilter>
        ),
      }}
      toolBarRender={() => [
        <Button
          key="add"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() =>
            message.info("Open modal Add New")
          }
        >
          Add New
        </Button>,
      ]}
      search={false}
    />
  );
};

export default TableRoles;