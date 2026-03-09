import { Table, ReferenceColumn, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_1936206_myaudit_person_in_charge = Table({
    $id: Now.ID['person_in_charge'],
    name: 'x_1936206_myaudit_person_in_charge',
    label: 'Person In Charge',
    actions: ['read', 'update', 'create', 'delete'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    schema: {
        audit: ReferenceColumn({
            label: 'Audit',
            referenceTable: `x_1936206_myaudit_audit`,
        }),
        login: StringColumn({
            label: 'Login',
            maxLength: 50,
        }),
        role: ChoiceColumn({
            label: 'Role',
            choices: {
                manager: { label: 'Manager' },
                viewer: { label: 'Viewer' },
                encoder: { label: 'Encoder' },
            },
        }),
    },
})
