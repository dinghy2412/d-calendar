import Taro, {Component} from '@tarojs/taro';
import {Image} from '@tarojs/components';
import Config from 'Src/utils/config';
import './index.scss';

export default class InitPage extends Component {
    componentDidMount() {
        this.goFirstPage();
    }

    config = {
        navigationBarTitleText: 'D日历'
    };

    /**
     * @desc 初始化后跳转页面
     */
    goFirstPage = () => {
        Taro.reLaunch({
            url: Config.firstPage
        });
    };

    render() {
        return (
            <Image className='loading' src='https://cdn.kaishuhezi.com/kstory/activity_flow/image/be39fab7-c4bc-492f-b702-ecb9032264e9.gif' />
        );
    }
}

InitPage.defaultProps = {};
