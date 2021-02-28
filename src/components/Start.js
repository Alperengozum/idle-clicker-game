import React, {useState} from 'react';
import {Typography, Button, Divider, Input, Table, Modal, Space, message} from "antd";
import {useHistory} from "react-router-dom"
import "./Opening.css";
import {useDispatch} from "react-redux";
import {startAction} from "./Redux/Actions/StartAction";
import {loginAction} from "./Redux/Actions/LoginAction";
import api from "./api/api"

const {Text, Title} = Typography;

const dataSource = [{
  key: 1,
  username: "Alperengozum",
  time: "1992"
}]
const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Last Logged Time",
    dataIndex: "time",
    key: "time"
  },


]

function Start() {
  const [startModalVisible, setStartModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  function Onclick(e) {
    setStartModalVisible(true);

  }

  function ErrorModalRegisterOnclick(e) {
    setErrorModalVisible(false);
    setRegisterModalVisible(true);
    setUsername("");

  }

  function ErrorModalReturnOnclick(e) {
    setUsername("")

    setErrorModalVisible(false);

  }

  function RegisterModalRegisterOnclick(e) {
    /* mongodb den sorgu yapılacak böyle bir kullanıcı yoksa kayıt işlemi başarılı olacak */
    /* Axios a bağlantı vakti */

    api.createUser(username, password).then(r => {
        message.success(r.data.message + ". You will be redirect the game. ", 3);
        dispatch(startAction("true")) && history.push("/home");

      }
    ).catch(
      error => message.error(error.response.data.message))

  }

  function RegisterModalReturnOnclick(e) {
    setPassword("")
    setUsername("")
    /* Buradaki inputları temizlemeyi unutma */
    setRegisterModalVisible(false);
  }

  function OnConfirm(e) {
    api.getUser(username).then(e => dispatch(startAction("true")) && history.push("/home")).catch(error => {

      setStartModalVisible(false);
      setErrorModalVisible(true)
    });


  }

  function OnChange(e) {
    setUsername(e.target.value)
    dispatch(loginAction(e.target.value))

  }

  function passwordOnchange(e) {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div className={"App"}>
        <Title level={3}>Alperengozum </Title>
        <Divider type="horizontal"/>
        <Title>Welcome to World's Worst Idle Game</Title>
        <br/>
        <Title level={4}>Are you ready to start?</Title>

        <Button
          type={"primary"}
          onClick={(e) => Onclick()}
        >Start game!</Button>
        <Modal
          title={"One last thing"}
          visible={startModalVisible}
          onOk={(e) => OnConfirm()}
          onCancel={() => {
            setUsername("");
            setStartModalVisible(false);
          }}
        >
          <p>Username for continue</p>
          <Input placeholder={"Username"} value={username} onChange={(e) => OnChange(e)}/>

        </Modal>

        <Modal
          title={"User not found"}
          visible={errorModalVisible}
          onOk={ErrorModalRegisterOnclick}
          okText="Register"
          onCancel={ErrorModalReturnOnclick}
          cancelText={"Return"}
        >
          <Title level={3}>It seems {username} is not registered user</Title>

        </Modal>

        <Modal
          title={"Register Page"}
          visible={registerModalVisible}
          onOk={RegisterModalRegisterOnclick}
          okText="Register now!"
          onCancel={RegisterModalReturnOnclick}
          cancelText={"Return"}
        >
          <Input placeholder={"Username"} value={username} onChange={(e) => OnChange(e)}/>
          <Input.Password placeholder={"Password"} value={password} onChange={(e) => passwordOnchange(e)}/>

        </Modal>

        <Divider type="horizontal"/>
        <Text type="danger">(Developer mode is allowed,let's hack it!)</Text>

      </div>
      <Table dataSource={dataSource} columns={columns}/>;
    </div>
  );
}


export default Start;