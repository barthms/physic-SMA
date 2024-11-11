import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Register = () => {
    useEffect(() => {
        document.body.className = 'bg-register';
        return () => {
            document.body.className = '';
        };
    }, []);

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nisn, setNisn] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleNisnChange = (event) => {
        setNisn(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const panjang = nisn.length;
        if (panjang == 10) {

            setMessage(`Mauliate, ${name}! Silahkan explore lebih.`);

            setName('');
            setEmail('');
            setNisn('');

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }else{
            setMessage('Maaf, Nisn harus 10 digit');
        }
    }
    const logIn = () => {
        navigate('/login')
    }

    return (
        <div className="bg-auth">
            <div className="auth-container">
                <h2 className="text-center">Register</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name :</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={handleNameChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nisn" className="form-label">NISN :</label>
                        <input
                            type="number"
                            id="nisn"
                            className="form-control"
                            value={nisn}
                            onChange={handleNisnChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email :</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password :</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <div>
                    {message && <div className="alert alert-success mt-3">{message}</div>}
                    <p className="mt-3">Sudah memiliki Akun ? Silahkan <a type="submit" onClick={logIn} className=''>Login</a></p>
                </div>
            </div>
        </div>
    );


};

export default Register;