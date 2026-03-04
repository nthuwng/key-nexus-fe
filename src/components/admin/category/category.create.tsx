import { createCategoryAPI} from "@/service/admim/createAPI";


import { App, Button, Col, Divider, Form, Input, InputNumber, message, Modal, Row, Select, Upload } from "antd";
import type { FormProps } from "antd/lib";

import {  useState } from "react";


    interface IProps {
    openModalCreate: boolean;
    setOpenModelCreate: (v: boolean) => void;
    refreshTable: ()=> void;
    
}
type FieldType ={
    _id: string;
    name: string;
    createdAt: string;
}

const CreateCategory =(props :IProps) => {

    const {openModalCreate ,  setOpenModelCreate,refreshTable}= props;
      const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const {notification} = App.useApp();
    const [form]= Form.useForm();


    const onFinish: FormProps<FieldType>['onFinish']= async (values) =>
    {
        const {name}=values;
        setIsSubmit(true)
        const res= await createCategoryAPI(name);
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

 return(
  <Modal
  title={
    <div style={{ textAlign: "center", width: "100%" }}>
      Thêm mới loại sản phẩm mới
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
    <Row justify="center">
      <Col span={16}>
        <Form.Item
          label="Loại sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sảm phẩm" }]}
        >
          <Input placeholder="Nhập loại sản phẩm..."  />
        </Form.Item>
      </Col>

    </Row>
  </Form>
</Modal>
 )
}
export default CreateCategory;