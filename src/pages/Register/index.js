import React from 'react';
import './register.scss';
import './register.css';
import {bg_login} from '../../assets/index';
import {Input,Button, Gap, Link} from '../../components/index';
import { useHistory } from 'react-router-dom';

function Register(props) {
    const history=useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={bg_login} style={{width:1070,height:730}} calssName="bg-image" alt="Register-img"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="FullName" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email"/>
                <Gap height={18}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={50}/>
                <div className="btn-action-auth">
                    <Button title="Register"/>
                </div>
                <Gap height={20} />
                <Link onClick={()=> history.push('/login')} title="Kembali Ke Login" />
            </div>
        </div>
    );
}

export default Register;