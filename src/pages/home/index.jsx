import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './style.scss';

export default class Home extends Component {
    state = {};

    componentDidMount() {}

    componentDidShow() {};

    config = {
        navigationStyle: 'default',
        navigationBarTitleText: 'D日历',
        enablePullDownRefresh: true
    };

    onPullDownRefresh() {}

    onReachBottom() {}

    render() {
        return (
            <View className='home'>
                <View className='title-bar'>d日历</View>
            </View >
        );
    }
}
