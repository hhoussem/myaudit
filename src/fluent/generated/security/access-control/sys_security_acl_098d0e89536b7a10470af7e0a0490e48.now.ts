import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['098d0e89536b7a10470af7e0a0490e48'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_1936206_myaudit.manager'],
    table: 'x_1936206_myaudit_audit',
})
