import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './style.scss';

export default class My extends Component {
    state = {};

    componentDidMount() {}

    componentDidShow() {}

    config = {
        navigationStyle: 'custom'
    };

    render() {
        return (
            <View className='my-box'>
               我的
            </View >
        );
    }
}
