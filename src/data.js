export default {
  reviews:[],
  categories:[
    {
      id:1,
      name:'3~6岁',
      img_url:'',
    },
    {
      id:2,
      name:'6~8岁',
      img_url:'',
    },
    {
      id:3,
      name: '8~12岁',
      img_url:''
    } 
  ],
  customers:[
    {
      id:1,
      nickname:'scott',
      avatar:'',
      email:'6348816@qq.com',
      mobile:'18938919024',
      address:'深圳市龙岗区',
      zipcode:'518011',
      last_seen:'2020-11-16 10:05',
      nb_commands:3, //消费数量
      total_spent:500,//总的消费
      latest_purchase:'2020-1-1',
      has_newsletter:false,
      segments:'Regular'
    }
  ],
  products:[
    {
      id:1,
      ISBN:'1234567890',
      name:'随机漫步的傻瓜',
      retail_price:0,
      category_id:1,
      stock:100,
      sell_volume:0,
      author:'scott',
      publisher:'中信出版',
      stock_location:'A1205',
      is_show:true,//是否下架
      primary_pic_url:'https://marmelab.com/posters/water-7.jpeg',
      list_pic_url:'https://marmelab.com/posters/water-7.jpeg',
      goods_desc:'Ipsa et sint. A atque pariatur animi impedit consequatur neque. Aut assumenda laboriosam sint suscipit dolorem delectus consectetur ullam. Minus quas odit.'
    }
  ],
  commands:[
    {
      id:1,
      order_sn:'123456',
      add_time:'2020-11-4',
      confirm_time:'2020-11-4',
      user_id:1,
      status: 'ordered', //0:新订单(ordered),1:已发货(delivered)，
                        //2.已收货(received),3:开始还书(returning), 4.已还书(returned),5.订单已取消(cancel)
      country:0,
      province:2,
      city:3,
      district:2416,
      address:'九州家园',
      mobile:'18938919024',
      shipping_fee:0,
      shipping_time:'2020-11-8', //发货时间
      receiving_time:'2020-11-9', //收货时间
      return_time:'2020-12-11', //还书时间
      expired_time:'2020-12-22', //还书过期时间, 已收货时间开始计时
      remark:'',//用户备注
      late_fee:0, //滞纳金
      itemCount:10,//借书数量
      basket:[{product_id:1,quantity:1}]
    }
  ],
  region:[
    {
      id:2,
      name:'广东省'
    },
    {
      id:3,
      name:'深圳市'
    },
    {
      id:2416,
      name:'龙岗区'
    }
  ],
  invoices:[
    {
      id:1,
      user_id:1,
      date:'2020-11-1',
      card_id:1,
      total:9.9
    },
    {
      id:2,
      user_id:1,
      date:'2020-11-2',
      card_id:2,
      total: 299
    }
  ],
  mycards:[
    {
      id:1,
      user_id:1,
      card_id:1,
      date:'2020-11-4', //购买日期
      activateDate:'2020-11-5', //激活日期
      isValid: false,
      expiredDate:'2020-12-5', //
      useTimes:0, //卡实际次数，0表示不限制次数
      leftTimes:5,//次卡还剩多少次
    }
  ],
  usercards : [
    {
      id:1,
      order: 0,
      name: '体验卡',
      remark: '免费借阅',
      price: 49,
      useTimes: 1,
      duration: 30,
      discount_price: 9.9
    }, {
      id:2,
      order: 1,
      name: '不限次季卡',
      remark: '免费借阅,有效期3个月',
      price: 499,
      useTimes: 0, //0表示不限制次数
      duration: 90,
      discount_price:299
    }, {
      id:3,
      order: 2,
      name: '不限次年卡',
      remark: '免费借阅,有效期12个月',
      price: 1699,
      useTimes: 0,
      duration: 360,
      discount_price: 799
    }, {
      id:4,
      order: 3,
      name: '3次卡',
      remark: '免费借阅,有效期3个月',
      price: 169,
      useTimes: 3,
      duration: 90,
      discount_price: 129
    }
    , {
      id:5,
      order: 3,
      name: '12次卡',
      remark: '免费借阅,有效期12个月',
      price: 699,
      useTimes: 12,
      duration: 360,
      discount_price: 399
    }
  ]
}