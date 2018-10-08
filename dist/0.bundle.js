(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/modules/account/AccountSettings.js":
/*!************************************************!*\
  !*** ./src/modules/account/AccountSettings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _user = __webpack_require__(/*! model/user */ \"./src/model/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _PasswordInput = __webpack_require__(/*! components/passwordInput/PasswordInput */ \"./src/components/passwordInput/PasswordInput.js\");\n\nvar _PasswordInput2 = _interopRequireDefault(_PasswordInput);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar passwordConfirmValidationResults = {\n    OK: 'success',\n    ERROR: 'error',\n    UNDEFINED: null\n};\n\nvar AccountSettings = function (_Component) {\n    _inherits(AccountSettings, _Component);\n\n    function AccountSettings(props) {\n        _classCallCheck(this, AccountSettings);\n\n        var _this = _possibleConstructorReturn(this, (AccountSettings.__proto__ || Object.getPrototypeOf(AccountSettings)).call(this, props));\n\n        _this.state = {\n            showModal: false,\n            msg: '',\n            userName: _user2.default.getProp('userName'),\n            email: _user2.default.getProp('email'),\n            changePassword: false,\n            passwordCurrent: '',\n            passwordNew: '',\n            passwordNewConfirm: ''\n        };\n\n        _this.initialFormState = {};\n        _this.setInitialFormState();\n        return _this;\n    }\n\n    _createClass(AccountSettings, [{\n        key: 'setInitialFormState',\n        value: function setInitialFormState() {\n            this.initialFormState = {\n                userName: this.state.userName,\n                email: this.state.email,\n                changePassword: false,\n                passwordCurrent: '',\n                passwordNew: '',\n                passwordNewConfirm: ''\n            };\n        }\n    }, {\n        key: 'validatePasswordConfirm',\n        value: function validatePasswordConfirm() {\n            if (this.state.passwordNewConfirm.length === 0) {\n                return passwordConfirmValidationResults.UNDEFINED;\n            }\n            if (this.state.passwordNew === this.state.passwordNewConfirm) {\n                return passwordConfirmValidationResults.OK;\n            }\n            return passwordConfirmValidationResults.ERROR;\n        }\n    }, {\n        key: 'editEnabled',\n        value: function editEnabled() {\n            if ((this.state.userName !== this.initialFormState.userName || this.state.email !== this.initialFormState.email) && this.state.changePassword === false || this.state.changePassword === true && this.state.passwordCurrent.length > 0 && this.state.passwordNew.length > 0 && this.state.passwordNewConfirm.length > 0 && this.validatePasswordConfirm() === passwordConfirmValidationResults.OK) {\n                return true;\n            }\n\n            return false;\n        }\n    }, {\n        key: 'handleShowModal',\n        value: function handleShowModal() {\n            this.setState({ showModal: true });\n        }\n    }, {\n        key: 'handleCloseModal',\n        value: function handleCloseModal() {\n            this.setState({ showModal: false });\n        }\n    }, {\n        key: 'handleChangePassCheck',\n        value: function handleChangePassCheck(e) {\n            this.setState({ changePassword: e.target.checked });\n        }\n    }, {\n        key: 'handleUserInput',\n        value: function handleUserInput(e) {\n            var name = e.target.name;\n            var value = e.target.value;\n            this.setState(_defineProperty({}, name, value));\n        }\n    }, {\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            var _this2 = this;\n\n            e.preventDefault();\n\n            _user2.default.editAccountData({\n                userName: this.state.userName,\n                email: this.state.email,\n                changePassword: this.state.changePassword,\n                passwordCurrent: this.state.passwordCurrent,\n                passwordNew: this.state.passwordNew,\n                passwordConfirm: this.state.passwordNewConfirm\n            }).then(function (response) {\n                if (response.success) {\n                    _this2.setInitialFormState();\n                    // hide modal window + set initial form values\n                    _this2.setState({\n                        showModal: false,\n                        changePassword: false,\n                        passwordCurrent: '',\n                        passwordNew: '',\n                        passwordNewConfirm: ''\n                    });\n                    // TODO: set result message with mediator into some general result message box\n                } else if (response.success === false) {\n                    _this2.props.logout(response.msg);\n                } else if (response.msg) {\n                    _this2.setState({ msg: response.msg });\n                }\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(\n                    _reactBootstrap.MenuItem,\n                    {\n                        onClick: this.handleShowModal.bind(this),\n                        title: 'Account Settings'\n                    },\n                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-user' }),\n                    _react2.default.createElement(\n                        'span',\n                        null,\n                        ' ',\n                        this.initialFormState.userName || 'User'\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Modal,\n                    { show: this.state.showModal, onHide: this.handleCloseModal.bind(this) },\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Header,\n                        { closeButton: true },\n                        _react2.default.createElement(\n                            _reactBootstrap.Modal.Title,\n                            null,\n                            'Account settings'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Body,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Form,\n                            {\n                                horizontal: true,\n                                id: 'accountSettingsForm',\n                                onSubmit: this.handleSubmit.bind(this)\n                            },\n                            _react2.default.createElement(\n                                _reactBootstrap.FormGroup,\n                                { controlId: 'userName' },\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                    'User Name'\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { md: 6 },\n                                    _react2.default.createElement(_reactBootstrap.FormControl, {\n                                        type: 'text',\n                                        name: 'userName',\n                                        value: this.state.userName,\n                                        onChange: this.handleUserInput.bind(this),\n                                        autoComplete: 'username',\n                                        placeholder: 'Enter your User Name',\n                                        required: 'required',\n                                        autoFocus: true\n                                    })\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _reactBootstrap.FormGroup,\n                                { controlId: 'userEmail' },\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                    'Email'\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { md: 6 },\n                                    _react2.default.createElement(_reactBootstrap.FormControl, {\n                                        type: 'email',\n                                        name: 'email',\n                                        value: this.state.email,\n                                        onChange: this.handleUserInput.bind(this),\n                                        autoComplete: 'email',\n                                        placeholder: 'Enter your Email',\n                                        required: 'required'\n                                    })\n                                )\n                            ),\n                            _react2.default.createElement(\n                                _reactBootstrap.FormGroup,\n                                { controlId: 'changePassword' },\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                    'Change Password'\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.Col,\n                                    { md: 6 },\n                                    _react2.default.createElement(_reactBootstrap.Checkbox, {\n                                        onChange: this.handleChangePassCheck.bind(this),\n                                        checked: this.state.changePassword\n                                    })\n                                )\n                            ),\n                            this.state.changePassword && _react2.default.createElement(\n                                _react2.default.Fragment,\n                                null,\n                                _react2.default.createElement(\n                                    _reactBootstrap.FormGroup,\n                                    { controlId: 'currentPassword' },\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                        'Current Password *'\n                                    ),\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { md: 6 },\n                                        _react2.default.createElement(_reactBootstrap.FormControl, {\n                                            type: 'password',\n                                            name: 'passwordCurrent',\n                                            value: this.state.passwordCurrent,\n                                            onChange: this.handleUserInput.bind(this),\n                                            autoComplete: 'current-password',\n                                            required: 'required'\n                                        })\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.Row,\n                                    { className: 'lableAlignBottom' },\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                        'New Password *'\n                                    ),\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { md: 6 },\n                                        _react2.default.createElement(_PasswordInput2.default, {\n                                            name: 'passwordNew',\n                                            controlId: 'newPassword',\n                                            passwordValue: this.state.passwordNew,\n                                            handlePasswordInput: this.handleUserInput.bind(this)\n                                        })\n                                    )\n                                ),\n                                _react2.default.createElement(\n                                    _reactBootstrap.FormGroup,\n                                    {\n                                        validationState: this.validatePasswordConfirm(),\n                                        controlId: 'confirmNewPassword'\n                                    },\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { componentClass: _reactBootstrap.ControlLabel, md: 4 },\n                                        'Confirm New Password *'\n                                    ),\n                                    _react2.default.createElement(\n                                        _reactBootstrap.Col,\n                                        { md: 6 },\n                                        _react2.default.createElement(_reactBootstrap.FormControl, {\n                                            type: 'password',\n                                            name: 'passwordNewConfirm',\n                                            value: this.state.passwordNewConfirm,\n                                            onChange: this.handleUserInput.bind(this),\n                                            autoComplete: 'new-password',\n                                            required: 'required'\n                                        }),\n                                        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)\n                                    )\n                                )\n                            )\n                        ),\n                        this.state.msg && _react2.default.createElement(\n                            'span',\n                            { className: 'modalErrorMsg right red' },\n                            this.state.msg\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _reactBootstrap.Modal.Footer,\n                        null,\n                        _react2.default.createElement(\n                            _reactBootstrap.Button,\n                            {\n                                onClick: this.handleCloseModal.bind(this),\n                                className: 'left'\n                            },\n                            'Close'\n                        ),\n                        _react2.default.createElement(\n                            _reactBootstrap.Button,\n                            {\n                                bsStyle: 'primary',\n                                type: 'submit',\n                                form: 'accountSettingsForm',\n                                disabled: !this.editEnabled()\n                            },\n                            'Edit'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return AccountSettings;\n}(_react.Component);\n\nexports.default = AccountSettings;\n\n//# sourceURL=webpack:///./src/modules/account/AccountSettings.js?");

/***/ })

}]);