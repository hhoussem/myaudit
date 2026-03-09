import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['510ea2c1e5af7a10c9328849121ffde3'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '510ea2c1e1af7a108263e10cd0cb79f8',
        disable_auto_reflow: false,
        disable_interoperable: 'false',
        event_mappings: `[
    {
        "eventMappingId": "ckhffjjisfyaaaabboddhhhmwraaxeeaft",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_1936206_myaudit.NAV_ITEM_SELECTED_RELAY_590ea2c1cbaf7a105e8501c0dc58d9e7",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_1936206_myaudit.NAV_ITEM_SELECTED_RELAY_590ea2c1cbaf7a105e8501c0dc58d9e7",
            "id": null,
            "type": "UXEVENT"
        },
        "sourceEventSysId": null,
        "targets": [
            {
                "broker": null,
                "clientScript": null,
                "conditional": null,
                "declarativeAction": null,
                "event": {
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED",
                    "payload": {
                        "container": {
                            "external": {
                                "binding": {
                                    "address": [
                                        "external"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "fields": {
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "multiInstField": {
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "params": {
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "passiveNavigation": {
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "redirect": {
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "route": {
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "targetRoute": {
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "title": {
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            }
                        },
                        "type": "MAP_CONTAINER"
                    },
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463"
                },
                "operation": null,
                "targetId": "ckhffjjisfyaaaabbnddhhhmsoffggkjjsjj",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: '590ea2c1cbaf7a105e8501c0dc58d9e7',
        macroponent_config: `{
    "bare": {
        "type": "JSON_LITERAL",
        "value": true
    },
    "headerLevel": {
        "type": "JSON_LITERAL",
        "value": "1"
    },
    "headingOnlyVisibleToScreenReaders": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "interceptNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "label": {
        "type": "TRANSLATION_LITERAL",
        "value": {
            "code": null,
            "comment": "",
            "message": ""
        }
    },
    "propagateNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "scrollable": {
        "type": "JSON_LITERAL",
        "value": "y"
    },
    "sysId": {
        "type": "JSON_LITERAL",
        "value": ""
    }
}`,
        name: 'Home default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: '550ea2c1b5af7a10e37e2e46f84dc2ee',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
