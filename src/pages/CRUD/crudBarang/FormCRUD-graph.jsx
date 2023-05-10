import { UploadOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  Upload,
  message,
  InputNumber,
} from "antd";
import React, { useEffect, useState } from "react";
import Gap from "../../../components/gap/gap";
import LoadingComponent from "../../../components/loadingComponent/loadingComponent";
import { uploaderConfig } from "../../../config/uploader-config";
import { useSingleUploader } from "../../../hooks/useSingleUploader";
import { INITIAL_TABLE_DATA } from "../constant";
import {
  ADD_BARANG,
  DELETE_BARANG,
  GET_BARANG,
  UPDATE_BARANG,
} from "../query/users-query-barang";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FormCRUD_graphpt = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [formBio] = Form.useForm();
  const [avatar, setAvatar] = useState("");

  // Get Data
  const {
    data: barangData,
    loading: isBarangLoading,
    error: usersError,
  } = useQuery(GET_BARANG);

  // Add Data
  const [addUser, { loading: loadingAddUser }] = useMutation(ADD_BARANG, {
    refetchQueries: [GET_BARANG],
  });

  // Update Data
  const [updateBarang, { loading: loadingUpdateBarang }] = useMutation(
    UPDATE_BARANG,
    {
      refetchQueries: [GET_BARANG],
    }
  );

  // Delete Data
  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_BARANG, {
    refetchQueries: [GET_BARANG],
  });

  // Upload Image
  const [isLoadingUpload, uploadFile] = useSingleUploader();

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "Gambar Barang",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record, index) => (
        <img
          src={record.avatar}
          alt={`avatar-${index}`}
          style={{ height: "50px" }}
        />
      ),
    },
    {
      title: "Nama Barang",
      dataIndex: "namaBarang",
      key: "namaBarang",
    },
    {
      title: "Harga Barang",
      dataIndex: "harga",
      key: "harga",
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
              onConfirm={() => onDelete(record.uuid)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    setAvatar(row_data.avatar);
    formBio.setFieldsValue({
      namaBarang: row_data.namaBarang,
      harga: row_data.harga,
    });
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setAvatar("");
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    const body = {
      avatar: avatar,
      ...values,
    };
    addUser({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => handleCancel(),
    });
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteUser({
      variables: { uuid: row_id },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const uuid = rowData.uuid;
    const body = {
      avatar: avatar,
      ...values,
    };

    updateBarang({
      variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  // to handle Upload Image
  const handleUpload = async (file) => {
    const body = {
      file: await getBase64(file.file.originFileObj),
      upload_preset: uploaderConfig.upload_preset,
      public_id: file.file.name.replace(/\.[^.]*$/, ""),
      api_key: uploaderConfig.api_key,
    };
    uploadFile(body, (data) => {
      setAvatar(data.url);
    });
  };

  useEffect(() => {
    if (usersError) {
      message.open({
        type: "error",
        content: `${usersError?.message}`,
      });
    }
  }, [usersError]);

  return (
    <>
      <Title>Form CRUD Barang</Title>

      {/* Form */}
      <Form.Item label="Avatar">
        <Upload
          showUploadList={false}
          name="file"
          maxCount={1}
          onRemove={() => {
            setAvatar("");
          }}
          customRequest={() => {}}
          onChange={handleUpload}
        >
          <Button
            icon={<UploadOutlined />}
            type={!avatar ? "dashed" : "default"}
          >
            {avatar ? "Change Avatar" : "Upload Avatar"}
          </Button>
        </Upload>

        {isLoadingUpload ? (
          <LoadingComponent />
        ) : (
          avatar && (
            <div>
              <Gap height={20} />
              <img
                src={avatar}
                alt="avatar"
                style={{
                  height: "150px",

                  borderRadius: "10px",
                }}
              />
            </div>
          )
        )}
      </Form.Item>
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        colon={false}
        style={{
          width: "800px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          name="namaBarang"
          label="Nama Barang"
          rules={[
            {
              required: true,
              message: "Silahkan isi Nama Barang!",
            },
          ]}
        >
          <Input placeholder="Isi Nama Barang" />
        </Form.Item>

        <Form.Item
          name="harga"
          label="Harga Barang"
          rules={[
            {
              required: true,
              message: "Silahkan isi Harga Barang!",
            },
          ]}
        >
          <InputNumber
            placeholder="Isi Harga Barang"
            style={{ width: "100%" }}
          />
          {/* <Input placeholder="Input your harga barang" /> */}
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingUpdateBarang}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button type="primary" htmlType="submit" loading={loadingAddUser}>
            Submit
          </Button>
        )}
      </Form>

      <Gap height={30} />

      {/* Table */}
      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        dataSource={barangData?.barang}
        loading={isBarangLoading || loadingDelete}
      />
    </>
  );
};

export default FormCRUD_graphpt;
