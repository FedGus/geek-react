import { sendMessage } from '@actions/messages';
import { BottomNavigation } from '@material-ui/core';

export default store => next => action => {
    switch (action.type) {
        case 'SEND_MSG': {
            if (action.payload.name == 'Username') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Bot', 'Hello, I am a Bot!'))
                }, 500)
            }
        }
    }
    return next(action);
}