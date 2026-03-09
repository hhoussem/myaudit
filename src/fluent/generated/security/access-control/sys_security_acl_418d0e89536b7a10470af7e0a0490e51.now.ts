import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['418d0e89536b7a10470af7e0a0490e51'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_1936206_myaudit.encoder'],
    table: 'x_1936206_myaudit_audit',
})
