import React from 'react';
import {bg_login, bg_register,bg_login_2} from '../../assets/index';
import {Input,Button, Gap, Link} from '../../components/index';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history= useHistory();
    return (
        <div className="main-page">
        <div className="left">
            <img src={bg_login_2} style={{width:1070,height:730}} calssName="bg-image" alt="Register-img"/>
        </div>
        <div className="right">
            <p className="title">Login</p>
            <Input label="Email" placeholder="Email"/>
            <Gap height={18}/>
            <Input label="Password" placeholder="Password"/>
            <Gap height={50}/>
            <div className="btn-action-auth">
                <Button  onClick={()=> history.push('/')} title="Login"/>
            </div>
            <Gap height={20} />
            <Link onClick={()=> history.push('/register')} title="Belum punya akun, silahkan daftar" />
        </div>
    </div>
    );
}

export default Login;