import produce from 'immer'

export const setValue = (k1: string) => (state: any, payload: any) => {
    return produce(state, (draftState: any) => {
        draftState[k1] = payload[k1]
    })
}

export const delValue = (k1: string, df: any) => (state: any) => {
    return produce(state, (draftState: any) => {
        draftState[k1] = df
    })
}

export const setList =
    (k1: string, k2 = 'id') =>
    (state: any, payload: any) => {
        return produce(state, (draftState: any) => {
            draftState[k1] = {}
            for (let i = 0; i < payload[k1].length; i++) {
                draftState[k1][payload[k1][i][k2]] = payload[k1][i]
            }
        })
    }

export const addList =
    (k1: string, k2 = 'id') =>
    (state: any, payload: any) => {
        return produce(state, (draftState: any) => {
            for (let i = 0; i < payload[k1].length; i++) {
                draftState[k1][payload[k1][i][k2]] = payload[k1][i]
            }
        })
    }

export const delList =
    (k1: string, k2 = 'id') =>
    (state: any, payload: any) => {
        return produce(state, (draftState: any) => {
            for (let i = 0; i < payload[k1].length; i++) {
                delete draftState[k1][payload[k1][i][k2]]
            }
        })
    }

export const reset = (INITIAL_STATE: any) => {
    const _state = JSON.parse(JSON.stringify(INITIAL_STATE))

    return (state: any) =>
        produce(state, (draftState: any) => {
            Object.assign(draftState, _state)
        })
}
