import { UxListMenuConfig } from '@servicenow/sdk/core'

UxListMenuConfig({
    $id: Now.ID['1e0ea6c153af7a10470af7e0a0490e47'],
    name: 'myaudit_menu_config',
    categories: [
        {
            $id: Now.ID['5e0ea6c153af7a10470af7e0a0490e58'],
            title: 'Audit',
            lists: [
                {
                    $id: Now.ID['120ea6c153af7a10470af7e0a0490e5f'],
                    applicabilities: [
                        {
                            $id: Now.ID['5e0ea6c153af7a10470af7e0a0490e9d'],
                            applicability: '5a0e66c153af7a10470af7e0a0490ec9',
                            order: 100,
                        },
                    ],
                    columns: 'number,priority,state,assigned_to,short_description,sys_class_name',
                    condition: '',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    order: 50,
                    table: 'x_1936206_myaudit_audit',
                    title: 'All',
                },
                {
                    $id: Now.ID['2a0ea6c153af7a10470af7e0a0490edd'],
                    applicabilities: [
                        {
                            $id: Now.ID['620ea6c153af7a10470af7e0a0490ee2'],
                            applicability: '5a0e66c153af7a10470af7e0a0490ec9',
                            order: 100,
                        },
                    ],
                    columns: 'number,priority,state,assigned_to,short_description,sys_class_name',
                    condition: 'active=true^assigned_toISEMPTY^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    order: 30,
                    table: 'x_1936206_myaudit_audit',
                    title: 'Unassigned',
                },
                {
                    $id: Now.ID['d20ea6c153af7a10470af7e0a0490ebc'],
                    applicabilities: [
                        {
                            $id: Now.ID['9e0ea6c153af7a10470af7e0a0490ec0'],
                            applicability: '5a0e66c153af7a10470af7e0a0490ec9',
                            order: 100,
                        },
                    ],
                    columns: 'number,priority,state,assigned_to,short_description,sys_class_name',
                    condition: 'active=false^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    order: 40,
                    table: 'x_1936206_myaudit_audit',
                    title: 'Closed',
                },
                {
                    $id: Now.ID['ea0ea6c153af7a10470af7e0a0490ee5'],
                    applicabilities: [
                        {
                            $id: Now.ID['ea0ea6c153af7a10470af7e0a0490ef6'],
                            applicability: '5a0e66c153af7a10470af7e0a0490ec9',
                            order: 100,
                        },
                    ],
                    columns: 'number,priority,state,assigned_to,short_description,sys_class_name',
                    condition: 'active=true^EQ',
                    hideCheckboxHover: true,
                    hideDragAndDrop: true,
                    order: 10,
                    table: 'x_1936206_myaudit_audit',
                    title: 'Open',
                },
            ],
        },
    ],
})
