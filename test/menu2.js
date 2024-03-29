/*
 * @Author: 靳宏灿
 * @Date: 2019-09-10 15:56:34
 * @LastEditors: 靳宏灿
 * @LastEditTime: 2019-09-10 15:56:34
 * @Description:
 */
module.exports = {
    'success': true,
    'message': '请求成功',
    'errorCode': '0',
    'errorMsg': null,
    'requestId': null,
    'total': 0,
    'data': [
        {
            'hide': false,
            'children': [{
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '角色管理',
                    'pid': 'syspower',
                    'id': 'sysrole',
                    'xtqx': '1',
                    'check': false,
                    'url': '/roleManage'
                }, {
                    'hide': false,
                    'name': '用户管理',
                    'pid': 'syspower',
                    'id': 'sysuser',
                    'xtqx': '1',
                    'check': false,
                    'url': '/userManage'
                }, {
                    'hide': false,
                    'name': '税务机构管理',
                    'pid': 'syspower',
                    'id': 'sysorg',
                    'xtqx': '1',
                    'check': false,
                    'url': '/taxOrgManage'
                }],
                'name': '权限管理',
                'pid': 'sys',
                'id': 'syspower',
                'xtqx': '1',
                'check': false,
                'url': '#'
            }, {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '发票种类代码管理',
                    'pid': 'syscode',
                    'id': 'invtypcode',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemCodeInvoiceType'
                }, {
                    'hide': false,
                    'name': '发票代码管理',
                    'pid': 'syscode',
                    'id': 'invcode',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemCodeInvoice'
                }, {
                    'hide': false,
                    'name': '行业代码管理',
                    'pid': 'syscode',
                    'id': 'inducode',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemCodeIndustry'
                }, {
                    'hide': false,
                    'name': '注册类型代码管理',
                    'pid': 'syscode',
                    'id': 'regtypcode',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemCodeRegisterType'
                }],
                'name': '代码管理',
                'pid': 'sys',
                'id': 'syscode',
                'xtqx': '1',
                'check': false,
                'url': '#'
            }, {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '企业参数管理',
                    'pid': 'parcode',
                    'id': 'comparam',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemParamsCompany'
                }, {
                    'hide': false,
                    'name': '系统参数管理',
                    'pid': 'parcode',
                    'id': 'sysparam',
                    'xtqx': '1',
                    'check': false,
                    'url': '/systemParamsManage'
                }],
                'name': '参数管理',
                'pid': 'sys',
                'id': 'parcode',
                'xtqx': '1',
                'check': false,
                'url': '#'
            }, {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '业务监控',
                    'pid': 'xtjk',
                    'id': 'ywjk',
                    'xtqx': '1',
                    'check': false,
                    'url': '/businessLog'
                }, {
                    'hide': false,
                    'name': '主机监控',
                    'pid': 'xtjk',
                    'id': 'zjjk',
                    'xtqx': '1',
                    'check': false,
                    'url': '/hostLog'
                }],
                'name': '系统监控',
                'pid': 'sys',
                'id': 'xtjk',
                'xtqx': '1',
                'check': false,
                'url': '#'
            }, {
                'hide': false,
                'name': '报税期限维护',
                'pid': 'sys',
                'id': 'taxperiod',
                'xtqx': '1',
                'check': false,
                'url': '/systemTaxPeriod'
            }],
            'name': '系统管理',
            'pid': null,
            'id': 'sys',
            'xtqx': '1',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'mkbz': '10',
            'children': [{
                'hide': false,
                'mkbz': '10',
                'name': '税务Ukey灌装信息',
                'pid': 'sjswukgz',
                'id': 'sjswukgzxx',
                'xtqx': '1',
                'check': false,
                'url': '/taxFillingInfo'
            }, {
                'hide': false,
                'mkbz': '10',
                'name': '税务Ukey状态查询',
                'pid': 'sjswukgz',
                'id': 'sjswukztcx',
                'xtqx': '1',
                'check': false,
                'url': '/taxStatusQuery'
            }],
            'name': '税务Ukey灌装',
            'pid': null,
            'id': 'sjswukgz',
            'xtqx': '1',
            'check': false,
            'url': '/taxFilling'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '用户注册登记',
                'pid': 'fxgl',
                'id': 'yhzcdj',
                'xtqx': '2',
                'check': false,
                'url': '/userRegistration'
            }, {
                'hide': false,
                'name': '注册登记变更',
                'pid': 'fxgl',
                'id': 'zcdjbg',
                'xtqx': '2',
                'check': false,
                'url': '/registrationChange'
            },
                {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '税控设备登记',
                    'pid': 'skssgl',
                    'id': 'sksbdj',
                    'xtqx': '2',
                    'check': false,
                    'url': '/taxControlEquipmentRegistration'
                },
                    {
                        'hide': false,
                        'name': '税控设备写盘',
                        'pid': 'skssgl',
                        'id': 'sksbxp',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxControlEquipmentWritingDisk'
                    },
                    {
                        'hide': false,
                        'name': '税控设备重写',
                        'pid': 'skssgl',
                        'id': 'sksbcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxControlEquipmentRewrite'
                    },
                    {
                        'hide': false,
                        'name': '变更写盘标志',
                        'pid': 'skssgl',
                        'id': 'bgxpbz',
                        'xtqx': '2',
                        'check': false,
                        'url': '/changeTheWriteMark'
                    }, {
                        'hide': false,
                        'name': '税控设备更换',
                        'pid': 'skssgl',
                        'id': 'sksbgh',
                        'xtqx': '2',
                        'check': false,
                        'url': '/changeTaxControl'
                    }, {
                        'hide': false,
                        'name': '税控设备丢失被盗损毁',
                        'pid': 'skssgl',
                        'id': 'sksbdsbdsh',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxControlEquipmentLostStolenDamage'
                    }],
                'name': '税控设备管理',
                'pid': 'fxgl',
                'id': 'skssgl',
                'xtqx': '2',
                'check': false,
                'url': '#'
            },
                {
                'hide': false,
                'name': '企业发行结果通知书',
                'pid': 'fxgl',
                'id': 'qyfxjgtzs',
                'xtqx': '2',
                'check': false,
                'url': '/companyReleaseResultNotice'
            }, {
                'hide': false,
                'name': '税控设备注销',
                'pid': 'fxgl',
                'id': 'sksbzx',
                'xtqx': '2',
                'check': false,
                'url': '/taxControlEquipmentCancellation'
            }, {
                'hide': false,
                'name': '税控设备异常注销',
                'pid': 'fxgl',
                'id': 'sksbyczx',
                'xtqx': '2',
                'check': false,
                'url': '/taxControlEquipmentUnnormalCancellation'
            }, {
                'hide': false,
                'name': '纳税人用户注销',
                'pid': 'fxgl',
                'id': 'nasyhzx',
                'xtqx': '2',
                'check': false,
                'url': '/cancelUser'
            }, {
                'hide': false,
                'name': '税务数字证书管理',
                'pid': 'fxgl',
                'id': 'swszzsgl',
                'xtqx': '2',
                'check': false,
                'url': '/taxDigitalCertificateManagement'
            }, {
                    'hide': false,
                    'name': '通用Ukey证书管理',
                    'pid': 'fxgl',
                    'id': 'tyukzsgl',
                    'xtqx': '2',
                    'check': false,
                    'url': '/UkeyManagement'
                }, {
                    'hide': false,
                    'name': '一体化变更',
                    'pid': 'fxgl',
                    'id': 'ythbg',
                    'xtqx': '2',
                    'check': false,
                    'url': '/integratedChange'
                }, {
                    'hide': false,
                    'children': [{
                        'hide': false,
                        'name': '成品油税收编码授权',
                        'pid': 'cpyssbmgl',
                        'id': 'cpyssbmsq',
                        'xtqx': '2',
                        'check': false,
                        'url': '/oilTaxCodeEmpower'
                    }, {
                        'hide': false,
                        'name': '成品油税收编码写盘',
                        'pid': 'cpyssbmgl',
                        'id': 'cpyssbmxp',
                        'xtqx': '2',
                        'check': false,
                        'url': '/oilTaxCodeWriteDisk'
                    }],
                    'name': '成品油税收编码管理',
                    'pid': 'fxgl',
                    'id': 'cpyssbmgl',
                    'xtqx': '2',
                    'check': false,
                    'url': '#'
                }, {
                    'hide': false,
                    'name': '风险纳税人管理',
                    'pid': 'fxgl',
                    'id': 'fxnsrgl',
                    'xtqx': '2',
                    'check': false,
                    'url': '/riskTaxpayerManagement'
                }, {
                    'hide': false,
                    'name': '消费税白名单管理',
                    'pid': 'fxgl',
                    'id': 'xfsbmd',
                    'xtqx': '2',
                    'check': false,
                    'url': '/salesTaxWhiteListManagement'
                }, {
                    'hide': false,
                    'children': [{
                        'hide': false,
                        'name': '税率授权',
                        'pid': 'slsqgl',
                        'id': 'slsq',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxRateAuthorize'
                    }, {
                        'hide': false,
                        'name': '税率写盘',
                        'pid': 'slsqgl',
                        'id': 'slxp',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxRateWriteDisk'
                    }],
                    'name': '税率授权管理',
                    'pid': 'fxgl',
                    'id': 'slsqgl',
                    'xtqx': '2',
                    'check': false,
                    'url': '#'
                }],
            'name': '发行管理',
            'pid': null,
            'id': 'fxgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [
                {
                    'hide': false,
                    'name': '购票信息登记',
                    'pid': 'fpgl',
                    'id': 'gpxxdj',
                    'xtqx': '2',
                    'check': false,
                    'url': '/ticketRegistration'
                },
                {
                    'hide': false,
                    'name': '购票信息写盘',
                    'pid': 'fpgl',
                    'id': 'gpxxxp',
                    'xtqx': '2',
                    'check': false,
                    'url': '/ticketWriting'
                },
                {
                    'hide': false,
                    'name': '盘退票',
                    'pid': 'fpgl',
                    'id': 'ptp',
                    'xtqx': '2',
                    'check': false,
                    'url': '/diskRefund'
                },
                {
                    'hide': false,
                    'name': '手工退票',
                    'pid': 'fpgl',
                    'id': 'sgtp',
                    'xtqx': '2',
                    'check': false,
                    'url': '/handmadeRefund'
                },
                {
                    'hide': false,
                    'name': '网络领购发票补写',
                    'pid': 'fpgl',
                    'id': 'sgtp',
                    'xtqx': '2',
                    'check': false,
                    'url': '/invoiceWritten'
                }
            ],
            'name': '发票管理',
            'pid': null,
            'id': 'fpgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '税控设备抄报',
                'pid': 'cb',
                'id': 'sksbcb',
                'xtqx': '2',
                'check': false,
                'url': '/taxEquipmentStart'
            }, {
                'hide': false,
                'name': '清零解锁',
                'pid': 'cb',
                'id': 'qljs',
                'xtqx': '2',
                'check': false,
                'url': '/clearZeroStart'
            }, {
                'hide': false,
                'name': '强制清零解锁',
                'pid': 'cb',
                'id': 'qzqljs',
                'xtqx': '2',
                'check': false,
                'url': '/forcedZeroStart'
            }, {
                'hide': false,
                'name': '存根联补录',
                'pid': 'cb',
                'id': 'cglbl',
                'xtqx': '2',
                'check': false,
                'url': '/stubCoupletInfo'
            }, {
                'hide': false,
                'name': '存根联补录抄报',
                'pid': 'cb',
                'id': 'cglblcb',
                'xtqx': '2',
                'check': false,
                'url': '/stubCoupletReport'
            }, {
                'hide': false,
                'name': '注销抄报',
                'pid': 'cb',
                'id': 'zxcb',
                'xtqx': '2',
                'check': false,
                'url': '/logoutReport'
            }, {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '成品油异常发票处理',
                    'pid': 'cpyycfpgl',
                    'id': 'cpyycfpcl',
                    'xtqx': '2',
                    'check': false,
                    'url': '/oilErrorInvoiceDealWith'
                }, {
                    'hide': false,
                    'name': '成品油异常票处理日志',
                    'pid': 'cpyycfpgl',
                    'id': 'cpyycfpcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/oilErrorInvoiceQuery'
                }],
                'name': '成品油异常发票管理',
                'pid': 'cb',
                'id': 'cpyycfpgl',
                'xtqx': '2',
                'check': false,
                'url': '#'
            }],
            'name': '抄报管理',
            'pid': null,
            'id': 'cb',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '发票认证',
                'pid': 'fprzgl',
                'id': 'fprz',
                'xtqx': '2',
                'check': false,
                'url': '/validateInfoWrite'
            },
                {
                    'hide': false,
                    'name': '发票逾期认证',
                    'pid': 'fprzgl',
                    'id': 'fpyqrz',
                    'xtqx': '2',
                    'check': false,
                    'url': '/overdueValiInvoice'
                },
                {
                    'hide': false,
                    'name': '删除认证发票信息',
                    'pid': 'fprzgl',
                    'id': 'scrzfp',
                    'xtqx': '2',
                    'check': false,
                    'url': '/delInvoiceAuthentic'
                }, {
                    'hide': false,
                    'name': '发票认证结果通知书',
                    'pid': 'fprzgl',
                    'id': 'fprztzs',
                    'xtqx': '2',
                    'check': false,
                    'url': '/invoiceValiNoticeExport'
                }, {
                    'hide': false,
                    'name': '发票逾期认证结果通知书',
                    'pid': 'fprzgl',
                    'id': 'fpyqrztzs',
                    'xtqx': '2',
                    'check': false,
                    'url': '/overdueInvoiceValiNoticeExport'
                }
            ],
            'name': '发票认证管理',
            'pid': null,
            'id': 'fprzgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '税收编码维护',
                'pid': 'zjssbmgl',
                'id': 'ssbmwh',
                'xtqx': '2',
                'check': false,
                'url': '/taxCodeMaintain'
            }, {
                'hide': false,
                'name': '发布税收编码',
                'pid': 'zjssbmgl',
                'id': 'fbssbm',
                'xtqx': '2',
                'check': false,
                'url': '/taxCodeRelease'
            }, {
                'hide': false,
                'name': '优惠政策维护',
                'pid': 'zjssbmgl',
                'id': 'yhzcwh',
                'xtqx': '2',
                'check': false,
                'url': '/favouredPolicyMaintain'
            }, {
                'hide': false,
                'name': '变更记录查询',
                'pid': 'zjssbmgl',
                'id': 'bgjlcx',
                'xtqx': '2',
                'check': false,
                'url': '/changeRecordQuery'
            }, {
                'hide': false,
                'name': '监控优惠政策',
                'pid': 'zjssbmgl',
                'id': 'jkyhzc',
                'xtqx': '2',
                'check': false,
                'url': '/monitorFavouredPolicy'
            }, {
                'hide': false,
                'name': '导出税收编码',
                'pid': 'zjssbmgl',
                'id': 'zjdcssbm',
                'xtqx': '2',
                'check': false,
                'url': '/exportMainTaxCode'
            }],
            'name': '总局税收编码管理',
            'pid': null,
            'id': 'zjssbmgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '优惠政策维护',
                'pid': 'sjssbmgl',
                'id': 'sjyhzcwh',
                'xtqx': '2',
                'check': false,
                'url': '/proFavouredPolicy'
            }, {
                'hide': false,
                'name': '导出税收编码',
                'pid': 'sjssbmgl',
                'id': 'sjdcssbm',
                'xtqx': '2',
                'check': false,
                'url': '/exportTaxCode'
            }, {
                'hide': false,
                'name': '同步税收编码',
                'pid': 'sjssbmgl',
                'id': 'sjtbssbm',
                'xtqx': '2',
                'check': false,
                'url': '/synTaxCode'
            }],
            'name': '省局税收编码管理',
            'pid': null,
            'id': 'sjssbmgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '成品油库存台账查询',
                'pid': 'cpykcgl',
                'id': 'cpykctzcx',
                'xtqx': '2',
                'check': false,
                'url': '/inventoryAccountInquiries'
            }, {
                'hide': false,
                'name': '成品油库存下载',
                'pid': 'cpykcgl',
                'id': 'cpykcxz',
                'xtqx': '2',
                'check': false,
                'url': '/inventoryDownload'
            }, {
                'hide': false,
                'name': '成品油库存退回',
                'pid': 'cpykcgl',
                'id': 'cpykcth',
                'xtqx': '2',
                'check': false,
                'url': '/inventoryReturn'
            }, {
                'hide': false,
                'name': '成品油异常手工退回',
                'pid': 'cpykcgl',
                'id': 'cpyycsgth',
                'xtqx': '2',
                'check': false,
                'url': '/abnormalManualReturn'
            },
                {
                    'hide': false,
                    'name': '成品油库存台账维护',
                    'pid': 'cpykcgl',
                    'id': 'cpykctzwh',
                    'xtqx': '2',
                    'check': false,
                    'url': '/inventoryAccountSave'
                },
                {
                    'hide': false,
                    'name': '成品油异常交易处理',
                    'pid': 'cpykcgl',
                    'id': 'cpykctzwh',
                    'xtqx': '2',
                    'check': false,
                    'url': '/inventoryAbnormalTrading'
                }
            ],
            'name': '成品油库存管理',
            'pid': null,
            'id': 'cpykcgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '红字信息表开具',
                'pid': 'hzxxbgl',
                'id': 'hzxxbkj',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageOperation'
            }, {
                'hide': false,
                'name': '红字信息表维护',
                'pid': 'hzxxbgl',
                'id': 'hzxxbwh',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageMaintain'
            }, {
                'hide': false,
                'name': '红字信息表处理',
                'pid': 'hzxxbgl',
                'id': 'hzxxbcl',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageDealWith'
            }, {
                'hide': false,
                'name': '未通过信息表处理',
                'pid': 'hzxxbgl',
                'id': 'wtgxxbcl',
                'xtqx': '2',
                'check': false,
                'url': '/notPassMessage'
            }, {
                'hide': false,
                'name': '红字信息表编号修正',
                'pid': 'hzxxbgl',
                'id': 'hzxxbbhxz',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageNumCorrection'
            }, {
                'hide': false,
                'name': '红字信息表状态查询',
                'pid': 'hzxxbgl',
                'id': 'hzxxbztcx',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageInquiry'
            }, {
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '按税务机关统计',
                    'pid': 'hzxxbzttj',
                    'id': 'aswjgtj',
                    'xtqx': '2',
                    'check': false,
                    'url': '/redMessageStatisticsSwjg'
                }, {
                    'hide': false,
                    'name': '按企业统计',
                    'pid': 'hzxxbzttj',
                    'id': 'aqytj',
                    'xtqx': '2',
                    'check': false,
                    'url': '/redMessageStatisticsQy'
                }, {
                    'hide': false,
                    'name': '存根联明细销单情况统计',
                    'pid': 'hzxxbzttj',
                    'id': 'cglmxxdqk',
                    'xtqx': '2',
                    'check': false,
                    'url': '/redMessageStatisticsStubCouplet'
                }],
                'name': '红字信息表状态统计',
                'pid': 'hzxxbgl',
                'id': 'hzxxbzttj',
                'xtqx': '2',
                'check': false,
                'url': '#'
            }, {
                'hide': false,
                'name': '红字信息表日志查询',
                'pid': 'hzxxbgl',
                'id': 'hzxxbrzcx',
                'xtqx': '2',
                'check': false,
                'url': '/redMessageLogInquiry'
            }],
            'name': '红字信息表管理',
            'pid': null,
            'id': 'hzxxbgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'children': [{
                    'hide': false,
                    'name': '纳税人发行信息查询',
                    'pid': 'fxqkcx',
                    'id': 'nsrfxxxcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/nsrPublishInfo'
                }, {
                    'hide': false,
                    'name': '纳税人档案信息查询',
                    'pid': 'fxqkcx',
                    'id': 'nsrdaxxcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/nsrRecordInfo'
                }, {
                    'hide': false,
                    'name': '发行变更记录查询',
                    'pid': 'fxqkcx',
                    'id': 'fxbgjlcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/publishChangeRecordQuery'
                }, {
                    'hide': false,
                    'name': '税控设备使用情况统计汇总',
                    'pid': 'fxqkcx',
                    'id': 'sbsyqktj',
                    'xtqx': '2',
                    'check': false,
                    'url': '/equipmentSummary'
                }, {
                    'hide': false,
                    'name': '税控设备使用情况明细',
                    'pid': 'fxqkcx',
                    'id': 'sbsyqkmx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/equipmentDetail'
                }, {
                    'hide': false,
                    'name': '税控设备发行信息查询',
                    'pid': 'fxqkcx',
                    'id': 'sksbfxxxcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/equipPublishInfo'
                }],
                'name': '发行情况查询',
                'pid': 'cxtj',
                'id': 'fxqkcx',
                'xtqx': '2',
                'check': false,
                'url': '#'
            },
                {
                    'hide': false,
                    'name': '购票信息查询',
                    'pid': 'cxtj',
                    'id': 'gpxxcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/invoiceBuyMessageInquiry'
                },
                {
                    'hide': false,
                    'name': '审核申请记录查询',
                    'pid': 'cxtj',
                    'id': 'gpxxcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/auditApplirecordQuery'
                },
                {
                    'hide': false,
                    'children': [{
                        'hide': false,
                        'name': '报税情况查询',
                        'pid': 'cbqkcx',
                        'id': 'bsqkcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/taxStateInquiry'
                    }, {
                        'hide': false,
                        'name': '发票汇总信息查询',
                        'pid': 'cbqkcx',
                        'id': 'fphzxxcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/allInvoiceInquiry'
                    }, {
                        'hide': false,
                        'name': '发票明细查询',
                        'pid': 'cbqkcx',
                        'id': 'fpmxqkcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/invoiceDetailInquiry'
                    }],
                    'name': '抄报情况查询',
                    'pid': 'cxtj',
                    'id': 'cbqkcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '#'
                }, {
                    'hide': false,
                    'children': [{
                        'hide': false,
                        'name': '认证发票查询',
                        'pid': 'hzxxbcx',
                        'id': 'rzcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/queryValidateInvoice'
                    }, {
                        'hide': false,
                        'name': '认证发票统计',
                        'pid': 'hzxxbcx',
                        'id': 'rzfptj',
                        'xtqx': '2',
                        'check': false,
                        'url': '/statisticsValiInvoice'
                    }, {
                        'hide': false,
                        'name': '逾期认证发票查询',
                        'pid': 'hzxxbcx',
                        'id': 'yqrzcx',
                        'xtqx': '2',
                        'check': false,
                        'url': '/overdueQueryValidateInvoice'
                    }, {
                        'hide': false,
                        'name': '逾期认证发票统计',
                        'pid': 'hzxxbcx',
                        'id': 'yqrzfptj',
                        'xtqx': '2',
                        'check': false,
                        'url': '/overdueStatisticsValiInvoice'
                    }],
                    'name': '发票认证查询',
                    'pid': 'cxtj',
                    'id': 'hzxxbcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '#'
                },
                {
                    name: '企业版本号查询',
                    url: '/enterpriseVersionQuery'
                },
                {
                    'hide': false,
                    'name': '一体化变更查询',
                    'pid': 'cxtj',
                    'id': 'ythbgcx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/integratedChangeQuery'
                }
            ],
            'name': '查询统计',
            'pid': null,
            'id': 'cxtj',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '税控设备应用维护',
                'pid': 'sksbyywh',
                'id': 'sksbyy',
                'xtqx': '2',
                'check': false,
                'url': '/equipmentMaintenance'
            }],
            'name': '税控设备应用监测',
            'pid': null,
            'id': 'sksbyywh',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '基准版本号维护',
                'pid': 'zjjzbbhwh',
                'id': 'jzbbhwh',
                'xtqx': '2',
                'check': false,
                'url': '/mainVersionMaintenance'
            }],
            'name': '总局基准版本号维护',
            'pid': null,
            'id': 'zjjzbbhwh',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '基准版本号维护',
                'pid': 'sjjzbbhwh',
                'id': 'sjzbbh',
                'xtqx': '2',
                'check': false,
                'url': '/proVersionMaintenance'
            }],
            'name': '省局基准版本号维护',
            'pid': null,
            'id': 'sjjzbbhwh',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '税控服务评价查询',
                'pid': 'zjfwpjgl',
                'id': 'skfwpjgl',
                'xtqx': '2',
                'check': false,
                'url': '/queryServiceEvaluation'
            }],
            'name': '总局服务评价管理',
            'pid': null,
            'id': 'zjfwpjgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '税控服务评价查询',
                'pid': 'sjfwpjgl',
                'id': 'sjskfwpj',
                'xtqx': '2',
                'check': false,
                'url': '/proQueryServiceEvaluation'
            }],
            'name': '省局服务评价管理',
            'pid': null,
            'id': 'sjfwpjgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '系统工具下载',
                'pid': 'xtgj',
                'id': 'xtgjxz',
                'xtqx': '2',
                'check': false,
                'url': '/systemToolsDownload'
            }],
            'name': '系统工具管理',
            'pid': null,
            'id': 'xtgj',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '应用类型管理',
                'pid': 'zjkxfwgl',
                'id': 'yylxgl',
                'xtqx': '2',
                'check': false,
                'url': '/appTypeManagement'
            }, {
                'hide': false,
                'name': '厂商管理',
                'pid': 'zjkxfwgl',
                'id': 'csgl',
                'xtqx': '2',
                'check': false,
                'url': '/vendorManagement'
            }, {
                'hide': false,
                'name': '应用及版本管理',
                'pid': 'zjkxfwgl',
                'id': 'yybbgl',
                'xtqx': '2',
                'check': false,
                'url': '/appAndVersionManagement'
            }, {
                'hide': false,
                'name': '硬件设备管理',
                'pid': 'zjkxfwgl',
                'id': 'yjsbgl',
                'xtqx': '2',
                'check': false,
                'url': '/equipManagement'
            },
                {
                    'hide': false,
                    'name': '策略管理',
                    'pid': 'zjkxfwgl',
                    'id': 'clgl',
                    'xtqx': '2',
                    'check': false,
                    'url': '/StrategyManagement'
                },
                {
                    'hide': false,
                    'name': '版本分析',
                    'pid': 'zjkxfwgl',
                    'id': 'bbfx',
                    'xtqx': '2',
                    'check': false,
                    'url': '/versionAnalysis'
                }],
            'name': '总局可信任服务管理',
            'pid': null,
            'id': 'zjkxfwgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '应用版本查看',
                'pid': 'sjkxfwgl',
                'id': 'yybbck',
                'xtqx': '2',
                'check': false,
                'url': '/appVersionView'
            }, {
                'hide': false,
                'name': '策略查看',
                'pid': 'sjkxfwgl',
                'id': 'clck',
                'xtqx': '2',
                'check': false,
                'url': '/strategyView'
            }, {
                'hide': false,
                'name': '版本分析',
                'pid': 'sjkxfwgl',
                'id': 'bbfx',
                'xtqx': '2',
                'check': false,
                'url': '/preVersionAnalysis'
            }, {
                'hide': false,
                'name': '同步可信任服务数据',
                'pid': 'sjkxfwgl',
                'id': 'tbkxrfwsj',
                'xtqx': '2',
                'check': false,
                'url': '/synTrustData'
            }, {
                'hide': false,
                'name': '电子发票服务平台备案',
                'pid': 'sjkxfwgl',
                'id': 'dzfpfwptba',
                'xtqx': '2',
                'check': false,
                url: '/invoiceServiceFilePlatform'
            }, {
                'hide': false,
                'name': '电子发票服务平台恢复备案',
                'pid': 'sjkxfwgl',
                'id': 'dzfpfwpthfba',
                'xtqx': '2',
                'check': false,
                url: '/invoiceServiceFileRecoverPlatform'
            }, {
                'hide': false,
                'name': '电子发票服务平台风险控制',
                'pid': 'sjkxfwgl',
                'id': 'dzfpfwptfxkz',
                'xtqx': '2',
                'check': false,
                url: '/invoiceServiceRiskControlPlatform'
            }, {
                'hide': false,
                'name': '电子发票服务平台恢复服务',
                'pid': 'sjkxfwgl',
                'id': 'dzfpfwpthffw',
                'xtqx': '2',
                'check': false,
                url: '/invoiceServiceRecoverServicePlatform'
            }],
            'name': '省局可信任服务管理',
            'pid': null,
            'id': 'sjkxfwgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '稀土产品库维护',
                'pid': 'zjxtgl',
                'id': 'xtcpkwh',
                'xtqx': '2',
                'check': false,
                'url': '/rarePromaintenance'
            }],
            'name': '总局稀土监控管理',
            'pid': null,
            'id': 'zjxtgl',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '稀土企业维护',
                'pid': 'sjxtqyzbwh',
                'id': 'xtqywh',
                'xtqx': '2',
                'check': false,
                'url': '/rareEnterpriseMaintenance'
            }, {
                'hide': false,
                'name': '生产计划维护',
                'pid': 'sjxtqyzbwh',
                'id': 'scjhwh',
                'xtqx': '2',
                'check': false,
                'url': '/produPlanMaintenance'
            }, {
                'hide': false,
                'name': '稀土产品名录导出',
                'pid': 'sjxtqyzbwh',
                'id': 'xtcpmldc',
                'xtqx': '2',
                'check': false,
                'url': '/rareProDirExport'
            }],
            'name': '省局稀土企业维护',
            'pid': null,
            'id': 'sjxtqyzbwh',
            'xtqx': '2',
            'check': false,
            'url': '#'
        },
        {
            'hide': false,
            'children': [{
                'hide': false,
                'name': '审计日志',
                'pid': 'log',
                'id': 'syslog',
                'xtqx': '3',
                'check': false,
                'url': '/systemLog'
            }],
            'name': '审计',
            'pid': null,
            'id': 'log',
            'xtqx': '3',
            'check': false,
            'url': '#'
        }
        ]
}