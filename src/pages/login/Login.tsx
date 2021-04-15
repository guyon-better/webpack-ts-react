import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input, Layout, message } from 'antd'
import { FormProps } from 'antd/lib/form'
import { UserOutlined, LockOutlined, CopyrightOutlined } from '@ant-design/icons';
import styles from './Login.module.less'

const { Header, Content, Footer, Sider } = Layout

interface IFormValueType {
	code: string
	userCode: string
	password: string
	remember: boolean
}

const LoginForm = (props: FormProps) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		
	}, [])

	const onFinish = async (values: { userCode?: string, password?: string, remember?: boolean }) => {
		const { userCode, password, remember } = values
		let psd: string = '1';
	}

	return (
		<Form
			form={form}
			initialValues={{
				userCode: '',
				password: void 0,
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name="userCode"
				rules={[{ required: true, message: '请输入用户名' }]}
			>
				<Input
					size="large"
					prefix={<UserOutlined className={styles.prefixIcon} />}
					placeholder="请输入用户名"
					allowClear
				/>
			</Form.Item>

			<Form.Item
				name="password"
				rules={[{ required: true, message: '请输入密码' }]}
			>
				<Input.Password
					size="large"
					prefix={<LockOutlined className={styles.prefixIcon} />}
					placeholder="请输入密码"
					visibilityToggle
					allowClear
				/>
			</Form.Item>
			<Form.Item name="remember" valuePropName="checked">
				<Checkbox>记住用户名</Checkbox>
			</Form.Item>
			<Form.Item>
				<Button
					size="large"
					loading={loading}
					className={styles.submit}
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}>
					登录
				</Button>
			</Form.Item>
		</Form>
	)
}

const App = () => {
	return (
		<div className={styles.container}>
			<div className={styles.lang} />
			<div className={styles.content}>
				<div className={styles.top}>
					<div className={styles.header}>
						<a>
							{/* <img className={styles.logo} src={require('images/logo.png')} alt="logo"/> */}
							<span className={styles.logoText}>后台管理系统</span>
						</a>
					</div>
					<div className={styles.desc}>百世快递官网</div>
				</div>
				<div className={styles.main}>
					<LoginForm />
				</div>
			</div>
			<div className={styles.footer}>
				<Footer className={styles.footer} >
                    <div className="ant-pro-global-footer-copyright fs-18">
						Copyright <CopyrightOutlined /> {new Date().getFullYear()}
					</div>
                </Footer>
			</div>
		</div>
	)
}

export default App