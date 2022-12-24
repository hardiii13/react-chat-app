import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed  from './components/ChatFeed';

import './App.css';

const App =() => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
               height ="100vh"
               projectID="5a2541d2-557a-45f7-88f9-500efcbe66b3"
               userName ={localStorage.getItem('username')}
               userSecret={localStorage.getItem('password')}
               renderChatFeed={(chatAppProps) => < ChatFeed {...chatAppProps}/>}
            
               />
    );
}

export default App;