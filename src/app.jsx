import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Init from './pages/init';
import configStore from './store';
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {

    componentDidNotFound() {
        Taro.reLaunch({
            url: '/pages/init/index'
        });
    }

    config = {
        pages: [
            'pages/init/index',
            'pages/home/index', // 首页
            'pages/my/index', // 我的
            'pages/today/index',
        ],
        window: {
            backgroundTextStyle: 'light',
            backgroundColor: '#f9f9f9',
            navigationBarBackgroundColor: '#f9f9f9',
            navigationBarTitleText: 'D日历',
            navigationBarTextStyle: 'black',
            navigationStyle: 'custom',
        },
        tabBar: {
            borderStyle: 'white',
            backgroundColor: '#FFFFFF',
            selectedColor: '#FF4A26',
            color: '#999999',
            list: [{
                pagePath: 'pages/home/index',
                text: '首页',
                iconPath: 'media/images/icon_home.png',
                selectedIconPath: 'media/images/icon_home_selected.png'
            }, {
                pagePath: 'pages/my/index',
                text: '我的',
                iconPath: 'media/images/icon_mine.png',
                selectedIconPath: 'media/images/icon_mine_selected.png'
            }],
        },
        requiredBackgroundModes: ['audio']
    };

    // componentDidMount() {
    //     wx.onAppRoute((res) => {
    //         console.log(res);
    //     });
    //     console.log('onready');
    // }
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Init />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById('app'));
