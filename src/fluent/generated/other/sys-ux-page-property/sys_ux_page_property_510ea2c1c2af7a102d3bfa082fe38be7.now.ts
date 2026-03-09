import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['510ea2c1c2af7a102d3bfa082fe38be7'],
    table: 'sys_ux_page_property',
    data: {
        description: 'Tabs Configuration',
        name: 'chrome_tab',
        page: '150ea2c1fdaf7a10e80bf9b91a37f5f9',
        required_translations: `[ {
  "message" : "New Audit",
  "code" : "",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_1936206_myaudit.150ea2c1fdaf7a10e80bf9b91a37f5f9.root.global.chrome_tab',
        value: '{"contextual":["record"],"newTabMenu":[{"label":{"translatable":true,"message":"New Audit"},"routeInfo":{"route":"record","fields":{"table":"x_1936206_myaudit_audit","sysId":"-1"},"multiInstField":"sysId"},"condition":{"tableDescription":{"table":"x_1936206_myaudit_audit","canCreate":true}}}],"maxMainTabLimit":10,"maxTotalSubTabLimit":30}',
    },
})
