import { deleteCategoryAPI, deleteProductAPI } from "@/service/admim/deleteAPI";
import { updateProductAPI } from "@/service/admim/updateAPI";
import { App, Button, Col, Divider, Form, Input, InputNumber, message, Modal, Row } from "antd";
import type { FormProps } from "antd/lib";

import { useEffect, useState } from "react";


    interface IProps {
    openModalDelete: boolean;
    setOpenModelDelete: (v: boolean) => void;
    refreshTable: ()=> void;
    setDataDelete: (v: ICategory| null)=> void;
    dataDelete: ICategory| null
}
type FieldType ={
      _id: string;
    name: string;
    price: number;
    quantity:number;
    image: File;
    brand: string
    categoryId: string;
    createdAt: string;
}

const DeleteCategory =(props :IProps) => {

    const {openModalDelete ,  setOpenModelDelete,refreshTable,setDataDelete,dataDelete}= props;
      const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const {notification} = App.useApp();
    const [form]= Form.useForm();
    useEffect(()=>{
        if(dataDelete){
            form.setFieldsValue ({
                _id:dataDelete._id,
                name: dataDelete.name,
            
            })
            
        }
    },[dataDelete]
)
    const onFinish: FormProps<FieldType>['onFinish']= async (values) =>
    {
        const {_id}=values;
        setIsSubmit(true)
        const res= await deleteCategoryAPI(_id);
        if(res &&res.data)
        {
          notification.success({
   
           message:"Xóa thành công"
  })
        form.resetFields();
        setOpenModelDelete(false)
        setDataDelete(null);
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
      Bạn có muốn xóa loại sản phẩm này không
    </div>
  }
  centered
  open={openModalDelete}
  onOk={() => form.submit()}
  onCancel={() => {
    setOpenModelDelete(false)
    setDataDelete(null);
    form.resetFields()
  }}
  okText="Xóa"
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
          label="Tên Sản Phẩm"
          name="name"
         
        >
          <Input disabled />
        </Form.Item>
      </Col>
    </Row>
  </Form>
</Modal>
 )
}
export default DeleteCategory;