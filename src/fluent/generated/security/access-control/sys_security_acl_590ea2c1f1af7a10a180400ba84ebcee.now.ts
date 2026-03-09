import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['590ea2c1f1af7a10a180400ba84ebcee'],
    localOrExisting: '',
    decisionType: '',
    type: 'ux_route',
    operation: 'read',
    script: `answer = gs.getSession().isLoggedIn();
if (!answer) {
    answer = gs.getProperty('glide.security.allow_unauth_roleless_acl', false);
}`,
    roles: ['x_1936206_myaudit.encoder', 'x_1936206_myaudit.viewer', 'x_1936206_myaudit.manager'],
    name: 'x.1936206.myaudit.*',
})
