import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '018dca89536b7a10470af7e0a0490ed2': {
                        table: 'sys_security_acl'
                        id: '018dca89536b7a10470af7e0a0490ed2'
                    }
                    '098d0e89536b7a10470af7e0a0490e48': {
                        table: 'sys_security_acl'
                        id: '098d0e89536b7a10470af7e0a0490e48'
                    }
                    '418d0e89536b7a10470af7e0a0490e51': {
                        table: 'sys_security_acl'
                        id: '418d0e89536b7a10470af7e0a0490e51'
                    }
                    '418dca89536b7a10470af7e0a0490ec9': {
                        table: 'sys_security_acl'
                        id: '418dca89536b7a10470af7e0a0490ec9'
                    }
                    '5c8d8a89536b7a10470af7e0a0490e13': {
                        table: 'sys_wizard_answer'
                        id: '5c8d8a89536b7a10470af7e0a0490e13'
                    }
                    '898dca89536b7a10470af7e0a0490efe': {
                        table: 'sys_security_acl'
                        id: '898dca89536b7a10470af7e0a0490efe'
                    }
                    '998d0e89536b7a10470af7e0a0490e60': {
                        table: 'sys_security_acl'
                        id: '998d0e89536b7a10470af7e0a0490e60'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'abca996bdb8d475f9944411c2fa97b8b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'aba49b70a93b4254a6bd287192032ae6'
                    }
                    c18d0e89536b7a10470af7e0a0490e07: {
                        table: 'sys_security_acl'
                        id: 'c18d0e89536b7a10470af7e0a0490e07'
                    }
                    c58dca89536b7a10470af7e0a0490edc: {
                        table: 'sys_security_acl'
                        id: 'c58dca89536b7a10470af7e0a0490edc'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '0b5d69fe01664f77b67d116b0faf0099'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c88aeec847f14ed9935188b51e44cb0c'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '4ebef478c6d64d2c843d6d0b954a8757'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '058dca89536b7a10470af7e0a0490eda'
                        key: {
                            sys_security_acl: '018dca89536b7a10470af7e0a0490ed2'
                            sys_user_role: {
                                id: 'c18dca89536b7a10470af7e0a0490eab'
                                key: {
                                    name: 'x_1936206_myaudit.encoder'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '058dca89536b7a10470af7e0a0490ee4'
                        key: {
                            sys_security_acl: 'c58dca89536b7a10470af7e0a0490edc'
                            sys_user_role: {
                                id: '8d8dca89536b7a10470af7e0a0490e14'
                                key: {
                                    name: 'x_1936206_myaudit.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '458d0e89536b7a10470af7e0a0490e5a'
                        key: {
                            sys_security_acl: '098d0e89536b7a10470af7e0a0490e48'
                            sys_user_role: {
                                id: 'c98dca89536b7a10470af7e0a0490ea2'
                                key: {
                                    name: 'x_1936206_myaudit.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '498d0e89536b7a10470af7e0a0490e0c'
                        key: {
                            sys_security_acl: 'c18d0e89536b7a10470af7e0a0490e07'
                            sys_user_role: {
                                id: 'c18dca89536b7a10470af7e0a0490eab'
                                key: {
                                    name: 'x_1936206_myaudit.encoder'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c76e23f20704b54ad253bc1b80050fb'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '533e4ee7a1f542e48109b8632277c7cf'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5f00cd5ce92a47a4802a400dc13ceb02'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '898dca89536b7a10470af7e0a0490ef6'
                        key: {
                            sys_security_acl: '418dca89536b7a10470af7e0a0490ec9'
                            sys_user_role: {
                                id: 'c98dca89536b7a10470af7e0a0490ea2'
                                key: {
                                    name: 'x_1936206_myaudit.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8d8dca89536b7a10470af7e0a0490e14'
                        key: {
                            name: 'x_1936206_myaudit.viewer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '948d4a89536b7a10470af7e0a0490ee2'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9d8d0e89536b7a10470af7e0a0490e7e'
                        key: {
                            sys_security_acl: '998d0e89536b7a10470af7e0a0490e60'
                            sys_user_role: {
                                id: 'c98dca89536b7a10470af7e0a0490ea2'
                                key: {
                                    name: 'x_1936206_myaudit.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c18d0e89536b7a10470af7e0a0490e42'
                        key: {
                            sys_security_acl: '898dca89536b7a10470af7e0a0490efe'
                            sys_user_role: {
                                id: 'c98dca89536b7a10470af7e0a0490ea2'
                                key: {
                                    name: 'x_1936206_myaudit.manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c18dca89536b7a10470af7e0a0490eab'
                        key: {
                            name: 'x_1936206_myaudit.encoder'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c58d0e89536b7a10470af7e0a0490e56'
                        key: {
                            sys_security_acl: '418d0e89536b7a10470af7e0a0490e51'
                            sys_user_role: {
                                id: 'c18dca89536b7a10470af7e0a0490eab'
                                key: {
                                    name: 'x_1936206_myaudit.encoder'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c98dca89536b7a10470af7e0a0490ea2'
                        key: {
                            name: 'x_1936206_myaudit.manager'
                        }
                    },
                ]
            }
        }
    }
}
