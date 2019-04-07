import { UPDATE_A,UPDATE_B} from '../type/types'

export const update_A = value => ({
    type:UPDATE_A,
    payload:value
})
export const update_B = value => ({
    type:UPDATE_B,
    payload:value
})