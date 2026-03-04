
import { FORMATE_DATE_VN } from "@/service/helper";
import { Avatar, Badge, Button, Descriptions, Drawer, Radio, Space } from "antd";
import dayjs from "dayjs";


interface IProps {
    openViewDetail: boolean;
    setOpenViewDetail: (v: boolean) => void;
    dataViewDetail: ICategory | null;
    setDataViewDetail: (v: ICategory | null) => void
}
const CategoryDetail =(props : IProps)=> {
    const {openViewDetail , setOpenViewDetail, dataViewDetail, setDataViewDetail}= props;
    const onClose = () => {
        setOpenViewDetail(false);
        setDataViewDetail(null);
    }
    
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

  <Descriptions.Item label="Created At">
    {dayjs(dataViewDetail?.createdAt).format(FORMATE_DATE_VN )}
  </Descriptions.Item>
  

  
</Descriptions>
      </Drawer>
    </>
    )
}
export default CategoryDetail