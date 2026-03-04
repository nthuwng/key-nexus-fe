
import { createProductAPI, fetchCategoryAPI } from "@/services/admin/api.admin";
import {
  App,
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import type { FormProps } from "antd/lib";

import { useEffect, useState } from "react";

interface IProps {
  openModalCreate: boolean;
  setOpenModelCreate: (v: boolean) => void;
  refreshTable: () => void;
}
type FieldType = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: File;
  brand: string;
  categoryId: string;
  createdAt: string;
};

const CreateProduct = (props: IProps) => {
  const { openModalCreate, setOpenModelCreate, refreshTable } = props;
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { notification } = App.useApp();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { name, price, image, quantity, categoryId, brand } = values;
    setIsSubmit(true);
    const res = await createProductAPI(
      name,
      price,
      quantity,
      image,
      brand,
      categoryId,
    );
    if (res && res.data) {
      notification.success({
        message: " thành công",
      });
      form.resetFields();
      setOpenModelCreate(false);

      refreshTable();
    } else {
      {
        notification.error({
          message: " thất bại",
        });
      }
    }
    setIsSubmit(false);
  };

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (openModalCreate) {
      const fetchCategory = async () => {
        const res = await fetchCategoryAPI("");

        if (res?.data?.result) {
          setCategories(res.data.result);
        }
      };

      fetchCategory();
    }
  }, [openModalCreate]);

  return (
    <Modal
      title={
        <div style={{ textAlign: "center", width: "100%" }}>
          Thêm mới sản phẩm
        </div>
      }
      open={openModalCreate}
      onOk={() => form.submit()}
      onCancel={() => {
        setOpenModelCreate(false);

        form.resetFields();
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
              label="Tên Sản Phẩm"
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên sảm phẩm" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Giá"
              name="price"
              rules={[{ required: true, message: "Vui lòng nhập giá" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                addonAfter="đ"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Giá số lượng"
              name="quantity"
              rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Thượng hiệu"
              name="brand"
              rules={[{ required: true, message: "Vui lòng nhập thương hiệu" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="loại"
              name="categoryId"
              rules={[{ required: true, message: "Vui lòng chọn thể loại" }]}
            >
              <Select
                showSearch
                placeholder="Chọn thể loại"
                options={categories.map((item) => ({
                  value: item._id,
                  label: item.name,
                }))}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Ảnh"
              name="image"
              initialValue="/images/keyboard.jpg"
            >
              <img
                src="/images/keyboard.jpg"
                alt="product"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default CreateProduct;
