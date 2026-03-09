import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['510ea2c159af7a10dd6e91732f6971e9'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '590ea2c130af7a1028e54b2212c011e8',
        name: 'viewport_gph/initiallyCollapsed',
        required_translations: '[]',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	return api.context.props.userPrefs['workspace.showAgentAssist'] != 'true';
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'transform',
    },
})
