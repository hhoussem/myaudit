import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['998d0e89536b7a10470af7e0a0490e60'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_1936206_myaudit.manager'],
    table: 'x_1936206_myaudit_audit',
})
