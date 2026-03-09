import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9d0ea2c172af7a10640557c5e4dd36d3'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '510ea2c1e1af7a108263e10cd0cb79f8',
        disable_auto_reflow: false,
        disable_interoperable: 'false',
        event_mappings: `[
    {
        "eventMappingId": "clgwmwhhiaaawiieeddbhhwcjvmohhwk",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_ed7ad8a1c313101001a6e0dd9740ddd1",
        "sourceEventCorrelationId": null,
        "sourceEventSysId": null,
        "targets": [
            {
                "targetId": "clgwmwhhiaaawiiffddbhhwpggghccqjl",
                "type": "EVENT",
                "declarativeAction": null,
                "event": {
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463",
                    "payload": {
                        "type": "MAP_CONTAINER",
                        "container": {
                            "route": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                }
                            },
                            "fields": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                }
                            },
                            "params": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                }
                            },
                            "redirect": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                }
                            },
                            "passiveNavigation": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                }
                            },
                            "title": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                }
                            },
                            "multiInstField": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                }
                            },
                            "targetRoute": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                }
                            },
                            "external": null
                        }
                    },
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED"
                },
                "operation": null,
                "clientScript": null,
                "conditional": null,
                "broker": null
            }
        ],
        "sourceEventDefinition": {
            "id": null,
            "apiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_ed7ad8a1c313101001a6e0dd9740ddd1",
            "type": "UXEVENT"
        }
    }
]`,
        macroponent: 'ed7ad8a1c313101001a6e0dd9740ddd1',
        macroponent_config: `{
    "label": {
        "type": "TRANSLATION_LITERAL",
        "value": {
            "code": null,
            "message": "",
            "comment": ""
        }
    },
    "bare": {
        "type": "JSON_LITERAL",
        "value": true
    },
    "scrollable": {
        "type": "JSON_LITERAL",
        "value": "y"
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
    "propagateNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    }
}`,
        name: 'KPI Details Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: '550ea2c108af7a10e873c33c6a9af3ea',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
