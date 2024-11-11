import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Autentifikasi';

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [name, setName] = useState('');
    const [nisn, setNisn] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    const changeName = (nilai) => { setName(nilai.target.value) };
    const changeNisn = (nilai) => { setNisn(nilai.target.value) };
    const changePassword = (nilai) => { setPassword(nilai.target.value) };

    const submit = (nilai) => {
        nilai.preventDefault();
        
        const panjang = nisn.length;
        if (name && nisn && password) {
            if (panjang == 10) {
                login({ name, nisn, password });
                setMessage(`Selamat datang kembali ${name}`);

                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }else{
                setMessage('Maaf, Nisn harus 10 digit');
            }
        };
    };

    const regis = () => {
        navigate('/register');
    }


    return (
        <div className='bg-auth'>
            <div className='auth-container'>
                <h2 className="text-center">Login</h2>
                <form onSubmit={submit} className='mt-4'>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name :</label>
                        <input className='form-control'
                            type='text'
                            id='name'
                            value={name}
                            onChange={changeName}
                            required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='nisn' className='form-label'>NISN :</label>
                        <input className='form-control'
                            type='number'
                            id='nisn'
                            value={nisn}
                            onChange={changeNisn}
                            required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password :</label>
                        <input className='form-control'
                            type='password'
                            id='password'
                            value={password}
                            onChange={changePassword}
                            required />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Login</button>
                </form>
                <div>
                    {message && <div className="alert alert-success mt-3">{message}</div>}
                    <p className='mt-3 text-center'>Belum memiliki Akun ? Silahkan <a type='submit' onClick={regis} style={{ cursor: 'pointer', color: '#764ba2' }}>Register</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;