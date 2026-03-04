

import { updateCategoryAPI } from "@/service/admim/updateAPI";
import { App, Button, Col, Divider, Form, Input, InputNumber, message, Modal, Row } from "antd";
import type { FormProps } from "antd/lib";

import { useEffect, useState } from "react";


    interface IProps {
    openModalUpdate: boolean;
    setOpenModelUpdate: (v: boolean) => void;
    refreshTable: ()=> void;
    setDataUpdate: (v: ICategory| null)=> void;
    dataUpdate: ICategory| null
}
type FieldType ={
      _id: string;
    name: string;
  
}

const UpdateCategory =(props :IProps) => {

    const {openModalUpdate ,  setOpenModelUpdate,refreshTable,setDataUpdate,dataUpdate}= props;
      const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const {notification} = App.useApp();
    const [form]= Form.useForm();
    useEffect(()=>{
        if(dataUpdate){
            form.setFieldsValue ({
                _id:dataUpdate._id,
                name: dataUpdate.name,
           
            })
            
        }
    },[dataUpdate]
)
    const onFinish: FormProps<FieldType>['onFinish']= async (values) =>
    {
        const {_id,name}=values;
        setIsSubmit(true)
        const res= await updateCategoryAPI(_id,name);
        if(res &&res.data)
        {
          notification.success({
   
           message:"Câp nhật thành công"
  })
        form.resetFields();
        setOpenModelUpdate(false)
        setDataUpdate(null);
        refreshTable()
            }
    else{
         {
          notification.error({
   
           message:"Cập nhật thất bại"
  })
    }
        }
        setIsSubmit(false)
    }
   
      
    

 return(
 <Modal
   title={
    <div style={{ textAlign: "center", width: "100%" }}>
      Cập nhật loại sản phẩm
    </div>
  }
  open={openModalUpdate}
  onOk={() => form.submit()}
  onCancel={() => {
    setOpenModelUpdate(false)
  setDataUpdate(null);
    form.resetFields()
  }}
  okText="Cập nhật"
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
          label="id"
          name="_id"
   
        >
          <Input disabled />
        </Form.Item>
      </Col>
      
      <Col span={12}>
        <Form.Item
          label="Loại"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sảm phẩm" }]}
        >
          <Input />
        </Form.Item>
      </Col>

    </Row>
  </Form>
</Modal>
 )
}
export default UpdateCategory;