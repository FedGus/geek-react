import { RSAA, getJSON } from 'redux-api-middleware';

export const loadContacts = id => ({
    [RSAA]: {
        endpoint: `/api/contacts/${id}/`,
        method: 'GET',
        types: ['LOAD_CONTACTS_REQUEST', {
            type: 'LOAD_CONTACTS_SUCCESS', payload: async (action, state, response) => {
                const res = await getJSON(response);
                return { data: JSON.parse(res) }; //action.payload.data
            },
        }, 'LOAD_CONTACTS_FAILURE']
    }
})