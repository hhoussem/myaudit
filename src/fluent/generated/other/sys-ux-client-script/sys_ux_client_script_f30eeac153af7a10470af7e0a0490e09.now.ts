import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f30eeac153af7a10470af7e0a0490e09'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'a70eeac153af7a10470af7e0a0490e01',
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
