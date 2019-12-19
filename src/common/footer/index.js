import React, {Component} from 'react';
import {Footers} from './style';

class Footer extends Component {
    render() {
        return (
            <Footers>
                <div className='site-info'>
                    <div className='footertext'>
                        <p className='foo-logo'/>
                        <p className='name'>
                            <span>
                                Crafted with <i className='iconfont icon-heartarrow'/> by <a
                                href="http://www.bygit.cn">Mashiro</a>
                            </span>
                        </p>
                        <p>© 2019 樱花庄的白猫 沪ICP备17028213号</p>
                    </div>
                    <p className="footer-sponsor">
                        <a href="https://console.upyun.com/register/?invite=r1EuSLN-f" target={'_blank'}>
                            <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.8/img/logo/upyun.png" alt=""/>
                        </a>
                        <a href="https://www.google.com/intl/ja/analytics/" target={'_blank'}>
                            <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.8/img/logo/Google.svg" alt=''/>
                        </a>
                    </p>
                </div>
            </Footers>
        )
    }
}

export default Footer;
