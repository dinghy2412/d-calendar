import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './style.scss';

export default class Today extends Component {
    state = {};

    componentDidMount() {}

    componentDidShow() {};

    config = {
        navigationBarTitleText: 'D日历',
        // enablePullDownRefresh: true
    };

    onPullDownRefresh() {}

    onReachBottom() {}

    render() {
        return (
            <View className='Today-box'>
                <View className='calendar-box'>
                    <View className='date-box'>
                        <View className='date-num-text'>
                            2020.1.21
                        </View>
                        <View className='month-text'>
                            一月
                        </View>
                        <View className='month-en-text'>
                            JANUARY
                        </View>
                        <View className='week-text'>
                            周六
                        </View>
                    </View>
                    <View className='current-day'>
                        5
                    </View>

                    <View className='quotes-box'>
                        <View className='quotes'>
                            仅是天才不能成为作家，因为书的背后极需要作家失格。
                        </View>
                        <View className='author'>
                            ———爱献生
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}
