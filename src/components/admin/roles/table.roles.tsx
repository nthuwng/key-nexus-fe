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
import UserDetail from "../user/user.detail";
import RoleDetail from "./role.detail";

import CreateRole from "./roles.create";
import { fetchRolesAPI } from "@/services/admin/api.admin";

const TableRoles = () => {
  //Role Detail
  const [openViewDetail, setOpenViewDetail] = useState<boolean>(false);

  //Roles Create
  const [openModalCreate, setOpenModelCreate] = useState<boolean>(false);
  const [dataViewDetail, setDataViewDetail] = useState<IRoles | null>(null);
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
              setOpenViewDetail(true);
              setDataViewDetail(entity);
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
  const refreshTable = () => {
    actionRef.current?.reload();
  };
  return (
    <>
      <ProTable<IRoles>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          let query = "";
          if (params) {
            query += `current=${params.current}&pageSize=${params.pageSize}`;
          }
          const res = await fetchRolesAPI(query);
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
            onClick={() => setOpenModelCreate(true)}
          >
            Add New
          </Button>,
        ]}
        search={false}
      />
      <RoleDetail
        openViewDetail={openViewDetail}
        setOpenViewDetail={setOpenViewDetail}
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
      />
      <CreateRole
        openModalCreate={openModalCreate}
        setOpenModelCreate={setOpenModelCreate}
        refreshTable={refreshTable}
      />
    </>
  );
};

export default TableRoles;
