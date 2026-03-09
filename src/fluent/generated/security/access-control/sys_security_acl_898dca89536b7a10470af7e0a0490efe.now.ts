import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['898dca89536b7a10470af7e0a0490efe'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_1936206_myaudit.manager'],
    table: 'x_1936206_myaudit_audit',
})
