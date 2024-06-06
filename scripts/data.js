
export const data = {
    id: 1,
    name: 'ClientLimitsV0',
    type: 'ASO',
    description: 'Client Limits',
    version: '1.0.0',
    dependencies: [ 
        {
            id: 5,
            name: 'KLIMR008',
            type: 'Library',
            description: 'Person Custom Limits',
            version: '1.0.0',
            dependencies: [
                {
                    id: 6,
                    name: 'KLIMR010',
                    type: 'Library',
                    description: 'Get Custom Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            id: 9,
                            name: 'KLIMC002',
                            type: 'DTO',
                            description: 'Person Custom Limits DTO',
                            version: '1.0.0',
                            dependencies: []
                        }, {
                            id: 10,
                            name: 'KLIMR500',
                            type: 'Library',
                            description: 'Person Custom Limits DTO',
                            version: '1.0.0',
                            dependencies: [
                                {
                                    id: 11,
                                    name: 'KLIMR501',
                                    type: 'Library',
                                    description: 'Person Custom Limits DTO',
                                    version: '1.0.0',
                                    dependencies: [
                                        {
                                            id: 12,
                                            name: 'KLIMC003',
                                            type: 'DTO',
                                            description: 'Person Custom Limits DTO',
                                            version: '1.0.0',
                                            dependencies: []
                                        },{
                                            id: 13,
                                            name: 'KLIMR700',
                                            type: 'Library',
                                            description: 'Person Custom Limits DTO',
                                            version: '1.0.0',
                                            dependencies: [
                                                {
                                                    id: 12,
                                                    name: 'KLIMC003',
                                                    type: 'DTO',
                                                    description: 'Person Custom Limits DTO',
                                                    version: '1.0.0',
                                                    dependencies: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 9,
                                    name: 'KLIMC002',
                                    type: 'DTO',
                                    description: 'Person Custom Limits DTO',
                                    version: '1.0.0',
                                    dependencies: []
                                }

                            ]
                        }
                    ]
                },
                {
                    id: 7,
                    name: 'KLIMR011',
                    type: 'Library',
                    description: 'Get Default Limits',
                    version: '1.0.0',
                    dependencies: []
                },{
                    id: 8,
                    name: 'KLIMC001',
                    type: 'DTO',
                    description: 'Client Limits DTO',
                    version: '1.0.0',
                    dependencies: []
                }
            ]
        },
        {
            id: 2,
            name: 'KLIMR007',
            type: 'Library',
            description: 'Get Client Limits',
            version: '1.0.0',
            dependencies: [
                {
                    id: 3,
                    name: 'KLIMR001',
                    type: 'Library',
                    description: 'Get Custom Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            id: 8,
                            name: 'KLIMC001',
                            type: 'DTO',
                            description: 'Client Limits DTO',
                            version: '1.0.0',
                            dependencies: []
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'KLIMR002',
                    type: 'Library',
                    description: 'Get Default Limits',
                    version: '1.0.0',
                    dependencies: []
                },{
                    id: 8,
                    name: 'KLIMC001',
                    type: 'DTO',
                    description: 'Client Limits DTO',
                    version: '1.0.0',
                    dependencies: []
                }
            ]
        },{
            id: 8,
            name: 'KLIMC001',
            type: 'DTO',
            description: 'Client Limits DTO',
            version: '1.0.0',
            dependencies: []
        },{
            id: 5,
            name: 'KLIMR008',
            type: 'Library',
            description: 'Person Custom Limits',
            version: '1.0.0',
            dependencies: [
                {
                    id: 6,
                    name: 'KLIMR010',
                    type: 'Library',
                    description: 'Get Custom Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            id: 9,
                            name: 'KLIMC002',
                            type: 'DTO',
                            description: 'Person Custom Limits DTO',
                            version: '1.0.0',
                            dependencies: []
                        }, {
                            id: 10,
                            name: 'KLIMR500',
                            type: 'Library',
                            description: 'Person Custom Limits DTO',
                            version: '1.0.0',
                            dependencies: [
                                {
                                    id: 11,
                                    name: 'KLIMR501',
                                    type: 'Library',
                                    description: 'Person Custom Limits DTO',
                                    version: '1.0.0',
                                    dependencies: [
                                        {
                                            id: 12,
                                            name: 'KLIMC003',
                                            type: 'DTO',
                                            description: 'Person Custom Limits DTO',
                                            version: '1.0.0',
                                            dependencies: []
                                        },{
                                            id: 13,
                                            name: 'KLIMR700',
                                            type: 'Library',
                                            description: 'Person Custom Limits DTO',
                                            version: '1.0.0',
                                            dependencies: [
                                                {
                                                    id: 12,
                                                    name: 'KLIMC003',
                                                    type: 'DTO',
                                                    description: 'Person Custom Limits DTO',
                                                    version: '1.0.0',
                                                    dependencies: []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 9,
                                    name: 'KLIMC002',
                                    type: 'DTO',
                                    description: 'Person Custom Limits DTO',
                                    version: '1.0.0',
                                    dependencies: []
                                }

                            ]
                        }
                    ]
                },
                {
                    id: 7,
                    name: 'KLIMR011',
                    type: 'Library',
                    description: 'Get Default Limits',
                    version: '1.0.0',
                    dependencies: []
                },{
                    id: 8,
                    name: 'KLIMC001',
                    type: 'DTO',
                    description: 'Client Limits DTO',
                    version: '1.0.0',
                    dependencies: []
                }
            ]
        }
    ],
}


export const data2 = {
    name: 'ClientLimitsV0',
    type: 'ASO',
    dependencies: [ 
        {
            type: 'GL',
            name: 'Librarys',
            dependencies: [
                {
                    id: 5,
                    name: 'KLIMR008',
                    type: 'Library',
                    description: 'Person Custom Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            name: 'Methods',
                            type: 'GM',
                            dependencies: [
                                {
                                    name: 'executePersonLimits',
                                    type: 'Method',
                                    dependencies: [
                                        {
                                            name: 'Input',
                                            type: 'IN',
                                            dependencies: [
                                                {
                                                    name: 'String: LimitId',
                                                    type: 'DS'
                                                }
                                            ]
                                        }, {
                                            name: 'Output',
                                            type: 'OUT',
                                            dependencies: [
                                                {
                                                    name: 'String: Status',
                                                    type: 'DS'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: 'executeGetCatalogLimits',
                                    type: 'Method',
                                    dependencies: [
                                        {
                                            name: 'Input',
                                            type: 'IN',
                                            dependencies: [
                                                {
                                                    name: 'String: LimitId',
                                                    type: 'DS'
                                                }, {
                                                    name: 'String: PersonId',
                                                    type: 'DS'
                                                }, {
                                                    name: 'String: CatalogId',
                                                    type: 'DS'
                                                }
                                            ]
                                        }, {
                                            name: 'Output',
                                            type: 'OUT',
                                            dependencies: [
                                                {
                                                    name: 'String: Status',
                                                    type: 'DS'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },{
                            name: 'Dependencies',
                            type: 'G',
                            dependencies: [
                                {
                                    type: 'GL',
                                    name: 'Librarys',
                                    dependencies: []
                                }, {
                                    type: 'GD',
                                    name: 'DTOs',
                                    dependencies: []
                                }
                            ]
                        }
                ]
                },{
                    id: 2,
                    name: 'KLIMR007',
                    type: 'Library',
                    description: 'Get Client Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            name: 'Methods',
                            type: 'GM',
                            dependencies: [
                                {
                                    name: 'executeDeleteLimits',
                                    type: 'Method',
                                    dependencies: [
                                        {
                                            name: 'Input',
                                            type: 'IN',
                                            dependencies: [{
                                                name: 'String: LimitId',
                                                type: 'DS'
                                            }]
                                        }
                                    ]
                                }
                            ]
                        },{
                            name: 'Dependencies',
                            type: 'G',
                            dependencies: [
                                {
                                    type: 'GL',
                                    name: 'Librarys',
                                    dependencies: []
                                }, {
                                    type: 'GD',
                                    name: 'DTOs',
                                    dependencies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}


export const data3 = {
    name: 'ClientLimitsV0',
    type: 'ASO',
    dependencies: [ 
        {
            type: 'GL',
            name: 'Librarys',
            dependencies: [
                {
                    id: 5,
                    name: 'KLIMR008',
                    type: 'Library',
                    description: 'Person Custom Limits',
                    version: '1.0.0',
                    dependencies: [
                        {
                            name: 'Methods',
                            type: 'GM',
                            dependencies: [
                                {
                                    name: 'executeGetCatalogLimits',
                                    type: 'Method',
                                    dependencies: [
                                        {
                                            name: 'Input',
                                            type: 'IN',
                                            dependencies: [
                                                {
                                                    name: 'String: LimitId',
                                                    type: 'DS'
                                                }, {
                                                    name: 'String: PersonId',
                                                    type: 'DS'
                                                }, {
                                                    name: 'String: CatalogId',
                                                    type: 'DS'
                                                }
                                            ]
                                        }, {
                                            name: 'Output',
                                            type: 'OUT',
                                            dependencies: [
                                                {
                                                    name: 'String: Status',
                                                    type: 'DS'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },{
                            name: 'Dependencies',
                            type: 'G',
                            dependencies: [
                                {
                                    type: 'GL',
                                    name: 'Librarys',
                                    dependencies: [
                                        {
                                            id: 5,
                                            name: 'KLIMR008',
                                            type: 'Library',
                                            description: 'Person Custom Limits',
                                            version: '1.0.0',
                                            dependencies: [
                                                {
                                                    name: 'Methods',
                                                    type: 'GM',
                                                    dependencies: [
                                                        {
                                                            name: 'executeGetCatalogLimits',
                                                            type: 'Method',
                                                            dependencies: [
                                                                {
                                                                    name: 'Input',
                                                                    type: 'IN',
                                                                    dependencies: [
                                                                        {
                                                                            name: 'String: LimitId',
                                                                            type: 'DS'
                                                                        }, {
                                                                            name: 'String: PersonId',
                                                                            type: 'DS'
                                                                        }, {
                                                                            name: 'String: CatalogId',
                                                                            type: 'DS'
                                                                        }
                                                                    ]
                                                                }, {
                                                                    name: 'Output',
                                                                    type: 'OUT',
                                                                    dependencies: [
                                                                        {
                                                                            name: 'String: Status',
                                                                            type: 'DS'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },{
                                                    name: 'Dependencies',
                                                    type: 'G',
                                                    dependencies: [
                                                        {
                                                            type: 'GL',
                                                            name: 'Librarys',
                                                            dependencies: []
                                                        }, {
                                                            type: 'GD',
                                                            name: 'DTOs',
                                                            dependencies: []
                                                        }
                                                    ]
                                                }
                                        ]
                                        }
                                    ]
                                }, {
                                    type: 'GD',
                                    name: 'DTOs',
                                    dependencies: []
                                }
                            ]
                        }, {
                            name: 'Utilities',
                            type: 'Utility',
                            dependencies: [
                                {
                                    name: 'JDBC',
                                    type: 'JDBC',
                                    dependencies: []
                                }
                            ]
                        }
                ]
                }
            ]
        }
    ],
}