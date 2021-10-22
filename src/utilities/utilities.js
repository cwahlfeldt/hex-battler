export const isInvalidAction = (action) => (
    typeof action === 'undefined' ||
    action === null ||
    action === '' ||
    action === '' ||
    typeof action !== 'object' ||
    action.type === ''
)