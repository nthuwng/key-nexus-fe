import { createProductAPI, createUserAPI } from "@/service/admim/createAPI";
import { fetchCategoryAPI, fetchCategoryIdAPI, fetchRolesAPI } from "@/service/admim/fetchAPI";

import { App, Button, Col, Divider, Form, Input, InputNumber, message, Modal, Row, Select, Upload } from "antd";
import type { FormProps } from "antd/lib";

import { useEffect, useState } from "react";


    interface IProps {
    openModalCreate: boolean;
    setOpenModelCreate: (v: boolean) => void;
    refreshTable: ()=> void;
    
}
type FieldType ={
       _id: string;
    fullName: string;
    email: string;
    password: string
    gender: string;
    phone: string;
    status: string;
    roleId: string
  }

const CreateUser =(props :IProps) => {

    const {openModalCreate ,  setOpenModelCreate,refreshTable}= props;
      const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const {notification} = App.useApp();
    const [form]= Form.useForm();


    const onFinish: FormProps<FieldType>['onFinish']= async (values) =>
    {
        const {fullName,email,password,gender,phone,roleId}=values;
        setIsSubmit(true)
        const res= await createUserAPI(fullName,email,password,gender,phone,roleId);
        if(res &&res.data)
        {
          notification.success({
   
           message:" thành công"
  })
        form.resetFields();
        setOpenModelCreate(false)
      
        refreshTable()
            }
    else{
         {
          notification.error({
   
           message:" thất bại"
  })
    }
        }
        setIsSubmit(false)
    }
   
      
  
const [roles, setRoles] = useState<any[]>([]);

useEffect(() => {
  if (openModalCreate) {
    const fetchRoles = async () => {
      const res = await fetchRolesAPI("");
             console.log("ROLE DATA:", res.data.result);

      if (res?.data?.result) {
        setRoles(res.data.result);
      }
    };

    fetchRoles();
  }
}, [openModalCreate]);

 return(
  <Modal
  title={
    <div style={{ textAlign: "center", width: "100%" }}>
      Thêm tài khoản mới
    </div>
  }
  
  open={openModalCreate}
  onOk={() => form.submit()}
  onCancel={() => {
    setOpenModelCreate(false)

    form.resetFields()
  }}
  okText="Tạo mới"
  cancelText="Huỷ"
  confirmLoading={isSubmit}
  width={800}
>
  <Divider />

  <Form
    form={form}
    layout="vertical"
    onFinish={onFinish}
    autoComplete="off"
  >
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          label="Tên người dùng"
          name="fullName"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng" }]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email" },
             { type: "email", message: "Email không đúng định dạng" }
          ]}
          
        >
          <Input
            />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input.Password
          />
        </Form.Item>
          </Col>
       <Col span={12}>
        <Form.Item
          label="Giới tínnh"
          name="gender"
          rules={[{ required: true, message: "Vui lòng nhập giới tính" }]}
        >
            <Select
            showSearch
            placeholder="Giới tính"
            options={[
              { value: "nam", label: "nam" },
              { value: "nữ", label: "nữ" },
            ]}
          />
          
        </Form.Item>
      </Col>
 <Col span={12}>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input
          />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label="vai trò"
          name="roleId"
          rules={[{ required: true, message: "Vui lòng chọn thể vai trò" }]}
        >
          <Select
            showSearch
            placeholder="vai  trò"
            options={roles.map((item) => ({
    value: item._id,
    label: item.name,
  }))}
          />    
        </Form.Item>
      </Col>

 

    </Row>
  </Form>
</Modal>
 )
}
export default CreateUser;