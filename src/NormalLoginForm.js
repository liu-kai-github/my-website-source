import React from 'react';
import {Icon, Input, Button, Alert} from 'antd';
import './NormalLoginForm.css';


class NormalLoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            warningInfo: {
                text: '',
                type: '',
            },
        };

        this.onUserNameInputChange = this.onUserNameInputChange.bind(this);
        this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onUserNameInputChange(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onPasswordInputChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit() {
        if (this.state.userName === 'LiuKaiAiLiuYujing'
            && this.state.password === 'LiuYujingAiLiuKai'
        ) {
            this.setState({
                warningInfo: {
                    text: '登录成功，正在跳转...',
                    type: 'success',
                },
            });
        } else {
            this.setState({
                warningInfo: {
                    text: '账号或密码错误，请重新输入！',
                    type: 'error',
                },
            });
        }

    }

    render() {
        return (
            <div style={{
                margin: '30px auto',
                width: '260px',
            }}>
                <div style={{
                    padding: '10px 0',
                }}>
                    <Input
                        onChange={this.onUserNameInputChange}
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="请输入用户名"
                    />
                </div>

                <div style={{
                    padding: '10px 0',
                }}>
                    <Input
                        onChange={this.onPasswordInputChange}
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="请输入密码"
                    />
                </div>

                {
                    this.state.warningInfo.text
                        ? (<div style={{
                            padding: '10px 0',
                        }}>
                            <Alert
                                message={this.state.warningInfo.text}
                                type={this.state.warningInfo.type}
                                showIcon
                            />
                        </div>)
                        : null
                }


                <div style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    padding: '10px 0',
                }}>
                    <Button
                        onClick={this.handleSubmit}
                    >登录</Button>
                </div>
            </div>

        );
    }
}

export default NormalLoginForm;
