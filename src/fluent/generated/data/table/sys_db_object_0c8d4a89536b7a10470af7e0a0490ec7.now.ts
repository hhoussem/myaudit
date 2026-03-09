import { ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_1936206_myaudit_audit = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    extends: 'task',
    label: 'Audit',
    name: 'x_1936206_myaudit_audit',
    schema: {
        title: StringColumn({
            label: [
                {
                    label: 'Title',
                    language: 'en',
                    plural: 'Titles',
                },
            ],
        }),
        persons_in_charge: ReferenceColumn({
            label: 'Persons in charge',
            referenceTable: 'x_1936206_myaudit_person_in_charge',
        }),
    },
    textIndex: true,
})
