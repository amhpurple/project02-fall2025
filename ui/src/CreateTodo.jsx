import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

export default function CreateTodo({ API_URL, onTodoCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(values) {
        console.log(values);

        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        if (response.ok && onTodoCreated) {
            onTodoCreated();
            setTitle('');
            setDescription('');
        }
    }

    return (
        // <form className="form-container" onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         placeholder="Title"
        //         value={title}
        //         onChange={(e) => setTitle(e.target.value)}
        //         required
        //     />
        //     <input
        //         type="text"
        //         placeholder="Description"
        //         value={description}
        //         onChange={(e) => setDescription(e.target.value)}
        //     />
        //     <button type="submit">Create TODO</button>
        // </form>

        <section>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="Todos"
                    name="title"
                    rules={[
                        { required: true, message: 'Please input your todo!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Add Todo
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
}
