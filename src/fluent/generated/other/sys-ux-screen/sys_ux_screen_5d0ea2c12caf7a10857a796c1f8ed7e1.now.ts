import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5d0ea2c12caf7a10857a796c1f8ed7e1'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '510ea2c1e1af7a108263e10cd0cb79f8',
        disable_auto_reflow: false,
        disable_interoperable: 'false',
        event_mappings: `[ {&#13;
  "eventMappingId" : "7c4b7a6d-da76-4cfb-9561-c14388a97faf",&#13;
  "sourceEventApiName" : "sn_uib_base_aw.NAV_ITEM_SELECTED_RELAY_8515f3e853031010ffa5ddeeff7b1297",&#13;
  "sourceEventSysId" : null,&#13;
  "targets" : [ {&#13;
    "broker" : null,&#13;
    "clientScript" : null,&#13;
    "declarativeAction" : null,&#13;
    "event" : {&#13;
      "apiName" : "sn_canvas_core.NAV_ITEM_SELECTED",&#13;
      "payload" : {&#13;
        "type" : "MAP_CONTAINER",&#13;
        "container" : {&#13;
          "route" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "route" ]&#13;
            }&#13;
          },&#13;
          "fields" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "fields" ]&#13;
            }&#13;
          },&#13;
          "params" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "params" ]&#13;
            }&#13;
          },&#13;
          "redirect" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "redirect" ]&#13;
            }&#13;
          },&#13;
          "passiveNavigation" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "passiveNavigation" ]&#13;
            }&#13;
          },&#13;
          "title" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "title" ]&#13;
            }&#13;
          },&#13;
          "multiInstField" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "multiInstField" ]&#13;
            }&#13;
          },&#13;
          "external" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "external" ]&#13;
            }&#13;
          }&#13;
        }&#13;
      },&#13;
      "sysId" : "8b82bf18e5276c8e423b6e4e0889b463"&#13;
    },&#13;
    "operation" : null,&#13;
    "targetId" : "d119fc74-0541-4ad1-b58d-58329f7787fe",&#13;
    "type" : "EVENT"&#13;
  } ]&#13;
}, {&#13;
  "eventMappingId" : "0a1eecc8-902b-4713-921f-db4fff537b3d",&#13;
  "sourceEventApiName" : "sn_uib_base_aw.CONTENT_UPDATED_RELAY_8515f3e853031010ffa5ddeeff7b1297",&#13;
  "sourceEventSysId" : null,&#13;
  "targets" : [ {&#13;
    "broker" : null,&#13;
    "clientScript" : null,&#13;
    "declarativeAction" : null,&#13;
    "event" : {&#13;
      "apiName" : "sn_canvas_core.CONTENT_UPDATED",&#13;
      "payload" : {&#13;
        "type" : "MAP_CONTAINER",&#13;
        "container" : {&#13;
          "params" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "params" ]&#13;
            }&#13;
          }&#13;
        }&#13;
      },&#13;
      "sysId" : "75f3815fb0d9c38bb6df1626a0f284c4"&#13;
    },&#13;
    "operation" : null,&#13;
    "targetId" : "0c83f019-e1f4-4fc6-9961-d66457b08e75",&#13;
    "type" : "EVENT"&#13;
  } ]&#13;
}, {&#13;
  "eventMappingId" : "4396d8ea-245b-4956-ad7b-06572cd3ba77",&#13;
  "sourceEventApiName" : "sn_uib_base_aw.MODAL_SELECTED_RELAY_8515f3e853031010ffa5ddeeff7b1297",&#13;
  "sourceEventSysId" : null,&#13;
  "targets" : [ {&#13;
    "broker" : null,&#13;
    "clientScript" : null,&#13;
    "declarativeAction" : null,&#13;
    "event" : {&#13;
      "apiName" : "sn_canvas_core.MODAL_SELECTED",&#13;
      "payload" : {&#13;
        "type" : "MAP_CONTAINER",&#13;
        "container" : {&#13;
          "modalId" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "modalId" ]&#13;
            }&#13;
          },&#13;
          "showModal" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "showModal" ]&#13;
            }&#13;
          },&#13;
          "displayOptions" : {&#13;
            "type" : "EVENT_PAYLOAD_BINDING",&#13;
            "binding" : {&#13;
              "address" : [ "displayOptions" ]&#13;
            }&#13;
          }&#13;
        }&#13;
      },&#13;
      "sysId" : "882eed4091382d3a41f1bb3f382ae089"&#13;
    },&#13;
    "operation" : null,&#13;
    "targetId" : "b40e5e12-cb9a-4727-afda-cbc616bca1a0",&#13;
    "type" : "EVENT"&#13;
  } ]&#13;
} ]`,
        macroponent: '8515f3e853031010ffa5ddeeff7b1297',
        macroponent_config: `{&#13;
  "title" : "",&#13;
  "label" : "",&#13;
  "bare" : true,&#13;
  "scrollable" : "y",&#13;
  "headerLevel" : "1",&#13;
  "interceptNotifications" : false,&#13;
  "propagateNotifications" : false&#13;
}`,
        name: 'Simple List Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[]',
        screen_type: '510ea2c198af7a108899eb881af65ceb',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
