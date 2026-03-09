import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c18d0e89536b7a10470af7e0a0490e07'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_1936206_myaudit.encoder'],
    table: 'x_1936206_myaudit_audit',
})
