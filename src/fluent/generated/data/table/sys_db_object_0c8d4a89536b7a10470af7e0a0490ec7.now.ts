import { Table } from '@servicenow/sdk/core'

export const x_1936206_myaudit_audit = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    extends: 'task',
    label: 'audit',
    name: 'x_1936206_myaudit_audit',
    schema: {},
})
