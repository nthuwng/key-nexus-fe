
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
import "./table.user.css";
import UserDetail from "./user.detail";
import { fetchUserAPI, updateUserStatusAPI } from "@/service/admim/fetchAPI";
import CreateProduct from "../product/product.create";
import CreateUser from "./user.create";
import DeleteUser from "./user.delete";

const TableUser = () => {
  const actionRef = useRef<ActionType>(null);

  //User detail
  const [openViewDetail, setOpenViewDetail] = useState<boolean>(false);
  const [dataViewDetail, setDataViewDetail] = useState<IUserTable | null>(null);

 //User Create
   const [openModalCreate, setOpenModelCreate]= useState<boolean>(false)
     
   //Product Delete

  const [openModalDelete, setOpenModelDelete]= useState<boolean>(false)
  const [dataDelete,setDataDelete] =useState<IUserTable| null>(null);
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
              setOpenViewDetail(true);
              setDataViewDetail(entity);
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
          <Space size={10}>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 13,
                background: isActive
                  ? "linear-gradient(135deg,#dcfce7,#bbf7d0)"
                  : "linear-gradient(135deg,#fee2e2,#fecaca)",
                color: isActive ? "#166534" : "#991b1b",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              }}
            >
              {record.status}
            </div>

            <Button
              size="small"
              type={isActive ? "default" : "primary"}
              danger={isActive}
              icon={isActive ? <LockOutlined /> : <UnlockOutlined />}
              disabled={isSuperAdmin}
              onClick={() => handleToggleStatus(record)}
              style={{
                borderRadius: 8,
                transition: "all 0.2s ease",
              }}
            />
          </Space>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "roleId",
      render: (_, record) => {
        const roleName = record.roleId?.name || "No Role";

        let bg = "#f3f4f6";
        let color = "#374151";

        if (roleName === "SUPER_ADMIN") {
          bg = "linear-gradient(135deg,#ede9fe,#ddd6fe)";
          color = "#5b21b6";
        }

        if (roleName === "USER") {
          bg = "linear-gradient(135deg,#dcfce7,#bbf7d0)";
          color = "#166534";
        }
        

        return (
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 13,
              background: bg,
              color: color,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            {roleName}
          </div>
        );
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
      render: (_, entity) => (
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
                onClick={() => 
        {
            setDataDelete(entity)
            setOpenModelDelete(true)
                        }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
const refreshTable= () => {
    actionRef.current?.reload();
}
  return (
    <>
      <ProTable<IUserTable>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          let query = "";
          if (params) {
            query += `current=${params.current}&pageSize=${params.pageSize}`;
          }
          const res = await fetchUserAPI(query);
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
            onClick={() =>
              setOpenModelCreate(true) 

            }
          >
            Add New
          </Button>,
        ]}
        search={false}
      />
      <UserDetail
        openViewDetail={openViewDetail}
        setOpenViewDetail={setOpenViewDetail}
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
      />
      <CreateUser
      openModalCreate={openModalCreate}
      setOpenModelCreate={setOpenModelCreate}
      refreshTable={refreshTable}
      />
        <DeleteUser
            openModalDelete={openModalDelete}
            setOpenModelDelete={setOpenModelDelete}
            refreshTable={refreshTable}
            dataDelete={dataDelete}
           setDataDelete={setDataDelete}
            />
    </>
  );
};

export default TableUser;
