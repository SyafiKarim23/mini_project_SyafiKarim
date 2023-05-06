import React from 'react';
import bsLogo from "../../assets/bsLogo.png";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Space, Card } from 'antd';
import {

    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useState } from 'react';


const reactFundamental1 = () => {

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const { TextArea } = Input;

    return (
        <div>
            <Card className='Card1'>
                <div className='navbar'>
                    Simple Header
                    <div class="navbar-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#Features">Features</a>
                        <a href="#Pricing">Pricing</a>
                        <a href="#FAQs">FAQs</a>
                        <a href="#about">About</a>
                    </div>
                </div>
                <hr />
                <div className='content'>
                    <img src={bsLogo} className="logo BS" alt="React logo" />
                    <h2>
                        Create Product
                    </h2>
                    <h3>
                        Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a <br />
                        validation state that can be triggered by attempting to submit the form without completing it.
                    </h3>
                </div>
                <div className='Forminput'>
                    <Form
                        labelCol={{
                            span: 0,

                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        style={{
                            maxWidth: 600,
                        }}
                    >
                        <Form.Item label="Form Size" name="size">
                            <Radio.Group>
                                <Radio.Button value="small">Small</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="large">Large</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <h4>
                            Detail Product
                        </h4>
                        <Form.Item label="Product Name">
                        </Form.Item>
                        <Input />
                        <Form.Item label="Product Category">
                        </Form.Item>
                        <Select className='select' value="Chosee....">
                            <Select.Option >Chosee1</Select.Option>
                            <Select.Option >Chosee2</Select.Option>
                        </Select>
                        <Form.Item label="Image Of Product">
                            <Upload {...props}>
                                <Button type="primary" icon={<UploadOutlined />}>Choose File</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="Product Freshness">
                            <Radio.Group name="radiogroup" defaultValue={1}>
                                <Radio value={1}>Brand New</Radio>
                                <br />
                                <Radio value={2}>Second Hand</Radio>
                                <br />
                                <Radio value={3}>Refufbished</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Additional Description">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Product Price">
                        </Form.Item>
                        <InputNumber className='select' value="$" />
                        <br />
                        <br />
                    </Form>
                </div>
                <Button className='submit' type="primary">
                    Submit
                </Button>
            </Card>
        </div>
    );
}

export default reactFundamental1;
