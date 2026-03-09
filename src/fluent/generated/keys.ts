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
                    '2162ae49532f7a10470af7e0a0490e69': {
                        table: 'sys_ui_section'
                        id: '2162ae49532f7a10470af7e0a0490e69'
                    }
                    '2562ae49532f7a10470af7e0a0490eb7': {
                        table: 'sys_ui_form'
                        id: '2562ae49532f7a10470af7e0a0490eb7'
                    }
                    '2d62ae49532f7a10470af7e0a0490ebf': {
                        table: 'sys_ui_form_section'
                        id: '2d62ae49532f7a10470af7e0a0490ebf'
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
                    '7db2aa89532f7a10470af7e0a0490e41': {
                        table: 'sys_ui_element'
                        id: '7db2aa89532f7a10470af7e0a0490e41'
                    }
                    '898dca89536b7a10470af7e0a0490efe': {
                        table: 'sys_security_acl'
                        id: '898dca89536b7a10470af7e0a0490efe'
                    }
                    '998d0e89536b7a10470af7e0a0490e60': {
                        table: 'sys_security_acl'
                        id: '998d0e89536b7a10470af7e0a0490e60'
                    }
                    a162ae49532f7a10470af7e0a0490ebe: {
                        table: 'sys_ui_form_section'
                        id: 'a162ae49532f7a10470af7e0a0490ebe'
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
                    f9b2aa89532f7a10470af7e0a0490e42: {
                        table: 'sys_ui_element'
                        id: 'f9b2aa89532f7a10470af7e0a0490e42'
                    }
                    fdb2aa89532f7a10470af7e0a0490e40: {
                        table: 'sys_ui_element'
                        id: 'fdb2aa89532f7a10470af7e0a0490e40'
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
                        table: 'sys_ui_list_element'
                        id: '208d8a89536b7a10470af7e0a0490e96'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '248d8a89536b7a10470af7e0a0490e94'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '248d8a89536b7a10470af7e0a0490e95'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2c8d8a89536b7a10470af7e0a0490e96'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_class_name'
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
                        table: 'sys_dictionary'
                        id: '58822e88500945a1b5ea29e58b46209a'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                            element: 'title'
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
                        table: 'sys_ui_list'
                        id: '688d8a89536b7a10470af7e0a0490e90'
                        deleted: true
                        key: {
                            name: 'x_1936206_myaudit_audit'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
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
                        table: 'sys_ui_list_element'
                        id: 'a48d8a89536b7a10470af7e0a0490e96'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a88d8a89536b7a10470af7e0a0490e95'
                        deleted: true
                        key: {
                            list_id: {
                                id: '688d8a89536b7a10470af7e0a0490e90'
                                key: {
                                    name: 'x_1936206_myaudit_audit'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0fb316eba5447c199a25e99c3166b5d'
                        key: {
                            name: 'x_1936206_myaudit_audit'
                            element: 'title'
                            language: 'en'
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
