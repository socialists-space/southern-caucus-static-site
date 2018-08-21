import EnglishCopy from './EnglishCopy'
import React, {Component} from 'react'
import SpanishCopy from './SpanishCopy'
import SouthernCaucusLogo from './img/Southern-Caucus-320w.png'


export default class App extends Component {

    state = {
        lang: navigator.language.slice(0, 2),
    }

    componentDidMount = () =>
        document.documentElement.lang = this.state.lang

    componentDidUpdate = () =>
        document.documentElement.lang = this.state.lang

    render = ()  =>
        <div>
            <div className='container'>
                <div className='align-c mb1 pointer small-caps'>
                    <span onClick={() => this.setState({lang: 'en'})}>English</span>
                    &nbsp;
                    <span onClick={() => this.setState({lang: 'es'})}>Español</span>
                </div>
                <header className='align-c mb2'>
                    <img src={SouthernCaucusLogo} alt='Southern Caucus Logo' />
                    <h1 className='dsa-red'>DSA Southern Caucus</h1>
                </header>
                <aside className='mb2 row'>
                    <div className='two columns'>
                        <a className='button' href='https://www.facebook.com/SouthernCaucus/'>Facebook</a>
                    </div>
                    <div className='two columns'>
                        <a className='button' href='https://twitter.com/southerncaucus'>Twitter</a>
                    </div>
                    <div className='two columns'>
                        <a className='button' href='https://goo.gl/forms/rsGgH3Kvfn7QuyVF3'>Discord</a>
                    </div>
                    <div className='two columns'>
                        <a className='button' href='mailto:southerncaucusdsa@gmail.com'>Email</a>
                    </div>
                    <div className='two columns'>
                        <a className='button' href='/bylaws.pdf'>
                            {this.state.lang === 'en' ? 'Bylaws' : 'Estatutos'}
                        </a>
                    </div>
                    <div className='two columns'>
                        <a className='button' href='https://www.gofundme.com/dsa-southern-caucus-convention' style={{paddingLeft: 23}}>
                            {this.state.lang === 'en' ? 'Convention' : 'Convención'}
                        </a>
                    </div>
                </aside>
                {this.state.lang === 'en' ? <EnglishCopy /> : <SpanishCopy />}
            </div>
        </div>

}
