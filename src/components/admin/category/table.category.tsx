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
import CategoryDetail from "./category.detail";
import { fetchCategoryAPI } from "@/service/admim/fetchAPI";
import CreateCategory from "./category.create";
import DeleteCategory from "./category.delete";
import UpdateCategory from "./category.update";

const TableCategory = () => {
  //Category detail
  const [openViewDetail, setOpenViewDetail] = useState<boolean>(false);
  const [dataViewDetail, setDataViewDetail] = useState<ICategory | null>(null);

  //Category Create
  const [openModalCreate, setOpenModelCreate]= useState<boolean>(false)
  const actionRef = useRef<ActionType>(null);

  //Product Update
    const [openModalUpdate, setOpenModelUpdate]= useState<boolean>(false)
     const [dataUpdate,setDataUpdate] =useState<ICategory| null>(null);

  //Product Delete
  
    const [openModalDelete, setOpenModelDelete]= useState<boolean>(false)
    const [dataDelete,setDataDelete] =useState<ICategory| null>(null);
    
  const [meta, setMeta] = useState({

    current: 1,
    pageSize: 5,
    pages: 0,
    total: 0,
  });

  const columns: ProColumns<ICategory>[] = [
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
   {
      title: "Created At",
      dataIndex: "createdAt",
      valueType: "dateTime",
    },
    {
      title: "Action",
      hideInSearch: true,
      width: 120,
      render: (_,entity) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <EditTwoTone
             onClick={() => 
        {
            setDataUpdate(entity)
            setOpenModelUpdate(true)
                        }}
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
      <ProTable<ICategory>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          let query = "";
          if (params) {
            query += `current=${params.current}&pageSize=${params.pageSize}`;
          }
          const res = await fetchCategoryAPI(query);
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
      <CategoryDetail
        openViewDetail={openViewDetail}
        setOpenViewDetail={setOpenViewDetail}
        dataViewDetail={dataViewDetail}
        setDataViewDetail={setDataViewDetail}
      />

      <CreateCategory
      openModalCreate={openModalCreate}
      setOpenModelCreate={setOpenModelCreate}
      refreshTable={refreshTable}
      />
        <UpdateCategory
            openModalUpdate={openModalUpdate}
            setOpenModelUpdate={setOpenModelUpdate}
            refreshTable={refreshTable}
            dataUpdate={dataUpdate}
           setDataUpdate={setDataUpdate}
            />
      
       <DeleteCategory
            openModalDelete={openModalDelete}
            setOpenModelDelete={setOpenModelDelete}
            refreshTable={refreshTable}
            dataDelete={dataDelete}
           setDataDelete={setDataDelete}
            />
    </>
  );
};

export default TableCategory;
