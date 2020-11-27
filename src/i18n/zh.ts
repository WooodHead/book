import { TranslationMessages } from 'react-admin';
import chineseMessages from 'ra-language-chinese';

const customChineseMessages: TranslationMessages = {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '配置',
        language: '语言',
        theme: {
            name: '风格',
            light: '亮色',
            dark: '暗色',
        },
        dashboard: {
            monthly_revenue: '每月营收',
            month_history: '30 营收历史',
            new_orders: '新订单',
            pending_reviews: '未处理评论',
            all_reviews: '查看评论',
            new_customers: '新客户',
            all_customers: '查看客户',
            pending_orders: '未处理订单',
            order: {
                items:
                    'by %{customer_name}, 1 张 |||| by %{customer_name}, %{nb_items} 张',
            },
            welcome: {
                title: '欢迎使用绘本借阅系统',
                subtitle:
                    "书籍时人类进步的阶梯。同学们，请爱护书籍，多看书.",
               
            },
        },
        menu: {
            sales: '销售',
            catalog: '产品',
            customers: '客户',
            configuraion:'配置'
        },
    },
    resources: {
        customers: {
            name: '会员',
            fields: {
                nickname: '别名',
                commands: '订单',
                first_seen: '初次访问',
                groups: '分组',
                last_login_time: '最近访问',
                last_login_time_gte: '最近访问',
                total_spent: '总消费',
                password: '密码',
                confirm_password: '确认密码',
                latest_purchase:'最近消费',
                stateAbbr: '州',
                mobile:'手机号',
                birthday:'生日',
                address:'地址',
                zipcode:'邮编'
            },
            filters: {
                last_visited: '上次访问',
                today: '今天',
                this_week: '本周',
                last_week: '上周',
                this_month: '本月',
                last_month: '上月',
                earlier: '更早',
                has_ordered: '已购买',
                has_newsletter: '已订阅',
                group: '分类',
                keyword: '关键字'
            },
            fieldGroups: {
                identity: '会员信息',
                address: '地址',
                stats: '分类',
                history: '历史',
                password: '密码',
                change_password: '密码操作',
            },
            page: {
                delete: '会员删除',
            },
            errors: {
                password_mismatch:
                    '确认密码和密码不一样.',
            },
        },
        commands: {
            name: '借阅',
           
            amount: '1 order |||| %{smart_count} orders',
            title: '订单 %{reference}',
            fields: {
                nb_items:'绘本数量',
                order_sn:'订单编号',
                add_time:'下单日期',
                address: '地址',
                customer_id: '客户',
                date_gte: '开始日期',
                date_lte: '结束日期',
                total_gte: '最小金额',
                status: '状态',
                returned: '退款',
                shipping_time:'发货日期',
                receiving_time:'收货日期',
                return_time:'实际还书日期',
                expired_time:'过期日期',
                late_fee:'滞纳金',
                order_status: '订单状态',
                basket:{
                    name:'书名',
                    quantity:'数量',
                    ISBN:'ISBN',
                    author:'作者'
                }
            },
            section: {
                order: '订单',
                customer: '会员',
                shipping_address: '发货地址',
                items: '明细',
                total: '总费用',
            },
        },
        invoices: {
            name: '账单',
            fields: {
                date: '账单日期',
                customer_id: '会员',
                card_id: '会员卡',
                date_gte: '开始日前',
                date_lte: '结束日前',
                total_gte: '最小费用',
                cardname: '卡名称',
                total:'金额'
            },
        },
        products: {
            name: '图书',
            productName:'书名',
            primary_pic_url:'主图',
            list_pic_url:'缩微图',
            category:'分类',
            ISBN:'书号',
            author:'作者',
            publisher:'出版社',
            stock_location:'库存位置',
            retail_price:'售价',
            stock:'库存数量',
            hot:'热门',
            publishdate:'出版时间',
            new:'新书',
            available:'可用',
            ageRange:'年龄段',
            fields: {
                category_id: '类别',
                height_gte: '最小高度',
                height_lte: '最大高度',
                height: '高度',
                image: '图片',
                price: '价格',
                name: '名称',
                sales: '销售',
                stock_lte: '库存小于',
                stock: '库存',
                thumbnail: '缩微图',
                width_gte: '最小宽度',
                width_lte: '最大宽度',
                width: '宽度',
            },
            tabs: {
                image: '图片',
                details: '详情',
                description: '说明',
                reviews: '评论',
            },
            filters: {
                categories: '分类',
                stock: '库存',
                no_stock: '缺货',
                low_stock: '1 - 9 个',
                average_stock: '10 - 49 个',
                enough_stock: '50 个 & 更多',
                sales: '销售',
                best_sellers: '热销',
                average_sellers: '中销',
                low_sellers: '低销',
                never_sold: '零销',
            },
        },
        categories: {
            name: '图书分类',
            fields: {
                products: '图书',
            },
        },
        mycards: {
            name: '卡记录',
            fields: {
                date: '生成日期',
                activateDate:'激活日期',
                expiredDate:'过期日期',
                isValid:'是否有效',
                useTimes:'最大使用次数',
                leftTimes:'剩余次数',
                card:'卡名称',
            },
        },
        usercards: {
            name: '会员卡',
            fields: {
                orderNumber: '顺序',
                name: '名称',
                remark: '说明',
                price: '价格',
                useTimes: '最大使用次数',
                duration:'有效天数',
                discount_price:'折扣价'
            },
        },
        reviews: {
            name: '用户评论',
            amount: '1 review |||| %{smart_count} reviews',
            relative_to_poster: 'Review on poster',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: '会员分类',
            fields: {
                customers: '会员',
                name: '名称',
            },
            data: {
                compulsive: '重度用户',
                ordered_once: '下过一次单',
                regular: '老客户',
                returns: '退货用户',
                reviewer: '评论用户',
            },
        },
        agesegments: {
            
            data: {
                under3: '3岁以下',
                between3and7: '3-7岁',
                between7and10: '7-10岁',
                above10: '10岁以上',
               
            },
        },
    },
};

export default customChineseMessages;
