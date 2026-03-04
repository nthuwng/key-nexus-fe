
import { fetchCategoryAPI } from "@/service/admim/fetchAPI";
import { FORMATE_DATE_VN } from "@/service/helper";
import { Avatar, Badge, Button, Descriptions, Drawer, Radio, Space } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";


interface IProps {
    openViewDetail: boolean;
    setOpenViewDetail: (v: boolean) => void;
    dataViewDetail: IProductTable | null;
    setDataViewDetail: (v: IProductTable | null) => void
}
const ProductDetail =(props : IProps)=> {
    const {openViewDetail , setOpenViewDetail, dataViewDetail, setDataViewDetail}= props;
    const onClose = () => {
        setOpenViewDetail(false);
        setDataViewDetail(null);
    }
     const Image= `${import.meta.env.BASE_URL}/images/avatar/${dataViewDetail?.image}`
     const [categoriesdetail, setCategoriesdetail] = useState<any[]>([]);

    return(
    <>
      <Drawer
        title="Resizable Drawer"
        width={"50vw"}
        onClose={onClose}
        open={openViewDetail}
      >
      <Descriptions title="thông tin "
      bordered
      column={2}>
  <Descriptions.Item label="ID">{dataViewDetail?._id}</Descriptions.Item>
  <Descriptions.Item label="Tên">{dataViewDetail?.name}</Descriptions.Item>
  <Descriptions.Item label="Giá">{dataViewDetail?.price}</Descriptions.Item>
  <Descriptions.Item label="Số lượng">{dataViewDetail?.quantity}</Descriptions.Item>
  <Descriptions.Item label="Thương hiệu">{dataViewDetail?.brand}</Descriptions.Item>
 <Descriptions.Item label="Loại" >
    <Badge status="processing"  text={dataViewDetail?.categoryId?.name}/>
  </Descriptions.Item>
 
  <Descriptions.Item label="Created At">
    {dayjs(dataViewDetail?.createdAt).format(FORMATE_DATE_VN )}
  </Descriptions.Item>
    <Descriptions.Item label="Hình" >
   <Avatar size={40} src="Image"></Avatar>
  </Descriptions.Item>

  
</Descriptions>
      </Drawer>
    </>
    )
}
export default ProductDetail