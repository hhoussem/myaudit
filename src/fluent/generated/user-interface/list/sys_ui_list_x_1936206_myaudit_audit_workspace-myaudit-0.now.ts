import { List } from '@servicenow/sdk/core'

List({
    table: 'x_1936206_myaudit_audit',
    view: 'workspace-myaudit-0',
    columns: ['number', 'title', 'state', 'assigned_to'],
})
