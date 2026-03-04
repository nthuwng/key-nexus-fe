
import { FORMATE_DATE_VN } from "@/service/helper";
import { Avatar, Badge, Button, Descriptions, Drawer, Radio, Space } from "antd";
import dayjs from "dayjs";


interface IProps {
    openViewDetail: boolean;
    setOpenViewDetail: (v: boolean) => void;
    dataViewDetail: IUserTable | null;
    setDataViewDetail: (v: IUserTable | null) => void
}
const UserDetail =(props : IProps)=> {
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
  <Descriptions.Item label="Tên">{dataViewDetail?.fullName}</Descriptions.Item>
  <Descriptions.Item label="Email">{dataViewDetail?.email}</Descriptions.Item>
  <Descriptions.Item label="Số điện thoại">{dataViewDetail?.phone}</Descriptions.Item>
  <Descriptions.Item label="Trạng thái">{dataViewDetail?.status}</Descriptions.Item>
  <Descriptions.Item label="Role" >
    <Badge status="processing" text={dataViewDetail?.roleId?.name}/>
  </Descriptions.Item>
  <Descriptions.Item label="Avata" >
   <Avatar size={40} src="AvartaUrl"></Avatar>
  </Descriptions.Item>
  <Descriptions.Item label="Created At">
    {dayjs(dataViewDetail?.createdAt).format(FORMATE_DATE_VN )}
  </Descriptions.Item>


  
</Descriptions>
      </Drawer>
    </>
    )
}
export default UserDetail