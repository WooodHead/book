import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { ReduxState, Record, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
    theme: ThemeName;
}

export interface Category extends Record {
    name: string;
}

export interface Product extends Record {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface Customer extends Record {
    nickname: string;
    address: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string;
    last_seen: string;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}

export interface Region extends Record {
    id:number;
    name:string;
}
export type OrderStatus = 'ordered' | 'delivered' | 'cancelled' | 'received' | 'returning' | 'returned'

export interface Order extends Record {
    id:number;
    order_sn:string;
    add_time: Date;
    confirm_time:Date;
    status: OrderStatus;
    basket: BasketItem[];
    user_id:number;
    country:number;
    provice:number;
    city:number;
    district:number;
    address:string;
    
    shipping_fee:number;
    shipping_time:Date;
    receiving_time:Date;
    return_time:Date;
    expired_time:Date;
    remark:string;
    late_fee:number;
    itemCount:number;
    postscript:string; //附言
}

export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}

export interface Invoice extends Record {
    id:number;
    user_id:number;
    date:Date;
    card_id:number;
    total:number;
}
export interface MyCard extends Record {
    id:number;
    user_id:number;
    card_id:number;
    date:Date;
    activatedDate?:Date;
    expiredDate?:Date;
    useTimes:number;
    leftTimes:number;
}
export type ReviewStatus = 'accepted' | 'pending' | 'rejected';

export interface Review extends Record {
    date: Date;
    status: ReviewStatus;
    customer_id: Identifier;
    product_id: Identifier;
}

export interface Usercard extends Record {
    name:string,
    price:number,
    remark:string,
    order:number, //顺序
    useTimes:number, //使用次数
    duration:number //周期30d, 60d,120d,360d,
    discount:number;
}

declare global {
    interface Window {
        restServer: any;
    }
}


export type FileUploadProps = {
    //显示图片
    source?:string;
    onprocessend: (filename:string) => void;
  }