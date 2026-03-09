import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c58dca89536b7a10470af7e0a0490edc'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_1936206_myaudit.viewer'],
    table: 'x_1936206_myaudit_audit',
})
