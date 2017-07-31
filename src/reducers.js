const reducers = (state = [], action) => {
    switch (action.type){
        case 'ADD_CARD':
            return [
                ...state,
                {
                    name:action.name,
                    email:action.email,
                    phone:action.phone,
                    role:action.role,
                    deleted:false
                }
            ]
        case 'DELETE_CARD':
            return
    }
}

export default reducers;