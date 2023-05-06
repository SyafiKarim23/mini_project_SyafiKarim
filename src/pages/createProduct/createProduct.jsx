import React from "react";
// import bsLogo from "../../assets/bsLogo.png";
import "./createProduct.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload, Space, Card } from "antd";
import { Form, Input, InputNumber, Radio, Select } from "antd";

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { TextArea } = Input;

const CreateProduct = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("123456789");
  };

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  return (
    <div>
      <Card className="Card1">
        <div className="navbar">
          Simple Header
          <div class="navbar-right">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#Features">Features</a>
            <a href="#Pricing">Pricing</a>
            <a href="#FAQs">FAQs</a>
            <a href="#about">About</a>
          </div>
        </div>
        <hr />
        <div className="content">
          <img src={bsLogo} className="logo BS" alt="React logo" />
          <h2>Create Product</h2>
          <h3>{article.description.en}</h3>
        </div>
        <div className="Forminput">
          <h2>Detail Product</h2>
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItem
                name="ProductName"
                label="Product Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Product Name",
                  },
                ]}
              >
                <Input maxlength="10" />
              </MyFormItem>
              <MyFormItem name="ProductCategory" label="Product Category">
                <Select placeholder="Choose...">
                  <Option value="">Choose1</Option>
                  <Option value="">Choose2</Option>
                  <Option value="">Choose2</Option>
                </Select>
              </MyFormItem>
              <MyFormItem name="image" label="Image Of Product">
                <Upload {...props}>
                  <Button type="primary" icon={<UploadOutlined />}>
                    Click to Choose File
                  </Button>
                </Upload>
              </MyFormItem>
              <MyFormItem
                name="ProductFreshnes"
                label="Product Freshnes"
                rules={[
                  {
                    required: true,
                    message: "Please input your ProductFreshnes",
                  },
                ]}
              >
                <Radio.Group name="radiogroup" defaultValue={0}>
                  <Radio value={1}>Brand New</Radio>
                  <br />
                  <Radio value={2}>Second Hand</Radio>
                  <br />
                  <Radio value={3}>Refufbished</Radio>
                </Radio.Group>
              </MyFormItem>
              <MyFormItem name="deskripsi" label="Additional Description">
                <>
                  <TextArea rows={4} />
                  <br />
                  <br />
                </>
              </MyFormItem>
              <MyFormItem name="ProductPrice" label="Product Price">
                <Space direction="vertical">
                  <InputNumber addonBefore="$" defaultValue={1} />
                </Space>
              </MyFormItem>
            </MyFormItemGroup>
            <Button className="submit" type="primary" onClick={handleClick}>
              Submit
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default CreateProduct;
