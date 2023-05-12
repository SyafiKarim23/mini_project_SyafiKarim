import React, { useState } from 'react';
import {
    Button, Form, Input, Typography, Modal, Radio, Space,
    DatePicker,
} from 'antd';
import dayjs from "dayjs";

const FormComponents = () => {
    const { Title } = Typography;
    const { TextArea } = Input;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setIsModalOpen(true);
        setModalData({ ...values });
    };


    return (
        <>
            <Title>Form Biodata Mahasiswa</Title>
            <br />
            <Form
                name='bio'
                layout='horizontal'
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name="firsName"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: "Please Input Name"
                        },
                    ]}
                >
                    <Input placeholder='Input Your first name' />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: "Please Input last Name!"
                        },
                    ]}
                >
                    <Input placeholder='Input Your last name' />
                </Form.Item>
                <Form.Item
                    name="alamat"
                    label="Alamat"
                    rules={[
                        {
                            required: true,
                            message: "Please input your alamat!",
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    name="dateOfBirth"
                    label="Date of Birth"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Date of Birth!",
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="agama"
                    label="Agama"
                    rules={[
                        {
                            required: true,
                            message: "Please input your agama!",
                        },
                    ]}
                >
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value="Islam">Islam</Radio>
                            <Radio value="Kristen">Kristen</Radio>
                            <Radio value="Hindu">Hindu</Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <ol>
                    <li>First Name: {modalData.firstName}</li>
                    <li>Last Name: {modalData.lastName}</li>
                    <li>Alamat: {modalData.alamat}</li>
                    <li>Agama: {modalData.agama}</li>
                    <li>
                        Date of Birth: {dayjs(modalData.dateOfBirth).format("DD MMMM YYYY")}
                    </li>
                </ol>
            </Modal>
        </>
    );
}

export default FormComponents;
