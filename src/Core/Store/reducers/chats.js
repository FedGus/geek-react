import update from 'react-addons-update';

const storeChats = {
    chats: [
    ],
}

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'LOAD_CHATS_SUCCESS': {
            return update(store, {
                chats: { $set: action.payload.data }
            });
        }
        default: {
            return store;
        }
    }
};