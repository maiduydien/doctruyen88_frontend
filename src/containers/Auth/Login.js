import { Component, Fragment } from 'react';
import './Login.scss';

class Login extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            username: '',
            password: '',
            showpassword: false,
        };
    }
    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleLogin = (e) => {
        e.preventDefault();
        console.log(
            'User/Password:',
            this.state.username,
            '/',
            this.state.password
        );
    };
    handleShowPassword = () => {
        let newShowPassWord = !this.state.showpassword;
        this.setState({
            showpassword: newShowPassWord,
        });
        console.log(this.state.showpassword);
    };
    render() {
        return (
            <Fragment>
                <div className="body">
                    {/* This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-9 mx-auto">
                                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                                    <div className="card-img-left d-none d-md-flex">
                                        {/* Background image for card set in CSS! */}
                                    </div>
                                    <div className="card-body p-4 p-sm-5">
                                        <h5 className="card-title text-center mb-5 fw-light fs-5">
                                            Đăng nhập
                                        </h5>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputUsername"
                                                    placeholder="Tên đăng nhập"
                                                    required
                                                    autoFocus
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={(e) => {
                                                        this.handleOnchange(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="form-floating mb-3 password-wrap">
                                                <input
                                                    type={
                                                        this.state.showpassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    className="form-control"
                                                    id="floatingPassword"
                                                    placeholder="Mật khẩu"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={(e) => {
                                                        this.handleOnchange(e);
                                                    }}
                                                />
                                                <i
                                                    className={
                                                        this.state.showpassword
                                                            ? 'fas fa-eye-slash show-password'
                                                            : 'far fa-eye show-password'
                                                    }
                                                    onClick={() =>
                                                        this.handleShowPassword()
                                                    }
                                                ></i>
                                            </div>
                                            <div className="d-grid mb-2">
                                                <button
                                                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                                                    onClick={(e) => {
                                                        this.handleLogin(e);
                                                    }}
                                                >
                                                    Đăng nhập
                                                </button>
                                            </div>
                                            <a
                                                className="d-block text-center mt-2 small"
                                                href="#"
                                            >
                                                Chưa có tài khoản? Đăng ký trong
                                                5 giây
                                            </a>
                                            <hr className="my-4" />
                                            <div className="d-grid mb-2">
                                                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase">
                                                    <i className="google-login-icon fab fa-google me-2" />{' '}
                                                    Đăng nhập bằng GOOGLE
                                                </button>
                                            </div>
                                            <div className="d-grid">
                                                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase">
                                                    <i className="facebook-login-icon fab fa-facebook-f me-2" />{' '}
                                                    ĐĂNG NHẬP BẰNG FACEBOOK
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Login;
