import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['510ea2c197af7a102ace058ed4c3d3e4'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Header Configuration',
        name: 'chrome_header',
        page: '150ea2c1fdaf7a10e80bf9b91a37f5f9',
        required_translations: `[ {
  "message" : "Configure workspace",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Display Preferences",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Notifications",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Settings",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Show Badge Count",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Show Banners",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Show ribbon",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Show sidebar",
  "code" : "",
  "comment" : ""
}, {
  "message" : "UserMenu",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Wrap list text",
  "code" : "",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_1936206_myaudit.150ea2c1fdaf7a10e80bf9b91a37f5f9.root.global.chrome_header',
        value: `{&#13;
    "privatePage": {&#13;
        "notificationsEnabled": true,&#13;
        "searchEnabled": true,&#13;
        "userPrefsEnabled": true,&#13;
        "contextualConfigurationItems": {&#13;
            "_roles": [&#13;
                "workspace_admin"&#13;
            ],&#13;
            "enabled": true,&#13;
            "position": 150&#13;
        },&#13;
        "globalTools": {&#13;
            "collapsingMenuId": 0,&#13;
            "primaryItems": [{&#13;
                "label": "UserMenu",&#13;
                "icon": "user",&#13;
                "type": "menu",&#13;
                "primaryDisplay": "icon",&#13;
                "value": {&#13;
                    "children": [{&#13;
                            "_roles": [&#13;
                                "workspace_admin"&#13;
                            ],&#13;
                            "label": {&#13;
                                "message": "Configure workspace",&#13;
                                "translatable": true&#13;
                            },&#13;
                            "type": "navigation",&#13;
                            "position": 100,&#13;
                            "primaryDisplay": "none",&#13;
                            "value": {&#13;
                                "type": "external",&#13;
                                "opensWindow": "true",&#13;
                                "value": {&#13;
                                    "href": "/nav_to.do?uri=/sys_ux_app_config.do?sys_id=510ea2c1e1af7a108263e10cd0cb79f8"&#13;
                                }&#13;
                            }&#13;
                        },&#13;
                        {&#13;
                            "label": {&#13;
                                "message": "Settings",&#13;
                                "translatable": true&#13;
                            },&#13;
                            "type": "menu",&#13;
                            "position": 50,&#13;
                            "value": {&#13;
                                "children": [{&#13;
                                        "label": {&#13;
                                            "message": "Display Preferences",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "divider"&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Show ribbon",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "toggle",&#13;
                                        "value": {&#13;
                                            "_meta": {&#13;
                                                "_type": "userPreferences",&#13;
                                                "_path": "userPrefName",&#13;
                                                "_value": {&#13;
                                                    "userPrefName": "workspace.showRibbon"&#13;
                                                },&#13;
                                                "_default": {&#13;
                                                    "userPrefName": "true"&#13;
                                                }&#13;
                                            }&#13;
                                        }&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Show sidebar",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "toggle",&#13;
                                        "value": {&#13;
                                            "_meta": {&#13;
                                                "_type": "userPreferences",&#13;
                                                "_path": "userPrefName",&#13;
                                                "_value": {&#13;
                                                    "userPrefName": "workspace.showAgentAssist"&#13;
                                                },&#13;
                                                "_default": {&#13;
                                                    "userPrefName": "true"&#13;
                                                }&#13;
                                            }&#13;
                                        }&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Wrap list text",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "toggle",&#13;
                                        "value": {&#13;
                                            "_meta": {&#13;
                                                "_type": "userPreferences",&#13;
                                                "_path": "userPrefName",&#13;
                                                "_value": {&#13;
                                                    "userPrefName": "workspace.wrapListText"&#13;
                                                },&#13;
                                                "_default": {&#13;
                                                    "userPrefName": "true"&#13;
                                                }&#13;
                                            }&#13;
                                        }&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Notifications",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "divider"&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Show Banners",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "toggle",&#13;
                                        "value": {&#13;
                                            "_meta": {&#13;
                                                "_type": "userPreferences",&#13;
                                                "_path": "userPrefName",&#13;
                                                "_value": {&#13;
                                                    "userPrefName": "workspace.notifications.showPopups"&#13;
                                                },&#13;
                                                "_default": {&#13;
                                                    "userPrefName": "true"&#13;
                                                }&#13;
                                            }&#13;
                                        }&#13;
                                    },&#13;
                                    {&#13;
                                        "label": {&#13;
                                            "message": "Show Badge Count",&#13;
                                            "translatable": true&#13;
                                        },&#13;
                                        "type": "toggle",&#13;
                                        "value": {&#13;
                                            "_meta": {&#13;
                                                "_type": "userPreferences",&#13;
                                                "_path": "userPrefName",&#13;
                                                "_value": {&#13;
                                                    "userPrefName": "workspace.notifications.showBadgeCount"&#13;
                                                },&#13;
                                                "_default": {&#13;
                                                    "userPrefName": "true"&#13;
                                                }&#13;
                                            }&#13;
                                        }&#13;
                                    }&#13;
                                ]&#13;
                            }&#13;
                        }&#13;
                    ]&#13;
                }&#13;
            }],&#13;
            "secondaryItems": [&#13;
&#13;
            ]&#13;
        }&#13;
    },&#13;
    "publicPage": {&#13;
        "actionButtons": [&#13;
&#13;
        ]&#13;
    }&#13;
}`,
    },
})
