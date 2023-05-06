import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { INITIAL_TABLE_DATA } from "./constant";
import {
  useDeleteBiodata,
  useGetBiodata,
  usePostBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";

const FormCRUD = () => {
  const { Title } = Typography;
  const { TextArea } = Input;

  //menampilkan data dari mockAPI ke table
  const [isloadingBiodata, biodata, getBiodata] = useGetBiodata();

  //Create data ke API
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();

  //menghapus data dari API
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();

  //Update Biodata
  const [isLoadingUpdateBiodata, updateBiodata] = useUpdateBiodata();

  const [formBio] = Form.useForm();

  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [key, setKey] = useState(INITIAL_TABLE_DATA.length + 1);

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  const handleEdit = (row_data) => {
    console.log({ row_data });
    setRowData(row_data);
    setIsEdit(true);
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  //   menambah data table
  const onAdd = (values) => {
    // const newData = {
    //     key: key,
    //     ...values,
    // };

    // setData([...data, newData]);
    // setKey(key + 1);
    createBiodata(values, () => {
      getBiodata();
      formBio.resetFields();
    });
  };

  //   menghapus data dari table
  const onDelete = (row_id) => {
    // const newData = data.filter((item) => item.key !== row_key);
    // setData(newData);
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };

  //   mengedit Data table
  const onEdit = (values) => {
    // console.log({ values });
    // const key = rowData?.key
    // const newData = [...data]
    // const index = data?.findIndex((item) => key === item.key);

    // newData?.splice(index, 1, {
    //     key: key,
    //     ...values
    // });

    // setData(newData);

    const id = rowData.id;
    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });

    // setIsEdit(false);
    // setRowData();

    // formBio.resetFields();
  };

  console.log({ data });

  //aktifasi biodata
  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <>
      <Title>Form Biodata Mahasiswa @Dev</Title>

      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        style={{
          width: "600px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        fields={[
          {
            name: ["firstName"],
            value: rowData?.firstName,
          },
          {
            name: ["lastName"],
            value: rowData?.lastName,
          },
          {
            name: ["nim"],
            value: rowData?.nim,
          },
          {
            name: ["address"],
            value: rowData?.address,
          },
        ]}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          name="nim"
          label="NIM"
          rules={[
            {
              required: true,
              message: "Please input your NIM!",
            },
          ]}
        >
          <Input placeholder="Input your NIM" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Input your address" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoadingUpdateBiodata}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoadingCreateBiodata}
          >
            Submit
          </Button>
        )}
      </Form>

      {/* Table */}

      <Table
        rowKey="id"
        columns={TABLE_COLUMNS}
        dataSource={biodata}
        loading={isloadingBiodata || isLoadingDeleteBiodata}
      />
    </>
  );
};

export default FormCRUD;
